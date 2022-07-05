
import './App.css';
import Navbar from './components/navbar/navbar';
import { Header, AboutMe, Services, CaseStudy, Portfolio, Testimonials, Client } from './container/index'
function App() {
  return (
    <div className='app__bg'>
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <CaseStudy />
      <Portfolio />
      <Testimonials />
      <Client />
    </div>
  );
}

export default App;
