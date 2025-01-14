This project was bootstrapped with [Create React App]


This program shows the menu for an Italian restaurant named Di Vici’s. 
It will display the various food items with its category, description and price. 
It will also show the average wait time based on the day of the week and time of day. 
The various dishes a stored in a Json file. Index.js calls the App component. 


The App component calls the banner, header, menu, wait time and footer components. 
The banner component receives as a props  variable the name of the restaurant it then returns the restaurant’s name with a background image.  
The header component simply returns the word “Menu”. 
The menu component imports the Json file with all the dishes and sends each dish as a props variable when calling the menu Item component. 
The menu item component returns the name of each dish, the category it belongs to, a brief description and the price. 
The wait time com-ponent uses state variables to show the average wait time on weekdays and weekend mornings, af-ternoons and evenings. 
The footer component receives as a props variable the restaurants email and phone number. 
It returns the number and email as well as a copyright line.

