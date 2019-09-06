import React, { useState, useEffect, Fragment, useRef } from 'react';

const FetchHero = () => {
  //set state
  const [dataList, setDatalist] = useState(null);
  // create the query
  const link = 'https://reqres.in/api/users?page=1';

  const firstName = useRef('');
  const lastName = useRef('');
  const avatar = useRef('');
  const email = useRef('');

  // fetch the data
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(link);
    const data = await res.json();
    setDatalist(data.data);

    // set state to the data we got
  };
  // return data as a list

  const submitHandler = e => {
    e.preventDefault();
    let newItem = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      avatar: avatar.current.value,
      email: email.current.value
    };
    //
    if (newItem.first_name && newItem.last_name && newItem.email) {
      const newArr = [...dataList, newItem];
      setDatalist(newArr);
      firstName.current.value = null;
      lastName.current.value = null;
      avatar.current.value = null;
      email.current.valu = null;
    }
  };

  // render the data to the screen in a table
  return (
    <div>
      {dataList === null ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <form>
            <input type='text' ref={firstName} placeholder='FirstName' />
            <input type='text' ref={lastName} placeholder='LastName' />
            <input type='email' ref={email} placeholder='Email' />
            <input type='text' ref={avatar} placeholder='Photo Link' />
            <input
              type='submit'
              value='Submit'
              onClick={e => submitHandler(e)}
            />
          </form>
          <table style={center}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Photo</th>
                <th>Email</th>
              </tr>
              {dataList.map(({ first_name, avatar, last_name, email }, i) => (
                <Fragment key={i}>
                  <tr>
                    <td>{`${first_name} ${last_name}`}</td>
                    <td>
                      <img
                        src={avatar}
                        style={{ width: '127px', height: '127px' }}
                      />
                    </td>
                    <td>{email}</td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  );
};

const center = {
  width: '70%',
  margin: '0 auto'
};

export default FetchHero;
