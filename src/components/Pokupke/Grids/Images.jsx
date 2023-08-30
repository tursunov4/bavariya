import React, { useState } from "react";
import P1 from "../../../assets/Images/png/P1.png";
import P2 from "../../../assets/Images/png/P2.png";
import P3 from "../../../assets/Images/png/P3.png";
import P4 from "../../../assets/Images/png/P4.png";
import P5 from "../../../assets/Images/png/P5.png";
import P6 from "../../../assets/Images/png/P6.png";
import P7 from "../../../assets/Images/png/P7.png";
import P8 from "../../../assets/Images/png/P8.png";
import P9 from "../../../assets/Images/png/P9.png";
import imgitem from "../../../assets/Images/png/imgitem1.png"
import imgitem2 from "../../../assets/Images/png/imgitem2.png"
import imgitem3 from "../../../assets/Images/png/imgitem3.png"
import imgitem4 from "../../../assets/Images/png/imgitem4.png"
import imgitem5 from "../../../assets/Images/png/imgitem5.png"
import imgitem6 from "../../../assets/Images/png/imgitem6.png"
import imgitem7 from "../../../assets/Images/png/imgitem7.png"
import imgitem8 from "../../../assets/Images/png/imgitem8.png"
import imgitem9 from "../../../assets/Images/png/imgitem9.png"
import ResponsiveCard from "./ResponsiveCard";
import GridModal from "./GridModal/GridModal";

import "./style.css";

const Images = () => {
  const [modal ,setModal] = useState(false)
  const [num , setNum] = useState(1)
 
  const openModal =(id)=>{
    setNum(id)
    setModal(true)
  }
  return (
    <>
    <GridModal modal={modal} setModal={setModal}>
       <div className="images-modal__img">
         {
            num===1 ? <img src={imgitem} alt="" /> :""
         }
         {
            num===2 ? <img src={imgitem2} alt="" /> :""
         }
         {
            num===3 ? <img src={imgitem3} alt="" /> :""
         }
         {
            num===4 ? <img src={imgitem5} alt="" /> :""
         }
         {
            num===5 ? <img src={imgitem6} alt="" /> :""
         }
         {
            num===6 ? <img src={imgitem4} alt="" /> :""
         }
         {
            num===7 ? <img src={imgitem7} alt="" /> :""
         }
         {
            num===8 ? <img src={imgitem8} alt="" /> :""
         }
         {
            num===9 ? <img src={imgitem9} alt="" /> :""
         }        
       
       </div>
    </GridModal>
      <div className="images">
        <h1>Реальные фото пивоварни BAVARIA</h1>
        <div class="pokupka__images">
          <div onClick={()=>openModal(1)} id="item-0">
            <img src={P1} alt="rasm" />
          </div>
          <div onClick={()=> openModal(2)} id="item-1">
            <img src={P5} alt="rasm" />
          </div>
          <div onClick={()=>openModal(3)} id="item-2">
            <img src={P6} alt="rasm" />
          </div>
          <div onClick={()=> openModal(4)} id="item-3">
            <img src={P2} alt="rasm" />
          </div>
          <div onClick={()=>openModal(5)} id="item-4">
            <img src={P3} alt="rasm" />
          </div>
          <div onClick={()=>openModal(6)}  id="item-5">
            <img src={P7} alt="rasm" />
          </div>
          <div onClick={()=>openModal(7)} id="item-6">
            <img src={P4} alt="rasm" />
          </div>
          <div onClick={()=>openModal(8)} id="item-7">
            <img src={P8} alt="rasm" />
          </div>
          <div onClick={()=>openModal(9)} id="item-8">
            <img src={P9} alt="rasm" />
          </div>
        </div>
      </div>

      <ResponsiveCard />
    </>
  );
};

export default Images;
