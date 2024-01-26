import axios from "axios";
const url = "http://localhost:3001/";


export class ApiClient {
    constructor(tokenProvider, logoutHandler) {
        this.tokenProvider = tokenProvider
        this.logoutHandler = logoutHandler
    }

    async authenticatedCall(method, url, data) {
        try {
            return await axios({
                method, 
                url,
                headers: {
                    authorization: this.tokenProvider()
                },
                data, 
            })
        } catch (error) {
            if(error.response.status === 403) {
                this.logoutHandler();
                return Promise.reject()
            } else {
                throw error
            }
        }
    }

    getGames() {
        return this.authenticatedCall("get", `${url}games`);
    }

    addGame(gameName, releaseDate, imageData) {
        return this.authenticatedCall("post", `${url}games/create`, { gameName, releaseDate, imageData})
    }

    deleteGame(id) {
        return this.authenticatedCall("delete", `${url}games/delete/${id}`)
    }

    updateGame(id, gameName, releaseDate, imageData) {
        return this.authenticatedCall("put", `${url}games/update${id}`, {gameName, releaseDate, imageData})
    }

    updateInputs(id, played, difficulty) {
        return this.authenticatedCall("put", `${url}games/update${id}`, {played, difficulty})
    }

    async login(username, password) {
        return await axios({
            method: "post",
            url: `${url}login`,
            data: {username, password}
        })
    }

    
    // async register(username, password) {
    //     return await axios({
    //         method: "post",
    //         url: `${url}register`,
    //         data: {username, password}
    //     })
    // }

}