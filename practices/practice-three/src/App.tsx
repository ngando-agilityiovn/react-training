import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Themes
import { theme } from './themes'

// Components
import { Home, ProductDetail } from '@/pages'

const pages = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetail />
  }
]

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        {pages.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)

export default App
