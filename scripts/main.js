// import scripts
import { Walkers } from "./Walkers.js"
import { CityList } from "./CityList.js"
import { Assignments } from "./Assignments.js"
import { RegisteredPets } from "./RegisteredPets.js"

// declare parentHTML and select terget in index.html
const mainContainer = document.querySelector("#container")

// store html representation of code that assigns imported scripts to target html in new variable
const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${RegisteredPets()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${Assignments()}
</article>
`

// plug html variable into innerHTML of line 8
mainContainer.innerHTML = applicationHTML

