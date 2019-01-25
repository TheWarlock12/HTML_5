//single line comment 
/* 

multiline commment

*/

    // document.write("<h1>I can't wait to get to some <em>real</em> coding.</h1>");

    // alert ("Danger, Will Robinson.");

    // confirm("Do you like pokemon?");

    // prompt ("What type of pokemon do you like?");
//var pc = prompt("What is your name?");

//confirm("So your name is "+pc);

Adventure();

function Adventure() {
    
    alert("Welcome to TERROR OF THE FALLEN");
    var playerName = prompt("What is your character's name?");
    alert("Welcome to your home " + playerName);
    
    LairBase();
    
    function LairBase() {
        
        var lairBase = prompt("You are readying yourself for the ritual to make yourself immortal. Years have been spent preparing you for this moment. To start the ritual you need to grab your magical ingrediants before you approach the Alter. /n -look around /n -rest more").toLowerCase();
        
        if (lairBase === "look around" || lairBase === "look"|| lairBase === "look "|| lairBase === "look around ") {
            var lairBaseLook = prompt("Your home is a large cavern, there are three doors. The cavern has many tables covered in old books and equipment. Along the west wall sits the ingredients you have gathered over the months for the ritual. The stone alter to preform the ritual upon is to the south of the room. To the north, the door you barred and locked months ago stands. The east of the cavern are two entrences to your large libraries. /n -go direction ");
            }
        
        else if (lairBase === "rest more" || lairBase === "rest" || lairBase === "sleep" || lairBase === "go to sleep"){
            alert("You fall back to sleep, dreaming of your life as an immortal.");
            var resume = confirm("Do you wish to continue?");
            
            if(resume){
                LairBase();
            }
            else{
                alert("Game Over!");
                
            }
        }
            
    }
    
    
    
    
    
    
}

