import React from 'react'
import { slider } from '../components/homePageImageSlider'

function Home() {
    return (
        <>
        <div className="inner-container">
            <div className="home">
                <div>
                    Welcome to my website!
                </div>
                
                <div>
                    <br />
                    This website is primarily dedicated to explaining my software interests and experience in the tech industry, but is also dedicated to show my personal interests. 
                </div>

                <div>
                    <br />
                    I hope you enjoy the website and the work that I put into it; for all the tech geeks out there I used Netfliy and React to create this website.
                    <br />
                    <br />
                    {slider}
                </div>

            </div>
        </div>
        
        
        </>
    )
}

export default Home
