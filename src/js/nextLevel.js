import {renderingArgumentsImport} from "./renderQuest";
import {RandomNinePlay} from "./RandomNinePlay";
import {muzAlbum1, muzAlbum2, muzAlbum3, muzAlbum4, muzAlbum5, muzAlbum6, muzAlbum7, muzAlbum8} from "./muzLibrary";
import {showFinalScore} from "./showFinalScore";
import {newEmotion} from './newEmotion'
import questionM from '../media/question001.gif'
import {countScore} from "./countScore";

const muzAlbumLibrary = [muzAlbum1, muzAlbum2, muzAlbum3, muzAlbum4, muzAlbum5, muzAlbum6, muzAlbum7, muzAlbum8]


let chozenElm
export let gameInfo = {
    findAnswer: false,
    gameAlbumNumber: 0,
    showScoreStatus: false,
    totalScore: 0
}

//TODO wrong naming
let muzAlbumNumber

export function renderNextLvl(code = '') {
    //TODO check this if
    if (!gameInfo.findAnswer && code === '') {
        return
    }
    checkForStage()

    if(!gameInfo.showScoreStatus){
        muzAlbumNumber = muzAlbumLibrary[gameInfo.gameAlbumNumber]
        activatingHeaderAlbumListElm()
        renderGameContent()

        //order is important
        // askdflkjasdlkfj
        //TODO not working
        chozenElm = ChooseRandomSong()
        renderingArgumentsImport.randomSongInfoSongControls.elm.src = chozenElm.audio
        renderingArgumentsImport.gameAnswerSongControls.elm.src = ''
        renderingArgumentsImport.gameAnswerName.elm.textContent = ''
    }
    renderScoreCount()
    chendgeNextLvlButton()
}

function checkForStage() {
    console.log('019', 'checkForStage')
    //TODO check if if is nesesery
    if (!gameInfo.findAnswer) {
        return
    } else {


        gameInfo.gameAlbumNumber += 1
        gameInfo.findAnswer = false
        // checks for last album
        if (gameInfo.gameAlbumNumber > muzAlbumLibrary.length -1) {
            gameInfo.showScoreStatus = true
            showFinalScore()
        } else {
            //TODO  resetLvl()
            // resetLvl()
            resetVariantsIcons()
        }

    }
}

function renderGameContent() {
    console.log('023', 'renderGameContent')
    console.log('018', muzAlbumNumber[0].albumImg)
    renderingArgumentsImport.randomImg.elm.src = muzAlbumNumber[0].albumImg
    renderingArgumentsImport.gameAnswerEmotion.elm.src = questionM
    // console.log('011', renderingArgumentsImport.gameVariant1Mark.elm)

    renderingArgumentsImport.gameVariant1Name.elm.textContent = muzAlbumNumber[0].name
    renderingArgumentsImport.gameVariant2Name.elm.textContent = muzAlbumNumber[1].name
    renderingArgumentsImport.gameVariant3Name.elm.textContent = muzAlbumNumber[2].name
    renderingArgumentsImport.gameVariant4Name.elm.textContent = muzAlbumNumber[3].name
    renderingArgumentsImport.gameVariant5Name.elm.textContent = muzAlbumNumber[4].name
    renderingArgumentsImport.gameVariant6Name.elm.textContent = muzAlbumNumber[5].name
    renderingArgumentsImport.gameAnswerAlbumName.elm.textContent = muzAlbumNumber[0].albumName
}

function ChooseRandomSong() {
    console.log('muzAlbumNumber', muzAlbumNumber)
    return muzAlbumNumber[Math.floor(Math.random() * 6)]
}

export function ChooseOption(elm) {

    // console.log('008.2', 'ChooseOption')
    // console.log('008', elm, elm.this)
    // console.log('009', chozenElm, (elm.textContent === chozenElm.name))
    let isPassed = (elm.textContent === chozenElm.name)

    if (isPassed) {
        //TODO 1time job
        gameInfo.findAnswer = true
        countScore()
        renderScoreCount()
        renderingArgumentsImport.gameVariant1Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant2Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant3Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant4Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant5Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');
        renderingArgumentsImport.gameVariant6Mark.elm.classList.replace('fa-circle', 'fa-circle-xmark');

        elm.firstElementChild.classList.replace('fa-circle', 'fa-circle-check')
        elm.firstElementChild.classList.replace('fa-circle-xmark', 'fa-circle-check')


        renderingArgumentsImport.randomSongInfoSongControls.elm.pause()
        console.log('031', )
        renderingArgumentsImport.gameAnswerName.elm.textContent = elm.lastChild.textContent
        renderingArgumentsImport.gameAnswerEmotion.elm.src = muzAlbumNumber[0].albumImg
        chendgeNextLvlButton()
    } else {
        RandomNinePlay()
        console.log('030', )
        if(!gameInfo.findAnswer) renderingArgumentsImport.gameAnswerEmotion.elm.src = newEmotion()

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

function activatingHeaderAlbumListElm() {
    // ця функція підсвічує активний альбом в списку хедера
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

function renderScoreCount(){
    if (gameInfo.findAnswer){
        renderingArgumentsImport.gameScoreNumber.elm.classList.remove('header-score-number__non-active')
    } else {
        renderingArgumentsImport.gameScoreNumber.elm.classList.add('header-score-number__non-active')
        return
    }

renderingArgumentsImport.gameScoreNumber.elm.textContent = gameInfo.totalScore

}

function chendgeNextLvlButton(){

    if (gameInfo.findAnswer) {
        renderingArgumentsImport.gameNextLvl.elm.classList.add('game-next-lvl-btn-active')
    } else{
        renderingArgumentsImport.gameNextLvl.elm.classList.remove('game-next-lvl-btn-active')
    }
}

