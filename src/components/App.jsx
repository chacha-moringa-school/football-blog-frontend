import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import BlogDetails from "./BlogDetails";
import BlogList from './BlogList';
import CreateBlog from "./CreateBlog";
import CookiePolicy from "./footer/CookiePolicy";
import Footer from "./footer/Footer";
import PrivacyPolicy from "./footer/PrivacyPolicy";
import TermsOfUse from "./footer/TermsOfUse";
import LoginForm from "./LoginForm";
import Navbar from './Navbar';
import SignUp from "./SignUp";

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=>{
    fetch('/me')
    .then((res)=>{
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  // if(!currentUser) return <LoginForm setCurrentUser={setCurrentUser} />
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route exact path='/blogs' element={<BlogList />} />
          <Route exact path='/signup' element={ <SignUp />}/>
          <Route exact path='/login' element={ <LoginForm />} />
          <Route exact path='/create' element={<CreateBlog />} />
          <Route exact path="/blogs/:id" element={<BlogDetails />}/>
          <Route exact path='/terms' element={<TermsOfUse />} />
          <Route exact path='/privacy' element={<PrivacyPolicy />} />
          <Route exact path='/cookies' element={<CookiePolicy />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
