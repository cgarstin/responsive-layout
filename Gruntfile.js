'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    
    sass: {
      dev: {
        options: {
          style: 'expanded',
          // lineNumbers: true
        },
        files: {
          'css/styles.css': 'scss/main.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          interrupt: true
        }
      }
    },



    browserSync: {
      dev: {
        bsFiles: {
          src : [
          '*.html',
          'css/*.css',
          'js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./" 
          }
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('dev', ['browserSync','watch']);

};