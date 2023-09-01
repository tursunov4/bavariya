import  { useState } from "react";
import P1 from "../../../assets/Images/png/Pokupka responsive images/P1.webp";
import P2 from "../../../assets/Images/png/Pokupka responsive images/P2.webp";
import P3 from "../../../assets/Images/png/Pokupka responsive images/P3.webp";
import P4 from "../../../assets/Images/png/Pokupka responsive images/P4.webp";
import P5 from "../../../assets/Images/png/Pokupka responsive images/P5.webp";
import P6 from "../../../assets/Images/png/Pokupka responsive images/P6.webp";
import P7 from "../../../assets/Images/png/Pokupka responsive images/P7.webp";
import P8 from "../../../assets/Images/png/Pokupka responsive images/P8.webp";
import P9 from "../../../assets/Images/png/Pokupka responsive images/P9.webp";
import imgitem from "../../../assets/Images/png/Pokupka responsive images/imgitem1.webp"
import imgitem2 from "../../../assets/Images/png/Pokupka responsive images/imgitem2.webp"
import imgitem3 from "../../../assets/Images/png/Pokupka responsive images/imgitem3.webp"
import imgitem4 from "../../../assets/Images/png/Pokupka responsive images/imgitem4.webp"
import imgitem5 from "../../../assets/Images/png/Pokupka responsive images/imgitem5.webp"
import imgitem6 from "../../../assets/Images/png/Pokupka responsive images/imgitem6.webp"
import imgitem7 from "../../../assets/Images/png/Pokupka responsive images/imgitem7.webp"
import imgitem8 from "../../../assets/Images/png/Pokupka responsive images/imgitem8.webp"
import imgitem9 from "../../../assets/Images/png/Pokupka responsive images/imgitem9.webp"
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
            num===2 ? <img src={imgitem5} alt="" /> :""
         }
         {
            num===3 ? <img src={imgitem6} alt="" /> :""
         }
         {
            num===4 ? <img src={imgitem2} alt="" /> :""
         }
         {
            num===5 ? <img src={imgitem3} alt="" /> :""
         }
         {
            num===6 ? <img src={imgitem7} alt="" /> :""
         }
         {
            num===7 ? <img src={imgitem4} alt="" /> :""
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
        <div className="pokupka__images">
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
