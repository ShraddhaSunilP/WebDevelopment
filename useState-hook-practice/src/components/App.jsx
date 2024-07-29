import React, {useState} from 'react'

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time1, setTime] = useState(now);

 function updateTime(){
    const nowTime = new Date().toLocaleTimeString();
    setTime(nowTime);
  }

  return (
    <div className='container'>
      <h1>{time1}</h1>
      <button onClick={updateTime}>Get time</button>
    </div>
  )
}

export default App
