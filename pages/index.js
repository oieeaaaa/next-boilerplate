import Head from 'next/head';
import GridGuide from 'styleguide/grid-guide';

const Home = () => (
  <div className="container">
    <Head>
      <title>Boilerplate</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GridGuide />
  </div>
);

export default Home;
