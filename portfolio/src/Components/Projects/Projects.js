import React ,{Component} from 'react';
import './Projects.scss';
import CalcPic from './CalcPic.png';

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
                            <span className="description">A basic online calculator made from scratch! Here to handle all of your mathematic problems.</span>

                            <a href="https://shyan-spec.github.io/Calculator/" target="_blank">
                            <button className="live">See Live!</button>
                            </a>
                            </div>

                        </div>

                        
                    

                    
                    <div className="box1 mar">
                    <img alt="Calculator Image" className="Calc-img" src={CalcPic}/>
                        </div>
                        


                        {/* Project 2 */}

                        <div className="textbox mar">
                            
                            <h1 className="title">Project 2</h1>
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