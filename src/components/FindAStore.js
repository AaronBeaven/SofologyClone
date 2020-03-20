import React from 'react'

export default function FindAStore() {
    return (
        <div>
              <body>
<div className="mainBanner">
        <div className="bannerForm">
        <h1>Store Locator</h1>
        
          <p>We have stores nationwide.
          <br></br>
          Please enter your postcode or town to find the closest store to you:
          </p>
        <input className="inputSearch" type="text" placeholder="Postcode or Town" required="" value=""></input>
        <button className="btnSearch"><ion-icon name="search-outline"></ion-icon></button>

        </div>
        </div>

        {/* <iframe aria-hidden="true" frameborder="0" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"></iframe> */}
        <div className="storeInfo">
          <h2>BELFAST SOFOLOGY</h2>
          <p className="phoneNumber"> t. 034448639031</p>
          <p> 49 Boucher Road, Belfast,
            <br></br>
            BT12 6HR
          </p>
          <button className="storeDetials"> STORE DETAILS</button>

        </div>
        <div className="storeInfo">
          <h2>BLACKBURN SOFOLOGY</h2>
          <p className="phoneNumber"> t. 034448639031</p>
          <p> 49 Boucher Road, Belfast,
            <br></br>
            BT12 6HR
          </p>
          <button className="storeDetials"> STORE DETAILS</button>

        </div>
        <div className="storeInfo">
          <h2>BOLTON SOFOLOGY</h2>
          <p className="phoneNumber"> t. 034448639031</p>
          <p> 49 Boucher Road, Belfast,
            <br></br>
            BT12 6HR
          </p>
          <button className="storeDetials"> STORE DETAILS</button>

        </div>
        <div className="storeInfo">
          <h2>BRENT SOFOLOGY</h2>
          <p className="phoneNumber"> t. 034448639031</p>
          <p> 49 Boucher Road, Belfast,
            <br></br>
            BT12 6HR
          </p>
          <button className="storeDetials"> STORE DETAILS</button>

        </div>
      </body>

    </div>
  );
}
