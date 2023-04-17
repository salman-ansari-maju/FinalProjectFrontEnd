const Customer = (props) => {
  return (
    <div className="customer">
      <div className="cuscompo">
        <h3> name = {props.name}</h3>
        <h3> email ={props.email}</h3>
        <h3> issue = {props.problem} </h3>
      </div>
    </div>
  );
};
export default Customer;
