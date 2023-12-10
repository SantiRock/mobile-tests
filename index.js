const div1 = document.getElementById('div1');

const onClick = () => console.log('click');

const changeColor = () => {
    div1.style.backgroundColor = "rgb(200, 200, 100)";
}

const changeColor1 = () => {
    div1.style.backgroundColor = "rgb(100, 200, 200)"; 
}

const changeColor2 = () => {
    div1.style.backgroundColor = "rgb(100, 200, 100)"; 
}

div1.addEventListener('touchstart', changeColor);
div1.addEventListener('touchend', changeColor1)
div1.addEventListener('touchmove', changeColor2 );


