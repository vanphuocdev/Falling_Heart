let fallingHeart = document.getElementById('container');
let count = 100;

for(var i = 0; i < count; i++)
{
    let leftHeart = Math.floor(Math.random () * fallingHeart.clientWidth);
    let topHeart = Math.floor(Math.random () * fallingHeart.clientHeight);
    let timeHeart = Math.floor((Math.random () * 5)+5);
    let sizeHeart = Math.floor(Math.random () * 60);
    let blurHeart = Math.floor(Math.random () * 5);
    console.log(leftHeart);
    let animationHeart = document.createElement('div');
    animationHeart.classList.add('heart');
    animationHeart.style.left = leftHeart + 'px';
    animationHeart.style.top = topHeart + 'px';
    animationHeart.style.animationDuration = timeHeart + 's';
    animationHeart.style.width = sizeHeart + 'px';
    animationHeart.style.height = sizeHeart + 'px';
    animationHeart.style.filter = 'blur(' + blurHeart + 'px)';
    fallingHeart.appendChild(animationHeart);
}