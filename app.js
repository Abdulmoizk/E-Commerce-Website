function openModal() {
    document.getElementById('aboutUsModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('aboutUsModal').style.display = 'none';
  }

  let aboutInfo = document.getElementById("contactInfo");
  let aboutBtn = document.getElementById("aboutBtn");  


  aboutBtn.addEventListener("click",()=> {
    
    window.scrollTo({
        top:aboutInfo.offsetTop,
        behavior: "smooth", 
    })
  });
  


  /////////scrollToTop////////

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.addEventListener('scroll', function() {
      // Show the button when the page is scrolled down
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function() {
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
