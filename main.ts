input.onButtonPressed(Button.A, function () {
    while (true) {
        if (pins.analogReadPin(AnalogPin.P0) == 1) {
            MotorDriver.MotorRun(Motor.Left, Dir.backward, 15)
            MotorDriver.MotorRun(Motor.Right, Dir.forward, 10)
            basic.pause(50)
            MotorDriver.MotorStop(Motor.Left)
            MotorDriver.MotorStop(Motor.Right)
        } else if (pins.analogReadPin(AnalogPin.P2) == 1) {
            MotorDriver.MotorRun(Motor.Right, Dir.backward, 15)
            MotorDriver.MotorRun(Motor.Left, Dir.forward, 10)
            basic.pause(50)
            MotorDriver.MotorStop(Motor.Left)
            MotorDriver.MotorStop(Motor.Right)
        } else {
            MotorDriver.MotorRun(Motor.Left, Dir.backward, 15)
            MotorDriver.MotorRun(Motor.Right, Dir.forward, 15)
            basic.pause(50)
            MotorDriver.MotorStop(Motor.Left)
            MotorDriver.MotorStop(Motor.Right)
        }
    }
})
