import { createContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Routing from './Routing';


const URlContacts = process.env.REACT_APP_URL_V1_BACKBONE+"/contacts" || "http:localhost300"
export const UrlContext = createContext(URlContacts);

function App() {
  return (
    
    <>

      <NavBar/>
      <UrlContext.Provider value={URlContacts}>
        <Routing/>
      </UrlContext.Provider>
    </>
  );
}

export default App;
