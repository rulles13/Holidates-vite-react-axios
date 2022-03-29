import axios from 'axios';
import { useState } from "react";

const Holidates = () => {
    const [country, setCountry] = useState("");
    const fctGetDate = () => {
        console.log('hello');
        axios.get(`https://date.nager.at/api/v3/publicholidays/2020/${country}`)
        .then((response) => {
            let holidays = response.data;
            holidays.forEach(holiday => {
                console.log(`${holiday.date} : ${holiday.name}`);
                
            });
        })
        .catch((error) => {
            console.log(error.status);
        })
    }

    console.log(fctGetDate);

    return (
    <div>
        <input
          type="text"
          value={country}
          placeholder="BE"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={fctGetDate}>Envoyer</button>
        <div className='target'>
            {/* {holidays.map((elem) = (
                <p key={elem.id}>{elem.name}</p>
            ))} */}
        </div>
    </div>
    )
}

export default Holidates