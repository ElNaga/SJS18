// window.addEventListener('load', () => {
//     console.log('Loaded site.')

    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext('2d');

    //Resize
    canvas.height = window.innerHeight ;
    canvas.width = window.innerWidth;

    // context.strokeStyle = 'red';
    // context.lineWidth = '3';
    // context.strokeRect(10,10,200,200);
    // context.strokeStyle = 'black'
    // context.strokeRect(50,50,200,200);

    // context.beginPath();
    // context.moveTo(100,100);
    // context.lineTo(200,100);
    // context.lineTo(200,150);
    // context.closePath();
    // context.stroke();

    // context.fillStyle = 'black';
    // context.fillRect(100,200,50,75);
    
    // context.fillStyle = 'red';
    // context.beginPath();
    // context.arc(300,350,100,0,Math.PI*2,false);
    // context.closePath();
    // context.fill();


    function drawRect(x,y,w,h,color) {
        context.fillStyle = color;
        context.fillRect(x,y,w,h);
    }

    function drawCircle(x,y,r,color) {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x,y,r,0,Math.PI*2,false);
        context.closePath();
        context.fill();
    }

    function drawText(text,x,y,color) {
        context.fillStyle = color;
        context.font = "75px fantasy";
        context.fillText(text,x,y);
    }


    let rectX = 0;
    function render() {

        drawRect(0,0,canvas.width,canvas.height,'BLACK');
        drawRect(rectX,canvas.height/2-50,10,canvas.height/10,'Gray');
        
    }
    
   
  
render();