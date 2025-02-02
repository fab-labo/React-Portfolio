import { Outlet } from 'react-router-dom';
import NavBar from '../src/Components/NavBar';
import Footer from  '../src/Components/footer';



function App() {
  

  return (
    <>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App