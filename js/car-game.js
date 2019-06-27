function carGame(selektor) {

    const containerElement = document.querySelector(selektor)
    const roadElement = document.createElement('div') // droga
    const carElement = document.createElement('div') //samochód 
    const tickDuration = 10
    const maxAcceleration = 10
    let velocity = 0
    let position = 0
    let acceleration = 0

    function applyStylesToCarAndRoad() { // funkcja która rysuje samochód i droge
        carElement.className = 'car-game__car-element'
        // samochód
        carElement.style.width = '100px'
        carElement.style.height = '100px'
        carElement.style.backgroundColor = 'red'

        carElement.style.position = 'absolute'
        carElement.style.left = '0px'
        // droga
        roadElement.style.width = '100%'
        roadElement.style.height = '100px'
        roadElement.style.position = 'relative'
        roadElement.style.backgroundColor = 'gray'

        roadElement.appendChild(carElement)
        containerElement.appendChild(roadElement)

    }
    function move() {
        const time = tickDuration / 1000
        position = position + velocity * time + (acceleration * time * time) / 2
        velocity = velocity + acceleration * time
        carElement.style.left = position + 'px'
    }

    applyStylesToCarAndRoad()

    setInterval(
        move, // przekazujemy całą funkcję a nie wywołujemy 
        tickDuration
    )
    window.addEventListener(
        'keydown',
        function (event) {
            if (event.key === 'a') {
                acceleration = maxAcceleration
            }
            if (event.key === 'b') {
                acceleration = -maxAcceleration
            }
        }
    )
    window.addEventListener(
        'keyup',
        function (event) {
            if (event.key === 'a') {
                acceleration = 0
            }
            if (event.key === 'b') {
                acceleration = 0
            }
        }
    )
}
