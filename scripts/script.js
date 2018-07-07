var maxChar = 140;
var nChar = document.querySelector(".char-number");
var profileImg = document.querySelector(".image");
var profileName = document.querySelector(".name");
var profileUser = document.querySelector(".user-name");
var submit = document.querySelector(".submit-btn");
var tweetCount = document.querySelector(".count");
var tweetFeed = document.querySelector(".tweet-feed");
var tweetForm = document.querySelector(".tweet-form");
var tweetInput = document.querySelector(".tweet-input");
var tweetLength;
var tweetCountAtt = 0;

tweetInput.addEventListener("keydown", autoSize);
tweetInput.addEventListener("keydown", countChar);
tweetInput.addEventListener("keypress", countChar);
tweetInput.addEventListener("keyup", countChar);
tweetInput.addEventListener("keydown", disableBtn);
tweetInput.addEventListener("keypress", disableBtn);
tweetInput.addEventListener("keyup", disableBtn);
submit.addEventListener("click", submitTweet);

function autoSize() {
  if (tweetInput.value.length !== 0) {
    setTimeout(function(){
      tweetInput.style = "min-height: 5.2vw; height: auto; padding: 0";
      tweetInput.style = "height:" + tweetInput.scrollHeight + "px";
    },0);
  } else {
    tweetInput.removeAttribute("style");
  }
}

function countChar() {
  tweetLength = tweetInput.value.length;
  nChar.textContent = maxChar - tweetLength;
  if (tweetLength > 140) {
    nChar.style.color = "#999999";
  } else if (tweetLength >= 130 && tweetLength < 140) {
    nChar.style.color = "#FF0000";
  } else if (tweetLength >= 120 && tweetLength < 130) {
    nChar.style.color = "#FFB000";
  } else if (tweetLength < 120) {
    nChar.style.color = "#730099";
  }
}

function disableBtn() {
  if (tweetInput.value ==="" || tweetInput.value.length > 140 || !tweetInput.value.trim()) {
    submit.disabled = true;
    submit.style.opacity = "0.5";
    submit.style.cursor = "not-allowed";
  } else {
    submit.disabled = false;
    submit.style.opacity = "1";
    submit.style.cursor = "auto";
  }
}

function submitTweet() {
  var newPost = document.createElement("div");
  var newTweet = document.createElement("div");
  var newInfo = document.createElement("div");
  var newTweetText = document.createElement("p");
  var newDate = document.createElement("small");
  var newImg = document.createElement("div");
  var newName = document.createElement("h1");
  var newUser = document.createElement("h2");

  newTweetText.textContent = tweetInput.value;
  newDate.textContent = moment().format("DD/MM/YYYY, HH:mm");
  newName.textContent = profileName.textContent;
  newUser.textContent = profileUser.textContent;

  newPost.classList.add("tweet-feed-content");
  newImg.classList.add("tweet-image");
  newTweet.classList.add("new-tweet");
  newInfo.classList.add("tweet-info");
  newName.classList.add("tweet-name");
  newUser.classList.add("tweet-user");
  newDate.classList.add("tweet-date");
  newTweetText.classList.add("post-tweet");

  tweetFeed.prepend(newPost);
  newPost.appendChild(newImg);
  newPost.appendChild(newTweet);
  newTweet.prepend(newInfo);
  newInfo.appendChild(newName);
  newInfo.appendChild(newUser);
  newInfo.appendChild(newDate);
  newTweet.appendChild(newTweetText);

  tweetFeed.style.visibility = "visible";
  tweetCount.textContent = tweetCountAtt += 1;
  tweetForm.reset();
  tweetInput.removeAttribute("style");
  nChar.textContent = maxChar;
  submit.disabled = true;
  submit.style.cursor = "not-allowed";
  submit.style.opacity = "0.5";
}
