import React from 'react'
import "./displayweather.css"

function DisplayWeather(props) {
    const {data} = props;
    
    const iconurl = `https://openweathermap.org/img/wn/${data.cod != 404? data.weather[0].icon : null}.png`

    return(
        <div className="displayweather">
            {
                data.cod != 404 ?
                
                <React.Fragment>
                <div className="maincard">
                <span className="cardtitle">
                    {data.name}, {data.sys.country}. Weather
                </span>
                <span className="cardsubtitle">
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>{Math.floor(1.8*(Math.floor(data.main.temp)-273)+32)}&#176;</h1>
                <span className="weather-main">
                    {data.weather[0].main}
                </span>
                <img src={iconurl} className="weather-icon" alt=""/>
                <span></span>
                <span className="weather-description">
                    Feels like {Math.floor(1.8*(Math.floor(data.main.feels_like)-273)+32)}&#176;
                </span>
            </div>
            <div className="weatherdetails">
                <div className="section1">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <span>
                                    {Math.floor(1.8*(Math.floor(data.main.temp_max)-273)+32)}&#176; / {Math.floor(1.8*(Math.floor(data.main.temp_min)-273)+32)}&#176;
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <span>
                                    {data.main.humidity}%
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="section2">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <h4>Sunrise</h4>
                            </td>
                            <td>
                                <span>
                                    {new Date(data.sys.sunrise*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunset</h4>
                            </td>
                            <td>
                                <span>
                                    {new Date(data.sys.sunset*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </React.Fragment>

                : <div className="maincard">
                    <h2>{data.message}</h2>
                </div>
            }
        </div>
    );
}

export default DisplayWeather