import './App.css';
import { Loading} from './shared';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Suspense, lazy } from 'react';


const AboutPage = lazy(() => import("./pages/AboutPage"))
const HomePage = lazy(() => import("./pages/HomePage"))
const CareersPage = lazy(() => import("./pages/CareersPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const StoriesPage = lazy(() => import("./pages/StoriesPage"))
const WorkPage = lazy(() => import("./pages/WorkPage"))

const ToTopButton = lazy(() => import("./shared/components/ToTopButton")) 

const Header = lazy(() => import("./shared/components/Header"))
const Footer = lazy(() => import("./shared/components/Footer"))


function App() {
  return (

    <Suspense fallback={<div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
                          <Loading/>
                        </div>}>
      <div className="App bg-dark text-light fw-400">
        <div id="main-content">
          <Router>
            <Header></Header>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/home" element={<Navigate to='/'/>}></Route>
              <Route path="home/:industry" element={<HomePage></HomePage>}></Route>
              <Route path="home/:industry/:service" element={<HomePage></HomePage>}></Route>
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
    </Suspense>
  );
}

export default App;
