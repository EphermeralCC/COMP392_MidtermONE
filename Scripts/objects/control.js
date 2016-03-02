/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(cubeFiveRotation, cubeFourRotation, cubeThreeRotation, cubeTwoRotation, cubeOneRotation) {
            this.cubeFiveRotation = cubeFiveRotation;
            this.cubeFourRotation = cubeFourRotation;
            this.cubeThreeRotation = cubeThreeRotation;
            this.cubeTwoRotation = cubeTwoRotation;
            this.cubeOneRotation = cubeOneRotation;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map