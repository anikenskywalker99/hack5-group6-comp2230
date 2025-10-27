/*
    Gurmandeep Kaur
    Aniken Wiens Shepherd
    Robinpreet Kaur
    Triumphant Adebayo
    Dorothy Noble
*/

// Promise
function promiseAsyncOperation(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched after waiting");
        },2000)
    })
}

async function asyncPromiseCall(){
    console.log("Starting async operation...");
    const result = await promiseAsyncOperation();
    console.log(result);
}
asyncPromiseCall();

const myPromise = new Promise((resolve, reject) => {
    const condition = true;
    if(condition){
        resolve("Promise is resolved successfully");
    }else{
        reject("Promise is rejected");
    }
})

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.error(error))

/*
    Async Function for API fetching
*/

async function getQuote() {
    document.getElementById("quote").innerHTML = "";
    document.getElementById("author").innerHTML = "";

    try {
        const response = await fetch("quote.json");

        if(!response.ok){
            throw new Error(`HTTP Error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        const quoteData = data[randomIndex];

        const quoteContent = document.getElementById("quote"); 
        const quoteElement = document.createElement("span");
        const quoteValue = (`${quoteData.text}\n`);
        quoteElement.innerText = quoteValue;
        quoteContent.appendChild(quoteElement);

        const authorContent = document.getElementById("author");
        const authorElement = document.createElement("span");
        const authorValue = (`- ${quoteData.author}`);
        authorElement.innerText = authorValue;
        authorContent.appendChild(authorElement);

    }catch(error){
        console.error("Failed to fetch quotes:", error.message);
    }
}
