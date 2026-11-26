/**
 * PulseFlow - Interactive Scripts
 * Provides responsive navigation, theme switching, dynamic pricing calculation,
 * FAQ accordion, code snippet tabs, and feedback notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Mode)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const savedTheme = localStorage.getItem('pulseflow-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to dark for a high-tech modern aesthetic
      document.documentElement.setAttribute('data-theme', prefersDark.matches ? 'dark' : 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pulseflow-theme', newTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  initTheme();

  // -------------------------------------------------------------------------
  // 2. Sticky Navbar Blur on Scroll
  // -------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileToggle?.classList.add('active');
    mobileDrawer?.classList.add('active');
    drawerBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle?.classList.remove('active');
    mobileDrawer?.classList.remove('active');
    drawerBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer?.classList.contains('active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // -------------------------------------------------------------------------
  // 4. Dynamic Pricing Toggle (Monthly vs Annual)
  // -------------------------------------------------------------------------
  const billingToggle = document.getElementById('billingToggle');
  const priceStarter = document.getElementById('priceStarter');
  const pricePro = document.getElementById('pricePro');
  const priceEnterprise = document.getElementById('priceEnterprise');
  const billingCyclePeriod = document.querySelectorAll('.plan-period');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');

  const pricingData = {
    monthly: {
      starter: '0',
      pro: '29',
      enterprise: '99',
      period: '/month'
    },
    annual: {
      starter: '0',
      pro: '23',
      enterprise: '79',
      period: '/month, billed annually'
    }
  };

  function updatePricing(isAnnual) {
    const cycle = isAnnual ? 'annual' : 'monthly';
    const data = pricingData[cycle];

    if (priceStarter) priceStarter.textContent = data.starter;
    if (pricePro) pricePro.textContent = data.pro;
    if (priceEnterprise) priceEnterprise.textContent = data.enterprise;

    billingCyclePeriod.forEach(span => {
      span.textContent = data.period;
    });

    if (monthlyLabel && annualLabel) {
      if (isAnnual) {
        annualLabel.classList.add('active');
        monthlyLabel.classList.remove('active');
      } else {
        monthlyLabel.classList.add('active');
        annualLabel.classList.remove('active');
      }
    }
  }

  if (billingToggle) {
    billingToggle.addEventListener('change', (e) => {
      updatePricing(e.target.checked);
    });

    if (monthlyLabel) {
      monthlyLabel.addEventListener('click', () => {
        billingToggle.checked = false;
        updatePricing(false);
      });
    }

    if (annualLabel) {
      annualLabel.addEventListener('click', () => {
        billingToggle.checked = true;
        updatePricing(true);
      });
    }
  }

  // -------------------------------------------------------------------------
  // 5. Code Terminal Language Tabs
  // -------------------------------------------------------------------------
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const codeContent = document.getElementById('terminalCode');

  const codeSnippets = {
    bash: `<span class="code-comment"># Install PulseFlow CLI & trigger deployment</span>
<span class="code-keyword">curl</span> -fsSL https://get.pulseflow.dev | sh
<span class="code-keyword">pulseflow</span> init --workflow=microservices
<span class="code-keyword">pulseflow</span> deploy --env=production --region=global
<span class="code-str">✔ Pipeline active in 1.4s across 32 edge regions</span>`,

    python: `<span class="code-comment"># Native Python SDK Event Listener</span>
<span class="code-keyword">from</span> pulseflow <span class="code-keyword">import</span> WorkflowEngine, Trigger

engine = WorkflowEngine(api_key=<span class="code-str">"pk_live_99a8x"</span>)

<span class="code-keyword">@engine.on</span>(Trigger.EVENT_RECEIVED)
<span class="code-func">def</span> <span class="code-func">handle_event</span>(event):
    <span class="code-func">print</span>(f<span class="code-str">"Processing payload: {event.id}"</span>)
    <span class="code-keyword">return</span> engine.dispatch(event.optimize())`,

    json: `<span class="code-comment">// Configuration Manifest (pulseflow.json)</span>
{
  <span class="code-keyword">"version"</span>: <span class="code-str">"3.0.0"</span>,
  <span class="code-keyword">"pipeline"</span>: <span class="code-str">"telemetry-stream"</span>,
  <span class="code-keyword">"autoScale"</span>: <span class="code-keyword">true</span>,
  <span class="code-keyword">"concurrency"</span>: 50000,
  <span class="code-keyword">"retryStrategy"</span>: <span class="code-str">"exponential-backoff"</span>,
  <span class="code-keyword">"edgeLocations"</span>: [<span class="code-str">"us-east"</span>, <span class="code-str">"eu-central"</span>, <span class="code-str">"ap-southeast"</span>]
}`
  };

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      terminalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const lang = tab.getAttribute('data-lang');
      if (codeContent && codeSnippets[lang]) {
        codeContent.innerHTML = codeSnippets[lang];
      }
    });
  });

  // -------------------------------------------------------------------------
  // 6. FAQ Accordion Interaction
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for a clean single-open accordion feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      } else {
        item.classList.remove('active');
        if (answer) {
          answer.style.maxHeight = null;
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Toast Notification Utility
  // -------------------------------------------------------------------------
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // -------------------------------------------------------------------------
  // 8. Newsletter / CTA Form Submission
  // -------------------------------------------------------------------------
  const ctaForms = document.querySelectorAll('.cta-form, .newsletter-form');
  ctaForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        showToast(`🎉 Thanks for joining! Access invite sent to ${emailInput.value.trim()}`);
        emailInput.value = '';
      }
    });
  });

  // -------------------------------------------------------------------------
  // 9. Interactive Dashboard Preview Pulse Animation
  // -------------------------------------------------------------------------
  const statTaskCount = document.getElementById('previewTaskCount');
  if (statTaskCount) {
    let count = 142820;
    setInterval(() => {
      count += Math.floor(Math.random() * 8) + 1;
      statTaskCount.textContent = count.toLocaleString();
    }, 2500);
  }
});
