//things needed:
//var input_color for the color the users choose("black", "white", "red", "green", "yellow", "blue")
//var input_Cloth for the cloth type the users choose("T-Shirt", "Short Skirt/Shorts", "Long Skirt/Trousers", "Sweater")
//all in string

//the program will produce:
//str temp for current temprature
//str output_Cloth for cloth type("T-Shirt", "Short Skirt/Shorts", "Long Skirt/Trousers", "Sweater")
//str output_Coat for coat("No Coat", "Light Coat", "Heavy Coat", "Puffer Jacket")
//str output_Tights for tights("No Tights", "Under 40 Denier Tights", "Under 40 Denier Tights", "Under 70 Denier Tights","40-70 Denier Tights", "80-100 Denier Tights")
//str output_texture for texture("linen", "silk，modal and cotton", "cotton", "wool and cotton", "wool")
//int output_c_r for the decimal r for the first color
//int output_c_g for the decimal g for the first color
//int output_c_b for the decimal b for the first color
//int output_m_r for the decimal r for the second color
//int output_m_g for the decimal g for the second color
//int output_m_b for the decimal b for the second color


//get geolocation

var lat;
var long;
navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
var current;

function gettheweather(){
    // API Key methods
    Weather.setApiKey( '12345' );
    var tempApiKey = Weather.getApiKey();
    
    // Language methods
    Weather.setLanguage( "en" );
    var tempLanguage = Weather.getLanguage();
    
    getPosition();
    // Get the current weather for a given city using the latitude and longitude
    Weather.getCurrentByLatLong( lat, long, function( current ) {
        temp = Math.round(Weather.kelvinToFahrenheit( current.temperature()))
    });

}

gettheweather();

//get the cloth suggestion type
var output_Cloth;
var output_Coat;
var output_Tights;

if (input_Cloth == "Short Skirt/Shorts"){
    if (temp > 80){
        output_Cloth = "T-Shirt";
        output_Coat = "No Coat";
        output_Tights = "No Tights";
    } else if (temp > 60){
        output_Cloth = "T-Shirt";
        output_Coat = "Light Coat";
        output_Tights = "Under 40 Denier Tights";
    } else if (temp > 40){
        output_Cloth = "Sweater";
        output_Coat = "Heavy Coat";
        output_Tights = "40-70 Denier Tights";
    } else {
        output_Cloth = "Sweater";
        output_Coat = "Puffer Jacket";
        output_Tights = "80-100 Denier Tights";
    }
} else if (input_Cloth == "Long Skirt/Trousers"){
    if (temp > 80){
        output_Cloth = "T-Shirt";
        output_Coat = "No Coat";
        output_Tights = "No Tights";
    } else if (temp > 60){
        output_Cloth = "T-Shirt";
        output_Coat = "Light Coat";
        output_Tights = "No Tights";
    } else if (temp > 40){
        output_Cloth = "Sweater";
        output_Coat = "Heavy Coat";
        output_Tights = "Under 70 Denier Tights";
    } else {
        output_Cloth = "Sweater";
        output_Coat = "Puffer Jacket";
        output_Tights = "80-100 Denier Tights";
    }
} else if (input_Cloth == "T-Shirt"){
    if (temp > 80){
        output_Cloth = "Skirt";
        output_Coat = "No Coat";
        output_Tights = "No Tights";
    } else if (temp > 60){
        output_Cloth = "Short Skirt/Shorts";
        output_Tights = "Under 40 Denier Tights";
        output_Coat = "Light Coat";
    } else if (temp > 40){
        output_Cloth = "Long Skirt/Trousers";
        output_Coat = "Heavy Coat";
        output_Tights = "40-70 Denier Tights";
    } else {
        output_Cloth = "Long Skirt/Trousers";
        output_Coat = "Puffer Jacket";
        output_Tights = "80-100 Denier Tights";
    }
} else if (input_Cloth == "Sweater"){
    if (temp > 80){
        output_Cloth = "It is too hot to wear a sweater!";
        output_Coat = "No Coat";
        output_Tights = "No Tights";
    } else if (temp > 60){
        output_Cloth = "Short Skirt/Shorts";
        output_Tights = "Under 40 Denier Tights";
    } else if (temp > 40){
        output_Cloth = "Long Skirt/Trousers";
        output_Coat = "Heavy Coat";
        output_Tights = "40-70 Denier Tights"
    } else {
        output_Cloth = "Long Skirt/Trousers";
        output_Coat = "Puffer Jacket";
        output_Tights = "80-100 Denier Tights";
    }
}

//get the color rgb

var input_r;
var input_g;
var input_b;

if (input_color == "black"){
    input_r = 0;
    input_g = 0;
    input_b = 0;
} else if (input_color == "white"){
    input_r = 255;
    input_g = 255;
    input_b = 255;
} else if (input_color == "red"){
    input_r = 255;
    input_g = 0;
    input_b = 0;
} else if (input_color == "green"){
    input_r = 0;
    input_g = 128;
    input_b = 0;
} else if (input_color == "yellow"){
    input_r = 255;
    input_g = 255;
    input_b = 0;
} else if (input_color == "blue"){
    input_r = 0;
    input_g = 0;
    input_b = 255;
}

var output_c_r;
var output_c_g;
var output_c_b;
var output_m_r;
var output_m_g;
var output_m_b;

if (input_r == 0 && input_g == 0 && input_b == 0){
    output_m_r = 128;
    output_m_g = 128;
    output_m_b = 128;
} else if(input_r == 128 && input_g == 128 && input_b == 128){
    output_m_r = 192;
    output_m_g = 192;
    output_m_b = 192;
} else if(input_r == 192 && input_g == 192 && input_b == 192){
    output_m_r = 128;
    output_m_g = 128;
    output_m_b = 128;
} else if(input_r == 255 && input_g == 255 && input_b == 255){
    output_m_r = 192;
    output_m_g = 192;
    output_m_b = 192;
} else {
    if(input_r == 255){
        output_m_r = 128;
    } else if(input_r == 128){
        output_m_r = 255;
    } else {
        output_m_r = 0
    }
    if(input_g == 255){
        output_m_g = 128;
    } else if(input_g == 128){
        output_m_g = 255;
    } else {
        output_m_g = 0
    }
    if(input_b == 255){
        output_m_b = 128;
    } else if(input_b == 128){
        output_m_b = 255;
    } else {
        output_m_b = 0;
    }
}

//get the texture
var output_texture;

if (temp > 90){
    output_texture = "linen"
} else if (temp > 75){
    output_texture = "silk，modal and cotton"
} else if (temp > 60){
    output_textrue = "cotton"
} else if (temp > 45){
    output_texture = "wool and cotton"
} else {
    output_texture = "wool"
}