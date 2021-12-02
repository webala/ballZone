import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./loading";

const Player = () => {

    const [player, setPlayer] = useState({})
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const location = useLocation()
    const {playerId} = location.state

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players/${playerId}`)
        .then(res => res.json())
        .then(
            (result)=> {
                setPlayer(result)
                setIsLoaded(true)
            },
            (error) => {
                setError(error)
            }
        )
    },[playerId])
    if (error) {
        return <p>{error.message}</p>
    }
    else if (!isLoaded){
        return <Loading />
    }
    else {
        return (
            <div>
                <p>{player.first_name} {player.last_name} {player.position}</p>
            </div>
        )
    }

    
}

export default Player;