import './App.css';
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import HappeningNow from './components/HappeningNow';


function App() {
  return (

    <div className="container">
      <Header />
      <hr className="top-border" />
      < MainContent />
      <div className="right-border"></div>
      <HappeningNow />
    </div>
    
  );
}


export default App;
