import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import RoutesPage from './components/routes/routes';

function App() {
  return (
    <Router>
      <RoutesPage/>
    </Router>
  );
}

export default App;
