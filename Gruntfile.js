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
            src: ["index.html", "Config.xml", "components/**/*.*", "partials/*.html", "js/**/*.js"],
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
    },
    karma: {
      e2e: {
        configFile: 'config/karma-e2e.conf.js'
      }
    }
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-phonegap-build');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['compress', 'phonegap-build']);
  grunt.registerTask('serve', ['express', 'express-keepalive']);
};
