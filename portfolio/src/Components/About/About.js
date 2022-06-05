import React ,{Component} from 'react';
import ShyanPhoto from './ShyanWalker.jpeg'
import './About.scss';
import Resume from '/Users/shyanw/Documents/Shyan-Portfolio/portfolio/src/Components/About/OR SWalker 2022.pdf';

class About extends Component {
    render() {
    return (
                

                    
                    <div className= 'square'>

                    <h1 className="about-me">ABOUT ME</h1>
                    

                    
                    <div className="mars">
                    <img alt="Profile Image" className="img-fluid"  src={ShyanPhoto}/>

                    <div className="info-res wrap">
                    
                    <span className="paragraph">
                    Hey, I hope everything is well! I am a recent college graduate currently residing in <br/> New York City seeking job opportunities in the tech industry.<br/> 
                    I would honor the privilege of working in a team-based environment where <br/>I would be able to hone my computer programming skills. <br/>
                    Every company deserves a person who is determined to get work done by any means,<br/> as well as adaptable, and flexible. <br/>Although I've learned a lot in the field of software development,<br/> 
                    I will always keep an open mind and strive for more.
                    
                    <br/>
                    <br/>
                    Some of my hobbies are practicing code in the form of data structures and personal projects, <br/> playing video games, and playing guitar!<br/>
                    I'm hoping to be a part of a huge development team, <br/> collaborating and producing many applications and games. 
                    
                    </span>
                    

                    <a rel="noreferrer" target="_blank"  href={Resume}>
                    <button className='border-box resume-button'>View Resume</button>
                    </a>
                    
                    </div>
                    </div>
                    </div>

                
                    



                    
                    
                    
               
                

    );
}
}


export default About;