input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . # . . .
        # # . . .
        . # . . #
        . # # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1000000000000; index++) {
        basic.showIcon(IconNames.Giraffe)
        music.playMelody("D E C F D E F C ", 120)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1000000000000; index++) {
        basic.showArrow(ArrowNames.North)
        music.playMelody("C D C E C D C G ", 166)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000000000000; index++) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("G F E A G A D A ", 150)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("CALM DOWN!")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})
for (let index = 0; index < 1000000000000; index++) {
    music.playMelody("A E A F A G F E ", 120)
}
