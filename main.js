//  "PROJECT REQUIEMENTS AND ALGORITHM" EXERCISE 

/*
    Define a variable named `notes` and assign a value of an empty array
*/

//  DIYA'S NOTE: I made a variable called "notes" and assigned an array to it; empty for now
//  DIYA'S NOTE: Here's what that looks like... 

//  const notes = []

/*
    Fill the array with several starter objects that have
    the following properties. 
*/

//  DIYA'S NOTE: I filled the "notes" array with properties (e.g. id) and property values. 
//  DIYA'S NOTE: For the "topics" property, made an array of strings. 


const notes = [

    {

    id: 1, 
    text: "I took many different subjects in high school.", 
    author: "diya o\'brien", 
    date: "september 28, 2022", 
    topics: ["math", "science", "english literature", "history"] 

    }

]
    

/* 
    Either define the objects within the initial array or use the .push() method to 
    add them after initialization.
*/

//  DIYA'S NOTE: I'm not 100% sure what "define" means here. 
//  DIYA's NOTE: It sounds like I need to list the object with it's properties and values.
//  DIYA'S NOTE: I can use a "for..." loop and console log the value of notes for this. 

//Here's what that looks like: 

for (note of notes) {
    console.log(notes)
}

//  DIYA'S NOTE: If I use the ".push()" method, use dot notation with properties to show values. 
//  DIYA'S NOTE: Then use string interpolation to add them and console log to show final result.


//  DIYA'S NOTE: I think the understand the instructions better now.
//  DIYA'S NOTE: I could either put the property and property values in the initial array
//  DIYA'S NOTE: OR leave array blank and use ".push()" to add the property and property values. 

//  DIYA'S NOTE: I'm adding a new object to test this. This should work the same as if the aray was empty.

//     notes.push(

        
//         {
//             id: 2, 
//             text: "college subjects", 
//             author: "diya o\'brien", 
//             date: "september 28, 2022", 
//             topics: ["accounting 101", "japanese 101", "american literature 101", "british literature 101"]

//         }
// )
//     console.log(notes); 

//  DIYA'S NOTE: Here's what it would look like if the array is empty originally. 

const middleSchool = []

middleSchool.push(
    {
        id: 3, 
        text: "middle school subjects", 
        author: "diya o\'brien", 
        date: "september 28, 2022", 
        topics: ["geography", "spanish 101", "bible study", "enligsh literature"] 
    }
)

console.log(middleSchool) 

//  "NOTE OBJECTS AND ARRAY" EXERCISE 

//  DIYA'S NOTE: I need to (1) create three objects. 
//  DIYA'S NOTE: I need to (2) add them to the "notes" array via the ".push()" method. 

notes.push (
    
    {

        id: 4, 
        text: "I had a routine that I did every day after school.", 
        author: "diya o\'brien", 
        date: "september 28, 2022", 
        topics: ["have a snack", "do homework", "take a shower", "eat dinner", "sleep"]
    }, 
    {

        id: 5,
        text: "On the weekend, I generally like to relax with friends and take care of household chores.", 
        author: "diya o\'brien", 
        date: "september 28, 2022", 
        topics: ["meet friends", "buy groceries, ", "do laundry"]
    }, 
    {

        id: 6,
        text: "I am taking a vacation for spring break and will do fun things!", 
        author: "diya o\'brien", 
        date: "september 28, 2022", 
        topics: ["meet friends", "go to the beach", "see a concert", "family reunion"]
    }

) 

console.log(notes)

//  DIYA'S NOTE: I got the code to work and the new objects are part of the notes array! 
//  DIYA'S NOTE: It looks like I did it differently than the hint shows, but seems fine. 
//  DIYA'S NOTE: The only difference is that the hint shows each new object "pushed" separately.
//  DIYA'S NOTE: I "pushed" all the new objects together at the same time. 

//  "LIST OF NOTES" EXERCISE  

//  DIYA'S NOTE: I need to go through the elements of the array and show the "text" property value.
//  DIYA'S NOTE: I am looping through each "note" or property in the notes array using the "for...of" loop.
//  DIYA'S NOTE: With dot notation, I go inside each property and get the value. 
//  DIYA'S NOTE: I want the "text" propery value. 
//  DIYA'S NOTE: I console log (note.text) to go into each "note" object, look up its "text" property, get its' value.

for (const note of notes) {
    console.log(note.text)
}

// "LIST OF TOPICS" EXERCISE 

//  DIYA'S NOTE: The 1st "for...of" loop goes through each note and its properties
//  DIYA'S NOTE: The 2nd "for...of" loop needs to go through topic property in each note and give me the value

console.log("*** All Note Topics ***")

for (const note of notes ) {
    for (topic of note.topics) {
    }
    console.log(note.topics)
} 

//  DIYA'S NOTE: When I run the code, it shows the answers in array form. I think this is expected based on how I wrote it.
//  DIYA'S NOTE: I did an experiment where I changed one of the "topics" properties in a note to only one string value. 
//  DIYA'S NOTE: When I did this, the property value printed out like the solution example shows in daily notes. 

//  "AVERAGE TOPICS PER NOTE"

console.log("*** Average Topics Per Note ***") 

