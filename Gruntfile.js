"use strict" 

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
        base: {
        src: ['src/ts/*.ts'],
        dest: 'dist/js/cs.js'
        }
    },
    less: {
        development: {
            options: {
                paths: ["./src/less"]
            },
            files: {
                "./dist/css/cs.css": "./src/less/__cs.less"
            }
        }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: "dist/css",
          src: ["*.css", "!*.min.css"],
          dest: "dist/css",
          ext: ".min.css"
        }]
      }
    }, 
    uglify: {
        my_target: {
          files: {
            "dist/js/cs.min.js": ["dist/js/cs.js"]
          }
        }
    },    
    watch: {
        css: {
            files: "src/less/*.less",
            tasks: ["less"]
        },
        minify: {
            files: "dist/css/*.css",
            tasks: ["cssmin"]
        },        
        ts: {
            files: "src/ts/*.ts",
            tasks: ["typescript"]
        },
        uglify: {
            files: "dist/js/cs.js",
            tasks: ["uglify"]
        }
    }
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Default task(s).
  grunt.registerTask('default', ['typescript', 'less', 'watch', 'cssmin', 'uglify']);

};