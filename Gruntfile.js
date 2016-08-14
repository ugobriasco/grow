module.exports = function(grunt){
	grunt.initConfig({
		
		concat: {
			src:{
				src: 	'src/**/*.js',
				dest: 	'dist/app.js'
			},

		},
		uglify: {
			src: {
				src: 	'dist/app.js',
				dest: 	'dist/app.min.js'
			},

		},
		cssmin: {
		   dist: { 
		      files: {
		         'dist/assets/style.min.css': ['src/**/*.css']
		      }
		  }
		},
		copy: {
		    views: {
		        cwd: 'src',  // set working folder / root to copy
		        src: '**/*.html',      // copy all files and subfolders **with ending .html**
		        dest: 'dist',    // destination folder
		        expand: true           // required when using cwd
	      	},
	      	jpg:{
	      		cwd: 'src/assets/',  // set working folder / root to copy
		        src: '**/*.jpg',      // copy all files and subfolders **with ending .html**
		        dest: 'dist/assets',    // destination folder
		        expand: true
    
	      	},
	      	svg:{
	      		cwd: 'src/assets/',  // set working folder / root to copy
		        src: '**/*.svg',      // copy all files and subfolders **with ending .html**
		        dest: 'dist/assets',    // destination folder
		        expand: true
    
	      	},
	      	ico:{
	      		cwd: 'src',  // set working folder / root to copy
		        src: '**/*.ico',      // copy all files and subfolders **with ending .html**
		        dest: 'dist',    // destination folder
		        expand: true
	      	},
	      	

	    }


	      
  		



	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-ng-annotate');
  	grunt.loadNpmTasks('grunt-contrib-copy');

  	

	grunt.registerTask('default', ['concat','uglify','cssmin','copy']);


};