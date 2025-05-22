import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
    const { name } = useParams();

    const [countryData, setcountryData] = useState({});
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .then((data) => {
          setcountryData(data[0]);
          console.log(data);
        })
        .finally(() => {
          setisLoading(false);
        });
    }, [name]);

    if (isLoading) {
      return <Loading />;
    }




    return (
      <div className="flex justify-center items-center p-5 shadow-lg rounded-lg w-fit mx-auto my-5">
        <div className="">
          <h1>{countryData?.name?.common}</h1>
          <img src={countryData?.flags?.svg} alt="" />
          <p>
            <b>Capital:</b>
            {countryData?.capital?.[0]}
          </p>
          <p>
            <b>Region:</b>
            {countryData?.region}
          </p>
          <p>
            <b>Population:</b>
            {countryData?.population}
          </p>
        </div>
      </div>
    );
}
 
export default CountryDetails;