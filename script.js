const btns = document.querySelectorAll(".header-links");
btns.forEach((btnn) => {
  btnn.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    btnn.classList.add("active");
  });
});

const pop = document.createElement("div");
pop.id = "pop";
document.body.appendChild(pop);
const images = document.querySelectorAll(".pop-image");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    pop.classList.add("active");

    const img = document.createElement("img");
    img.src = image.src;
    img.style.height = "60%";
    img.style.width = "71%";
    img.style.border = "6px solid orange";
    img.style.borderRadius = "20px";

    const divv = document.createElement("div");
    divv.style.fontSize = "4rem";
    divv.style.color = "green";
    divv.style.fontFamily = 'Azeret Mono", monospace';
    divv.innerText = "Dish Name";

    const divv1 = document.createElement("div");
    divv1.style.fontSize = "4rem";
    divv1.style.color = "green";
    divv1.style.fontFamily = 'Azeret Mono", monospace';
    divv1.innerText = "Price: Rs...";

    while (pop.firstChild) {
      pop.removeChild(pop.firstChild);
    }

    pop.appendChild(img);
    pop.appendChild(divv);
    pop.appendChild(divv1);
  });
});

pop.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  pop.classList.remove("active");
});

document.getElementById("btn-1").addEventListener("click", () => {
  const space = document.getElementById("about-us-empty-space");
  if (space.classList.contains("hide")) {
    space.classList.remove("hide");
    space.innerText =
      "Lorem ipsum dolor sit amet confacilis possimus explicabo quidem repellendus soluta numquam, obcaecati eos illum sint ducimus repudiandae harum quam recusandae culpa!";
    space.style.fontWeight = "bold";
    space.style.textAlign = "center";
    space.style.margin = "4px";
    space.style.color = "white";
    space.style.backgroundColor = "blue";
    space.style.padding = "10px";
    space.style.borderRadius = "10px";
    space.style.fontSize = "2rem";
  } else {
    console.log("opop");
    space.classList.add("hide");
  }
});

document.getElementById("btn-2").addEventListener("click", () => {
  const space = document.getElementById("about-us-empty-space");
  if (space.classList.contains("hide")) {
    space.classList.remove("hide");
    console.log("yo");
    space.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore repellat ad nisi facilis possimus explicabo quidem repellendus soluta numquam, obcaecati eos illum sint ducimus repudiandam sint ducimus repudiandae harum quam recusandae culpa!";
    space.style.fontWeight = "bold";
    space.style.textAlign = "center";
    space.style.margin = "4px";
    space.style.color = "white";
    space.style.backgroundColor = "crimson";
    space.style.padding = "10px";
    space.style.borderRadius = "10px";
    space.style.fontSize = "2rem";
  } else {
    console.log("opop");
    space.classList.add("hide");
  }
});

document.getElementById("btn-3").addEventListener("click", () => {
  const space = document.getElementById("about-us-empty-space");
  if (space.classList.contains("hide")) {
    space.classList.remove("hide");
    space.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempore repellat ad nisi facilis possimus explicabo quidem repellendus soluta numquam, obcaecati eos illum sint et consectetur adipisicing elit. Saepe tempore repellat ad nisi facilis possimus explicabo quidem repellendus illum sint ducimus repudiandae harum quam recusandae culpa!";
    space.style.fontWeight = "bold";
    space.style.textAlign = "center";
    space.style.margin = "4px";
    space.style.color = "white";
    space.style.backgroundColor = "green";
    space.style.padding = "10px";
    space.style.borderRadius = "10px";
    space.style.fontSize = "2rem";
  } else {
    space.classList.add("hide");
  }
});

const doc = document.getElementById("header");
let prevpos = window.pageYOffset || document.documentElement.scrollTop;
window.onscroll = function () {
  let crntpostion = window.pageYOffset || document.documentElement.scrollTop;
  if (prevpos > crntpostion) {
    doc.style.opacity = "0.9";
  } else {
    doc.style.opacity = "0.6";
  }
  prevpos = crntpostion;
};

const pop1 = document.createElement("div");
pop1.id = "pop1";
document.body.appendChild(pop1);
const images1 = document.querySelectorAll(".imgg");
images1.forEach((image) => {
  image.addEventListener("click", (e) => {
    pop1.classList.add("active");
    const constDiv = document.createElement("div");
    constDiv.style.display = "flex";
    constDiv.style.borderRadius = "20px";
    constDiv.style.border = "5px solid blue";
    constDiv.style.boxShadow = "4px 4px #333";

    const imgDiv = document.createElement("img");
    imgDiv.style.width = "40%";
    imgDiv.style.height = "40%";
    imgDiv.style.borderRadius = "20px";
    imgDiv.src = image.src;

    const pDiv = document.createElement("p");
    pDiv.style.fontFamily = `Azeret Mono", monospace`;
    pDiv.style.textAlign = "center";
    pDiv.style.fontWeight = "bold";
    pDiv.style.margin = "15px";
    pDiv.style.fontSize = "1.8rem";
    pDiv.style.color = "#333";
    pDiv.style.backgroundColor = "yellow";
    pDiv.style.borderRadius = "10px";
    pDiv.style.textShadow = "1px 1px white";
    pDiv.style.width = "99%";
    pDiv.style.position = "relative";
    pDiv.style.bottom = "10px";
    pDiv.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit culpaface    architecto qui amet delectus aspernatur eos blanditiis Quisquae Lorem ipsum dolor sit amet consectetur io numquam unde dictaveniam alias Lorem ipsum dolor sit amet consectetur adipisicing elit culpaface architecto qui amet delectus aspernatur eos blanditiis Quisquae Lorem ipsum dolor sit amAfacilis voluptatum officia ipsum recusandae odio numquam unde dictaveniam alias";

    while (pop1.firstChild) {
      pop1.removeChild(pop1.firstChild);
    }

    pop1.appendChild(constDiv);
    pop1.appendChild(imgDiv);
    pop1.appendChild(pDiv);
  });
});

pop1.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  pop1.classList.remove("active");
});

formform.addEventListener("submit", (e) => {
  const form_name = document.getElementById("name");
  let span1 = document.getElementById("form-span-1");
  let span2 = document.getElementById("form-span-2");
  if (form_name.value === "") {
    span1.innerHTML = "Please enter the name...";
    span1.style.color = "red";
  } else {
    span1.innerHTML = "";
  }
  const form_email = document.getElementById("email");
  if (form_email.value === "") {
    span2.innerHTML = "Please enter the name...";
    span2.style.color = "red";
  } else {
    span2.innerHTML = "";
  }
  e.preventDefault();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("form-span-1").innerHTML = "";
  document.getElementById("form-span-2").innerHTML = "";
});

document.getElementById("close-btn").addEventListener("click", () => {
  console.log("df");
  const hdr = document.getElementById("header");
  if (hdr.style.display === "none") {
    hdr.style.display = "flex";
  } else {
    hdr.style.display = "none";
  }
});
