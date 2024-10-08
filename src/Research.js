import logo from './logo.svg';
import './App.css';
import './Research.css';
import eye from './Content/eye.png';
import {ResearchImages} from './ResearchImages'; 
import React, { useState, useEffect } from 'react';

function Research() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 5000;

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % ResearchImages.length);
        }, intervalTime);
    
        return () => clearInterval(intervalId); // Clean up on unmount
    }, [currentIndex]); // Empty dependency array ensures this runs only once
    

  return (
    <div id='research' className='research-container' style={{marginBottom: '30px'}}>
        <h3 className='research-info-heading' style={{textTransform: 'uppercase'}}>Investigating variations and combinations of geospatial visualizations based on spatial dimensionality of attribute space and reference space</h3>

        <div className='research-info-photo-container'>
            <div className='research-info-container'>
                <p className='research-info-date'>September 2021 - April 2024</p>
                <p className='research-info-subtitle'>University of Victoria, BC, Canada</p>

                <p className='research-info-techstack'>Tech Stack: Unity, C#, HLSL, Eye-tracker, User Study, Literature Review, System Design</p>
                <ul>
                    <li>
                        <p className='research-info-pointer'>For my Research Project, with the use of an eye-tracker, investigated whether 2D, 3D, or a combination of both views is suitable for a particular task such as navigation, searching, value reading, etc.</p>
                    </li>
                    <li>
                    <p className='research-info-pointer'>Designed and developed system in Unity using C# and HLSL through which users can interact in both 2D and 3D space.</p>
                    </li>
                    <li>
                    <p className='research-info-pointer'>Used Python to analyze and visualize quantitative/eye-tracker data of 17000+ lines collected during the experiment.</p>
                    </li>
                    <li>
                    <p className='research-info-pointer'>Took initiative to conduct EyeLink Plus 1000 eye-tracker training and set up sessions to successfully learn and finish objectives within a given timeline.</p>
                    </li>
                </ul>
            </div>

            <div className='research-photo-container'>
                {
                    ResearchImages.map((val, index) => {
                        console.log(val.src);

                        return (
                            <img key={index} src={val.src} alt={val.title} className={`image${index === currentIndex ? '-active' : '-inactive'}`} style={{ zIndex: ResearchImages.length - index }}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    
  );
}

export default Research;
