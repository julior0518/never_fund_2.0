import axios from "axios";
import { BASE_URL } from "../Globals";


function Ticket (props){

  async function deleteMe(e){
    e.preventDefault();
    await axios.delete(`${BASE_URL}/tickets/${props.ID}`)
    props.setReRender({...props.reRender, run: true})

  }

  function editMe(e){
    console.log(props.reRender.run)
    console.log(1)
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
      {/* <button onClick={editMe} style={{margin: 10 }}>Edit</button> */}
      <button onClick={deleteMe} style={{margin: 10 }}>Delete</button>
    </div>
  )
}

export default Ticket