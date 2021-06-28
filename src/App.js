import Navbar from './Components/Navbar';
import IntroBody from './Components/IntroBody';
import About from './Components/About';
import MySkills from './Components/MySkills';
import Project from './Components/Project';

import './App.css';

function App() {
  return (
    <div >
      <Navbar />   
      <IntroBody /> 
      <About />
      <MySkills />
      <Project />
    </div>
  );
}

export default App;
