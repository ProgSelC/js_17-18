module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          js: {
              src: 'src/js/**/*.js',
              dest: 'dist/js/script.js'
          },
          css: {
              src: 'src/css/**/*.css',
              dest: 'dist/css/style.css'
          }
      },
      uglify: {
          my_target: {
              options: {
                  sourceMap: true,
                  sourceMapName: 'dist/js/sourcemap.map'
              },
              files: {
                  'dist/js/script.min.js': ['dist/js/script.js']
              }
          }
      },
      cssmin: {
          dist: {
              src: 'dist/css/style.css',
              dest: 'dist/css/style.min.css'
          }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
