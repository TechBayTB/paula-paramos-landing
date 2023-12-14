import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { LanguageContextProvider } from './Context/Language';

function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
    </LanguageContextProvider>
  );
}

export default App;
