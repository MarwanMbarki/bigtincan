import React, {useState, useEffect} from 'react';
import Profile from './components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modals from './components/Modals';

import './App.css';
import { Container } from 'react-bootstrap';

function App({ image, handleSave, name, email, address, phone, website, company, info }) {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const submitUser = () => {
    console.log('=> ', name);
  };

  return (
    <>
      <Modals
        show={show}
        handleCloses={handleClose}
        name={(e) => name}
        email={email}
        address={address}
        phone={phone}
        website={website}
        company={company}
        info={info}
        handleSave={submitUser}
        onChange={(e) => console.log(e.target.value)}
      />
      <Container>
        <Row>
          <Col className="add_btn">
            <Button variant="primary" onClick={handleShow}>
              Add User
            </Button>{' '}
          </Col>
        </Row>
      </Container>
      {data &&
        data.map((item, key) => {
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
        })}
    </>
  );
}

export default App;
