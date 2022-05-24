import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <BrowserRouter className="App">
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card" element={<Card />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
