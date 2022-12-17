import {mainDiv, startBlock} from "../index";
import Elm from "./element-maker";
import '../sass css/gameBlock.sass'
import '../sass css/main.sass'

import albImg1 from '../img/AlbumImg/01_herzeleid.jpg'

import {muzAlbum1} from "./muz";




export function startGameBtn(){
startBlock.destroy()

    const gameBlock = new Elm (
        mainDiv.elm,
        '',
        'game-block elm-background  '

    )

    const gameHeader = new Elm(
        gameBlock.elm,
        '',
        'game-header midl-block border-effect'
    )

    const headerLogo = new Elm(
        gameHeader.elm,
        'p',
        'header-logo',
        'rammstein'
    )

    const gameScore = new Elm(
        gameHeader.elm,
        'p',
        'header-score',
        'SCORE'
    )

    const gameBody = new Elm(
        gameBlock.elm,
        '',
        'game-body midl-block border-effect'
    )

    const bodyAlbumList = new Elm(
        gameBody.elm,
        '',
        'album-list border-effect'
    )

    const albumElm1 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Herzeleid'
    )
    const albumElm2 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Sehnsucht'
    )
    const albumElm3 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Mutter'
    )
    const albumElm4 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Reise, Reise'
    )
    const albumElm5 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Rosenrot'
    )
    const albumElm6 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Liebe ist für alle da'
    )
    const albumElm7 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Untitled'
    )
    const albumElm8 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Zeit'
    )



    const randomSong = new Elm(
        gameBody.elm,
        '',
        'random-song border-effect'
    )

    const randomImg = new Elm(
        randomSong.elm,
        'img',
        'random-song-img border-effect',
        '',
        'src',
        albImg1
    )

    const randomSongInfo = new Elm(
        randomSong.elm,
        '',
        'random-song-info',

    )


    const gameVarAndAnswer = new Elm(
        gameBody.elm,
        '',
        'game-body_var-and-answer'
    )

    const gameVariantsList = new Elm(
        gameVarAndAnswer.elm,
        '',
        'game-variants-list border-effect'
    )

    const gameVariant1 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var1'
    )
    const gameVariant2 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var2'
    )
    const gameVariant3 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var3'
    )
    const gameVariant4 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var4'
    )
    const gameVariant5 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var5'
    )
    const gameVariant6 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        'var6'
    )

    const gameAnswer = new Elm(
        gameVarAndAnswer.elm,
        '',
        'game-answer border-effect'
    )


    const gameFooter = new Elm(
        gameBlock.elm,
        '',
        'game-footer midl-block border-effect'
    )

    const footerInfo = new Elm(
        gameFooter.elm,
        'p',
        'footer-info',
        '2022'
    )
}


console.log(muzAlbum1)

