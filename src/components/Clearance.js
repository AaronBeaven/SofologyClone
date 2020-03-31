import React from 'react'
import ClearanceImg from './images/ClearanceImg.png'
import clearanceSofas from './images/clearanceSofas.png'
import clearanceSofas2 from './images/clearanceSofas2.png'
import clearanceSofas3 from './images/clearanceSofas3.png'

export default function Clearance() {
    return (
        <div>

        <div>
            <img className="ClearanceImg" src={ClearanceImg}/>
        </div>
        <div>
            <img className="clearanceSofas" src={clearanceSofas}/>
        </div>
        <div>
            <img className="clearanceSofas" src={clearanceSofas2}/>
        </div>
        <div>
            <img className="clearanceSofas" src={clearanceSofas3}/>
        </div>
        <div>
            <img className="clearanceSofas" src={clearanceSofas}/>
        </div>
        <div>
        <img className="clearanceSofas" src={clearanceSofas2}/>
        </div>
        <div>
            <img className="clearanceSofas" src={clearanceSofas}/>
        </div>

        <div>
            <p id="page1">
                Page 1 of 4
            </p>
        </div>
        <div id="page1button">
                <button id="page1buttontxt">1</button>
                <button id="page1buttontxt">2</button>
                <button id="page1buttontxt">3</button>
                <button id="page1buttontxt">4</button>
                <button id="page1buttontxt">next</button>
        </div>
            
        </div>
    )
}
