import '../styles/App.css';
import BlogList from './BlogList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='container'>
        <BlogList />
      </div>
    </div>
  );
}

export default App;
