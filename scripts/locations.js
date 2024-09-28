const locationsElement = document.getElementById('locations-selector')
const mapIframe = document.getElementById('map-iframe')
const sucursalInfoName = document.getElementById('sucursal-info-name')
const sucursalInfoPhone = document.getElementById('sucursal-info-phone')

const locationsList = [
    {
        id: 0,
        city_name: 'Capital Federal',
        sucursal_name: 'Barbería obelisco',
        phone_number: '+54 1122334456',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.9541534115518!2d-58.38177589398746!3d-34.60379651946779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1726032734048!5m2!1ses!2sar'
    },
    {
        id: 1,
        city_name: 'La plata',
        sucursal_name: 'Barbería de la costa',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.9541534115518!2d-58.38177589398746!3d-34.60379651946779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1726032734048!5m2!1ses!2sar'
    }
]

locationsElement.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {
        const button = e.target
        const sucursal_id = button.getAttribute('data-id')

        const selectedSucursal = locationsList.filter(sucursal => sucursal.id == sucursal_id)[0]
        mapIframe.src = selectedSucursal.iframe_url
        sucursalInfoName.innerText = selectedSucursal.sucursal_name
        sucursalInfoPhone.innerText = selectedSucursal.phone_number

    } else {
        console.log("no boton")
    }
})

const initSucursalInfo = () => {
    const sucursal = locationsList[0]
    sucursalInfoName.innerText = sucursal.sucursal_name
    sucursalInfoPhone.innerText = sucursal.phone_number
}

const createButtons = () => {
    locationsList.forEach(location => {
        const city_name = location.city_name
        const sucursal_name = location.sucursal_name
        const phone_number = location.phone_number
        const iframe_url = location.iframe_url
        const sucursal_id = location.id
        createButton(city_name, sucursal_name, phone_number, iframe_url, sucursal_id)
    })
}

const createButton = (city_name, sucursal_name, phone_number, iframe_url, sucursal_id) => {
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'col-md-6 p-2 col-lg-3'
    const button = document.createElement('button')
    button.className = 'btn btn-primary btn-lg w-100'
    button.setAttribute('data-id', sucursal_id)
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

    locationsElement.appendChild(buttonContainer)
    buttonContainer.appendChild(button)
    button.appendChild(cityNameContainer)
    button.appendChild(localNameContainer)
}

initSucursalInfo()
createButtons()