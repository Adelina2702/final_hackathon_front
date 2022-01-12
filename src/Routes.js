import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import AdminContextProvider from './context/AdminContext'
import CommentContextProvider from './context/CommentContext'
import ProductContextProvider from './context/ProductContext'
import UserContextProvider from './context/UserContext'
import AddPage1 from './pages/AddPage1'
import AdminPage from './pages/AdminPage'
import LoginModalPage from './pages/auth/LoginModalPage'
import SignUpModalPage from './pages/auth/SignUpModalPage'
import DetailPage from './pages/DetailPage'
import EditPage from './pages/EditPage'
import HomePage from './pages/HomePage'


export default function MyRoutes() {
    return (
      <CommentContextProvider>
      <ProductContextProvider>
      <UserContextProvider>
      <AdminContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/edit/:id' element={<EditPage/>}/>
      <Route path='/register' element={<SignUpModalPage/>}/>
      <Route path='/login' element={<LoginModalPage/>}/>
      <Route path='/add' element={<AddPage1/>}/>
      <Route path="/product/:id" element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
      </AdminContextProvider>
      </UserContextProvider>
      </ProductContextProvider>
     </CommentContextProvider>

    )
}
