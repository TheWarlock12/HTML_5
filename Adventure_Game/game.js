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







var inventory = {
    crystal_ball:0,
    ingredients:0,
    crystals:0
    
}
var minions = {
    goblin:1,
    troll:1,
    giantSpider:1
}
var ritual = {
    ingredientsPlaced:0,
    crystalsPlaced:0
}
var adventurer = {
    tick:0,
    health:4
}

/// var blacksmith = prompt(what do you want to buy? /n -sword /n -armor /n -leave shop);
    ///if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins >= 100){
///var swordBuy = confirm("Are you sure you ant to buty this?); 
// if (swordBuy){
// adds sword +1
// inventory.sword ++;
// displays swords owned
// alert("you own " +inventory.sword+ " swords");
// Takes money out of account for sword
//inventory.coins = inventory.coins - 100
// inventory.coins -= 100;
// displays coins left in account
// alert("you have " + inventory.coins+ " coins remaining");
// Blacksmith();
//}
//}


Intruder();
// Adventure();

function Adventure() {
    
    alert("Welcome to TERROR OF THE FALLEN");
    var playerName = prompt("What is your character's name?").toLocaleUpperCase();
    alert("Welcome to your home " + playerName);
    
    LairBase();
    
    function LairBase() {
        
      
        var lairBase = prompt("You are readying yourself for the ritual to make yourself immortal. Years have been spent preparing you for this moment. To start the ritual you need to grab your magical ingrediants before you approach the Alter. \n -look around \n -rest more").toLowerCase();
        
        if (lairBase == "look around" || lairBase == "look") {
            LairBaseLook();    
        }
            function LairBaseLook(){
                var lairBaseLook1 = prompt("Your home is a large cavern, there are three doors. The cavern has many tables covered in old books and equipment. Along the west wall sits the ingredients you have gathered over the months for the ritual. The stone alter to preform the ritual upon is to the south of the room. To the north, the door you barred and locked months ago stands. The east of the cavern are two entrences to your large libraries. \n -go north \n -go south \n -go east \n -go west ").toLowerCase();
                
                
                if (lairBaseLook1 == "go north"){
                    GoNorthLairBase();
                 }
        
                else if (lairBaseLook1 == "go south"){
                    GoSouthLairBase();
                 }
                
                else if (lairBaseLook1 == "go west"){
                   GoWestLairBase();            
                }
                
                else if (lairBaseLook1 == "go east"){
                    GoEastLairBase();
                }
                else {
                   alert("Your mind becomes muddled. What did you want to do again?");
                    LairBaseLook();
                }
                }

                    function GoNorthLairBase() {
                        var directionN = prompt("The door is of strong oak, bound in iron bands. To unlock it would make you vulnerable to the outside world. Do you want to unlock it? \n  -go south \n -unlock door").toLowerCase();

                        if (directionN == "go south"){
                            LairBaseLook();
                        }
                        else if (directionN == "unlock door"){
                            alert("You start to unlock the door. Then you relieze you don't want to unlock the door. The door keeps you safe. You should have put a wall up a long time ago.");
                            GoNorthLairBase();
                        }
                        else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            GoNorthLairBase();
                        }
                    }


               
            
                    function GoSouthLairBase(){        
                        var directionS = prompt("The stone is about half your height. It is large, smooth, and grey. Hollowed cylindrical holes are in each corner of the stone. If your ready would you like to begin the ritual? \n -start ritual \n -go north \n -place ingredients \n -set crystals").toLowerCase();

                        if (directionS == "start ritual"){
                            /// check to see if player has placed ingredients and crystals if he/she doesn't say "You can't begin till you have your crystals and ingredients ready!"
                            if (ritual.ingredientsPlaced >= 1 && ritual.crystalsPlaced >=1){
                                
                                if(confirm("Are you sure you want to do this?")){
                                    Intruder();
                                }    
                                
                            }
                            
                            else {
                                alert("you need to place your ingredients and crystals to start!");
                                GoSouthLairBase();
                            }
                        }
                        

                        else if (directionS == "go north"){
                            LairBaseLook();
                        }

                        else if (directionS == "place ingredients" ){
                            if (inventory.ingredients >= 1){
                            alert( "You put your ingredients on the alter, sparkly powders and foul smelling gunk cover the stone in a special symbol.");
                            inventory.ingredients = inventory.ingredients - 1
                            ritual.ingredientsPlaced ++;
                            GoSouthLairBase();
                            }
                            else {
                            alert("You need to grab your ingredients to place them!");
                            GoSouthLairBase();
                        }
                            
                        }

                        else if (directionS == "set crystals"){
                            /// check for crystals if True, set place crystals to True and say 
                            if (inventory.crystals >= 1){
                            alert( "You insert the crystals into their special slots at each corner of the stone.");
                            inventory.crystals = inventory.crystals - 1
                            ritual.crystalsPlaced ++;
                            GoSouthLairBase();
                            }
                            else {
                            alert("You need to grab your crystals to place them!");
                            GoSouthLairBase();
                        }
                          }
                        ///function startRitual(){
                        else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            GoSouthLairBase();
                        }

                        }


                
                    function GoWestLairBase(){
                        var directionW = prompt("Your many ingredients you have prepared lie among the various equipment you have. Vials, pastes, powders, tubes, etc... Farther up the wall lies a resses that holds your magic holding crystals. \n -grab ingredients \n -grab crystals \n -break equipment \n -go east").toLowerCase();

                        if (directionW == "grab ingredients"){
                            alert("You pick up your many powders, tinctures and vials") /// set ingredients to True
                            inventory.ingredients ++;
                            GoWestLairBase();
                        }
                        else if (directionW == "grab crystals"){
                            alert("You strain to reach the fragile crystals, knocking them off in the process, but are able to catch all four cylindrical stones before they fall and shatter.") /// set crystals = true
                            inventory.crystals ++;
                            GoWestLairBase();
                        }
                        else if (directionW == "break equipment"){
                            alert("Your a bad person, thinking you can just break things like that!")
                            GoWestLairBase();
                        }
                        else if (directionW == "go east"){
                            LairBaseLook();
                        }
                         else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            GoWestLairBase();

                         }
                    }

                    function GoEastLairBase(){
                
                        var directionE = prompt("You see two passeges on either side of you. When you walk into the first chamber you see a large room with a very high ceiling. A giant book shelf is propt up against the wall. Hundreds of books of all shapes and sizes fill it. Ancient codicies, dusty old tomes, your own work bound in the skin of an animal you can't remember. In the second room sits a large oak table covered with empty papers. Huge glass containers filled with bubbling liquid also are placed here. You remember trying to experiment with animals but it failing. Is that what that stuff is? \n -go west ")

                        if (directionE == "go west"){
                            LairBaseLook();
                        }
                        else {
                            alert("Your mind becomes muddled. What did you want to do again?");
                            GoEastLairBase();
                    }
                    }
            
        
        
        
        if (lairBase == "rest more" || lairBase == "rest" || lairBase == "sleep" || lairBase == "go to sleep"){
            alert("You fall back to sleep, dreaming of your life as an immortal.");
            var resume = confirm("Do you wish to continue?");
            
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
    } // Lair Base end bracket
    
    function Intruder(){
        
        var intruder = prompt("You are about to begin casting the magic that will transform your lowly body when, you hear a 'ping' in your mind. Intruder. When you first came to the cave, you sneakily placed mystical alarms in all the rooms and entrences that detected people. The first alarm has been triggered. Then you feel a small object in your robe pocket, your crystal ball. Now you have to decide, take care of the intruder or continue casting the ritual. \n -use crystal ball \n -continue ritual ").toLowerCase();
        
        if (intruder == "use crystal ball"){
            CrystalBall();
        }
        if (intruder == "continue ritual"){
            ContinueRitual(); 
        }
        
        else {
            alert("Your mind becomes muddled. What did you want to do again?");
            Intruder();
        }
            function ContinueRitual(){
                
                var initiate = prompt("To complete the ritual, you need to say the magic words, but your memory is a little fuzzy on the spell's words. I guess you will have to guess. Which word do you say? \n -Uzkealet \n -Ifstoqk ").toLowerCase();
                
                if (initiate = "uzkealet"){
                    Uzkealet();
                }
                
                if (initiate = "ifstoqk"){
                    alert("Dang it, ya sploded, nice going hot shot, now you have to start over!");
                    LairBase();
                }
                    
                    
                else {
                alert("Sorry, wrong word! GAME OVER");
                LairBase();
                }
                
            function Uzkealet(){
                    var step_2 = prompt("hu, nothing happened it must have worked, okay, next word? \n -okpatka \n -aleoplwe \n -ielaells").toLowerCase();
                    
                    if (step_2 = "okpatka"){
                        Okpataka();
                    }
                    else {
                        alert("Dang it, ya sploded, nice going hot shot, now you have to start over!");
                    LairBase();
                    }
                }
            function Okpataka(){
                var step_3 = prompt("right, again! You must be on a role, no jinxing. \n -makelus \n -alsierk \n -weoirld").toLowerCase();
            
                if (step_3 = "makelus"){
                    Makelus();
                }
                else {
                        alert("Dang it, ya sploded, nice going hot shot, now you have to start over!");
                    LairBase();
                    }
                    
            }
            function Makelus(){
                var step_4 = prompt("Last one! \n -laskdjf \n -laierjwer \n -wiereuwlkd \n -ieorsld").toLowerCase();
                
                if (step_4 = "laskdif"){
                    alert("Yay! YOU WIN, nice job. That pathetic adventurer never had a chance. Your reign of terror as a lich will continue forever, muwaahahahahaha!")
                    
                }
                else {
                        alert("Dang it, ya sploded, nice going hot shot, now you have to start over!");
                    LairBase();
                    }
                }      
            }// continue Ritual end bracket
    
        function CrystalBall(){            
                var listOfMinions = prompt("You pull out your crystal ball from your robe pocket. Its transparent depths start to fill with magical energy as you enslave the minds of your minions, replacing their minds with your own. Which minion would you like to use first to take care of the nuisance. - goblin - troll - giant spider ").toLowerCase();
                
                
                switch(listOfMinions){
                    case "goblin":
                        if (minions.goblin == 1)
                            alert("You seize control of the goblin's mind. You feel it crack and then shatter under your shear magical power. You blink your new eyes, just up from a nap. You see a room, about 25 feet square, weak sunlight filters through the entry tunnel. The cave is a mess bones, ashes from fire, gold pieces lying around.")
                            if (adventurer.tick == 0)
                                adventurer.tick ++
                                var goblin = prompt("You see a shadow creep down the entry tunnel, it must be the adventurer. How will you deal with this \n -attack \n -sneak up on him \n -throw coins \n -run away ")
                                    if (goblin == "attack"){
                                        alert("You rush forward raising your dirty and dented sword to slice the adventurer, but he hears you coming and jumps from the shadows swinging his very sharp longsword. You die. You jump out of the goblin's body. Oh good, your safe in your cavern. Now you know better. Which minion would you like to use next?");
                                        minions.goblin -- 
                                        CrystalBall();
                                    }
                                    if (goblin == "sneak up on him"){
                                        adventurer.tick ++
                                        adventurer.health --
                                        minions.goblin --
                                        alert("You creep slowly out of your nest, quiet, quiet. The adventurer enters the room, looking around. You jump screaming 'eye eye eye eye eye!' he tries to block but you hit him with your sword. Then he stabbs you, and you die. You jump out of the goblin's body. Oh good, your safe in your cavern. You hurt the adventurer, good. Which minion would you like to use next?");
                                        CrystalBall();
                                    }
                                    if (goblin == "throw coins"){
                                        adventurer.tick ++ 
                                        minions.goblin --
                                        alert("You scoop up some gold coins and yeet them at the intruder. They clink harmlessly against his armor. He smiles, charges and slices you in half. Better luck next time. Oh good, your safe in your cavern. Now you know better. Which minion would you like to use next?");
                                        CrystalBall();
                                    }
                                    if (goblin == "run away"){
                                        adventurer.tick++
                                        minions.goblin --
                                        alert("You dash away, the adventurer sees you and chases you down the twisting tunnels, he stops, pulls out a bow, and shoots you. Dang it. Oh good, your safe in your cavern. Now you know better. Which minion would you like to use next?");
                                        CrystalBall();
                                        
                                    }
                        
                        
                            if (adventurer.tick >=1)
                                adventurer.tick ++
                                minions.goblin --
                                var goblinLate = prompt("The adventure must have passed the sleeping goblin. Do you \n chase after him \n or \n change minions");
                                    if (goblinLate == "chase after him"){
                                        alert("You run into the Troll Room, you see the adventurer fighting the troll with a glowing sword. The troll accidentally steps on your squishy body. Pick a new minion. ")
                                        CrystalBall();
                                    }
                                    if (goblinLate == "change minions"){
                                        minions.goblin --
                                        adventurer.tick ++
                                        alert("You leave the goblin's body and pick something better.")
                                        CrystalBall();
                                    }
                        if (minions.goblin == 0){
                            alert("You can't use a dead body, pick something else")
                            CrystalBall();
                        }
                    break;
                    case "troll":
                        var troll = prompt("You seize control of the troll's mind. It cracks but doesn't break and relinquishes to your awesome power.")
                        
                    break;
                    case "giant spider":
                        var giantSpider = prompt("You seize control of the spider's mind. It feels your touch and immediately relinquishes to your power.")
                
                    break;
                    default: 
                        alert("I don't know who "+listOfMinions+" is!");
                        MinionSlaves();
                    break;     
                    }
                        
                        
                        
                
            } // crystal ball 
    
    }// Intruder end bracket
    
}// Adventure Function End bracket

