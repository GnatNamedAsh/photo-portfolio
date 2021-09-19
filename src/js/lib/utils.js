import * as imagesLoaded from 'imagesloaded'

export const preLoadImages = async (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), resolve)
    })
}