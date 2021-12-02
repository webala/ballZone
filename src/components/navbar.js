import { Link } from "react-router-dom"

const Navbar = () => {

  const style = {
    marginRight: '50px',
    color: 'black'
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark border-bottom border-warning mb-4" style={{margin: '50px'}}>
          <h1 style={style}>BZn</h1>
          
          <div class="collapse navbar-collapse" id="navbarNavDropdown" className="ml-2">
            <ul class="navbar-nav">
              <li class="nav-item active" style={style}>
                <Link to="/">Home</Link> 
              </li>
              <li class="nav-item active" style={style}>
                <Link to="/games">Games</Link> 
              </li>
              <li class="nav-item ml-3" style={style}>
                <Link to="/players" >Players</Link> 
              </li>
              <li class="nav-item" style={style}>
                <Link to="">Other</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;