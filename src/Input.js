import React, { useState } from "react";

export const Input = () => {
  const [arr, setArr] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    var value = e.target.firstChild.value;
    setArr([...arr, value]);
    e.target.firstChild.value = "";
    console.log(arr);
  };
  const handleRemove = (id) => {
    const newList = arr.filter((item, i) => i !== id);
    setArr(newList);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="d-flex mb-3">
        <input className="form-control" placeholder="Add New Item" required />
        <button className="btn btn-light">
          <i className="fas fa-plus"></i>
        </button>
      </form>

      <ul className="list-group">
        {arr.map((item, i) => (
          <li key={i} className="d-flex list-group-item border-0 px-0 bg-transparent">
            <h6 className="form-control mb-0">{item}</h6>
            <button onClick={() => handleRemove(i)} className="btn btn-light float-right block-btn">
              <i className="fas fa-times"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
