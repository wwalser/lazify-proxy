/*
 * Lazify
 * https://github.com/wwalser/lazify
 *
 * Copyright (c) 2013 Wesley Walser
 * Licensed under the GPL license.
 */

(function(root){
	var lazify;

	lazify = function(orig){
		var chain = [],
			proxyHandler, proxy, exec;
		proxyHandler = {
			get: function(target, name){
				if (name === "exec") {
					return exec;
				}
				chain.push({type: 'get', name: name});
				return proxy;
			},
			apply: function(target, thisVal, args){
				chain.push({type: 'apply', context: thisVal, args: args});
				return proxy;
			}
		};
		proxy = new Proxy(orig, proxyHandler);

		exec = function(){
			var length = chain.length,
				currentRet = orig,
				i = 0,
				current, context;
			function next(reset){
				current = chain[i++];
				if (current && reset) {
					context = current.context || root;
				}
			}
			next(true);
			while (i <= length) {
				switch (current.type){
					case 'apply':
						currentRet = currentRet.apply(context, current.args);
						next(true);
						break;
					case 'get':
						context = currentRet;
						currentRet = currentRet[current.name];
						next();
						break;
					default:
						console.log('something wrong, default reached in switch');
				}
			}
			return currentRet;
		};
		return proxy;
	};

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = lazify;
	} else {
		root['lazify'] = lazify;
	}
}(this));
