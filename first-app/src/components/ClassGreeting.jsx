import { Component } from "react";

class ClassGreeting extends Component {
    render() {
        console.log(this.props)
        return (
            <small>This is a class component</small>
        )
    }
}

export default ClassGreeting

/* import Netflix_Logo_RGB from './assets/Netflix_Logo_RGB.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark px-lg-5">
            <p className="navbar-brand">
             <img src={process.env.PUBLIC_URL + '/Netflix_Logo_RGB'} width="120" />
                <img src={Netflix_Logo_RGB} width="120" />
            </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <p id="home" className="nav-link">Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Link</p>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <p className="dropdown-item">Action</p>
                            <p className="dropdown-item">Another action</p>
                            <div className="dropdown-divider"></div>
                            <p className="dropdown-item">Something else here</p>
                        </div>
                    </li>
                    <li className="nav-item">

                    </li>
                </ul>
                <ul className="list-unstyled text-white">
                    <li className="d-inline-block align-middle mr-3"><i className="bi bi-search"></i></li>
                    <li className="d-inline-block align-middle mr-3">KIDS</li>
                    <li className="d-inline-block align-middle mr-3"><i className="bi bi-bell"></i></li>
                    <li className="d-inline-block align-middle">
                        <div className="btn-group dropleft">
                            <button type="button" className="btn text-white dropdown-toggle p-0" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-person"></i>
                            </button>
                            <div className="dropdown-menu">
                                <p className="dropdown-item">Action</p>
                                <p className="dropdown-item">Another action</p>
                                <p className="dropdown-item">Something else here</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>)
}

export default Navbar */