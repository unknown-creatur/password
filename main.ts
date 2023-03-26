radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(3000)
    while (判斷值 == 0) {
        if (input.buttonIsPressed(Button.A)) {
            數 += 1
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.B)) {
            數 += -1
            basic.pause(100)
        }
        if (input.buttonIsPressed(Button.AB)) {
            數 += 數 * 2
            basic.pause(100)
        }
        if (input.isGesture(Gesture.LogoDown)) {
            數 = 0
            basic.pause(100)
        }
        if (input.isGesture(Gesture.Shake)) {
            數 = randint(-1e+30, 1e+30)
            basic.pause(100)
        }
        if (input.isGesture(Gesture.ScreenDown)) {
            攔截數()
        }
    }
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(3000)
    if (判斷值 == 1) {
        radio.sendString("this message had been intercepted!")
    } else {
        radio.sendString(receivedString)
    }
})
function 攔截數 () {
    radio.sendNumber(數)
}
let 判斷值 = 0
let 數 = 0
radio.setGroup(1)
數 = 0
判斷值 = 0
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showNumber(數)
    basic.pause(3000)
})
