import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import '../styles/App.css';
import BlogDetails from "./BlogDetails";
import BlogList from './BlogList';
import Comments from "./Comments";
import CreateBlog from "./CreateBlog";
import CookiePolicy from "./footer/CookiePolicy";
import Footer from "./footer/Footer";
import PrivacyPolicy from "./footer/PrivacyPolicy";
import TermsOfUse from "./footer/TermsOfUse";
import Home from "./Home";
import Likes from "./Likes";
import LoginForm from "./LoginForm";
import Navbar from './Navbar';
import SignUp from "./SignUp";
import EditBlogForm from "./UpdateBlog";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);
 

    useEffect(()=>{
      fetch('/me')
      .then((res)=>{
        if(res.ok){
          
          res.json().then((user) => {
            setUserSignedIn(user)
          })
        }
      })
    },[])


    
  




  // if(!currentUser) return <LoginForm setCurrentUser={setCurrentUser} />
  // else return <Home />
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Navbar userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />
        </header>
        {userSignedIn ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<BlogList userSignedIn={userSignedIn} />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails userSignedIn={userSignedIn} />}/>
          <Route path='/terms' element={<TermsOfUse />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/cookies' element={<CookiePolicy />} />
          <Route path='/blogs/:id/update' element={<EditBlogForm />} />
          <Route path='/likes' element={ <Likes />} />
          <Route path = '/comments' element={<Comments />} />
        </Routes>
      ) : (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<BlogList userSignedIn={userSignedIn} />} />
            <Route path='/login' element={ <LoginForm userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />} />
            <Route path='/signup' element={ <SignUp setUserSignedIn={setUserSignedIn} />}/>
            <Route path='/terms' element={<TermsOfUse />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/cookies' element={<CookiePolicy />} />
        </Routes>
      )}
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
