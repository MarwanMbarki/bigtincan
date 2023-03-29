import React, {useState, useEffect} from 'react';
import Profile from './components/Card';

import './App.css';



function App() {
  const [data, setData] = useState([])

  

  useEffect(()=>{
    getData();
  },[])
   const getData = () => {
     return fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((json) => {
         setData(json);
         console.log(json)
       })
       .catch((error) => {
         console.error('Error:', error);
       });
  }

  return (
    data && data.map((item, key)=> {
      return (
        <div key={key}>
          <Profile
            image={''}
            name={item.name}
            email={item.email}
            address={
              item.address.street +
              ' - ' +
              item.address.suite +
              ' - ' +
              item.address.city +
              ' - ' +
              item.address.zipcode
            }
            phone={item.phone}
            website={item.website}
            company={item.company.name}
            info={item.company.bs}
            key={key}
          />
        </div>
      );
    })
    
  );
}

export default App;
