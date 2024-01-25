import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'

// Themes
import { theme } from './themes'

// Pages
import { Cart, Home, NotFoundPage, ProductDetail } from './pages'

const pages = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetail />
  },
  {
    path: '/product-cart/',
    element: <Cart />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        {pages.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              path === '*' ? (
                <NotFoundPage />
              ) : (
                <MainLayout>{element}</MainLayout>
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)

export default App
