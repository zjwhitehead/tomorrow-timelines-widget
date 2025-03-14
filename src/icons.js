import clearDay from './icons/clear_day.svg';
import cloudy from './icons/cloudy.svg';
import mostlyClearDay from './icons/mostly_clear_day.svg';
import partlyCloudyDay from './icons/partly_cloudy_day.svg';
import mostlyCloudy from './icons/mostly_cloudy.svg';
import fog from './icons/fog.svg';
import fogLight from './icons/fog_light.svg';
import drizzle from './icons/drizzle.svg';
import rain from './icons/rain.svg';
import rainLight from './icons/rain_light.svg';
import rainHeavy from './icons/rain_heavy.svg';
import snow from './icons/snow.svg';
import flurries from './icons/flurries.svg';
import snowLight from './icons/snow_light.svg';
import snowHeavy from './icons/snow_heavy.svg';
import freezingDrizzle from './icons/freezing_drizzle.svg';
import freezingRain from './icons/freezing_rain.svg';
import freezingRainLight from './icons/freezing_rain_light.svg';
import freezingRainHeavy from './icons/freezing_rain_heavy.svg';
import icePellets from './icons/ice_pellets.svg';
import icePelletsHeavy from './icons/ice_pellets_heavy.svg';
import icePelletsLight from './icons/ice_pellets_light.svg';
import tstorm from './icons/tstorm.svg';
import arrow from './icons/icon-arrow-up.svg';
import sunrise from './icons/sunrise.svg';
import sunset from './icons/sunset.svg';

//TODO leverage night icons
const weatherIcons = {
    1000: clearDay,
    1001: cloudy,
    1100: mostlyClearDay,
    1101: partlyCloudyDay,
    1102: mostlyCloudy,
    2000: fog,
    2100: fogLight,
    // 3000: "Light Wind",
    // 3001: "Wind",
    // 3002: "Strong Wind",
    4000: drizzle,
    4001: rain,
    4200: rainLight,
    4201: rainHeavy,
    5000: snow,
    5001: flurries,
    5100: snowLight,
    5101: snowHeavy,
    6000: freezingDrizzle,
    6001: freezingRain,
    6200: freezingRainLight,
    6201: freezingRainHeavy,
    7000: icePellets,
    7101: icePelletsHeavy,
    7102: icePelletsLight,
    8000: tstorm,
    arrow: arrow,
    sunrise: sunrise,
    sunset: sunset,
};

export function getIcon(weatherCode) {
    return weatherIcons[weatherCode];
}
