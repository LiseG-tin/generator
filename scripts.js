const unicorns = [
  "cruel, with butterfly wings",
  "vicious, with slimy scales",
  "artificial, with crushing gears",
  "buzzing, with shiny shells",
  "fanatical, with stitched members",
  "alien, with sharp tentacles",
];
const features = [
  "an exuberant forest",
  "a submarine structure",
  "an unknown machinery",
  "luxuriant caves",
  "ancient ruins",
  "an ethereal space",
];
//const ambiance = ["tragique", "magique"];
const rooms1 = [
  "a cosy dormitory",
  "a welcoming kitchen",
  "steamed baths",
  "a luxurious common room",
  "a packed cellar",
  "a dark cave",
];
const rooms2 = [
  "a cramped shop",
  "a stifling greenhouse",
  "a stinky stable",
  "a messy storage room",
  "a damp well",
  "an intimidating scholar room",
];

const rooms3 = [
  "a deserted menagerie",
  "a soaked prison",
  "a haunted machinery",
  "a blooming body farm",
  "a burned throne room",
  "a tiny observatory",
];

const rooms4 = [
  "an organic ballroom",
  "an ominous theatre",
  "a ruined factory",
  "a living laboratory",
  "a malevolent library",
  "a bloody dissection room",
];

/* Comment faire fonction de génération unique ? 
fonction generate devrait aller chercher aléatoirement une otpion dans tableau mis en argument

DONC 
essai : 
*/

function getOption(x) {
  const random = Math.floor(Math.random() * x.length);
  //document.getElementById(y).innerHTML = x[random];
  return x[random] + ".";
}

function $(id) {
  return document.getElementById(id);
}

function changeStyle(property, value) {
  document.documentElement.style.setProperty(property, value);
}

function generate() {
  /* $("unicornsText").innerHTML = getOption(unicorns);
  $("featuresText").innerHTML = getOption(features);
  
  $("firstRoomText").innerHTML = "The first room is " + getOption(rooms1);
  $("secondRoomText").innerHTML = "Then, you enter " + getOption(rooms2);
  $("thirdRoomText").innerHTML = "You find yourself in " + getOption(rooms3);
  $("forthRoomText").innerHTML =
    "The end of your journey is in " + getOption(rooms4);
}*/
  const elements = [
    {
      id: "unicornsText",
      array: unicorns,
      prefix: "The creatures that roam these grounds are ",
    },
    { id: "featuresText", array: features, prefix: "You are exploring " },
    { id: "firstRoomText", array: rooms1, prefix: "The first room is " },
    { id: "secondRoomText", array: rooms2, prefix: "Then, you enter " },
    { id: "thirdRoomText", array: rooms3, prefix: "You find yourself in " },
    {
      id: "forthRoomText",
      array: rooms4,
      prefix: "The end of your journey takes place in ",
    },
  ];

  elements.forEach(({ id, array, prefix = "" }) => {
    $(id).innerHTML = prefix + getOption(array);
  });
  /*
  switch (features) {
    case features[0]:
      changeStyle("--background-color", "green");

      break;
    case features[1]:
      changeStyle("--background-color", "red");
      break;
    case features[2]:
      changeStyle("--background-color", "blue");
      break;
    case features[3]:
      changeStyle("--background-color", "black");
      break;
    case features[4]:
      changeStyle("--background-color", "pink");

      break;
    case features[5]:
      changeStyle("--background-color", "yellow");
      break;
  } 
      */
}
/*



/*




    let result = document.getElementById("GFG");

        function changeColor(color) {
            document.body.style.background = color;
        }

        function myFunc() {
            changeColor('yellow');
            result.innerHTML = "Background Color changed";
        }
*/
/*
function newMood() {
  let mood;
  ;
  switch (features) {
    case features[0]:
      mood = ambiance[0];
      break;
    case features[1]:
      mood = ambiance[1];
      break;
  }
  console.log(mood);
}
newMood(); //undefined dans console.log en l'état

/* pour changer le style 
  
  if features[0]
  ambiance[0]
  
  ou bien 
  function newMood () qui doit utiliser generateFeatures, ou bien être dans generateFeatures ?
  let mood;
  
  switch 
  case features[0] :
  mood = ambiance[0]
  ... 

  */

/* constantes a, b, c, d pour chaque pièce
genérer a
générer b, si b === a, recommencer 
générer c, si c === a && c=== b, recommencer ...


générer 4 résultats différents
boucle for : cherche résultat tant que similaire aux précédents

dans générateur mork borg  : 
 if (!result) {
        return results;
        déterminer un résultat
        procéder 4 fois --> 4 itérations

        puis boucle for pour remplir les div : remplir tant que vide ? 

        function generateRoom --> même focntion que unicorns et features, mais dans plusieurs tableaux ? ou un seul grand tableau ?
ensuite
        let resultats = new Array (0,0,0,0)
        const nbTirages = rooms.length
for (let i = 0; i<rooms.lentgh ; i++)
const = 
      }*/
