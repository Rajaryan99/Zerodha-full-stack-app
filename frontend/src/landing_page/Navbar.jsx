import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img style={{ width: '110px' }} src="public/logo.svg" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            <Link className="nav-link active" aria-current="page" to="/product">Product</Link>
            <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
            <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
            <Link className="nav-link active" aria-current="page" to="#">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
