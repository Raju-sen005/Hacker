setTimeout(() => {
  let question1 = prompt("Enter your name");
  
  let question2 = prompt("enter your mobile no.");
  let question3 = prompt("Enter your Gender");
  console.log(question1, question2, question3);
  setTimeout(() => {
    document.write("<br/> Hacking the device...please wait...<br/>");
    document.body.style.backgroundColor = "green";
    document.body.style.fontFamily = "'Courier New', Courier, monospace";
    document.body.style.color = "red";
    document.body.style.fontSize = "larger";
  }, 1500);
  setTimeout(() => {
    document.write("fetching  all the device data...<br/>");
  }, 3000);
  setTimeout(() => {
    document.write(`${question1}'s  device hacking...<br/>`);
  }, 5000);
  setTimeout(() => {
    document.write(
      `${question1}  (+91 ${question2})   device hack successfully.<br/>`
    );
  }, 7000);
  setTimeout(()=>{
    document.write("&#128520")
  },0)
}, 0);
