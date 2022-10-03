import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';

function App() {
  return (
   //administrar las rutas
   <BrowserRouter>
    <Menu/>
      <Routes>
        {/* las rutas siempre son Nombre de dominio+ path */}
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/administrar' element={<Administrador></Administrador>} />
        <Route path='*' element={<Error404></Error404>} />
      </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
