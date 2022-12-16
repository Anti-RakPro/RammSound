import "./sass css/main.sass"
import "./sass css/backgraund-imag.sass"
import Elm from "./js/element-maker";





export const mainDiv = new Elm(
    document.body ,
    '',
    'whole-page wizualEfect');

const startBlock = new Elm(
    mainDiv.elm,
    '',
    'start_block wizualEfect ',
    '');

const startButton = new Elm(
    startBlock.elm,
    'div',
    'start-button wizualEfect',
    'START')
startButton.setOnClick(startGame)

function startGame(){
    console.log('onClick1')
}






