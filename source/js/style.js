const mainNavigation = document.querySelector('.main-navigation');
const mainNavigationToggle = document.querySelector('.main-navigation__toggle');
mainNavigation.classList.remove('no-js');
mainNavigationToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainNavigation.classList.toggle('is-open');
});
