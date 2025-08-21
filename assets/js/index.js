!(function () {
  let e = document.querySelectorAll(".our-tech-box"),
    t = document.getElementById("viewMoreBtntech");
  e.forEach((e, t) => {
    t < 18 && e.classList.add("visible");
  }),
    t.addEventListener("click", () => {
      e.forEach((e) => e.classList.add("visible")), (t.style.display = "none");
    });
})(),
  (function () {
    let e = document.querySelectorAll(".card-main"),
      t = document.getElementById("viewMoreBtn"),
      a = !1;
    function n() {
      return window.innerWidth <= 768;
    }
    function i() {
      e.forEach((e, t) => {
        a || t < 6 ? (e.style.display = "block") : (e.style.display = "none");
      });
    }
    function o() {
      n()
        ? (t.textContent = a ? "Load Less" : "Load More")
        : (t.textContent = a ? "View Less" : "View More");
      t && t.classList && t.classList.toggle("expanded", a);
    }
    i(),
      o(),
      t.addEventListener("click", () => {
        (a = !a), i(), o();
      }),
      window.addEventListener("resize", () => {
        (a = !n()), i(), o();
      });
  })();
let currentPlayer = null;
const videoUrls = [
  "https://www.youtube.com/embed/YnCtMz22XKI?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/EzCFH9rw-GU?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/T80L5X1wWRE?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/toMI9yrVEGU?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/wLze2Iov5dw?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/eAfU7KY9ABc?enablejsapi=1&autoplay=1",
  "https://www.youtube.com/embed/PxeEIp9Vzgk?si=5rMzCS6lhOIk0Kxf&autoplay=1",
  "https://www.youtube.com/embed/b1t0EXR_O4E?si=ZjQJkPLnhgARK6N3&autoplay=1",
  "https://www.youtube.com/embed/990IwUHm1u4?si=zosXRfMjSY3OPWci&autoplay=1",
];
function openVideo(e) {
  let t = document.getElementById("client-modal"),
    a = document.getElementById("video-container");
  if (!t || !a) {
    console.error("Modal or video container not found");
    return;
  }
  closeVideo();
  let n = document.createElement("iframe");
  (n.width = "100%"),
    (n.height = "100%"),
    (n.loading = "lazy"),
    (n.src = videoUrls[e]),
    (n.title = "YouTube video player"),
    (n.frameBorder = "0"),
    (n.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),
    (n.referrerPolicy = "strict-origin-when-cross-origin"),
    (n.allowFullscreen = !0),
    a.appendChild(n),
    (t.style.display = "block"),
    (currentPlayer = n);
}
function closeVideo() {
  let e = document.getElementById("client-modal"),
    t = document.getElementById("video-container");
  currentPlayer && (currentPlayer.src = ""),
    (t.innerHTML = ""),
    (currentPlayer = null),
    (e.style.display = "none");
}
document.addEventListener("click", function (e) {
  let t = document.getElementById("client-modal");
  e.target === t && closeVideo();
}),
  document.addEventListener("keydown", function (e) {
    "Escape" === e.key && closeVideo();
  }),
  null;
