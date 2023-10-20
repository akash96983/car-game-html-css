const input = document.getElementById("firstname");
const submitButton = document.getElementById("nickname");
const button = document.getElementById("playbutton")
   

      button.addEventListener('click',()=>{
        if (input.value == "" || submitButton.value==""){
          alert("Enter valid names")
        } else{
          window.location.href = "introduction.html";
        }
      })