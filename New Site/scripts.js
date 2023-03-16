document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#theme-switch');
  
    themeSwitch.addEventListener('change', () => {
      document.body.classList.toggle('light-mode');
    });
  });
  