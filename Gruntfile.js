module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "phonegap-build": {
      options: {
        archive: "app.zip",
        "appId": "",
        "user": {
          "email": "",
          "password": ""
        }
      }
    },
    zip: {
      app: {
        src: ["index.html", "Config.xml", "components/**/*.*", "partials/*.html", "js/**/*.js"],
        dest: "app.zip"
      }     
    },
    express: {
        server: {
            options: {
                bases: ["./"]
            }
        }
    } 
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-zipstream');
  grunt.loadNpmTasks('grunt-phonegap-build');
  grunt.loadNpmTasks('grunt-express');

  // Default task.
  grunt.registerTask('default', ['zip', 'phonegap-build']);
  grunt.registerTask('serve', ['express', 'express-keepalive']);
};

