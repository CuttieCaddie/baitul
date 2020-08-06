window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "#6BC66B";
    document.getElementById("header").style.fontSize = "7px";
    document.getElementById("header").style.top = "-30px";
    document.getElementById("header").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("header").style.padding = "55px 0px";
    document.getElementById("shape").style.width = "100%";
    document.getElementById("shape").style.height = "3200px";
    document.getElementById("shape").style.left = "0px";
    document.getElementById("shape").style.top = "0px";
    document.getElementById("shape").style.borderRadius = "0px";
    document.getElementById("logos").style.width = "120px";
    document.getElementById("logos").style.height = "120px";
    document.getElementById("logos").style.left = "120px";
  } else {
    document.getElementById("header").style.backgroundColor = "#6BC66B";
    document.getElementById("header").style.fontSize = "8px";
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("header").style.padding = "70px 0px";
    document.getElementById("shape").style.width = "80%";
    document.getElementById("shape").style.height = "2853px";
    document.getElementById("shape").style.left = "10%";
    document.getElementById("shape").style.top = "190px";
    document.getElementById("shape").style.borderRadius = "70px";
    document.getElementById("logos").style.width = "150px";
    document.getElementById("logos").style.height = "150px";
    document.getElementById("logos").style.left = "100px";
  }
}
