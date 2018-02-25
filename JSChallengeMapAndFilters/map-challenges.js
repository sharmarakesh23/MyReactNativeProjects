//@ts-check

/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./data/profileData")
const shaadiData = require("./data/shaadiData.json")

/*
  Challenge 1.1 - write a function that returns an array of fullnames i.e. each element is a string that has
  `title, first, last` instead of those separate fields
  Expected const profileNameArrays = ['fullnameOne', 'etc', 'etc'] <-- array of strings fullnames
*/

//onsole.log(shaadiData)
function initializeNames(name) {
  return name.charAt(0).toUpperCase()
}

const profileNames = profiles => {
  return profiles.map(({ name }) => {
    return `${initializeNames(name.title)} ${initializeNames(
      name.first
    )} ${initializeNames(name.last)}`
  })
}
//const profileNameArrays = profiles.map((profile) => profile.name.title.concat(" " , profile.name.first , " " , profile.name.last));

console.log(profileNames(profiles))

/*
  Challenge 1.2 - write a function that returns an array that has users grouped by nationality
  Expected const usersGroupedByNationality = [
    { 
      'BR': [{}, {}],
      'GB': [{}, {}],
      ...// users grouped by other countries
    }
  ]
  Note: This might feel super hard. Don't get stuck on it. Try it later
*/

const nationalities = Array.from(new Set(profiles.map(profile => profile.nat)))
//console.log(nationalities);

const usersGroupedByNationality = {}
nationalities.forEach(nation => {
  usersGroupedByNationality[nation] = profiles.filter(
    profile => profile.nat == nation
  )
})
//console.log(usersGroupedByNationality);

/*
  Challenge 1.3 - write a function that returns a transformed array of profiles combined with photo data

  Start with this data
 */

const profilesData = [
  {
    profile: { id: "26144385", some: "more", other: "misc" },
    photo_details: {
      photos: [{ small: "bar-1", medium: "baz-1" }]
    }
  },
  {
    profile: { id: "26144334", some: "even", other: "some more" },
    photo_details: {
      photos: [
        { small: "bar-2", medium: "baz-2" },
        { small: "fizz-2", medium: "buzz-2" }
      ]
    }
  }
]

/* and then transform it into this shape:

const expected = [
  {
    id: "26144385",
    some: "more",
    other: "misc",
    photos: [
      {
        small: "bar-1",
        medium: "baz-1"
      }
    ]
  },
  {
    id: "26144334",
    some: "even",
    other: "some more",
    photos: [
      {
        small: "bar-2",
        medium: "baz-2"
      },
      {
        small: "fizz-2",
        medium: "buzz-2"
      }
    ]
  }
];

  Note: This might feel super hard. Don't get stuck on it. Try it later
*/
