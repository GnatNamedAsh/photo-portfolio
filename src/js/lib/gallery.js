import LocomotiveScroll from 'locomotive-scroll'

export const renderGalleryComponents = async (root) => {
    const scrollContainer = document.createElement('main')
    scrollContainer.setAttribute('data-scroll-container', '')
    scrollContainer.className = ''
    root.appendChild(scrollContainer)
    const elements = await createImageElements(10)
    elements.forEach(img => {
        scrollContainer.appendChild(img)
    })
}

const createImageElements = async (number) => {
    const elements = new Array(number)
    for (let i = 0; i < number; ++i) {
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = `img/image-${i}.jpg`
        figure.appendChild(img)
        elements[i] = figure
    }
    return elements
}