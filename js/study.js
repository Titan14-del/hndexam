const ESSAY_TOPIC_RULES = [
  { name: 'Digital Literacy', keywords: ['digital literacy'] },
  { name: 'Digital Electronics', keywords: ['digital electronics'] },
  { name: 'Algorithms', keywords: ['algorithms', 'ds & alg', 'algorithm', 'data structure'] },
  { name: 'Procedural Programming', keywords: ['procedural programming', 'c prog', 'structural programming c', 'c programming', 'programming'] },
  { name: 'OOP', keywords: ['object oriented programming', 'oop'] },
  { name: 'Object Modeling / UML', keywords: ['object modeling', 'uml', 'object model'] },
  { name: 'Database', keywords: ['database'] },
  { name: 'Web Design', keywords: ['web'] },
  { name: 'Networking', keywords: ['networking', 'network'] },
  { name: 'Event Programming', keywords: ['event programming', 'vb.net'] },
  { name: 'Mobile', keywords: ['mobile programming', 'mobile operating'] },
  { name: 'System Architecture', keywords: ['system architecture'] },
  { name: 'Operating Systems', keywords: ['operating system'] },
  { name: 'Project Management', keywords: ['project management'] },
  { name: 'General Knowledge', keywords: ['general computer', 'digital society'] },
  { name: 'Computer Fundamentals', keywords: ['number system', 'logic gate', 'boolean', 'computer fundamental', 'computer technology', 'ms office', 'microsoft word', 'excel', 'powerpoint'] },
  { name: 'English', keywords: ['reading comprehension', 'grammar', 'spoken english', 'writing', 'composition'] },
  { name: 'French', keywords: ['compréhension', 'comprehension', 'expression libre', 'langue', 'rédaction', 'ecrite'] },
  { name: 'Mathematics', keywords: [
    'statistics', 'probability', 'statistique', 'analysis', 'calculus',
    'differential equation', 'mathematics', 'further mathematics',
    'transform', 'differential equations'
  ]},
  { name: 'Entrepreneurship', keywords: ['entrepreneurship'] },
  { name: 'Economics', keywords: ['general economics', 'economics'] },
  { name: 'Law & Civics', keywords: ['company law', 'labour law', 'fundamental rights', 'civics', 'business law'] },
];

