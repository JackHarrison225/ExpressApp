import React from 'react'

const GameCard = (gameName, releaseDate, gameImg) => {
     
  return (
    <div className='flex flex-col'>
          <div id="NameAndPlayed" className='flex'>

               <div id="GameName">
                    {gameName}
               </div>

               <div id="GamePlayed">
                    {releaseDate}
                    {/* have a turery statment for if the game played is true change icon to tick or cross */}
               </div>

          </div>

          <div id="imgAndDifficulty">
               <Image
               src={gameImg}
               alt={`Image for ${gameName}`} />

             {/* Create a dropdown menu for diffulty */}
          </div>

     </div>
  )
}

export default GameCard