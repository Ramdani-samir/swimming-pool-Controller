/*
// hello guys my name is Samir and i'm a beginner in web developpement.
// this modest projet is just to help the beginners like me to understand firebase ! :)
*/


//------------------------ Fech data infos from firebase -----------------------------
var ref = db.ref("Infos");
ref.on("value", function(snapshot) {
  var childData = snapshot.val();
  var p1 = childData.P1;
  var p2 = childData.P2;
  var p3 = childData.P3;
  var p4 = childData.P4;
  var p5 = childData.P5;
  // set p1 to label p1
  var p_1 = document.getElementById("p1"); 
  p_1.innerHTML = "Température de la pièce :    " + p1 + "°C" ;
  // set p2 to label p2
  var p_2 = document.getElementById("p2"); 
  p_2.innerHTML = "Humidité de la pièce :    " + p2 ;
  // set p3 to label p3
  var p_3 = document.getElementById("p3"); 
  p_3.innerHTML = "Température de l'eau :    " + p3 +"°C" ;
  // set p4 to label p4
  var p_4 = document.getElementById("p4"); 
  p_4.innerHTML = "PH de l'eau :    " + p4 ;
  // set p5 to label p5
  var p_5 = document.getElementById("p5"); 
  p_5.innerHTML = "Niveau d'eau :    " + p5 + " m" ; 

 });

 // ---------------------------------- Fech controls -----------------------------------
 // s1,s2,s3,s4 global variabls
 var s1, s2, s3, s4;
 var ref = db.ref("Controls");
ref.on("value", function(snapshot) {
  var childData = snapshot.val();
  s1 = childData.C1;
  s2 = childData.C2;
  s3 = childData.C3;
  s4 = childData.C4;

// set s1 to label s1
var s_1 = document.getElementById("s1"); 
s_1.innerHTML = "Système Globale :    " + s1 ;
// set s2 to label s2
var s_2 = document.getElementById("s2"); 
s_2.innerHTML = "Filtre :    " + s2;
// set s3 to label s3
var s_3 = document.getElementById("s3"); 
s_3.innerHTML = "Action Eau :    " + s3 ;
// set s4 to label s4
var s_4 = document.getElementById("s4"); 
s_4.innerHTML = "LEDs :   " + s4 ;

});

//------------Handle buttons click and Send Commands data to firebase -----------------------

document.getElementById("c1").addEventListener("click", function(){
    // here we manage states! 
    if(s1=="ON"){
        addToFirebase(1, "OFF");
    }else{
        addToFirebase(1, "ON");
    }
});
document.getElementById("c2").addEventListener("click", function(){ 
   // here we manage states!  
    if(s2=="ON"){
        addToFirebase(2, "OFF");
    }else{
        addToFirebase(2, "ON");
    }
});
document.getElementById("c3").addEventListener("click", function(){ 
    // here we manage states! 
    if(s3=="ON"){
        addToFirebase(3, "OFF");
    }else{
        addToFirebase(3, "ON");
    }
});
document.getElementById("c4").addEventListener("click", function(){ 
    // here we manage states! 
    if(s4=="ON"){
        addToFirebase(4, "OFF");
    }else{
        addToFirebase(4, "ON");
    }
}); 

// function to add data controls to firebase database.
function addToFirebase(index, value){
    switch(index){
        case 1:
            firebase.database().ref('Controls').update({
                C1 : value
              });
        break;
        case 2:
            firebase.database().ref('Controls').update({
                C2 : value
              });
        break;
    
        case 3:
            firebase.database().ref('Controls').update({
                C3 : value
              });
        break;
        case 4 :
            firebase.database().ref('Controls').update({
                C4 : value
              });
        break;

    }
}


