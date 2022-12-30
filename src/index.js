import "./sass css/main.sass"
import "./sass css/backgraund-imag.sass"
import Elm from "./js/element-maker";
import {startGameBtn} from "./js/startQuest";
import {muzAlbum1} from "./js/muz";

export const mainDiv = new Elm(
    document.body ,
    '',
    'whole-page border-effect');

export const startBlock = new Elm(
    mainDiv.elm,
    '',
    'start_block elm-background border-effect ',
    '');

const startQuestion = new Elm(
    startBlock.elm,
    'p',
    'start-question',
    'Are you true RAMMSTEIN FAN ?'
)

const startButton = new Elm(
    startBlock.elm,
    'p',
    'start-button border-effect',
    'LET\'S TEST IT OUT')
startButton.setOnClick(startGameBtn)

// skeep entree

startGameBtn(muzAlbum1)






