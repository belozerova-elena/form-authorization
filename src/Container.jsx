import React from 'react';
import './index.scss';
import { Buttons } from './components/Buttons';
import { FormSignIn } from './components/FormSignIn';
import { FormSignUp } from './components/FormSignUp';

function Container() {
  const [active, setActive] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hello, setHello] = React.useState(false);
  const [welcome, setWelcome] = React.useState(false);

  const refreshPage = () => {
    window.location.reload();
  }    

  return (
    <>
      <div className={`container ${open ? 'close' : ''}`}>
        <Buttons active={active} setActive={setActive}/>
        <FormSignIn active={active} setActive={setActive} setHello={setHello} setOpen={setOpen}/>
        <FormSignUp active={active} setActive={setActive} setWelcome={setWelcome} setOpen={setOpen}/>
      </div>
      <div className={`container active ${open ? '' : 'close'}`}>
        <h2 className={`hello ${hello ? 'active' : ''}`}>Hello, Friend!</h2>
        <h2 className={`welcome ${welcome ? 'active' : ''}`}>Welcome Back!</h2>
        <button onClick={refreshPage} className='form-btn reload'>reload</button>
      </div>
    </>
  );
}

export default Container;
