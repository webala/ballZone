import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./loading";

const AllPlayers = () => {
    const [players, setPlayers] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)
    const [nextPage, setNextPage] = useState()

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players?page=${page}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setPlayers(result.data)
                setNextPage(result.meta.next_page)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [page])

    const style = {
        marginRight: '40px'
    }
    
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <Loading />
    } else {
        return (<div style={{backgroundColor: '#2f333a'}}>
           {players.map(player => {
               return (
                <div className='d-flex flex-row' style={{marginLeft: '50px'}}>
                   <Link to='/player' state={{playerId: player.id}}><h3 style={style}>{player.first_name}</h3> </Link><h4 style={style}>{player.last_name}</h4> <p>{player.position}</p>
               </div>
               )
               
           })}
        </div>)
           
        
        
    }
}

export default AllPlayers;