const MCQ_TOPIC_RULES = [
  { name: 'Digital Literacy', keywords: ['digital literacy'] },
  { name: 'Digital Electronics', keywords: ['digital electronics'] },
  { name: 'Database', keywords: [
    'database', 'sql', 'query', 'select ', 'insert', 'table',
    'entity', 'attribute', 'relation', 'foreign key', 'primary key',
    'normalization', 'dbms', 'referential', 'tuple', 'order by',
    'where clause', 'create table', 'join', 'unique identifies a row'
  ]},
  { name: 'Networking', keywords: [
    'router', 'switch', 'hub', 'osi', 'tcp/ip', 'ip address', 'subnet',
    'mac address', 'network topology', 'gateway', 'dns', 'dhcp', 'ethernet',
    'lan', 'wan', 'protocol', 'firewall', 'routing', 'bridge', 'repeater',
    'modem', '10base', 'network layer', 'transport layer', 'network administrator'
  ]},
  { name: 'Procedural Programming', keywords: [
    'compiler', 'interpreter', 'array', 'loop',
    'printf', 'scanf', 'c program', 'arithmetic instruction',
    'return statement', 'recursion', 'pointer', 'structure', 'union',
    'factorial', 'function procedure'
  ]},
  { name: 'OOP', keywords: [
    'object', 'inheritance', 'polymorphism', 'encapsulation',
    'abstraction', 'constructor', 'method overriding', 'method overloading',
    'interface', 'object oriented'
  ]},
  { name: 'Web Design', keywords: [
    'html', 'css', 'element', 'tag', 'attribute', 'body',
    'div', 'web page', 'markup', 'font', 'style',
    'javascript', 'script', 'root tag', '<head>', '<form>'
  ]},
  { name: 'Operating Systems', keywords: [
    'process', 'thread', 'scheduling', 'cpu', 'memory', 'deadlock',
    'semaphore', 'mutex', 'kernel ', 'fifo', 'sjf', 'round robin',
    'throughput', 'turnaround', 'response time', 'pcb',
    'process control block', 'multithreading', 'cpu burst'
  ]},
  { name: 'Algorithms', keywords: [
    'algorithm', 'complexity', 'big o', 'sorting', 'searching',
    'tree', 'traversal', 'stack', 'queue', 'data structure', 'linked list',
    'vertex', 'edge', 'directed graph', 'undirected', 'depth first',
    'breadth first', 'graph data', 'graph of '
  ]},
  { name: 'Computer Fundamentals', keywords: [
    'binary', 'number system', 'logic gate', 'boolean', 'truth table',
    'bit', 'byte', 'hardware', 'software', 'motherboard', 'arithmetic logic unit',
    'control unit', 'register', 'memory unit', 'input device',
    'output device', 'storage', 'cpu'
  ]},
  { name: 'French', keywords: [
    'ponctuation', 'conjugaison', 'verbe', 'phrase', 'temps', 'passé composé',
    'imparfait', 'conditionnel', 'futur', 'présent', 'accord', 'orthographe',
    'grammaire', 'vocabulaire', 'préposition', 'adjectif', 'adverbe',
    'complément', 'subjonctif', 'participe', 'infinitif', 'groupe nominal',
    'déterminant', 'pronom', 'conjonction', 'préfixe', 'suffixe',
    'compréhension', 'expression', 'rédaction', 'lire', 'écrire',
    'synonyme', 'antonyme', 'lettre', 'ponctuer',
    'traduire', 'traduction', 'français', 'francaise'
  ]},
  { name: 'English', keywords: [
    'grammar', 'vocabulary', 'sentence', 'verb', 'noun', 'adjective', 'adverb',
    'preposition', 'conjunction', 'tense', 'plural', 'singular',
    'comprehension', 'passage', 'paragraph', 'essay', 'letter',
    'spoken', 'conversation', 'phrase', 'clause', 'punctuation', 'reading',
    'composition', 'write', 'fill in the blank', 'choose the correct',
    'reading comprehension', 'spoken english'
  ]},
  { name: 'Law & Civics', keywords: [
    'law', 'legal', 'rights', 'constitution', 'court', 'contract', 'company',
    'tort', 'crime', 'offence', 'citizen', 'ethics', 'moral', 'citizenship',
    'labour', 'employment', 'business law', 'fundamental rights',
    'civic', 'government', 'parliament', 'legislation', 'statute'
  ]},
  { name: 'Entrepreneurship', keywords: [
    'entrepreneur', 'entrepreneurship', 'business', 'enterprise', 'startup',
    'innovation', 'market', 'venture', 'capital', 'investment', 'profit',
    'revenue', 'business plan', 'small business', 'incubator'
  ]},
  { name: 'Economics', keywords: [
    'economics', 'economy', 'demand', 'supply', 'market', 'price', 'cost',
    'revenue', 'profit', 'inflation', 'gdp', 'unemployment', 'trade',
    'consumer', 'producer', 'scarcity', 'opportunity cost', 'equilibrium',
    'monopoly', 'competition', 'tax', 'subsidy', 'tariff', 'export', 'import'
  ]},
  { name: 'Mathematics', keywords: [
    'probability', 'variance', 'standard deviation', 'distribution',
    'laplace transform', 'integral', 'derivative', 'differential equation',
    'eigenvalue', 'theorem', 'asymptote', 'maclaurin', 'taylor series',
    'convergence', 'divergence', 'cosec', 'coth', 'tanh', 'sinh', 'cosh',
    'arithmetic progression', 'binomial', 'poisson', 'correlation coefficient',
    'determinant', 'gradient', 'parity', 'periodic function',
    'domain of', 'series', 'log(', 'ln(', 'f(x)', 'dx ',
    'mean ', 'median', 'period', 'limit as', 'limit x', 'dice',
    'coefficient', 'frequency', 'cumulative', 'decimal',
    'random variable', 'probability mass', 'hyperbolic',
    'moment', 'skewness', 'kurtosis', 'quartile', 'percentile',
    'matrices', 'vectors', 'scalar', 'symmetric', 'adjoint',
    'expectation', 'simplif', 'sqrt', 'p(a', 'p(b', 'p(x',
    'e(x)', 'e(x)=', 'linearly', 'trigonometric',
    'lim ', 'linear regression',
    'interpolation', 'extrapolation', 'stochastic',
    'linear algebra', 'differential', 'calculus',
    'is a factor', 'factoring', 'factorise', 'factorization',
    'sample of', 'sample data', 'sample mean',
    'range of', 'fibonacci', 'grad f',
    'defective', 'solves', 'absolute value',
    'vector', 'lim x', 'lim(', 'sin ', 'cos ', 'tan ',
    'solution of', 'class interval', 'class limit of', 'tan('
  ]}
];

