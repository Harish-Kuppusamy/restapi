import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const CountryList = () => {

  const [countryDatas, setcountryDatas] = useState([])
 const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
    
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
             
                setcountryDatas(data);
            console.log(data)
            }).finally(() => {
              setisLoading(false)
        })
},[])

  if (isLoading) {
    return <Loading/>
  }
  
    return ( 
        <div>

            <h1 className="text-3xl font-bold mb-3">Countries</h1>
            <div className="cardcontainer grid grid-cols-2 gap-2 md:grid-cols-4">

                {countryDatas.map((country) => {
return (
  <Link to={`/country/${country.name.common}`} className="cardcontainer__card shadow-lg border p-4 rounded-xl w-fit">
    <img
      className="w-full h-32 object-contain"
      src={country.flags.svg}
      alt={country.name.common}
    />
    <h2 className="text-xl font-thin">{country.name.common}</h2>
  </Link>
);

                })}

            </div>

        </div>
     );
}
 
export default CountryList;