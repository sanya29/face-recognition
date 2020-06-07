import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                {/*eslint-disable-next-line*/ } 
                <img id="inputimage" alt="The image at the URL you just entered will show up here!" src={imageURL} width='500px' height='auto'/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;