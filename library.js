/**
 *	library.js for CS4460 League of Viz group (Fall 2015)
 *
 *	Library for misc. functions.
 *
 *	The remove function is imported and used as it was
 *	found on the internet.
 */


Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};