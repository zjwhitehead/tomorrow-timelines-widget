/**
 * @return {string}
 */
function Wind({ speed }) {
    try {
        const number = Number.parseFloat(speed);
        return `${number.toFixed(0)}`;
    } catch (e) {
        return '';
    }
}

export { Wind };
