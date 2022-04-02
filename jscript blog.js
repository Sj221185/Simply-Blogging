let signup = document.querySelector("#signup");
let write = document.querySelector("#write");
let body = document.querySelector("body");
let signupbtn = document.querySelector("#id02");
let jumpLogin = document.querySelector("#log");
let loginbtn = document.querySelector("#id01");
let signupform = document.querySelector("#signupform");
let editorBtn = document.querySelector(".editor");
let googleSignupBtn = document.querySelector(".g-signin2");
let home = document.querySelector(".content");
let mainHome = document.querySelector(".main-container");
let editor = document.querySelector(".main-container-editor");
let backBtn = document.querySelector("#back");
let signback = document.querySelector("#sign");
let publishBtn = document.querySelector("#publishBtn");
let loaderBtn = document.querySelector(".loader-div");
let loader = document.querySelector(".loader");
let extra = document.querySelector(".extra");
var heading = document.querySelector(".heading-blog");
let category = document.querySelector(".category");
var blog_type = document.querySelector("#blog-type");
var blogText = document.querySelector(".input");
var authorName = document.querySelector(".authorinput");
var blog_name = document.querySelector(".name_blog");
// signup and login
// let flag = false;

let codingblogs = [];
let Articlesblogs = [];
let technologyblogs = [];
let Culturalblogs = [];


codingblogs = [
  {
    Name: "Java Constructor",
    topictext: "This is a blog on java constructor",
    author: "~ Wipro Team",
    text: `In this Java tutorial, we are going to discuss everything that you must know about a Constructor in Java. Constructor in Java is a block of code that creates an object. We can also call it an Object Builder.They are similar to methods in Java but they differ from methods in the fact that they do not have a return type like methods.
    
    In this article, we will learn what a constructor is, the need for constructors, its types, and the rules for writing constructors in Java. We will also cover some other topics like Constructor Overloading and Constructor Chaining.
    
    We will also see how the methods are different from the constructors in Java. A Constructor is a member function which has the same name as its class and is used to initialize the object of that class type with the legal initial value.”

    A constructor is a member function of a class that is called for initializing objects when we create an object of that class. It is a special type of method that instantiates a newly created object and just after the memory allocation of this object takes place, the constructor is called.`,
  },
  {
    Name: "Python",
    topictext: "This is a blog on python constructor",
    author: "~ Simplilearn",
    text: `In this Java tutorial, we are going to discuss everything that you must know about a Constructor in Java. Constructor in Java is a block of code that creates an object. We can also call it an Object Builder.They are similar to methods in Java but they differ from methods in the fact that they do not have a return type like methods.
    
    In this article, we will learn what a constructor is, the need for constructors, its types, and the rules for writing constructors in Java. We will also cover some other topics like Constructor Overloading and Constructor Chaining.
    
    We will also see how the methods are different from the constructors in Java. A Constructor is a member function which has the same name as its class and is used to initialize the object of that class type with the legal initial value.”

    A constructor is a member function of a class that is called for initializing objects when we create an object of that class. It is a special type of method that instantiates a newly created object and just after the memory allocation of this object takes place, the constructor is called.`,
  },
];
technologyblogs = [
  {
    Name: "Adaptive Tech",
    topictext: "Acer Nitro 5 launched in India with up to 12th Gen Intel i7 CPUs: Price and Specs. Mar 31, 2022.",
    author: " ~ Sumit",
    text: ""
  },
  {
    Name: "Informative tech",
    topictext: ". WhatsApp voice messages gets six new features. Mar 31, 2022.",
    author: " ~ Alice",
    text: ""
  }
];
Articlesblogs = [
  {
    Name: "Trending",
    topictext: "IT major Wipro's profit for March 2021 quarter jumps 27.7% to Rs 2,972 crore",
    author: "~ FirstPost",
    text: ""
  },
  {
    Name: "Net Profit",
    topictext: "Wipro net profit up 20.8 percent to Rs 2,968 crore for December 2020 quarter",
    author: "~ Satyajeet Ray",
    text: ""
  }
];
Culturalblogs = [
  {
    Name: "Life At Wipro",
    topictext: "We are shaped not by what we say, but what we do",
    author: "~ Azim Premji",
    text: ""
  },
  {
    Name: "Simplilearn Work Culture",
    topictext: "Everyones open to learning & a great work environment",
    author: "~ nidhi",
    text: ""
  },
]


blog_type.onchange = function () {
  category.value = blog_type.value;
}

