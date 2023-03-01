** 

 
 

## Colour Game 

**Introduction** 

The Code Institute exercise was to write an online game using HTML, CSS and JavaScript which was to be responsive. The game I wrote showed five coloured circles, one above the other. The circles appear for five seconds and then turn grey. As they turn grey buttons appear next to or below the circles, depending on viewport size. Each of the buttons is coloured the same as the colour it represents and the user has to click the appropriate button for each circle. 

Once the user presses the submit button a message appears telling the user whether they have guessed correctly or not or whether they have not guessed all the circles. 

 
 

**Wireframe** 

The game was designed using an online wireframe which was not complicated as the game only occupies one page which does not change size because of the game. The wireframe for the desktop display is shown below. Bootstrap will change the layout as required if the game is viewed on a different size viewport so the wireframe only applies to the desktop view of the game. 

 
 

![Wireframe](/assets/readme_images/Colour%20Game%20Wireframe.jpg?raw=true "Wireframe") 

 
 **User Experience**
 

**Playing The Game** 

To play the game one resets the webpage and a message appears at the top telling the player to remember the colours. Below that five coloured circles arranged one above the other, each in one of five colours. The colours are red, white, yellow and green and were chosen to make the game suitable for those with colour blindness. 

The circles remained coloured for about five seconds and, after that, they turn grey and buttons appear alongside the now grey circles. The buttons are coloured red, white, yellow and green to correspond to the circles. The player has an unlimited time to choose and selects one coloured button for each circle. 

 
 

![Game screen showing colours to be remembered](/assets/readme_images/Colour%20Game%20screenshot%20waiting%20for%20guesses.jpg?raw=true "Game screen showing colours to be remembered") 

 
 

After the 5 second timeout the coloured circles turn grey, the coloured radio buttons allowing guesses to be entered appear, and the submit button and a message telling the player to guess the colours appear.  

 
 

![Game screen waiting for guesses](/assets/readme_images/Colour%20Game%20screenshot%20with%20circles%20greyed%20out.jpg?raw=true "Game screen waiting for guesses") 

 
 

If a colour for each circle has not been selected then a message appears telling the player to try again, if all colours have been guessed correctly a message appears telling the player they have won and if any of the guesses were incorrect a message indicating this appears. The headline is the only part of the screen that changes and the headlines for each outcome are represented below. 

 
 

![Game screen - You Win](/assets/readme_images/You%20Win.PNG?raw=true "Game screen - You Win") 

 
 

![Game screen - You Lose](/assets/readme_images/You%20Lose%20-%20Try%20Again.PNG?raw=true "Game screen - You Lose") 

 
 

![Game screen - You Must Guess All Colours](/assets/readme_images/Try%20Again%20-%20You%20Must%20Guess%20All%20Colours.PNG?raw=true "Game screen - You Must Guess All Colours") 

 
 
 

Input of guesses is by Bootstrap styled radio buttons so only one guess can be made for each colour. If a guess is changed the former guess is deselected by the radio button in the usual way. Originally solid coloured radio buttons were used but it was not possible to see which had been selected so they were changed to outlinebuttons. I would have preferred solid buttons but their appearance made playing the game more difficult. 

 
 

There are three possible outcomes once the submit button has been pressed, winning by guessing all the colours correctly, losing by guessing one or more of the colours incorrectly and not guessing all of the five colours. The images below show the output for each. 

 
 
 

If the game is being played on a smaller viewport the buttons appear below the circles and there is a horizontal line between each set of circles and buttons. 

Once the player has made their choices, they press the Submit button, and a message appears telling them they have guessed correctly or incorrectly or have not guessed for each circle. 

Below are some images. 

 
 
 
 

**Programme Design** 

The page is composed of HTML and certain parts are either displayed or hidden as dictated by the JavaScript file. The JavaScript both reads from the HTML page and writes to it as well as controlling the visibility of certain elements. 

There is also a CSS file which styles certain parts of the HTML page and styles the circles.  

The HTML page is in the root directory and there is an assets directory which holds a css and js directory which holds the styling and JavaScript files respectively. Although each directory only holds a single page and could easily have been put in a single directory they were split as outlined above for the sake of consistency. There are no images so there is no image directory. 

All the files are linked to the HTML page. The CSS file is linked in the head and the JavaScript file is linked in a script tag at the foot of the page. There is no styling or scripting on the HTML page. 

The game programme works as follows. The top of the HTML page holds the results and instructions and the submit button. These are made visible or hidden by the JavaScript and styled by CSS. Below this section there is a horizontal rule. Below this there is the first of five similar sections. Each section contains a circle styled by the CSS and a set of radio buttons, one button in the colour of each possible colour of the circle. The buttons are Bootstrap buttons and are coloured in the Bootstrap colours without any changes. 

The JavaScript contains a timer which waits for 5000ms (about 5 seconds) during which time the circles remain coloured, the colour buttons and submit button are hidden and a message telling the player to remember the colours is shown at the top of the page. 

After five seconds the JavaScript changes the coloured circles to grey, makes the buttons allowing the choices to be made and submit buttons appear and changes the message at the top. 

As the player enters guesses for each circle the entries are read by the JavaScript and compared with the colour the circle had been before the JavaScript turned it grey. How the entries are processed is outlined below after showing a flow chart showing the basic structure of the programme is given. 

 
 

