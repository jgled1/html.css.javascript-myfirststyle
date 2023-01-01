# My First Style

### Description
* In this assignment, you will be provided with 4 files:
  * `MainApplicationTestRunner.js`, `MainApplicationTest.js`, `TestingUtilities.js`, and `index.html`.
* The goal is to make the `index.html` file look visually appealing by applying the appropriate styles.
* In the `style.css` file, you will be applying styles to the `index.html` file using css selectors.
* In the `MainApplicationTest.js` file, you will be find tests to verify that the styles have been applied correctly.
* To run the tests, open the `index.html` file in a web browser and open the browser's developer console.

#### Completing the Assignment
* Open the `index.html` file.
  * This file contains the HTML structure for the page that you will be styling.
* Add the appropriate CSS styles to the `index.html` file in order to pass the tests in the `MainApplicationTest.js` file.
  * You may need to reference the `TestingUtilities.js` file to see what each test is expecting.
* Once you have styled the `index.html` file, open the `MainApplicationTestRunner.js` file.
  * This file will run all of the tests in the `MainApplicationTest.js` file when you open it in your web browser.
* To see the results of the tests, open the `MainApplicationTestRunner.js` file in your web browser.
  * The tests will run automatically, and the results will be printed to the console.
* If any tests fail, go back to the `index.html` file and make the necessary changes to pass all of the tests.

#### Tips
* Pay attention to the selectors and values in the `MainApplicationTest.js` file.
* This is what the tests are expecting, and your styling will need to match these values in order to pass the tests.
* You may find it helpful to use the console.log function to print out the values of the elements that you are styling.
  * This can help you debug any issues that you are having.
* Remember to refresh the page in your web browser after making changes to the `index.html` file in order to see the updated styles.



#### Notes





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
