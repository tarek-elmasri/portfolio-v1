import { useLocation } from 'react-router';

import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';

const Home = () => {
  const location = useLocation();
  return (
    <Layout location={location}>
      <Hero />
    </Layout>
  );
};

export default Home;
