import Navbar from './Components/Navbar.js';
import Name from './Components/Name.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Education from './Components/Education.js';
import './App.css';

function App() {
  return(
    <body>
      <div >
        <Navbar/>
        <Name/>
      </div>
      <About/>
      <Education/>
      <Contact/>
    </body>
 );
}
export default App;



