function Ticket (props){

  return(
    <div className="ticketDisplay">
      <h3 >{props.title}</h3>
      <h5>{props.contract}</h5>
      <p>{props.description}</p>
      <div className="voting">
        <p>{props.positiveVotes}</p>
      </div>
    </div>
  )
}

export default Ticket