let currentState = { view: 'home', year: null, paperIdx: null };

function navigateTo(view, year, paperIdx) {
  currentState = { view, year, paperIdx };
  render();
  window.scrollTo(0, 0);
}

function navigateToNotes(subView, yearId, subjectId, chapterId) {
  currentState = { view: 'notes', notesView: subView || 'home', notesYear: yearId, notesSubject: subjectId, notesChapter: chapterId };
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
  else if (view === 'notes') renderNotes(app);
  else if (view === 'search') { /* handled by handleSearch */ }
  renderNav();
}

function renderNotes(app) {
  const { notesView, notesYear, notesSubject, notesChapter } = currentState;
  if (notesView === 'home') app.innerHTML = renderNotesHome();
  else if (notesView === 'year') app.innerHTML = renderNotesYear(notesYear);
  else if (notesView === 'subject') app.innerHTML = renderSubject(notesYear, notesSubject);
  else if (notesView === 'chapter') { app.innerHTML = renderChapter(notesYear, notesSubject, notesChapter); renderAllMermaid(); }
}

function renderAllMermaid() {
  if (typeof mermaid === 'undefined') return;
  setTimeout(() => {
    const diagrams = document.querySelectorAll('#app .mermaid');
    diagrams.forEach((el, i) => {
      if (!el.id) el.id = 'nmermaid-' + i;
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
        ${sec.questions.map((q, qi) => renderQuestion(q, si, qi, year, paper.title, sec.title)).join('')}
      </div>
    `).join('')}
  `;
}

function renderQuestion(q, si, qi, year, paperTitle, sectionTitle) {
  const ansId = `ans-${si}-${qi}`;
  const relatedNotes = renderRelatedNotes(year, paperTitle, sectionTitle, q.id || (qi+1));
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
        ${relatedNotes}
      </div>
    </div>
  `;
}

function renderRelatedNotes(year, paperTitle, sectionTitle, qid) {
  const qidStr = 'Q' + qid;
  const links = [];
  for (const yearId of ['year1', 'year2']) {
    const yearData = notesData[yearId];
    if (!yearData) continue;
    for (const subject of yearData.subjects) {
      for (const chapter of subject.chapters) {
        for (const block of chapter.content) {
          if (block.type === 'related' && Array.isArray(block.value)) {
            for (const entry of block.value) {
              const paperMatch = paperTitle.toLowerCase().includes(entry.paper.toLowerCase()) ||
                                 entry.paper.toLowerCase().includes(paperTitle.toLowerCase());
              const sectionMatch = sectionTitle.toLowerCase().includes(entry.section.toLowerCase()) ||
                                   entry.section.toLowerCase().includes(sectionTitle.toLowerCase());
              if (entry.year === year && paperMatch && sectionMatch && entry.qid === qidStr) {
                links.push({
                  yearId,
                  subjectId: subject.id,
                  chapterId: chapter.id,
                  subjectTitle: subject.title,
                  chapterTitle: chapter.title
                });
              }
            }
          }
        }
      }
    }
  }
  if (links.length === 0) return '';
  const uniqueLinks = links.filter((l, i, arr) => i === arr.findIndex(x => x.chapterId === l.chapterId));
  return `<div class="question-related-notes"><strong>&#128221; Related Notes:</strong> ` +
    uniqueLinks.map(l =>
      `<a href="#" onclick="navigateToNotes('chapter','${l.yearId}','${l.subjectId}','${l.chapterId}');return false">${l.subjectTitle} &middot; ${l.chapterTitle}</a>`
    ).join(' &nbsp;|&nbsp; ') +
    `</div>`;
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

// ====== NOTES RENDERING ======

function renderNotesHome() {
  return `
    <h1 class="page-title">Course Notes</h1>
    <p class="page-meta">Exam-focused study notes organized by year and subject</p>
    <div class="notes-years-grid">
      ${Object.entries(notesData).map(([id, yearData]) => `
        <a href="#" class="notes-year-card" onclick="navigateToNotes('year','${id}',null,null)">
          <div class="notes-year-num">${yearData.title}</div>
          <div class="notes-year-subjects">${yearData.subjects.length} subjects</div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderNotesYear(yearId) {
  const yearData = notesData[yearId];
  if (!yearData) return '<p>Year not found.</p>';
  return `
    <a href="#" class="btn-back" onclick="navigateToNotes('home',null,null,null)">&larr; All Notes</a>
    <h1 class="page-title">${yearData.title}</h1>
    <p class="page-meta">${yearData.subjects.length} subjects</p>
    <div class="subjects-grid">
      ${yearData.subjects.map(s => `
        <a href="#" class="subject-card" onclick="navigateToNotes('subject','${yearId}','${s.id}',null)">
          <div class="subject-icon">${s.icon || '&#128218;'}</div>
          <div class="subject-title">${s.title}</div>
          <div class="subject-chapters">${s.chapters.length} chapter${s.chapters.length > 1 ? 's' : ''}</div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderSubject(yearId, subjectId) {
  const yearData = notesData[yearId];
  if (!yearData) return '<p>Year not found.</p>';
  const subject = yearData.subjects.find(s => s.id === subjectId);
  if (!subject) return '<p>Subject not found.</p>';
  const yearLabel = yearId === 'year1' ? 'Year 1' : 'Year 2';
  return `
    <a href="#" class="btn-back" onclick="navigateToNotes('year','${yearId}',null,null)">&larr; ${yearLabel}</a>
    <h1 class="page-title">${subject.icon || '&#128218;'} ${subject.title}</h1>
    <p class="page-meta">${subject.chapters.length} chapter${subject.chapters.length > 1 ? 's' : ''}</p>
    <div class="chapters-list">
      ${subject.chapters.map((ch, i) => `
        <a href="#" class="chapter-card" onclick="navigateToNotes('chapter','${yearId}','${subjectId}','${ch.id}')">
          <div class="chapter-num">${i + 1}</div>
          <div class="chapter-info">
            <div class="chapter-title">${ch.title}</div>
            ${ch.examTips ? `<div class="chapter-tips">${ch.examTips.length} exam tip${ch.examTips.length > 1 ? 's' : ''}</div>` : ''}
          </div>
          <div class="chapter-arrow">&rarr;</div>
        </a>
      `).join('')}
    </div>
  `;
}

function renderChapter(yearId, subjectId, chapterId) {
  const yearData = notesData[yearId];
  if (!yearData) return '<p>Year not found.</p>';
  const subject = yearData.subjects.find(s => s.id === subjectId);
  if (!subject) return '<p>Subject not found.</p>';
  const chapter = subject.chapters.find(c => c.id === chapterId);
  if (!chapter) return '<p>Chapter not found.</p>';

  let html = `
    <a href="#" class="btn-back" onclick="navigateToNotes('subject','${yearId}','${subjectId}',null)">&larr; ${subject.title}</a>
    <h1 class="page-title">${chapter.title}</h1>
  `;

  chapter.content.forEach(block => {
    if (block.type === 'text') {
      html += `<div class="note-text">${block.value}</div>`;
    } else if (block.type === 'list') {
      html += `<div class="note-list"><h3>${block.title || ''}</h3><ul>${block.values.map(v => `<li>${v}</li>`).join('')}</ul></div>`;
    } else if (block.type === 'mermaid') {
      html += `<div class="mermaid">${block.value}</div>`;
    } else if (block.type === 'code') {
      const escaped = block.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      html += `<pre><code class="language-${block.lang || 'clike'}">${escaped}</code></pre>`;
    } else if (block.type === 'table') {
      html += `<div class="note-table-wrapper"><table class="note-table"><thead><tr>${block.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
      block.rows.forEach(row => {
        html += `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`;
      });
      html += `</tbody></table></div>`;
    } else if (block.type === 'related') {
      html += `<div class="note-related"><h3>Related Exam Questions</h3><ul>`;
      block.value.forEach(r => {
        const paperIdx = findPaperIndex(r.year, r.paper);
        if (paperIdx !== -1) {
          html += `<li><a href="#" onclick="navigateTo('paper','${r.year}',${paperIdx});setTimeout(()=>scrollToQuestion('q-${getSectionIndex(r.year,paperIdx,r.section)}-${getQuestionIndex(r.qid)}'),200)">${r.year} &middot; ${r.paper} &middot; ${r.section} &middot; ${r.qid}</a></li>`;
        } else {
          html += `<li>${r.year} &middot; ${r.paper} &middot; ${r.section} &middot; ${r.qid}</li>`;
        }
      });
      html += `</ul></div>`;
    }
  });

  if (chapter.examTips && chapter.examTips.length > 0) {
    html += `<div class="note-exam-tips"><h3>&#128161; Exam Tips</h3><ul>${chapter.examTips.map(t => `<li>${t}</li>`).join('')}</ul></div>`;
  }

  return html;
}

function findPaperIndex(year, paperTitle) {
  const data = examData[year];
  if (!data) return -1;
  const idx = data.papers.findIndex(p => p.title.toLowerCase().includes(paperTitle.toLowerCase()));
  return idx;
}

function getSectionIndex(year, paperIdx, sectionTitle) {
  const data = examData[year];
  if (!data || !data.papers[paperIdx]) return 0;
  return data.papers[paperIdx].sections.findIndex(s => s.title.toLowerCase().includes(sectionTitle.toLowerCase()));
}

function getQuestionIndex(qid) {
  const num = parseInt(qid.replace(/[^0-9]/g, ''));
  return isNaN(num) ? 0 : num - 1;
}

// ====== SEARCH ======

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

  // Search exam questions
  for (const [year, data] of Object.entries(examData)) {
    data.papers.forEach((paper, pi) => {
      paper.sections.forEach((sec, si) => {
        sec.questions.forEach((question, qi) => {
          const text = (question.text + ' ' + (question.subtext || '')).toLowerCase();
          if (text.includes(q)) {
            matches.push({ type: 'exam', year, paperIdx: pi, paperTitle: paper.title, sectionTitle: sec.title, question, si, qi });
          }
        });
      });
    });
  }

  // Search notes
  const noteMatches = [];
  for (const [yearId, yearData] of Object.entries(notesData)) {
    yearData.subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        const chapterText = (chapter.title + ' ' + chapter.content.map(c => {
          if (c.type === 'text') return c.value;
          if (c.type === 'list') return (c.title || '') + ' ' + c.values.join(' ');
          if (c.type === 'code') return c.value;
          return '';
        }).join(' ')).toLowerCase();
        if (chapterText.includes(q)) {
          noteMatches.push({ yearId, subjectId: subject.id, subjectTitle: subject.title, chapterId: chapter.id, chapterTitle: chapter.title });
        }
      });
    });
  }

  if (matches.length === 0 && noteMatches.length === 0) {
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
  let html = `
    <a href="#" class="btn-back" onclick="navigateTo('home')">&larr; Back</a>
    <h2 class="page-title">Search Results</h2>
    <p class="page-meta">${matches.length + noteMatches.length} result${matches.length + noteMatches.length > 1 ? 's' : ''} for "${escapeHTML(query)}"</p>
    <div class="search-results">
  `;

  if (matches.length > 0) {
    html += `<h3 class="search-category">Exam Questions</h3>`;
    html += matches.map(m => `
      <div class="result-item" onclick="navigateTo('paper','${m.year}',${m.paperIdx});setTimeout(()=>scrollToQuestion('q-${m.si}-${m.qi}'),100)">
        <div class="result-meta">${m.year} &middot; ${m.paperTitle} &middot; ${m.sectionTitle}</div>
        <div class="result-text">${escapeHTML(m.question.text.length > 120 ? m.question.text.slice(0, 120) + '...' : m.question.text)}</div>
      </div>
    `).join('');
  }

  if (noteMatches.length > 0) {
    html += `<h3 class="search-category">Course Notes</h3>`;
    html += noteMatches.map(m => {
      const yearLabel = m.yearId === 'year1' ? 'Year 1' : 'Year 2';
      return `
      <div class="result-item" onclick="navigateToNotes('chapter','${m.yearId}','${m.subjectId}','${m.chapterId}')">
        <div class="result-meta">${yearLabel} &middot; ${escapeHTML(m.subjectTitle)}</div>
        <div class="result-text">${escapeHTML(m.chapterTitle)}</div>
      </div>`;
    }).join('');
  }

  html += `</div>`;
  app.innerHTML = html;
}

function scrollToQuestion(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}

// ====== NAV TABS ======

function renderNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const { view, notesView } = currentState;
  nav.innerHTML = `
    <a href="#" class="nav-tab ${view === 'home' || view === 'year' || view === 'paper' ? 'active' : ''}" onclick="navigateTo('home')">&#128218; Exams</a>
    <a href="#" class="nav-tab ${view === 'notes' ? 'active' : ''}" onclick="navigateToNotes('home',null,null,null)">&#128221; Notes</a>
  `;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('searchInput').value = '';
    navigateTo('home');
  }
});

(function initNav() {
  const header = document.querySelector('header .container');
  if (header) {
    const nav = document.createElement('nav');
    nav.id = 'mainNav';
    nav.className = 'main-nav';
    header.insertBefore(nav, header.querySelector('.header-controls'));
    renderNav();
  }
})();

render();
