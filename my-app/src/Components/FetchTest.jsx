import { useState } from "react";
import {url} from "./URL";


// function logError(error) {
//     console.error(error) 
// }

// function catalogueNames(data){
//     console.log(data.results)
//     const nameMap = data.results.map((cryptocurrency, index) => {
//       return {
//         name: cryptocurrency.name,
//         id: index + 1,
//         color: randonlySelectColor()
//       }
//     });
//     console.log(nameMap)
//     tileGenerator(nameMap)
//   }

export function FetchCryptoData(){
    const [CryptoData, setCryptoData] = useState ('');

    fetch(url)
    .then(res => setCryptoData(res.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

        // catalogueNames(data)

// function addCryptoName(cryptoCube, newCryptoCube){
//     const newCryptoH4 = document.createElement('h4');
//     newCryptoH4.classList.add("cube-name");
//     newCryptoH4.innerHTML = cryptoCube.name
//     newCryptoCube.append(newCryptoH4)
//     return newCryptoCube;
// }

// function printCryptoName(cryptoCube){
//     //this is creating a container related to the id of the div in the HTML
//     const container = document.getElementById('main')
//     //this is creating a div in the HTML to house the information
//     const newCryptoCube = document.createElement('div')
//     //add a class to the div so you can asign css properties to it
//     newCryptoCube.classList.add('cube-shape')
//     //call helper functions to add data to the new container
//     addCryptoName(cryptoCube, newCryptoCube)
//     // When the cube is ready, we add it to the list here 
//     container.append(newCryptoCube)
//   }
  
//   function tileGenerator(nameMap){
//     nameMap.forEach(printCryptoName)      
//   }

//   const randonlySelectColor = () => {
//     const colorArray = [
//       'tomato',
//       'orange',
//       'peach',
//       'lemon',
//       'papayawhip'
//     ]
//     const maxLength = colorArray.length
//     const randomArrayNumber = Math.floor((Math.random() * maxLength));
//     return colorArray[randomArrayNumber]
//   }