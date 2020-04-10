document.body.classList.add('on-top');
window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop === 0 && !document.body.classList.contains('on-top')) {
    document.body.classList.add('on-top');
  } else if(document.body.classList.contains('on-top')) {
    document.body.classList.remove('on-top');
  }
});
