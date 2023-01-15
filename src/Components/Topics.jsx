import React from "react";
import "../assets/styles/topics.css"
import fixed_width from "../assets/images/skills/fixed-width.png"
export default function Topics(){
    return (
    <div className="topic">
        <div style={{textAlign: "center",letterSpacing: "0.005em",color: "#FB5741",paddingTop:"35px"}}>Curriculum</div>
         <div style={{fontStyle: "normal",fontWeight: "800",fontSize: "26px",lineHeight: "36px",textAlign:"center"}}>Topics covered</div>
        <div className="tiless_topic" >
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
            <div className="tilee_topic" style={{width: "226px",
                    height: "148px",padding: "15px 40px 35px 15px"}}>
                <div> <img src={fixed_width} alt="" className="img" /> 
                <div style={{fontSize:"15px",color:"#252B42"}}>Scrum lifecycle</div></div>
               
            </div>
        </div>
    </div>
    )
}