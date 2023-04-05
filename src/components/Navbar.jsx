
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate()

    function handleLogOut() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            navigate('/', { replace: true })
            props.setUserSignedIn(false);
          }
        });
    }
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Dimblogs</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        props.userSignedIn ? (
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active  me-3" aria-current="page" to='/blogs'>Blogs</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link active  ms-3" aria-current="page" to='/create'>New Blog</NavLink>
                                    </li>
                                </ul>
                                <button className="nav-link active btn btn-danger mx-2 p-2" onClick={handleLogOut}>Logout</button>
                            </>
                        ):(
                            <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active  me-3" aria-current="page" to='/blogs'>Blogs</NavLink>
                                    </li>
                
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link active btn btn-primary" aria-current="page" to="/signup">Sign Up</NavLink>
                                    </li>
                
                                    <li className="nav-item">
                                        <NavLink className="nav-link active btn btn-primary ms-3" aria-current="page" to='/login'>Login</NavLink>
                                    </li> */}
                                </ul>
                                <NavLink className="nav-link active btn btn-primary mx-3 p-2" aria-current="page" to='/login'>Login</NavLink>
                                <NavLink className="nav-link active btn btn-primary mx-2 p-2" aria-current="page" to="/signup">Sign Up</NavLink>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;