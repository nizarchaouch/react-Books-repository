import './Card.css';
function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="image book" />
                <h3 className='title'>{props.title}</h3>
            </div>
        </>
    )
}

export default Card;