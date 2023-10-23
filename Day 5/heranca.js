class Rectangle {
    constructor(width, height) {
        this.width = this.width;
        this.height = this.height;
    }
}

class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    
    area(){
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side)
    }
}

console.log(Rectangle.area())
console.log(Square.area())