import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../widgets/site'
import { HomePage } from '../pages/home-page'
import { CoursesListPage } from '../modules/courses/pages'
import { RegisterPage } from '../modules/users/pages/register-page'
import { LoginPage } from '../modules/users/pages/login-page'

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/courses' element={<CoursesListPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}