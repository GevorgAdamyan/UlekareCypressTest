# UI Test with Cypress for "Ulekare" project

Find information above for running tests
### Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/).
    * Install [TypeScript](https://www.npmjs.com/package/typescript).
    * The project is written using v16.14.2 version of Node.js, v4.8.2 of TypeScript and v11.2.0 version of Cypress
    
2. Project Dependencies
    * `cd` to root directory of the project
    * Install Node modules using:
    
      ```
      npm install
      ```

### Running Tests

* Run all tests in headless mode using Chrome browser:
  ```
    npm test
  ```

* Run all tests in headed mode using:
  ```
    npx cypress open
  ```
  
### Reporting

* "Mochawsome" report:
  ```
  In this project is used "Mochawsome" reporter. To see the report open cypress\reports\html\index.html file.
  ```

### Important

  ```
  Before running test make sure that there is no any appointments for that doctor. Also remove created appointments for that doctor after test run.
  ```