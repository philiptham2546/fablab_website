const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.static('dist'))

//properties are strings
let states = [
    {id: "WA",
        name: "Washington",
        legal: "0", //0 for not legal, 1 for legal, 2 for moratorium
        data: null
    },{id: "OR",
        name: "Oregon",
        legal: "2",
        legalData:"A gubernatorial moratorium on the death penalty has been in force since 2011. Governor John Kitzhaber used his clemency power to issue a reprieve on all Oregon death row convicts in 2011. His successor, Governor Kate Brown similarly commuted the sentences of the remaining inmates on death row. Both based their decisions on their assessment that the death penalty was immoral, expensive, dysfunctional, and discriminatory. Moreover, the State's legislature amended its death penalty statute in 2019 to significantly limit the crimes for which the penalty can be imposed, with Brown characterizing this as \"the near abolition of the death penalty.\"",
        legalSource:"https://deathpenaltyinfo.org/news/gov-kate-brown-commutes-the-sentences-of-oregons-17-death-row-prisoners",
        data: null
    },{id: "ID",
        name: "Idaho",
        legal: "1",
        data: null
    },{id: "MT",
        name: "Montana",
        legal: "1",
        data: null
    },{id: "WY",
        name: "Wyoming",
        legal: "1",
        data: null
    }, {id: "ND",
        name: "North Dakota",
        legal: "0",
        data: null
    }, {id: "SD",
        name: "South Dakota",
        legal: "1",
        data: null
    }, {id: "MN",
        name: "Minnesota",
        legal: "0",
        data: null
    }, {id: "IA",
        name: "Iowa",
        legal: "0",
        data: null
    }, {id: "MI",
        name: "Michigan",
        legal: "0",
        data: null
    }, {id: "WI",
        name: "Wisconsin",
        legal: "0",
        data: null
    }, {id: "IL",
        name: "Illinois",
        legal: "0",
        data: null
    }, {id: "IN",
        name: "Indiana",
        legal: "1",
        data: null
    }, {id: "OH",
        name: "Ohio",
        legal: "2",
        legalData:"A gubernatorial moratorium on the death penalty has been in force since 2020. Governor Mike DeWine suspended all executions indefinitely until a replacement to lethal injection is agreed upon by State legislators. He based this decision on scepticism in the efficacy of the penalty in deterring crime, and the high fiscal burden imposed on taxpayers.",
        legalSource:"https://www.cleveland.com/open/2020/12/ohio-will-stop-executions-until-lawmakers-pick-alternative-to-lethal-injection-gov-mike-dewine-says.html",
        data: null
    }, {id: "PA",
        name: "Pennsylvania",
        legal: "2",
        legalData:"A gubernatorial moratorium on the death penalty has been in force since 2015. Governor Tom Wolf criticized the State's death penalty system as being \"drawn out, expensive, and painful for all involved.\" Further, he cited that the system \"does not operate in an evenhanded manner,\" and that it discriminated against the poor and minority racial groups.",
        legalSource:"https://www.americanbar.org/groups/committees/death_penalty_representation/project_press/2015/summer/pennsylvania-governor-declares-moratorium-on-death-penalty/", 
        data: null
    }, {id: "NY",
        name: "New York",
        legal: "0",
        data: null
    }, {id: "VT",
        name: "Vermont",
        legal: "0",
        data: null
    }, {id: "NH",
        name: "New Hampshire",
        legal: "0",
        data: null
    }, {id: "ME",
        name: "Maine",
        legal: "0",
        data: null
    }, {id: "MA",
        name: "Massachusetts",
        legal: "0",
        data: null
    }, {id: "RI",
        name: "Rhode Island",
        legal: "0",
        data: null
    }, {id: "CT",
        name: "Connecticut",
        legal: "0",
        data: null
    }, {id: "NJ",
        name: "New Jersey",
        legal: "0",
        data: null
    }, {id: "DE",
        name: "Delaware",
        legal: "0",
        data: null
    }, {id: "MD",
        name: "Maryland",
        legal: "0",
        data: null
    }, {id: "WV",
        name: "West Virginia",
        legal: "0",
        data: null
    }, {id: "VA",
        name: "Virginia",
        legal: "0",
        data: null
    }, {id: "KY",
        name: "Kentucky",
        legal: "1",
        data: null
    }, {id: "MO",
        name: "Missouri",
        legal: "1",
        data: null
    }, {id: "NE",
        name: "Nebraska",
        legal: "1",
        data: null
    }, {id: "KS",
        name: "Kansas",
        legal: "1",
        data: null
    }, {id: "CO",
        name: "Colorado",
        legal: "0",
        data: null
    }, {id: "UT",
        name: "Utah",
        legal: "1",
        data: null
    }, {id: "NV",
        name: "Nevada",
        legal: "1",
        data: null
    }, {id: "CA",
        name: "California",
        legal: "2",
        legalData: "A gubernatorial moratorium on the death penalty has been in force since 2019. Governor Gavin Newsom considered his State's death penalty system as discriminatory against people of color and the poor, an undue fiscal burden on taxpayer dollars, and an \"absolute, irreversible and irreparable\" penalty that cannot be undone in cases of human error.",
        legalSource: "https://deathpenaltyinfo.org/news/california-governor-announces-moratorium-on-executions",
        data: [{
            number: "1",
            name: "Adrian Ortiz",
            sd: "2/26/21",
            race: "Latinx",
            aac: "19"
        }]
    }, {id: "AZ",
        name: "Arizona",
        legal: "2",
        legalData:"A gubernatorial moratorium on the death penalty has been in force since 2023. Following botched executions in 2022, Governor Katie Hobbs ordered a pause on executions pending a review of the State's execution process. She based her decision on the need to ensure transparency and accountability in the State's death penalty system.",
        legalSource:"https://deathpenaltyinfo.org/news/botched-executions-prompt-new-arizona-governor-and-attorney-general-to-halt-executions-pending-independent-review-of-states-execution-process",
        data: [{
            number: "1",
            name: "Bryan Patrick Miller",
            sd: "6/7/23",
            race: "White",
            aac: "~15"
        }]
    }, {id: "NM",
        name: "New Mexico",
        legal: "0",
        data: null
    }, {id: "TX",
        name: "Texas",
        legal: "1",
        data: null
    }, {id: "OK",
        name: "Oklahoma",
        legal: "1",
        data: null
    }, {id: "AR",
        name: "Arkansas",
        legal: "1",
        data: null
    }, {id: "LA",
        name: "Louisiana",
        legal: "1",
        data: null
    }, {id: "TN",
        name: "Tennessee",
        legal: "2",
        legalData:"A gubernatorial moratorium on the death penalty has been in force since 2020 but the status of this remains uncertain. In 2022, following a review of State execution procedure, Governor Bill Lee issued a moratorium on the death penalty until execution protocols were amended. In 2024, Lee signed a bill authorizing the death penalty for aggravated child sexual assault. He has not released an update on the status of the moratorium.",
        legalSource:"https://deathpenaltyinfo.org/news/tennessee-authorizes-death-penalty-for-child-sexual-assault-in-direct-challenge-to-supreme-court-precedent",
        data: null
    }, {id: "MS",
        name: "Mississippi",
        legal: "1",
        data: null
    }, {id: "AL",
        name: "Alabama",
        legal: "1",
        data: null
    }, {id: "FL",
        name: "Florida",
        legal: "1",
        data: [{
            number: "1",
            name: "Christian Cruz",
            sd: "2019",
            race: "Latinx",
            aac: "19"
        },{
            number: "2",
            name:"Benjamin Smiley",
            sd: "2018",
            race: "Black",
            aac: "20"
        }]
    }, {id: "GA",
        name: "Georgia",
        legal: "1",
        data: null
    }, {id: "SC",
        name: "South Carolina",
        legal: "1",
        data: [{
            number: "1",
            name: "Jerome Jenkins Jr.",
            sd: "2019",
            race: "Black",
            aac: "20"
        }]
    }, {id: "NC",
        name: "North Carolina",
        legal: "1",
        data: null
    }, {id: "AK",
        name: "Alaska",
        legal: "0",
        data: null
    }, {id: "HI",
        name: "Hawaii",
        legal: "0",
        data: null
    }

]

//route 1: global route
app.get('/info',(request, response)=>{
    response.send(
        `<h1>num of states: ${states.length} </h1>`
    )
})

//route 2: test collection
app.get('/api/states',(request,response)=>{
    response.json(states)
})

//route 3: individual test resource
app.get('/api/states/:id',(request,response)=>{
    const id = request.params.id
    const state = states.find(state => state.id===id)
    if (state){
        response.json(state)
    } else {
        response.status(404).end()
    }
})

app.put('/api/states/:id',(request,response)=>{
    const id = request.params.id
    const updatedState = request.body
    const stateIndex = states.findIndex(state => state.id === id)
    if (stateIndex !== -1){
        states[stateIndex] = {...states[stateIndex], ...updatedState}
        response.json({
            message: `${updatedState.name} updated successfully`,
            state: states[stateIndex]
        }) 
    } else {
        response.status(404).json({message: "State not found"})
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
