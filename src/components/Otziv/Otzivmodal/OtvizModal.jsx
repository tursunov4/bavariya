import React from 'react'
import "./style.css"
import Exit from '../../../assets/Images/svg/exit.svg'
const OtvizModal = ({modal ,setModal, children}) => {
    window.onclick = function(event) {
        if (event.target.id ==="modalotziv") {
          setModal(false)
        }
      }
    if(modal){
        return (
          <div id='modalotziv'  className="modalotziv">
          <div className="modal-content__otziv">
          <img onClick={()=>setModal(false)} className='modal-exit__otziv' src={Exit} alt="" />
            {
              children
             }
          </div>
        </div>
        )
    }
}

export default OtvizModal