/*Name:Nansikombi Mary
 Date : 5/07/2023
 Course number :CS 290_001_S2023
 description:Grade distribution lab
 */

/*description:Function  that will change the scores that are in one string to each individual string in the array the string split does the trick
 Date : 5/07/2023
 Course number :CS 290_001_S2023
 description:Use string split to do the splitting of each individual function
 */

function parseScores(scoresString) {
  return scoresString.split(" ");
}
/*description:Function  that will give each individual grade a count and tally them according to the similarities in count.
 Date : 5/07/2023
 Course number :CS 290_001_S2023
 preconditions: Takes in a scores array
 post conditions :Returns the required tallied array with the appropriate count.
 */

   function buildDistributionArray(scoresArray) {
    lettergrade =[0,0,0,0,0];
    // loop the array length

    for (let i=0; i <scoresArray.length; i++){
      let gradescore = parseInt(scoresArray[i]);
      // start giving each score the appropriated index in the array.
      if (gradescore >= 90){
        lettergrade[0]++;
      }
      else if (gradescore >= 80){
        lettergrade[1]++;
      }
      else if (gradescore >= 70){
        lettergrade[2]++;
      }
      else if (gradescore >= 60){
        lettergrade[3]++;
      }
      else{
        lettergrade[4]++;
      }
    }
    return lettergrade;
   }
/*description:Function  that set table contents.
 Date : 5/07/2023
 Course number :CS 290_001_S2023
 preconditions: Takes in a user input
 post conditions :Returns the results according to the desired elements using the right colors in the div attribute while also making sure our count is +10.
 */

function setTableContent(userInput) {
  // initialising the variables were going to use.

   const scores = parseScores(userInput);
   const lettergrade = buildDistributionArray(scores);
   const firstRow = document.getElementById("firstRow");
   const thirdRow = document.getElementById("thirdRow");
   let firstRowHTML= " ";
   let thirdRowHTML= " ";
   // for loop connected to the ditribution array to know the number of elements were actually looping.
for(let i=0; i < lettergrade.length; i++){
  const barClass = `bar${i}`;
  const count = lettergrade[i];
  // height setting it to always increase by 10 and later mapping the height and the bar to their HTML so that the changes actually occur
  const height = count * 10;
  const barHTML = `<div class ="${barClass}" style="height: ${height}px;"></div>`;
  // mapping bar HTML to the first row and doing the exact needed changes to the third row
  firstRowHTML += `<td>${barHTML}</td>`;
  thirdRowHTML += `<td>${count}</td>`;

}
firstRow.innerHTML = firstRowHTML;
thirdRow.innerHTML = thirdRowHTML;
}






setTableContent("45 78 98 83 86 99 90 59");
