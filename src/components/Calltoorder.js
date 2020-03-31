import React from 'react'
import heretoHelp from './images/hereToHelp.png'
import chooseSofology from './images/chooseSofology.png'

export default function Calltoorder() {
    return (
        <div>

            <div>
                <img id="hereToHelp" src={heretoHelp}/>
            </div>
            

            <div>
                <img className="CallToOrderImg" src="https://images.sofology.co.uk/image/upload/q_60/v1505831379/homepage/sep-17-Update/Lille-94.jpg" 
                ></img>
                <img className="CallToOrderImg" src="https://images.sofology.co.uk/image/upload/q_60/v1505831378/homepage/sep-17-Update/Hendrix-GettingMore.jpg" 
                ></img>
                <img className="CallToOrderImg" src="https://images.sofology.co.uk/image/upload/q_60/v1505831378/homepage/sep-17-Update/Sofologist-NoPressure.jpg" 
                ></img>

            </div>

            <div className="calltoOrderText">

                <h3 id="CallToOrderTitle"> 94% of Sofology customers would <br></br> recommend friends & family</h3>
                <h3 id="CallToOrderTitle"> It’s about paying less and  <br></br> getting more</h3>
                <h3 id="CallToOrderTitle"> No salesmen on commission <br></br> means no pressure</h3>
            </div>
            <div className="calltoOrderText">
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>
                <p  id="responsibilitysImgTxt">Our green dream is to be able to mitigate 100% of our carbon output through <br></br> our partnership with the Woodland Trust. By recycling and reducing our <br></br> emissions we will minimise our carbon footprint and lessen our impact on this <br></br> planet we call home.</p>

            </div>
            <div>
                <img id="hereToHelp" src={chooseSofology}/>
            </div>


        </div>
    )
}
