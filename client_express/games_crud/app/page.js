'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import axios from "axios"

export default function Home() {

  const [games, setGames] = useState([])


  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    try {
      const response = await axios.get('/api/games/get')
      
      setGames(response.data)

      if(!response) {
        console.log('There was no response from the API')
      } 
    } catch(error){
      console.error(error)
    }
  }

  const handleGamePost = async (e) => {
    e.preventDefault()
    const gameData = {
      name: e.target.name.value,
      played: e.target.played.checked
    }
    try {
      await axios.post('/games/post', gameData)
      fetchGames()
    }catch(error) {
      console.error('Error posting game: ', error)
    }
  } 

  const handleGameUpdate = async (id, updatedData) => {
    try {
      await axios.put(`/games/update/${id}`, updatedData)
      fetchGames();
    } catch (error) {
      console.error('Error updating game:', error);
    }
  }

  const handleGameDelete = async (id) => {
    try {
      await axios.delete(`/games/delete/${id}`)
      setGames(games.filter(game => game._id !== id))
      
    } catch(error) {
      console.error('Error deleting game: ', error)
    }
  }





  return (
    <div>
      <div className="w-full h-screen p-6 max-w-2xl max-h-2xl">
        <aside className="sticky">
          <form onSubmit={handleGamePost}>

            <input type="text" name="name" placeholder="Name of the game"/>
            <input type="checkbox" name="played"/>
            <button className="text-black" type="submit">Add Game</button>
          </form>
        </aside>
        <div>
          <div>
            {games.map(game => (
              <div key={game._id}>
                <h3>{game.name}</h3>
                <button className="text-black" onClick={() => handleGameDelete(game._id)}>Delete</button>
              </div>
            ))}

          </div>

          <div>
            <div>Display game item here.</div>
          
          </div>
        </div>
      </div>
    </div>
    
  );
}
