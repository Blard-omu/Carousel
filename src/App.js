import Main from './Main';
import Section from './Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="subApp">
        <div className="Lag">
          <marquee behavior="move" direction="left">
            <h2>Learn Coding with BLARD</h2>
          </marquee>
        </div>
        <Main />
      </div>

      <Section />
    </div>
  );
}

export default App;
