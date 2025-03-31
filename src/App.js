// import { useState } from 'react';
import './app.scss';
import Banner from './components/banner/Banner';
import Episodes from './components/episodes/Episodes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  // const [num1, setNum1] = useState(0);

  // const handlerPlus = () => {
  //   setNum1(num1 + 1)
  // }
  return (
    <div className='container'>
      <Header />
      <Banner />
      <Episodes />
      <Footer />
      {/* <p>{num1}</p>
      <button onClick={handlerPlus}>plus</button> */}
    </div>
  );
}

export default App;
