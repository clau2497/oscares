import React from "react"
import './navbarindex.css'
import logo from "../../../assets/img/oscars.jpg"

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={logo}/>
                <div className="cont">
                    <label>Buscar</label>
                    <input type="search" placeholder="Encuentra tu nominado favorito"></input>
                </div>
            </nav>


        </>

    )

}
export default Navbar