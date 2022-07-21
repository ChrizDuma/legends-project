const hamMenu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar-menu')

const navLogo = document.querySelector('#logo')

// display the mobile menu by targetting the "active" classes in the css code and also using the arrow function

const mobileMenu = ()=>{
  hamMenu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

// now we add an eventlistener to our hamMenu icon for some action by referncing to the function we've just created and assigned to the mobileMenu variable

hamMenu.addEventListener('click', mobileMenu)

// show active menu when scrolling

const hightlightMenu = ()=>{
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const servicesMenu = document.querySelector('#services-page')

  let scrollPos = window.scrollY
  // console.log(scrollPos)
  // adds the hignlight class to my menu items at the chosen indexes of 600, 1400 and 2345
  
  if(window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if(window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  }else if(window.innerWidth > 960 && scrollPos < 2345){
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  }

// this below is for incase the screen size is switching to the mobile size or tab size thats less than 960 innerwidth then the highlight should disappear

  if((elem && innerWidth < 960 && scrollPos < 600) || elem){
    elem.classList.remove('highlight')
  }
}

// calling the function "highlightMenu" to trigger the created events into action
window.addEventListener('scroll', hightlightMenu)
window.addEventListener('click', hightlightMenu)

// close the mobile menu when clicking on the menu items
const HideMobileMenu = ()=>{
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 768 && menuBars){
    hamMenu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
    return
  }
}

// calling the function "hideMobileMenu" to trigger the created events into action
// we are also linking the created events onto the navLogo which targets the logo in the navbar using the '#logo' id selector
menuLinks.addEventListener('click', HideMobileMenu)
navLogo.addEventListener('click', HideMobileMenu)