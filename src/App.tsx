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
            <Route path='/eventos' element={<EventosPage />} />
            <Route path='/usuario' element={<UsuarioPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App