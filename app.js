let paragraphe = document.getElementsByTagName('p');

function randomNumber() {
    let number = Math.floor(Math.random() * 100);
    return number;
}

let i = 0

while (i < paragraphe.length) {
    paragraphe[i].innerText = randomNumber().toString()
    i++;
}

