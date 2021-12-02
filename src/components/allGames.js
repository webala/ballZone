import {useState, useEffect} from 'react';
import Game from './game';
import Loading from './loading';

export const AllGames = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/games?seasons[]=2020&page=47")
        .then(res => res.json())
        .then( 
            (result) => {
            setIsLoaded(true)
            setGames(result.data)
        },
        (error) => {
            setIsLoaded(true)
            setError(error)
        })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <Loading />
    } else {
        return(
            <div style={{backgroundColor: '#2f333a'}}> 
                <ul className='list-group list-group-flush'>
                    {games.map(game => (
                        <div key={game.id} className="mb-4">
                        <Game className="Game" home_team={game.home_team} home_team_score={game.home_team_score} visitor_team={game.visitor_team} visitor_team_score={game.visitor_team_score} gameId={game.id}/>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }

}

