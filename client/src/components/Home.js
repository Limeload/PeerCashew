import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import Testimonial from "./Testimonials";
import { useHistory } from "react-router-dom";

function Home({user, setUser}) {
const history = useHistory();
const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Logout failed');
        }
      })
      .then((data) => {
        localStorage.removeItem('user');
        setUser(null);
        history.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

    return(
        <div>
        <NavigationBar user={user} handleLogout={handleLogout} />
        <HeroSection />
        <Body />
        <Testimonial />
        <Footer />
        </div>
    )
}

export default Home;
