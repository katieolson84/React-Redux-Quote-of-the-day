import './App.css';
import ron from './design/ron.png'
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div className="title">
          
        </div>
      </header> */}
        <div className="quote">
            <Quotes />
        </div>
        <div className="ron">
          <img src={ron} alt="Ron Swanson" width="100" />
        </div>
    </div>
  );
}

export default App;
