import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { actions, orginals } from './urls';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  // useEffect(() => {
    
  // }, [])
  
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <RowPost url={orginals} title='Netflix Orginal' />
       <RowPost url={actions} title='Action' isSmall />
       <RowPost url={actions} title='Action' isSmall />

    </div>
  );
}

export default App;
