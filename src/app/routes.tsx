import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../widgets/site/layout'
import { HomePage } from '../pages/home-page'
import { CoursesListPage } from '../pages/courses-list-page'
import { RegisterPage } from '../pages/register-page'
import { LoginPage } from '../pages/login-page'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/courses' element={<CoursesListPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    {/* <Ro></Ro> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}