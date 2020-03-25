# numbre-guessing-project
Number guessing game 

style file contains   CSS properties used

script file contains  javascript code

description of game-->

The web app  generates a random number between 1-100. This number
is hidden from the user.

Provided an input field to the user. The user will be able to enter only
numbers to this field.

Provided a submit button along with the input field.

The response will be based on the difference between the random number
generated and the user’s input
a. If the difference is 0 you will display ‘Correct!’ - Green
b. If the difference is 1-4 you will display ‘Hot!!’ - Red
c. If the difference is 5-15 you will display ‘Warm’ - Yellow
d. For anything beyond, display ‘Cold’ - Blue

The user is allowed to make any number of guesses, until he finds the correct
answer.

After guessing correctly, another set of similar UI components will show up
on the screen (Without loosing the previous Input Field and submit button)

This will start another game with a higher random number bracket (+100)
i.e. 1-200, after this number is guessed, the next game has a higher bracket,
1-300 and so on.

All the other rules remain the same.