const baseURL = "./assets/images/",
  modalData = [
    {
      id: 1,
      title: "Healthcare Chatbot with AI Diagnosis – 45 Days",
      description:
        "AI-powered chatbot for managing patient records, appointment bookings, and assisting doctors with smart diagnosis.",
      badgeText: "The project was developed by a team of 3 developers.",
      challenge:
        "Doctors were overwhelmed with scattered patient records and delayed diagnosis workflows, leading to inefficiencies and poor patient experience.",
      solution:
        "We built a HIPAA-compliant AI chatbot that unified patient records, automated appointment scheduling, and supported doctors with intelligent diagnosis assistance.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Next.js", icon: baseURL + "/icons/Next.webp" },
      ],
      image: baseURL + "/case-work-13.webp",
      clientImage: baseURL + "/client-says-2.webp",
      testimonial:
        "This chatbot drastically improved our clinic’s efficiency. Appointment scheduling is seamless, and AI diagnosis support is surprisingly accurate.",
      clientName: "Dr. Sarah Lee",
      clientTitle: "Clinic Director",
    },
    {
      id: 2,
      title: "How We Created Legal Chatbot for Contract Review in 40 Days",
      description:
        "AI chatbot for document analysis, case management, and intelligent contract review in legal workflows.",
      badgeText:
        "The project was developed by a team of 2 developers and 1 UI Designer.",
      challenge:
        "Law firms were struggling with manual document reviews and lacked a centralized system for managing case files efficiently.",
      solution:
        "We created an AI-powered legal chatbot that automates document analysis, streamlines case tracking, and simplifies contract review with natural language understanding.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Node.js", icon: baseURL + "/icons/node-js-one.webp" },
      ],
      image: baseURL + "/case-work-14.webp",
      clientImage: baseURL + "/client-says-3.webp",
      testimonial:
        "The LegalVault chatbot has saved our team countless hours in document review. It’s a game-changer.",
      clientName: "Jonathan Miles",
      clientTitle: "Senior Partner at Miles & Co.",
    },
    {
      id: 3,
      title:
        "How We Built Real Estate Chatbot with Market Analytics in 35 Days",
      description:
        "Smart chatbot delivering property insights, client management, and real-time analytics for real estate platforms.",
      badgeText: "The project was developed by a team of 3 developers.",
      challenge:
        "Real estate agencies lacked a unified system to analyze market trends, manage clients, and track property performance in real time.",
      solution:
        "We built a real estate chatbot that delivers instant property insights, tracks client interactions, and provides real-time analytics to support better decision-making.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Python", icon: baseURL + "/icons/python-one.webp" },
      ],
      image: baseURL + "/case-work-15.webp",
      clientImage: baseURL + "/client-says-4.webp",
      testimonial:
        "This tool helps our agents stay informed and proactive—real-time analytics are incredibly helpful.",
      clientName: "Daniel Brooks",
      clientTitle: "Sales Director at Prime Realty",
    },
    {
      id: 4,
      title: "A Marketing Chatbot in 20 Days See How We Did It",
      description:
        "AI chatbot that manages campaigns, generates content, and delivers real-time performance insights.",
      badgeText:
        "The project was developed by a team of 2 developers and 1 UI/UX Designer.",
      challenge:
        "Marketing teams were overwhelmed managing multiple campaigns manually and lacked real-time visibility into performance metrics.",
      solution:
        "We developed an AI-driven chatbot that automates campaign management, generates on-brand content, and provides real-time analytics through a unified dashboard.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Next.js", icon: baseURL + "/icons/Next.webp" },
      ],
      image: baseURL + "/case-work-16.webp",
      clientImage: baseURL + "/client-says-5.webp",
      testimonial:
        "Campaign Studio transformed our workflow. We now launch faster and track performance with ease.",
      clientName: "Alicia Gomez",
      clientTitle: "Head of Digital Marketing",
    },
    {
      id: 5,
      title: "E-commerce Chatbot with AI Insights – 10 Days",
      description:
        "AI assistant for managing inventory, analyzing sales trends, and unlocking deep customer behavior insights.",
      badgeText:
        "The project was developed by a team of 2 developers and 1 UI Designer.",
      challenge:
        "Store owners were struggling with fragmented inventory systems and lacked actionable insights into customer behavior and sales performance.",
      solution:
        "We built an AI-powered chatbot that automates inventory tracking, analyzes sales patterns, and delivers customer insights to drive smarter business decisions.",
      tools: [
        { name: "CrewAI", icon: baseURL + "/icons/CrewAI.webp" },
        { name: "PostgreSQL", icon: baseURL + "/icons/PostgreSQL.webp" },
      ],
      image: baseURL + "/case-work-17.webp",
      clientImage: baseURL + "/client-says-6.webp",
      testimonial:
        "CommerceAI gave us clarity we never had before. It’s like having a virtual analyst.",
      clientName: "Priya Desai",
      clientTitle: "Founder of UrbanCart",
    },
    {
      id: 6,
      title:
        "AI-powered LMS chatbot offering course management, progress tracking, and personalized tutoring assistance.",
      description:
        "AI-powered LMS chatbot offering course management, progress tracking, and personalized tutoring assistance.",
      badgeText: "The project was developed by a team of 2 developers.",
      challenge:
        "Educational institutions faced difficulty in scaling personalized support, managing course content, and tracking student progress effectively.",
      solution:
        "We developed an AI chatbot that enables efficient course management, offers 24/7 tutoring support, and monitors learning progress through intelligent insights.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Next.js", icon: baseURL + "/icons/Next.webp" },
      ],
      image: baseURL + "/case-work-18.webp",
      clientImage: baseURL + "/client-says-7.webp",
      testimonial:
        "EduCampus has transformed our LMS experience. Students love the instant tutoring support.",
      clientName: "Melissa Hart",
      clientTitle: "Academic Director",
    },
    {
      id: 7,
      title: "Travel Chatbot for Seamless Trip Planning – 35 Days",
      description:
        "AI chatbot to manage bookings, optimize itineraries, and deliver real-time travel insights to users.",
      badgeText: "The project was developed by a team of 3 developers.",
      challenge:
        "Travel agencies and platforms struggled with fragmented booking systems and lacked smart itinerary planning tools.",
      solution:
        "We built a travel chatbot that automates bookings, assists users with personalized itinerary planning, and delivers real-time travel updates and insights.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "MangoDB", icon: baseURL + "/icons/mongodb-one.webp" },
      ],
      image: baseURL + "/case-work-19.webp",
      clientImage: baseURL + "/client-says-8.webp",
      testimonial:
        "This chatbot changed how we handle travel requests. Clients get fast, smart recommendations.",
      clientName: "Ahmed Rizvi",
      clientTitle: "Operations Manager",
    },
    {
      id: 8,
      title: "AI Chatbot for Smarter Financial Decisions – 40 Days",
      description:
        "Smart assistant offering portfolio insights, market trends, and AI-driven risk management features.",
      badgeText: "The project was developed by a team of 2 developers.",
      challenge:
        "Investors lacked real-time tools to analyze market trends, assess portfolio performance, and manage financial risk intelligently.",
      solution:
        "We developed an AI chatbot that delivers personalized portfolio analysis, real-time market insights, and predictive risk assessments to support better financial decisions.",
      tools: [
        { name: "CrewAI", icon: baseURL + "/icons/CrewAI.webp" },
        { name: "Python", icon: baseURL + "/icons/python-one.webp" },
      ],
      image: baseURL + "/case-work-20.webp",
      clientImage: baseURL + "/client-says-9.webp",
      testimonial:
        "FinanceHub became our go-to assistant. It’s like having a financial analyst on call.",
      clientName: "Kevin Liu",
      clientTitle: "Product Lead at FinVerse",
    },
    {
      id: 9,
      title: "How We Built an HR Chatbot for Seamless Hiring in 7 Days",
      description:
        "AI-powered assistant streamlining resume screening, candidate tracking, and automated interview scheduling.",
      badgeText:
        "The project was developed by a team of 2 developers and 1 UI/UX designer",
      challenge:
        "Recruiters were spending too much time manually screening resumes and scheduling interviews, causing delays in the hiring pipeline.",
      solution:
        "We built an HR chatbot that automates resume analysis, manages the candidate pipeline, and schedules interviews—streamlining the entire hiring process.",
      tools: [
        { name: "Langchain", icon: baseURL + "/icons/Langchain.webp" },
        { name: "Next.js", icon: baseURL + "/icons/Next.webp" },
      ],
      image: baseURL + "/case-work-21.webp",
      clientImage: baseURL + "/client-says-10.webp",
      testimonial:
        "TalentFlow sped up our hiring by 60%. It’s efficient, accurate, and easy to use.",
      clientName: "Rachel Kim",
      clientTitle: "HR Manager at RecruitPro",
    },
  ];