write.addEventListener("click", function () {
  mainHome.style.display = "none";
  editor.style.display = "block";

  loaderBtn.style.display = "none";
  loader.style.display = "none";
});

// write.addEventListener("click", (e) => {
// e.preventDefault();

backBtn.addEventListener("click", function () {
  editor.style.display = "none";
  mainHome.style.display = "block";
  editorBtn.style.display = "none";
});
// });

let output = document.querySelector(".input");
let buttons = document.getElementsByClassName("menu-icon");
let fonts = document.getElementById("font-size");
let p;
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd == "createlink") {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }
  });
}

publishBtn.addEventListener("click", function () {
  if (blogText.value == "") {
    alert("Please write something to publish....!");
    return;
  }
  loaderBtn.style.display = "block";
  loader.style.display = "block";

  var obj = {
    Name: blog_name.value,
    topictext: heading.value,
    author: authorName.value,
    text: blogText.value
  }
  console.log(obj)
  if (blog_type.value == "Coding") {
    codingblogs.push(obj);
  } else if (blog_type.value == "Articles") {
    Articlesblogs.push(obj);
  } else if (blog_type.value == "Technology") {
    technologyblogs.push(obj);
  } else {
    Culturalblogs.push(obj);
  }

  setTimeout(() => {
    editor.style.display = "none";
    mainHome.style.display = "block";
  }, 2000);
});

let coding = document.querySelector("#coding");
let Articles = document.querySelector("#Articles");
let technology = document.querySelector("#Technology");
let cultural = document.querySelector("#Cultural");
let mainHead = document.querySelector(".heading");







coding.addEventListener("click", function () {
  coding.classList.add("select");
  Articles.classList.remove("select");
  technology.classList.remove("select");
  cultural.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < codingblogs.length; i++) {
    c += ` <div class="article" id="arts="article" id="art-1">
<h2>${codingblogs[i].Name}</h2>
<div class="para-text"><p>${codingblogs[i].topictext}</p></div>
<h3>${codingblogs[i].author}</h3>
</div> `
  }

  home.innerHTML = `<div class="all-articles">
${c} </div>`;
  let art = document.querySelector(".article");
  art.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("bigBlog");
    div.innerHTML = `<textarea class="blogtext" disabled>
            ${codingblogs[0].text}
            </textarea>`;
    home.appendChild(div);
  });

});

Articles.addEventListener("click", function () {
  Articles.classList.add("select");
  coding.classList.remove("select");
  technology.classList.remove("select");
  cultural.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < Articlesblogs.length; i++) {
    c += `<div class="article" id="art-1">
    <h2>${Articlesblogs[i].Name}</h2>
    <div class="para-text"><p>${Articlesblogs[i].topictext}</p></div>
    <h3>${Articlesblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
     ${c}
</div>`;
});

technology.addEventListener("click", function () {
  technology.classList.add("select");
  Articles.classList.remove("select");
  coding.classList.remove("select");
  cultural.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (i = 0; i < technologyblogs.length; i++) {
    c += ` <div class="article" id="art-1">
    <h2>${technologyblogs[i].Name}</h2>
    <div class="para-text"><p>${technologyblogs[i].topictext} </p></div>
    <h3>${technologyblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
   ${c}
</div>`;
});

cultural.addEventListener("click", function () {
  cultural.classList.add("select");
  Articles.classList.remove("select");
  technology.classList.remove("select");
  coding.classList.remove("select");
  home.innerHTML = "";
  var c = '';
  for (var i = 0; i < Culturalblogs.length; i++) {
    c += ` <div class="article" id="art-1">
    <h2>${Culturalblogs[i].Name}</h2>
    <div class="para-text"><p>${Culturalblogs[i].topictext} </p></div>
    <h3>${Culturalblogs[i].author}</h3>
</div>`
  }
  home.innerHTML = `<div class="all-articles">
   ${c}
</div>`;
});

mainHead.addEventListener("click", function () {

  cultural.classList.remove("select");
  Articles.classList.remove("select");
  technology.classList.remove("select");
  coding.classList.remove("select");
  
  let auth = "~ Azim Premji";
  home.innerHTML = `<div class="image-content">
    <div class="left-side"><img src="../Images/timeline.jpg"></div>
    <div class="right-side">
        <div class="image"><img src="../Images/technology-4256272_1920-1004x670.jpg"></div>
        <div class="image"><img src="../Images/Wipro-overview-1200x627.png"></div>
    </div>
</div>
<div class="quotes">
    "${str}
    <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${auth};
</div>`;
});





