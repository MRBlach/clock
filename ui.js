document.body.style.height = '100vh';
document.body.style.backgroundImage = "url('images/earth.webp')";
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.position = 'relative';


document.querySelector('.navi').innerHTML = `
<nav class="navbar">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
  <img class="navbar-toggler-icon" src="images/burger.png"></img>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a class="nav-link" id="red">Red <span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="green" data-toggle="collapse" data-target=".navbar-collapse.show">Green <span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="blue" data-toggle="collapse" data-target=".navbar-collapse.show">Blue <span class="sr-only"></span></a>
    </li>
</div>
</nav>
`;
document.querySelector('.navi').style.position = 'absolute';
document.querySelector('.navi').style.top = '5px';
document.querySelector('ul').style.margin = '10px';

const clock = document.getElementById('clock');
clock.style.textAlign = 'right';  
clock.style.fontSize='30px';
clock.style.margin = '15px';
clock.style.fontFamily = 'Big Shoulders Stencil Text, cursive';
clock.style.color='white';
clock.style.textShadow = '5px 5px 8px #ff0000, -5px -5px 8px #ff0000, 5px -5px 8px #ff0000, -5px 5px 8px #ff0000';

document.querySelector('#red').addEventListener('click', red);
document.querySelector('#red').style.color = '#ff0000';
document.querySelector('#red').style.cursor = "pointer";

document.querySelector('#green').addEventListener('click', green);
document.querySelector('#green').style.color = '#00fa11';
document.querySelector('#green').style.cursor = "pointer";

document.querySelector('#blue').addEventListener('click', blue);
document.querySelector('#blue').style.color = '#0036fa';
document.querySelector('#blue').style.cursor = "pointer";


function red(e) {
  clock.style.color='white';
clock.style.textShadow = '5px 5px 8px #ff0000, -5px -5px 8px #ff0000, 5px -5px 8px #ff0000, -5px 5px 8px #ff0000';
}


function green(e) {
  clock.style.color='white';
clock.style.textShadow = '5px 5px 8px #00fa11, -5px -5px 8px #00fa11, 5px -5px 8px #00fa11, -5px 5px 8px #00fa11';
}

function blue(e) {
  clock.style.color='white';
clock.style.textShadow = '5px 5px 8px #0036fa, -5px -5px 8px #0036fa, 5px -5px 8px #0036fa, -5px 5px 8px #0036fa';
}





const mediaQuery = window.matchMedia('(min-width: 768px)');

function resizeContent(e) {
  if(mediaQuery.matches) {
    clock.style.fontSize='50px';
    document.querySelector('.navbar-toggler-icon').style.width = '55px';
    document.querySelector('.navbar-toggler-icon').style.height = '55px';
    document.querySelector('ul').style.margin = '30px';
    clock.style.margin = '30px';
    
  } else {
    clock.style.fontSize='30px';
    document.querySelector('.navbar-toggler-icon').style.width = '25px';
    document.querySelector('.navbar-toggler-icon').style.height = '25px';
    document.querySelector('ul').style.margin = '10px';
    clock.style.margin = '15px';
  }
}

mediaQuery.addEventListener('resize', resizeContent);
resizeContent(mediaQuery);