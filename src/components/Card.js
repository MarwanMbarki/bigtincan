import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from 'react-avatar';
import Modals from './Modals'

export default function Profile({image, name, email, address, phone, website, company, info}) {

    const [show, setShow] = useState(false);
const handleClose = () => {
  setShow(false);
};
const handleShow = () => {
    setShow(true)
}
    return (
      <Container onClick={handleShow}>
        <Row>
          <Col className="card_wrapper">
            <Row>
              <Col className="profile_img_wrapper">
                <div className="user_img">
                  {/* <img src={require('../img/user.png')} />{' '} */}
                  <Avatar name={name} size="200" round={true} />
                </div>
              </Col>
              <Col md={8} className="card_profile_details">
                <div>
                  <h1>{name}</h1>
                </div>
                <div className="card_profile_info">
                  <div>
                    <img src={require('../img/mail.png')} />{' '}
                  </div>
                  <div>
                    <p>{email}</p>
                  </div>
                </div>
                <div className="card_profile_info">
                  <div>
                    <img src={require('../img/contact-book.png')} />{' '}
                  </div>
                  <div>
                    <p>{address}</p>
                  </div>
                </div>
                <div className="card_profile_info">
                  <div>
                    <img src={require('../img/telephone.png')} />{' '}
                  </div>
                  <div>
                    <p>{phone}</p>
                  </div>
                </div>
                <div className="card_profile_info">
                  <div>
                    <img src={require('../img/world-wide-web.png')} />{' '}
                  </div>
                  <div>
                    <p>{website}</p>
                  </div>
                </div>
                <div className="card_profile_info company_info">
                  <div className="card_profile_logo">
                    <img src={require('../img/Vector.png')} />{' '}
                  </div>
                  <div>
                    <p className="company">{company}</p>
                    <p>{info} </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modals
          show={show}
          handleCloses={handleClose}
          name={name}
          email={email}
          address={address}
          phone={phone}
          website={website}
          company={company}
          info={info}
        />
      </Container>
    );
}