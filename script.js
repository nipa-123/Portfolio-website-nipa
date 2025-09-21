var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


  function toggleText(dotsId, moreId, btn) {
    const dots = document.getElementById(dotsId);
    const moreText = document.getElementById(moreId);
    const buttons = document.querySelectorAll('.grid-item button');

    buttons.forEach(button => {
      if (button !== btn) {
        button.innerHTML = 'Read More';
        button.previousElementSibling.previousElementSibling.style.display = 'inline';
        button.previousElementSibling.style.display = 'none';
      }
    });

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Click to Read";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "Close";
      moreText.style.display = "inline";
    }
  }