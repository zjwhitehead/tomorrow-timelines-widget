import { useFetch } from "./use-fetch.hook";
import { createUrl } from "../utilities";

/**
 * A react hook that fetches timeline of realtime and hourly data for a given location
 * (<lat>, <lon>) for a time frame (<start>, <end>).
 */
 const useSunrise = ({ lat, lon }) => {
    const url = createUrl({
        url: 'https://api.sunrise-sunset.org/json',
        query: {
            lat: lat,
            lng: lon,
            date: 'today',
            formatted: 0
        }
    });

    return useFetch({ url });
};

export { useSunrise };
