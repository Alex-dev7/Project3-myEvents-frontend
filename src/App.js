import React from "react"
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GlobalCtx = React.createContext(null)

function App() {
  const [token, setToken] = React.useState(null)
  const [gState, setGState] = React.useState({ url:"https://myevents-backend-dev.onrender.com", token: token})

  // Seeing if already logged in
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if(token) {
      setToken(token.token)
    }
  }, [])

  React.useEffect(() => {
    setGState(gState => ({...gState, token: token}));
  }, [token]);

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
