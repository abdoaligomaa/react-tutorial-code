import "./index.css";

function Greeting() {
  return (
    <>
      <div className="greeting">
        <Person />
        <Message />
      </div>
    </>
  );
}
function Person() {
  return <h2>name of the Person</h2>;
}
function Message() {
  return <h3>greeting message</h3>;
}
export default Greeting;
