const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const btnSpinner = document.getElementById("btn-spinner");

form.addEventListener("submit", function (e) {
   e.preventDefault();

   // Show spinner and disable button
   button.disabled = true;
   btnText.textContent = "Sending...";
   btnSpinner.classList.remove("d-none");

   const formData = new FormData(form);

   fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
         Accept: "application/json",
      },
   })
      .then((response) => {
         if (response.ok) {
            window.location.href =
               "https://jessautogarage.github.io/jesrel-portfolio/thank-you.html"; // Change URL to your thank-you page
         } else {
            throw new Error("Submission failed.");
         }
      })
      .catch((error) => {
         alert("There was a problem submitting the form.");
         button.disabled = false;
         btnText.textContent = "Send Message";
         btnSpinner.classList.add("d-none");
      });
});

const sliders = {
   web: [
      "We design high-converting, mobile-optimized eCommerce websites that drive sales and deliver seamless shopping experiences.",
      "We build elegant real estate websites with listings, maps, and forms for agents and property managers.",
      "We craft sleek websites for consultants and agencies with booking tools and lead funnels.",
      "We create professional portfolios that highlight your work and skills beautifully.",
   ],
   mobile: [
      "We build secure, fast, and intuitive mobile apps for online stores, bookings, and business tools.",
      "We develop mobile apps for real estate to manage listings and appointments.",
      "Mobile apps for agencies and professionals to streamline their service delivery.",
      "Portfolio mobile apps to showcase skills, resumes, and contact info.",
   ],
   automation: [
      "Automate workflows using GoHighLevel, Zapier, Make, and Google Workspace.",
      "Connect apps and eliminate manual tasks with automation tools.",
      "CRM setup, nurture automation, lead scoring, and pipelines.",
      "Streamline your business systems with smart automation.",
   ],
   seo: [
      "Boost your Google rankings with technical and content SEO.",
      "Improve visibility and drive organic traffic with tailored SEO strategies.",
      "Audit, optimize, and monitor your site’s performance.",
      "On-page SEO, speed optimization, and structured data setup.",
   ],
   funnel: [
      "Design high-converting funnels for leads and sales.",
      "Landing pages, upsells, lead magnets — all built with precision.",
      "Funnels integrated with CRMs, email automation, and tracking.",
      "Visual funnels to guide users toward your goal — conversions.",
   ],
   va: [
      "Tech-savvy virtual assistance for your day-to-day tasks.",
      "Email management, CRM updates, research, and scheduling.",
      "Dedicated VA to support your business ops and clients.",
      "Remote support with strong tools and communication skills.",
   ],
};

let i = 0;

function updateText(id, data) {
   const titleEl = document.getElementById(`${id}-title`);
   const descEl = document.getElementById(`${id}-desc`);
   descEl.classList.remove("animate__fadeIn");
   void descEl.offsetWidth;
   descEl.textContent = data[i % data.length];
   descEl.classList.add("animate__fadeIn");
}

function rotateAll() {
   updateText("webdev", sliders.web);
   updateText("mobile", sliders.mobile);
   updateText("automation", sliders.automation);
   updateText("seo", sliders.seo);
   updateText("funnel", sliders.funnel);
   updateText("va", sliders.va);
   i++;
}

rotateAll();
setInterval(rotateAll, 8000);



const fadeEls = document.querySelectorAll('.fade-in');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    fadeEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


  