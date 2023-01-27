const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btnElement = document.getElementById('btn');
const colorElement = document.querySelector('.color');

btnElement.addEventListener('click', () => {
    //Get number random between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    colorElement.textContent = colors[randomNumber];
});

//Get random number function
function getRandomNumber(){
    //Math.floor redondea hacia abajo siempre
    return Math.floor(Math.random() * colors.length); //The random number will not pass total index of array
}

