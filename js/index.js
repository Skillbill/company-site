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
});

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

var logo_home = document.querySelector(".navbar-brand-home")

var navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!navbar.classList.contains("absolute")) {
        navbar.classList.remove("fixed-top")
        navbar.classList.remove("shadow-sm")
        navbar.classList.remove("bg-light")
        navbar.classList.remove("fade-in")
        navbar.classList.add("absolute")
        logo_home.classList.remove("hidden")
      }
    } else {
      navbar.classList.add("fade-in")
      navbar.classList.add("fixed-top")
      navbar.classList.add("shadow-sm")
      navbar.classList.add("bg-light")
      navbar.classList.remove("absolute")
      logo_home.classList.add("hidden")
    }
  })
})

navObserver.observe(document.querySelector("#spacer"))