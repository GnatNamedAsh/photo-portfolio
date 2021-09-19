import { render } from './page-swap'

export const navigate = (event) => {
    event.preventDefault()
    const currentLink = document.getElementById('currentLink')
    const clickedLink = event.target
    if (clickedLink.text !== 'home') {
        history.pushState({}, clickedLink.text, clickedLink.text)
    } else {
        document.title = 'home'
        history.pushState({}, 'home', '/')
    }
    currentLink.removeAttribute('id')
    clickedLink.id = 'currentLink'
    render(clickedLink.text, currentLink.text)
}

export const swapNavigationMenuItem = (navItem) => {
    const currentLink = document.getElementById('currentLink')
    const navItems = [...document.getElementsByClassName('navigationLink')]
    const newLink = navItems.find(item => item.textContent === navItem)
    currentLink.removeAttribute('id')
    newLink.id = 'currentLink'
}