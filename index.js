//Get references to the tbody element and button for loading additional results
var tbody = d3.select("tbody");
var datetimeInput = d3.select("#datetime");
var stateInput = d3.select("#state");
var cityInput = d3.select("#city");
var countryInput = d3.select("#country");
var shapeInput= d3.select("#shape");
var searchBtn = d3.select("#search");

// searchBtn.on("click", handleSearchButtonClick);
 
function buildTable(data) {

  tbody.html("")
  // Set filteredUFO as data
  // var UFO = data;
  // console.log("UFO:" + UFO)
  
  // Display table values in each cell
  data.forEach(function(UFOReport) {
      // console.log("UFO REPORT:" + UFOReport);
      var row = tbody.append("tr");
      
      Object.entries(UFOReport).forEach(function([key, value]) {
      // console.log("KEY, VALUE: " + key, value);
      var cell = tbody.append("td");
      cell.text(value);
      });
   });
}
    
 function handleSearchButtonClick() {

    d3.event.preventDefault();

    date = d3.select("#datetime").property("value");
    console.log(date)
    

    var filteredDatetime;
    if (date) {
      filteredDatetime = data.filter(row => row.datetime == date)
    }

    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    // var filterdatetime = UFO.filter(row => row.datetime === inputvalue);
    // console.log(UFO[0])
    // console.log("FILTERED DATETIME:" + filterdatetime)
    // var filtercity = UFO.filter(city === inputvalue)
    //   if (datetime === filterdatetime && city === filtercity && state === filterstate && country === filtercountry) {
    //     return true;
    //   }
    //   return false;
    // }
    buildTable(filteredDatetime)
  }

// Format the user's search by removing leading and trailing whitespace, lowercase the string
//var filterDateTime = datetimeInput.value;
//var filterCity = cityInput.value;
//var filterCountry = countryInput.value;
//var filterState = stateInput.value;
//var filterShape = shapeInput.value;

  // Set filteredDataSet to an array of all data whose fields matches the filter
  //filteredData = UFO.filter(function() {
    //var datetimeField = UFO.datetime;
    //var cityField = UFO.city;
    //var stateField = UFO.state;
    //var countryField = UFO.country;
    //var shapeField = UFO.shape;

    //if (inputId == datetime && inputValue) {
      // filter by datetime
      //filteredData = filteredData.filter(data => data.datetime == inputValue);
  //}

  //if (inputId == city && inputValue) {
      // filter by datetime
      //filteredData = filteredData.filter(data => data.city == inputValue);
  //}


d3.selectAll("#search").on("click", handleSearchButtonClick)

buildTable(data);
