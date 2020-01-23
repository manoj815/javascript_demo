//Console.log 
// suppose you are working on project and for debugging purpose you have added n number of console.log
// But its difficult to find which value logged by which console.log function
// so to make it easier to trace we can use console.log as
let a = 10;
console.log('value of a is: ',a;
//OR
let var1 = 12;
let var2 = var1+2;
console.log('value of var1 is',var1,'value of var2 is',var2);

//console.table
//Suppose we have large json file and we value some value from that json file

const json = [
  {
    "_id": "5e291aaca04ff6dd88953506",
    "index": 0,
    "guid": "fe9b53b7-4bcd-47e1-b075-2b4c0b83ad74",
    "isActive": true,
    "balance": "$2,545.18",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "brown",
    "name": {
      "first": "Lakisha",
      "last": "Ramos"
    },
    "company": "MUSANPOLY",
    "email": "lakisha.ramos@musanpoly.tv",
    "phone": "+1 (843) 523-2674",
    "address": "609 Cortelyou Road, Fillmore, Nevada, 447",
    "about": "<TypeError: loremIpsum is not a function>",
    "registered": "Sunday, December 27, 2015 1:46 AM",
    "latitude": "-67.650722",
    "longitude": "25.199664",
    "tags": [
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Katherine George"
      },
      {
        "id": 1,
        "name": "Wolfe Jacobson"
      },
      {
        "id": 2,
        "name": "Middleton Hubbard"
      }
    ],
    "greeting": "Hello, Lakisha! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5e291aaca9a48a516c58b315",
    "index": 1,
    "guid": "4f672bb5-9399-4cd7-9165-bbdc8b431f6c",
    "isActive": false,
    "balance": "$1,284.99",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": {
      "first": "Wallace",
      "last": "Ellis"
    },
    "company": "DIGINETIC",
    "email": "wallace.ellis@diginetic.info",
    "phone": "+1 (948) 491-2945",
    "address": "826 Stillwell Place, Jennings, Michigan, 5944",
    "about": "<TypeError: loremIpsum is not a function>",
    "registered": "Thursday, December 6, 2018 10:08 PM",
    "latitude": "42.704016",
    "longitude": "21.562487",
    "tags": [
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Sweet Hodge"
      },
      {
        "id": 1,
        "name": "Claudine Thompson"
      },
      {
        "id": 2,
        "name": "Osborn Coleman"
      }
    ],
    "greeting": "Hello, Wallace! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5e291aac2d6af43c8f2be282",
    "index": 2,
    "guid": "35a68150-32df-4369-a7df-0c10016070fd",
    "isActive": false,
    "balance": "$2,629.93",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Summers",
      "last": "Griffin"
    },
    "company": "KAGGLE",
    "email": "summers.griffin@kaggle.org",
    "phone": "+1 (928) 525-3082",
    "address": "836 Montague Terrace, Bladensburg, Florida, 1649",
    "about": "<TypeError: loremIpsum is not a function>",
    "registered": "Sunday, February 26, 2017 5:40 AM",
    "latitude": "-36.837544",
    "longitude": "99.477425",
    "tags": [
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Delacruz Brown"
      },
      {
        "id": 1,
        "name": "Dejesus Ballard"
      },
      {
        "id": 2,
        "name": "Maryann Sweeney"
      }
    ],
    "greeting": "Hello, Summers! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5e291aac21a3fdfac3632fe7",
    "index": 3,
    "guid": "4913de3c-0842-4461-b61e-26f88c3bead8",
    "isActive": false,
    "balance": "$3,933.45",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": {
      "first": "Corina",
      "last": "Mccoy"
    },
    "company": "CALCULA",
    "email": "corina.mccoy@calcula.us",
    "phone": "+1 (938) 507-3064",
    "address": "856 Leonora Court, Linwood, New Jersey, 1316",
    "about": "<TypeError: loremIpsum is not a function>",
    "registered": "Saturday, October 28, 2017 2:33 PM",
    "latitude": "-16.714994",
    "longitude": "-153.749654",
    "tags": [
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Barber Mcbride"
      },
      {
        "id": 1,
        "name": "Mercer Hopper"
      },
      {
        "id": 2,
        "name": "Massey Kent"
      }
    ],
    "greeting": "Hello, Corina! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5e291aac6ed8b48eb98df729",
    "index": 4,
    "guid": "69fea0be-4636-415a-8e9b-40b3c5fe2177",
    "isActive": false,
    "balance": "$2,028.91",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "brown",
    "name": {
      "first": "Chan",
      "last": "Harvey"
    },
    "company": "MANGELICA",
    "email": "chan.harvey@mangelica.com",
    "phone": "+1 (980) 486-3592",
    "address": "866 Rutland Road, Imperial, Illinois, 2790",
    "about": "<TypeError: loremIpsum is not a function>",
    "registered": "Tuesday, August 11, 2015 10:56 PM",
    "latitude": "-83.995114",
    "longitude": "-115.732967",
    "tags": [
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>",
      "<TypeError: loremIpsum is not a function>"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Inez Sanders"
      },
      {
        "id": 1,
        "name": "Blanche Rose"
      },
      {
        "id": 2,
        "name": "Hansen Hayden"
      }
    ],
    "greeting": "Hello, Chan! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
// We get guid and balance in tabular format
console.table(json,['guid','balance']);

//Suppose if we need to check debugging time we can use someting below
console.time('settime');
setTimeout(()=> { 
  console.timeEnd('settime')
console.log('hello working')
},5000);


