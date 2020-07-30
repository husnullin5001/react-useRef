import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('')
  const [renderCount, setRenderCount] = useState(1)

  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>Rendered count: {renderCount}</div>
    </>
  );
}

export default App;
