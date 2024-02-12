import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Loading from './Components/Utils/Loading/Loading';
import Page from './Pages/Home/Page';
import Layout from './Layout/Ui/Layout';
import About from './Pages/About/About';
import Privacy from './Pages/About/Privacy';
const Page404 = lazy(() => import("./Layout/Ui/NotFoundPage"))

const App = () => {

  return (
    <Routes>
      <Route path="*" element={<Suspense fallback={<Loading />}> <Page404 /></Suspense>} />
      <Route path="/" element={<Suspense fallback={<Loading />}><Layout className='Home_Page'>  <Page /> </Layout> </Suspense>} />
      <Route path="/about" element={<Suspense fallback={<Loading />}><Layout className='Doctors_Page'>  <About /> </Layout> </Suspense>} />
      <Route path="/privacy" element={<Suspense fallback={<Loading />}><Layout className='Doctors_Page'>  <Privacy /> </Layout> </Suspense>} />

      {/* <Route path="/doctors" element={<Suspense fallback={<Loading />}><Layout className='Doctors_Page'>  <Doctors /> </Layout> </Suspense>} /> */}
      {/* <Route path="/services" element={<Suspense fallback={<Loading />}><Layout className='Services_Page'>  <Services /> </Layout> </Suspense>} /> */}
      {/* <Route path="/blog" element={<Suspense fallback={<Loading />}><Layout className='Blog_Page'>  <Blog /> </Layout> </Suspense>} /> */}

    </Routes>



  )
}

export default App