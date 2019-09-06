import React, { useEffect, useState } from 'react';

const AppCurTime = () => {
  const [timeList, setTimeList] = useState([]);
  // get current time by click
  const onClick = () => {
    // const time = new Date().toTimeString();
    const now = new Date();
    const hours = now.getHours();
    const minites = now.getMinutes();
    const seconds = now.getSeconds();
    const miliseconds = now.getMilliseconds();
    const currentTime = `${hours}:${minites}:${seconds}:${miliseconds}`;
    // console.log(time);
    const newTimeList = [...timeList, currentTime];
    setTimeList(newTimeList);
  };
  // get current time in list by each click
  // delete the time item

  const removeTime = id => {
    setTimeList(() => timeList.filter((time, i) => i !== id));
  };
  return (
    <div>
      <button onClick={onClick}>+</button>
      <ul>
        {timeList.map((timeItem, i) => (
          <li key={i}>
            {timeItem}
            <button onClick={() => removeTime(i)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppCurTime;
