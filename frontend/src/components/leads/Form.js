import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export const Form = ({ addLead }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div
      className="card card-body p-4 mt-4 mb-4 bg-secondary"
      style={{ width: '400px' }}
    >
      <h2 className="mb-4">Add Lead</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name" style={{ width: '100%' }}>
            Name
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mt-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ width: '100%' }}>
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mt-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="message" style={{ width: '100%' }}>
            Message
            <input
              type="text"
              name="message"
              id="message"
              className="form-control mt-1"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>
        </div>
        <div className="form-group mb-1">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              console.log('submit');
              const lead = { name, email, message };
              addLead(lead);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(Form);
