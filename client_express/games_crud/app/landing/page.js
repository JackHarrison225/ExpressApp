'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import axios from "axios"
import GameCard from "../Components/GameCard";
import Add from "../Components/AddGame";

export default function Landing(props) {

  const [games, setGames] = useState([])
  const [current, setCurrent] = useState(undefined)
  
  
  const refreshGames = () => {
    props.client.getGames().then((response) => {
        setGames(response.data)
    })
  }



  const removeGame = (id) => {
    props.client.removeGame(id).then(() =>{
        refreshGames()
    })
  }

  const updateGame = (id) => {
    setCurrent(id)
  }

  
  useEffect(() => {
    refreshGames()
  }, [])



//   const handleGamePost = async (e) => {
//     e.preventDefault()
//     const gameData = {
//       name: e.target.name.value,
//       dateReleased: e.target.dateReleased.value,
//       imageData: e.target.imageData.value
//     }
//     try {
//       await axios.post('http://localhost:3002/games/create', gameData)
//       fetchGames()
//     }catch(error) {
//       console.error('Error posting game: ', error)
//     }
//   } 

//   const handleGameUpdate = async (id, updatedData) => {
//     try {
//       await axios.put(`http://localhost:3002/games/update/${id}`, updatedData)
//       fetchGames();
//     } catch (error) {
//       console.error('Error updating game:', error);
//     }
//   }

//   const handleGameDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3002/games/delete/${id}`)
//       setGames(games.filter(game => game._id !== id))
      
//     } catch(error) {
//       console.error('Error deleting game: ', error)
//     }
//   }





  return (
    <div>
      <div className="w-full h-screen p-6 max-w-2xl max-h-2xl">

        <div>
        <aside className="sticky">

        </aside>
          </div>

          <div className="games-display">
            {games.map((game) => {
                <GameCard key={game._id}
                gameName={game.gameName}
                gameImg={game.imageData}
                releaseDate={game.releaseDate}
                
                />
                
            })}
            
          <div id="ButttonHolder">
               <button onClick={() => updateGame(current)}>Change Played</button>{/* sends an edit reqest to api to change played value of game */}
               <button onClick={() => removeGame(current._id)}>Delete</button>{/* sends delete request to api */}
          </div>
          <Add client={props.client} refreshGames={() => {
            refreshGames();
            setCurrent(undefined)
          }} 
          currentGame={current}
          />

          </div>

        <div>


          <div>

          </div>
        </div>
      </div>
    </div>
    
  );
}

