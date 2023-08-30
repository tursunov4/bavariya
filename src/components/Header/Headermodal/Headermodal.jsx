
import Exit from '../../../assets/Images/svg/exit.svg'
import './headermodal.css'
const Headermodal = ( {modal , setModal}) => {
    window.onclick = function(event) {
        if (event.target.id ==="modalhead") {
          setModal(false)
        }
      }
    if(modal){
        return (
          <div id='modalhead'  className="modalhead">
          <img onClick={()=>setModal(false)} className='modal-exit__head' src={Exit} alt="" />
          <div className="modal-content__head">
          <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/-jaXMjn4hsE?si=oKnZBddzW3RUh3ds" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        )
    }
}

export default Headermodal