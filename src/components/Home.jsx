import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Ready for War?</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Your name"
      />
      <button disabled={name.length === 0 ? true : false}>Next</button>
    </div>
  );
}
