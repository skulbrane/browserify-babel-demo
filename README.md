# Setting up an ES6 Project Using Babel and Browserify

## Project Directory Structure

```
/
|-- dist/
   |-----modules.js
|-- modules/
   |-----import.js
   |-----index.js
|--Gruntfile.js
|--package.json
```

* `modules`
    * Contains all modules written in ES6
* `dist`
    * Contains bundled and compiled ES5 JS file

## Project Dependencies

* Grunt: A JavaScript task runner
* grunt-browserify : The Browserify Grunt task
* babelify: Babel transformer for Browserify
* grunt-contrib-watch : A Grunt task to watch the JavaScript files for every change and then * optionally execute tasks. In our case, we’ll run the Browserify task on each change

## Setup Gruntfile.js

* *Javascript files having code written in ES6 can have either **.js** or **.es6** extension

```Node
module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly
                    // The result file's extension is always .js
                    "./dist/module.js": ["./modules/index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./modules/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};
```

Defines two Grunt tasks:

* **grunt-default/grunt**
    * Begins watching all JavaScript files included in the **modules** folder
    * For any change, execute the **Browserify task**
    * **Watch Task** keeps running until the task is terminated
        * Use `ctrl-c` on the terminal to manually kill it
* **grunt-build**
    * Executes the **Browserify Task** and stops


* Every time the **Browserify Task** executes, all the JavaScript code present
inside the modules folder is bundled into a single JS file
* The code then goes through **babelify** (Babel transformer for Browserify), which
compiles that bundled ES6 code into ES5 code

>As seen in the above code, we have set loose: 'all' as an option for babelify as we want the ES5 code to be as close as to the ES6 code that we are writing and not strictly according to the specifications because it will be easier to debug for a beginner of ES6.

**[Other Babel Options](http://babeljs.io/docs/usage/options/)**

## Write Some ES6 Code

Demonstrate the following ES6 features:

* **[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)**
* **[export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)**


* Babel can convert ES6 code to ES5, but cannot bundle the modules
* Browserify used to bundle modules


**The power of ES6’s import and export combined with the require() method, gives us the freedom of organizing the whole client-side code into modules and at the same time write the code using all the power of the new version of JavaScript.**

## Running Grunt

* Browserify bundles all files into one
* Bundled file is passed through **babelify** to transform the code into ES5
* A file named module.js that can be executed  in all modern browsers, including IE9, is generated
