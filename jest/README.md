# jest-study

## JEST : https://jestjs.io/docs/getting-started

## Install 
    - npm install --save-dev jest
    - npm install --dev babel-jest @babel/core @babel/preset-env


## Jest init : npx jest --init
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … yes


## Sanpshot testing and visual regression testing?
What's the difference between snapshot testing and visual regression testing?#
Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the Jest blog.


## Examples 
- https://github.com/facebook/jest/tree/master/examples
- https://github.com/facebook/jest/tree/master/examples/module-mock