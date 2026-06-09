let currentState = { view: 'home', year: null, paperIdx: null };
let prevState = null;

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

function navigateToStudy() {
  currentState = { view: 'study' };
  render();
  window.scrollTo(0, 0);
}

function navigateToStudyTopic(topicName) {
  currentState = { view: 'study-topic', topic: topicName };
  render();
  window.scrollTo(0, 0);
}

function navigateToPaperPdf(year, paperIdx) {
  currentState = { view: 'paper-pdf', year, paperIdx };
  render();
  window.scrollTo(0, 0);
}

function filterStudyTopic(topicName, year) {
  selectedYearFilter[topicName] = year;
  navigateToStudyTopic(topicName);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('hnd-theme', next);
}

function toggleMobileNav() {
  document.getElementById('mainNav').classList.toggle('open');
}

function closeMobileNav() {
  document.getElementById('mainNav').classList.remove('open');
}

function closeMobileNavIfOutside(e) {
  const nav = document.getElementById('mainNav');
  if (!nav.classList.contains('open')) return;
  if (e.target.closest('.hamburger, #mainNav')) return;
  nav.classList.remove('open');
}

(function initTheme() {
  const saved = localStorage.getItem('hnd-theme');
  if (saved) { document.documentElement.setAttribute('data-theme', saved); return; }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark');
})();

(function initMermaid() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' });
  }
})();

(function initTouchDetection() {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('touch-device');
  }
})();

function render() {
  const app = document.getElementById('app');
  try {
    const { view, year, paperIdx } = currentState;
    if (view === 'home') app.innerHTML = renderHome();
    else if (view === 'year') app.innerHTML = renderYear(year);
    else if (view === 'paper') { app.innerHTML = renderPaper(year, paperIdx); renderAllMermaid(); }
    else if (view === 'notes') renderNotes(app);
    else if (view === 'search') { /* handled by handleSearch */ }
    else if (view === 'study') app.innerHTML = renderStudyHome();
    else if (view === 'study-topic') app.innerHTML = renderStudyTopic(currentState.topic);
    else if (view === 'paper-pdf') { app.innerHTML = renderPaperPdf(year, paperIdx); renderAllMermaid(); }
    renderNav();
  } catch (e) {
    console.error('Render error:', e);
    app.innerHTML = '<div style="padding:40px;text-align:center"><h2>Something went wrong</h2><p style="color:var(--text-muted)">An error occurred while rendering this page.</p><button class="btn-back" data-nav="home" style="margin-top:16px">&larr; Go Home</button></div>';
  }
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
  requestAnimationFrame(() => {
    const diagrams = document.querySelectorAll('#app .mermaid');
    diagrams.forEach((el, i) => {
      if (!el.id) el.id = 'nmermaid-' + i;
      try { mermaid.run({ nodes: [el] }); } catch(e) { console.warn('Mermaid render error:', e); }
    });
  });
}

