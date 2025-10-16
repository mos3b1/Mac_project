import React, { useEffect, useRef } from 'react'

function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.playbackRate = 2;
        }
    }, [])
    
    return (
        <section id='hero'>
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
            </div>

            {/* FIXED: Added ref to video element */}
            <video 
                ref={videoRef}
                src="/videos/hero.mp4" 
                autoPlay 
                muted 
                playsInline
            />

            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 month</p>
        </section>
    )
}

export default Hero