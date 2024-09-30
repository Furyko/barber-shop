const gotoTopButton = document.getElementById('go-top-button')
const galleryImages = document.querySelectorAll('.pop')
const imagePreview = document.getElementById('imagepreview')
const galleryModal = new bootstrap.Modal(document.getElementById('imagemodal'))

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const element = entry.target
        if (entry.isIntersecting) {
            element.classList.replace('transition-invisible','transition-visible')
        } else {
            element.classList.replace('transition-visible','transition-invisible')
        }
    })
}, {
    threshold: 0.2
})

gotoTopButton.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

galleryImages.forEach((photo) => {
    photo.addEventListener('click', (e) => {
        imagePreview.src = e.target.src
        galleryModal.show()
    })
})

const startObserving = () => {
    const aboutSection = document.querySelectorAll('.transition-invisible');
    aboutSection.forEach(element => {
        console.log(element)
        observer.observe(element)
    })
}

startObserving()