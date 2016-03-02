/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control {

        public cubeFiveRotation: number;
        public cubeFourRotation: number;
        public cubeThreeRotation: number;
        public cubeTwoRotation: number;
        public cubeOneRotation: number;
        
        
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(cubeFiveRotation: number, cubeFourRotation: number,
            cubeThreeRotation: number, cubeTwoRotation: number, cubeOneRotation: number) {

            this.cubeFiveRotation = cubeFiveRotation;
            this.cubeFourRotation = cubeFourRotation;
            this.cubeThreeRotation = cubeThreeRotation;
            this.cubeTwoRotation = cubeTwoRotation;
            this.cubeOneRotation = cubeOneRotation;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
