import { swapNavigationMenuItem, navigate } from './navigations'
import { clearContent, render } from './page-swap'

export const hookUpNavigation = () => {
    const navigationLinks = document.getElementsByClassName('navigationLink')
    Array.prototype.forEach.call(navigationLinks, (link) => {
        link.addEventListener('click', navigate)
    })
    window.addEventListener('popstate', (event) => {
        const contentElement = document.getElementsByClassName('content')[0]
        clearContent(contentElement)
        renderPath()
    })
}

export const renderPath = () => {
    const currPathItems = location.pathname.split('/').slice(1)
    try {
        swapNavigationMenuItem(currPathItems[0] || 'home')
    } catch {
        console.log('No navigation item found')
    }
    const noPathItems = currPathItems[0] === ''
    const itemToRender = noPathItems ? 'home' : currPathItems
    render(itemToRender)
}
