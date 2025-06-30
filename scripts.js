const unicorns = ["Licorne mignonne", "Terrifiante", "Bizarre"];
const features = ["énergique", "perverse", "cruelle"];
//const ambiance = ["tragique", "magique"];
const rooms1 = ["désrete", "remplie", "grandiose", "tropicale"];
const rooms2 = ["banale", "étrange", "nulle", "humide"];

const rooms3 = ["géniale", "magnifique", "chaude", "seche"];

const rooms4 = ["grande", "petite", "classe", "dégoutante"];

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
    { id: "unicornsText", array: unicorns },
    { id: "featuresText", array: features },
    { id: "firstRoomText", array: rooms1, prefix: "The first room is " },
    { id: "secondRoomText", array: rooms2, prefix: "Then, you enter " },
    { id: "thirdRoomText", array: rooms3, prefix: "You find yourself in " },
    {
      id: "forthRoomText",
      array: rooms4,
      prefix: "The end of your journey is in ",
    },
  ];

  elements.forEach(({ id, array, prefix = "" }) => {
    $(id).innerHTML = prefix + getOption(array);
  });
}
/*
  switch (features) {
    case random === 0:
      changeStyle("", "");
      
  }
  */
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
