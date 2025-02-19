document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is loaded and running!');
  const message = document.createElement('p');
  message.textContent = 'This message is added by JavaScript.';
  document.body.appendChild(message);
});
