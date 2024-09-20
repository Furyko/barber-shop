const gotoTopButton = document.getElementById('go-top-button')
const locationsForm = document.getElementById('locations-selector')
const mapIframe = document.getElementById('map-iframe')

const locationsList = [
    {
        city_name: 'Capital Federal',
        sucursal_name: 'Barbería obelisco',
        phone_number: '+54 1122334455',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.9541534115518!2d-58.38177589398746!3d-34.60379651946779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1726032734048!5m2!1ses!2sar'
    },
    {
        city_name: 'La plata',
        sucursal_name: 'Barbería de la costa',
        phone_number: '+54 1122334455',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.9541534115518!2d-58.38177589398746!3d-34.60379651946779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1726032734048!5m2!1ses!2sar'
    }
]

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

locationsForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
})

gotoTopButton.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const createButtons = () => {
    locationsList.forEach(location => {
        const city_name = location.city_name
        const sucursal_name = location.sucursal_name
        const phone_number = location.phone_number
        const iframe_url = location.iframe_url
        createButton(city_name, sucursal_name, phone_number, iframe_url)
    })
}

const createButton = (city_name, sucursal_name, phone_number, iframe_url) => {
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'col-md-6 p-2 col-lg-3'
    const button = document.createElement('button')
    button.className = 'btn btn-primary btn-lg w-100'
    button.type = 'submit'
    const cityNameContainer = document.createElement('div')
    cityNameContainer.innerText = city_name
    const localNameContainer = document.createElement('div')
    localNameContainer.classList.add('fs-6')
    localNameContainer.innerHTML = `
        <span class="material-symbols-outlined fs-6">
            content_cut 
        </span>
        ${sucursal_name}
        <span class="material-symbols-outlined fs-6">
            content_cut
        </span>
    `

    locationsForm.appendChild(buttonContainer)
    buttonContainer.appendChild(button)
    button.appendChild(cityNameContainer)
    button.appendChild(localNameContainer)
}

const startObserving = () => {
    const aboutSection = document.querySelectorAll('.transition-invisible');
    aboutSection.forEach(element => {
        console.log(element)
        observer.observe(element)
    })
}

createButtons()
startObserving()