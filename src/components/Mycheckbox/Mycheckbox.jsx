import './style.css'
const Mycheckbox = ({check , setCheck}) => {
  return (
    <div onClick={()=>setCheck(!check)} className="mycheckbox">
         {
            check ?  <div className="mychecboxcolor">
            
            </div> :
            <div className="maycheckwhite"></div>
         }
    </div>
  )
}

export default Mycheckbox