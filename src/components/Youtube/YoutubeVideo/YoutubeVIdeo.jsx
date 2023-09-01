import  { useState } from 'react'
import "./style.css"
import Youtubetext from '../Youtubetext/Youtubetext'
import Modal from '../../Modal/Modal'
import video from '../../../assets/GIf/stages-item1.mp4'
import youtubeimg from '../../../assets/Images/svg/youtube.svg'
const YoutubeVIdeo = () => {
   const [modal , setModal] = useState(false)

  return (
    <div className='youtubevideo-wrapper'>
      <Modal modal={modal} setModal={setModal}>
          <Youtubetext/>
      </Modal>
     <div className="youtubevideo-wrapper__text">
      <h4>Все этапы приготовления пива в одном аппарате!</h4>
      <ul className="youtube-video__text-list">
        <li className='youtube-video__text-listitem'>
           <h5>1. Затирание</h5>
           <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>2. Фильтрация</h5>
           <p>Извлеките заторный бак и поставьте устройство на подставку. Промываем дробину водой, заранее нагретой до 80–90°.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>3. Варка</h5>
           <p>Добавьте хмель для горечи в самом начале варки. Добавьте хмель для вкуса, когда прошло ¾ всего процесса. Добавьте хмель для аромата за 5–7 минут до конца варки.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>4. Охлаждение</h5>
           <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
        </li>
      </ul>
      <div className="youtubevideo__mashina">
        <video width="100%" height='100%' preload='none' autoPlay src={video} muted loop/>             
      </div>
      <div onClick={()=>setModal(true)} className='youtubevideo__mashina-text'>Подробнее об этапах приготовления</div>
     </div>
     <div className="youtubevide-wrapper__videos">
      <div className='youtubevideo-wrapper__video' >
        <img src={youtubeimg} alt="" />
      </div>
      <div className='youtubevideo-wrapper__video'>
        <img src={youtubeimg} alt="" />
      </div>
     </div>
     
    </div>
  )
}

export default YoutubeVIdeo