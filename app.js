
 /////////// weather api code ///////////
 const request = require("request")


const url = "https://api.weatherapi.com/v1/current.json?key=bab9bdd71a7e40a09f5115527242107&q=Egypt&aqi=no"

request ({url , json : true  } , (error , response) => {

    if (error) {
        console.log("ERROR HAS OCCURED")
    } else if (response.body.error){
        console.log(response.body.error.message)
    }else {
        console.log(response.body.location.name ,response.body.current.condition.text)
    }
})



 ///////// import forcast and geocode file //////////////
   
const forecast = require ("./Data/forecast")

const geocode = require("./Data/geocode")


const country = process.argv[2]
geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })



 




  
  