function renderHome() {
  const years = Object.keys(examData).sort().reverse();
  return `
    <h1 class="page-title">HND Software Engineering Exam Hub</h1>
    <p class="page-meta">Past exam papers with model answers — ${years[0]} to ${years[years.length - 1]}</p>
    <div class="year-grid">
      ${years.map(y => {
        const papers = examData[y].papers;
        return `<a href="#" class="year-card" data-nav="year" data-year="${y}">
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
    <a href="#" class="btn-back" data-nav="home">&larr; All Years</a>
    <h1 class="page-title">${year} Session</h1>
    <p class="page-meta">${data.papers.length} exam paper${data.papers.length > 1 ? 's' : ''}</p>
    ${data.papers.map((p, i) => `
      <div class="paper-card" data-nav="paper" data-year="${year}" data-paper="${i}">
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
    <a href="#" class="btn-back" data-nav="year" data-year="${year}">&larr; ${year} Papers</a>
    <div class="paper-toolbar">
      <h1 class="page-title" style="margin-bottom:0">${escapeHTML(paper.title)}</h1>
      <button class="pdf-btn" data-nav="paper-pdf" data-year="${year}" data-paper="${paperIdx}" title="View full paper as PDF">&#128196; View Full Paper (PDF)</button>
    </div>
    <p class="page-meta">
      ${paper.duration ? `Duration: ${escapeHTML(paper.duration)} &nbsp;|&nbsp; ` : ''}
      ${paper.credits ? `Credits: ${paper.credits} &nbsp;|&nbsp; ` : ''}
      ${escapeHTML(paper.description || '')}
    </p>
    ${paper.sections.map((sec, si) => `
      <div class="section">
        <div class="section-header">
          <h2>${escapeHTML(sec.title)}</h2>
          <span class="marks-badge">${sec.marks} marks</span>
        </div>
        ${sec.scenario ? `<div class="scenario-box">${sec.scenario.replace(/\n/g, '<br>')}</div>` : ''}
        ${sec.questions.map((q, qi) => renderQuestion(q, si, qi, year, paper.title, sec.title)).join('')}
      </div>
    `).join('')}
  `;
}

function renderPaperPdf(year, paperIdx) {
  const data = examData[year];
  if (!data || !data.papers[paperIdx]) return '<p>Paper not found.</p>';
  const paper = data.papers[paperIdx];

  const allQuestionsExpanded = paper.sections.map((sec, si) => `
    <div class="section">
      <div class="section-header">
        <h2>${sec.title}</h2>
        <span class="marks-badge">${sec.marks} marks</span>
      </div>
      ${sec.scenario ? `<div class="scenario-box">${sec.scenario.replace(/\n/g, '<br>')}</div>` : ''}
      ${sec.questions.map((q, qi) => {
        const ansId = `pdf-ans-${si}-${qi}`;
        return `
          <div class="question" id="pdf-q-${si}-${qi}">
            <div class="question-header">
              <div>
                <span class="question-number">${q.id || qi+1}.</span>
                <div class="question-text">${formatQuestionText(q.text)}</div>
              </div>
              <span class="question-marks">${q.marks} mk${q.marks > 1 ? 's' : ''}</span>
            </div>
            ${q.subtext ? `<p style="font-size:13px;color:var(--text-muted);margin-bottom:6px">${q.subtext}</p>` : ''}
            <div class="answer-content pdf-open" id="${ansId}">
              ${formatAnswer(q.answer)}
              ${q.tutorial ? `<div class="answer-tutorial"><strong>&#128218; Explanation:</strong> ${q.tutorial}</div>` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `).join('');

  return `
    <div class="pdf-container">
      <div class="pdf-toolbar">
        <a href="#" class="btn-back" onclick="navigateTo('paper','${year}',${paperIdx})">&larr; Back to Paper</a>
        <button class="pdf-btn pdf-print-btn" onclick="window.print()">&#128424; Print / Save as PDF</button>
      </div>
      <div class="pdf-paper">
        <h1 class="pdf-title">${year} — ${paper.title}</h1>
        <p class="pdf-meta">
          ${paper.duration ? `Duration: ${paper.duration}` : ''}
          ${paper.credits ? `${paper.duration ? ' &nbsp;|&nbsp; ' : ''}Credits: ${paper.credits}` : ''}
          ${paper.description ? `${(paper.duration || paper.credits) ? ' &nbsp;|&nbsp; ' : ''}${paper.description}` : ''}
        </p>
        ${allQuestionsExpanded}
      </div>
    </div>
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
      ${q.subtext ? `<p style="font-size:13px;color:var(--text-muted);margin-bottom:6px">${escapeHTML(q.subtext)}</p>` : ''}
      <button class="answer-toggle" data-toggle="answer" data-answer-id="${ansId}">
        <span class="arrow">&#9660;</span> Show Answer
      </button>
      <div class="answer-content" id="${ansId}">
        ${formatAnswer(q.answer)}
        ${q.tutorial ? `<div class="answer-tutorial"><strong>&#128218; Explanation:</strong> ${escapeHTML(q.tutorial)}</div>` : ''}
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
              const pt = paperTitle.toLowerCase(); const ep = entry.paper.toLowerCase();
              const paperMatch = pt === ep || pt.includes(ep) || ep.includes(pt);
              const st = sectionTitle.toLowerCase(); const es = entry.section.toLowerCase();
              const sectionMatch = st === es || st.includes(es) || es.includes(st);
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
      `<a href="#" data-nav="notes-chapter" data-year-id="${l.yearId}" data-subject-id="${l.subjectId}" data-chapter-id="${l.chapterId}">${escapeHTML(l.subjectTitle)} &middot; ${escapeHTML(l.chapterTitle)}</a>`
    ).join(' &nbsp;|&nbsp; ') +
    `</div>`;
}

function formatFraction(text) {
  return text
    .replace(/\(([^()]+)\)\/\(([^()]+)\)/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>')
    .replace(/\(([^()]+)\)\/(\d+)/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>')
    .replace(/(\d+)\/\(([^()]+)\)/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>')
    .replace(/\b(?!(?:\d{4}\/\d{4}))(\d+)\/(\d+)\b/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
}

function formatQuestionText(text) {
  if (!text) return '';
  if (!text.includes('```mermaid')) return formatFraction(text.replace(/\n/g, '<br>'));
  
  const parts = text.split(/(```mermaid[\s\S]*?```)/);
  return parts.map(part => {
    const mermaidMatch = part.match(/```mermaid\n?([\s\S]*?)```/);
    if (mermaidMatch) {
      const diagram = mermaidMatch[1].trim();
      return '<div class="mermaid">' + diagram + '</div>';
    }
    return '<p>' + formatFraction(part.replace(/\n/g, '<br>')) + '</p>';
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
    runMermaid(id);
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
    } catch(e) { console.warn('Mermaid render error:', e); }
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
      return '<div class="mermaid">' + escapeHTML(diagram) + '</div>';
    }
    return '<p>' + part.replace(/\n/g, '<br>') + '</p>';
  }).join('') + '</div>';
}

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
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
        <a href="#" class="notes-year-card" data-nav="notes-year" data-notes-year="${id}">
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
    <a href="#" class="btn-back" data-nav="notes-home">&larr; All Notes</a>
    <h1 class="page-title">${yearData.title}</h1>
    <p class="page-meta">${yearData.subjects.length} subjects</p>
    <div class="subjects-grid">
      ${yearData.subjects.map(s => `
        <a href="#" class="subject-card" data-nav="notes-subject" data-notes-year="${yearId}" data-notes-subject="${s.id}">
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
    <a href="#" class="btn-back" data-nav="notes-year" data-notes-year="${yearId}">&larr; ${escapeHTML(yearLabel)}</a>
    <h1 class="page-title">${subject.icon || '&#128218;'} ${subject.title}</h1>
    <p class="page-meta">${subject.chapters.length} chapter${subject.chapters.length > 1 ? 's' : ''}</p>
    <div class="chapters-list">
      ${subject.chapters.map((ch, i) => `
        <a href="#" class="chapter-card" data-nav="notes-chapter" data-year-id="${yearId}" data-subject-id="${subjectId}" data-chapter-id="${ch.id}">
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
    <a href="#" class="btn-back" data-nav="notes-subject" data-notes-year="${yearId}" data-notes-subject="${subjectId}">&larr; ${escapeHTML(subject.title)}</a>
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
          html += `<li><a href="#" data-nav="notes-paper" data-year="${r.year}" data-paper="${paperIdx}" data-section="${getSectionIndex(r.year,paperIdx,r.section)}" data-question="${getQuestionIndex(r.qid)}">${escapeHTML(r.year)} &middot; ${escapeHTML(r.paper)} &middot; ${escapeHTML(r.section)} &middot; ${escapeHTML(r.qid)}</a></li>`;
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
  const t = paperTitle.toLowerCase();
  let idx = data.papers.findIndex(p => p.title.toLowerCase() === t);
  if (idx === -1) idx = data.papers.findIndex(p => p.title.toLowerCase().includes(t));
  return idx;
}

function getSectionIndex(year, paperIdx, sectionTitle) {
  const data = examData[year];
  if (!data || !data.papers[paperIdx]) return 0;
  const t = sectionTitle.toLowerCase();
  let idx = data.papers[paperIdx].sections.findIndex(s => s.title.toLowerCase() === t);
  if (idx === -1) idx = data.papers[paperIdx].sections.findIndex(s => s.title.toLowerCase().includes(t));
  return idx;
}

function getQuestionIndex(qid) {
  if (typeof qid === 'number') return qid - 1;
  const parts = qid.match(/^(\d+)/);
  return parts ? parseInt(parts[1]) - 1 : 0;
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

const SEARCH_DEBOUNCE_MS = 500;
window.debouncedSearch = debounce(handleSearch, SEARCH_DEBOUNCE_MS);

function handleSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) {
    if (prevState) { currentState = prevState; prevState = null; render(); }
    else { render(); }
    return;
  }
  if (currentState.view !== 'search') prevState = { ...currentState };

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
      <a href="#" class="btn-back" data-nav="back-restore">&larr; Back</a>
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
    <a href="#" class="btn-back" data-nav="back-restore">&larr; Back</a>
    <h2 class="page-title">Search Results</h2>
    <p class="page-meta">${matches.length + noteMatches.length} result${matches.length + noteMatches.length > 1 ? 's' : ''} for "${escapeHTML(query)}"</p>
    <div class="search-results">
  `;

  if (matches.length > 0) {
    html += `<h3 class="search-category">Exam Questions</h3>`;
    html += matches.map(m => `
      <div class="result-item" data-nav="search-paper" data-year="${m.year}" data-paper="${m.paperIdx}" data-si="${m.si}" data-qi="${m.qi}">
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
      <div class="result-item" data-nav="notes-chapter" data-year-id="${m.yearId}" data-subject-id="${m.subjectId}" data-chapter-id="${m.chapterId}">
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

// ====== STUDY MODE ======

function renderStudyHome() {
  const index = getStudyIndex();
  const topics = Object.keys(index).sort(function(a, b) {
    const aTotal = index[a].essays.length + index[a].mcqs.length;
    const bTotal = index[b].essays.length + index[b].mcqs.length;
    return bTotal - aTotal;
  });

  const catMap = {};
  Object.keys(TOPIC_CATEGORIES).forEach(function(cat) {
    catMap[cat] = [];
  });
  catMap['Other'] = [];

  topics.forEach(function(t) {
    const data = index[t];
    const total = data.essays.length + data.mcqs.length;
    if (total === 0) return;
    const papers = new Set();
    data.essays.forEach(function(e) { papers.add(e.year + '|' + e.paperTitle); });
    data.mcqs.forEach(function(m) { papers.add(m.year + '|' + m.paperTitle); });
    const card = { name: t, essays: data.essays.length, mcqs: data.mcqs.length, total: total, papers: papers.size };

    let categorized = false;
    Object.keys(TOPIC_CATEGORIES).forEach(function(cat) {
      if (TOPIC_CATEGORIES[cat].indexOf(t) !== -1) {
        catMap[cat].push(card);
        categorized = true;
      }
    });
    if (!categorized) catMap['Other'].push(card);
  });

  let html = '<h1 class="page-title">Study by Topic</h1>' +
    '<p class="page-meta">Review questions from all years, organized by topic</p>';

  ['SWE Core', 'General', 'Mathematics', 'Other'].forEach(function(cat) {
    const cards = catMap[cat];
    if (!cards || cards.length === 0) return;
    html += '<h2 class="study-category">' + cat + '</h2><div class="study-grid">';
    cards.forEach(function(c) {
      html += '<a href="#" class="study-card" data-nav="study-topic" data-topic="' +
        escapeHTML(c.name) + '">' +
        '<h3>' + escapeHTML(c.name) + '</h3>' +
        '<div class="study-card-stats">' +
        '<span>' + c.essays + ' essay' + (c.essays !== 1 ? 's' : '') + '</span>' +
        (c.mcqs > 0 ? '<span>' + c.mcqs + ' MCQ' + (c.mcqs !== 1 ? 's' : '') + '</span>' : '') +
        '<span>' + c.papers + ' paper' + (c.papers !== 1 ? 's' : '') + '</span>' +
        '</div></a>';
    });
    html += '</div>';
  });

  return html;
}

function renderStudyTopic(topicName) {
  const index = getStudyIndex();
  const topicData = index[topicName];
  if (!topicData || (topicData.essays.length === 0 && topicData.mcqs.length === 0)) {
    return '<a href="#" class="btn-back" data-nav="study">&larr; All Topics</a>' +
      '<h1 class="page-title">' + escapeHTML(topicName) + '</h1>' +
      '<p class="page-meta">No questions found for this topic.</p>';
  }

  const paperSet = new Set();
  topicData.essays.forEach(function(e) { paperSet.add(e.year + '|' + e.paperTitle); });
  topicData.mcqs.forEach(function(m) { paperSet.add(m.year + '|' + m.paperTitle); });

  const years = new Set();
  topicData.essays.forEach(function(e) { years.add(e.year); });
  topicData.mcqs.forEach(function(m) { years.add(m.year); });
  const sortedYears = Array.from(years).sort();

  const filterYear = selectedYearFilter[topicName] || 'all';

  let html = '<a href="#" class="btn-back" data-nav="study">&larr; All Topics</a>' +
    '<h1 class="page-title">' + escapeHTML(topicName) + '</h1>' +
    '<p class="page-meta">' + (topicData.essays.length + topicData.mcqs.length) +
    ' questions across ' + paperSet.size + ' paper' + (paperSet.size !== 1 ? 's' : '') +
    (sortedYears.length > 0 ? ' (' + sortedYears[0] + '\u2013' + sortedYears[sortedYears.length - 1] + ')' : '') + '</p>' +
    '<div class="study-year-filter">' +
    '<button class="study-filter-btn' + (filterYear === 'all' ? ' active' : '') +
    '" data-nav="filter-study" data-topic="' + escapeHTML(topicName) + '" data-year="all">All Years</button>';

  sortedYears.slice().reverse().forEach(function(y) {
    html += '<button class="study-filter-btn' + (filterYear === y ? ' active' : '') +
      '" data-nav="filter-study" data-topic="' + escapeHTML(topicName) + '" data-year="' + y + '">' + y + '</button>';
  });
  html += '</div>';

  let idx = 0;

  const filterEssays = filterYear === 'all'
    ? topicData.essays
    : topicData.essays.filter(function(e) { return e.year === filterYear; });
  const filterMCQs = filterYear === 'all'
    ? topicData.mcqs
    : topicData.mcqs.filter(function(m) { return m.year === filterYear; });

  if (filterEssays.length > 0) {
    html += '<h3 class="study-type-header">Essay Questions (' + filterEssays.length + ')</h3>';
    var essayHtml = renderStudyQuestionGroup(filterEssays, idx);
    html += essayHtml;
    idx += filterEssays.length;
  }

  if (filterMCQs.length > 0) {
    html += '<h3 class="study-type-header">Multiple Choice Questions (' + filterMCQs.length + ')</h3>';
    html += renderStudyQuestionGroup(filterMCQs, idx);
  }

  return html;
}

function renderStudyQuestionGroup(entries, startIdx) {
  const yearMap = {};
  entries.forEach(function(e) {
    if (!yearMap[e.year]) yearMap[e.year] = {};
    if (!yearMap[e.year][e.paperTitle]) yearMap[e.year][e.paperTitle] = [];
    yearMap[e.year][e.paperTitle].push(e);
  });

  let html = '';
  let idx = startIdx;

  Object.keys(yearMap).sort().reverse().forEach(function(year) {
    Object.keys(yearMap[year]).sort().forEach(function(paperTitle) {
      var items = yearMap[year][paperTitle];
      html += '<div class="study-year-divider">' + year + ' \u00b7 ' + escapeHTML(paperTitle) + '</div>';
      items.forEach(function(item) {
        html += renderStudyQuestion(item.question, item.source, idx);
        idx++;
      });
    });
  });

  return html;
}

function renderStudyQuestion(q, source, idx) {
  const ansId = 'studya' + idx;
  return '<div class="study-question" id="sq-' + idx + '">' +
    '<div class="study-source">' + escapeHTML(source) + '</div>' +
    '<div class="question question-tight">' +
    '<div class="question-header">' +
    '<div>' +
    (q.id ? '<span class="question-number">' + q.id + '.</span>' : '') +
    '<div class="question-text">' + formatQuestionText(q.text) + '</div></div>' +
    '<span class="question-marks">' + q.marks + ' mk' + (q.marks > 1 ? 's' : '') + '</span></div>' +
    (q.subtext ? '<p class="study-subtext">' + escapeHTML(q.subtext) + '</p>' : '') +
    '<button class="answer-toggle" data-toggle="answer" data-answer-id="' + ansId + '">' +
    '<span class="arrow">&#9660;</span> Show Answer</button>' +
    '<div class="answer-content" id="' + ansId + '">' +
    formatAnswer(q.answer) +
    (q.tutorial ? '<div class="answer-tutorial"><strong>&#128218; Explanation:</strong> ' + escapeHTML(q.tutorial) + '</div>' : '') +
    '</div></div></div>';
}

// ====== NAV TABS ======

function renderNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const { view, notesView } = currentState;
  nav.innerHTML = `
    <a href="#" class="nav-tab ${view === 'home' || view === 'year' || view === 'paper' || view === 'paper-pdf' ? 'active' : ''}" data-nav="home">&#128218; Exams</a>
    <a href="#" class="nav-tab ${view === 'notes' ? 'active' : ''}" data-nav="notes-home">&#128221; Notes</a>
    <a href="#" class="nav-tab ${view === 'study' || view === 'study-topic' ? 'active' : ''}" data-nav="study">&#128214; Study</a>
  `;
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('searchInput').value = '';
    if (prevState) { currentState = prevState; prevState = null; render(); }
    else { navigateTo('home'); }
  }
});

(function initNav() {
  const header = document.querySelector('header .container');
  if (header) {
    // mainNav already exists in HTML; no need to create another
    renderNav();
  }
})();

document.addEventListener('click', function(e) {
  const toggle = e.target.closest('[data-toggle="answer"]');
  if (toggle) {
    toggleAnswer(toggle.dataset.answerId, toggle);
    return;
  }
  const nav = e.target.closest('[data-nav]');
  if (!nav) {
    closeMobileNavIfOutside(e);
    return;
  }
  if (nav.tagName === 'A') e.preventDefault();
  closeMobileNav();
  switch (nav.dataset.nav) {
    case 'home': navigateTo('home'); break;
    case 'year': navigateTo('year', nav.dataset.year); break;
    case 'paper': navigateTo('paper', nav.dataset.year, parseInt(nav.dataset.paper)); break;
    case 'paper-pdf': navigateToPaperPdf(nav.dataset.year, parseInt(nav.dataset.paper)); break;
    case 'notes-home': navigateToNotes('home', null, null, null); break;
    case 'notes-year': navigateToNotes('year', nav.dataset.notesYear, null, null); break;
    case 'notes-subject': navigateToNotes('subject', nav.dataset.notesYear, nav.dataset.notesSubject, null); break;
    case 'notes-chapter': navigateToNotes('chapter', nav.dataset.yearId, nav.dataset.subjectId, nav.dataset.chapterId); break;
    case 'study': navigateToStudy(); break;
    case 'study-topic': navigateToStudyTopic(nav.dataset.topic); break;
    case 'filter-study': filterStudyTopic(nav.dataset.topic, nav.dataset.year); break;
    case 'back-restore':
      if (prevState) { currentState = prevState; prevState = null; render(); }
      else { navigateTo('home'); }
      break;
    case 'search-paper':
      navigateTo('paper', nav.dataset.year, parseInt(nav.dataset.paper));
      setTimeout(function() { scrollToQuestion('q-' + nav.dataset.si + '-' + nav.dataset.qi); }, 100);
      break;
    case 'notes-paper':
      navigateTo('paper', nav.dataset.year, parseInt(nav.dataset.paper));
      setTimeout(function() { scrollToQuestion('q-' + nav.dataset.section + '-' + nav.dataset.question); }, 200);
      break;
  }
});

render();
