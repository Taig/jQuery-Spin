/* global module: false */
( function()
{
	'use strict';

	module.exports = function( grunt )
	{
		grunt.initConfig(
		{
			pkg: grunt.file.readJSON( 'spin.jquery.json' ),
			banner:
				'/*!\n' +
				' * <%=pkg.title || pkg.name%> - <%=pkg.version%> (<%=grunt.template.today("yyyy-mm-dd")%>)\n' +
				' * <%=pkg.homepage%>\n' +
				' * Copyright (c) <%=grunt.template.today("yyyy")%> <%=pkg.author.name%>\n' +
				' * Licensed <%=_.pluck(pkg.licenses, "type").join(", ")%>\n' +
				' */\n',
			uglify:
			{
				options:
				{
					banner: '<%=banner%>'
				},
				dist:
				{
					src: 'jquery.spin.js',
					dest: 'dist/<%=pkg.name%>-<%=pkg.version%>.min.js'
				}
			},
			jshint:
			{
				options:
				{
					smarttabs: false,
					curly: true,
					immed: true,
					latedef: true,
					noarg: true,
					quotmark: 'single',
					undef: true,
					unused: true,
					strict: true,
					trailing: true,
					globals:
					{
						jQuery: false
					}
				},
				all: [ '*.js' ]
			}
		} );

		grunt.loadNpmTasks( 'grunt-contrib-uglify' );
		grunt.loadNpmTasks( 'grunt-contrib-jshint' );

		grunt.registerTask( 'default', [ 'jshint', 'uglify' ] );
	};
} )();