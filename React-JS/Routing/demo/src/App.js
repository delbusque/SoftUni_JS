import { Routes, Route, Link, useParams } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Premium from './components/Premium';

import './App.css';

import styles from './components/About.module.css'



function App() {

  return (
    <div className="App">
      <nav>

        <div><Link to='/'>Home</Link></div>
        <div><Link to='contacts'>Contacts</Link></div>
        <div><Link to='about' className={styles['about']}>About</Link></div>

      </nav>
      <h2>Hello React Router </h2>


      <Routes>
        <Route path='/' element={<h3>Sweet Home</h3>} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<Premium />} />

        <Route path='id/:egn' element={<Idm />} />

      </Routes>


    </div>

  );
}

function Idm() {
  let params = useParams();

  return (
    <h2>This is Param {params.egn}</h2>
  )

}

export default App;
