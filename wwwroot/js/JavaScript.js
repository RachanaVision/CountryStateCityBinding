var countryList = document.getElementById('countryList');
var stateList = document.getElementById('stateList');
var cityList = document.getElementById('cityList');
var zipcodeList = document.getElementById('zipcodeList');
function GetAllCountries() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.countrystatecity.in/v1/countries');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("X-CSCAPI-KEY", "cmpzdHp4NGNSSUc3TzVnZGpaQVR0U0xJSHdmRW5UamcxUlJyd2p1WA==");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var countryData = JSON.parse(xhr.responseText);             
                countryData.forEach(function (country) {
                    var option = document.createElement("option");
                    option.text = country.name;
                    option.value = country.iso2;
                    countryList.appendChild(option);
                });
            }
        }
    };
    xhr.send();
}

countryList.addEventListener('change', function () {

     stateList.style.display = 'block';
    
    let options = stateList.getElementsByTagName('option');
    for (var i = options.length; i--;) {
        stateList.removeChild(options[i]);
    }

    var xhr = new XMLHttpRequest();
    var selectedCountryId = this.value;

    xhr.open('GET', 'https://api.countrystatecity.in/v1/countries/' + selectedCountryId + '/states');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("X-CSCAPI-KEY", "cmpzdHp4NGNSSUc3TzVnZGpaQVR0U0xJSHdmRW5UamcxUlJyd2p1WA==");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var stateData = JSON.parse(xhr.responseText);
                //console.log(stateData);
                stateData.forEach(function (state) {
                    var option = document.createElement("option");
                    option.text = state.name;
                    option.value = state.iso2 + state.name;
                    stateList.appendChild(option);
                });
            }
        }
    };
    xhr.send();
})

stateList.addEventListener('change', function () {

    cityList.style.display = 'block';

    let options = cityList.getElementsByTagName('option');
    for (var i = options.length; i--;) {
        cityList.removeChild(options[i]);
    }

    var xhr = new XMLHttpRequest();
    var selectedCountryId = countryList.value;
    var selectedStateId = this.value;
    var stateId = selectedStateId.slice(0, 2);

    //console.log(stateId);
    xhr.open('GET', 'https://api.countrystatecity.in/v1/countries/' + selectedCountryId + '/states/' + stateId + '/cities'); 
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("X-CSCAPI-KEY", "cmpzdHp4NGNSSUc3TzVnZGpaQVR0U0xJSHdmRW5UamcxUlJyd2p1WA==");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var cityData = JSON.parse(xhr.responseText);
                //console.log(cityData);
                cityData.forEach(function (city) {
                    var option = document.createElement("option");
                    option.text = city.name;
                    option.value = city.name;
                    cityList.appendChild(option);
                });
            }
        }
    };
    xhr.send();
})


cityList.addEventListener('change', function () {
    zipcodeList.style.display = 'block';

    let options = zipcodeList.getElementsByTagName('option');
    for (var i = options.length; i--;) {
        zipcodeList.removeChild(options[i]);
    }

    var selectedCityId = this.value;
    var selectedStateId = stateList.value;
    var stateId = selectedStateId.slice(2, selectedStateId.length);
    var countryId = countryList.value;
    console.log(countryId);
    var xhr = new XMLHttpRequest();
    var url = "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-postal-code@public/records?limit=20&refine=country_code%3A%22IN%22&refine=admin_name1%3A%22" + stateId + "%22&refine=admin_name2%3A%22" + selectedCityId + "%22";
    //console.log(url);
    xhr.open('GET', 'https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-postal-code@public/records?limit=20&refine=country_code%3A%22' + countryId +'%22&refine=admin_name1%3A%22' + stateId + '%22&refine=admin_name2%3A%22' + selectedCityId + '%22');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var zipcodeData = JSON.parse(xhr.responseText);
                //console.log(zipcodeData.results);

                for (var i = 0; i < zipcodeData.results.length; i++) {
                   // console.log(zipcodeData.results[i].postal_code);
                    var option = document.createElement("option");
                    option.text = zipcodeData.results[i].postal_code;
                    option.value = zipcodeData.results[i].postal_code;
                    zipcodeList.appendChild(option);
                }

            }
        }
    };

    xhr.send();
})

