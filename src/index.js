import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavSection from './components/navbar-section';
import SliderSection from './components/slider';
import "./style.css";
import HomePage from "./components/home-page";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import BlogPage from "./components/blog-page";

export default function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <NavSection/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home-page.jsx" element={<HomePage />} />
        <Route path="/slider.jsx" element={<SliderSection />} />
        <Route path="/blog-page.jsx" element={<BlogPage />} />
      </Routes>
    </ThemeProvider>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);
