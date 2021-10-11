import React from 'react'
import cover from "./card.jpg";

const Home = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
     
      <div style={{ height: "450px" , objectFit: "contain",width :"700px",margin:"auto" ,backgroundImage: `url(${cover})`,paddingLeft:"10px",paddingRight:"10px",backgroundRepeat: "no-repeat" , backgroundPosition:"center",
      backgroundSize: "cover"}}>
         
      </div>
      <br/>
      <br/>
      <h3 style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" ,color:"white",textAlign:"center"}}>Credit - Check</h3>
      <p style={{textAlign:"justify", paddingLeft:"200px", paddingRight:"200px" }}>
      "Getting a handle on your credit is the first step towards financial well-being. You know it, and we at Credit.com know it. Maybe you're looking to improve your bad credit to good credit, or maybe you just want to keep track of things. But where to start? First things first—you need to know where you’re at. That’s why Credit.com provides your free credit score from Experian, updated every 14 days. You can stay up-to-date with your very own credit report card, which keeps track of what you’re doing well and what you could improve."
     </p>
      
    </div>
  )
}

export default Home
