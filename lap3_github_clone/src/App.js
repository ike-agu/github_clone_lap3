import './App.css';
import {Repositories} from './pages';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories /> }>
        {/* <Route path=":repo" element={</>} /> */}

      </Route>

    </Routes>
  );
}

export default App;
