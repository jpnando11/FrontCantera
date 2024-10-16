import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdministraccionPage from './page/AdministraccionPage'
import LoginPage from './page/LoginPage'
import AppLayout from './layout/AppLayout'
import EstudiantePage from './page/EstudiantePage'
import RegistrarCurso from './page/RegistrarCursoPage'
import CursoIncribirsePage from './page/CursoIncribirsePage'

import EventosPage from './page/EventosPage'; 

import AuthLogin from './layout/AuthLogin'
import UsuarioPage from './page/UsuarioPage'
import InformacionEstudiante from './page/InformacionEstudiante'
import EditarUsuario from './page/EditarUsuario'
import LisAllUsuarioPage from './page/LisAllUsuarioPage'
import MaestroPage from './page/MaestroPage'
import CursosPage from './page/CursosPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLogin />}>
            <Route path='/login' element={<LoginPage />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path='/' element={<AdministraccionPage />} />
            <Route path='/curso' element={<RegistrarCurso />} />
            <Route path='/estudiante' element={<EstudiantePage />} />
            <Route path='/incribir/:id_curso' element={<CursoIncribirsePage />} />
            <Route path='/estudiante/:id_estudiante' element={<InformacionEstudiante />} />
            <Route path='/editarEstudiante' element={<EditarUsuario />} />
            <Route path='/eventos' element={<EventosPage />} />
            <Route path='/usuario' element={<UsuarioPage />} />
            <Route path='/listEstudiantes' element={<LisAllUsuarioPage />} />
            <Route path='/maestro' element={<MaestroPage />} />
            <Route path='/cursos/:id_curso' element={<CursosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App