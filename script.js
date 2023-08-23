const btnMobile = document.getElementById('btn-mobile');
const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);

let greetingMessage;

if (currentHour >= 5 && currentHour < 12) {
  greetingMessage = 'Bom dia';
} else if (currentHour >= 12 && currentHour < 18) {
  greetingMessage = 'Boa tarde';
} else {
  greetingMessage = 'Boa noite';
}

greetingElement.textContent = `${greetingMessage}!`;

