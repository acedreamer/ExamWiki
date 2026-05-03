// ExamWiki Flagship UI Logic

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  body.className = savedTheme;

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light-theme');
    }
  });

  // Progress bar logic
  window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
    
    // Update sidebar highlight
    updateSidebarHighlight();
  });

  // Initial Render
  renderSidebar();
  renderContent();
});

/**
 * Renders the sidebar with module groups and topic sub-items
 */
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = '<nav class="sidebar-nav">';
  SYLLABUS.forEach(module => {
    html += `
      <div class="sidebar-module" data-module-id="${module.id}">
        <h3 class="sidebar-module-title">Module ${module.id}</h3>
        <ul class="sidebar-topic-list">
          ${module.topics.map(topic => `
            <li class="sidebar-topic-item">
              <a href="#${topic.id}" class="sidebar-topic-link" data-topic-id="${topic.id}">
                ${topic.title}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });
  html += '</nav>';
  sidebar.innerHTML = html;

  // Add click listeners to sidebar links
  sidebar.querySelectorAll('.sidebar-topic-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const topicId = link.getAttribute('data-topic-id');
      const moduleId = link.closest('.sidebar-module').getAttribute('data-module-id');
      scrollToTopic(moduleId, topicId);
    });
  });
}

/**
 * Renders the main content well as a series of module accordions
 */
function renderContent() {
  const contentContainer = document.querySelector('.content-container');
  if (!contentContainer) return;

  let html = '';
  SYLLABUS.forEach(module => {
    html += `
      <details class="module-accordion" open id="module-${module.id}">
        <summary class="module-header">
          <div class="module-header-content">
            <span class="module-label">MODULE ${module.id}</span>
            <h2 class="module-title">${module.title}</h2>
          </div>
          <svg class="accordion-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <div class="topics-container">
          ${module.topics.map(topic => `
            <section class="topic-section" id="${topic.id}">
              <div class="topic-header">
                <span class="topic-badge badge-${topic.badge.toLowerCase()}">${topic.badge}</span>
                <h3 class="topic-title">${topic.title}</h3>
              </div>
              <p class="topic-summary">${topic.summary}</p>
              <div class="topic-content">
                ${topic.content}
              </div>
            </section>
          `).join('')}
        </div>
      </details>
    `;
  });
  contentContainer.innerHTML = html;
}

/**
 * Smooth scrolls to a specific topic, opening the parent module if closed
 */
function scrollToTopic(moduleId, topicId) {
  const topicElement = document.getElementById(topicId);
  const moduleAccordion = document.getElementById(`module-${moduleId}`);
  
  if (moduleAccordion && !moduleAccordion.open) {
    moduleAccordion.open = true;
  }

  if (topicElement) {
    const HEADER_OFFSET = 80; // Account for sticky header
    const elementPosition = topicElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Update URL hash without jumping
    history.pushState(null, null, `#${topicId}`);
  }
}

/**
 * Highlights the current module in the sidebar based on scroll position
 */
function updateSidebarHighlight() {
  const accordions = document.querySelectorAll('.module-accordion');
  const sidebarModules = document.querySelectorAll('.sidebar-module');
  
  let currentModuleId = null;
  const scrollPosition = window.scrollY + 150; // Offset for better detection

  accordions.forEach(acc => {
    if (acc.offsetTop <= scrollPosition) {
      currentModuleId = acc.id.replace('module-', '');
    }
  });

  sidebarModules.forEach(sm => {
    if (sm.getAttribute('data-module-id') === currentModuleId) {
      sm.classList.add('active');
    } else {
      sm.classList.remove('active');
    }
  });
}
