(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Año del footer ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Menú móvil ---------- */
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  const closeMenu = () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  /* ---------- Borde del menú al hacer scroll ---------- */
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Enlace activo según la sección visible ---------- */
  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...links.querySelectorAll("a")];

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Copiar correo ---------- */
  const copyBtn = document.getElementById("copyBtn");
  const copyStatus = document.getElementById("copyStatus");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Correo copiado";
      } catch {
        copyStatus.textContent = "No se pudo copiar. Selecciónalo y cópialo a mano: " + email;
      }
      setTimeout(() => { copyStatus.textContent = ""; }, 3500);
    });
  }

  /* ---------- Terminal del hero ---------- */
  const out = document.getElementById("termOut");
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

  const script = [
    { cmd: "whoami", res: "Benjamin Caceres Mejias — analista de ciberseguridad" },
    { cmd: "cat foco.txt", res: "SOC · SIEM (Wazuh) · vulnerabilidades · ISO 27001" },
    { cmd: "certs --obtenidas", res: "eJPTv2  ICCA  Cisco Ethical Hacker  ISO 27001 Auditor Interno" },
    { cmd: "certs --en-curso", res: "CDSA  SC-200" },
    { cmd: "buscando --rol", res: "Analista SOC / Seguridad TI / Soporte TI" },
  ];

  const prompt = '<span class="p">$</span> ';
  const cursor = '<span class="cursor" aria-hidden="true"></span>';

  const renderStatic = () => {
    out.innerHTML = script
      .map((s) => prompt + '<span class="c">' + esc(s.cmd) + "</span>\n<span class=\"o\">" + esc(s.res) + "</span>")
      .join("\n\n") + "\n\n" + prompt + cursor;
  };

  if (reduceMotion) {
    renderStatic();
  } else {
    let html = "";
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      for (const step of script) {
        let typed = "";
        for (const ch of step.cmd) {
          typed += ch;
          out.innerHTML = html + prompt + '<span class="c">' + esc(typed) + "</span>" + cursor;
          await wait(38 + Math.random() * 40);
        }
        await wait(220);
        html += prompt + '<span class="c">' + esc(step.cmd) + '</span>\n<span class="o">' + esc(step.res) + "</span>\n\n";
        out.innerHTML = html + prompt + cursor;
        await wait(380);
      }
      out.innerHTML = html + prompt + cursor;
    })();
  }

  /* ---------- Cielo estrellado ---------- */
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w = 0;
  let h = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round((w * h) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.25,
      a: Math.random() * 0.6 + 0.2,
      s: Math.random() * 0.8 + 0.3,
      p: Math.random() * Math.PI * 2,
    }));
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, w, h);
    for (const st of stars) {
      const tw = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t / 1000 * st.s + st.p);
      ctx.globalAlpha = st.a * tw;
      ctx.fillStyle = "#dfe8ff";
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  };

  resize();
  requestAnimationFrame(draw);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (reduceMotion) requestAnimationFrame(draw);
    }, 150);
  });
})();
