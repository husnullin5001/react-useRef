import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>Rendered count: {renderCount.current}</div>
    </>
  );
}

export default App;
