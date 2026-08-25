






// 練習問題
// 問題 1
function setupForm() {
  const emailEl = document.getElementById('email-input');
  const startBtnEl = document.getElementById('start-btn');

  if (emailEl && startBtnEl) {
    const inputElement = emailEl as HTMLInputElement;
    const buttonElement = startBtnEl as HTMLButtonElement;

    inputElement.addEventListener('input', () => {
      buttonElement.disabled = inputElement.value.trim() === '';
    });
  }
}
setupForm();
