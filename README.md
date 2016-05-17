# es6-boilerplate
---------------------

A basic project to get started with es6 using babel, node-sass and browserify. It uses browserify to watch for changes in your JavaScript and SASS (scss) files. If you save a change to JavaScript, browserify will automatically run the Babel transpiler, converting any ES6 code you write into more compatible ES5 code. Likewise, if you save a change to a .scss file, browserify will run the Sass program, converting Sass data to pure CSS.

Inspiration: http://www.sitepoint.com/setting-up-es6-project-using-babel-browserify/

## Setup and installation (Make sure NodeJS is installed)
1. Open TWO terminal windows
1. Navigate into the default directory (both Terminal windows)
2. In Terminal Window #1:
   - Run "npm install" in Terminal Window #1
   - Go sudo su and type password.
   - Run "npm install grunt -g"
   - Type "exit" (takes you out of sudo)
   - After the install is complete, run "grunt" in that window. The Terminal 
     will watch for file changes, and automaticall re-compile your JavaScript 
     written in ES6 down to ES5, which most browsers need.
3. In Terminal Window #2:
   - Run "npm start" in Terminal window #2. 
   - The web server should start up.

## Using the boilerplate
1. Make a copy so you have it for future projects
2. Edit the JavaScript in the /modules folder
3. Each time you save, you should see some action in Terminal Window #1 as 
   your JavaScript is "transpiled" and copied to the /dist folder

## Adding a Git Repository, and uploading
1. Log into Github.com
2. Create an empty repository with the same name as your project
3. Navigate into the default directory of the project
4. "git init"
5. "git remote add origin https://github.com/your_username/your_projectname.git"
6. "git add *" (add all changed files to upload)
7. "git status" (check that changed files were added)
8. "git commit -m 'first upload'" (commit to upload with this "snapshot")
9. "git push origin master" (you'll be prompted for username and pwd)
