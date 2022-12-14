// eslint-disable-next-line
import Hello from './component/Hello';
//import Signup from './component/Signup';

import './index.css';
// eslint-disable-next-line
import app from './firebase';
import Router from './component/Router';

function App() {
  return (
    <div>
        {/* <Hello name="lu" /> */}
        <Router />
    </div>
  );
}

export default App;
