import React, { useState} from "react"
import { Link, useSearchParams } from "react-router-dom"

const Vans = () => {
    const margin = {
        margin: '5px',
    };
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');

    const [vans, setVans] = useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, []);

    const displayedVans = typeFilter ?
        vans.filter((van) => van.type.toLowerCase() === typeFilter)
        : vans;


    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className="van-type simple" onClick={() => setSearchParams({ type: 'simple'})}>Simple</button>
                <button className="van-type luxury" onClick={() => setSearchParams({ type: 'luxury'})}>Luxury</button>
                <button className="van-type rugged" onClick={() => setSearchParams({ type: 'rugged'})}>Rugged</button>
                <button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
};

export default Vans;