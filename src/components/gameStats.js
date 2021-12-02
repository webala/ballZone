import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './loading';


const GameStats = () => {
    const [playerStats, setPlayerStats] = useState([])
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const location = useLocation()
    const {gameId} = location.state

    useEffect (() => {

        fetch(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}`)
        .then(res => res.json())
        .then(
            (result) =>{
                setPlayerStats(result.data)
                setIsLoaded(true)
            },
            (error) => {
                setError(error)
            } )
    }, [gameId])
    if (error) {
        return <div>Error: {error.message}</div>
    }else if (!isLoaded) {
        return <Loading />
    } else {
        return(
        <div style={{backgroundColor: '#2f333a'}}>
            <div className='d-flex justify-content-start' style={{margin: '50px'}}>
                <Link to='/games'>Go back</Link>
            </div>
            
            <table class="table " style={{backgroundColor: '#2f333a', color: 'white'}}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Player</th>
                <th scope="col">Team</th>
                <th scope="col">Minutes</th>
                <th scope="col">Points</th>
                <th scope="col">Assists</th>
                <th scope="col">Rebounds</th>
                <th scope="col">Blocks</th>
                </tr>
            </thead>
            <tbody>
                {playerStats.map(playerStat => (
                    <tr>
                        <th scope="row">#</th>
                            <td>{playerStat.player.first_name} {playerStat.player.last_name}</td>
                            <td>{playerStat.team.full_name}</td>
                            <td>{playerStat.min}</td>
                            <td>{playerStat.pts}</td>
                            <td>{playerStat.ast}</td>
                            <td>{playerStat.reb}</td>
                            <td>{playerStat.blk}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        )
    }
}

export default GameStats;