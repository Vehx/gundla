import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || 'Gundla Gårdscafé'}</title>
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
