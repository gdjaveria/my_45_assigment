"use strict";
function describe_city(city, country = 'Default Country.') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('paris', 'France');
describe_city('Brazil');
