import './App.css';
import Login from './component/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './component/Header';
import Calculator from './component/Calculator';
import SignUp from './component/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Header logo="MLOVER"/>
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp></SignUp>}/>
      <Route path="/" element={<Calculator></Calculator>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
