const main = document.querySelector("main");

fetch("https://dog.ceo/api/breed/beagle/images/random/8")
  .then((response) => response.json())
  .then((data) => {
    const images = data.message
      .map((img) => `<img src="${img}" alt="Random dog breed">`)
      .join("");
    main.insertAdjacentHTML("beforeend", images);
  });

const jsonObj = {
  name: "Luna",
  occupation: "Developer",
  age: 35,
  isAwesome: true,
};

const jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

const jsonStrigify = `{
  "name": "Luna",
  "occupation": "Developer",
  "age": 35,
  "isAwesome": true
}`

const jsonParse = JSON.parse(jsonStrigify)
console.log(jsonParse)
