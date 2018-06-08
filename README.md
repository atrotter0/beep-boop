# Beep! Boop!

#### Epicodus Intro to Programming independent project, 06.08.2018

#### By Abel Trotter

## Description

A user enters a number and a range of numbers are displayed, with certain numbers converted into "Beep!", "Boop!", or "I'm sorry, Dave. I'm afraid I can't do that."

## Specifications

* Program takes a number from a user and creates a range of numbers from 0 to input.
  * **Example input: 12**
  * **Example output: [0 1 2 3 4 5 6 7 8 9 10 11 12]**
* Program replaces 0 with "Beep!"
  * **Example input: 5**
  * **Example output: [Beep! 1 2 3 4 5]**
* Program replaces 1 with "Boop!"
  * **Example input: 3**
  * **Example output: [Beep! Boop! 2 3]**
* Program replaces numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."
  * **Example input: 3**
  * **Example output: [Beep! Boop! 2 I'm sorry, Dave. I'm afraid I can't do that.]**
* Program replaces entire number if it contains a 1 or a 0 with specified response (Beep! / Boop!)
  * **Example input: 11**
  * **Example output: [Boop!]**
  * **Example input: 20**
  * **Example output: [Beep!]**
* Program only allows numbers to be input, and displays message to user if input is not a number.
  * **Example input: Todd**
  * **Example output: [Please enter valid input. Numbers should be greater than 0 and include no special characters.]**
* Program does not accept negative numbers.
  * **Example input: -2**
  * **Example output: [Please enter valid input. Numbers should be greater than 0 and include no special characters.]**
* Program does not accept special characters.
  * **Example input: 1.23.4^%&**
  * **Example output: [Please enter valid input. Numbers should be greater than 0 and include no special characters.]**

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* HTML/CSS
* Bootstrap 3.7.7
* jQuery 3.3.1

## Links

* [Github Repo] - (https://github.com/atrotter0/beep-boop)
* [Github Pages] - (https://atrotter0.github.io/beep-boop)

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Abel Trotter**