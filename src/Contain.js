import React from "react";
import { Input } from "./Input";

export const Contain = (props) => {
  return (
    <div className={props.theme} style={{ backgroundColor: props.bgcolor }}>
      <h3 className="mb-4">
        {props.emoji}
        {props.heading}
      </h3>
      <Input />
    </div>
  );
};
