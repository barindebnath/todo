import React from "react";
import { Contain } from "./Contain";

export const App = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <Contain theme="alert-success p-4 rounded-lg shadow-sm" bgcolor="#c9f5d3" heading=" To Do List" emoji={<i className="far fa-laugh-beam"></i>} />
        </div>
        <div className="col-md-6 mb-4">
          <Contain theme="alert-danger p-4 rounded-lg shadow-sm" bgcolor="#f7ced2" heading=" Not To Do List" emoji={<i className="far fa-frown"></i>} />
        </div>
      </div>
    </div>
  );
};
