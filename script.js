var searchBtn = document.getElementById("search-btn");
var countryNameInput = document.getElementById("input-box");
var listItems = document.getElementById("listItems");

searchBtn.addEventListener("click", async () => {
    listItems.innerHTML = " ";
    var countryName = countryNameInput.value;
    var url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Please enter valid country name...');
        }
    const data = await response.json();
    let flag = (data[0].flags.svg);
    let capital = (data[0].capital[0]);
    let currency = (data[0].currencies[Object.keys(data[0].currencies)].name);
    let population = (data[0].population);
    let region = (data[0].region);
    let timezones = (data[0].timezones[0]);

    const img = document.createElement("img");
    img.src = flag;
    img.alt = "Country Flag";
    listItems.appendChild(img);
    const li = document.createElement("li");
    li.innerHTML = "Capital: " + capital;
    listItems.appendChild(li);
    const li1 = document.createElement("li");
    li1.innerHTML = "Currency: " + currency;
    listItems.appendChild(li1);
    const li2 = document.createElement("li");
    li2.innerHTML = "Population: " + population;
    listItems.appendChild(li2);
    const li3 = document.createElement("li");
    li3.innerHTML = "Region: " + region;
    listItems.appendChild(li3);
    const li4 = document.createElement("li");
    li4.innerHTML = "Timezone: " + timezones;
    listItems.appendChild(li4);

} catch (error) {
    const errorMessage = document.createElement("li");
    errorMessage.innerHTML = error.message;
    errorMessage.style.color = 'red';
    listItems.appendChild(errorMessage);
    console.error('There was a problem with the fetch operation:', error);
}
   
})
