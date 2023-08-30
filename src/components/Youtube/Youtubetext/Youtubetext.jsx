import './style.css'
import video from '../../../assets/GIf/stages-item1.mp4'
const Youtubetext = () => {
  return (
    <div className='youtubevideo-text'>
        <h4>Все этапы приготовления пивав одном аппарате!</h4>
        <div className="youtubevideo-video">
        <video width="100%" height='100%' preload='none' autoPlay src={video} muted loop/>     
        </div>
        <ul className="youtubevideo-text__list">
            <li className="youtubevideo-text__list-item">
                <h5>1. Затирание</h5>
                <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
            </li>
            <li className="youtubevideo-text__list-item">
            <h5>2. Фильтрация</h5>
           <p>Извлеките заторный бак и поставьте устройство на подставку. Промываем дробину водой, заранее нагретой до 80–90°.</p>
            </li>
            <li className="youtubevideo-text__list-item">
            <h5>3. Варка</h5>
           <p>Добавьте хмель для горечи в самом начале варки. Добавьте хмель для вкуса,когда прошло ¾ всего процесса. Добавьте хмель для аромата за 5–7 минут до конца варки.</p>
            </li>
            <li className="youtubevideo-text__list-item">
            <h5>4. Охлаждение</h5>
           <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
            </li>
        </ul>
    </div>
  )
}

export default Youtubetext