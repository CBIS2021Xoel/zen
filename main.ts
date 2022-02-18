let Wobbles = 0
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 500)
})
basic.forever(function () {
    led.plotBarGraph(
    Wobbles,
    10
    )
    if (Wobbles > 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > (false || input.acceleration(Dimension.X) < -500)) {
        Wobbles += 1
        basic.pause(100)
    }
})
