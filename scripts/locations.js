const locationsElement = document.getElementById('locations-selector')
const mapIframe = document.getElementById('map-iframe')
const sucursalInfoName = document.getElementById('sucursal-info-name')
const sucursalInfoPhone = document.getElementById('sucursal-info-phone')
let locationsElements = document.querySelectorAll('#locations-selector button')

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
        sucursal_name: 'Barbería Maradona',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1635.8522243394723!2d-57.99146945079202!3d-34.91386577625503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1727672381505!5m2!1ses!2sarhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156.7195350036975!2d-57.989501714333365!3d-34.914054963180966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e796c35ba77f%3A0xfa546c6ec8fdfd96!2sEstadio%20%C3%9Anico%20Diego%20Armando%20Maradona!5e0!3m2!1ses!2sar!4v1727672546018!5m2!1ses!2sar'
    },
    {
        id: 2,
        city_name: 'Tigre',
        sucursal_name: 'Barbería de la Costa',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.3985875375133!2d-58.577003000000005!3d-34.416629300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5b093ad2af3%3A0x4fce783f7ad283e0!2sParque%20de%20la%20Costa!5e0!3m2!1ses-419!2sar!4v1727672653117!5m2!1ses-419!2sar'
    },
    {
        id: 3,
        city_name: 'Palermo',
        sucursal_name: 'Barbería Planetario',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.363164994223!2d-58.4116258!3d-34.5696763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57475fd5245%3A0x5eefd3cd753143d7!2sPlanetario%20Galileo%20Galilei!5e0!3m2!1ses-419!2sar!4v1727672827404!5m2!1ses-419!2sar'
    },
    {
        id: 4,
        city_name: 'San Nicolás',
        sucursal_name: 'Barbería Colón',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1206512405815!2d-58.3835359!3d-34.6011105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sTeatro%20Col%C3%B3n!5e0!3m2!1ses-419!2sar!4v1727672809075!5m2!1ses-419!2sar'
    },
    {
        id: 5,
        city_name: 'Barracas',
        sucursal_name: 'Barbería Caminito',
        phone_number: '+54 1155443322',
        iframe_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.608774480488!2d-58.362680700000006!3d-34.63932559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b0f8639693%3A0x9ee9f7e4b5eeaf14!2sCaminito%2C%20C1166%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1727673072151!5m2!1ses-419!2sar'
    }
]

const initButtonsActions = () => {
    locationsElements = document.querySelectorAll('#locations-selector button')

    locationsElements.forEach(button => {
        button.addEventListener('click', (e) => {
            const button = e.currentTarget
            const sucursal_id = button.getAttribute('data-id')
    
            const selectedSucursal = locationsList.filter(sucursal => sucursal.id == sucursal_id)[0]
            mapIframe.src = selectedSucursal.iframe_url
            sucursalInfoName.innerText = selectedSucursal.sucursal_name
            sucursalInfoPhone.innerText = selectedSucursal.phone_number
        })
    })
}

const initSucursalInfo = () => {
    const sucursal = locationsList[0]
    mapIframe.src = sucursal.iframe_url
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
initButtonsActions()