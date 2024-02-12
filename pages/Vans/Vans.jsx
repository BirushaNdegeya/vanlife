import React, { useState} from "react"
import { Link, useSearchParams } from "react-router-dom";
import getVans from "../../api";


const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');

    const [vans, setVans] = useState([]);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(prevLoad => !prevLoad);
            try {
                const data = await getVans();
                setVans(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(prevLoad => !prevLoad);
            }
        }
        loadVans();
    }, []);

    const displayedVans = typeFilter ?
        vans.filter((van) => van.type.toLowerCase() === typeFilter)
        : vans;


    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={ { 
                search: `?${searchParams.toString()}`,
                type: typeFilter
                }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ));

    if (loading) {
        return <h1 style={{ textAlign: 'center', marginTop: '60px'}}>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`} 
                    onClick={() => setSearchParams({ type: 'simple'})}>Simple</button>
                <button 
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null }`} 
                    onClick={() => setSearchParams({ type: 'luxury'})}>Luxury</button>
                <button 
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null }`} 
                    onClick={() => setSearchParams({ type: 'rugged'})}>Rugged</button>
                {
                    typeFilter ? (
                        <button className="van-type clear-filters" onClick={() => setSearchParams({})}>Clear</button>
                    ) : null
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
};

export default Vans;