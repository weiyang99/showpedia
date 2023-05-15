import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import SearchFeed from './components/SearchFeed';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#121212' }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/movie/:id/:title' element={<MovieDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
