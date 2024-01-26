import { useState, useEffect } from "react";

const Add = (props) => {
    const [disabled, setDisabled] = useState(false);
    const [currentGame, setCurrentGame] = useState(props.currentGame);

    useEffect(() => {
        setCurrentGame(props.currentGame);
    }, [props.currentGame]);

    const submitHandler = (e) => {
        e.preventDefault();
        setDisabled(true);

        const gameData = {
            gameName: e.target.gameName.value,
            releaseDate: e.target.releaseDate.value,
            imageData: e.target.imageData.value,
            played: e.target.played.checked,
            difficulty: e.target.difficulty.value
        };

        let result;
        if (currentGame) {
            result = props.client.updateGame(currentGame._id, gameData);
        } else {
            result = props.client.addGame(gameData);
        }

        result.then(() => {
            setDisabled(false);
            document.getElementById("addForm").reset();
            props.refreshGames();
        }).catch(() => {
            alert("There was an error");
            setDisabled(false);
        });
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                {props.currentGame ? "Update Game" : "Add Game"}
            </h2>
            <form onSubmit={submitHandler} id="addForm" className="space-y-4">
                <div>
                    <label htmlFor="gameName" className="block mb-2 text-sm font-medium text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        name="gameName" 
                        defaultValue={props.currentGame?.name} 
                        disabled={disabled}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div>
                    <label htmlFor="releaseDate" className="block mb-2 text-sm font-medium text-gray-700">Release Date:</label>
                    <input 
                        type="date" 
                        name="releaseDate" 
                        defaultValue={props.currentGame?.releasedate} 
                        disabled={disabled}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <div>
                    <label htmlFor="imageData" className="block mb-2 text-sm font-medium text-gray-700">Image:</label>
                    <input 
                        type="text" 
                        name="imageData" 
                        defaultValue={props.currentGame?.imageData} 
                        disabled={disabled}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={disabled}
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-blue-300"
                >
                    {props.currentGame ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default Add;