import React from 'react'
import Exit from "../../../../assets/Images/svg/exit.svg"
import "./girdmodal.css"
const GridModal = ({modal, setModal, children}) => {
  
    window.onclick = function(event) {
        if (event.target.id ==="modal3") {
          setModal(false)
        }
      }
    if(modal){
        return (
          <div id='modal3'  class="modal3">
          <div class="modal-content3">
          <img onClick={()=>setModal(false)} className='modal-exit3' src={Exit} alt="" />
            {
              children
             }
          </div>
        </div>
        )
    }
  
}

export default GridModal