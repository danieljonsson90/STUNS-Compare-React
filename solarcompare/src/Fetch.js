
async function componentDidMount() {
    try {
        const url = "https://stunssolar.azurewebsites.net/api/devices";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}

export default componentDidMount;