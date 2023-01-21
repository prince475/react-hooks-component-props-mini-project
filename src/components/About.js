import React from "react";

function About({image="https://via.placeholder.com/215",about}){
    return (
        <div   className="About">
            <aside>
                <img  src={image} alt="blog logo"/>
            
            </aside>
            <p>{about}</p>
        
        </div>
    );
}

export default About;