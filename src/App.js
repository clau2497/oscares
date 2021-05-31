import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import Navbar from "./components/commons/navbar/navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>

                <div>
                    <Routes/>
                </div>
            </BrowserRouter>

        </>

    )
}


export default App;
