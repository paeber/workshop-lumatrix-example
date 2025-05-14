lumaMatrix.initializeMatrix(127)
lumaMatrix.showImage(lumaMatrix.matrix8x8(`
    . . . . . . . .
    . # # . . # # .
    . # # . . # # .
    . . . . . . . .
    . . . . . . . .
    . # # # # # # .
    . . . . . . . .
    . . . . . . . .
    `), 0x00ffff)
basic.forever(function () {
    if (lumaMatrix.compareJoystick(lumaMatrix.readJoystick(), lumaMatrix.eJoystickDirection.Up)) {
        lumaMatrix.clear()
        lumaMatrix.showImage(lumaMatrix.matrix8x8(`
            . . . . . . . .
            . # # . . # # .
            . # # . . # # .
            . . . . . . . .
            # . . . . . . #
            # . . . . . . #
            . # . . . . # .
            . . # # # # . .
            `), 0x00ff00)
    } else if (lumaMatrix.compareJoystick(lumaMatrix.readJoystick(), lumaMatrix.eJoystickDirection.Down)) {
        lumaMatrix.clear()
        lumaMatrix.showImage(lumaMatrix.matrix8x8(`
            . . . . . . . .
            . # # . . # # .
            . # # . . # # .
            . . . . . . . .
            . . # # # # . .
            . # . . . . # .
            # . . . . . . #
            # . . . . . . #
            `), 0xff0000)
    } else if (lumaMatrix.compareJoystick(lumaMatrix.readJoystick(), lumaMatrix.eJoystickDirection.Center)) {
        lumaMatrix.clear()
        lumaMatrix.showImage(lumaMatrix.matrix8x8(`
            . . . . . . . .
            . # # . . # # .
            . # # . . # # .
            . . . . . . . .
            . . . . . . . .
            . # # # # # # .
            . . . . . . . .
            . . . . . . . .
            `), 0xffffff)
    } else {
    	
    }
})
