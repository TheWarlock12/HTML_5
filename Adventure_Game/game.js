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
        
      
        var lairBase = prompt("You are readying yourself for the ritual to make yourself immortal. Years have been spent preparing you for this moment. To start the ritual you need to grab your magical ingrediants before you approach the Alter. \n -look around \n -rest more").toLowerCase();
        
        if (lairBase === "look around" || lairBase === "look"|| lairBase === "look "|| lairBase === "look around ") {
            lairBaseLook();    
        }
            function lairBaseLook(){
                var lairBaseLook1 = prompt("Your home is a large cavern, there are three doors. The cavern has many tables covered in old books and equipment. Along the west wall sits the ingredients you have gathered over the months for the ritual. The stone alter to preform the ritual upon is to the south of the room. To the north, the door you barred and locked months ago stands. The east of the cavern are two entrences to your large libraries. \n -go north \n -go south \n -go east \n  ").toLowerCase();
                
                ///if prompt  {
                   /// alert("Your mind becomes muddled. What did you want to do again?");
                    ///lairBaseLook();
            }
        
        
        
                if (lairBaseLook1 === "go north"){
                    goNorthLairBase();
                }

                    function goNorthLairBase() {
                        var directionN = prompt("The door is of strong oak, bound in iron bands. To unlock it would make you vulnerable to the outside world. Do you want to unlock it? \n  -go south \n -unlock door").toLowerCase();

                        if (directionN === "go south"){
                            lairBaseLook();
                        }
                        if (directionN === "unlock door"){
                            alert("You start to unlock the door. Then you relieze you don't want to unlock the door. The door keeps you safe. You should have put a wall up a long time ago.");
                            goNorthLairBase();
                        }
                        else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            goNorthLairBase();
                        }
                    }


                if (lairBaseLook1 === "go south"){
                    goSouthLairBase();
                }
                    function goSouthLairBase(){        
                        var directionS = prompt("The stone is about half your height. It is large, smooth, and grey. Hollowed cylindrical holes are in each corner of the stone. If your ready would you like to begin the ritual? \n start ritual \n go north \n place ingredients \n set crystals").toLowerCase();

                        if (directionS === "start ritual"){
                            /// check to see if player has placed ingredients and crystals if he/she doesn't say "You can't begin till you have your crystals and ingredients ready!"
                        }

                        if (directionS === "go north"){
                            lairBaseLook();
                        }

                        if (directionS === "place ingredients"){
                            /// check for ingredients if True, set place ingredients to True and say "You put your ingredients on the alter, sparkly powders and foul smelling gunk cover it in a special symbol. Now what do you want to do? \n -place crystals \n -start ritual "
                        }

                        if (directionS === "set crystals"){
                            /// check for crystals if True, set place crystals to True and say "You insert the crystals into their special slots at each corner of the stone. Now what do you want to do? \n -place ingredients \n -start ritual
                          }
                        ///function startRitual(){
                        else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            goSouthLairBase();
                        }

                        }


                if (lairBaseLook1 === "go west"){
                   goWestLairBase();            
                }
                    function goWestLairBase(){
                        var directionW = prompt("Your many ingredients you have prepared lie among the various equipment you have. Vials, pastes, powders, tubes, etc... Farther up the wall lies a resses that holds your magic holding crystals. \n grab ingredients \n grab crystals \n break equipment \n go east").toLowerCase();

                        if (directionW === "grab ingredients"){
                            alert("You pick up your many powders, tinctures and vials") /// set ingredients to True
                        }
                        if (directionW === "grab crystals"){
                            alert("You strain to reach the fragile crystals, knocking them off in the process, but are able to catch all four cylindrical stones before they fall and shatter.") /// set crystals = true
                        }
                        if (directionW === "break equipment"){
                            alert("Your a bad person, thinking you can just break things like that!")
                        }
                        if (directionW === "go east"){
                            lairBaseLook();
                        }
                         else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            goWestLairBase();

                         }
                    }


                if (lairBaseLook1 === "go east"){
                    var directionE = prompt("You see two passeges on either side of you. When you walk into the first chamber you see a large room with a very high ceiling. A giant book shelf is propt up against the wall. Hundreds of books of all shapes and sizes fill it. Ancient codicies, dusty old tomes, your own work bound in the skin of an animal you can't remember. In the second room sits a large oak table covered with empty papers. Huge glass containers filled with bubbling liquid also are placed here. You remember trying to experiment with animals but it failing. Is that what that stuff is? \n go west ")
                    
                    if (directionE === "go west"){
                        lairBaseLook();
                    }
                    else {
                        alert("Your mind becomes muddled. What did you want to do again?");
                        goSouthLairBase();
                }
                }
        
        
        
        
        if (lairBase === "rest more" || lairBase === "rest" || lairBase === "sleep" || lairBase === "go to sleep"){
            alert("You fall back to sleep, dreaming of your life as an immortal.");
            var resume = confirm("Do you wish to continue?").toLowerCase();
            
            if(resume){
                LairBase();
            }
            else{
                alert("Game Over!");   
            }        
        }
        else {
            alert("Your mind becomes muddled. What did you want to do again?");
            LairBase();
        }      
    }
    
    
    
    
    
    
}

