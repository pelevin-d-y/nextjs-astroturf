import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const HomeLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default HomeLayout
