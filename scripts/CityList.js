// import cities list from other script
import { getCities } from "./database.js"

// store imported function in a new variable
const cities = getCities()

// export new function
export const CityList = () => {
    // store an HTML ul in a new variable
    let citiesHTML = "<ol>"
    
    // iterate through the imported array
    for (const city of cities) {
        // add an HTML li to ul variable
        citiesHTML += `<li>${city.name}</li>`
    }
    
    // add an HTML ul closing tag to ul variable
    citiesHTML += "</ol>"
    
    // return ul variable
    return citiesHTML
}