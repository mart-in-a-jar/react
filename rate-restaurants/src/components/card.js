function CardBox(props) {
    return <div className="card-body">{props.children}</div>;
}

function Image(props) {
    return <img src={props.image} alt="Logo" className="picture" />;
}

function Name(props) {
    return <div className="name">{props.name}</div>;
}

function Details(props) {
    return <div className="details">{props.details}</div>;
}

function Star({ selected = false, onClick = (f) => f }) {
    return (
        <div
            className={selected ? "star selected" : "star"}
            onClick={onClick}
        ></div>
    );
}

function Card(props) {
    return (
        <CardBox>
            <div className="inner-body">
                <Image image={props.image} />
                <div className="body">
                    <div className="inner-body">
                        <Name name={props.name} />
                    </div>
                    <Details details={props.details} />
                    <div className="inner-body">
                        {[...Array(5)].map((n, i) => (
                            <Star
                                key={i}
                                selected={i < props.starsSelected}
                                onClick={() => props.change(props.id, i + 1)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </CardBox>
    );
}

export { Card };