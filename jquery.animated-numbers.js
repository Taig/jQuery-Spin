( function( $ )
{
	'use strict';

	$.fn.animateNumbers = function( stop, separator, duration, ease )
	{
		separator = $.extend( { thousand: ',', decimal: '.' }, separator );

		return this.each( function()
		{
			var self = $( this ),
				start = parseInt( self.text().replace( separator.thousand, '' ).replace( separator.decimal, '.' ) );

			function update( value )
			{
				self.text( value
					.replace( '.', separator.decimal )
					.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + separator.thousand )
				);
			}

			$( { value: start } ).animate( { value: stop },
			{
				duration: duration === undefined ? 1000 : duration,
				easing: ease === undefined ? 'linear' : ease,
				step: function()
				{
					update( Math.floor( this.value ).toString() );
				},
				complete: function()
				{
					if( parseInt( self.text() ) !== stop )
					{
						update( stop.toString() );
					}
				}
			} );
		} );
	};
} )( jQuery );