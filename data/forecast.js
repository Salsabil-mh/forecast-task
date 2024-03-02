const request = require("request")

const forecast = (latitude , longtitude , callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=2385c0b32fce4fa592d153533242602&q=" + latitude + "," + longtitude
    request ({url , json : true } , (error , response) => {
    
        if(error){
            callback ("UNABLE TO CONNECT TO WEATHER API SERVICE" , undefined)
        }else if(response.body.error){
            callback(response.body.error.message , undefined)
        }else{
            callback(undefined , response.body.location.name + " ,Condition is " + response.body.current.condition.text + " ,Temperature is " + response.body.current.temp_c)
        }
    })
    }
    
    module.exports = forecast