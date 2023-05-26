import './App.css';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';
import PagenotFound from './components/PagenotFound';
import { Route,Routes } from 'react-router-dom';
import ViewPlayers from './components/ViewPlayers';

function App() {
  return (
    <div className="App">

      <Routes>
       
       <Route path='/' element={<Admin></Admin>}></Route>
       <Route path='add' element={<Add></Add>}></Route>
       <Route path='edit/:id' element={<Edit></Edit>}></Route>
       <Route path='view/:id' element={<View></View>}></Route>
       <Route path='viewPlayers/:id' element={<ViewPlayers> </ViewPlayers>}></Route>
       <Route path={'*'} element={<PagenotFound></PagenotFound>}></Route>

      </Routes>

    </div>
  );
}

export default App;
