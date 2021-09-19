import { swapNavigationMenuItem, navigate } from './navigations'
import { render } from './page-swap'

export const hookUpNavigation = () => {
    const navigationLinks = document.getElementsByClassName('navigationLink')
    Array.prototype.forEach.call(navigationLinks, (link) => {
        link.addEventListener('click', navigate)
    })
}

export const renderPath = () => {
    const currPathItems = location.pathname.split('/').slice(1)
    if (!currPathItems[0]) {
        render('home')
    } else {
        try {
            swapNavigationMenuItem(currPathItems[0])
        } catch {
            console.log('No navigation item found')
        }
        render(currPathItems)
    }
}
