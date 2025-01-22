import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from  './components/footer';



function App() {
  

  return (
    <>
      <NavBar />
      <main className="d-flex justify-content-center page">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App