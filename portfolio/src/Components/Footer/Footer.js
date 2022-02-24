import React , {Component} from 'react';
import './Footer.scss';
import Arrow from './arrow.png';
import LinkedIn from './link.svg';
import Twitter from './Twitter.svg';
import Github from './Github.svg';


class Footer extends Component {
    render() {
    return (
                
                <div class="footer">
                   <div className="footer-box">
                   
                   <div className58855="back-to-top-wrapper"> 
                   <a  href="#top" class="back-to-top-link" aria-label="Scroll to Top">
                   <img class="arrow" height="auto" width="20px"src={Arrow}/>
                   </a>
                   </div>

                    <div id = "icons">

                    <a rel="noreferrer" href="https://github.com/Shyan-spec/" target="_blank">
                    <img className="github"height="auto" width="40px"src={Github}/>
                    </a>
                    
                    <a rel="noreferrer" href="https://twitter.com/WalkerShyan" target="_blank">
                    <img className="twitter" height="auto" width="40px"src={Twitter}/>
                    </a>

                    <a rel="noreferrer" href="https://www.linkedin.com/in/shyan-walker/" target="_blank">
                    <img className="linkedin" height="auto" width="45px"src={LinkedIn}/>
                    </a>
                    
                    </div>
                    <hr></hr>
                   </div>
                   <div></div>
                   <p className="footer_text"> © 2022 - Portfolio developed by Shyan Walker</p>
                </div>
                
            
    );
}
}


export default Footer;