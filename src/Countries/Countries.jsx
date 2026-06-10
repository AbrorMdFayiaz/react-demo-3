import { use } from "react";
import Country from "./Country";

const Countries = ({promiseData}) => {
    const countriesData = use(promiseData);
    // let key=0;
    return (
        <div>
            {countriesData.countries.map(country=><Country countryData={country}></Country>)}
        </div>
    );
};

export default Countries