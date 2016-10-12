"use strict" 

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
    base: {
      src: ['htdocs/ts/*.ts'],
      dest: 'htdocs/js/cs.js'
    }
  },
    less: {
        development: {
            options: {
                paths: ["./htdocs/less"]
            },
            files: {
                "./htdocs/css/cs.css": "./htdocs/less/cs.less"
            }
        }
    },
    watch: {
        css: {
            files: "htdocs/less/*.less",
            tasks: ["less"]
        },
        ts: {
            files: "htdocs/ts/*.ts",
            tasks: ["typescript"]
        },
    }
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'less', 'watch']);

};