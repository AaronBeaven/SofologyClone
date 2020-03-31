import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return(


            // <div className="login">

            //     <p>myFavourites</p>
            //     <p>login</p>
            // </div>
    <header>
            <span>
                <img id="logo" src="https://images.sofology.co.uk/image/upload/c_scale,w_164/v1482312185/Umbraco%20Website/Sofology-Logo-Standard.png"
                alt="Sofology Logo" />
            </span>
        <div className="nav-container">
        <nav className="Navigation">
                {/* <span>
                <img src="https://images.sofology.co.uk/image/upload/c_scale,w_164/v1482312185/Umbraco%20Website/Sofology-Logo-Standard.png"
                alt="Sofology Logo" />
                </span> */}

                {/* <div className="Navigation"> */}
            
            <Link className="Link" to='/'>Sofas</Link>
                <Link className="Link" to='/findstore'>Find a Store</Link>
                <Link className="Link" to='/responsibility'>Responsibility</Link>
                <Link className="Link" to='/findstore'>More</Link>
                <Link className="CallToOrder" to='/calltoorder'>Call To Order</Link>
                <Link className="Link" to='/Clearance'>Clearance</Link>
                
                <Link className="Link" to='/findstore'><ion-icon name="search-outline"></ion-icon></Link>

                {/* </div> */}
            {/* <span>
            <ul>
            <li>Sofas</li>
            <Link to='FindAStore.js'>Find a Store</Link>
            <li>Responsibility</li>
            <li>More</li>
            <li className="CallToOrder"><a>CALL TO ORDER</a></li>
            <li>Clearance</li>
            <li className="search"><ion-icon name="search-outline"></ion-icon></li>
            </ul>
            </span> */}
        </nav>
        </div>

        </header>

    )}
export default Navbar;