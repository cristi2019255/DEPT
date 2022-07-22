import './App.css';
import { HomePage } from './pages';
import {Header, Footer} from './shared';

function App() {

  return (
    <div className="App bg-dark text-light fw-400">
      <Header></Header>
        <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
