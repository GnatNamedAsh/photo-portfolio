import { renderGalleryComponents } from "./gallery"

const P_CLASSES = 'altBackgroundColor altTextColor'

const deleteComponent = (root, component) => {
    const ele = root.getElementsByClassName(component)[0]
    if (ele) {
        ele.remove()
    }
}

const render404 = (root) => {
    document.title = 'not found'
    const component = document.createElement('div')
    component.className = 'notFound'
    
    const notFound = document.createElement('p')
    notFound.textContent = 'Path not found, rerouting to Home page in 10 seconds'
    notFound.className = P_CLASSES
    component.appendChild(notFound)

    root.appendChild(component)
}

export const renderAbout = async (root) => {
    document.title = 'about'
    const component = document.createElement('div')
    component.className = 'about'
    
    const paragraph = document.createElement('p')
    paragraph.textContent = 'About'
    paragraph.className = P_CLASSES
    component.appendChild(paragraph)

    root.appendChild(component)
}

export const renderContact = async (root) => {
    document.title = 'contact'
    const component = document.createElement('div')
    component.className = 'contact'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Contact'
    paragraph.className = P_CLASSES
    component.appendChild(paragraph)

    root.appendChild(component)
}

export const renderGallery = async (root) => {
    document.title = 'gallery'
    const component = document.createElement('div')
    component.className = 'gallery'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Gallery'
    paragraph.className = P_CLASSES
    component.appendChild(paragraph)
    await renderGalleryComponents(component)
    console.log('rendering gallery')
    root.appendChild(component)
}

export const renderHome = (root) => {
    const component = document.createElement('div')
    component.className = 'home'

    const paragraph = document.createElement('p')
    paragraph.textContent = 'Home'
    paragraph.className = P_CLASSES
    component.appendChild(paragraph)

    root.appendChild(component)
}

const options = {
    about: renderAbout,
    home: renderHome,
    gallery: renderGallery,
    contact: renderContact
}

export const render = async (newComponent, oldComponent) => {
    let componentItems = []
    if (typeof newComponent === 'object') {
        componentItems = newComponent.slice(1)
        newComponent = newComponent[0]
    } 
    const contentElement = document.getElementsByClassName('content')[0]
    deleteComponent(contentElement, oldComponent)
    try {
        await options[newComponent.toLowerCase()](contentElement)
    } catch (e) {
        console.error(e)
        render404(contentElement)
        setTimeout(() => {
            deleteComponent(contentElement, 'notFound')
            history.pushState({}, 'home', '/')
            document.title = 'home'
            const currentLink = document.getElementById('currentLnk')
            if (currentLink && currentLink.textContent !== 'home') {
                currentLink.removeAttribute('id')
                const menuItems = [...document.getElementsByClassName('navigationLink')]
                const homeMenuItem = menuItems.find(item => item.textContent === 'home')
                homeMenuItem.id = 'currentLink'
            }
            renderHome(contentElement)
        }, 10000)
    }
}