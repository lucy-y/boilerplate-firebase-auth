import Hello from '../component/Hello';
import Click from '../component/Clock';

function Main(props) {
    return (
        <div>
            <Hello name="lu" />
            <Click />
        </div>
    );
  }
  export default Main;