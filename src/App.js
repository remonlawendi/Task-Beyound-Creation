import './App.css';
import { Header } from './components/Header';
import { Bank } from './components/Bank';
import { Applet } from './components/Applet';
import { PageLayout } from './components/PageLayout';
import { Intro } from './components/intro'
import { Footer } from './components/Footer'
function App() {
  const form = <div className=''>
      <Applet Bank={Bank} />
    </div>
  return (
    <div className="">
      <Header></Header>
      <Intro></Intro>
      <PageLayout form={form}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
