# Lyonville Frontend (React) - Please read!
This is the Lyonville's frontend development repository, using React. Please read this `README` file and ensure you've followed the laid out steps before starting development.

## How to Use
Please contact The Duy Nguyen from HillClimbers for any queries and issues with setting up `node_modules` and running unit tests and linters. Firstly, ensure that you have installed [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable). Then, do as follows:
1. Clone the `main` repository. Then `git switch` to your team's branch (you might need to [`fetch`](https://www.atlassian.com/git/tutorials/syncing/git-fetch))
2. Run `git branch` (to ensure that you're on **your team's branch**, such as i-want-h1 or damolab, instead of `main`).
3. Copy all of your coding files to the respective folders that are present in this template.
    * For example, you have an Events page file, `Events.jsx`. Then you might want to move that to `src/pages`.
    * Likewise, if you have a Navigation Bar component, `NavBar.jsx`, then you can move that to `src/components`.

These steps ensure that you have all necessary and secure dependencies specified in `package.json`, and a complete `.gitignore`. Now, use the following commands:
1. `npm install` (install everything to `node_modules`)
2. `npm run dev` (to make sure vite is working properly)
3. `npm run lint` (JS linter to improve code quality; if this shows errors, you must correct your code as per what the error is telling you)
4. `npm run tsc` (loose type check)

