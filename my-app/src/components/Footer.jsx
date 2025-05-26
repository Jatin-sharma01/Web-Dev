import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className="iconBar">
                <p className="iconBarLeft">Get Connected With Us On Social Networks:</p>
                <div class="rightFooter">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
            </div>
            <div className="lower">
                <div className="lower1">
                    <h3>COMPANY NAME</h3>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
                <div className="lower2">
                    <h3>Products</h3>
                   <ul >
                        <li>Dining Table</li>
                        <li>Chair</li>
                        <li>Sofa</li>
                        <li>Bed</li>
                    </ul>
                </div>
                <div className="lower2">
                    <h3>Use Full Links</h3>
                    <ul>
                        <li>Your Account</li>
                        <li>Become An Affiliate</li>
                        <li>Shipping Rate</li>
                        <li>Help</li>
                    </ul>
                   
                </div>
                <div className="lower2">
                    <h3>CONTACTS</h3>
                   <ul>
                        <li>+9999999999</li>
                        <li>+9999999999</li>
                    </ul>
                </div>
                
            </div>
            <div className="bottomLine"></div>
            <div className="lastLine">
               <p>&copy;2025 Copyright: Studentecosystem.com</p>
            </div>
            
        </div>
    )
}

export default Footer