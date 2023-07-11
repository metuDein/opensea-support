import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Nav from './component/Nav';
import Home from './component/Home';
import Footer from './component/Footer';
import Layout from './component/Layout';
import Form from './component/Form';

function App() {
  const [msg, setMsg] = useState('');
  const [success, setSuccess ] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  return (
    <main className="App">
      <Nav  
        errMsg={errMsg}
        success={success}
        msg={msg}
        />
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route path='/'  element={<Home  
           />} />
            <Route path='/new-request'  element={<Form 
            errMsg={errMsg}
            setErrMsg={setErrMsg}
            setSuccess={setSuccess} 
            success={success}
            msg={msg}
            setMsg={setMsg}
            />} />
          </Route>
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
