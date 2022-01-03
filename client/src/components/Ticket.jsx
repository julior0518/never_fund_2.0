function Ticket (props){

  return(
    <div className="ticketDisplay">
      <h3 >{props.title}</h3>
      <h5>{props.contract}</h5>
      <p>{props.description}</p>
      <div className="voting" style={{display: "flex"}} >
        <p style={{margin: 10 }}>Yes: {props.positiveVotes}</p>
        <p style={{margin: 10 }}>No: {props.negativeVotes} </p>
      </div>
      <button>Edit</button>
      <p></p>
    </div>
  )
}

export default Ticket