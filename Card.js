class Card {
    constructor(top, right, bottom, left, rPosition, dNum) {
        //---variables---
        //variables taken from constructor, each indicating an edge
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        //variable that indicates rotational position, mesured in number of rotations right
        this.rPosition = rPosition;
        //variable that determines the card used
        this.dNum = dNum;
        //---functions---
        //function that simulates the card turing right
        this.rotateRight = function () {
            let tmp = this.top;
            this.top = this.left;
            this.left = this.bottom;
            this.bottom = this.right;
            this.right = tmp;
            //to keep track of the rotational position after a right rotate
            this.rPosition = (this.rPosition + 1) % 4;
        };

        //funciton that simulates the card turning left
        this.rotateLeft = function () {
            let tmp = this.top;
            this.top = this.right;
            this.right = this.bottom;
            this.bottom = this.left;
            this.left = tmp;
            //to keep track of the rotational postion after a left rotate
            if (this.rPosition > 0) {
                this.rPosition = this.rPosition - 1;
            } else {
                this.rPosition = 3;
            }
        };
    }
}

export {Card};