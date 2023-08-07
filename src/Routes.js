import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import SobreMim from './pages/SobreMim';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadro from 'components/PaginaPadrao';
import Post from 'pages/Post';
import NaoEncontrada from 'pages/NaoEcontrado';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadro />}>
          <Route path="" element={ <Inicio /> }/>
          <Route path="/sobremim" element={ <SobreMim /> }/>
        </Route>

        <Route path="/post/:id" element={<Post />}/>
        <Route path="*" element={ <NaoEncontrada /> }/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
