import './App.css';



import React from 'react';
import ImageSlider from './components/ImageSlider';


function App() {

  const slides = [
    { url: "https://images.pexels.com/photos/17239929/pexels-photo-17239929.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", title: "2984" },
    // { url: "./IMG_2984.jpg", title: "2984" },
    { url: "https://images.pexels.com/photos/10414222/pexels-photo-10414222.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", title: "3102" },
    { url: "https://images.pexels.com/photos/17243872/pexels-photo-17243872/free-photo-of-playground.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load", title: "3077" },
    // { url: "./IMG_3075.jpg", title: "3075" },
    // { url: "./IMG_3022.jpg", title: "3022" },
    // { url: "./IMG_3021.jpg", title: "3021" },
    // { url: "./IMG_2985.jpg", title: "2985" },
    // { url: "./IMG_2402.jpg", title: "2402" },
    // { url: "./IMG_2401.jpg", title: "2401" },
    // { url: "./IMG_2399.jpg", title: "2399" },
    // { url: "./IMG_2390.jpg", title: "2390" },
    // { url: "./IMG_7685.jpg", title: "7685" },
    // { url: "./IMG_7669.jpg", title: "7669" },
    // { url: "./IMG_3130.jpg", title: "3130" },
    // { url: "./IMG_3124.jpg", title: "3124" },
    // { url: "./IMG_3117.jpg", title: "3117" },
    // { url: "./IMG_3113.jpg", title: "3113" },
    // { url: "./IMG_3103.jpg", title: "3103" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  }


  return (
    <div className="App">

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>




    </div>
  );
}

export default App;
