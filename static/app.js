(function navigation() {
  const main = document.querySelector('main');

  function loadPage(page) {
    main.innerHTML = '<div class="spinner"></div>';
    document.documentElement.scrollTop = 0;
    document.body.classList.add('on-top');

    return fetch(`partials/${page.file}.html`)
      .then(res => res.text())
      .then(html => {
        document.title = page.data.title;
        document.body.className = page.data.class;
        main.innerHTML = html;
        setActiveNavLink();
        if(page.file === 'people') {
          shufflePeople();
        }
      });
  }

  function setActiveNavLink() {
    const locationParts = location.href.split('/');
    const lastLocationPart = locationParts[locationParts.length - 1];
    const prevActive = document.querySelector(`nav a.active`);

    prevActive && prevActive.classList.remove('active');
    if(lastLocationPart) {
      const a = document.querySelector(`nav a[href^="${lastLocationPart}"]`);
      a && a.classList.add('active');
    }
  }

  function asyncLoad (a, page) {
    if(a && page) {
      a.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({page}, page.title, page.file === 'index' ? '/' : `${page.file}.html`);
        loadPage(page);
      });
    }
  }

  window.addEventListener('popstate', e => {
    if(e.state) {
      loadPage(e.state.page);
    }
  });

  function init() {
    const locationParts = location.href.split('/');
    const lastLocationPart = locationParts[locationParts.length - 1];
  
    fetch('pages.json')
      .then(res => res.json())
      .then(pages => {
        pages.forEach(page => {
          if(page.file === 'index') {
            asyncLoad(document.querySelector(`header h1 a`), page);
            if(!lastLocationPart) {
              history.replaceState({page}, page.title, `/`);
            }
          } else {
            asyncLoad(document.querySelector(`nav a[href^=${page.file}]`), page);
            if(lastLocationPart && lastLocationPart.indexOf(page.file) > -1) {
              history.replaceState({page}, page.title, `${page.file}.html`);
            }
          }
        });
      });  
  }

  init();
  setActiveNavLink();

})();


(function scroll() {
  document.body.classList.add('on-top');
  window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop === 0 && !document.body.classList.contains('on-top')) {
      document.body.classList.add('on-top');
    } else if(document.body.classList.contains('on-top')) {
      document.body.classList.remove('on-top');
    }
  });
})();


const shufflePeople = function people() {
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  if(document.body.classList.contains('people')) {
    const profiles = document.querySelector('.profiles'); 
    const people = document.querySelectorAll('.profiles > div');
    shuffle(new Array(people.length).fill(0).map((_, i) => i)).forEach(index => {
      profiles.appendChild(people[index]);
    });
  }
}

shufflePeople();  

