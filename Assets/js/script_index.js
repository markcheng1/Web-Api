var body = document.body;
var h1_main_title = document.createElement("h1");
var select_text = document.createElement("div");

h1_main_title.textContent =  "Coding Quiz Challenge";
select_text.textContent = "Please select one answer from each question";
body.appendChild(h1_main_title);
body.appendChild(select_text);

h1_main_title.setAttribute("style", "margin:auto; width:50%; text-align:center;");
select_text.setAttribute("style", "margin:auto; width:50%; text-align:center;");


var submitEl = document.querySelector("#submit");

function showResponse(event) {
  
  event.preventDefault();
 
   location.href = "q1.html";
  //console.log(event);
  //var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  //submissionResponseEl.textContent = response;
}
  

submitEl.addEventListener("click", showResponse);
