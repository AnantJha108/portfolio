import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      {/* bg-slate-900 */}
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
