module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  grunt.registerTask('default', 'Deploy project.', function() {
      grunt.log.write('Copy minified external libraries. Build for Deployment. ...');
      grunt.task.run('prepare');
      grunt.task.run('build');
  });
  
  grunt.registerTask('prepare', 'Copy minified external libraries.', function() {
      grunt.file.copy('js/jquery/dist/jquery.min.js', 'js/rudibieller/lib/jquery.js');
      grunt.file.copy('js/knockout/dist/knockout.js', 'js/rudibieller/lib/knockout.js');
      grunt.file.copy('js/lodash/dist/lodash.min.js', 'js/rudibieller/lib/lodash.js');
      grunt.file.copy('js/requirejs/require.js', 'js/rudibieller/lib/require.js');
  });
  
  grunt.registerTask('build', 'Build for Deployment.', function() {
      grunt.log.write('TODO' + "\n").ok();
  });
};