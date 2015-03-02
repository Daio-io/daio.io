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
