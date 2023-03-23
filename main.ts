radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(3000)
    攔截數()
})
input.onGesture(Gesture.ScreenUp, function () {
    數 = 0
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(3000)
    radio.sendString(receivedString)
})
function 攔截數 () {
    radio.sendNumber(數)
}
let 數3 = 0
let 數 = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        數 += 1
    } else if (input.buttonIsPressed(Button.B)) {
        數3 += -1
    } else if (input.buttonIsPressed(Button.AB)) {
        數 = 數 * randint(1, 100)
    } else if (input.isGesture(Gesture.LogoDown)) {
        數 = 0
    } else if (input.isGesture(Gesture.Shake)) {
        數 = randint(-1e+24, 1e+24)
    }
})
