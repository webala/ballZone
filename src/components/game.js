
import { Link } from "react-router-dom";
const Game = ({home_team, home_team_score, visitor_team, visitor_team_score, gameId}) => {
    
    return (
        <div>
            <h3>{home_team.full_name} Vs {visitor_team.full_name}</h3>
            <p>{home_team_score} - {visitor_team_score}</p>
            <p>See game  <Link to="/stats" state={{gameId: gameId}}>statistics</Link></p>
        </div>
    )
}
export default Game;