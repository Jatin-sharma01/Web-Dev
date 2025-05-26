import React from 'react'
import "./Home.css"
import img1 from "../assets/student.png"

function Home() {
  return (
    <div className="upper body">
        


        <div className="mainBody">
            <div className="bannerLeft">
                <p className="bannerLeft1">a beauty of minimalism</p>
                <p className="bannerLeft2">Minimalist<br/> Furniture</p>
                <p className="bannerLeft3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt
                    accusamus tempore cum aut! Nesciunt excepturi voluptatum aspernatur eius corporis veniam nisi
                    accusantium ratione al</p>
                    <p className="bannerLeft3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt
                    accusamus tempore cum aut! Nesciunt excepturi voluptatum aspernatur eius corporis veniam nisi
                    accusantium ratione al</p>
                <div className="bannerButton">
                    <div className="bannerButton1">
                        <p>Learn More</p>
                    </div>

                </div>
            </div>
            <div className="bannerRight">
                <div className="greenBox">
                    <img src={img1}/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Home