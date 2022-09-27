//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
 
  return (
   
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/friend/:friendId" element={<FriendDetail/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route path="*" element={<NoMatch/>}/>
            </Routes>
       </BrowserRouter>
 
  );
}

export default App;
