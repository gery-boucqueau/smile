import React, { useState } from 'react';
import MainPage from './components/MainPage'
import GameRoom from './components/GameRoom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const { RTCPeerConnection } = window;
  const [ player, setPlayer ] = useState('');
  const [ myPeerConnection, setMyPeerConnection ] = useState(new RTCPeerConnection())

  const handlePlayerInput = event => {
    setPlayer(event.target.value)
  }

  return (
    <Router>
      <Switch>
        <Route 
          exact path="/" 
          render={props => 
            <MainPage 
              {...props} 
              handlePlayerInput={handlePlayerInput}
            />
          } 
        />
        <Route 
          path="/GameRoom" 
          render={() => 
            <GameRoom 
              player={player} 
              myPeerConnection={myPeerConnection} 
            />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
