import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modals({show, handleCloses, name, email, address, phone, website, company, info}) {
  return (
    <>
      <Modal show={show} onHide={handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control placeholder={'Name'} id="fullname" defaultValue={name} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>email</Form.Label>
            <Form.Control placeholder=" Email" defaultValue={email} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Address" defaultValue={address} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control placeholder="Phone" defaultValue={phone} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control placeholder="Website" defaultValue={website} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Company" defaultValue={company} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company Details</Form.Label>
            <Form.Control placeholder="Company Details" defaultValue={info} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloses}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Modals
