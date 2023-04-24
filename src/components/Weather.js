import React , { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather.js";

function Weather() {

    const APIKEY = "38090215cbeaa1f65e4c2b1e91b49eb7";

    const [form, setForm] = useState({
        city:"",
        country:""

    })

    const [weather, setWeather] = useState([])

    async function weatherData(e) {
        e.preventDefault();
        if(form.city === ""){
            alert("Add Values");
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((res) => res.json()).then((data) => data);
            console.log(data)

            setWeather(
                {
                    data : data
                }
            );
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setForm({...form, city:value})
        }
        if(name === "country"){
            setForm({...form, country:value})
        }

    }
    return (<div className="weather">
        <span className="title">
            Weather App
        </span>
        <br/>
        <form>
            <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
            <button className="getweather" onClick={e=>weatherData(e)}>
                Submit
            </button>
        </form>

        {
            weather.data !== undefined ? (
            <div>
                <DisplayWeather data={weather.data} />
            </div>


            ) : null}
    </div>
    );
}

export default Weather;
