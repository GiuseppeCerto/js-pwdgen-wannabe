// 1. chiedere nome all'utente

let firstName = prompt('Quale è il tuo nome?');
console.log(firstName);

// 2. chidere cognome all'utente

let surName = prompt('Quale è il tuo cognome?');
console.log(surName);

// 3. chiedere colore preferito

let  color = prompt('E il tuo colore preferito?');
console.log(color);

// 4. chiedere un numero

let number = prompt('Dimmi un numero da 1 a 100');
console.log(number);

// 5. Creare un messaggio

let message = ('Qusta è la tua sicurissima password');

// Creare una password con concatenamenti tramite js

const password = document.getElementById('passwordCreated');

password.innerHTML = message + ' ' + '=' + ' ' + firstname + surname + color + number
console.log(password);