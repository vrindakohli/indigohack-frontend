import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import UserForm from './components/userForm';
import UserTable from './components/userTable';


function App() {
  return (
    <div className="App">
       <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/user" exact element={<UserForm/>}/> 
        <Route path="/user/:userId" exact element={<UserTable/>}/>
        <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
