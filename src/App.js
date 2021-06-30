import Navbar from './Components/Navbar';
import Contacts from './Components/Contacts';
import Form  from './Components/Form';
import Footer from './Components/Footer';
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
      <Form />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
