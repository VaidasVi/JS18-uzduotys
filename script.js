// ! Ketvirta klases uzduotis

const facebookProfile = {
  name: "Vaidas",
  numberOfFriends: 69,
  messages: [
    "New message",
    "Some message",
    "Upe buvo lauke",
    "Upe pasileido plaukus",
  ],
  postMessage: function (message) {
    return this.messages.push(message);
  },
  deleteMessage: function (index) {
    return this.messages.splice(index - 1, 1);
  },
  addFriend: function () {
    return (this.numberOfFriends += 1);
  },
  removeFriend: function () {
    return (this.numberOfFriends -= 1);
  },
};

facebookProfile.postMessage("Upe issimaude");
facebookProfile.deleteMessage(2);
facebookProfile.addFriend();
facebookProfile.removeFriend();

// console.log(facebookProfile.messages);

// ! Penkta klases uzduotis

const cars = [
  { type: "BMW", price: "30.000" },
  { type: "MERCEDES", price: "35.000" },
  { type: "HONDA", price: "18.000" },
  { type: "VOLVO", price: "25.000" },
];

cars.forEach((index) => {
  console.log(`${index.type} car price $${index.price}`);
});

//! 1. Sukurkite objektą ‚refridgerator‘. Suteikite jam tokias savybes: color yra black,
//! fridgeVolume yra 212, freezerVolume yra 77, WiFi yra Boolean ‘false’, make yra
//! Liebherr, model yra ICBn-5112, isOn yra nustatyas Boolean ‘false’. Taip pat pridėkite
//! metodą isTurnedOn, kuris į console.log išspausdins ar įjungtas ar ne tekstu:
//! ‚Refridgerator is on‘ arba ‚Refridgerator is off‘.

const refridgerator = {
  color: "black",
  fridgeVolume: 212,
  freezerVolume: 77,
  WIfi: false,
  make: "Liebherr",
  model: "ICBn-5112",
  isOn: false,
  isTurnedOn: function () {
    if (this.isOn === true) {
      console.log("Refridgerator is on");
    } else {
      console.log("Refridgerator is off");
    }
  },
};

refridgerator.isTurnedOn();

//! 2. Pasinaudodami objektų metodu, išspausdinkite į consolę masyvą su objekto
//! refridgerator values.

console.log(Object.values(refridgerator));

//! 3. Pasinaudodami objektų metodu, išspausdinkite į consolę masyvą su objekto
//! refridgerator keys.

console.log(Object.keys(refridgerator));

//! 4. Pasipraktikuokite objekto destruktūrizavimą ir iš objekto refridgerator į const
//! priskirkyte objekto make ir model. (Nenaudokite dot notation, t.y object.value).

const { make, model } = refridgerator;
console.log(make, model);

//! 5. Susikurkite html input fieldą tekstui. Darykite event listener onBlur ir event listener
//! viduje pabandykite nuskaityti ir į consolę išloginti reikšmę tiek per event.target tiek
//! su this keyword. Callback funkciją darykite paprastą named funkciją (pvz. function
//! fn(e) {console.log(e.target.value)}) Ar gaunama ta pati reikšmė?

const input = document.querySelector("#text");

input.addEventListener("blur", function fn(e) {
  console.log(this.value);
  console.log(e.target.value);
});

//! 6. Papildoma užduotis.
// Susikurkite objektą elevator. Objektui nustatykite floor yra 1. Taip pat objektas turės
// metodą moveToDestination. moveToDestination metodas kas sekundę turi pakeisti
// aukštą padidindamas arba sumažindamas jį vienetu(patikrinti ar inkrementuoti ar
// dekrementuoti) ir išloginti consolėję esamą aukštą bei nustatyti property floor į
// dabartinį su this.floor = naujo aukšto skaičius. Iškvietus moveToDestination kaip
// parametras turi būti paduodamas aukštas į kurį norima patekti ir metodo viduj
// sukamas loginimas, bei floor nustatymas kol bus pasiektas norimas aukštas.
// Metodai patikrinimui pvz.:
// elevator.moveToDestination(10);
// elevator.moveToDestination(1);
// elevator.moveToDestination(7);
// elevator.moveToDestination(5);
// Aukštų keitimo ciklui galite naudoti setInterval. Jei pavyks pasidaryt, pasidalinkit
// rezultatu. Sėkmės.

const elevator = {
  floor: 1,
  moveToDestination: function (whichFloor) {
    console.log(this.floor);
    if (whichFloor > this.floor) {
      const intervalID = setInterval(() => {
        if (++this.floor === whichFloor) {
          window.clearInterval(intervalID);
        }
        console.log(this.floor);
      }, 1000);
    } else if (whichFloor < this.floor) {
      const intervalID = setInterval(() => {
        if (--this.floor === whichFloor) {
          window.clearInterval(intervalID);
        }
        console.log(this.floor);
      }, 1000);
    } else {
      console.log("You are on the right floor");
    }
  },
};
