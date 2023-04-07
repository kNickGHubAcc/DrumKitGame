//Για κλικάρισμα μόνο στα κουμπιά με class="drum"
for (var i=0;  i<document.querySelectorAll(".drum").length;  i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()   //Όταν κλικάρω σε κάποιο από τα κουμπιά της for εκτελείται η function
  {
      makeSound(this.innerHTML);   //Η παράμετρος είναι το γράμμα(innerHTML) του κουμπιού που κλικάρω
      buttonAnimation(this.innerHTML);
  });
}


//Για πάτημα οποιουδήποτε κουμπιού του keyboard
document.addEventListener("keydown", function(event)  //Με την event επιστρέφονται τα στοιχεία του κουμπιου που πατιέται
{
    makeSound(event.key);   //Το key είναι το γράμμα του κουμπιού που πατιέται
    buttonAnimation(event.key);
});


//Ανάλογα με το key (γράμμα κουμπιο΄ύ) ακούγεται και ο αντίστοιχος ήχος
function makeSound(key)
{
  switch (key)
  {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");    //Η Audio είναι constructor function
      tom1.play();   //Η play() είναι μέθοδος της Audio
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      alert("Έχετε να δυνατότητα να κλικάρετε με το ποντίκι σας. Για να παίξετε drums με το keyboard πατήστε τα ακόλουθα κουμπιά W/A/S/D/J/K/L");
  }
}

//Εμφάνιση animation (με ορισμένη διάρκεια) με το κλικ ή το πάτημα κουμπιού
function buttonAnimation(currentKey)   //Το currentKey είναι το γράμμα του κουμπιού που κλικάρουμε ή πατάμε
{
  var activeButton = document.querySelector("." +currentKey);   //Το κουμπί που αντιστοιχεί στην κλάση ".currentKey" αποθηκεύεται στην activeButton
  activeButton.classList.add("pressed");   //Για το κουμπί που κλικάραμε ή πατήσαμε, ορίζουμε animation. Η pressed είναι class selector στη CSS
  setTimeout(function()       //Ορίζουμε μετά από πόσο χρόνο θα 'αφαιρείται' το animation.
  {
    activeButton.classList.remove("pressed");
  },100);
}
