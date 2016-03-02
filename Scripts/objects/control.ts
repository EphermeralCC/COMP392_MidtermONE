/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control {

        public cubeFiveRotation: number;
        public cubeFourRotation: number;
        public cubeThreeRotation: number;
        public cubeTwoRotation: number;
        public cubeOneRotation: number;
        
        public cubeFiveColour: boolean;
        public cubeFourColour: boolean;
        public cubeThreeColour: boolean;
        public cubeTwoColour: boolean;
        public cubeOneColour: boolean;
        
        
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(cubeFiveRotation: number, cubeFourRotation: number,
            cubeThreeRotation: number, cubeTwoRotation: number, cubeOneRotation: number, cubeFiveColour:boolean) {

            this.cubeFiveRotation = cubeFiveRotation;
            this.cubeFourRotation = cubeFourRotation;
            this.cubeThreeRotation = cubeThreeRotation;
            this.cubeTwoRotation = cubeTwoRotation;
            this.cubeOneRotation = cubeOneRotation;
            
            this.cubeFiveColour = cubeFiveColour;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        
        public randomCubeFive(){
            this.cubeFiveColour = this.cubeFiveColour ? false : true; 
        }
       
    }
}
