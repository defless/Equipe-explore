import { useReducer } from 'react'
import { mockState } from '@junipero/react';

import type { StoryContextValue } from './components/types'
import { StoryContext } from './components/Contexts'
import SplashScreen from './components/SplashScreen'
import Cover from './components/Cover'
import Header from './components/Header'
import Story from './components/Story'

import './App.css'

const App = () => {

  const [state, dispatch] = useReducer(mockState, {
    currentPage: 0,
  });

  const restart = (): void => {
    window.scrollTo(0, 0);
    dispatch({ currentPage: 0 });
  };

  const getContextValue = (): StoryContextValue => ({
    ...state,
    restart,
    dispatch,
  });

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (state.currentPage === 0) dispatch({ currentPage: 1 })
    const scrollSpeed = 60;
    if (e.deltaY < 0) {
      document.documentElement.scrollLeft -= (e.deltaY * scrollSpeed);
      document.body.scrollLeft -= (e.deltaY * scrollSpeed);
    } else {
      document.documentElement.scrollLeft += (e.deltaX * scrollSpeed);
      document.body.scrollLeft += (e.deltaX * scrollSpeed);
    }
  };

  return (
    <div className="App" onWheel={onWheel}>
      <SplashScreen />
      <StoryContext.Provider value={getContextValue()}>
        <Header />
        <Cover currentPage={state.currentPage}/> 
        <Story />
      </StoryContext.Provider>
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
