/* ============================================================
   Siteup — interactions
   ============================================================ */

/* ---------- header scroll state ---------- */

const header = document.querySelector("#siteHeader");

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/* ---------- scroll reveals ---------- */

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function activate(el) {
  el.classList.add("is-visible");
  el.querySelectorAll("[data-count]").forEach(startCount);
}

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px 180px 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
revealItems.forEach(activate);
}

/* ---------- subtle scroll-linked motion ---------- */

const root = document.documentElement;
let ticking = false;

function updateScrollMotion() {
  const hero = document.querySelector(".hero");
  const heroHeight = hero?.offsetHeight || 1;
  const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
  root.style.setProperty("--hero-shift", progress.toFixed(3));
  ticking = false;
}

function requestScrollMotion() {
  if (reducedMotion || ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollMotion);
}

updateScrollMotion();
window.addEventListener("scroll", requestScrollMotion, { passive: true });

/* ---------- card tilt ---------- */

const tiltCards = document.querySelectorAll(".service-card, .package-card, .project-card");

if (!reducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

/* ---------- count-up numbers ---------- */

function startCount(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = "true";

  const target = parseInt(el.dataset.count, 10) || 0;

  if (reducedMotion) {
    el.textContent = String(target);
    return;
  }

  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ---------- services carousel ---------- */

const serviceTrack = document.querySelector("#serviceTrack");
const prevBtn = document.querySelector(".arrow-prev");
const nextBtn = document.querySelector(".arrow-next");

function cardStep() {
  const card = serviceTrack?.querySelector(".service-card");
  if (!card) return 0;
  return card.getBoundingClientRect().width + 18;
}

function updateArrows() {
  if (!serviceTrack) return;
  const maxScroll = serviceTrack.scrollWidth - serviceTrack.clientWidth - 2;
  prevBtn.disabled = serviceTrack.scrollLeft <= 2;
  nextBtn.disabled = serviceTrack.scrollLeft >= maxScroll;
}

prevBtn?.addEventListener("click", () => {
  serviceTrack.scrollBy({ left: -cardStep(), behavior: "smooth" });
});

nextBtn?.addEventListener("click", () => {
  serviceTrack.scrollBy({ left: cardStep(), behavior: "smooth" });
});

serviceTrack?.addEventListener("scroll", updateArrows, { passive: true });
window.addEventListener("resize", updateArrows);
updateArrows();

/* ---------- accordion ---------- */

const accordion = document.querySelector("#aiAccordion");

accordion?.querySelectorAll(".accordion-head").forEach((head) => {
  head.addEventListener("click", () => {
    const item = head.parentElement;
    const isOpen = item.classList.contains("open");

    accordion.querySelectorAll(".accordion-item").forEach((other) => {
      other.classList.remove("open");
      other.querySelector(".accordion-head").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      head.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------- consultation form ---------- */

const form = document.querySelector("#consultationForm");
const statusEl = form?.querySelector(".form-status");

function getFormValue(data, key) {
  return String(data.get(key) || "").trim();
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = getFormValue(data, "name");
  const business = getFormValue(data, "business");
  const phone = getFormValue(data, "phone");
  const email = getFormValue(data, "email");
  const businessType = getFormValue(data, "businessType");
  const need = getFormValue(data, "need");
  const message = getFormValue(data, "message");

  if (!name || !business || !businessType || !need) {
    statusEl.textContent = "Please fill in your name, business name, business type, and what you need.";
    statusEl.className = "form-status error";
    return;
  }

  if (!phone && !email) {
    statusEl.textContent = "Please add either your phone number or email.";
    statusEl.className = "form-status error";
    return;
  }

  const subject = encodeURIComponent(`Siteup consultation request from ${business || name}`);
  const body = encodeURIComponent(
    [
      "New Siteup consultation request",
      "",
      `Name: ${name}`,
      `Business name: ${business}`,
      `Phone: ${phone || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Business type: ${businessType}`,
      `Need: ${need}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n")
  );

  // Placeholder address — replace before launch.
  window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  statusEl.textContent = "Thanks. Your email app should open with the request ready to send.";
  statusEl.className = "form-status success";
});