function openworkModal(e) {
  console.log(e);
  let t = modalData.find((t) => t.id === e);
  if ((console.log(t), !t)) {
    console.error("No data found for ID:", e);
    return;
  }
  (document.getElementById("modal-title").textContent = t?.title || ""),
    (document.getElementById("modal-description").textContent =
      t?.description || ""),
    (document.getElementById("modal-badge-text").textContent =
      t?.badgeText || ""),
    (document.getElementById("modal-challenge").textContent =
      t?.challenge || ""),
    (document.getElementById("modal-solution").textContent = t?.solution || ""),
    (document.getElementById("modal-image").src = t?.image || ""),
    (document.getElementById("modal-client-image").src = t?.clientImage || ""),
    (document.getElementById("modal-testimonial").textContent =
      t?.testimonial || ""),
    (document.getElementById("modal-client-name").textContent =
      t?.clientName || ""),
    (document.getElementById("modal-client-title").textContent =
      t?.clientTitle || "");
  let a = document.getElementById("modal-tools");
  (a.innerHTML = t.tools
    .map(
      (e) => `
        <div class="tools-card work-flex work-justify-c work-align-c">
          <div class="tools">
            <div class="work-align-c work-flex ${
              "Langchain" == e.name ? "w-[57px] h-[30px]" : "w-7 h-7"
            }">
              <img src="${e.icon}" class="w-full h-full" alt="${e.name}" />
            </div>
            <h6>${e.name}</h6>
          </div>
        </div>
      `
    )
    .join("")),
    console.log("1"),
    (document.getElementById("ikonicWorkModal").style.display = "flex"),
    console.log("2");
}
function closeIkonicWorkModal() {
  document.getElementById("ikonicWorkModal").style.display = "none";
}
function openIkonicModalV2() {
  document.getElementById("ikonicIformModal-v2").style.display = "flex";
}
function closeIkonicModalV2() {
  document.getElementById("ikonicIformModal-v2").style.display = "none";
}
const tabsContainer = document.querySelector(".tabs-container"),
  tabButtons = tabsContainer.querySelectorAll(".tab"),
  tabContents = document.querySelectorAll(".tab-content"),
  contentContainer = document.querySelector(".tab-contents");
