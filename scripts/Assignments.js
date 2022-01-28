// import scripts
import { getPets, getWalkers } from "./database.js"

// store imported functions in new variables
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet

// Function that accepts two parameters, an object and an array
const findWalker = (pet, allWalkers) => {
    // declare new variable
    let petWalker = null

    // iterate the array parameter
    for (const walker of allWalkers) {
        // conditional that compares id properties of the two parameters
        if (walker.id === pet.walkerId) {
            // store matching array integers in the new variable
            petWalker = walker
        }
    }

    // Return a variable that now has the matching array integer for the objet
    return petWalker
}

// export new function that accepts an array as an argument
export const Assignments = () => {
    // store empty string in a new variable
    let assignmentHTML = ""
    // add HTML ul to string
    assignmentHTML += "<ul>"

    // iterate through the imported array on line 5
    for (const currentPet of pets) {

        // store the function from line 12 with objects from the array and the imported array on line 6 
        const currentPetWalker = findWalker(currentPet, walkers)
        // add interpolated string to string with display message
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }
    
    // add HTML ul closing tag to string
    assignmentHTML += "</ul>"

    // return string
    return assignmentHTML
}

