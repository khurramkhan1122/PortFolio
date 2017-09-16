var personalInfo ={
  name : "<h4>khurram khan </h4> <br>",
  birthday : " <h4>15 - Aug - 1994 </h4> <br>",
  email : " <h4> Donnokhan123456@gmail.com </h4> <br>",
  github : "<h4>github.com/khurram1122 </h4> <br>",
  adress : "<h4>L763 sector 2 North Karachi </h4> <br>",
}
document.getElementById("name").innerHTML = "<h3>Name</h3> : " + personalInfo.name + "<br>";
document.getElementById("birth").innerHTML = "<h3>Birth Day</h3> :" + personalInfo.birthday + "<br>";
document.getElementById("email").innerHTML = "<h3>Email Address</h3> :" + personalInfo.email + "<br>";
document.getElementById("git").innerHTML = "<h3>Github</h3> :" + personalInfo.github + "<br>";
document.getElementById("address").innerHTML ="<h3> Adrress</h3> :" + personalInfo.adress + "<br>";


var aboutMe = {

   about :  "Hello! My name is Khurram Khan, I am a Student of Software Engineering in University of Karachi(SSUET). I am a young & passionate Web Developer. I started Web Development about 9 months ago. I love programming and developing/designing webpages. In a nutshell, that means that I sit at my not so shinny Dell Computer all day long learning and experimenting with new technologies. I focuses on clean & maintainable code using the latest development techniques and principles.This website showcases some of my recent work. It includes UI/UX & Responsive Designs, Dynamic Websites, Angular2 Web Apps, the technologies I used for these projects are HTML, CSS, JavaScript, Firebase",

};
document.getElementById("abtme").innerHTML = aboutMe.about;


var hobbies = {
  learner : "I fully understand the importance of learning new skills and discovering new technologies in order to excel work and create new products with best experience. Therefore I focus on efficient and quick learning in order to unleash my potentials and reach higher points of achievement.",
    newTech : "I am very passionate about new Stuff in Web Development. My plans are to master my skills in Web Application Development using the latest technologies Available like Lareval, Angular2, Firebase, Node.js etc.",
    front : "I am very passionate about new Stuff in Web Development. My plans are to master my skills in Web Application Development using the latest technologies Available like Lareval, Angular2, Firebase, Node.js etc.",

};

document.getElementById("learn").innerHTML = hobbies.learner;
document.getElementById("tech").innerHTML = hobbies.newTech;
document.getElementById("frnt").innerHTML = hobbies.front;