function resetTabs() {
  tabButtons.forEach((e) => e.classList.remove("active")),
    tabContents.forEach((e) => e.classList.remove("active")),
    tabContents.forEach((e) => {
      contentContainer.contains(e) || contentContainer.appendChild(e);
    });
}
function activateTab(e) {
  let t = e.getAttribute("data-tab"),
    a = document.getElementById(t);
  e.classList.add("active"), a.classList.add("active");
  let n = window.scrollY;
  window.innerWidth < 768 ? e.after(a) : contentContainer.appendChild(a),
    window.scrollTo({ top: n });
}
tabButtons.forEach((e) => {
  e.addEventListener("click", function () {
    !this.classList.contains("active") && (resetTabs(), activateTab(this));
  });
});
const firstTab = tabButtons[0];
firstTab && activateTab(firstTab),
  window.addEventListener("resize", function () {
    resetTabs();
    let e = document.querySelector(".tab.active") || tabButtons[0];
    e && activateTab(e);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".marquee-content"),
      t = e.innerHTML;
    e.innerHTML += t;
  });
const cards = document.querySelectorAll(".card-main"),
  viewMoreBtn = document.getElementById("viewMoreBtn"),
  initialVisible = 6;
function openIkonicModal() {
  document.getElementById("ikonicIframeModal").style.display = "flex";
}
function closeIkonicModal() {
  document.getElementById("ikonicIframeModal").style.display = "none";
}
cards.forEach((e, t) => {
  t < 6 && e.classList.add("visible");
}),
  viewMoreBtn.addEventListener("click", () => {
    cards.forEach((e) => e.classList.add("visible")),
      (viewMoreBtn.style.display = "none");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("industryGrid"),
      t = e.innerHTML;
    e.innerHTML += t;
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".choose-code__card");
    window.addEventListener("scroll", () => {
      e.forEach((e, t) => {
        let a = e.getBoundingClientRect();
        if (0 === t) {
          (e.style.transform = "rotate(0deg)"), (e.style.boxShadow = "none");
          return;
        }
        if (a.top <= 150) {
          let n = 2 * Math.ceil(t / 2),
            i = t % 2 == 0 ? `-${n}deg` : `${n}deg`;
          (e.style.transform = `rotate(${i})`),
            (e.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)");
        } else
          (e.style.transform = "rotate(0deg)"), (e.style.boxShadow = "none");
      });
    });
  });
