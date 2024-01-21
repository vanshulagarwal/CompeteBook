// import React from "react";
import './Details.scss';
import useFetch from "../../hooks/useFetch";

const Details = () => {
    // const {platform}=
    const { data, loading, error } = useFetch("/details/codeforces");
    return (
        <div className="details">{
            error
                ? "error"
                : loading
                    ? "loading"
                    : data.rating
        }</div>
    )
}

export default Details;