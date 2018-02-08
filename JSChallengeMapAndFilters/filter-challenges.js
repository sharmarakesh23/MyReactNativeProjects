/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/

/* Do  npm i json-loader --save-dev
In case you could not load json
*/

const profilesData = require("./data/shaadiData.json");
console.log(profilesData)

/*
  Challenge 1.1 - write a function that gets only the 
  user profiles who have never been married

  Expected const brazilUserProfiles = []
*/

const brazilUserProfiles = profilesData.data.filter((profile) => {
  console.log(profile);
return profile.mini_profile.marital_status == "Never Married"
});
console.log (brazilUserProfiles);

/*
  Challenge 1.2 - write a function that gets only the 
  user profiles with college education

  Parse this piece of education data from the loaded json to return an array 

  "education": {
  "education": "High school - Arts",
  "education_stream": "Arts",
  "college_university": "",
  "college_1": "",
  "valid_college_1": "No",
  "college_2": "",
  "valid_college_2": "No"
}

  Expected const collegeUserProfiles = []
*/

console.log();

/*
  Challenge 1.3 - write a function that gets only the 
  user profiles with more than one photo

  Expected const profilesWithMultiplePhotos = [] <-- nat field equals BR
  

*/

console.log();
