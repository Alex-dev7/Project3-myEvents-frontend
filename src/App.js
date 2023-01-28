import React from "react"
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a global context to store and share data across the app
export const GlobalCtx = React.createContext(null)

function App() {
  // Initialize state for token and global state
  const [token, setToken] = React.useState(null)
  const [gState, setGState] = React.useState({ url:"https://myevents-backend.onrender.com", token: token})

  // Check if user is already logged in on page load
  React.useEffect(() => {
    // Get the token from local storage
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    // If token exists, set it in state
    if(token) {
      setToken(token.token)
    }
  }, [])

  // Update global state with current token
  React.useEffect(() => {
    setGState(gState => ({...gState, token: token}));
  }, [token]);

  return (
    // Provide the global state and setter function to the rest of the app
    <GlobalCtx.Provider value={{ gState, setGState }} >
    <div className="App">
      {/* Render the Header, Outlet, and Footer components */}
     <Header />
     <Outlet />
     <Footer/>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;