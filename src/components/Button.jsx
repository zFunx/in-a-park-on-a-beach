import React from "react";

const Button = ({children,...props}) => {
  return (
    <button {...props} className="bg-blue-700 py-2 px-4 rounded-md text-white">
      {children}
    </button>
  );
};

export default Button;
