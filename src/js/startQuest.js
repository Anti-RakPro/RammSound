import {mainDiv, startBlock} from "../index";
import Elm from "./element-maker";
import '../sass css/gameBlock.sass'
import '../sass css/main.sass'
import {gameNextLvlFun} from './nextLevel'


// TODO delete albImg1
import albImg1 from '../img/AlbumsImg/01_herzeleid.jpg'

import {muzAlbum1,muzAlbum2,muzAlbum3,muzAlbum4,muzAlbum5, muzAlbum6, muzAlbum7, muzAlbum8} from "./muz";

console.log('muzAlbum1', muzAlbum1)

export function startGameBtn(muzAlbumNumber) {
    startBlock.destroy()

    const gameBlock = new Elm(
        mainDiv.elm,
        '',
        'game-block '
    )

    const gameHeader = new Elm(
        gameBlock.elm,
        '',
        'game-header midl-block border-effect elm-background'
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
        'game-body midl-block border-effect elm-background'
    )

    const bodyAlbumList = new Elm(
        gameBody.elm,
        '',
        'album-list border-effect'
    )
// TODO цикл
    const albumElm1 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm album-list-elm__active',
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
        'random-song__img border-effect',
        '',
        'src',
        albImg1
    )

    const randomSongInfo = new Elm(
        randomSong.elm,
        '',
        'random-song__info',
    )

    const randomSongInfoSongName = new Elm(
        randomSongInfo.elm,
        'p',
        'random-song__info-name',
        'What name of this song ?',
    )

    const randomSongInfoSongControls = new Elm(
        randomSongInfo.elm,
        'audio',
        'random-song__info-song',
        '',
        'controls',
        ''
    )

    const randomSongInfoSongSrc = new Elm(
        randomSongInfoSongControls.elm,
        'source',
        'random-song_info-song',
        '',
        'src',
        muzAlbum1[0].audio
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
        'game-answer border-effect',
        'anser content'
    )

    const gameNextLvl = new Elm(
        gameBody.elm,
        '',
        'game-next-lvl-btn border-effect',
        'Next Level'
    )
    gameNextLvl.setOnClick(gameNextLvlFun)

    const gameFooter = new Elm(
        gameBlock.elm,
        '',
        'game-footer midl-block border-effect elm-background'
    )

    const footerInfo = new Elm(
        gameFooter.elm,
        'p',
        'footer-info',
        '2022'
    )
}


// console.log(muzAlbum1)

