import { get } from "axios"

export async function getGames() {
    
    API_KEY = process.env.igdb_secretKey
    API_ID = process.env.igdb_clientId
    try {
        console.log("test")
        const response = await get(``)
        
        // const data = response.data;
        return response.data;

        // return data;
    } catch (error) {
        console.error(error);
          //console.log(`- ${__filename}`); 
        console.log(API_KEY)
    }
}

// module.exports = getGames;