// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a message when the user inputs the temperature
 */
function displayMessage () {
	// get user input
	let temp = parseInt(document.getElementById('temp').value)

  	// if the temperature is below 15 degrees, display "It is cold outside!"
	if (temp < 15) {
		document.getElementById('message').innerHTML = "It is cold outside!"
	} 
	// otherwise, if the temperature is greater than or equal to 15 degrees, display "It is warm outside!"	
	else {
		document.getElementById('message').innerHTML = "It is warm outside!"
		}
  
  // display the message
}