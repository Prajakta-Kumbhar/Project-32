const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var Hour;

var bg ;

function preload() 
{
   getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{
    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    textSize(30)
    text("Time :"+ Hour,50,60)

    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg()
{
   // write code to fetch time from API
   var response = await fetch("http://worldclockapi.com/api/json/est/now")
   console.log(response)

    //change the data in JSON format
    var responseJSON = await response.json()
    console.log(responseJSON)

    var currentdatetime = responseJSON.currentDateTime;
    // write code slice the datetime
     Hour = currentdatetime.slice(11,13)
    console.log(Hour)

    // add conditions to change the background images from sunrise to sunset
    if(Hour >= 4 && Hour < 6)
    {
        bg = "sunrise1.png"
        
    } else if(Hour >= 6 && Hour < 8)
      {
        bg = "sunrise2.png"

      } else if(Hour >= 8 && Hour < 10)
        {
            bg = "sunrise3.png"
            
        }else if(Hour >= 10 && Hour < 12)
        {
            bg = "sunrise4.png"
            
        }else if(Hour >= 12 && Hour < 14)
        {
            bg = "sunrise5.png"
            
        }else if(Hour >= 14 && Hour < 16)
        {
            bg = "sunrise6.png"
            
        }else if(Hour >= 16 && Hour < 18)
        {
            bg = "sunrise7.png"
            
        }else if(Hour >= 18 && Hour < 20)
        {
            bg = "sunrise8.png"
            
        }else if(Hour >= 20 && Hour < 22)
        {
            bg = "sunrise9.png"
            
        }else if(Hour >= 22 && Hour < 24)
        {
            bg = "sunrise10.png"
            
        }else if(Hour >= 24 && Hour < 2)
        {
            bg = "sunrise11.png"
            
        }else if(Hour >= 2 && Hour < 4)
        {
            bg = "sunrise12.png"
            //console.log(bg)
        }
      
        


    //load the image in backgroundImg variable here
    
    backgroundImg = loadImage(bg);
    
}