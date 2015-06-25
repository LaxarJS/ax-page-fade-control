/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'angular',
   'jquery'
], function( ng, $ ) {
   'use strict';

   var directiveName = 'axPageFade';
   var directive = [ '$window', 'axGlobalEventBus', function( $window, eventBus ) {
      return function( scope, element ) {
         var fadeOutTimeout = null;
         eventBus.subscribe( 'didNavigate', function() {
            fadeOutTimeout = $window.setTimeout( function() {
               $( element ).fadeOut( 'fast' );
            }, 100 );
         } );

         eventBus.subscribe( 'endLifecycleRequest', function() {
            element.css( 'display', 'block' );
         } );

         scope.$on( '$destroy', function() {
            $window.clearTimeout( fadeOutTimeout );
         } );
      };
   } ];

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( directiveName + 'Control', [] ).directive( directiveName, directive );

} );