![Outline of Programme](/assets/readme_images/Colour%20Game%20Javascript%20flow%20chart.jpg?raw=true "Outline of Programme") 

 
 

The check entries against colours displayed decision box is where most of the decision making goes on and the sequence of decisions and operations is outlined in the image below. 

 
 

![Decision Sequence](/assets/readme_images/Logic%20flow%20chart.PNG?raw=true "Decision Sequence") 

 
 
 

**Validation** 

The files were put through online validators and the results are shown below. 

 
 

The HTML file passed the HTML validation as shown below. 

 
 

![HTML Validator](/assets/readme_images/HTML%20validator.PNG?raw=true "HTML Validator") 

 
 
 

The CSS validator passed with no difficulties, probably because the CSS file is not large. 

 
 

![CSS Validator](/assets/readme_images/CSS%20validator.PNG?raw=true "CSS Validator") 

 
 
 

The JavaScript was analysed by jshint and received the following report. 

 
 

![Javascript Validator](/assets/readme_images/jshint.PNG?raw=true "Javascript Validator") 

 
 

Jshint reports that let has been used twice when, I imagine, it wants var to be used. In this situation, and inside a function, using let is correct and var is not as it has global scope. This could not be overcome and I am not sure the code is wrong. Jshint also reports the use of an unused variable but this is, without doubt, a function and not a variable. This must either be a bug or an artefact of the jshint site. 

 
 
 

Although the project does not contain any images it was tested with the Lighthouse test on Chrome to test the SEO response and the results were good, as shown below. 

 
 

![Lighthouse Test](/assets/readme_images/Lighthouse.PNG?raw=true "Lighthouse Test") 

 
 

The SEO results were good because the meta tags in the head were completed. 

 
 

As the project is composed of a single HTML page with no artwork semantic tags have not been used very extensively. There is a head section with the boilerplate HTML and other information such as title, tags for SEO indexing and getting viewport information and links to the Bootstrap and the site's own CSS. 

 
 

The body tags contain all the HTML. There general pattern of the code is that there are five similar copies, each representing one of the circles. Each of the circles is contained between a pair of div tags. Each circle consists of two components. The first is the coloured circle and the second is the set of buttons enabling the player to enter their guesses. Each of these parts is, itself, in a separate div section and there are several divs and spans inside each unit to allow the Bootstrap classes to be used and for other reasons. Variable names are descriptive and are declared in camelCase. 

 
 
 
 
 

** 

 
 

## Improvements 

The game could be improved quite simply with a few modifications described below. These were not implemented as there was insufficient time to research and complete them before the project deadline. Some work was done and the work required would be modest. 

 
 

Font 

Wishing to join Massimo Vignelli's fight against ugliness I wanted to have one of the fonts he approved of. None of his six preferred fonts are available free of charge from Google fonts but some that are close are. One of the next jobs would have been to use one of one of Vignelli's fonts on the site. This would have been done in the same way as in the previous assessment with the font linked to the CSS file. 

 
 

Score 

As it stands the game can only be played once and then the browser needs to be restarted to play another round. It would be straightforward and would improve the game if it could be played repeatedly and a score kept of the number of failures and successes the player had had. This is straightforward to implement but time did not permit these adaptations to be executed.  

 
 

Keeping score would involve two counters one of which is incremented when the user wins and another which increments when they lose. The scores are kept in variables and are displayed on the page. 

 
 

Running the game repeatedly could be done by enclosing it in a function and calling the function each time it is played. 


Which Colours Did Appear?

The game might be more fun if, after the player has been told they have got the wrong result, they are told what the sequence of colours actually was. As they are saved in an array and as variables this would be easy until the next game is started and all the variables are reset.



Colours

There are five possible colours for each cicle and more than one ciccle can be the same colour. It might make the game more interesting if no two circles can be the same colour in each individual turn. Implementing this modification would not be difficult. One way of doing it would be to check the array of generated colours for any repats using a loop before they are displayed. If there are colours appearing more than once the random colour generator would then refill the array of circle colours. 

If repeats appear too frequently then a different mechanism might be required. One way of doing this would be to check the colour array and if there are repeats then they should be replaced with colours that are not in the array.

This would be involved but not complicated. There would be plenty of room for coding errors and would probably take more time than it is worth. This could be incorporated in another version of the game produced when time is not pressing so much. Only five colours were used as this worked with the Bootstrap primary colours. Introducing additional colours would be more complicated as they would need to be styled by the CSS.

 
 
 

## Help 

I received a lot of help from Richard Malhotra who was available until late into the evenings not just to correct my work but help me understand. My fellow student Rod Gordon also helped a lot explaining code and showing me how to solve certain problems. 

 
 

No images were used and there is not really any text so there is nothing to acknowledge for those materials. The game is of my own design and is certainly a variation of many similar games. Equally the programming was all original although some pieces of code may have been drawn from the Bootstrap and other sites. [Geeks For Geeks](https://www.geeksforgeeks.org/) had valuable information about DOM components and much use was made of it as well as others including [Stack Overflow](https://stackoverflow.com/) 

 
 

 ## Conclusion 

 One should never associate one's product with a negative but, although the game itself is not earth shattering, it has taught me a lot about JavaScript and writing to and reading from the DOM using listener functions. Having to get the game working and finding and sorting bugs taught me a lot about JavaScript, a language I had never encountered before. 

 
 

** 

 
 
 
 
 

 