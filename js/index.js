// close button
var closeButton = document.getElementsByTagName("LI");
var i;
for (i = 0; i < closeButton.length; i++) {
  var span = document.createElement("SPAN");
  var button = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(button);
  closeButton[i].appendChild(span);
}

// delete option
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// done && checked list
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);



function newElement() {
  var li = document.createElement("li");
  var task = document.getElementById("task").value;
  var addTask = document.createTextNode(task);
  li.appendChild(addTask);

  if (task === "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }

  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var button = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(button);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
