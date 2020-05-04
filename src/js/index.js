/*(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return true;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

})(jQuery); // End of use strict

*/

const buttonNavBar = document.querySelector("button.navbar-toggler")

buttonNavBar.addEventListener("click", () => {
  const expanded = buttonNavBar.getAttribute("aria-expanded")
  const navBarMobile = document.querySelector(".navbar-collapse")
  
  if (expanded === "false") {
    buttonNavBar.setAttribute("aria-expanded", true)

    navBarMobile.classList.add("show")
  } else {
    buttonNavBar.setAttribute("aria-expanded", false)
    navBarMobile.classList.remove("show")
  }
})

const anchors = Array.from(document.querySelectorAll(".navbar a"))

anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    const elementSelector = document.querySelector(anchor.getAttribute("href"))

    elementSelector.scrollIntoView()

    document.querySelector(".navbar-collapse").classList.remove("show")
    document.querySelector(".navbar-toggler").setAttribute("aria-expanded", false)
  })
})

var activeNavLinks = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.id)
      const sectionId = entry.target.id;
      
      Array.from(document.querySelectorAll(".navbar a")).forEach(a => {
        a.classList.remove("active")
      })

      document.querySelector(`a[href="#${sectionId}"]`).classList.add("active")
    }
  })
}, { rootMargin: "-30% 0%"})

Array.from(document.querySelectorAll("section")).forEach(section => {
  activeNavLinks.observe(section)
})


const shufflePeople = function people() {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const profiles = document.querySelector('.profiles'); 
  const people = document.querySelectorAll('.profiles > div');
  shuffle(new Array(people.length).fill(0).map((_, i) => i)).forEach(index => {
    profiles.appendChild(people[index]);
  });
}

shufflePeople();  

var navbar = document.querySelector("nav")

var navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if (!navbar.classList.contains("absolute")) {
        navbar.classList.remove("fixed-top")
        navbar.classList.remove("shadow-sm")
        navbar.classList.remove("bg-light")
        navbar.classList.remove("fade-in")
        navbar.classList.add("absolute")
      }
    } else {
      navbar.classList.add("fade-in")
      navbar.classList.add("fixed-top")
      navbar.classList.add("shadow-sm")
      navbar.classList.add("bg-light")
      navbar.classList.remove("absolute")
    }
  })
}, { rootMargin: "-40% 0%"})

navObserver.observe(document.querySelector("header"))