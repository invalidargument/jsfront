module.exports = function(grunt) {
  var buildDir = 'build/';
  var replacements = {
      uri: 'http://localhost:8888/rudi-bieller-symfony/Symfony/web/app_dev.php/kontakt',
      jsModuleName: 'Rudibieller'
  };
  if (typeof grunt.option('env') !== 'undefined' && grunt.option('env') === 'live') {
      replacements.uri = '/kontakt';
      replacements.jsModuleName = 'Rudibieller';
  }
  
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            ConfigJs: {
                src: ['js/Config/Config_template.js'],
                dest: 'js/Config/Config.js',
                replacements: [{
                    from: '{{uri}}',
                    to: replacements.uri
                }]
            },
            IndexHtml: {
                src: ['index_template.html'],
                dest: 'index.html',
                replacements: [{
                    from: '{{jsname}}',
                    to: replacements.jsModuleName
                }]
            }
        }
  });
  
  grunt.loadNpmTasks('grunt-text-replace');
  
  grunt.registerTask('default', 'Deploy project.', function() {
      grunt.log.write('Since this is a JS playground, let\s do a JS build!').ok();
      grunt.task.run('clean');
      grunt.task.run('copyJs');
      grunt.task.run('copyCss');
  });
  
  grunt.registerTask('clean', 'Clean build directory.', function() {
      var deletePattern = [
          buildDir + '*',
          '!' + buildDir + 'README'
      ];
      grunt.file.expand({}, deletePattern).forEach(function(path) {
          grunt.file.delete(path);
      });
      grunt.log.ok();
  });
  
  grunt.registerTask('copyJs', 'Copy all relevant JS files.', function() {
      var sourceDir = 'js/';
      var targetDir = buildDir + 'js/';
      
      grunt.file.copy(sourceDir + 'jquery/dist/jquery.min.js', sourceDir + 'lib/jquery.js');
      grunt.file.copy(sourceDir + 'knockout/dist/knockout.js', sourceDir + 'lib/knockout.js');
      grunt.file.copy(sourceDir + 'lodash/dist/lodash.min.js', sourceDir + 'lib/lodash.js');
      grunt.file.copy(sourceDir + 'requirejs/require.js', sourceDir + 'lib/require.js');
      grunt.file.copy(sourceDir + 'bootstrap/dist/js/bootstrap.min.js', sourceDir + 'lib/bootstrap.js');
      
      grunt.file.mkdir(targetDir + 'lib');
      grunt.file.copy('index.html', buildDir + 'index.html');
      grunt.file.copy(sourceDir + 'Rudibieller.min.js', targetDir + 'Rudibieller.js');
      
      grunt.file.expand({}, [sourceDir + 'lib/*']).forEach(function(path) {
          var filename = path.split(sourceDir + 'lib/')[1]; /* BOOO! */
          grunt.file.copy(path, targetDir + 'lib/' + filename);
      });
      grunt.log.ok();
  });
  
  grunt.registerTask('copyCss', 'Copy all relevant CSS files.', function() {
      /* minify css to be done.. */
      grunt.file.copy('js/bootstrap/dist/css/bootstrap.min.css', 'css/bootstrap.css');
      
      grunt.file.mkdir(buildDir + 'css');
      grunt.file.copy('css/rudibieller.css', buildDir + '/css/rudibieller.css');
      grunt.file.copy('js/bootstrap/dist/css/bootstrap.min.css', buildDir + '/css/bootstrap.css');
      grunt.log.ok();
  });
};