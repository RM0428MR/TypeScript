import { sendMessage } from './chat.js';

// ここにコードを書きながら確認しましょう！




// 練習問題
// 問題 1
const sendButton = document.getElementById('send-btn');
if (sendButton) {
  const sendButtonElement = sendButton as HTMLButtonElement;
  sendButtonElement.addEventListener('click', (_event: MouseEvent) => {
    sendMessage();
  });
}

// 問題 2
const inputEL = document.getElementById('message-input');
const sendButton2 = document.getElementById('send-btn');

if (inputEL && sendButton2) {
  const  inputElement = inputEL as HTMLInputElement;
  const sendButton2Element = sendButton2 as HTMLButtonElement;

  const updateButtonState = () => {
    sendButton2Element.disabled = inputElement.value.trim() === '';
  };

  inputElement.addEventListener('input', (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      sendButton2Element.disabled = event.target.value.trim() === '';
    }
  });
  updateButtonState();
}
  