After you've ensured everything is running fine with no errors, do as follows:
1. Run `git push` (push your code on **your team's branch**)
2. Go onto GitHub, check the icon next to your commit to see the status of the CI tests, it will be either 🟠 (currently running), ❌ (failed), or ✅ (successful).
    * If failed, see the failed tests and please correct your code or contact me.
    * If succeeded, go to next step.
3. Create a *Pull Request* and **wait for approval**.
<br><br><br>


# 🔗 Git Standards
### Commits
#### **Commit message**
```bash
<type>(<scope>): <subject>
```

#### **Commit types descriptions**
```
build    : Build related changes (e.g. npm related/ adding external dependencies)
chore    : A code change that external user won't see (e.g. .gitignore .prettierrc)
feat     : A new feature
fix      : A bug fix
docs     : Documentation-related changes
refactor : A code that neither fix bug nor adds a feature
perf     : A code that improves performance
style    : Code that is related to styling
test     : Adding new test or making changes to existing test
ci-cd    : Changes made to the CI/CD pipeline
init     : Initial bootstrapping of the application
release  : Releasing a branch
merge    : Merging the branches
```

#### **Scope (optional)**
Scope should be a noun and it represents the section of the codebase.

### Subject
* Use imperative, present tense (e.g. use “add” instead of “added” or “adds”)
* Don’t capitalise the first letter in the subject
* Don’t put a full stop (.) at the end

#### **Commit size**
Importantly, developers should **keep the commit size SMALL**, so that rollback error detection can be easier.

### Examples
```
feat(navigation): init navigation bar for the home page
feat: create a navigation bar for the home page (WIP)
```

### References
[Git commit message convention that you can follow!](https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709)
[Karma - Git Commit Msg](http://karma-runner.github.io/1.0/dev/git-commit-msg.html)
<br><br><br>


# 🚧 Coding Standard
Coding Standard defines the standard to which all developers shall follow when developing the software such that the code can be of high consistency, readability, and maintainability.

The following includes standards for languages used within the project, including Pytnon, HTML, CSS, and JavaScript.
<br><br>


## 📝 JavaScript

### Principles

* **Modularity**: Keep files modular. Each file has a specific purpose, eg. there should be 2 separate files for dealing with frontend and backend.
* **Commenting**: Comment below function declaration saying what the function does and comment for a block of code to say what it does.
* **Function naming**: Function name should be succinct and indicative of what it does. i.e. findPrime
* **Variables naming**: Variables name should be indicative of what it represents. i.e. tally > placeholder
* Code should be easily understood. Maintainer might not be as proficient/technical, so code with them in mind.
* **Avoid long lines** (over *120 characters*, and should NOT be over) since it is difficult to read.
* **Avoid deep nesting**. Difficult to read

### Details
* Indentation can be 2 or 4 spaces.
* Global variables should be avoided unless necessary.
* Module should contain meta such as {authors, creation, last-modification, summary-of-what-module-does}
* `if/else/else/for/while` formatting:
    ```js
    if (condition) {
        name = "John";
    } else {
        name = "Doe";
    }
    ```
* Files name with space should be separated with - instead. i.e. hello-world.py
* Max lines of code for a function should be 1 page (i.e. top of screen to bottom of screen) 
* Variable Naming Conventions
    * Local variables and functions should be in **`camelCase`** (i.e. `helloWorldFunction`). 
    * Global variables should be like this: **`GlobalData`**. 
    * Constants should be capitalised: **`CONSTANT`**.

### `let` and `const`
`let` and `const` are the two new keywords in [ES6](https://medium.com/the-andela-way/a-beginners-guide-to-react-with-es6-a2ed0b5c977e). In simple words, they are both used when defining a variable. We use `let` if we will be reassigning the variable and `const` if we do not plan to reassign it. Do note that we **AVOID using `var`** under any circumstances.

### Destructuring
```javascript
const car = {
  type: 'Toyota',
  color: 'Silver',
  model: 2007
};
const {type, color, model} = car;
console.log(type, color, model);
// output: Toyota Silver 2007
```
Destructuring is a good method to extract values from an object/array. It is the more preferable way to access the value directly from the object, i.e. `car.type`, `car.color`, and `car.model`. It keeps our code cleaner and allows us to only access certain values at a given time.
A most commonly use case would be destructuring props of a certain component.

### Arrow Functions
In our project, we will be using mainly arrow functions for all our code.
```javascript
const hello = (name) => {
  console.log(`hello ${name}`);
}
hello('world');
```

### More Information
* [Clean Code for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
* [JavaScript Style Guide](https://github.com/airbnb/javascript)
<br><br>


## ⚛️ React

### Assets folder
In our project, there should be a dedicated assets folder to store our media files (images, icons, audio, etc.) and a subfolder for each specific media type.

### Shared Types and Constants
Types and constants will be on the root of src folder where all our code can share them. For example, `@constants.js` and `@types.js` files.

### Components and Functions Naming
All *components* are stored in a `components` folder and are named in **PascalCase**. *Functions* and *variables* are named in **camelCase**.

### Imports
Use relative path for imports.
<br><br>


## 📄 HTML

### Principles
* **Document declaration**: always include it! `<!DOCTYPE html>`
* **Images**:
    * For images, always specify **`alt`** (i.e. description of image)
    * As well as specify width, and height for all
* **Code formatting**:
    * Lines should be no longer than 79 characters (including whitespaces)
    * Avoid trailing white space
    * Use blank lines to separate large or logical code blocks
    * Filenames are **lowercase** and separated with hyphen. (ie. `this-is-a-file.html`)
    * Create new files for **CSS** and **JavaScript**. **DO NOT** use *inline style*.
* **Elements and Tags**:
    * `<title>`, `<html>`, `<head>`, and `<body>` elements are important and should **never be omitted**.
    * Omit type attributes for style sheets and scripts (unless not using CSS or JavaScript).
    * Use UTF-8 encoding, specify this in meta element i.e. `<meta charset="utf-8">`
    * The `<html>` tag should contained the language. `<html lang="en">`
    * The `<head>` element should contained the meta data. `<meta charset="UTF-8">`
    * Avoid using **IDs** as much as possible, instead stick with class. As there can only be 1 ID.
* **Commenting**: attempt to write comments in one line, otherwise indent the text. i.e.
    ```html
    <!--
    This is a long comment example. This is a long comment example.
    This is a long comment example. This is a long comment example.
    -->
    ```

### On Formatting
* Use two spaces of indentation. **DO NOT** use *tabs*.
* Indent all child elements.
* Use **lowercase** element names.
* Close all HTML elements.
* Use **lowercase attribute** names. It is a common practice.
* Attribute values are always quoted. More legible. 
* No spaces around equals signs.
    ```html
    <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
    <link rel="stylesheet" href="styles.css">
    ```

### More Information
For examples of principles and formatting, read more here:
* [HTML Style Guide and Coding Conventions](https://www.w3schools.com/html/html5_syntax.asp)
* [HTML style guide with coding standards and best practices.](https://gist.github.com/ryansechrest/8693303)
* [HTML Coding Standards | Coding Standards Handbook | WordPress Developer Resources](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/html/)
<br><br>


## 🖌️ CSS

### Principles
* **Modularity**: Keep files modular. Each file has a specific purpose, i.e. there should be 2 separate files for dealing with frontend and backend.
* **Commenting**: Comment below function declaration saying what the function does and comment for a block of code to say what it does.
* **Avoid long lines** (over *80 characters*, or at most 120 if ever really needed) since it is difficult to read.
* **Avoid deep nesting**. Difficult to read
* Use *meaningful* class name. For instance: **NOT** `atr` but `author`
* **Avoid qualify class name with type selectors**. 
    **NOT** `div.author` but `.author`
* **Avoid ID**. They are suppose to be unique across the entire page, use **class** instead.
* Filenames should be separated with hyphens if required. i.e. cool-designs.css
* **Communication** is *important*. Use shorthand properties unless the content is too complex to understand.
    ```css
    /* longhand */
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;

    /* shorthand */
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
    ```
* Use **2 spaces** for indentation and remove trailing whitespaces.
* Use **lowercase** at all times. For file, class selectors and so on.
* Use **hex colour codes**. i.e. `#F39B6D`

### More Information
For more information, read more here:
* [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)
* [Guidelines for writing CSS code examples - The MDN Web Docs project | MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
* [CSS coding standards — CKAN 2.10.1 documentation](https://docs.ckan.org/en/2.10/contributing/css.html)
* [CSS Coding Standards | Coding Standards Handbook | WordPress Developer Resources](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/)