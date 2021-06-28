import Navbar from './Components/Navbar';
import IntroBody from './Components/IntroBody';
import About from './Components/About';
import MySkills from './Components/MySkills';
import Project from './Components/Project';
import Quote from './Components/Quote';

import './App.css';

function App() {
  return (
    <div >
      <Navbar />   
      <IntroBody /> 
      <About />
      <MySkills />
      <Project />
      <Quote />
    </div>
  );
}

export default App;
