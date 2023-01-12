import {renderingArgumentsImport} from "./renderQuest";
import {RandomNinePlay} from "./RandomNinePlay";
import {muzAlbum1, muzAlbum2, muzAlbum3, muzAlbum4, muzAlbum5, muzAlbum6, muzAlbum7, muzAlbum8} from "./muzLibrary";
import {showFinalScore} from "./showFinalScore";

const muzAlbumLibrary = [muzAlbum1, muzAlbum2, muzAlbum3, muzAlbum4, muzAlbum5, muzAlbum6, muzAlbum7, muzAlbum8]


let chozenElm
export let gameInfo = {
    findAnswer: false,
    gameAlbumNumber: 0

}

//TODO wrong naming
let muzAlbumNumber

export function renderNextLvl(code = '') {
    if (!gameInfo.findAnswer && code === '') {
        return
    }
    checkForStage()

    function checkForStage() {
        if (!gameInfo.findAnswer) {
            return
        } else {
            console.log('019')
            gameInfo.gameAlbumNumber += 1
            gameInfo.findAnswer = false
            // checks for last album
            if (gameInfo.gameAlbumNumber > muzAlbumLibrary.length) {
                showFinalScore()
            } else {
                resetVariantsIcons()
            }

        }
    }

    muzAlbumNumber = muzAlbumLibrary[gameInfo.gameAlbumNumber]
    activatingAlbumListElm()
    renderGameContent()

    function renderGameContent() {
        console.log('018', muzAlbumNumber[0].albumImg)
        renderingArgumentsImport.randomImg.elm.src = muzAlbumNumber[0].albumImg
        renderingArgumentsImport.gameAnswerEmotion.elm.src = muzAlbumNumber[0].albumImg
        // console.log('011', renderingArgumentsImport.gameVariant1Mark.elm)

        renderingArgumentsImport.gameVariant1Name.elm.textContent = muzAlbumNumber[0].name
        renderingArgumentsImport.gameVariant2Name.elm.textContent = muzAlbumNumber[1].name
        renderingArgumentsImport.gameVariant3Name.elm.textContent = muzAlbumNumber[2].name
        renderingArgumentsImport.gameVariant4Name.elm.textContent = muzAlbumNumber[3].name
        renderingArgumentsImport.gameVariant5Name.elm.textContent = muzAlbumNumber[4].name
        renderingArgumentsImport.gameVariant6Name.elm.textContent = muzAlbumNumber[5].name
        renderingArgumentsImport.gameAnswerAlbumName.elm.textContent = muzAlbumNumber[0].albumName
    }

    //order is important
    //TODO not working

    chozenElm = ChooseRandomSong()
    renderingArgumentsImport.randomSongInfoSongControls.elm.src = chozenElm.audio


    function ChooseRandomSong() {
        console.log('muzAlbumNumber', muzAlbumNumber)
        return muzAlbumNumber[Math.floor(Math.random() * 6)]
    }
}


export function ChooseOption(elm) {
    console.log('008', elm, elm.this)
    console.log('009', chozenElm, (elm.textContent === chozenElm.name))
    let isPassed = (elm.textContent === chozenElm.name)

    if (isPassed) {
        //TODO 1time job
        renderingArgumentsImport.gameVariant1Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant2Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant3Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant4Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant5Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant6Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');

        elm.firstElementChild.classList.replace('fa-circle', 'fa-circle-check')
        elm.firstElementChild.classList.replace('fa-circle-xmark', 'fa-circle-check')
        gameInfo.findAnswer = true

        renderingArgumentsImport.randomSongInfoSongControls.elm.pause()
        renderingArgumentsImport.gameAnswerName.elm.textContent = elm.lastChild.textContent
    } else {
        RandomNinePlay()
        elm.firstElementChild.classList.replace('fa-circle', 'fa-circle-xmark')
        // renderingArgumentsImport.gameAnswerSongSrc.elm.setAttribute('src', findSoundSrc(elm))
        renderingArgumentsImport.gameAnswerName.elm.textContent = elm.lastChild.textContent
    }
    findSoundSrc(elm);
}

function findSoundSrc(elm) {

    let songName = elm.lastChild.textContent
    // console.log('014 songName', songName)
    let muzAlbum = muzAlbumNumber
    // console.log('015 songName', muzAlbum)

    for (let i in muzAlbum) {
        // console.log('-', i)
        if (muzAlbum[i].name === songName) {
            console.log('016', muzAlbumNumber[i].audio)
            renderingArgumentsImport.gameAnswerSongControls.elm.src =
                muzAlbumNumber[i].audio
        }
    }
}

function activatingAlbumListElm() {
    renderingArgumentsImport.albumElm1.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm2.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm3.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm4.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm5.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm6.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm7.elm.classList.remove('album-list-elm__active')
    renderingArgumentsImport.albumElm8.elm.classList.remove('album-list-elm__active')

    let albumList = [
        renderingArgumentsImport.albumElm1,
        renderingArgumentsImport.albumElm2,
        renderingArgumentsImport.albumElm3,
        renderingArgumentsImport.albumElm4,
        renderingArgumentsImport.albumElm5,
        renderingArgumentsImport.albumElm6,
        renderingArgumentsImport.albumElm7,
        renderingArgumentsImport.albumElm8
    ]

    albumList[gameInfo.gameAlbumNumber].elm.classList.add('album-list-elm__active')
}

function resetVariantsIcons() {
    renderingArgumentsImport.gameVariant1Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');
    renderingArgumentsImport.gameVariant2Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');
    renderingArgumentsImport.gameVariant3Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');
    renderingArgumentsImport.gameVariant4Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');
    renderingArgumentsImport.gameVariant5Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');
    renderingArgumentsImport.gameVariant6Mark.elm.classList.replace('fa-circle-xmark', 'fa-circle');

    renderingArgumentsImport.gameVariant1Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
    renderingArgumentsImport.gameVariant2Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
    renderingArgumentsImport.gameVariant3Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
    renderingArgumentsImport.gameVariant4Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
    renderingArgumentsImport.gameVariant5Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
    renderingArgumentsImport.gameVariant6Mark.elm.classList.replace('fa-circle-check', 'fa-circle');
}