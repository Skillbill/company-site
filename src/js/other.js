
var navbar = document.querySelector("nav")

var navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if (!navbar.classList.contains("absolute")) {
        navbar.classList.remove("fixed-top")
        navbar.classList.remove("shadow-sm")
        navbar.classList.add("absolute")
      }
    } else {
      navbar.classList.add("fixed-top")
      navbar.classList.add("shadow-sm")
      navbar.classList.remove("absolute")
    }
  })
}, { rootMargin: "-40% 0%"})

navObserver.observe(document.querySelector("header"))