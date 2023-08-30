import React from 'react'
import './yandex.css'
import img from '../../assets/Images/svg/yandexicon.svg'
import { YMaps, Map, Placemark,ZoomControl  } from '@pbe/react-yandex-maps'

const Yandexmap = () => {
  return (
    <section className='yandexmap-section'>
     <YMaps  query={{apikey: 'ca60917c-ba3d-485a-8711-39fad57f4fe2'}}  >
      <div style={{ backgroundColor:'rgba(0, 0, 0, 0.4)', width: '100%', height: '100%' }}>
        <Map   width="100%" height="100%" defaultState={{ center: [55.684758, 37.738521], zoom: 12 }}>
            <ZoomControl/>
            <Placemark
              geometry={[55.684758, 37.738521]}
                options={
                  {
                      iconLayout: 'default#image',
                      iconImageHref: img
                  }}
                  />
        </Map>
      </div>
        
     </YMaps>
     
    </section>
  )
}

export default Yandexmap