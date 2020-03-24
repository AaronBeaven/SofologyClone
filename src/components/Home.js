import React from 'react'
import one from './images/stars.jpeg'
import sofasizer from './images/sofaSizer.png'
import charity from './images/charitys.png'
import Sofogical from './images/Sofogical.png'



export default function Home() {
    return (
        <div className="homeContainer">
        <div className="subNav">

        <ul>

            <li >
                <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/orderdirect-wht_swia2i.png"></img>
                <p id="Navlogostxt"> 
                Order Direct
                </p>
            </li>
            <li>
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621445/pin-wht_vuyia7.png"></img>
                <p id="Navlogostxt">
                Find a store
                </p>
            </li>
            <img id="NavlogosPause" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621151/line-wht_uxkjoa.png"></img>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/fabric-wht_js1jbz.png"></img>
            <p id="Navlogostxt">
                Fabric
                </p>
            </li>

            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/leather-wht_t49e1k.png"></img>
            <p id="Navlogostxt"> 
                Leather
                </p>
            </li>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/corner-wht_xt8gh4.png"></img>
            <p id="Navlogostxt">

                Corners
                </p>
            </li>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/recliners-wht_sdb6b0.png"></img>
            <p id="Navlogostxt">
                Recliners
                </p>
            </li>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/sofabeds-wht_j91ptr.png"></img>
            <p id="Navlogostxt">
                Sofa beds
                </p>
            </li>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1576760925/sofasizer_vsdam1.png"></img>
            <p id="Navlogostxt">
                Sofasizer
                </p>
            </li>
            <img id="NavlogosPause" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621151/line-wht_uxkjoa.png"></img>
            <li >
            <img id="Navlogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1523621152/productsupport-wht_vaofdx.png"></img>
                <p id="Navlogostxt">
                Customer Service
                </p>
            </li>

        
        </ul>
        </div>

        <div className="underNav">
        <p className= "underNavText"> Guaranteed for 20 years </p>
        <p className= "underNavText"> Exclusive sofa designs </p>
        <p className= "underNavText"> Intrest Free 0% APR (minimum Spend £500) </p>
        <p className= "underNavText"> Always 100% Leather </p>

            
            
        </div>
        <div className="mainBannerHome">

            <div className="mainBannerHomeInfo">

            <h2 id="exclusiveLeather"> Exclusive leather <br></br>designs</h2>
            <p className="bannerInfo">Colour isn’t just for fabric. Discover our leather styles in <br></br> every shade from soft and subtle neutrals to bright, bold <br></br> statement sofas.</p>
            <button className="bannerButton"> SHOP LEATHER</button>
            <button className="bannerButton">SHOP MIMI</button>
        </div>
            </div>

                <h2 className="shopSofas"> Shop sofas</h2>
            <div className="shopSofas">
                <img src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1581499891/cat-fabric-tallulah_thriqd.jpg" class="" title="Fabric Sofas"></img>
                <img src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1574162213/umbraco%20website/shopsofas-cricket.jpg.jpg" class="" title="Fabric Sofas"></img>
                <img src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1581502357/cat-corner-clerkenwell_gfa0h1.jpg" class="" title="Fabric Sofas"></img>

            </div>
                <div className="shopSofastxt">
                <p id="typeOfSofas">Fabric Sofas</p>
                <p id="typeOfSofas">Leather Sofas</p>
                <p  id="typeOfSofas">Corner Sofas</p>
                </div>


                <img id="sofaSizerImg" src={sofasizer}/>
                <h2 className="shopSofas"> New in</h2>
            <div className="subContainer">


            <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1584440236/umbraco%20website/newin-layla.png.png" title="the Layla"></img>
            <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1582727755/umbraco%20website/newin-hallie.png.png" title="the Layla"></img>
            <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1582727830/umbraco%20website/newlooks-ashford.png.png" title="the Layla"></img>
            <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1582042670/new-in-sapphire_kodqdn.png" title="the Layla"></img>


            </div>
            <div className="four">
            <p className="newInSofas">The Layla</p>
            <p className="newInSofas">The Hallie</p>
            <p className="newInSofas">The Ashford</p>
            <p className="newInSofas">The Sapphire</p>
            </div>

            <h2 id="Inyourhome">@sofology | our sofas in your homes</h2>


            <div className="inYourHouse">





            <img className="SofologyInYourHour" src="https://z1photorankmedia-a.akamaihd.net/media/g/a/p/gapwzo4/normal.jpg" title="the Layla"></img>
            <img className="SofologyInYourHour" src="https://z3photorankmedia-a.akamaihd.net/media/p/q/u/pquwgm4/normal.jpg" title="the Layla"></img>
            <img className="SofologyInYourHour" src="https://z2photorankmedia-a.akamaihd.net/media/i/h/8/ih8n6o4/normal.jpg" title="the Layla"></img>
         


            </div>
            
            <div className="socialMore">
            <button className="viewMore"> VIEW MORE </button>
            <button className="viewMore">ADD A PHOTO</button>
            </div>

            <div>

                    <img id="sofaSizerImg" src={Sofogical}/>
            </div>
            <div className="inYourHouse">


            <img className="blogs" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1582108387/umbraco%20website/sofologicalcards-parisian.jpg.jpg" ></img>
    
            <img className="blogs" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1579778889/umbraco%20website/sofologicalcards-pantoneblue.jpg.jpg" 
            ></img>
        
            <img className="blogs" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1577184369/umbraco%20website/sofological-newlife.jpg.jpg" 
            ></img>
            
            </div>
            <button className="BloggsButton">VIEW BLOG</button>

          
            <div className="sofaSizer" >

                    <img id="sofaSizerImg" src={charity}/>
                    <button className="shopTheCollection">Shop The Collection</button>
            </div>


            <div className="ImgSofaContainer">





                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1575466212/ss-gabrielle_velfh0.jpg" title=""></img>
                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1575468256/ss-odessy_uovaii.jpg" title=""></img>
                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1575468260/ss-persia_vddkbh.jpg" title=""></img>
                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1575466212/ss-palm-2_vkbwmw.jpg" title=""></img>
                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1576160097/ss-perle_galddb.jpg" title=""></img>
                <img className="ImgSofa" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1576160096/ss-emperor_jybehs.jpg" title=""></img>
               



            </div>
            <div id="ImgSofaText">
                <p id="ImgSofaText">The Gabrielle</p>
                <p id="ImgSofaText">The Odessey</p>
                <p id="ImgSofaText">The Persia</p>
                <p id="ImgSofaText">The Palm</p>
                <p id="ImgSofaText">The Perle</p>
                <p id="ImgSofaText">The Emporer</p>
            </div>
            <div>
                <p id="bottomText"> As part of their PlanTree initiative, Sofology Limited have partnered with the Woodland Trust (registered charity number England and Wales: No: 294344, Scotland No. SC038885) to fund the planting of trees in the UK.&nbsp; Sofology will donate £1.25 in respect of each completed and fulfilled order for Sofology furniture and accessories* that is made between 16th March 2020 and 9th March 2023 (inclusive).</p>
            </div>
 

        </div>

    )
}
