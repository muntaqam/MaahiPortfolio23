


//checking to see if new entry is visible in viewport, if it is then add class to it called show
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }


    });

});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// blob
const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    },{duration:3000, fill:"forwards"});
 
};


// app.use(bodyParser.urlencoded({ extended: true }));

window.addEventListener('DOMContentLoaded', (event) => {
  var form = document.getElementById('contact-form');
  var successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_juvwhe7', 'template_bb3dy8h', this)
    .then(function(response) {
      // Clear the form
      form.reset();

      // Show success message
      successMessage.style.display = 'flex';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }, function(error) {
      alert('Error sending email: ' + JSON.stringify(error));
    });
  });
});


//active seection
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section'); // Assuming each of your sections have a 'section' tag. If not, replace with the appropriate selector.
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3) && pageYOffset < (sectionTop + sectionHeight - sectionHeight / 3)) {
            currentSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection.id) {
            link.classList.add('active');
        }
    });
});




//scrolll

jQuery(document).ready(function($) {
    $('a').click(function(e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top
        }, 500);
    });
});
