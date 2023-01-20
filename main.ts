input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    action = 4
})
input.onButtonPressed(Button.A, function () {
    action = 1
})
input.onButtonPressed(Button.AB, function () {
    action = 3
})
input.onButtonPressed(Button.B, function () {
    action = 2
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("CALM DOWN!")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    action = 5
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
let action = 0
action = 0
music.playMelody("A E A F A G F E ", 120)
basic.forever(function () {
    if (action == 1) {
        basic.showIcon(IconNames.Giraffe)
        music.playMelody("D E C F D E F C ", 120)
    }
    if (action == 2) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("G F E A G A D A ", 150)
    }
    if (action == 3) {
        basic.showArrow(ArrowNames.North)
        music.playMelody("C D C E C D C G ", 166)
    }
    if (action == 4) {
        basic.showLeds(`
            . # . . .
            # # . . .
            . # . . #
            . # # # .
            . # . # .
            `)
    }
    if (action == 5) {
        basic.showIcon(IconNames.Heart)
    }
})
