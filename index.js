//Returns a list of drivers whose names match the provided string (case insensitive)
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Returns a list of drivers whose names begin with the provided letters
function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.startsWith(query));
}
//Returns a list of drivers whose name property matches the provided string
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);
}
  
 
 