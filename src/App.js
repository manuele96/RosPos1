
import './App.css';
import {Routes,BrowserRouter as Router,Route, Link, useNavigate} from 'react-router-dom';
import { Private } from './pages/Private';
import { Home } from './pages/Home';
import { RequireAuth } from './Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './Auth/AuthContext';

function App() {
  const auth =useContext(AuthContext);
  const  handlerLogout = async ()=>{
    await auth.logout()

  }
  return (<Router>
    <div className="App"> 
      <header >
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <Link to="#" onClick={handlerLogout}>Sair</Link>}
        </nav>
      </header>
      <hr></hr>
      <Routes>
        <Route path="/" exact element={<Home/>} ></Route>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}></Route>
      </Routes>
    </div>
    </Router>);
}

export default App;
