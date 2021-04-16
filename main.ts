radio.setGroup(13)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0) {
        radio.sendString("m")
    } else if (input.acceleration(Dimension.X) > 0) {
        radio.sendString("m")
    } else {
        radio.sendString("n")
    }
})
