"use client"

import {useState} from "react";

const Add = (props) => {
    const [disabled, setDisabled] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault()
        setDisabled(true)

        let result; 

        if(!e.target.gameName.value || !e.target.releaseDate.value || !e.target.imageData.value) {
            alert("Please enter a valid name, release date and image")
            setDisabled(false)
            return;
        }

        if (props.currentGame) {
            result = props.client.updateGame(props.currentGame._id, e.target.gameName.value, e.target.releaseDate.value, e.target.imageData.value)

        } else {
            result = props.client.addGame(e.target.gameName.value, e.target.releaseDate.value, e.target.imageData.value);
        }

        result.then(()=> {
            setDisabled(false);
            document.getElementById("addForm").reset()
            props.refreshGames()
        }).catch(() => {
            alert("There was an error")
            setDisabled(false);
        })
    }
    return (
        <div>
            <h2>{props.currentGame ? "update" : "add"}</h2>
            <form onSubmit={submitHandler} id="addForm">
                <p>Name:</p> <input type="text" name="gameName" defaultValue={props.currentGame?.name} disabled={disabled} />
                <p>Release Date:</p> <input type="date" name="releaseDate" defaultValue={props.currentGame?.releasedate} disabled={disabled} />
                <p>Image:</p> <input type="text" name="imageData" defaultValue={props.currentGame?.imageData} disabled={disabled}/>
                <button type="submit" disabled={disabled}>{props.currentGame ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default Add