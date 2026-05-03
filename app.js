// ExamWiki Flagship UI Logic

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light-theme';
  body.classList.add(savedTheme);

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
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
  });

  // Initial Render
  renderSidebar();
  renderContent();

  // Setup Intersection Observer for scroll tracking
  setupScrollTracking();

  // Setup Command Palette
  setupCommandPalette();

  // Polish Code Blocks
  polishCodeBlocks();
});

/**
 * Setup Intersection Observer to track which section is in view
 */
function setupScrollTracking() {
  const sections = document.querySelectorAll('.topic-section');
  const breadcrumb = document.getElementById('breadcrumb');
  const breadcrumbModule = breadcrumb.querySelector('.breadcrumb-module');
  const breadcrumbTopic = breadcrumb.querySelector('.breadcrumb-topic');

  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -80% 0px', // Detect when item is in the top portion of the viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const topicId = entry.target.id;
        const moduleId = entry.target.closest('.module-accordion').id.replace('module-', '');
        
        // Update Sidebar
        updateSidebarActiveLink(topicId);
        
        // Update Breadcrumbs
        breadcrumbModule.textContent = `Module ${moduleId}`;
        breadcrumbTopic.textContent = entry.target.querySelector('.topic-title').textContent;
        breadcrumb.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Updates the active link in the sidebar
 */
function updateSidebarActiveLink(activeTopicId) {
  const links = document.querySelectorAll('.sidebar-topic-link');
  const modules = document.querySelectorAll('.sidebar-module');

  links.forEach(link => {
    if (link.getAttribute('data-topic-id') === activeTopicId) {
      link.classList.add('active');
      const parentModule = link.closest('.sidebar-module');
      modules.forEach(m => m.classList.remove('active'));
      parentModule.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Command Palette Logic (⌘K)
 */
function setupCommandPalette() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const trigger = document.getElementById('search-trigger');
  const resultsContainer = document.getElementById('search-results');
  
  let selectedIndex = -1;
  let currentResults = [];

  const toggleModal = (show) => {
    if (show) {
      modal.classList.add('open');
      input.focus();
    } else {
      modal.classList.remove('open');
      input.value = '';
      resultsContainer.innerHTML = '';
      selectedIndex = -1;
    }
  };

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      toggleModal(true);
    }
    if (e.key === 'Escape') {
      toggleModal(false);
    }
  });

  trigger.addEventListener('click', () => toggleModal(true));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(false);
  });

  // Search Logic
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsContainer.innerHTML = '';
      currentResults = [];
      return;
    }

    currentResults = [];
    SYLLABUS.forEach(module => {
      module.topics.forEach(topic => {
        if (topic.title.toLowerCase().includes(query) || 
            topic.summary.toLowerCase().includes(query)) {
          currentResults.push({ ...topic, moduleId: module.id });
        }
      });
    });

    renderResults(currentResults);
  });

  function renderResults(results) {
    resultsContainer.innerHTML = results.map((result, index) => `
      <div class="search-result-item ${index === 0 ? 'selected' : ''}" data-index="${index}" data-topic-id="${result.id}" data-module-id="${result.moduleId}">
        <div class="result-meta">Module ${result.moduleId}</div>
        <div class="result-title">${result.title}</div>
      </div>
    `).join('');
    selectedIndex = results.length > 0 ? 0 : -1;
  }

  // Navigation & Selection
  input.addEventListener('keydown', (e) => {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      const selected = items[selectedIndex];
      const topicId = selected.getAttribute('data-topic-id');
      const moduleId = selected.getAttribute('data-module-id');
      scrollToTopic(moduleId, topicId);
      toggleModal(false);
    }
  });

  function updateSelection(items) {
    items.forEach((item, index) => {
      item.classList.toggle('selected', index === selectedIndex);
      if (index === selectedIndex) item.scrollIntoView({ block: 'nearest' });
    });
  }

  resultsContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item) {
      const topicId = item.getAttribute('data-topic-id');
      const moduleId = item.getAttribute('data-module-id');
      scrollToTopic(moduleId, topicId);
      toggleModal(false);
    }
  });
}

/**
 * Polish Code Blocks: Wrap pre tags, add header with language and copy button
 */
function polishCodeBlocks() {
  const preBlocks = document.querySelectorAll('.topic-content pre');
  
  preBlocks.forEach(pre => {
    // Check if already polished
    if (pre.parentElement.classList.contains('code-block-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    const header = document.createElement('div');
    header.className = 'code-header';
    
    const lang = document.createElement('span');
    lang.className = 'code-lang';
    lang.textContent = 'PYTHON'; // Default for this project
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-button';
    copyBtn.textContent = 'Copy';
    
    copyBtn.addEventListener('click', () => {
      const code = pre.querySelector('code')?.textContent || pre.textContent;
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = '✓ Copied';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });

    header.appendChild(lang);
    header.appendChild(copyBtn);
    
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(header);
    wrapper.appendChild(pre);
  });
}

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
