import React, { useState, useEffect } from "react";
import GameCard from "../Components/GameCard";
import Add from "../Components/AddGame";

export default function Landing(props) {
    const [games, setGames] = useState([]);
    const [current, setCurrent] = useState(undefined);
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Replace this with your method of getting the user's information
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo && userInfo.username) {
            setUsername(userInfo.username);
        }
    }, []);

    const refreshGames = () => {
        props.client.getGames().then((response) => {
            setGames(response.data);
        });
    };

    const removeGame = (id) => {
        props.client.deleteGame(id).then(() => {
            refreshGames();
        });
    };

    const updateGame = (game) => {
        setCurrent(game);
    };

    useEffect(() => {
        refreshGames();
    }, []);

    return (
        <div className="min-h-screen dynamic-bg">
            <div className="flex items-center px-10 py-10  mx-auto justify-between text-center">
 
            <h1 className="text-3xl dynamic-bg font-bold text-center text-gray-100 ">GamesVerse</h1>
            <button onClick={props.logout} className="logout-button-styles text-white bg-blue-400 p-2 rounded-lg duration-300  hover:scale-110 hover:bg-blue-600">
                    Logout
                </button>
            </div>
            <div className="container mx-auto py-8 flex">
                <aside className="w-1/4 sticky top-20 self-start">
                <div className="mt-8">
                    <Add
                        client={props.client}
                        refreshGames={refreshGames}
                        currentGame={current}
                    />
                </div>
                </aside>
                <div className="w-3/4 ml-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {games.map((game) => (
                        <GameCard
                            key={game._id}
                            gameName={game.gameName}
                            gameImg={game.imageData}
                            releaseDate={game.releaseDate}
                            onUpdate={() => updateGame(game)}
                            onDelete={() => removeGame(game._id)}
                        />
                    ))}
                </div>
                </div>



            </div>
        </div>
    );
}
