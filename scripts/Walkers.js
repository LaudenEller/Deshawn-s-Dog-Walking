// import walkers and walkerCities functions
import { getWalkers, getWalkerCities, getCities } from "./database.js"

// add event listener to document
document.addEventListener(
    // specify what event to listen for
    "click",
    // declare a function that accepts the new event as input
    (clickEvent) => {
        // store the event in a new variable
        const itemClicked = clickEvent.target
        // add conditional if the thing clicked on is "walker"
        if (itemClicked.id.startsWith("walker")) {
            // create an array to store the walker id of the item clicked
            const [, walkerId] = itemClicked.id.split("--")

            // iterate through the walkers array from line 29
            for (const walker of walkers) {
                // add a conditional that looks for a match between the integer ids on walkers to the walker id on array from line 15
                if (walker.id === parseInt(walkerId)) {
                    // store a function that returns a walker's assigned walkerCities in a new variable
                    const assignment = filterWalkerCitiesByWalker(walker)
                    // store a function that returns the names of the walkerCities from line 22 in a new variable
                    const cities = walkerCitiesNameFunction(assignment)
                    // click event creates new window that displays the walker's name and names of the cities they walk in
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

// store imported function in a new variable
const walkers = getWalkers()

// export a new function with no parameters
export const Walkers = () => {
    // store an HTML ul in a new variable
    let walkerHTML = "<ul>"

    // iterate through the imported walkers array
    for (const walker of walkers) {
        // add an HTML li to ul variable
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    // add HTML ul closing tag to ul variable
    walkerHTML += "</ul>"

    // return ul variable
    return walkerHTML

}

// store imported function in a new variable
const walkerCities = getWalkerCities()

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    let assignments = []
    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
            // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }
    // After the loop is done, return the assignments array
    return assignments
}

//store imported function in a new variable
const cityList = getCities()

// Create function that accepts matchingCityObjectArray as a paratmeter
const walkerCitiesNameFunction = (assignments) => {
    // Declare an empty string
    let cityNameString = ""
    // iterate through the city array
    for (const assignment of assignments) {
        // add conditional to check if assignments array length is > 1
        if (assignments.length > 1) {
            // for each assignment, iterate through the imported list of cities
            for (const city of cityList) {
                // keep track of how many city names you have added to string
                if (cityNameString.length === assignments.length - 1 && city.id === assignment.cityId) {
                    // Push city name and previous cities to string
                    cityNameString = `${cityNameString} and ${city.name}`
            }
            else if (city.id === assignment.cityId) {
                // Push Cities.name to string
                cityNameString += `${city.name}`
            }
        }
    }
        // Check if the primary key of the Cities equals the foreign key on the walkerCities
        else {
            // for each assignment, iterate through the imported list of cities
            for (const city of cityList) {
                if (city.id === assignment.cityId) {
                    // Push Cities.name to string
                    cityNameString = `${city.name}`
                }
            }
        }
    }
    // Return string
    return cityNameString
}