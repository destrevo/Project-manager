import React, { useState, useEffect } from "react";
import First from "./FromPages/First";
import Second from "./FromPages/Second";
import Third from "./FromPages/Third";
import { dataModel } from "./DataModel";
import "./From.css"

export default function Form({ resetForm }) {

  useEffect(() => {
    setPage(0)
    setFormData(dataModel)
  }, [resetForm])

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(dataModel);

  const QuickProgressBar = () => {
    return page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <First formData={formData} setFormData={setFormData} page={(value) => { setPage(value) }} />;
      case 1:
        return <Second formData={formData} setFormData={setFormData} page={(value) => { setPage(value) }} />;
      case 2:
        return <Third formData={formData} setFormData={setFormData} page={(value) => { setPage(value) }} />;
      default:
        return <First formData={formData} setFormData={setFormData} page={(value) => { setPage(value) }} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div style={{ width: QuickProgressBar() }} />
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
      </div>
    </div>
  );
}


