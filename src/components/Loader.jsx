import React from "react";

export function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 py-5">
      <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;