import './App.css';
import { AboutPage, CareersPage, ContactPage, HomePage, NotFoundPage, ServicesPage, StoriesPage, WorkPage } from './pages';
import {Header, Footer, ToTopButton} from './shared';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App bg-dark text-light fw-400">
      <div id="main-content">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/work" element={<WorkPage></WorkPage>}></Route>
            <Route path="/services" element={<ServicesPage></ServicesPage>}></Route>
            <Route path="/stories" element={<StoriesPage></StoriesPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/careers" element={<CareersPage></CareersPage>}></Route>
            <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
      <Footer></Footer>

      <ToTopButton/>
    </div>
  );
}

export default App;
