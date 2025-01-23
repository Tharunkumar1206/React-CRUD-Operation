import { Link } from "react-router-dom"

export function Layout() {
    return(
        <>
            <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to="/products">Products</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export function Footer(){
    return(
        <>
            <footer>
                <div className="container p-3 mt-5 border-top">
                <small className="d-block text-center text-muted">&copy; 2025- curd operation</small>

                </div>
            </footer>
        </>
    )
}