(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Led = require('./led');

var CanvasLed = function() {
    var CanvasLed = function CanvasLed(el, options) {
		this.el = el;
	};

    Object.defineProperties(CanvasLed.prototype, {
        set: {
            writable: true,

            value: function(index, state) {

            }
        }
    });

    return CanvasLed;
}();

module.exports = CanvasLed;


},{"./led":2}],2:[function(require,module,exports){
var Led = function() {
    var Led = function Led(x, y) {
		this.x = x;
		this.y = y;
	};

    Object.defineProperties(Led.prototype, {
        toggle: {
            writable: true,

            value: function(flag) {
                if (typeof flag === 'boolean') {
                    this.enabled = flag;
                } else {
                    this.enabled = ! this.enabled;
                }

                return this.enabled;
            }
        },

        enabled: {
            set: function(state) {
                this.on = state;
            },

            get: function() {
                return this.on;
            }
        }
    });

    return Led;
}();

module.exports = Led;


},{}]},{},[1]);
