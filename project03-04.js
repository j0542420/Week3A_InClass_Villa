/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Jose Villa
      Date:   4/2/2025

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];
/* step 3 adding a function with a perameter*/
function starImages(rating){
      let imageText = "";
      for (let i=0;i<rating;i++){
            "<img scr= 'star.png' alt = >" = imageText;
      }
      return;
}
/* step 5, creating a for loop to increase the rating*/
for (let i=0;i<reviews.length;i++){
      let reviewCode="";
      /* step 6 else if statement to change the table depending on the value*/
      if(reviewType = "p"){
            text = "<table class = 'prime";
      }else if(reviewType = "N"){
            text = "<table class = 'new";
      }else{
            text = "<table>";
      }
      <table>

      </table>
      /* step 6C adding htmlCode to the value of revieCode*/
      reviewCode += "<caption>" + reviewTitles[i] + "</Caption>";
      reviewCode += "<tr><th>By</th><td" + reviewers[i] + "</td></tr>";
      reviewCode += "<tr><th>Review Date<>/th<td>" + reviewDates[i] + "</td></tr>";
      reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
      reviewCode += "<tr><td>colspan='2" + reviews[i] + "</td></tr>";
      reviewCode += "</table>";
}