// Vanilla JS replacements for jQuery-dependent behaviors
document.addEventListener("DOMContentLoaded", function () {
  function getOrCreateErrorEl(container) {
    var el = container.querySelector(".error-message");
    if (!el) {
      el = document.createElement("div");
      el.className = "error-message";
      el.style.display = "none";
      container.appendChild(el);
    }
    return el;
  }

  function showError(inputEl, message) {
    var container = inputEl.closest(".form__field") || inputEl.parentNode;
    var err = getOrCreateErrorEl(container);
    err.textContent = message;
    // Only show message after interaction; otherwise keep hidden
    if (inputEl.dataset.touched === "true") {
      err.style.display = message ? "block" : "none";
    } else {
      err.style.display = "none";
    }
    inputEl.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validateName(inputEl) {
    var v = (inputEl.value || "").trim();
    if (!v) {
      showError(inputEl, "Name is required.");
      return false;
    }
    if (!/^[A-Za-z ]+$/.test(v)) {
      showError(inputEl, "Please use letters and spaces only.");
      inputEl.value = v.replace(/[^A-Za-z ]/g, "");
      return false;
    }
    showError(inputEl, "");
    return true;
  }

  function validateEmail(inputEl) {
    var v = (inputEl.value || "").trim();
    if (!v) {
      showError(inputEl, "Email is required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      showError(inputEl, "Enter a valid email address.");
      return false;
    }
    showError(inputEl, "");
    return true;
  }

  function validatePhone(inputEl) {
    var v = inputEl.value || "";
    if (!v.trim()) {
      showError(inputEl, "Phone number is required.");
      return false;
    }
    var cleaned = v.replace(/[^\d+]/g, "");
    if (cleaned !== v) {
      inputEl.value = cleaned;
    }
    if (!/^[\d+]+$/.test(cleaned) || cleaned.replace(/\D/g, "").length < 7) {
      showError(inputEl, "Enter a valid phone number.");
      return false;
    }
    showError(inputEl, "");
    return true;
  }

  function validateMsg(inputEl) {
    var v = (inputEl.value || "").trim();
    if (!v) {
      showError(inputEl, "Message is required.");
      return false;
    }
    if (v.length < 5) {
      showError(inputEl, "Message must be at least 5 characters.");
      return false;
    }
    showError(inputEl, "");
    return true;
  }

  function wireLiveValidation(form) {
    var nameInput = form.querySelector('[class*="ik-contact-name"]');
    var emailInput = form.querySelector('[class*="ik-contact-email"]');
    var phoneInput = form.querySelector('[class*="ik-contact-phone"]');
    var msgInput = form.querySelector('[class*="ik-contact-msg"]');

    if (nameInput) {
      nameInput.disabled = false;
      if (!nameInput.placeholder) nameInput.placeholder = "Enter Your Name";
      nameInput.addEventListener("input", function () {
        nameInput.dataset.touched = "true";
        validateName(nameInput);
      });
      nameInput.addEventListener("blur", function () {
        nameInput.dataset.touched = "true";
        validateName(nameInput);
      });
    }
    if (emailInput) {
      emailInput.addEventListener("input", function () {
        emailInput.dataset.touched = "true";
        validateEmail(emailInput);
      });
      emailInput.addEventListener("blur", function () {
        emailInput.dataset.touched = "true";
        validateEmail(emailInput);
      });
    }
    if (phoneInput) {
      phoneInput.addEventListener("input", function () {
        phoneInput.dataset.touched = "true";
        validatePhone(phoneInput);
      });
      phoneInput.addEventListener("blur", function () {
        phoneInput.dataset.touched = "true";
        validatePhone(phoneInput);
      });
    }
    if (msgInput) {
      msgInput.addEventListener("input", function () {
        msgInput.dataset.touched = "true";
        validateMsg(msgInput);
      });
      msgInput.addEventListener("blur", function () {
        msgInput.dataset.touched = "true";
        validateMsg(msgInput);
      });
    }
  }

  var formSelectors = [
    ".iksb-contact-form",
    ".iksb-contact-form-three",
    ".iksb-contact-form-four",
  ];
  formSelectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (formEl) {
      wireLiveValidation(formEl);
      formEl.addEventListener("submit", function (evt) {
        var nameInput = formEl.querySelector('[class*="ik-contact-name"]');
        var emailInput = formEl.querySelector('[class*="ik-contact-email"]');
        var phoneInput = formEl.querySelector('[class*="ik-contact-phone"]');
        var msgInput = formEl.querySelector('[class*="ik-contact-msg"]');
        var valid = true;
        if (nameInput) valid = validateName(nameInput) && valid;
        if (emailInput) valid = validateEmail(emailInput) && valid;
        if (phoneInput) valid = validatePhone(phoneInput) && valid;
        if (msgInput) valid = validateMsg(msgInput) && valid;
        if (!valid) {
          evt.preventDefault();
          var firstInvalid = formEl.querySelector('[aria-invalid="true"]');
          // Reveal messages for all invalid fields on submit
          formEl.querySelectorAll('[aria-invalid="true"]').forEach(function (el) {
            el.dataset.touched = "true";
            // Re-trigger validation to show messages now that touched=true
            if (el.className.includes('ik-contact-name')) validateName(el);
            if (el.className.includes('ik-contact-email')) validateEmail(el);
            if (el.className.includes('ik-contact-phone')) validatePhone(el);
            if (el.className.includes('ik-contact-msg')) validateMsg(el);
          });
          if (firstInvalid) firstInvalid.focus();
          return;
        }
        evt.preventDefault();
        window.location.href = "https://carebilling.com/thank-you/";
      });
    });
  });
});
