import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import Testimonial from "./Testimonials";

function Home({user, onLogOut}) {
    function handleLogOut() {
        fetch('/logout', {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(() => {
          localStorage.removeItem('user');
          onLogOut();
        });
      }


    return(
        <div>
        <NavigationBar user={user} handleLogOut={handleLogOut} />
        <HeroSection />
        <Body />
        <Testimonial />
        <Footer />
        </div>
    )
}

export default Home;
