module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "phonegap-build": {
      debug: {
          options: {
            archive: "app.zip",
            "appId": "AddBuildID",
            "user": {
              "email": "user@example.com",
              "password": "password"
            }
          }
        },
    },
    compress: {
      main: {
        options: {
          archive: 'app.zip',
          mode: 'zip'
        },
        files: [
          {
            src: ["index.html", "Config.xml", "bower_components/**/*.*", "partials/*.html", "js/**/*.js"],
            filter: 'isFile'
          }
        ]
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
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-phonegap-build');
  grunt.loadNpmTasks('grunt-express');

  // Default task.
  grunt.registerTask('default', ['compress', 'phonegap-build']);
  grunt.registerTask('serve', ['express', 'express-keepalive']);
};
