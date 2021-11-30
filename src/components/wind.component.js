/**
 * @return {string}
 */
function Wind({ speed, gust }) {
    try {
        const speedNum = Number.parseFloat(speed);
        const gustNum = Number.parseFloat(gust);
        return `${speedNum.toFixed(0)} - ${gustNum.toFixed(0)}`;
    } catch (e) {
        return '';
    }
}

export { Wind };
