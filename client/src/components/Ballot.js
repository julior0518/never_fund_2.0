import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../Globals';

////// ballot is Ticket in Database

function Ballot(params) {
  const [ballotCreate, setBallotCreate] = useState({
    title: '',
    contract: '',
    description: '',
    user: '',
    positiveVotes: 0,
    negativeVotes: 0
  });
  function handleChange(e) {
    setBallotCreate({
      ...ballotCreate,
      [e.target.id]: e.target.value,
      user: params.userStatus.userID
    });
  }

  async function createBallot(e) {
    e.preventDefault();
    await axios.post(`${BASE_URL}/tickets`, ballotCreate);
    document.getElementById('title').value = '';
    document.getElementById('contract').value = '';
    document.getElementById('description').value = '';
    alert(
      'A new ballot has been created. Check your profile to update or edit your offer.'
    );
  }

  if (params.userStatus.userID === '') {
    window.location = 'http://localhost:3000';
  }

  return (
    <div className="Ballot">
      <h3>Create a ballot</h3>
      <p>
        Use this form to create a product that the community can vote on for the
        fund to buy
      </p>
      <form className="displayFormBallot">
        <input
          placeholder="Product Title"
          id="title"
          type="text"
          className="displayFormInput"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Contract Address"
          id="contract"
          type="text"
          className="displayFormInput"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Description"
          id="description"
          type="text"
          className="displayFormInputD"
          onChange={handleChange}
        ></input>
        <button onClick={createBallot}>Create Ballot</button>
      </form>
    </div>
  );
}

export default Ballot;
