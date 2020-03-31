import React from 'react'
import responsibility from './images/responsibility.png'
import mission from './images/mission.png'
import signature from './images/signature.png'
export default function Responsibility() {
    return (
        <div className="homeContainer">
        <div className="subNav">

        <ul>

           <li className="enviroment">
            <img id="enviromentLogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1583423359/environment-icon_aqn3li.png"></img>
            <p id="enviromentText">
                Enviroment
                </p>
            </li>

            <li className="enviroment" >
            <img id="enviromentLogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1583423367/product-icon_vtkbod.png"></img>
            <p id="enviromentText"> 
                Product
                </p>
            </li>
            <li  className="enviroment">
            <img id="enviromentLogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1583423367/people-icon_mcnmyw.png"></img>
            <p id="enviromentText">

                People
                </p>
            </li>
            <li  className="enviroment">
            <img id="enviromentLogos" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1583423359/charity-icon_hbsk64.png"></img>
            <p id="enviromentText">
                Charity
                </p>
            </li>
    

        
        </ul>

        </div>
            <div>
                    <img id="responsibility" src={responsibility}/>
                </div>
                <div>
                    <img id="responsibility" src={mission}/>
                </div>
                <div>
                    <img id="responsibility" src={signature}/>
            </div>
            <div>
                <img className="responsibilitysImg" src="https://images.sofology.co.uk/image/upload/v1583423360/Environment_ugrvee.jpg?width=550&height=407" 
                ></img>
                <img className="responsibilitysImg" src="https://images.sofology.co.uk/image/upload/v1583423368/Product_ti7phn.jpg?width=550&height=407" 
                ></img>

            </div>
            <div className="responsibilitysTxt">
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>

            </div>
            <div className="responsibilitysTxtButton">
            
                    <button className="responsibilitysButton">VIEW BLOG</button>
                    <button className="responsibilitysButton">VIEW BLOG</button>

            </div>
            <div>
                <img className="responsibilitysImg" src="https://images.sofology.co.uk/image/upload/v1583423368/People_q3j4xq.jpg?width=550&height=407" 
                ></img>
                <img className="responsibilitysImg" src="https://images.sofology.co.uk/image/upload/v1583423360/Charity_zu5coh.jpg?width=550&height=407" 
                ></img>

            </div>
            <div className="responsibilitysTxt">
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>

            </div>
            <div className="responsibilitysTxtButton">
            
                    <button className="responsibilitysButton">VIEW BLOG</button>
                    <button className="responsibilitysButtonTwo">VIEW BLOG</button>

            </div>
            <h2 className="shopSofas"> New in</h2>
            <div className="subContainer2">


                <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1584015073/plantree_vrcduf.png" title="the Layla"></img>
                <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1584015071/sofa-rescue_nwpyfs.png" title="the Layla"></img>
                <img className="newIn" src="https://images.sofology.co.uk/q_70,fl_lossy,f_auto/v1584015071/internationalwomensday_qdz0dx.png" title="the Layla"></img>




            </div>
            <img id="responsibilityTxtImg" src="https://images.sofology.co.uk/image/upload/v1583423349/Responsibility-Logo-Gre_wlrebg.png?width=263&height=38&mode=max"/>
            <div className="subContainer2">


                <img className="newIn" src="https://images.sofology.co.uk/image/upload/v1583423360/Environment_ugrvee.jpg?width=550&height=407" title="the Layla"></img>
                <img className="newIn" src="https://images.sofology.co.uk/image/upload/v1583423368/Product_ti7phn.jpg?width=550&height=407" title="the Layla"></img>
                <img className="newIn" src="https://images.sofology.co.uk/image/upload/v1583423368/People_q3j4xq.jpg?width=550&height=407" title="the Layla"></img>
                <img className="newIn" src="https://images.sofology.co.uk/image/upload/v1583423360/Charity_zu5coh.jpg?width=550&height=407" title="the Layla"></img>




            </div>



    </div>
    )
}
