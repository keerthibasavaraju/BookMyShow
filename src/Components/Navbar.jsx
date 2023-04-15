
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar=()=>
{
    return(
        <div className="navbar">
            <div className="logo">
                {/* <h1>logo</h1> */}
               <img src="/images/logo1.svg" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        
                    </li>
                    <li>
                    <Link to="/movies">Movies</Link>
                        
                    </li>
                    <li>
                    <Link to="/addmovies">Add Movies</Link>
                    </li>
                    <li><button>Sign in</button></li>
                </ul>
            </div>
             
        </div>
    )
} 
export default Navbar;