//  DIYA'S NOTE: The result should be an integer number. 
//  DIYA'S NOTE: We're looping through arrays and need something in an array, so use a "for...of" loop within a "for...of" loop
//  DIYA'S NOTE: We're looking for averages, similar to the traveling-salesman problem... 
//  DIYA'S NOTE: Maybe the ".length" property would be helpful because we need to see how many topics are in a note

let totalNumTopics = 0 

for (const note of notes) {
    totalNumTopics = totalNumTopics + topic.length
} 

const averageNumTopics = totalNumTopics / topic.length 
console.log(averageNumTopics) 


//  DIYA's NOTE: It turns out we didn't need a "for loop..." within a "for...loop"
//  DIYA'S NOTE: I guess this is because we're not trying to pull a value within another array like with topics? 
//  DIYA'S NOTE: We're just counting how many things are in each topic, not pulling the direct value? 

//  "LIST OF NOTE BY TOPICS" EXERCISE 

//  DIYA'S NOTE: It sounds like the ".includes" method will be helpful here; saw this in the coffee order problem... 
//  DIYA'S NOTE: We will also need the ".includes" method like we used in the coffee exercise 

const filteredNotes = []
const criteria = "meet friends" //DIYA'S NOTE: We will change the value here when we want to find different things. 

//  DIYA'S NOTE: I am looping through the note objects in my notes array 
//  DIYA'S NOTE: I am going into a note object, looking at the topics property
//  DIYA'S NOTE: If it includes the criteria I named (in the criteria variable), I want the object with that info. pushed...
//  DIYA'S NOTE: into the filtered notes array, so it give me the objects with the topics that have the criteria I want

for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note) 
    } 
}

console.log(filteredNotes)

//  "HTML NOTE ARTICLES" EXERCISE 

/* 

    GOAL: you are going to be constructing some strings in this chapter that contain the <article> element, 
    with the text from each note contained (interpolated) inside it. 
    
    DIYA'S NOTE: So the TEXT from the notes should be inside the article tags. 

*/ 


//  DIYA'S NOTE: I'm breaking down the instructions and what I think it means. 

//  Start with a new output section using the following code at the bottom of your file.
//  console.log("***  Note Articles  ***") 
//  DIYA'S NOTE: THIS SHOULD BE THE FIRST BIT OF CODE. EVERYTHING ELSE GOES UNDERNEATH IT. 

//  Then iterate the notes array again. 
//  DIYA'S NOTE: I SET UP THE FOR LOOP TO GO THROUGH NOTE OBJECTS IN THE NOTES ARRAY. NOTHING IN THE CURLY BRACES YET.

//  On each iteration, use console.log() to display the text of each note, but surrounded by an article HTML element.
//  DIYA'S NOTE: THIS GOES INSIDE THE CURLY BRACES, because this is what should happen for each loop with each object.
//  DIYA'S NOTE: Also, we are only looking for the "text" property of each note. Use dot notation to target this.
//  DIYA'S NOTE: Add article tags AROUND the dot notation part in the curly braces. Need string interpolation here. 

console.log("***  Note Articles  ***")  

for (const note of notes ) {
    console.log(`<article>${note.text}</article>`)
}

// "NOTE TOPICS SUBSECTION"

/* 

    GOAL: Now you need to create some <section> HTML elements for each note article.

*/ 

//  DIYA'S NOTE: I'm breaking down the instructions and what I think it means. 

//  Update the code that you wrote in the last section to include each topic, contained in a child <section> element for each note. 
//  DIYA'S NOTE: We're starting with the SAME code we made in the "HTML NOTE ARTICLES" EXERCISE. Just copy/paste. 
//  DIYA'S NOTE: We're only adding a child <section> element/tag to it. It will be a subsection and go under <article>.

//  You will need to use a nested for..of loop again. 
//  DIYA'S NOTE: The 2nd for...loop adds <section> tags inside the 1st loop's curly brace, under console log article line.
//  DIYA'S NOTE: Based on the example, each TOPICS part in each note object should be in separate section tag. 
//  DIYA'S NOTE: Use dot notation to go to a note object and grab the "topics" part, notes.topics, but put section tags around that.

//  Also, update the output to be a multi-line string using string templates.
//  DIYA'S NOTE: We need to ADD up the string from the texts/articles with the topics/sections.
//  DIYA'S NOTE: To have a final combined string from the text/articles and topics/sections, we need a new empty variable FIRST.
//  DIYA'S NOTE: Use string interpolation here. The "output" should be the parts that are console logged. 


console.log("***  Note Articles  ***")  

let allHTML = ""

for (const note of notes ) { //reminder: looping through to get to each "note" in the notes array
    allHTML += `<article>\n${note.text}\n` //reminder: this makes the 1st part of the string
    for (topic of note.topics) { // reminder: looping through to get each topic listed in the "topics" piece of each individual "note" object
        const section = `<section>${topic}</section>\n` //reminder: creating a variable to hold the sections we are creating, so we can add it on to the 1st part of the string
        allHTML += section // reminder: this makes the 2nd part of the string 
    }  
    allHTML += `</article>\n`  //reminder: completing the final string outside of the for loop
} 

console.log(allHTML) 

/*

    DIYA'S NOTE: The "\n" pieces (which stand for "new line" and create new lines in the code) make the code display 
    like it would in HTML. If you were running the code in HTML, you wouldn't need the "\n" pieces -- the HTML file 
    would just do it natually. But because this is javascript, we need the "\n" pieces to make it look correct. 

*/ 