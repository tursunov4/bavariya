import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Bavariya from './components/Bavariya/Bavariya'
import Padarka from './components/Padarka/Padarka'
import Youtube from './components/Youtube/Youtube'
import Bvcards from './components/Bvcards/Bvcard'
import Manage from './components/Manage/Manage'
import Kanstruktor from './components/Kasntruktor/Kanstruktor'
import './assets/main.css'

function App() {

  return (
    <>
       <Header />      
      <Hero />
      <Bavariya /> 
      <Padarka />
      <Youtube />
      <Bvcards />
      <Manage/>
      <Kanstruktor/>
      {/* <Otziv />
      <Zakajite />
      <Bavariya /> 
      <Delivery />
      <Pokupke />
      <Order />
      <Khaos />      
      <Yandexmap/> 
      <Footer />  */}
    </>
  )
}

export default App
