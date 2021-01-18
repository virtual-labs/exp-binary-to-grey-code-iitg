 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1.A code converter is a logic circuit that:", ///// Write the question inside double quotes
            answers: {
                a: "Inverts the given input", ///// Write the option 1 inside double quotes
                b: "Converts into decimal number", ///// Write the option 2 inside double quotes
                c: "Converts data of one type into another type",
                d: "None of the Mentioned",
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2.The primary use for Gray code is ",  ///// Write the question inside double quotes
      answers: {
        a: "Coded representation of a shaft’s mechanical position",                  ///// Write the option 1 inside double quotes
        b: "Turning on/off software switches",                  ///// Write the option 2 inside double quotes
        c: "To represent the correct ASCII code to indicate the angular position of a shaft on rotating machinery", 
        d: "To convert the angular position of a shaft on rotating machinery into hexadecimal code", 
      
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
 {
      question: "3.Why is the Gray code more practical to use when coding the position of a rotating shaft?",  ///// Write the question inside double quotes
      answers: {
        a: "All digits change between counts",                  ///// Write the option 1 inside double quotes
        b: "Two digits change between counts",                  ///// Write the option 2 inside double quotes
        c: "Only one digit changes between counts", 
        d: "None of the Mentioned", 
      
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },



     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
