(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

global.timeColour = require('./body.color');
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./body.color":2}],2:[function(require,module,exports){
'use strict';


var TimeColour = Object.create(Object);

TimeColour.run = function (elementId, timeInterval) {

    $('#' + elementId).css({"transition": "all 0.8s", "-webkit-transition": "all 0.8s"});
    var timeHex = this.getHexFromTime();
    this.setColourOnDomElement(elementId, timeHex);

    setTimeout(function(){ TimeColour.run(elementId);}, timeInterval || 1000);

};


TimeColour.prototype.getHexFromTime = function () {

    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    if (hours < 10){hours = "0" + hours}
    if (mins < 10){mins = "0" + mins}
    if (secs < 10){secs = "0" + secs}

    var timeString = hours.toString() + mins.toString() + secs.toString();

    return '#' + timeString;

};


TimeColour.prototype.setColourOnDomElement = function(elementId, hexCode){

    $('#' + elementId).css("background-color", hexCode);

};



module.exports = TimeColour;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udF9hcHAvYXBwLmpzIiwiZnJvbnRfYXBwL2JvZHkuY29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBOzs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC50aW1lQ29sb3VyID0gcmVxdWlyZSgnLi9ib2R5LmNvbG9yJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBUaW1lQ29sb3VyID0gT2JqZWN0LmNyZWF0ZShPYmplY3QpO1xuXG5UaW1lQ29sb3VyLnJ1biA9IGZ1bmN0aW9uIChlbGVtZW50SWQsIHRpbWVJbnRlcnZhbCkge1xuXG4gICAgJCgnIycgKyBlbGVtZW50SWQpLmNzcyh7XCJ0cmFuc2l0aW9uXCI6IFwiYWxsIDAuOHNcIiwgXCItd2Via2l0LXRyYW5zaXRpb25cIjogXCJhbGwgMC44c1wifSk7XG4gICAgdmFyIHRpbWVIZXggPSB0aGlzLmdldEhleEZyb21UaW1lKCk7XG4gICAgdGhpcy5zZXRDb2xvdXJPbkRvbUVsZW1lbnQoZWxlbWVudElkLCB0aW1lSGV4KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgVGltZUNvbG91ci5ydW4oZWxlbWVudElkKTt9LCB0aW1lSW50ZXJ2YWwgfHwgMTAwMCk7XG5cbn07XG5cblxuVGltZUNvbG91ci5wcm90b3R5cGUuZ2V0SGV4RnJvbVRpbWUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIHZhciBtaW5zID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgdmFyIHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcblxuICAgIGlmIChob3VycyA8IDEwKXtob3VycyA9IFwiMFwiICsgaG91cnN9XG4gICAgaWYgKG1pbnMgPCAxMCl7bWlucyA9IFwiMFwiICsgbWluc31cbiAgICBpZiAoc2VjcyA8IDEwKXtzZWNzID0gXCIwXCIgKyBzZWNzfVxuXG4gICAgdmFyIHRpbWVTdHJpbmcgPSBob3Vycy50b1N0cmluZygpICsgbWlucy50b1N0cmluZygpICsgc2Vjcy50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuICcjJyArIHRpbWVTdHJpbmc7XG5cbn07XG5cblxuVGltZUNvbG91ci5wcm90b3R5cGUuc2V0Q29sb3VyT25Eb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudElkLCBoZXhDb2RlKXtcblxuICAgICQoJyMnICsgZWxlbWVudElkKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGhleENvZGUpO1xuXG59O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lQ29sb3VyO1xuIl19
