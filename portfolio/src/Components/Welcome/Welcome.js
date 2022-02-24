import React from 'react';
import './Welcome.scss';
import 'animate.css';


class Welcome extends React.Component {
    render() {
    return (
        <>
        

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        
        
                
            <div className="header animate__animated animate__fadeInLeft space">
                <h1>
                Hello, my name is <span className="text-color-main">Shyan Walker</span>
                <br />
                The Aspiring Fullstack Developer.
                </h1>
                
                <a rel="noreferrer" style={{text_decoration:'none'}} href="#about">
                <button style={{text_decoration:'none'}} className="button" > Get to Know Me!</button>
                </a>
                    
            </div>
        
       
        
        </>
    
        
    );
}
}

export default Welcome;
