const Buttons = ({ active, setActive }) => (
  <div className='buttons'>
    <button onClick={() => setActive(false)} className={`buttons__sign-in btn ${active ? '' : 'active'}`}>Sign in</button>
    <button onClick={() => setActive(true)} className={`buttons__sign-up btn ${active ? 'active' : ''}`}>Sign up</button>
  </div>
);

export {Buttons}