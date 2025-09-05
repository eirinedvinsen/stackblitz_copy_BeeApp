const beeIcon = document.querySelector("#beeIcon");
//console.log(beeIcon);

beeIcon.addEventListener("click", function() {
    //darkmode eller lightmode
    const body = document.querySelector("body");
    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
    }
});

hamburgerIcon.addEventListener("click", function () {
    // Hente elementet som skal bli synlig
    const navList = document.querySelector("#navList");
    //console.log(navList);
  
    if(navList.classList.contains("hidden")){
      navList.classList.remove("hidden");
      navList.classList.add("navList");
    } else{
      navList.classList.remove("navList");
      navList.classList.add("hidden");
    }
  });

  beeIcon.addEventListener("click", function(){
    const a = document.querySelector("#test");
    if(a.classList.contains("dark")){
      a.classList.remove("dark");
      a.classList.add("light");
    } else {
      a.classList.remove("light");
      a.classList.add("dark");
    }
  });

  