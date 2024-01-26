import React from "react";
import Image from "next/image";

const GameCard = ({ gameName, releaseDate, gameImg, onUpdate, onDelete, isPlayed, onPlayStatusChange }) => {
    const formattedReleaseDate = releaseDate ? new Date(releaseDate).toISOString().split("T")[0] : "";

    return (
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Title and Release Date */}
            <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-1">{gameName}</h3>
                <p className="text-sm text-gray-600 mb-4">Released: {formattedReleaseDate}</p>
            </div>

            {/* Image and Played Checkbox */}
            <div className="relative">
                <Image
                    src={gameImg}
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                    alt={`Image for ${gameName}`}
                />
                {/* Checkbox for Played Status */}
 
            </div>

            {/* Difficulty Dropdown and Buttons */}
            <div className="p-4 bg-white">
  

            <div className="flex justify-between">
                    <p>Played</p>
                    <input 
                        type="checkbox" 
                        checked={isPlayed}
                        onChange={onPlayStatusChange}
                        className="form-checkbox text-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="difficulty" className="text-sm text-gray-700">Difficulty:</label>
                    <select
                        name="difficulty"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-1"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <button 
                        onClick={onUpdate} 
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                    >
                        Update
                    </button>
                    <button 
                        onClick={onDelete} 
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;