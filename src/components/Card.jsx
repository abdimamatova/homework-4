import "./Card.css";

function Card(props) {
  const realDate = new Date().getFullYear();
  let arrDate = props.date.getFullYear();
  return realDate === arrDate ? (
    <div className="container">
      <div className="Card">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div>{props.date.toLocaleDateString()}</div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="Card">
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.color}</div>
        <div>{`${realDate - arrDate} years ago`}</div>
      </div>
    </div>
  );
}
export default Card;
