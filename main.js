function pass()                                       // Function for passing the country name from one file to another by using localStorage
{
  var fir=document.getElementById("but").value;
  localStorage.setItem("value",fir);
  return false;
}

function pass_index()                                 // Function for getting back the country value when back is pressed
{
  var l=localStorage.getItem("value");
  document.getElementById('but').value=l;
  display();                                          // display function is called recursively
}

function display()
{
  let box=document.getElementById('but').value;
  const countriesList = document.getElementById("but");
  let countries;                                                    // will contain "fetched" data
  countriesList.addEventListener("change", newCountrySelection);    // will change when the new countrt is selected

function newCountrySelection(event)
{
  displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")         // API is fetched
.then(res => res.json())                              // The result is being converted into the JSON Format
.then(data => initialize(data))                       // The datas needed for processing is being initialized
.catch(err => console.log("Error:", err));            // Will be called in case of any error

function initialize(countriesData)
{
  countries = countriesData;                          // Contains the whole set of datas
  let options = "";
  var co=document.getElementById("but").value;        // Stores the country value in the variable
  displayCountryInfo(co);                             // The display function is called by passing the country as the argument
}

function displayCountryInfo(countryByName)
{
  const countryData = countries.find(country => country.name === countryByName); // The country is obtained from the data set and stored in a constant variable
  document.querySelector("#flag-container img").src = countryData.flag;      // Flag is displayed
  document.getElementById("capital").innerHTML = countryData.capital;        // Capital is displayed
}
}
