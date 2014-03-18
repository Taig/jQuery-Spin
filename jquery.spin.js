( function( $ )
{
	'use strict';

	$.fn.spin = function( stop, separator, decimals, duration, ease )
	{
		separator = $.extend( { thousand: ',', decimal: '.' }, separator );
		decimals = decimals === undefined ? 2 : decimals;

		return this.each( function()
		{
			var self = $( this ),
				start = parseFloat( self.text().replace( separator.thousand, '' ).replace( separator.decimal, '.' ) );

			function update( value )
			{
				self.text(
					value
						.toFixed( decimals )
						.replace( '.', separator.decimal )
						.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + separator.thousand )
				);
			}

			$( { value: start } ).animate( { value: stop },
			{
				duration: duration === undefined ? 1000 : duration,
				easing: ease || 'linear',
				step: function() { update( this.value ); },
				complete: function() { update( stop ); }
			} );
		} );
	};
} )( jQuery );