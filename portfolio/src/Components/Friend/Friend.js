import React from 'react'
import './Friend.scss'


class Friend  extends React.Component {
    render() {
    return (
        <>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
    
        <div className= "body animate__animated animate__slideInUp">
        
            <div id ="square">
            <div className= "eyes">
                <div  id ="circle1"></div>
                <div  id ="circle2"></div>
            </div>
            </div>
            <div className="arms">
                <div  id ="arm1"></div>
                

                <div id="arml">
                <div id ="arm2"></div>
                </div>

                <div id="armu">
                <div id ="elbow"></div>
                
                </div>

                <div id="arml">
                <div id ="arm23"></div>

                </div>

            </div>
            <div className="hat">
                <div id='hattop'></div>
                <div id='hatbottom'></div>
            </div>
        </div>

        
        </>
    
        
    );
}
}

export default Friend;