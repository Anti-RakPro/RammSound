import {renderingArgumentsImport, showFinalScoreImport} from "./renderQuest";
import {gameInfo, renderNextLvl} from "./nextLevel";
import Elm from "./element-maker";
import '../sass css/finalScore.sass'
import {startGameBtn} from "./renderQuest";

export let renderFinalScoreImport


export function showFinalScore(){
  console.log( '022')
  showFinalScoreImport.gameBody.remove()
  renderFinalScoreElements()
  renderFinalScoreNumber()
  chendgeHeaderScore()

 }

function renderFinalScoreElements(){

 const finalScore = new Elm(
     showFinalScoreImport.finalScore.elm,
     '',
     'final-score border-effect elm-background midl-block'
 )

 const finalScoreContent = new Elm(
     finalScore.elm,
     '',
     'final-score__main-block'
 )

 const finalScoreTitle = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__title',
     'SCORE'
 )

 const finalScoreScoreNumber = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__score-number',
     `¯\\_ (ツ)_/¯`
 )

 const finalScoreResume = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__resume',
     'YOU CAN DO BETTER'
 )
    const finalScoreReplayBtn = new Elm(
        finalScoreContent.elm,
        'p',
        'final-score__replay-btn border-effect',
        'REPLAY'
    )
    finalScoreReplayBtn.setOnClick(()=>{
        reranWholeNewGame()
    })

 renderFinalScoreImport = {
     finalScore,
     finalScoreScoreNumber
 }
}



function renderFinalScoreNumber(){
 renderFinalScoreImport.finalScoreScoreNumber.elm.textContent = gameInfo.totalScore
}

function chendgeHeaderScore(){
    console.log('031', 'fun chendgeHeaderScore' )
    // this fun hide and show heder score when resoult stage on
    if (gameInfo.showScoreStatus){
        renderingArgumentsImport.gameScoreText.elm.classList.add('dsp-none')
        renderingArgumentsImport.gameScoreNumber.elm.classList.add('dsp-none')
        console.log('032', renderingArgumentsImport.gameScoreText.elm.classList )
    } else {
        renderingArgumentsImport.gameScoreText.elm.classList.remove('dsp-none')
        renderingArgumentsImport.gameScoreNumber.elm.classList.remove('dsp-none')
        console.log('033',  renderingArgumentsImport.gameScoreText.elm.classList )
    }

}

function reranWholeNewGame(){

    cleanFinalScoreStage()
    console.log('034', 'chek')


    gameInfo.findAnswer = false
    gameInfo.gameAlbumNumber = 0
    gameInfo.showScoreStatus = false
    gameInfo.totalScore = 0
    startGameBtn()
}

function   cleanFinalScoreStage(){

    showFinalScoreImport.gameHeader.elm.remove()
    showFinalScoreImport.finalScore.elm.remove()
    showFinalScoreImport.gameFooter.elm.remove()
}