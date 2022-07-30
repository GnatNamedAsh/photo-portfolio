import LocomotiveScroll from 'locomotive-scroll'

export const renderGalleryComponents = async (root) => {
    const scrollContainer = document.createElement('main')
    scrollContainer.setAttribute('data-scroll-container', '')
    scrollContainer.className = 'galleryContainer'
    const itemContainer = document.createElement('div')
    itemContainer.className = 'galleryItemContainer'
    scrollContainer.appendChild(itemContainer)
    const elements = await createImageElements(10)
    elements.forEach(img => {
        scrollContainer.appendChild(img)
    })
    root.appendChild(scrollContainer)
}

const createImageElements = async (number) => {
    const elements = new Array(number)
    for (let i = 0; i < number; ++i) {
        const figure = document.createElement('figure')
        figure.className = 'galleryImageContainer'
        const img = document.createElement('img')
        img.className = 'galleryImage'
        img.src = `img/image-${i}.jpg`
        figure.appendChild(img)
        elements[i] = figure
    }
    return elements
}