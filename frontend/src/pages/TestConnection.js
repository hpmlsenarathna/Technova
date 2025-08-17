import React, { useEffect, useState } from "react";
import API from "../api";

function TestConnection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/test") // test route from backend
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend + Backend Connected ✅</h1>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestConnection;
