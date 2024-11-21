

function boy(){
    var body = document.body;
var image = document.getElementById("image");
var title = document.getElementById("desc-title");
var description = document.getElementById("description");
    body.classList.remove("rye");
    body.classList.remove("bilbo");
    body.classList.add("oswald");
    description.style.backgroundColor = "";
    body.style.backgroundColor = "";
    body.style.color = "";
    image.src = "./boy.jpeg"
    title.innerHTML = "Multi-talented Senior High School Student";
    description.innerHTML = " Dylan L. Mangubat, a 16-year-old Senior High School STEM student at Luciano B. Rama Senior Memorial National  High School, was part of the Special Science Class from Grade 7 to 10. He enjoys drawing, despite finding it challenging to match colors, and loves playing chess with friends, honing his strategic thinking. As a member of the school's athletics team, he values teamwork and discipline, balancing academics, hobbies, and sports to grow as a well-rounded individual.";
}

function girl(){
    var body = document.body;
var image = document.getElementById("image");
var title = document.getElementById("desc-title");
var description = document.getElementById("description");
    body.classList.remove("oswald");
    body.classList.remove("bilbo");
    body.classList.add("rye");
    body.style.backgroundColor = "#c8a8e9";
    body.style.color = "#000";
    image.src = "./girl.jpeg";
    description.style.backgroundColor = "#c3c7f4";
    description.innerText = "Lalyn L. Mangubat, an 18-year-old first-year college student at the University of Cebu-Main, is part of the College of Computer Studies, pursuing a Bachelor of Science in Information Technology (BSIT). Though she has embraced her path in IT, she once dreamt of a career in the medical field. Determined and fearless, Lalyn faces challenges head-on, embodying a strong and resilient spirit. She has a soft spot for the elegance of roses, but fresh lumpia is definitely not her thing. Lalyn is a blend of ambition and authenticity, carving her own path with grace and tenacity.";
    title.innerText = "Resilient Dreamer";
}


function old(){
    var body = document.body;
var image = document.getElementById("image");
var title = document.getElementById("desc-title");
var description = document.getElementById("description");
    body.classList.remove("oswald");
    body.classList.add("bilbo");
    body.classList.remove("rye");
    body.style.backgroundColor = "#976d5d";
    image.src = "./ojisan.jpeg";
    description.style.backgroundColor = "#eac599";
    description.innerText = "Marc Eugene J. Dacua, a first-year college student at the University of Cebu - Main, enrolled in the College of Computer Studies. With a natural curiosity and a love for learning new things, Marc Eugene chose to pursue Information Technology, inspired by his passion for computers. He is a dreamer with big plans, actively building the foundation of his own life with determination and purpose. Guided by the phrase, Get back up and keep moving forward,' Marc Eugene embodies resilience and optimism. While he thrives in exploration and growth, he has one simple dislike: the dark.";
    title.innerText = "Driven Dreamer";
    body.style.color = "#000";

}
