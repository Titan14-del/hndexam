let currentState = { view: 'home', year: null, paperIdx: null };

function navigateTo(view, year, paperIdx) {
  currentState = { view, year, paperIdx };
  render();
  window.scrollTo(0, 0);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('hnd-theme', next);
}

(function initTheme() {
  const saved = localStorage.getItem('hnd-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

(function initMermaid() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
  }
})();

function render() {
  const app = document.getElementById('app');
  const { view, year, paperIdx } = currentState;
  if (view === 'home') app.innerHTML = renderHome();
  else if (view === 'year') app.innerHTML = renderYear(year);
  else if (view === 'paper') { app.innerHTML = renderPaper(year, paperIdx); renderMermaidInQuestions(); }
}

function renderMermaidInQuestions() {
  if (typeof mermaid === 'undefined') return;
  setTimeout(() => {
    const diagrams = document.querySelectorAll('.question .mermaid');
    diagrams.forEach((el, i) => {
      if (!el.id) el.id = 'qmermaid-' + i;
      try { mermaid.run({ nodes: [el] }); } catch(e) {}
    });
  }, 150);
}

function renderHome() {
  const years = Object.keys(examData).sort().reverse();
  return `
    <h1 class="page-title">HND Software Engineering Exam Hub</h1>
    <p class="page-meta">Past exam papers with model answers — 2020 to 2025</p>
    <div class="year-grid">
      ${years.map(y => {
        const papers = examData[y].papers;
        return `<a href="#" class="year-card" onclick="navigateTo('year','${y}')">
          <div class="year-num">${y}</div>
          <div class="year-papers">${papers.length} paper${papers.length > 1 ? 's' : ''}</div>
        </a>`;
      }).join('')}
    </div>
    <p style="color:var(--text-muted);font-size:13px;margin-top:20px">
      Click a year to view papers &nbsp;|&nbsp; Use the search box to find questions
    </p>
  `;
}

function renderYear(year) {
  const data = examData[year];
  if (!data) return '<p>Year not found.</p>';
  return `
    <a href="#" class="btn-back" onclick="navigateTo('home')">&larr; All Years</a>
    <h1 class="page-title">${year} Session</h1>
    <p class="page-meta">${data.papers.length} exam paper${data.papers.length > 1 ? 's' : ''}</p>
    ${data.papers.map((p, i) => `
      <div class="paper-card" onclick="navigateTo('paper','${year}',${i})">
        <div class="paper-title">${p.title}</div>
        <div class="paper-details">
          ${p.duration ? `<span>&#9200; ${p.duration}</span>` : ''}
          ${p.credits ? `<span>&#9881; ${p.credits} credits</span>` : ''}
          <span>          ${(p.sections || []).reduce((s, sec) => s + sec.marks, 0)} total marks</span>
        </div>
      </div>
    `).join('')}
  `;
}

function renderPaper(year, paperIdx) {
  const data = examData[year];
  if (!data || !data.papers[paperIdx]) return '<p>Paper not found.</p>';
  const paper = data.papers[paperIdx];

  return `
    <a href="#" class="btn-back" onclick="navigateTo('year','${year}')">&larr; ${year} Papers</a>
    <h1 class="page-title">${paper.title}</h1>
    <p class="page-meta">
      ${paper.duration ? `Duration: ${paper.duration} &nbsp;|&nbsp; ` : ''}
      ${paper.credits ? `Credits: ${paper.credits} &nbsp;|&nbsp; ` : ''}
      ${paper.description || ''}
    </p>
    ${paper.sections.map((sec, si) => `
      <div class="section">
        <div class="section-header">
          <h2>${sec.title}</h2>
          <span class="marks-badge">${sec.marks} marks</span>
        </div>
        ${sec.questions.map((q, qi) => renderQuestion(q, si, qi)).join('')}
      </div>
    `).join('')}
  `;
}

function renderQuestion(q, si, qi) {
  const ansId = `ans-${si}-${qi}`;
  return `
    <div class="question" id="q-${si}-${qi}">
      <div class="question-header">
        <div>
          <span class="question-number">${q.id || qi+1}.</span>
          <div class="question-text">${formatQuestionText(q.text)}</div>
        </div>
        <span class="question-marks">${q.marks} mk${q.marks > 1 ? 's' : ''}</span>
      </div>
      ${q.subtext ? `<p style="font-size:13px;color:var(--text-muted);margin-bottom:6px">${q.subtext}</p>` : ''}
      <button class="answer-toggle" onclick="toggleAnswer('${ansId}', this)">
        <span class="arrow">&#9660;</span> Show Answer
      </button>
      <div class="answer-content" id="${ansId}">
        ${formatAnswer(q.answer)}
        ${q.tutorial ? `<div class="answer-tutorial"><strong>&#128218; Explanation:</strong> ${q.tutorial}</div>` : ''}
      </div>
    </div>
  `;
}

function formatQuestionText(text) {
  if (!text) return '';
  if (!text.includes('```mermaid')) return text.replace(/\n/g, '<br>');
  
  const parts = text.split(/(```mermaid[\s\S]*?```)/);
  return parts.map(part => {
    const mermaidMatch = part.match(/```mermaid\n?([\s\S]*?)```/);
    if (mermaidMatch) {
      const diagram = mermaidMatch[1].trim();
      return '<div class="mermaid">' + diagram + '</div>';
    }
    return '<p>' + part.replace(/\n/g, '<br>') + '</p>';
  }).join('');
}

function toggleAnswer(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  btn.querySelector('.arrow').classList.toggle('open', isOpen);
  btn.innerHTML = `<span class="arrow ${isOpen ? 'open' : ''}">&#9660;</span> ${isOpen ? 'Hide Answer' : 'Show Answer'}`;
  
  if (isOpen) {
    if (window.Prism) Prism.highlightAllUnder(el);
    setTimeout(() => runMermaid(id), 100);
  }
}

function runMermaid(containerId) {
  if (typeof mermaid === 'undefined') return;
  const container = document.getElementById(containerId);
  if (!container) return;
  const diagrams = container.querySelectorAll('.mermaid');
  diagrams.forEach((el, i) => {
    const id = 'mermaid-' + containerId + '-' + i;
    if (!el.id) el.id = id;
    try {
      mermaid.run({ nodes: [el] });
    } catch(e) {}
  });
}

function formatAnswer(text) {
  if (!text) return '<div class="answer-inner"><p style="color:var(--text-muted)">Answer not yet available.</p></div>';
  
  const hasMermaid = text.includes('classDiagram') || text.includes('erDiagram') || 
                     text.includes('stateDiagram') || text.includes('flowchart') ||
                     text.includes('sequenceDiagram') || text.includes('useCaseDiagram') ||
                     text.includes('classDiagram-v2');
  
  if (hasMermaid) {
    return formatWithMermaid(text);
  }
  
  const isCode = text.includes('#include') || 
                 text.includes('class ') || 
                 text.includes('public static void main') ||
                 text.includes('SELECT ') ||
                 text.includes('CREATE TABLE') ||
                 text.includes('<?php') ||
                 text.includes('<form') ||
                 text.includes('function ') ||
                 text.includes('struct Node');
                  
  if (isCode) {
    let lang = 'language-clike';
    if (text.includes('SELECT ') || text.includes('CREATE TABLE')) lang = 'language-sql';
    else if (text.includes('<?php')) lang = 'language-php';
    else if (text.includes('<form') || text.includes('<!DOCTYPE')) lang = 'language-markup';
    else if (text.includes('public static void main') || text.includes('System.out')) lang = 'language-java';
    else if (text.includes('#include') || text.includes('cout <<')) lang = 'language-cpp';
    
    const escaped = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="${lang}">${escaped}</code></pre>`;
  } else {
    return `<div class="answer-inner"><p>${text.replace(/\n/g, '<br>')}</p></div>`;
  }
}

function formatWithMermaid(text) {
  const parts = text.split(/(```mermaid[\s\S]*?```)/);
  return '<div class="answer-inner">' + parts.map(part => {
    const mermaidMatch = part.match(/```mermaid\n?([\s\S]*?)```/);
    if (mermaidMatch) {
      const diagram = mermaidMatch[1].trim();
      return '<div class="mermaid">' + diagram + '</div>';
    }
    return '<p>' + part.replace(/\n/g, '<br>') + '</p>';
  }).join('') + '</div>';
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

window.debouncedSearch = debounce(handleSearch, 300);

function handleSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) {
    render();
    return;
  }

  const q = query.toLowerCase();
  const matches = [];

  for (const [year, data] of Object.entries(examData)) {
    data.papers.forEach((paper, pi) => {
      paper.sections.forEach((sec, si) => {
        sec.questions.forEach((question, qi) => {
          const text = (question.text + ' ' + (question.subtext || '')).toLowerCase();
          if (text.includes(q)) {
            matches.push({ year, paperIdx: pi, paperTitle: paper.title, sectionTitle: sec.title, question, si, qi });
          }
        });
      });
    });
  }

  if (matches.length === 0) {
    currentState = { view: 'search', query };
    const app = document.getElementById('app');
    app.innerHTML = `
      <a href="#" class="btn-back" onclick="navigateTo('home')">&larr; Back</a>
      <h2 class="page-title">Search Results</h2>
      <div class="no-results">
        <p>No results found for "<strong>${escapeHTML(query)}</strong>"</p>
        <p style="font-size:14px; margin-top:10px;">Try using different keywords or checking your spelling.</p>
      </div>
    `;
    return;
  }

  currentState = { view: 'search', query };
  const app = document.getElementById('app');
  app.innerHTML = `
    <a href="#" class="btn-back" onclick="navigateTo('home')">&larr; Back</a>
    <h2 class="page-title">Search Results</h2>
    <p class="page-meta">${matches.length} result${matches.length > 1 ? 's' : ''} for "${escapeHTML(query)}"</p>
    <div class="search-results">
      ${matches.map(m => `
        <div class="result-item" onclick="navigateTo('paper','${m.year}',${m.paperIdx});setTimeout(()=>scrollToQuestion('q-${m.si}-${m.qi}'),100)">
          <div class="result-meta">${m.year} &middot; ${m.paperTitle} &middot; ${m.sectionTitle}</div>
          <div class="result-text">${escapeHTML(m.question.text.length > 120 ? m.question.text.slice(0, 120) + '...' : m.question.text)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function scrollToQuestion(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('searchInput').value = '';
    navigateTo('home');
  }
});

render();
