const setupScreen = document.getElementById('setup-screen') as HTMLDivElement;
const chatScreen = document.getElementById('chat-screen') as HTMLDivElement;
const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
const messagesEl = document.getElementById('messages') as HTMLDivElement;
const messagesWrapper = document.getElementById('messages-wrapper') as HTMLDivElement;
const input = document.getElementById('message-input') as HTMLInputElement;

const botReplies: string[] = [
  'なるほど！もう少し詳しく教えてください。',
  'それは面白い考え方ですね。',
  'はい、よくわかりました！',
  '確かにそうですね！',
  '素晴らしいアイデアだと思います。',
  '他にも何か気になることはありますか？',
  'おもしろい！続けてください。',
];

function getTime(): string {
  return new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
}

function scrollToBottom(): void {
  messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
}

function showTypingIndicator(): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'message-wrapper bot';
  wrapper.innerHTML = `
    <div class="bubble typing-indicator">
      <span></span><span></span><span></span>
    </div>
  `;
  messagesEl.appendChild(wrapper);
  scrollToBottom();
  return wrapper;
}

export function appendMessage(text: string, type: 'user' | 'bot'): void {
  const wrapper = document.createElement('div');
  wrapper.className = `message-wrapper ${type}`;

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;

  const time = document.createElement('span');
  time.className = 'time';
  time.textContent = getTime();

  wrapper.appendChild(bubble);
  wrapper.appendChild(time);
  messagesEl.appendChild(wrapper);
  scrollToBottom();
}

export function sendMessage(): void {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';

  // input イベントを手動で発火して eventHandler 問題2のハンドラーに送信後の空状態を伝える
  input.dispatchEvent(new Event('input'));

  const typingEl = showTypingIndicator();

  setTimeout(() => {
    typingEl.remove();
    const reply = botReplies[Math.floor(Math.random() * botReplies.length)] ?? 'ありがとうございます！';
    appendMessage(reply, 'bot');
  }, 900 + Math.random() * 700);
}

// セットアップ画面 → チャット画面への遷移（事前実装済み）
startBtn.addEventListener('click', () => {
  setupScreen.style.display = 'none';
  chatScreen.style.display = 'flex';
  appendMessage('こんにちは！何か話しかけてみてください。', 'bot');
});

// ?skip-setup が付いている場合はセットアップ画面をスキップ（イベントハンドラーレッスン用）
if (new URLSearchParams(location.search).has('skip-setup')) {
  setupScreen.style.display = 'none';
  chatScreen.style.display = 'flex';
  appendMessage('こんにちは！何か話しかけてみてください。', 'bot');
}
