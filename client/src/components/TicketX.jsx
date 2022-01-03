import axios from "axios";
import { BASE_URL } from "../Globals";


function Ticket (props){

  async function deleteMe(e){
    e.preventDefault();
    await axios.delete(`${BASE_URL}/tickets/${props.ID}`)

  }

  async function yeahBuddy(e){
    const res = await axios.get(`${BASE_URL}/tickets/${props.ID}`)
    let yeses = res.data.esteTicketId.positiveVotes
    let newyes = yeses + 1
    await axios.put(`${BASE_URL}/tickets/${props.ID}`, {positiveVotes: newyes})
    props.setReRender({...props.reRender, run: true})
  }

  async function nopers(e){
    const res = await axios.get(`${BASE_URL}/tickets/${props.ID}`)
    let noNo = res.data.esteTicketId.negativeVotes
    let newno = noNo + 1
    await axios.put(`${BASE_URL}/tickets/${props.ID}`, {negativeVotes: newno})
    props.setReRender({...props.reRender, run: true})
  }



  return(
    <div className="ticketDisplay">
      <h3 >{props.title}</h3>
      <h5>{props.contract}</h5>
      <p>{props.description}</p>
      <div className="voting" style={{display: "flex"}} >
        <p style={{margin: 10 }}>Yes: {props.positiveVotes}</p>
        <p style={{margin: 10 }}>No: {props.negativeVotes} </p>
      </div>
      <button onClick={yeahBuddy} style={{margin: 10 }}>Yes</button>
      <button onClick={nopers} style={{margin: 10 }}>No</button>

    </div>
  )
}

export default Ticket