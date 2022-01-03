import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Globals';
import Ticket from './Ticket';

const Profile = (params) => {
  const [listBallots, setListBallots] = useState([]);
  const [reRender, setReRender] = useState({
    run: false
  });

  useEffect(() => {
    async function allBallots() {
      const res = await axios.get(`${BASE_URL}/tickets`);
      setListBallots(res.data.todosLosTickets);
      console.log(';OL');
    }
    allBallots();
  }, [reRender]);

  if (params.userStatus.userID === '') {
    window.location = 'http://localhost:3000';
  }

  console.log(listBallots);

  return (
    <div className="Profile">
      <p>Profile</p>
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
