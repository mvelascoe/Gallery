const navMenu = document.getElementById('nav-menu'),
      navabrir = document.getElementById('nav-abrir'),
      navCerrar = document.getElementById('nav-cerrar')

if(navabrir){
   navabrir.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navCerrar){
   navCerrar.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
 }


const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')

   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('phone-menu') 
                      : header.classList.remove('phone-menu')
}

window.addEventListener('scroll', blurHeader)

    const images = [
        'storage/img/s1.jpg',  
        'storage/img/s2.jpg',  
        'storage/img/s3.jpg',
        'storage/img/s3.jpg'   
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('home-image');

    function updateImage(index) {
        // Actualiza la imagen a la de la posición especificada
        imgElement.src = images[index];
    }

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }

    // Cambia la imagen automáticamente cada 5 segundos (5000 milisegundos)
    setInterval(changeImage, 2000);