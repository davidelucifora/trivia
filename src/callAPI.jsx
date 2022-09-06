export default async function callAPI (numberOfQuestions) {

    const response = await fetch('https://the-trivia-api.com/api/questions?limit=' + numberOfQuestions)
    const data = await response.json()
    
   return data

}
