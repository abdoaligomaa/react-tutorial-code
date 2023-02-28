import "./index.css";


function Book({img,title,description,price}) {
  return (
    <>
      <div className="book">
        <img src={img} alt="image for book" />
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </>
  );
}
export default Book;
