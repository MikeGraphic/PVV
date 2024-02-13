var button = document.getElementById('myButton');
var speed = 5;
var directionX = 1;
var directionY = 1;

document.onmousemove = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var buttonRect = button.getBoundingClientRect();
    var dx = x - (buttonRect.left + buttonRect.width / 2);
    var dy = y - (buttonRect.top + buttonRect.height / 2);
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
        moveButton(dx, dy);
    }
};

button.onmouseover = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var buttonRect = button.getBoundingClientRect();
    var dx = x - (buttonRect.left + buttonRect.width / 2);
    var dy = y - (buttonRect.top + buttonRect.height / 2);
    moveButton(dx, dy);
};

function moveButton(dx, dy) {
    var newX = button.offsetLeft - dx * speed * directionX;
    var newY = button.offsetTop - dy * speed * directionY;

    if (newX < 0 || newX > window.innerWidth - button.offsetWidth) {
        directionX = -directionX;
    }
    if (newY < 0 || newY > window.innerHeight - button.offsetHeight) {
        directionY = -directionY;
    }

    newX = Math.max(0, Math.min(newX, window.innerWidth - button.offsetWidth));
    newY = Math.max(0, Math.min(newY, window.innerHeight - button.offsetHeight));

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

document.getElementById('yes').addEventListener('click', function (event) {
    document.getElementById('question').textContent = 'Обожаю тебя <3 Ты лучшая из всех, с кем я когда либо был знаком<3';
    document.getElementById('question').style.left = '0';
    document.getElementById('PS').style.display = 'block';
    document.getElementById('myButton').style.display = 'none';
    document.getElementById('yes').style.display = 'none';
});

document.getElementById('myButton').addEventListener('click', function () {
    document.title = 'Error 404';
    document.body.innerHTML = '';
    document.body.style.background = 'white';
    var errorText = document.createElement('p');
    errorText.style.fontFamily = 'Calibri';
    errorText.textContent = 'Error 404: Даю вторую попытку';
    document.body.appendChild(errorText);
    throw new Error('Даю вторую попытку');
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   alert('Я же говорил открывать с ноута)');
   window.location.href = 'about:blank'; 
}
