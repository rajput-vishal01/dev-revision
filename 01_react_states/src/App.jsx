import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  return (
    <div className="p-6">
      <h1 className="mb-4">Counter : {count}</h1>

      <button
        className="mr-3 mb-3 px-3 py-1"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        className="mb-3 px-3 py-1"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Add Count value"
          onChange={(e) => setData(e.target.value)}
          className="mr-3 px-3 py-1"
        />

        <button
          className="px-3 py-1"
          onClick={() => setCount(Number(data))}
        >
          Set it to
        </button>
      </div>
    </div>
  );
};

export default App;
