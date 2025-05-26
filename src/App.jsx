import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Body from "./Component/Body/Body";
import { Routes, Route } from "react-router";
import Preloader from "./Component/PreLoader/Preloader";
import MovieDetail from "./Component/movieDetail/movieDetail";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
      setInterval(()=>{
        setLoading(false)
      },4300)
  },[])
  return (
    <>
      {loading ? (
        <>
          <Preloader />
          {}
        </>
      ) : (
        <>
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/Body" element={<Body />} />
              <Route path="/MovieDetail/:id" element={<MovieDetail />}/>
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
