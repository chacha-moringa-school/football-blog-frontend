
import { NavLink } from "react-router-dom";

const Navbar = () => {


    const handleLogout = ()=>{
        fetch('/logout', {
            method: 'DELETE'
        })
    }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/blogs">Blogs</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active btn btn-primary" aria-current="page" to="/signup">Sign Up</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link active btn btn-primary ms-3" aria-current="page" to='/login'>Login</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link active  ms-3" aria-current="page" to='/create'>New Blog</NavLink>
                    </li>

                    <li className="nav-item">
                    <button className="nav-link active btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;