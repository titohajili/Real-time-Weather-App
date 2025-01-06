import {updateWeather, error404} from "./api.js";

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474";

const currentLocation = function (){

}

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const chekHash = function () {
    
}

window.addEventListener("load", function (){
    if(!windowlocation.hash){
        window.location.hash = "#/current-location";
    }else{
        chekHash();
    }
})