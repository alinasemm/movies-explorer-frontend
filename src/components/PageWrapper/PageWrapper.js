import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PageWrapper ({ children, withHeader = true, withFooter = true, headerProps = {} }) {
  return (
    <>
      {withHeader && <Header {...headerProps} />}
      {children}
      {withFooter && <Footer />}
    </>
  )
}

export default PageWrapper;