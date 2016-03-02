/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(cubeFiveRotation, cubeFourRotation, cubeThreeRotation, cubeTwoRotation, cubeOneRotation, cubeFiveColour) {
            this.cubeFiveRotation = cubeFiveRotation;
            this.cubeFourRotation = cubeFourRotation;
            this.cubeThreeRotation = cubeThreeRotation;
            this.cubeTwoRotation = cubeTwoRotation;
            this.cubeOneRotation = cubeOneRotation;
            this.cubeFiveColour = cubeFiveColour;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.randomCubeFive = function () {
            this.cubeFiveColour = this.cubeFiveColour ? false : true;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map