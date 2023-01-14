import { useLocation } from 'react-router';

import Layout from '../components/Layout';
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';

const Home = () => {
  const location = useLocation();
  return (
    <Layout location={location}>
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;
