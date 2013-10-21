# Centralway @ Jazoon 2013

*Come with an idea, leave with an app*

## Getting started

### Setup

#### Super quick start

*   Clone [this repository](https://github.com/otupman/jazoon2013-demo).
    > git clone git@github.com:otupman/jazoon2013-demo.git   
*  Start a simple web server from the directory
    > python -m SimpleHTTPServer # If you've python

    > grunt serve # if you've node (and grunt)
* Go hit localhost:port (node is port 3000, python is 8000)

#### DIY Start

*   Visit
    > https://github.com/centralway/grunt-init-lungo-angular
*   Follow the instructions there (you'll get node, npm, grunt, etc.)

### Code overview

#### `index.html` - the start of the magic
* Sets up the framework
* Defines the initial screen to be displayed
* Defines an 'aside' (Facebook-style navbar that slides in)

#### `app.js` - route central
* Sets up the application
* Defines the browser routes
* Defines the 'default' route (like a 404)

#### `partials/*` - dynamically loaded templates
* [Templates](http://docs.angularjs.org/guide/compiler) loaded, um, dynamically via the route config (app.js)
* [Data binding](http://docs.angularjs.org/guide/dev_guide.templates.databinding) expressions like `{{todo.text}}`
