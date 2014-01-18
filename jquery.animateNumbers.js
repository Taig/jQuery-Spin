( function( $ )
{
	$.fn.animateNumbers = function( stop, commas, duration, ease )
	{
		return this.each( function()
		{
			var self = $( this );
			var start = parseInt( self.text().replace( /,/g, "" ) );
			commas = (commas === undefined) ? true : commas;
			$( {value: start} ).animate( {value: stop},
			{
				duration: duration == undefined ? 1000 : duration,
				easing: ease == undefined ? "swing" : ease,
				step: function()
				{
					self.text( Math.floor( this.value ) );
					if( commas )
					{
						self.text( self.text().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
					}
				},
				complete: function()
				{
					if( parseInt( self.text() ) !== stop )
					{
						self.text( stop );
						if( commas )
						{
							self.text( self.text().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
						}
					}
				}
			} );
		} );
	};
} )( jQuery );