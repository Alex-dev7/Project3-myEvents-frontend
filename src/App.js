import React from "react"
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export const GlobalCtx = React.createContext(null)

function App() {
  const [gState, setGState] = React.useState({ url:"https://myevents-backend-dev.onrender.com"})
  return (
    <GlobalCtx.Provider value={{ gState, setGState }} >
    <div className="App">
     <Header />
     <Outlet />
     <Footer/>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
