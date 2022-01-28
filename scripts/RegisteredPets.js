// import Pets from database
import { getPets } from "./database.js"

// store imported function in a new variable
const pets = getPets()

// export a function that doesn't have parameters
export const RegisteredPets = () => {
    // store an HTML ul in a new variable
    let petHTML = "<ul>"

    // iterate through the imported array
    for (const pet of pets) {
        // add an HTML li to ul variable
        petHTML += `<li>${pet.name}</li>`
    }

    // add an HTML ul closing tag to ul variable
    petHTML += "</ul>"

    // return ul variable
    return petHTML
}