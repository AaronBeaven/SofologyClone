import React from 'react'
import { Link } from 'react-router-dom'
import stars from './images/stars.jpeg'

export default function Footer() {
    return (
        <div>
            <div className="star-container">
                <h2>Excellent</h2>
                <img className="star-image" src={stars}/>
                <h2>Trustpilot</h2>
            </div>
            <footer className="footer">
                
                <div className="shopBy">
                    <h3>SHOP BY</h3>
                    <Link>Leather Sofas</Link>
                    <Link>Fabric Sofas</Link>
                    <Link>Recliner Sofas</Link>
                    <Link>Corner Sofas</Link>
                    <Link> Sofa Beds</Link>
                    <Link>New in</Link>
                    <Link> Size or colour</Link>
                </div>
                <div className="aboutUs">
                    <h3>About Us </h3>
                    <Link>Careers</Link>
                    <Link>MySofology</Link>
                    <Link>Customer Charter </Link>
                    <Link>Privacy & Cookies Policy</Link>
                    <Link> Gender Pay</Link>
                    <Link>Modern Slavery</Link>
                    <Link> Sitemap</Link>
                    <Link> manage your preferences</Link>
                </div>
                <div className="ContactUS">
                    <h3>Contact Us</h3>
                    <p>Call us 7 days a week to chat about sofas or place an order.</p>
                    <p>03444818181</p>
                
            
                </div>
                <div className="socialMedia makeMeBlack">
                    <h3>Follow Us</h3>
                </div>


                
            </footer>
                <div className="footerText">
                    <p className="makeMeBlack"> © 2020 Sofology Limited. All rights reserved. Registered office: Golborne Point, Ashton Road, Golborne, WA3 3UL. Company registration number: 1778734
                        Delivery estimates are subject to availability in the location of our customers.</p>
                    <p className="makeMeBlack"> Sofology Limited is authorised and regulated as a credit broker by the Financial Conduct Authority (FCA) and is not the lender. Finance applications may be proposed to more than one lender.</p>
                    <p className="makeMeBlack"> Please note that additional scatter cushions and accessories may have been added to our imagery for styling purposes. These are for display only and are not included with the range.</p>
                </div>
        </div>

    )
}
