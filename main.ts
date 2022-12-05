namespace SpriteKind {
    export const MYSPRITE = SpriteKind.create()
    export const SHURI = SpriteKind.create()
    export const riri = SpriteKind.create()
    export const Okoye = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
info.onScore(100, function () {
    namor.destroy(effects.spray, 20)
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect(20)
    mySprite.sayText("WAKANDA FOREVER!", 2000, false)
    game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite = sprites.create(assets.image`okoye`, SpriteKind.Guard)
    controller.moveSprite(mySprite, 34, -53)
    controller.moveSprite(namor, -68, -58)
})
let namor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`wakanda`)
mySprite = sprites.create(assets.image`shuri`, SpriteKind.Player)
mySprite = sprites.create(assets.image`shuri`, SpriteKind.SHURI)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
let sprite = sprites.create(assets.image`namor`, SpriteKind.SHURI)
sprite = sprites.create(assets.image`namor`, SpriteKind.SHURI)
namor.setPosition(148, 2)
namor.follow(mySprite, 30)
