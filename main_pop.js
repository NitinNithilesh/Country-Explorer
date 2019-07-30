function pass()                                           // Function for passing the country name from one file to another by using localStorage
{
  var fir=document.getElementById("but").value;
  localStorage.setItem("value",fir);
  return false;
}

function display()
{
  var l=localStorage.getItem("value");
  document.getElementById('name').innerHTML=l;
  const countriesList = document.getElementById("name");
  let countries;                                                      // will contain "fetched" data
  countriesList.addEventListener("change", newCountrySelection);      // will change when the new countrt is selected

function newCountrySelection(event)
{
  displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")              // API is fetched
.then(res => res.json())                                   // The result is being converted into the JSON Format
.then(data => initialize(data))                            // The datas needed for processing is being initialized
.catch(err => console.log("Error:", err));                 // Will be called in case of any error

function initialize(countriesData)
{
  countries = countriesData;                                // Contains the whole set of datas
  let options = "";
  displayCountryInfo(l);                                    // The display function is called by passing the country as the argument
}

function displayCountryInfo(countryByName)
{
  const countryData = countries.find(country => country.name === countryByName);  // The country is obtained from the data set and stored in a constant variable
  document.querySelector("#flag-container img").src = countryData.flag;            // Flag is displayed
  document.getElementById("name").innerHTML = countryData.name;                      // Country is displayed
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US"); // Population is displayed
}
}
