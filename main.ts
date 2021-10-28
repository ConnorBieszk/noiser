basic.forever(function () {
    led.plot(randint(0, 5), randint(0, 5))
    led.unplot(randint(0, 5), randint(0, 5))
    music.ringTone(randint(131, 988))
})