//ARAYS
//function GetRandInt(max){
//      var randInt = Math.floor(Math.random()* Math.floor(max));
//}
//
//
//
// function Game(){
//      var wizardNames = ["Bethazar", "Mordac", "Grendor", "Orco"];
//      document.write(wizardNames[0]);
//      alert("Legend of "+wizardNames[Math.floor(Math.random()*Math.floor(4))]+"!");
//      
//}




// SWITCHs

//fuction Castle(){
//  var insideCastle = prompt(" - upstairs - downstairs - courtyard - balcony - look ").toLowercase();
//
//  switch(insideCastle){
//      case "upstairs":
        //  var upstairs = prompt("you walk a long flight of stairs to the top floor of the castle.");
        //  
//          Castle();
//      break;
//      case "downstairs":
//          alert("You go downstairs");
//      break;
//      default:
//          alert("I don't know what "+insideCastle+" is!");
//          Castle();
//      break;
//}
//}



















//function Swamp(){
  //  var swampEnv = prompt("THis is a dank swamp. \n -follow path \n -swim");
    //
    //if(swampEnv == "follow" || swampEnv == "follow path"){
      //  var swampPath = prompt("You enter into the swamp, and head north when in the distance you see a hut. As you approach you see a candle in the window. \n -enter hut \n -burn it");
        //if(swampPath == "enter"){
          //  alert("You entered the hut. There is an old hag bent over a black cauldron on the roaring fire.");
    //    }
      //  }
    
    //else if(swampEnv == "swim"){
        
    //}
    //else{
      //  alert("I don't understand "+swampEnv);
        //Swamp();
    //}
//
//}
    





