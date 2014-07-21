module.exports = function(grunt) {
  var environment = 'dev';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  
  grunt.registerTask('default', 'Deploy project.', function() {
      /* there is only dev and live here. */
      if (typeof grunt.option('env') !== 'undefined' 
          && (grunt.option('env') === 'live' || grunt.option('env') === 'dev')) {
          environment = grunt.option('env');
      }
      grunt.log.write('Build, deploy ' + environment + ' environment...' + "\n");
      grunt.task.run('clean');
      grunt.task.run('build');
      grunt.task.run('setPaths');
  });
  
  grunt.registerTask('clean', 'Clean build directory.', function() {
      grunt.file.expand({}, ['build/*']).forEach(function(path) {
          grunt.log.write('Deleting ' + path).ok();
          grunt.file.delete(path);
      });
  });
  
  grunt.registerTask('build', 'Build for Deployment.', function() {
      var sourceDir = 'js/rudibieller/';
      
      grunt.file.copy('js/jquery/dist/jquery.min.js', sourceDir + 'lib/jquery.js');
      grunt.file.copy('js/knockout/dist/knockout.js', sourceDir + 'lib/knockout.js');
      grunt.file.copy('js/lodash/dist/lodash.min.js', sourceDir + 'lib/lodash.js');
      grunt.file.copy('js/requirejs/require.js', sourceDir + 'lib/require.js');
      
      grunt.file.mkdir('build/js/lib');
      grunt.log.write('Copying index.html').ok();
      grunt.file.copy('index.html', 'build/index.html');
      grunt.log.write('Copying js/rudibieller/main-built.js').ok();
      grunt.file.copy(sourceDir + 'main-built.js', 'build/js/rudibieller.js');
      
      grunt.file.expand({}, ['js/rudibieller/lib/*']).forEach(function(path) {
          grunt.log.write('Copying ' + path).ok();
          var filename = path.split(sourceDir + 'lib/')[1]; /* BOOO! */
          grunt.file.copy(path, 'build/js/lib/' + filename);
      });
  });
  
  grunt.registerTask('setPaths', 'set paths for given environment.', function() {
      if (environment === 'live') {
          grunt.log.write('Setting paths for environment live.').ok();
      } else {
          grunt.log.write('Nothing to replace.').ok();
      }
  });
};