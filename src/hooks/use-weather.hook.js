import { useFetch } from "./use-fetch.hook";
import { createUrl } from "../utilities";

/**
 * A react hook that fetches timeline of realtime and hourly data for a given location
 * (<lat>, <lon>) for a time frame (<start>, <end>).
 */
 const useTimeline = ({ apikey, lat, lon, startTime, endTime }) => {
    const url = createUrl({
        url: 'https://api.tomorrow.io/v4/timelines',
        query: {
            apikey,
            location: `${lat},${lon}`,
            units: 'imperial',
            timesteps: 'current,1h',
            fields: 'humidity,temperature,temperatureApparent,weatherCode,windSpeed,windDirection,windGust,visibility,precipitationProbability',
        }
    });

    // need sunriseTime,sunsetTime but it only works on 1d intervals

    return useFetch({ url });
};

export { useTimeline };
