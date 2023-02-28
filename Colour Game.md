**

## Colour Game
**Introduction**
The Code Institute exercise was to write an online game using HTML, CSS and Javascript which was to be responsive. The game I wrote showed five coloured circles, one above the other. The circles appear for five seconds and then turn grey. As they turn grey buttons appear next to or below the circles, depending on viewport size. Each of the buttons is coloured the same as the colour it represnts and the user has to click the appropriate button for each circle.
Once the user presses the submit button a message appears telling the user whether they have guessed correctly or not or whether they have not guessed all of the circles.

**Wireframe**
The game was designed using an online wireframe which was not complicated as the game only occupies one page which does not change size as a result of the game. The wireframe for the desktop display is shown below. Bootstrap will change the layout as required if the game is viewed on a different size viewport so the wireframe only applies to the desktop view of the game.


**Playing The Game**
To play the game one resets the webpage and a message appears at the top telling the player to remember the colours. Below that five coloured circles arranged one above the other , each in one of five colours. The colours are red, white, yellow and green and were chosen to make the game suitable for those with colour blindness.
The circles remained coloured for about five seconds and, after that, they turn grey and buttons appear alongside the circles. The buttons are coloured red, white, yellow and green to correspond to the circles. The player has an unlimited time to choose and selects one coloured button for each circle.
If the game is being played on a smaller viewport the buttons appear below the circles and there is a horizontal line between each set of circles and buttons.
Once the player has made their choices they press the Submit button and a message appears telling the player either that they have guessed correctly or incorrectly or they have not guessed for each of the circles.
Below are some images.



**Intellectual Design**
The page is composed with HTML and certain parts are either displayed or hidden as dictated by the Jacascript file. The Javascript both reads from the HTML page and writes to it as well as controlling the visibility of certain elements.
There is also a CSS file which styles certain of the parts of the HTML page and styles the circles. 
The HTML page is in the root directory and there is an assets directory which holds a css and js directory which hold the styling and javascript files respectively. There are no images.
All the files are linked to the HTML page. The CSS file is linked in the head and the javascript file is linked in a script tag at the foot of the page. There is no styling or scripting on the HTML page.
In essence the game programme works as follows. The top of the HTML page holds the results and instructions and the submit button. These are made visible or hidden by the Javascript and styled by the CSS. Below this section there is a horizontal rule. Below this there is the first of five very similar sections. Each section contains a circle styled by the CSS and a set of radio buttons, one button in the colour of each possible colour of the circle. The buttons are Bootstrap buttons and are coloured in the Bootstrap colours without any changes.
The Javascript contains a timer which waits for 5000ms during which time the circles are coloured, the colour buttons and submit button are hidden and the a message telling the player to remember the colours is shown at the top of the page.
After five seconds the javascript changes the coloured circles to grey, makes the Bootstrap and submit buttons appear and changes the message at the top.
As the player enters guesses for each circle the entries are read by the Javascript and compared with the colour the circle had been.



**

## IMPROVEMENTS

**
Font
Score
**



