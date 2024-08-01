import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/ttm/index.html' element={<Main />}></Route>
        <Route path='/ttm/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
