// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

// image carousel

$(document).ready(function(){
    $('#image-carousel').slick({
       autoplay: true,
       autoplaySpeed: 3000, // Adjust the speed (in milliseconds) between slides
       dots: false, // Show navigation dots
       arrows: false // Show navigation arrows
    });
 });

 // hero text animation 

 const homeSection = document.getElementById('home');
    const typingElement = document.getElementById('typing-animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typingElement.textContent = ""; 
                typingElement.classList.add('typing');
                typeText("Barber Shop");
            }
        });
    });

    observer.observe(homeSection);

    function typeText(text) {
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    typingElement.classList.remove('typing');
                }, 500); 
            }
        }, 150); 
    }


    // responsive navbar

    const Hamburger = document.querySelector(".hamburger");
    Hamburger.onclick = function() {
        const Navbar = document.querySelector(".navbar");
        Navbar.classList.toggle("active");
    }