const TOPIC_CATEGORIES = {
  'SWE Core': [
    'Algorithms', 'Procedural Programming', 'OOP', 'Object Modeling / UML',
    'Database', 'Web Design', 'Networking', 'Event Programming',
    'Mobile', 'System Architecture', 'Operating Systems', 'Project Management'
  ],
  'General': [
    'General Knowledge', 'Digital Literacy', 'Digital Electronics', 'Computer Fundamentals', 'English', 'French',
    'Mathematics', 'Entrepreneurship', 'Economics', 'Law & Civics'
  ]
};

let studyIndex = null;
let selectedYearFilter = {};

function isMCQSection(title) {
  const t = title.toLowerCase();
  return t.includes('multiple choice') || t.includes('mcq') ||
         t.includes('qcm') || t.includes('choix multiples');
}

function classifyMCQ(text) {
  const lower = text.toLowerCase();
  let bestTopic = 'General Knowledge';
  let bestScore = 0;
  for (const rule of MCQ_TOPIC_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestTopic = rule.name;
    }
  }
  return bestTopic;
}

function buildStudyIndex() {
  const index = {};
  const allTopicNames = [...new Set([
    ...ESSAY_TOPIC_RULES.map(r => r.name),
    ...MCQ_TOPIC_RULES.map(r => r.name),
    'General Knowledge'
  ])];
  allTopicNames.forEach(t => { index[t] = { essays: [], mcqs: [] }; });
  for (const [year, data] of Object.entries(examData)) {
    data.papers.forEach((paper, pi) => {
      paper.sections.forEach((sec, si) => {
        const st = sec.title.toLowerCase();
        if (isMCQSection(st)) {
          const pt = paper.title.toLowerCase();
          let paperTopic = null;
          for (const rule of ESSAY_TOPIC_RULES) {
            if (rule.keywords.some(kw => pt.includes(kw))) {
              paperTopic = rule.name;
              break;
            }
          }
          if (paperTopic !== 'Digital Literacy' && paperTopic !== 'Digital Electronics') {
            paperTopic = null;
          }
          sec.questions.forEach((q, qi) => {
            const topic = paperTopic || classifyMCQ(q.text + ' ' + (q.subtext || ''));
            if (!index[topic]) index[topic] = { essays: [], mcqs: [] };
            index[topic].mcqs.push({
              year, paperIdx: pi, paperTitle: paper.title,
              sectionTitle: sec.title, si, qi,
              question: q,
              source: year + ' \u00b7 ' + paper.title + ' \u00b7 ' + sec.title
            });
          });
        } else {
          let essayTopic = null;
          const pt = paper.title.toLowerCase();
          for (const rule of ESSAY_TOPIC_RULES) {
            if (rule.keywords.some(kw => pt.includes(kw))) {
              essayTopic = rule.name;
              break;
            }
          }
          if (!essayTopic) {
            for (const rule of ESSAY_TOPIC_RULES) {
              if (rule.keywords.some(kw => st.includes(kw))) {
                essayTopic = rule.name;
                break;
              }
            }
          }
          if (essayTopic) {
            sec.questions.forEach((q, qi) => {
              index[essayTopic].essays.push({
                year, paperIdx: pi, paperTitle: paper.title,
                sectionTitle: sec.title, si, qi,
                question: q,
                source: year + ' \u00b7 ' + paper.title + ' \u00b7 ' + sec.title
              });
            });
          }
        }
      });
    });
  }
  return index;
}

function getStudyIndex() {
  if (!studyIndex) studyIndex = buildStudyIndex();
  return studyIndex;
}
