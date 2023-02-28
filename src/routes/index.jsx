import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddIssue from "../features/issues/AddIssue";
import IssueView from "../features/issues/IssueView";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";

const Index = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/issues" element={<IssueView />} />
          <Route path="/add-issue" element={<AddIssue />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
