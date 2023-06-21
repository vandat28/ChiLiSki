function openDropdown() {
    const dropdown = document.querySelector('.dropdown')

    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open')
    } else {
        dropdown.classList.add('open')
    }
}


const activePage = window.location.pathname
const link = document.querySelectorAll('.navbar-link')


for (let i = 0; i < link.length; i++) {
    if (link[i].href.slice(link[i].href.lastIndexOf('/'), link[i].href.length) == activePage) {
        link[i].classList.add('active')
        break;
    }
}

const login = document.querySelector('.header-right-button')
const notify = document.querySelector('.header-right-icon')
const avatar = document.querySelector('.header-right-my')
const nameUser = document.querySelector('.name-user')
const avatarImg = document.querySelector('#avatar')
const test = document.querySelector('.quiz-container')
const text = document.querySelector('.text')

const cookiesArray = document.cookie.split('; ')
let check = false
let checkAvatar = false
let nameU = 'Hi, '
let avatarU = '/uploads/'
cookiesArray.forEach(e => {
    const cookie = e.split('=');
    const cookieName = cookie[0];
    const cookieValue = cookie[1];
    if (cookieName === 'username') {
        check = true
    }
    if (cookieName === 'name') {
        nameU += decodeURIComponent(cookieValue);
    }

    if (cookieName === 'avatar') {
        checkAvatar = true
        avatarU += cookieValue
    }
})

if (checkAvatar) {
    avatarImg.src = avatarU
}

if (check) {
    login.style.display = 'none'
    nameUser.innerText = nameU
} else {
    notify.style.display = 'none'
    avatar.style.display = 'none'
    test.style.display = 'none'
    text.innerHTML = 'Bé hãy nhờ ba mẹ đăng nhập để làm kiểm tra nhé <a href="/login">Đăng nhập tại đây</a>'
}

