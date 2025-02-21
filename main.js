const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
function sendemail(){
  Email.send({
      SecureToken:"841e0fb5-f92f-4c22-a580-55b533084c30",
      To : 'timingotech@gmail.com',
      From : 'taonuga@gmail.com',
      Subject : "New Contact Form Enquiry",
      Body :"Name: "+ document.getElementById("name").value +
            "<br>Message: "+ document.getElementById("message").value +
            "<br>Email: "+ document.getElementById("email").value
  }).then(
    message => alert("Message Sent Successfully")
  );
} 

window.addEventListener('load', () => {
	const loader = document.querySelector('.loading-animation');
	loader.style.display = 'none';
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });

  // Navbar color change on scroll
  window.addEventListener('scroll', () => {
	const header = document.querySelector('#header');
	if (window.scrollY > 100) {
	  header.style.background = 'rgba(255, 255, 255, 0.95)';
	} else {
	  header.style.background = 'rgba(255, 255, 255, 0.1)';
	}
  });

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
	revealElements.forEach(element => {
	  const elementTop = element.getBoundingClientRect().top;
	  if (elementTop < window.innerHeight - 100) {
		element.classList.add('revealed');
	  }
	});
  };
  window.addEventListener('scroll', revealOnScroll);

  document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkIfInView() {
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInView = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (isInView && !item.classList.contains('fade-in')) {
          item.classList.add('fade-in');
        }
      });
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
  });