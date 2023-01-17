import {showFinalScoreImport} from "./renderQuest";
import Elm from "./element-maker";
import '../sass css/finalScore.sass'


 export function showFinalScore(){
  console.log( '022')
  showFinalScoreImport.gameBody.remove()

  renderFinalScore()


 }

function renderFinalScore(){



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
     '13'
 )

 const finalScoreResume = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__resume',
     'YOU CAN DO BETTER'
 )


}