import about from './about.jpg';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About about={about}/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
