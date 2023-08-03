let slideIndex = 0;
    showSlides();
        
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); 
    }

    function validateForm() {
        var name = document.getElementById("nama").value.trim();
        var email = document.getElementById("email").value.trim();
        var destination = document.getElementById("destination").value;
        console.log(name);
      
        if (name === "") {
          alert("Nama tidak boleh kosong.");
          return false;
        }
      
        if (name.length < 3 || name.length > 30) {
          alert("Nama harus terdiri dari 3 hingga 30 karakter.");
          return false;
        }
      
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          alert("Email tidak valid.");
          return false;
        }
      
        if (destination === "0") {
          alert("Anda belum memilih destinasi.");
          return false;
        }
      
        return true;
      }