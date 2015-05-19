# AxPageFadeControl

> Adds a fade-transition on LaxarJS flow navigation events

This shows a cover layer during the initial load, and on every navigation.
The layer is shown/hidden using a fade animation.


## Installation

To retrieve a copy of this control you can either clone it directly using git or alternatively install it via Bower.
For general information on installing, styling and optimizing controls, have a look at the [LaxarJS documentation](https://github.com/LaxarJS/laxar/blob/master/docs/manuals/installing_controls.md).

### Setup Using Bower

Install the control:

```sh
bower install laxarjs.ax-page-fade-control
```

## Usage

Because you will likely want to show the page-fade layer before any widgets are loaded, reference the control directly from your `index.html`/`debug.html`:

```json
<style>
   [data-ax-page-fade] { background: #fff; z-index: 100; position: fixed; left: 0; top: 0; width: 100%; height: 100%; }
</style>
<div data-ax-page-fade></div>
```

Inline styling is used so that the application may fade in on initial load.
This is especially useful when there are widgets that "stagger" during page load because their data is being loaded successively.

To make sure that the control is loaded by RequireJS, add its module as a dependency to your application module's `init.js`:

```javascript
require( [
   'laxar',
   'laxar-application-dependencies',
   'laxarjs.ax-page-fade-control/ax-page-fade-control'
   // , …
], function( ax, applicationModules, axPageFadeModule ) {
   'use strict';

   applicationModules.angular = applicationModules.angular || [];
   applicationModules.angular.push( axPageFadeModule );
   ax.bootstrap( applicationModules );
} );
```
