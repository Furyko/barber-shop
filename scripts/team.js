const buttonPrev = document.getElementById("button-prev")
const buttonNext = document.getElementById("button-next")

let prevAction = (leftPosition, carouselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carouselWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carouselWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carouselWidth)}px`;
    }
}

buttonPrev.addEventListener("click", (event) => {
    processingButton(event)
})

buttonNext.addEventListener("click", (event) => {
    processingButton(event)
})

const processingButton = (event) => {
    const btn = event.currentTarget;
    const carouselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector("#track");
    const carousel = track.querySelectorAll(".barbers-carousel");
    
    const carouselWidth = carousel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carouselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carouselWidth, track);
}