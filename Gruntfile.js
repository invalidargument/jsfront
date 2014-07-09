module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  grunt.registerTask('default', 'Log some stuff.', function() {
      grunt.log.write('Copy minified external libraries to js/rudibieller...').ok();
      grunt.file.copy('js/jquery/dist/jquery.min.js', 'js/rudibieller/lib/jquery.js');
      grunt.file.copy('js/knockout/dist/knockout.js', 'js/rudibieller/lib/knockout.js');
      grunt.file.copy('js/lodash/dist/lodash.min.js', 'js/rudibieller/lib/lodash.js');
      grunt.file.copy('js/requirejs/require.js', 'js/rudibieller/lib/require.js');
  });
};