import React ,{Component} from 'react';
import './Projects.scss';
import Tilty from 'react-tilty'
import Particles from 'react-tsparticles';

class Projects extends Component {
    render() {

        const particlesInit = (main) => {
            console.log(main);
        
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
          };
        
          const particlesLoaded = (container) => {
            console.log(container);
          };
    return (
                
                
            <div className= 'pages'>
                    
                    <h1 id="project">Projects</h1>
                    

                    <div className="display"> 

                    
                    {/* Project 1 */}

                        <div className="textbox mar">
                            
                            <h1 className="title">Project 1 Coming Soon</h1>
                            <span className="description">Project Under Construction...</span>

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
                        


                        {/* Project 2 */}

                        <div className="textbox mar">
                            
                            <h1 className="title">Project 2 Coming Soon</h1>
                            <span className="description">Project Under Construction...</span>

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
                            
                            <h1 className="title">Project 3 Coming Soon</h1>
                            <span className="description">Project Under Construction...</span>

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