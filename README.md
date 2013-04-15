# LazifyProxy
New version of [Lazify][lazify] library using [ESHarmony Proxies][proxies].
Makes things lazy. Mostly useless because only Firefox supports Proxies. Experiments seem good.

[lazify]: https://github.com/wwalser/lazify
[proxies]: http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies
## Getting Started
For Node:
```javascript
//Create a lazy version of a function that returns functions
var lazify = require('Lazify.js');
var lazyThing = lazify(thing);
lazyThing()()();
//nothing has occurred yet
lazyThing.exec()
//thing()()() is executed

//Create a lazy version of a jQuery like object. Note that with Proxies you don't
//need to tell lazify about the thing your making lazy. It just works.
var lazyQuery = lazify($);
lazyQuery('#any.selector').appendTo('#another.query');
//nothing has occurred yet
lazyQuery.exec();
//$('#any.selector').appendTo('#another.query') is executed
```

For Browser:
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/wwalser/lazify-proxy/master/dist/LazifyProxy.min.js
[max]: https://raw.github.com/wwalser/lazify-proxy/master/dist/LazifyProxy.js
Same API, in a browser, you can figure it out.

## Documentation
[Code][code] is the documentation for now.

[code]: https://github.com/wwalser/lazify-proxy/blob/master/lib/LazifyProxy.js

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
From the cli:
```
npm install
grunt
```

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Wesley Walser  
Licensed under the MIT license. Let me know if this is a problem.
