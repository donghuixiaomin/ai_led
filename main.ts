input.onButtonPressed(Button.A, function () {
    strip.showColor(Microbit.rgb(255, 200, 150))
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(Microbit.rgb(200, 200, 255))
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(Microbit.rgb(255, 255, 255))
})
let strip: Microbit.Strip = null
strip = Microbit.create(Write_pin.w0)
let colour = 0
let environment = pins.analogReadPin(AnalogPin.P2)
basic.forever(function () {
	
})
