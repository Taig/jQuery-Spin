( function( $ )
{
	'use strict';

	$.fn.spin = function( target, options )
	{
		options = $.extend( true,
		{
			decimals: 2,
			duration: 1000,
			easing: 'swing',
			separator: { thousand: ',', decimal: '.' }
		}, options );

		return this.each( function()
		{
			var self = $( this ),
				start = parseFloat(
					self
						.text()
						.replace( '/' + options.separator.thousand + '/g', '' )
						.replace( options.separator.decimal, '.' )
				);

			function update( value )
			{
				self.text(
					value
						.toFixed( options.decimals )
						.replace( '.', options.separator.decimal )
						.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + options.separator.thousand )
				);
			}

			$( { value: start } ).animate( { value: target },
			{
				duration: options.duration,
				easing: options.easing,
				step: function() { update( this.value ); },
				complete: function() { update( Number( target ) ); }
			} );
		} );
	};
} )( jQuery );