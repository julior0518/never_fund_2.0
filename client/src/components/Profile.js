import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Globals';
import Ticket from './Ticket';

const Profile = (params) => {
  const [listBallots, setListBallots] = useState([]);
  const [reRender, setReRender] = useState({
    run: false
  });
  const [me, setMe] = useState();

  useEffect(() => {
    async function allBallots() {
      const res = await axios.get(`${BASE_URL}/tickets`);
      setListBallots(res.data.todosLosTickets);
    }
    allBallots();
  }, [reRender]);

  useEffect(() => {
    async function who() {
      const res = await axios.get(
        `${BASE_URL}/users/${params.userStatus.userID}`
      );
      setMe(res.data.esteUserId.nameUser);
    }
    who();
  }, []);

  if (params.userStatus.userID === '') {
    window.location = 'http://localhost:3000';
  }

  return (
    <div className="Profile">
      <p>Username: {me}</p>
      <div className="listTicket">
        {listBallots.map((ticket) => {
          if (ticket.user[0] === params.userStatus.userID) {
            return (
              <ul>
                <Ticket
                  title={ticket.title}
                  contract={ticket.contract}
                  description={ticket.description}
                  positiveVotes={ticket.positiveVotes}
                  negativeVotes={ticket.negativeVotes}
                  ID={ticket._id}
                  setReRender={setReRender}
                  reRender={reRender}
                />
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Profile;
