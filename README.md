# Project Title

#### Objective
* Welcome to this CSS assignment!
* In this assignment, you will be styling an index.html file using a style.css file.
* The goal is to make the `index.html` file look visually appealing by applying the appropriate styles.

#### Instructions
* Here are the CSS selectors you will be using:
* `id`: You can select an element by its id attribute.
  * For example, if you have an element with an `id` of "header", you can select it using `#header`.
* `class`: You can select an element by its class attribute.
  * For example, if you have an element with a class of "button", you can select it using `.button`.
* `type`: You can select an element by its type.
  * For example, if you want to select all `p` elements, you can use `p`.
* `descendant`: You can select an element that is a descendant of another element.
  * For example, if you want to select all `p` elements that are inside a `div`, you can use `div p`.
* `child`: You can select an element that is a direct child of another element.
  * For example, if you want to select all li elements that are direct children of a `ul`, you can use `ul > li`.

#### Notes
* In the `style.css` file, you will be applying styles to the `index.html` file using the above selectors.
* In the tests.js file, you will be writing tests to verify that the styles have been applied correctly.
* To run the tests, open the `index.html` file in a web browser and open the browser's developer console.
* The test results will be printed to the console.




## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
