import './App.scss';
import Navbar from './components/header/Navbar';
import Breadcrumbs from './components/header/Breadcrumbs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Breadcrumbs path={["Início", "Página Teste"]} />
      
    </div>
  );
}

export default App;
