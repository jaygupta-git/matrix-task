import axios from "axios";
import React, { useState } from "react";

const Search = () => {
    const [searchData, setSearchData] = useState("");
    const [pairData, setPairData] = useState();

    const handleChange = (e)=>{
        setSearchData(e.target.value);
    }

    const handleSubmit = (e)=>{
        alert(searchData);
        axios.get(`https://api.dexscreener.com/latest/dex/tokens/${searchData}`).then(data=> setPairData(data.data)).catch(err=>console.log(err));
        console.log(pairData);
        e.preventDefault();
    }

    return (
        <>
            <div className='d-flex justify-content-between px-5 py-2'>
                <form onSubmit={handleSubmit} className="position-relative">
                    <div><input className='searchBar btn-content' onChange={handleChange} type='search' placeholder='Search'></input></div>
                    <button className="position-absolute" style={{backgroundColor: "transparent", border: "none", right: "10px", bottom: "14px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </form>
                <button className='btn button' type='submit'><span className='btn-content'>Connect</span></button>
            </div>
        </>
    )
}

export default Search;