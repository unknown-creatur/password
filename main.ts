radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(3000)
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(3000)
    radio.sendString(receivedString)
})
function 攔截數 () {
    radio.sendNumber(數)
}
function 強力攔截數 () {
    radio.sendNumber(randint(-1e+30, 1e+30))
}
let 數 = 0
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        數 += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        數 += -1
    }
    if (input.buttonIsPressed(Button.AB)) {
        數 = 數 * randint(1, 100)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        數 = 0
    }
    if (input.isGesture(Gesture.Shake)) {
        數 = randint(-1e+30, 1e+30)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        攔截數()
    }
    basic.pause(100)
})
basic.forever(function () {
    basic.showNumber(數)
    basic.pause(3000)
})
