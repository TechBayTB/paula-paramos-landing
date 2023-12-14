import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { LanguageContextProvider } from './Context/Language';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';

function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <AboutMe />
      <Education />
    </LanguageContextProvider>
  );
}

export default App;
