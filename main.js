/* ============================================
   リチカクラウド LP FV Showcase
   Tab Switching & Animations
   ============================================ */

(function () {
  'use strict';

  // Check reduced motion preference
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var tabs = document.querySelectorAll('.showcase-nav__tab');
  var sections = document.querySelectorAll('.hero');

  // --- Palette Switching ---
  var paletteTabs = document.querySelectorAll('.palette-nav__tab');

  paletteTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var palette = tab.dataset.palette;

      // Update body data attribute
      document.body.setAttribute('data-palette', palette);

      // Update active tab + ARIA
      paletteTabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Update palette accent CSS variable for pattern tab active color
      var accentColors = {
        richka: '#FF6450',
        trust: '#c4a265',
        safe: '#e67e22',
        pop: '#e8344e',
        luxury: '#d4af37',
        coral: '#FF6450',
        urgent: '#cc0000'
      };
      document.documentElement.style.setProperty('--palette-accent', accentColors[palette] || '#FF6450');
    });
  });

  // --- Tab Switching ---
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.dataset.pattern;

      // Hide all sections
      sections.forEach(function (s) { s.style.display = 'none'; });

      // Show target
      var section = document.getElementById('pattern-' + target);
      if (section) section.style.display = 'block';

      // Scroll to top
      window.scrollTo(0, 0);

      // Update active tab + ARIA
      tabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      // Restart animations
      if (section) restartAnimations(section);

      // Counter for Pattern F (always re-run on tab switch)
      if (target === 'f' && section) startCountUp(section);

      // Particles for Pattern D
      if (target === 'd' && !prefersReducedMotion) createParticles();
    });
  });

  // --- Animation Restart ---
  function restartAnimations(section) {
    if (prefersReducedMotion) {
      // Instantly show all elements without animation
      section.querySelectorAll('.js-fade-in, .js-scale-in').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var els = section.querySelectorAll('.js-fade-in, .js-scale-in');

    // 1. Remove transition temporarily and reset to invisible
    els.forEach(function (el) {
      el.style.transition = 'none';
      el.classList.remove('is-visible');
    });

    // 2. Force reflow
    void section.offsetHeight;

    // 3. Re-enable transitions
    els.forEach(function (el) {
      el.style.transition = '';
    });

    void section.offsetHeight;

    els.forEach(function (el) {
      var delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(function () {
        el.classList.add('is-visible');
      }, delay + 50);
    });
  }

  // --- Number Counter (Pattern F + LP Numbers) ---
  function startCountUp(section) {
    var counterEls = section ?
      section.querySelectorAll('.js-counter') :
      document.querySelectorAll('.js-counter');

    counterEls.forEach(function (counterEl) {
      var target = parseFloat(counterEl.dataset.target);
      var duration = prefersReducedMotion ? 0 : 1200;
      var isInteger = target === Math.floor(target);

      if (prefersReducedMotion || duration === 0) {
        counterEl.textContent = isInteger ? target.toLocaleString() : target.toFixed(1);
        return;
      }

      function easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
      }

      counterEl.textContent = '0';

      setTimeout(function () {
        var start = performance.now();

        function tick(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var value = target * easeOut(progress);

          if (isInteger) {
            counterEl.textContent = Math.round(value).toLocaleString();
          } else {
            counterEl.textContent = value.toFixed(1);
          }

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            counterEl.textContent = isInteger ? target.toLocaleString() : target.toFixed(1);
          }
        }

        requestAnimationFrame(tick);
      }, 300);
    });
  }

  // --- Floating Particles (Pattern D) ---
  function createParticles() {
    if (prefersReducedMotion) return;

    var container = document.getElementById('particle-container');
    if (!container) return;
    container.innerHTML = '';

    for (var i = 0; i < 10; i++) {
      var p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.width = (2 + Math.random() * 4) + 'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (6 + Math.random() * 12) + 's';
      p.style.animationDelay = Math.random() * 6 + 's';
      container.appendChild(p);
    }
  }

  // --- Remove white background from PC mockup images ---
  function removeWhiteBg(img) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var threshold = 235;

    for (var i = 0; i < data.length; i += 4) {
      var r = data[i], g = data[i + 1], b = data[i + 2];
      if (r > threshold && g > threshold && b > threshold) {
        data[i + 3] = 0;
      } else if (r > 210 && g > 210 && b > 210) {
        var brightness = (r + g + b) / 3;
        data[i + 3] = Math.round(255 * (1 - (brightness - 210) / 45));
      }
    }

    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL('image/png');
    img.classList.add('bg-removed');
  }

  function processAllMockupImages() {
    var mockupSrc = 'hero_image.KL8R_fkw.webp';
    var imgs = document.querySelectorAll('img[src*="' + mockupSrc + '"]');
    imgs.forEach(function (img) {
      if (img.classList.contains('bg-removed')) return;
      if (img.dataset.skipBgRemove === 'true') return;
      if (img.complete && img.naturalWidth > 0) {
        removeWhiteBg(img);
      } else {
        img.addEventListener('load', function onLoad() {
          if (img.classList.contains('bg-removed')) return;
          img.removeEventListener('load', onLoad);
          removeWhiteBg(img);
        });
      }
    });
  }

  setTimeout(processAllMockupImages, 500);

  // --- Scroll Animations (IntersectionObserver) ---
  function initScrollAnimations() {
    // Collect ALL scroll animation classes
    var scrollEls = document.querySelectorAll('.js-scroll, .js-scroll-left, .js-scroll-right, .js-scroll-scale');
    if (!scrollEls.length) return;

    if (prefersReducedMotion) {
      scrollEls.forEach(function (el) {
        el.classList.add('is-shown');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-shown');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    scrollEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  initScrollAnimations();

  // --- Scroll Progress Bar ---
  function initProgressBar() {
    var progressBar = document.getElementById('lp-progress');
    if (!progressBar || prefersReducedMotion) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollTop = window.scrollY;
          var docHeight = document.documentElement.scrollHeight - window.innerHeight;
          var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          progressBar.style.width = progress + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  initProgressBar();

  // --- Parallax background shapes ---
  function initParallax() {
    if (prefersReducedMotion) return;

    var shapes = document.querySelectorAll('.lp-bg-shape');
    if (!shapes.length) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          shapes.forEach(function (shape) {
            var speed = parseFloat(shape.dataset.speed || '0.03');
            var yOffset = scrollY * speed;
            shape.style.transform = 'translateY(' + yOffset + 'px)';
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  initParallax();

  // --- LP Numbers section counter (scroll-triggered) ---
  function initLPCounters() {
    var numbersSection = document.querySelector('.lp-numbers');
    if (!numbersSection) return;

    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Find all counter elements in LP numbers
          var counters = entry.target.querySelectorAll('.js-lp-counter');
          counters.forEach(function (counterEl) {
            var target = parseFloat(counterEl.dataset.target);
            var isInteger = target === Math.floor(target);

            if (prefersReducedMotion) {
              counterEl.textContent = isInteger ? target.toLocaleString() : target.toFixed(1);
              return;
            }

            var duration = 1500;
            counterEl.textContent = '0';

            function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
            var start = performance.now();

            function tick(now) {
              var elapsed = now - start;
              var progress = Math.min(elapsed / duration, 1);
              var value = target * easeOut(progress);
              counterEl.textContent = isInteger ? Math.round(value).toLocaleString() : value.toFixed(1);
              if (progress < 1) requestAnimationFrame(tick);
              else counterEl.textContent = isInteger ? target.toLocaleString() : target.toFixed(1);
            }

            requestAnimationFrame(tick);
          });
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterObserver.observe(numbersSection);
  }

  initLPCounters();

  // --- Initial load ---
  var initial = document.getElementById('pattern-a');
  if (initial) {
    setTimeout(function () {
      restartAnimations(initial);
    }, 100);
  }

})();
