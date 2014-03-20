# jQuery Spin

Apply this plugin to a jQuery element that contains a number and it will animate to the target you specify.

````js
  $( element ).spin( target,
  {
    decimals: 2,                                // The amount of decimals to show; set 0 to disable
    duration: 1000,
    easing: 'swing',
    separator: { thousand: ',', decimal: '.' }  // Will be merged recursively
  } );
````

[Live Example](http://jsfiddle.net/2v2Je/1/)
