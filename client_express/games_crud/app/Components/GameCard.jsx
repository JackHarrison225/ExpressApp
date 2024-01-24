import React from 'react'

const GameCard = (gameName, gamePlayed, gameImg, gameDifficulty) => {
  return (
    <div className='flex flex-col'>
          <div id="NameAndPlayed" className='flex'>

               <div id="GameName">
                    {gameName}
               </div>

               <div id="GamePlayed">
                    {gamePlayed}
                    {/* have a turery statment for if the game played is true change icon to tick or cross */}
               </div>

          </div>

          <div id="imgAndDifficulty">
               <img src={`${gameImg}`} alt="" /> 
               <h3>{gameDifficulty}</h3>{/* this could be a drop down menu to change easy medium hard sending edit reqest to api */}
          </div>

          <div id="ButttonHolder">
               <button>Change Played</button>{/* sends an edit reqest to api to change played value of game */}
               <button>Delete</button>{/* sends delete request to api */}
          </div>
     </div>
  )
}

export default GameCard