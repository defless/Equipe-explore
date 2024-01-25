import SplashScreen from './components/SplashScreen'
import Cover from './components/Cover'

import './App.css'

const App = () => {

  return (
    <div className="App">
      <SplashScreen />
      <Cover />
      {/* <Header />
      <Swipeable className="App__swipeable" onSwipedLeft={swipeFirst} onClick={swipeFirst}>
          <Cover />
      </Swipeable>
      <Swipeable className="App__swipeable" onSwipedLeft={swipeLeft} onSwipedRight={swipeRight} onClick={clickBoard}>
          <Board datas={this.state.datas}/>
      </Swipeable>
      <Progressbar />
      <ShareLayer />
      <Tutorial />
      <DisableLandscape /> */}
    </div>
  )
}

export default App
