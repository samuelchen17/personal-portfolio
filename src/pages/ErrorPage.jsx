import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <Link to="/">
        <button className="bg-blue-500">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
