






// 練習問題
// 問題 1
function setupForm() {
  const emailEl = document.getElementById('email-input');
  const startBtnEl = document.getElementById('start-btn');
  const setupScreen = document.getElementById('setup-screen');
  const chatScreen = document.getElementById('chat-screen');

  if (emailEl && startBtnEl && setupScreen && chatScreen) {
    const inputElement = emailEl as HTMLInputElement;
    const buttonElement = startBtnEl as HTMLButtonElement;
    const setupScreenElement = setupScreen as HTMLElement;
    const chatScreenElement = chatScreen as HTMLElement;

    inputElement.addEventListener('input', () => {
      buttonElement.disabled = inputElement.value.trim() === '';
    });

    buttonElement.addEventListener('click', () => {
      setupScreenElement.style.display = 'none';
      chatScreenElement.style.display = 'flex';
    });
  }
}

setupForm();
