const forecast = require("./data/forecast")
const geocode = require("./data/geocode")

const countryName = process.argv[2]
geocode(countryName , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : " , data)

    forecast ( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
    } )
})



