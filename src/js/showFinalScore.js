import {showFinalScoreImport} from "./renderQuest";


 export function showFinalScore(){
  // console.log( '021' , showFinalScoreImport.gameBlock.elm.children)
  let gameBlocks = showFinalScoreImport.gameBlock.elm.childNodes
  console.log( '022' , gameBlocks, gameBlocks.length)

  for (let i of gameBlocks){
   console.log(i)
  }
  return ''
  // gameBlocks.forEach(elm => elm.remove())
 }