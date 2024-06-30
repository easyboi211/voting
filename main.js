let date = document.querySelectorAll('.date');
let today = new Date();
let day = today.toDateString();
let side = document.querySelector('.side');
let sideBar = document.querySelector('.side-bar');
let sideNav = document.querySelector('.side-nav');
let dash = document.querySelector('.dash');
let chart = document.querySelector('.chart');
let home = document.querySelector('.home');
let result = document.querySelector('.result');
let candidate = document.querySelector('.candidate');
let welcome = document.querySelector('.welcome');
let logOut = document.querySelector('.log-out');
let sideText = document.querySelectorAll('.side-text');
let logoImg = document.querySelector('.logo-img');
let menuToogle = document.querySelector('.menu-toogle');
let menuToogleIcon = document.querySelector('.menu-toogle-icon');
let secondDisplay = document.querySelectorAll('.second-display');
let firstDisplay = document.querySelector('.first-display');
let pageTitle = document.querySelector('.page-title');
let accord = document.querySelectorAll('.accord');
let addDetails = document.querySelectorAll('.add-details');
let chevronDown = document.querySelectorAll('.fa-chevron-down');

let days = document.querySelectorAll('.days');
let deadline = new Date("October 14, 2023 23:59:59").getTime();
// sideBar.addEventListener('mouseenter', function(){
//     side.style.width = '25%';
//     sideText.forEach(text => {
//         text.style.display = 'block'
//     });
//     logoImg.style.width = '30%'
// })
// sideBar.addEventListener('mouseleave', function(){
//     side.style.width = '';
//     sideText.forEach(text => {
//         text.style.display = ''
//     });
//     logoImg.style.width = ''
// })
logOut.addEventListener('click', function(){
    let link = 'form.html';
    window.open(link)
    window.close()
});
let urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('name');
welcome.textContent = 'Welcome, Mr. ' + decodeURIComponent(name);
sideText[0].textContent = 'Mr. ' + decodeURIComponent(name);
date.forEach(date => {
    date.textContent = day
});
menuToogle.addEventListener('click', function(){
    if (menuToogleIcon.classList.contains('fa-bars')) {
        side.style.transform = 'translateX(0%)'
        menuToogleIcon.classList.remove('fa-bars')
        menuToogleIcon.classList.add('fa-xmark')
    }
    else if (menuToogleIcon.classList.contains('fa-xmark')) {
        side.style.transform = ''
        menuToogleIcon.classList.add('fa-bars')
        menuToogleIcon.classList.remove('fa-xmark')
    }
    else{

    }
})
chart.addEventListener('click', function(){
    dash.classList.remove('active-nav')
    chart.classList.add('active-nav')
    result.classList.remove('active-nav')
    candidate.classList.remove('active-nav')
    firstDisplay.style.display = 'none'
    secondDisplay[0].style.display = 'block'
    secondDisplay[1].style.display = ''
    secondDisplay[2].style.display = ''
    sideText[1].style.color = '#000'
    sideText[2].style.color = '#fff'
    sideText[3].style.color = ''
    sideText[4].style.color = ''
    pageTitle.textContent = 'Chart'
    welcome.textContent = '';
})
dash.addEventListener('click', function(){
    chart.classList.remove('active-nav')
    dash.classList.add('active-nav')
    result.classList.remove('active-nav')
    candidate.classList.remove('active-nav')
    firstDisplay.style.display = 'block'
    secondDisplay[0].style.display = ''
    secondDisplay[1].style.display = ''
    secondDisplay[2].style.display = ''
    sideText[2].style.color = ''
    sideText[1].style.color = '#fff'
    sideText[3].style.color = ''
    sideText[4].style.color = ''
    pageTitle.textContent = 'Dashboard'
    welcome.textContent = 'Welcome, Mr. ' + decodeURIComponent(name);
})
result.addEventListener('click', function(){
    chart.classList.remove('active-nav')
    dash.classList.remove('active-nav')
    result.classList.add('active-nav')
    candidate.classList.remove('active-nav')
    firstDisplay.style.display = 'none'
    secondDisplay[0].style.display = ''
    secondDisplay[1].style.display = ''
    secondDisplay[2].style.display = 'block'
    sideText[1].style.color = '#000'
    sideText[4].style.color = '#fff'
    sideText[3].style.color = ''
    sideText[2].style.color = ''
    pageTitle.textContent = 'Results'
    welcome.textContent = '';
})

candidate.addEventListener('click', function(){
  chart.classList.remove('active-nav')
  dash.classList.remove('active-nav')
  candidate.classList.add('active-nav')
  result.classList.remove('active-nav')
  firstDisplay.style.display = 'none'
    secondDisplay[0].style.display = ''
    secondDisplay[1].style.display = 'block'
    secondDisplay[2].style.display = ''
  sideText[1].style.color = '#000'
  sideText[3].style.color = '#fff'
  sideText[2].style.color = ''
  sideText[4].style.color = ''
  pageTitle.textContent = 'Candidate'
  welcome.textContent = '';
})
//bar
let i;
for (i = 0; i < accord.length; i++) {
    let currentChevron = chevronDown[i];
    let accordion = accord[i]
    accord[i].addEventListener("click", function() {
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = '';
            currentChevron.style.transform = ''
            accordion.style.transform = ''
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = '1rem'
            currentChevron.style.transform = 'rotate(180deg)'
            accordion.style.transform = 'scale(1.03)'
        } 
    });
}

let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = deadline - now;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days[0].textContent = day
    days[1].textContent = hour
    days[2].textContent = minutes
    days[3].textContent = seconds

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);