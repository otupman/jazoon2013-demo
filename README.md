# Centralway @ Jazoon 2013

*Come with an idea, leave with an app*

## Getting started

### Setup

#### Minimum required software

*   git - http://git-scm.com/downloads
*   a web server - Windows users: https://mongoose.googlecode.com/files/mongoose-tiny-4.1.exe
*   nodejs - http://nodejs.org/

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

#### `js/app.js` - route central
* Sets up the application
* Defines the browser routes
* Defines the 'default' route (like a 404)

#### `partials/*` - dynamically loaded templates
* [Templates](http://docs.angularjs.org/guide/dev_guide.templates) loaded, um, dynamically via the route config (app.js)
* [Data binding](http://docs.angularjs.org/guide/dev_guide.templates.databinding) expressions like `{{todo.text}}`

#### `js/controller.js` - view [controllers](http://docs.angularjs.org/guide/dev_guide.mvc.understanding_controller)
* Embody view logic (but no DOM manipulation!)
* Receive other services via [Dependency Injection](http://docs.angularjs.org/guide/di)
* In our example, they make REST calls via the [$resource](http://code.angularjs.org/1.0.8/docs/api/ngResource.$resource) AngularJS service 

#### `components/*` - [Bower components](https://github.com/bower/bower)
* The LAB uses Bower to do component dependency management
* Contains a directory for each component we depend on
* Pre-filled in this git repo for quick starting
* Run `bower install` to update/install


### Lungo documentation
* Not available: unfortunately Lungo have updated recently
* But! a good [kitchen sink demo](http://lolcathost.org/Lungo.js/kitchen-sink/#) is available
* Look for `data-*` attributes - those are Lungo
* Also look at [QuoJS](http://quojs.tapquo.com/) which Lungo is based on top of (jQuery-like micro DOM library)
