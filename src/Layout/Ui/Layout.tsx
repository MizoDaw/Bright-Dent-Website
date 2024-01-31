import React from 'react'
import Header from './Header'
import Footer3 from './Footer3'


const Layout = ({ children ,className=""}: { children: React.ReactNode ,className?: string }) => {

  return (
 <div className={`${className} Layout`}>
     <Header/>
    <main className={`Layout_Body`}>
        {children}
    </main>
    <Footer3/>

 </div>
  )
}

export default Layout