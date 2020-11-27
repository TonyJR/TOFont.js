import { Font, Paragraph } from "./src/TOFont";

let font = new Font("./WaWaTi-3.ttf",function(font){
    
});
let paragraph = new Paragraph("👨‍👩‍👧",font,1,14);
let size = paragraph.getSize();
console.log(size.width);
console.log(size.height);