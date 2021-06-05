import Head from 'next/head';

import { Info } from '../components/Info';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nova Auto Peças</title>
      </Head>

      <Header />
      <div>
        <Info />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
