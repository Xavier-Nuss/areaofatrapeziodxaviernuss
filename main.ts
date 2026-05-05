let Base1 = game.askForNumber("The top base length of the trapezoid")
let Base2 = game.askForNumber("\"The bottom base length of the trapezoid\"")
let Height = game.askForNumber("\"The height of the trapezoid\"")
let area = (Base1 + Base2) / 2 * Height
game.splash("The area of the trapezoid is", area)
