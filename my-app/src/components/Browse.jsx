import React from 'react'
import "./Browse.css"
import Img1 from "../assets/browse1.png"
import Img2 from "../assets/browse2.avif"
import Img3 from "../assets/browse3.png"
import Img4 from "../assets/browse4.png"

function Browse() {
  return (
    <div className='mainBrowse'>
        <div className="upperSectionBrowse">
            <p className="upperBrowseText1">Browser The Range</p>
        <p className="upperBrowseText2">Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="lowerBrowseSection">
            <div className="imageSection">
            <div className="browseImageBox"><img src={Img1}/></div>
            <div className="browseImageBox"><img src={Img2}/></div>
            <div className="browseImageBox"><img src={Img3}/></div>
            <div className="browseImageBox"><img src={Img4}/></div>
            </div>
        </div>
    </div>
  )
}

export default Browse