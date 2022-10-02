import React from "react";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function timeConverter(date) {
    var days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    var d = new Date(date * 1000);
    var dayName = days[d.getDay()];
    return dayName;
}

function dateConvertUnixTimeStamp(dt) {
    const date = new Date();
    const unixTimestamp = Math.floor(date.getTime() / 1000);

    if (timeConverter(dt) === timeConverter(unixTimestamp)) {
        return true;
    }
    return false;
}

function WeatherCard({weather}) {
    return (
        <div style={{width: "160px", height: "260px"}}
             className={` ${dateConvertUnixTimeStamp(weather.dt) && 'bg-light border-light'} px-3 py-2 d-flex flex-column justify-content-around align-items-center  `}>
            <p className={"fs-4"}>{timeConverter(weather.dt)}</p>

            <p className={'fw-light'}>{capitalizeFirstLetter(weather.weather[0].description)}</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <div className={"d-flex flex-row justify-content-around"}>
                <p className={"mx-2"}>{weather.temp.day}°</p>
                <span>/</span>
                <p className={"mx-2"}>{weather.temp.night}°</p></div>

        </div>
    );
}

export default WeatherCard;
