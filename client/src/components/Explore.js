import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Globals';
import Ticket from './TicketX';

const Explore = (params) => {
  const [listBallots, setListBallots] = useState([]);
  const [reRender, setReRender] = useState({
    run: false
  });

  useEffect(() => {
    async function allBallots() {
      const res = await axios.get(`${BASE_URL}/tickets`);
      setListBallots(res.data.todosLosTickets);
    }
    allBallots();
  }, [reRender]);

  if (params.userStatus.userID === '') {
    window.location = 'http://localhost:3000';
  }

  return (
    <div className="Explore">
      <h1>Vote on other users ballots</h1>
      <p>
        Explore users interest and let them know if you agree with the purchase
        they want to make
      </p>
      <div className="listTicketX">
        {listBallots.map((ticket) => {
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
        })}
      </div>
    </div>
  );
};

export default Explore;
