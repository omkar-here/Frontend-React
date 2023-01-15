
import "../assets/styles/skill.css"
import clock from "../assets/images/skills/Clock.png"
import diploma from "../assets/images/skills/Diploma.png"
 import member_card from "../assets/images/skills/Membership Card (1).png"
import online from "../assets/images/skills/Online.png"
import ok from "../assets/images/skills/Ok.png"

export default function Skill() {
    return (
        
            <section className="skill">
                <div>
                <div style={{ paddingTop: "39px", color: "#FB5741", fontSize: "14px" }}>Why Skillbook</div>
                <div style={{ paddingTop: "12px", paddingBottom: "22px" }}><strong style={{ fontSize: "26px", color: "white" }}>Skillbook Advantage</strong></div >
                
               
                <div className="tilesss">
                    <div className="tileee" >
                        <div className="img-sec">
                            
                            <img className="img" src={clock} /></div>
                        <div>
                            <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                            <div className="tile-text">
                                Our CSM training program is designed to help you reach your goals with a 99% success rate.
                            </div>
                        </div>
                    </div>
                    <div className="tileee" >
                        <div className="img-sec">
                        
                            <img className="img" src={diploma} /></div>
                        <div>
                            <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                            <div className="tile-text">
                                An Esteemed Panel of CSTs
                            </div>
                        </div>
                    </div>
                    <div className="tileee" >
                        <div className="img-sec">
                       
                            <img className="img" src={member_card} /></div>
                        <div>
                            <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                            <div className="tile-text">
                                An Esteemed Panel of CSTs
                            </div>
                        </div>
                    </div>
                    <div className="tileee" >
                        <div className="img-sec">
                        
                            <img className="img" src={ok} /></div>
                        <div>
                            <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                            <div className="tile-text">
                                GLOBAL REA
                            </div>
                        </div>
                    </div>
                    <div className="tileee" >
                        <div className="img-sec">
                        
                            <img className="img" src={online} /></div>
                        <div>
                            <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                            <div className="tile-text">
                                GLOBAL REA
                            </div>
                        </div>
                    </div>
                        <div className="tileee" >
                            <div className="img-sec">
                                <img className="img" src={member_card} /></div>
                            <div>
                                <strong style={{ fontSize: "20px", color: "white" }}>99% success guaranteed</strong>
                                <div className="tile-text">
                                    Our CSM training program is designed to help you reach your goals with a 99% success rate.
                                </div>
                            </div>
                        </div>

                </div>
                </div>
            </section >
        

    )
}