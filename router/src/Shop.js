import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import paths from "./paths";

export const Shop = () => {
    useEffect(() => {
        fetchItems();
        document.title = "Shop";
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const result = await fetch(
            "https://rickandmortyapi.com/api/character"
        ).then((data) => data.json());
        setItems(result.results);
    };

    return (
        <>
            {items.slice(0, 10).map((item) => {
                return (
                    <h1 key={item.id}>
                        <Link to={paths.shop + "/" + item.id}>{item.name}</Link>
                    </h1>
                );
            })}
        </>
    );
};

export const ShopItem = () => {
    const { id } = useParams();
    // define location since it is an object. else we get an 'undefined error'
    const [item, setItem] = useState({ location: {} });

    useEffect(() => {
        const fetchItem = async () => {
            const result = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            ).then((data) => data.json());
            setItem(result);
        };
        fetchItem();
    }, [id]);

    useEffect(() => {
        if (item.name) document.title = item.name;
        console.log(item.name);
    }, [item.name]);

    return (
        <div>
            <h1>{item.name}</h1>
            <p>Gender: {item.gender}</p>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Location: {item.location.name}</p>
            <img src={item.image} alt={item.name} />
            <Link to={paths.shop}>
                <div>Back</div>
            </Link>
        </div>
    );
};
