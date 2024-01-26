import React, { useState, useEffect } from "react";
import GameCard from "../Components/GameCard";
import Add from "../Components/AddGame";

export default function Landing(props) {
    const [games, setGames] = useState([]);
    const [current, setCurrent] = useState(undefined);

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
        <div className="min-h-screen bg-gray-100">
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
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Game Collection</h1>
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
