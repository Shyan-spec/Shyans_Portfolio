import React ,{Component} from 'react';
import './Projects.scss';
import CalcPic from './CalcPic.png';
import DailyVoice from './DailyVoice.png'

class Projects extends Component {
    render() {

        
    return (
                
                
            <div className= 'pages'>
                    
                    <h1 id="project">Projects</h1>
                    

                    <div className="display"> 

                    
                    {/* Project 1 */}

                        <div className="textbox mar">
                            
                            <h1 className="title">Project 1: <br/> Your Online Calculator</h1>
                            <div className="desAndbuttonWrap">
                            <span className="description">A basic online calculator made from scratch! Here to handle all of your mathematic problems. 
                            <br/> Displays understanding of Javascript, HTML and CSS languages.</span>

                            <a className="live" href="https://shyan-spec.github.io/Calculator/" target="_blank">
                            See Live!
                            </a>
                            </div>

                        </div>

                        
                    

                    
                    <div className="box1 mar">
                    <img alt="Calculator" className="Calc-img" src={CalcPic}/>
                        </div>
                        


                        {/* Project 2 */}

                        <div className="textbox mar">
                            
                            <h1 className="title">Project 2: <br/> The Daily Voice</h1>
                            <div className="desAndbuttonWrap">
                            <span className="description">A Public Forum Simulator. <br/> Login and Post whatever is on your mind for everyone to read!
                                <br/> Utilizes JavaScript, HTML and CSS Languages for the Frontend, and MySQL for the database.  </span>
                            <button className="live">Now publishing...</button>
                            </div>

                        </div>

                    
                    <div className="box1 mar">
                    <img alt="Login DailyVoice" className="DV-img" src={DailyVoice}/>
                        </div>


                        {/* Project 3 */}
                        
                        <div className="textbox mar">
                            
                            <h1 className="title">Project 3</h1>
                            <div className="desAndbuttonWrap">
                            <span className="description">Project Under Construction.</span>
                            <button className="live">Coming Soon...</button>
                            </div>

                        </div>

                    
                    <div className="box mar">
                    <div className="all-gears">
                        <div className="gear parent1">
                                <div class="center"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                                
                            </div>
                            <div className="gear parent2">
                                <div class="center"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                                <div class="tooth"></div>
                            </div>
                            <div className="gear2 parent3">
                                <div class="center2"></div>
                                <div class="tooth2"></div>
                                <div class="tooth2"></div>
                                <div class="tooth2"></div>
                                <div class="tooth2"></div>
                            </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    

    
                    
                    
                    
                
                
                

    );
}
}


export default Projects ;