const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");

star1.addEventListener("click", () => {
  star1.classList.add("colored");
  star2.classList.remove("colored");
  star3.classList.remove("colored");
  star4.classList.remove("colored");
  star5.classList.remove("colored");
});

star2.addEventListener("click", () => {
  star1.classList.add("colored");
  star2.classList.add("colored");
  star3.classList.remove("colored");
  star4.classList.remove("colored");
  star5.classList.remove("colored");
});

star3.addEventListener("click", () => {
  star1.classList.add("colored");
  star2.classList.add("colored");
  star3.classList.add("colored");
  star4.classList.remove("colored");
  star5.classList.remove("colored");
});

star4.addEventListener("click", () => {
  star1.classList.add("colored");
  star2.classList.add("colored");
  star3.classList.add("colored");
  star4.classList.add("colored");
  star5.classList.remove("colored");
});

star5.addEventListener("click", () => {
  star1.classList.add("colored");
  star2.classList.add("colored");
  star3.classList.add("colored");
  star4.classList.add("colored");
  star5.classList.add("colored");
});

function getName() {
  const reviews = document.getElementById("reviews");
  const p = document.createElement("p");
  reviews.appendChild(p);
  let username = document.getElementById("username").value;
  const nameTxt = document.createTextNode(username);
  p.appendChild(nameTxt);
  document.getElementById("username").value = "";
}

function getDate() {
  const reviews = document.getElementById("reviews");
  const p = document.createElement("p");
  reviews.appendChild(p);
  let today = new Date();
  const todayTxt = document.createTextNode(today);
  p.appendChild(todayTxt);
  p.classList.add("date");
}

function getComment() {
  const reviews = document.getElementById("reviews");
  const p1 = document.createElement("p1");
  reviews.appendChild(p1);
  p1.classList.add("p1-font");
  let comment = document.getElementById("comment").value;
  const commentTxt = document.createTextNode(comment);
  p1.appendChild(commentTxt);
  document.getElementById("comment").value = "";
}

const postButton = document.getElementById("post-comment");

postButton.addEventListener("click", getName);
postButton.addEventListener("click", getDate);
postButton.addEventListener("click", getComment);
