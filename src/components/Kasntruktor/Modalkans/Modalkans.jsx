import React from 'react'
import Exit from '../../../assets/Images/svg/exit.svg'
import './modalkans.css'
const Modalkans = ({modal, setModal , children}) => {
    window.onclick = function(event) {
        if (event.target.id ==="modal2") {
          setModal(false)
        }
      }
    if(modal){
        return (
          <div id='modal2'  class="modal2">
          <div class="modal-content2">
          <img onClick={()=>setModal(false)} className='modal-exit2' src={Exit} alt="" />
          {
            children
          }
          </div>
        </div>
        )
    }
}

export default Modalkans