import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'

const DB_PATH = join(process.cwd(), 'src/server/db.json')
const DB_INITIAL_PATH = join(process.cwd(), 'src/server/db.initial.json')

if (!existsSync(DB_PATH)) {
  copyFileSync(DB_INITIAL_PATH, DB_PATH)
}

type Task = {
  id: number
  title: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in_progress' | 'done'
}

function readTasks(): Task[] {
  return JSON.parse(readFileSync(DB_PATH, 'utf-8')) as Task[]
}

function writeTasks(tasks: Task[]): void {
  writeFileSync(DB_PATH, JSON.stringify(tasks, null, 2))
}

const app = new Hono()

app.get('/api/tasks', (c) => {
  return c.json(readTasks())
})

app.post('/api/tasks', async (c) => {
  const body = await c.req.json<{ title: string; priority: string }>()
  const { title, priority } = body

  if (!title || title.trim() === '') {
    return c.json({ message: 'タイトルを入力してください' }, 400)
  }

  const tasks = readTasks()
  const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0
  const newTask: Task = {
    id: maxId + 1,
    title: title.trim(),
    priority: priority as Task['priority'],
    status: 'todo',
  }

  tasks.push(newTask)
  writeTasks(tasks)

  return c.json(newTask, 201)
})

serve({ fetch: app.fetch, port: 3001 }, () => {
  console.log('Server running on http://localhost:3001')
})
