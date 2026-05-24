// HND Course Notes - Exam-focused study material
// Organized by Year/Semester with links to past exam questions

const notesData = {
  "year1": {
    "title": "Year 1 - Common Core",
    "subjects": [
      {
        "id": "computer-fundamentals",
        "title": "Computer Fundamentals",
        "icon": "\uD83D\uDCBB",
        "chapters": [
          {
            "id": "intro-computers",
            "title": "Introduction to Computers",
            "content": [
              { "type": "text", "value": "A computer is an electronic device that processes data under program control. The basic model uses the <strong>Input-Process-Output</strong> cycle: data enters via input devices, is processed by the CPU, and results are sent to output devices." },
              { "type": "mermaid", "value": "flowchart LR\n  A[Input] --> B[Process]\n  B --> C[Output]\n  C --> D[Storage]" },
              { "type": "list", "title": "Key Components", "values": [
                "<b>CPU</b> — Central Processing Unit, the brain of the computer, executes instructions",
                "<b>Memory</b> — RAM (volatile, temporary) and ROM (non-volatile, permanent)",
                "<b>Storage</b> — HDD, SSD, USB drives for persistent data storage",
                "<b>Motherboard</b> — Main circuit board connecting all components via buses"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Computer Technology", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know the IPO cycle and be able to label a block diagram", "Distinguish between RAM and ROM in terms of volatility and usage"]
          },
          {
            "id": "number-systems",
            "title": "Number Systems & Data Representation",
            "content": [
              { "type": "text", "value": "Computers use binary (base-2) internally. Understanding conversion between number systems is essential." },
              { "type": "list", "title": "Common Number Systems", "values": [
                "<b>Binary (Base-2)</b> — Digits: 0,1. Used directly by CPUs",
                "<b>Decimal (Base-10)</b> — Digits: 0-9. Used by humans",
                "<b>Hexadecimal (Base-16)</b> — Digits: 0-9,A-F. Compact representation of binary",
                "<b>Octal (Base-8)</b> — Digits: 0-7. Historical, used in Unix file permissions"
              ]},
              { "type": "text", "value": "<b>Conversion Example:</b> Decimal 13 → Binary: 1101 (8+4+0+1).<br><b>Binary to Hex:</b> Group 4 bits: 1101 1010 → 0xDA." },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Computer Technology", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Practice binary-decimal-hex conversions — common exam question", "Know 1s complement and 2s complement for negative numbers"]
          },
          {
            "id": "software-types",
            "title": "Types of Software",
            "content": [
              { "type": "text", "value": "Software is classified into two main categories:" },
              { "type": "list", "title": "Software Categories", "values": [
                "<b>System Software</b> — Operating systems, device drivers, utilities, language translators. Manages hardware and provides platform for applications",
                "<b>Application Software</b> — Word processors, spreadsheets, browsers, games. Performs specific user tasks"
              ]},
              { "type": "text", "value": "<b>Operating System</b> is the most important system software. It manages memory, processes, files, I/O, and provides user interface (CLI or GUI)." },
              { "type": "related", "value": [
                { "year": "2022", "paper": "Computer Technology", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Be able to classify any given software as system or application", "Know functions of an operating system"]
          },
          {
            "id": "input-output",
            "title": "Input/Output Devices",
            "content": [
              { "type": "list", "title": "Input Devices", "values": [
                "Keyboard, Mouse, Scanner, Microphone, Webcam, Barcode reader, Touch screen, Light pen, Joystick"
              ]},
              { "type": "list", "title": "Output Devices", "values": [
                "Monitor (CRT, LCD, LED), Printer (Laser, Inkjet, Dot matrix), Speaker, Projector, Plotter"
              ]},
              { "type": "text", "value": "<b>Difference:</b> Input devices send data <i>to</i> the computer; output devices receive data <i>from</i> the computer." },
              { "type": "related", "value": [
                { "year": "2020", "paper": "Computer Technology", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Match each device to its correct category (input vs output)", "Know storage devices as a third category: HDD, SSD, flash drive, optical disc"]
          },
          {
            "id": "computer-generations",
            "title": "Generations of Computers",
            "content": [
              { "type": "list", "title": "Five Generations", "values": [
                "<b>1st (1940-56)</b> — Vacuum tubes. ENIAC, UNIVAC. Large, slow, heat-generating",
                "<b>2nd (1956-63)</b> — Transistors. Smaller, faster, more reliable",
                "<b>3rd (1964-71)</b> — Integrated Circuits (ICs). Multiple transistors on one chip",
                "<b>4th (1971-present)</b> — Microprocessors. Entire CPU on one chip. PCs, laptops",
                "<b>5th (present-future)</b> — AI and machine learning. Voice recognition, robotics"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Computer Technology", "section": "Section A", "qid": "Q4" }
              ]}
            ],
            "examTips": ["Each generation's key technology (vacuum tube → transistor → IC → microprocessor → AI)", "Know one example computer from each generation"]
          }
        ]
      },
      {
        "id": "digital-electronics",
        "title": "Digital Electronics",
        "icon": "\u26A1",
        "chapters": [
          {
            "id": "logic-gates",
            "title": "Logic Gates",
            "content": [
              { "type": "text", "value": "Logic gates are the basic building blocks of digital circuits. Each gate implements a Boolean function." },
              { "type": "mermaid", "value": "flowchart LR\n  subgraph AND\n    A1[A] & B1[B] --> G1[AND] --> O1[Q = A-B]\n  end\n  subgraph OR\n    A2[A] & B2[B] --> G2[OR] --> O2[Q = A+B]\n  end\n  subgraph NOT\n    A3[A] --> G3[NOT] --> O3[Q = A']\n  end" },
              { "type": "table", "headers": ["Gate", "Symbol", "Expression", "Output when"], "rows": [
                ["AND", "&and;", "Q = A &middot; B", "1 when ALL inputs are 1"],
                ["OR", "&or;", "Q = A + B", "1 when AT LEAST one input is 1"],
                ["NOT", "&not;", "Q = A'", "Inverts input"],
                ["NAND", "&not;(&and;)", "Q = (A &middot; B)'", "0 when ALL inputs are 1"],
                ["NOR", "&not;(&or;)", "Q = (A + B)'", "1 when ALL inputs are 0"],
                ["XOR", "&oplus;", "Q = A &oplus; B", "1 when inputs DIFFER"],
                ["XNOR", "&odot;", "Q = A &odot; B", "1 when inputs SAME"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Digital Electronics", "section": "Section A", "qid": "Q1" },
                { "year": "2021", "paper": "Digital Electronics", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Memorize truth tables for AND, OR, NOT, NAND, NOR, XOR, XNOR", "NAND and NOR are universal gates — any circuit can be built from them"]
          },
          {
            "id": "boolean-algebra",
            "title": "Boolean Algebra & Simplification",
            "content": [
              { "type": "text", "value": "Boolean algebra is used to simplify logic expressions, reducing the number of gates needed." },
              { "type": "list", "title": "Key Laws", "values": [
                "Identity: A + 0 = A, A &middot; 1 = A",
                "Null: A + 1 = 1, A &middot; 0 = 0",
                "Idempotent: A + A = A, A &middot; A = A",
                "Complement: A + A' = 1, A &middot; A' = 0",
                "Commutative: A + B = B + A, A &middot; B = B &middot; A",
                "Associative: A + (B + C) = (A + B) + C, A &middot; (B &middot; C) = (A &middot; B) &middot; C",
                "Distributive: A &middot; (B + C) = A &middot; B + A &middot; C",
                "De Morgan's: (A + B)' = A' &middot; B', (A &middot; B)' = A' + B'"
              ]},
              { "type": "text", "value": "<b>De Morgan's Theorem</b> is frequently tested: the complement of a sum equals the product of complements, and vice versa." },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Digital Electronics", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Simplify expressions step-by-step citing which law applies at each step", "De Morgan's theorem appears regularly — memorize both forms"]
          },
          {
            "id": "flip-flops",
            "title": "Flip-Flops & Sequential Circuits",
            "content": [
              { "type": "text", "value": "Flip-flops are memory elements that store one bit. They are the building blocks of sequential circuits (circuits with memory)." },
              { "type": "list", "title": "Common Flip-Flops", "values": [
                "<b>SR Flip-Flop</b> — Set (Q=1), Reset (Q=0). Invalid when S=R=1",
                "<b>JK Flip-Flop</b> — No invalid state. Tooggles when J=K=1",
                "<b>D Flip-Flop</b> — Data input, Q = D at clock edge. Used in registers",
                "<b>T Flip-Flop</b> — Toggle. Q flips when T=1 at clock edge"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Digital Electronics", "section": "Section A", "qid": "Q4" }
              ]}
            ],
            "examTips": ["Understand difference between level-triggered and edge-triggered", "Know characteristic tables and excitation tables for each FF"]
          }
        ]
      },
      {
        "id": "mathematics",
        "title": "Mathematics (Statistics & Probability)",
        "icon": "\u2796",
        "chapters": [
          {
            "id": "descriptive-stats",
            "title": "Descriptive Statistics",
            "content": [
              { "type": "list", "title": "Measures of Central Tendency", "values": [
                "<b>Mean</b> (&mu; or x&#772;) = Sum of values / Number of values. Sensitive to outliers",
                "<b>Median</b> = Middle value when data is sorted. Not affected by outliers",
                "<b>Mode</b> = Most frequent value. Can be used for categorical data"
              ]},
              { "type": "list", "title": "Measures of Dispersion", "values": [
                "<b>Range</b> = Max - Min. Simple but ignores distribution",
                "<b>Variance</b> (&sigma;²) = Average squared deviation from mean",
                "<b>Standard Deviation</b> (&sigma;) = &radic;(variance). Most common measure of spread"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Mathematics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know formulas for mean, median, mode, variance, standard deviation", "Understand when to use each measure (e.g., median for skewed data)"]
          },
          {
            "id": "probability",
            "title": "Probability Theory",
            "content": [
              { "type": "text", "value": "Probability is the measure of how likely an event is to occur. Range: 0 (impossible) to 1 (certain)." },
              { "type": "list", "title": "Key Rules", "values": [
                "P(A &cup; B) = P(A) + P(B) - P(A &cap; B) [Addition Rule]",
                "P(A &cap; B) = P(A) &times; P(B) [For independent events]",
                "P(A &cap; B) = P(A) &times; P(B|A) [General multiplication]",
                "P(A|B) = P(A &cap; B) / P(B) [Conditional probability]",
                "<b>Bayes' Theorem:</b> P(A|B) = P(B|A) &times; P(A) / P(B)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Mathematics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Tree diagrams help visualize multi-stage probability problems", "Remember P(A&cap;B) = 0 for mutually exclusive events"]
          },
          {
            "id": "probability-distributions",
            "title": "Probability Distributions",
            "content": [
              { "type": "list", "title": "Discrete Distributions", "values": [
                "<b>Binomial</b> — Fixed n trials, 2 outcomes, constant p. P(X=k) = C(n,k) p^k (1-p)^(n-k)",
                "<b>Poisson</b> — Models rare events. P(X=k) = (e^(-&lambda;) &lambda;^k) / k!"
              ]},
              { "type": "list", "title": "Continuous Distributions", "values": [
                "<b>Normal Distribution</b> — Bell-shaped curve, symmetric about mean. 68-95-99.7 rule",
                "<b>Standard Normal</b> — Z-score = (x - &mu;) / &sigma;. Used for standardization"
              ]},
              { "type": "related", "value": [
                { "year": "2022", "paper": "Mathematics", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Know when to use Binomial vs Poisson", "68-95-99.7 rule for normal distribution is frequently tested"]
          },
          {
            "id": "correlation-regression",
            "title": "Correlation & Regression",
            "content": [
              { "type": "text", "value": "Correlation measures the strength and direction of a linear relationship between two variables." },
              { "type": "list", "title": "Key Concepts", "values": [
                "<b>Pearson's r</b> — Ranges from -1 (perfect negative) to +1 (perfect positive). 0 = no correlation",
                "<b>Scatter plot</b> — Visual representation of relationship between X and Y",
                "<b>Regression line</b> — Y = a + bX, where b is slope and a is intercept",
                "<b>Least squares method</b> — Minimizes sum of squared residuals"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Mathematics", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Correlation does not imply causation!", "Know how to calculate b (slope): b = &Sigma;(x-x&#772;)(y-y&#772;) / &Sigma;(x-x&#772;)²"]
          }
        ]
      },
      {
        "id": "entrepreneurship",
        "title": "Entrepreneurship",
        "icon": "\uD83D\uDCC8",
        "chapters": [
          {
            "id": "entrepreneurship-basics",
            "title": "Basics of Entrepreneurship",
            "content": [
              { "type": "text", "value": "<b>Entrepreneurship</b> is the process of identifying a business opportunity, acquiring resources, and starting a venture to exploit that opportunity." },
              { "type": "list", "title": "Key Characteristics of an Entrepreneur", "values": [
                "Risk-taking ability",
                "Innovation and creativity",
                "Self-confidence and initiative",
                "Vision and leadership",
                "Persistence and resilience",
                "Resourcefulness"
              ]},
              { "type": "list", "title": "Functions of an Entrepreneur", "values": [
                "Identifying business opportunities",
                "Mobilizing resources (capital, labor, materials)",
                "Organizing production",
                "Managing the business",
                "Bearing risks and uncertainty"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Entrepreneurship", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know the difference between an entrepreneur and a manager", "Intrapreneurship = entrepreneurship within an existing organization"]
          },
          {
            "id": "business-plan",
            "title": "Business Plan",
            "content": [
              { "type": "text", "value": "A <b>business plan</b> is a written document describing a business's goals, strategies, market, and financial projections." },
              { "type": "list", "title": "Components of a Business Plan", "values": [
                "Executive summary",
                "Company description",
                "Market analysis (industry, target market, competitors)",
                "Organization and management structure",
                "Product/service line",
                "Marketing and sales strategy",
                "Funding request",
                "Financial projections (P&L, cash flow, balance sheet)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Entrepreneurship", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Be able to list all sections of a business plan", "Know why a business plan is important (secures funding, guides strategy)"]
          },
          {
            "id": "business-types",
            "title": "Types of Business Organizations",
            "content": [
              { "type": "list", "title": "Business Structures", "values": [
                "<b>Sole Proprietorship</b> — One owner, unlimited liability, all profits to owner",
                "<b>Partnership</b> — 2+ owners, shared profits/losses, joint liability",
                "<b>Limited Liability Company (LLC)</b> — Hybrid, limited liability, flexible management",
                "<b>Corporation</b> — Separate legal entity, limited liability, shareholders, double taxation",
                "<b>Cooperative</b> — Owned and operated by members for mutual benefit"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Entrepreneurship", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Know advantages and disadvantages of each business type", "Focus on sole proprietorship vs corporation differences"]
          },
          {
            "id": "marketing",
            "title": "Marketing Fundamentals",
            "content": [
              { "type": "list", "title": "Marketing Mix (4Ps)", "values": [
                "<b>Product</b> — What you sell (features, quality, branding)",
                "<b>Price</b> — How much you charge (pricing strategies)",
                "<b>Place</b> — Where you sell (distribution channels)",
                "<b>Promotion</b> — How you communicate (advertising, PR, social media)"
              ]},
              { "type": "text", "value": "Extended to <b>7Ps</b> for services: People, Process, Physical evidence." },
              { "type": "list", "title": "Market Research Methods", "values": [
                "Primary: Surveys, interviews, focus groups, observation",
                "Secondary: Existing reports, government statistics, industry publications"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Entrepreneurship", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Be able to explain each of the 4Ps with examples", "Know difference between primary and secondary research"]
          }
        ]
      },
      {
        "id": "economics",
        "title": "General Economics",
        "icon": "\uD83D\uDCCA",
        "chapters": [
          {
            "id": "intro-economics",
            "title": "Introduction to Economics",
            "content": [
              { "type": "text", "value": "<b>Economics</b> is the study of how scarce resources are allocated to satisfy unlimited human wants." },
              { "type": "list", "title": "Basic Concepts", "values": [
                "<b>Scarcity</b> — Limited resources relative to unlimited wants (the fundamental problem)",
                "<b>Opportunity Cost</b> — The value of the next best alternative foregone",
                "<b>Marginal Analysis</b> — Comparing additional benefits vs additional costs",
                "<b>PPF</b> (Production Possibility Frontier) — Shows maximum output combinations"
              ]},
              { "type": "mermaid", "value": "flowchart TD\n  A[Scarcity] --> B[Choice]\n  B --> C[Opportunity Cost]\n  B --> D[Resource Allocation]\n  A --> E[PPF Model]" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "General Economics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Opportunity cost is a recurring concept across many exam questions", "Know how to interpret a PPF curve"]
          },
          {
            "id": "supply-demand",
            "title": "Supply & Demand",
            "content": [
              { "type": "text", "value": "Supply and Demand are the forces that determine market prices and quantities." },
              { "type": "list", "title": "Law of Demand", "values": [
                "As price increases, quantity demanded decreases (ceteris paribus)",
                "Factors shifting demand: income, tastes, substitutes, complements, expectations",
                "Movement <i>along</i> demand curve = price change; shift of curve = other factors"
              ]},
              { "type": "list", "title": "Law of Supply", "values": [
                "As price increases, quantity supplied increases",
                "Factors shifting supply: technology, input costs, taxes, number of sellers"
              ]},
              { "type": "text", "value": "<b>Market Equilibrium</b> occurs where quantity demanded = quantity supplied. Price adjusts naturally toward equilibrium." },
              { "type": "related", "value": [
                { "year": "2021", "paper": "General Economics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Be able to draw and label supply/demand diagrams showing equilibrium", "Distinguish between movement along vs shift of a curve"]
          },
          {
            "id": "market-structures",
            "title": "Market Structures",
            "content": [
              { "type": "table", "headers": ["Structure", "Firms", "Product", "Entry", "Example"], "rows": [
                ["Perfect Competition", "Many", "Identical", "Free", "Agriculture"],
                ["Monopoly", "One", "Unique", "Blocked", "Utility companies"],
                ["Oligopoly", "Few", "Differentiated", "Difficult", "Telecom, airlines"],
                ["Monopolistic Competition", "Many", "Differentiated", "Free", "Restaurants"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "General Economics", "section": "Section B", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Know the key characteristics that distinguish each market structure", "Monopoly has highest market power, perfect competition has zero"]
          },
          {
            "id": "macroeconomics",
            "title": "Macroeconomics Basics",
            "content": [
              { "type": "list", "title": "Key Concepts", "values": [
                "<b>GDP</b> (Gross Domestic Product) — Total value of goods/services produced in a country",
                "<b>Inflation</b> — General rise in price levels, measured by CPI",
                "<b>Unemployment</b> — Number of jobless people actively seeking work",
                "<b>Fiscal Policy</b> — Government spending and taxation decisions",
                "<b>Monetary Policy</b> — Central bank control of money supply and interest rates"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "General Economics", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Know difference between fiscal and monetary policy", "Inflation &times; unemployment trade-off = Phillips Curve"]
          }
        ]
      },
      {
        "id": "company-law",
        "title": "Company Law",
        "icon": "\u2696\uFE0F",
        "chapters": [
          {
            "id": "company-formation",
            "title": "Company Formation & Types",
            "content": [
              { "type": "list", "title": "Types of Companies", "values": [
                "<b>Private Limited Company (Ltd)</b> — Restricts share transfer, max 50 members, cannot invite public to subscribe",
                "<b>Public Limited Company (PLC)</b> — Can sell shares to public, minimum 7 members, must publish accounts",
                "<b>Unlimited Company</b> — Members have unlimited liability"
              ]},
              { "type": "list", "title": "Steps to Form a Company", "values": [
                "1. Name reservation and approval",
                "2. Draft Memorandum and Articles of Association",
                "3. Register with Registrar of Companies",
                "4. Certificate of Incorporation issued",
                "5. Commence business (PLC needs Trading Certificate)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Company Law", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Memorize differences between private vs public companies", "Know the contents of Memorandum of Association (name, registered office, objectives, liability, capital)"]
          },
          {
            "id": "directors-duties",
            "title": "Directors & Their Duties",
            "content": [
              { "type": "list", "title": "Types of Directors", "values": [
                "Executive Director — Involved in day-to-day management",
                "Non-Executive Director — Advisory role, not involved in daily operations",
                "Managing Director — Chief executive, highest management authority"
              ]},
              { "type": "list", "title": "Duties of Directors", "values": [
                "Duty of care and skill",
                "Fiduciary duty (act in good faith for company benefit)",
                "Duty to avoid conflicts of interest",
                "Duty to declare interests in contracts",
                "Duty not to make secret profits"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Company Law", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Directors owe duties to the COMPANY, not to shareholders individually", "Fiduciary duty is the most important — act in good faith"]
          },
          {
            "id": "shareholders",
            "title": "Shareholders & Meetings",
            "content": [
              { "type": "list", "title": "Shareholder Rights", "values": [
                "Right to vote at general meetings",
                "Right to receive dividends",
                "Right to inspect company accounts",
                "Right to transfer shares",
                "Right to sue for wrongful acts"
              ]},
              { "type": "list", "title": "Types of Meetings", "values": [
                "<b>AGM</b> (Annual General Meeting) — Held once per year",
                "<b>EGM</b> (Extraordinary General Meeting) — Held for urgent matters",
                "Board meetings — Directors' regular meetings"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Company Law", "section": "Section B", "qid": "Q2" }
              ]}
            ],
            "examTips": ["AGM must be held within 15 months of previous AGM", "Know minimum notice periods for meetings"]
          },
          {
            "id": "winding-up",
            "title": "Winding Up / Liquidation",
            "content": [
              { "type": "list", "title": "Methods of Winding Up", "values": [
                "<b>Compulsory Winding Up</b> — By court order, usually due to inability to pay debts",
                "<b>Voluntary Winding Up</b> — Members' voluntary (solvent) or creditors' voluntary (insolvent)"
              ]},
              { "type": "list", "title": "Grounds for Compulsory Winding Up", "values": [
                "Company unable to pay its debts",
                "Just and equitable ground",
                "Failure to file statutory documents",
                "Business carried on illegally"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Company Law", "section": "Section B", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Know the order of payment in liquidation: secured creditors → preferential → unsecured → shareholders", "Difference between members' and creditors' voluntary winding up"]
          }
        ]
      },
      {
        "id": "law-citizenship",
        "title": "Law and Citizenship",
        "icon": "\uD83C\uDFDB\uFE0F",
        "chapters": [
          {
            "id": "sources-cameroon-law",
            "title": "Sources of Cameroonian Law",
            "content": [
              { "type": "list", "title": "Sources", "values": [
                "<b>Written Law (Statutes)</b> — Legislation passed by Parliament",
                "<b>Customary Law</b> — Traditional rules and practices of communities",
                "<b>Case Law (Precedent)</b> — Decisions of higher courts binding on lower courts",
                "<b>Doctrine</b> — Legal scholarly writings (persuasive authority)",
                "<b>International Law</b> — Treaties and conventions ratified by Cameroon"
              ]},
              { "type": "text", "value": "Cameroon has a <b>bijural</b> (bi-legal) system: English Common Law in NW/SW regions and French Civil Law in the other 8 regions." },
              { "type": "related", "value": [
                { "year": "2020", "paper": "Law and Citizenship", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Understand why Cameroon has two legal systems (colonial history: British and French)", "Know hierarchy of courts in Cameroon"]
          },
          {
            "id": "citizenship",
            "title": "Citizenship",
            "content": [
              { "type": "list", "title": "Modes of Acquiring Citizenship", "values": [
                "<b>Jus Sanguinis</b> (right of blood) — Citizenship by descent from citizen parents",
                "<b>Jus Soli</b> (right of soil) — Citizenship by birth in the territory",
                "<b>Naturalization</b> — Citizenship granted to foreign nationals after meeting residency requirements",
                "<b>Registration</b> — Marriage, adoption, or special circumstances"
              ]},
              { "type": "list", "title": "Loss of Citizenship", "values": [
                "Renunciation (voluntary giving up)",
                "Deprivation (government revokes for fraud or disloyalty)",
                "Acquisition of another citizenship (in countries that don't allow dual)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Law and Citizenship", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know jus sanguinis vs jus soli — this is a common exam question", "Rights of citizens vs non-citizens"]
          },
          {
            "id": "human-rights",
            "title": "Human Rights & Fundamental Freedoms",
            "content": [
              { "type": "list", "title": "Categories of Rights", "values": [
                "<b>Civil & Political Rights</b> — Right to life, speech, assembly, vote, fair trial",
                "<b>Economic & Social Rights</b> — Right to work, education, health, adequate standard of living",
                "<b>Environmental Rights</b> — Right to clean environment and sustainable development"
              ]},
              { "type": "text", "value": "The <b>UDHR</b> (Universal Declaration of Human Rights, 1948) is the foundational international document. Cameroon is a signatory." },
              { "type": "related", "value": [
                { "year": "2020", "paper": "Law and Citizenship", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Be able to distinguish between civil, political, social and economic rights", "Know the role of the Human Rights Commission in Cameroon"]
          }
        ]
      },
      {
        "id": "french",
        "title": "French Language",
        "icon": "\uD83C\uDDEB\uD83C\uDDF7",
        "chapters": [
          {
            "id": "french-grammar",
            "title": "Basic French Grammar",
            "content": [
              { "type": "list", "title": "Articles (Articles)", "values": [
                "<b>Definite:</b> le (masc), la (fem), les (plural), l' (before vowel)",
                "<b>Indefinite:</b> un (masc), une (fem), des (plural)",
                "<b>Partitive:</b> du, de la, de l' (some/any)"
              ]},
              { "type": "list", "title": "Common Verbs (Pr&eacute;sent)", "values": [
                "<b>&Ecirc;tre</b> (to be) &mdash; je suis, tu es, il/elle est, nous sommes, vous &ecirc;tes, ils/elles sont",
                "<b>Avoir</b> (to have) &mdash; j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont",
                "<b>Aller</b> (to go) &mdash; je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont",
                "<b>Faire</b> (to do/make) &mdash; je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "French Language", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["For HND French, focus on verb conjugation (present, pass&eacute; compos&eacute;, future)", "Know how to form negative: ne + verb + pas"]
          },
          {
            "id": "french-vocab",
            "title": "Essential Vocabulary & Expressions",
            "content": [
              { "type": "list", "title": "Introductions & Greetings", "values": [
                "Bonjour (Hello), Bonsoir (Good evening), Salut (Hi)",
                "Comment allez-vous? / &Ccedil;a va? (How are you?)",
                "Je m'appelle... (My name is...)",
                "Enchant&eacute;(e) (Nice to meet you)",
                "Au revoir (Goodbye), &Agrave; bient&ocirc;t (See you soon)"
              ]},
              { "type": "list", "title": "Numbers", "values": [
                "un(1), deux(2), trois(3), quatre(4), cinq(5), six(6), sept(7), huit(8), neuf(9), dix(10)",
                "vingt(20), trente(30), quarante(40), cinquante(50), soixante(60)",
                "cent(100), mille(1000)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "French Language", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Practice writing short paragraphs about yourself, your family, and your studies", "Know how to tell time in French"]
          }
        ]
      },
      {
        "id": "english",
        "title": "English Language",
        "icon": "\uD83D\uDCDD",
        "chapters": [
          {
            "id": "english-grammar",
            "title": "Grammar & Usage",
            "content": [
              { "type": "list", "title": "Parts of Speech", "values": [
                "<b>Noun</b> — Person, place, thing, idea (e.g., computer, student, freedom)",
                "<b>Pronoun</b> — Replaces noun (he, she, it, they, who, which)",
                "<b>Verb</b> — Action or state (run, is, write, have)",
                "<b>Adjective</b> — Modifies noun (fast, blue, three)",
                "<b>Adverb</b> — Modifies verb/adjective (quickly, very, well)",
                "<b>Preposition</b> — Shows relationship (in, on, at, by, with)",
                "<b>Conjunction</b> — Connects words/clauses (and, but, or, because)"
              ]},
              { "type": "list", "title": "Common Grammar Rules", "values": [
                "Subject-verb agreement: singular subject &rarr; singular verb",
                "Tense consistency: don't shift tenses without reason",
                "Articles: a (before consonant), an (before vowel), the (specific)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "English Language", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Focus on subject-verb agreement and tense usage — most common errors", "Know when to use who vs whom"]
          },
          {
            "id": "english-comprehension",
            "title": "Comprehension & Summary Writing",
            "content": [
              { "type": "list", "title": "Reading Comprehension Strategy", "values": [
                "1. Skim the passage for main idea (first and last paragraphs)",
                "2. Read questions carefully before re-reading",
                "3. Scan for keywords from questions in the text",
                "4. Answer in your own words where possible",
                "5. Support answers with evidence from the passage"
              ]},
              { "type": "list", "title": "Summary Writing Tips", "values": [
                "Identify main points only, omit examples and repetition",
                "Use your own words (paraphrase)",
                "Stay within the word limit",
                "Maintain logical flow",
                "Write in complete sentences, not bullet points"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "English Language", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Summary should be about 1/3 the length of the original", "Do not copy phrases directly from the passage"]
          },
          {
            "id": "essay-writing",
            "title": "Essay & Letter Writing",
            "content": [
              { "type": "list", "title": "Essay Structure", "values": [
                "<b>Introduction</b> — Hook, context, thesis statement",
                "<b>Body paragraphs</b> — Each with topic sentence, evidence, explanation",
                "<b>Conclusion</b> — Restate thesis, summarize key points, final thought"
              ]},
              { "type": "list", "title": "Formal Letter Structure", "values": [
                "Sender's address (top right)",
                "Date",
                "Recipient's address (left, below date)",
                "Salutation: Dear Sir/Madam,",
                "Subject line (bold/underline)",
                "Body: Introduction, details, conclusion",
                "Closing: Yours faithfully, (if salutation was Sir/Madam)",
                "Closing: Yours sincerely, (if salutation was by name)",
                "Signature and printed name"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "English Language", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know formal vs informal letter formats", "For essays, a strong thesis statement is critical"]
          }
        ]
      }
    ]
  },
  "year2": {
    "title": "Year 2 - SWE Specialization",
    "subjects": [
      {
        "id": "c-programming",
        "title": "C Programming",
        "icon": "\uD83D\uDCDF",
        "chapters": [
          {
            "id": "c-basics",
            "title": "C Language Basics",
            "content": [
              { "type": "text", "value": "C is a structured, procedural programming language developed by Dennis Ritchie at Bell Labs. It is the foundation for many modern languages." },
              { "type": "code", "lang": "c", "value": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}" },
              { "type": "list", "title": "Basic Structure of a C Program", "values": [
                "Preprocessor directives (#include, #define)",
                "Global declarations (variables, functions)",
                "main() function — program entry point",
                "Statements and expressions inside main()",
                "Return statement"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "C Programming", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Every C program must have a main() function", "stdio.h is needed for input/output functions"]
          },
          {
            "id": "c-datatypes",
            "title": "Data Types, Variables & Operators",
            "content": [
              { "type": "table", "headers": ["Data Type", "Size (bytes)", "Format Specifier", "Range"], "rows": [
                ["int", "4", "%d", "-2,147,483,648 to 2,147,483,647"],
                ["float", "4", "%f", "1.2E-38 to 3.4E+38"],
                ["double", "8", "%lf", "2.3E-308 to 1.7E+308"],
                ["char", "1", "%c", "-128 to 127 or 0 to 255"]
              ]},
              { "type": "list", "title": "Operator Categories", "values": [
                "Arithmetic: +, -, *, /, %, ++, --",
                "Relational: ==, !=, <, >, <=, >=",
                "Logical: &&, ||, !",
                "Assignment: =, +=, -=, *=, /=, %=",
                "Bitwise: &, |, ^, ~, <<, >>"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "C Programming", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Know sizeof() operator — it returns size in bytes", "Integer division truncates (e.g., 5/2 = 2, not 2.5)"]
          },
          {
            "id": "c-control",
            "title": "Control Structures",
            "content": [
              { "type": "code", "lang": "c", "value": "// if-else\nif (condition) {\n    // code\n} else if (condition) {\n    // code\n} else {\n    // code\n}\n\n// switch\nswitch (expression) {\n    case 1: break;\n    case 2: break;\n    default: break;\n}\n\n// loops\nfor (int i = 0; i < 10; i++) { }\nwhile (condition) { }\ndo { } while (condition);" },
              { "type": "list", "title": "Loop Selection", "values": [
                "for — when you know the number of iterations",
                "while — when iteration depends on a condition checked before",
                "do-while — when the loop must execute at least once",
                "break — exits the loop immediately",
                "continue — skips remaining iteration, goes to next"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "C Programming", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["switch works only with integer/char expressions, not floats/strings", "Don't forget break in each case — otherwise fallthrough occurs"]
          },
          {
            "id": "c-functions",
            "title": "Functions",
            "content": [
              { "type": "text", "value": "Functions are reusable blocks of code. A function must be declared (prototype) before use." },
              { "type": "code", "lang": "c", "value": "// Function prototype (declaration)\nint add(int a, int b);\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}\n\n// Call\nint sum = add(5, 3);" },
              { "type": "list", "title": "Parameter Passing", "values": [
                "<b>Pass by value</b> — A copy is passed; original variable unchanged",
                "<b>Pass by reference</b> (using pointers) — Address is passed; original can be modified"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "C Programming", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["C uses pass-by-value by default", "Use pointers to simulate pass-by-reference"]
          },
          {
            "id": "c-arrays",
            "title": "Arrays & Strings",
            "content": [
              { "type": "code", "lang": "c", "value": "// Array declaration and initialization\nint arr[5] = {10, 20, 30, 40, 50};\nint matrix[3][3];  // 2D array\n\n// Accessing\narr[2] = 35;  // index 2 (third element)\n\n// String (array of chars)\nchar name[] = \"Alice\";\nchar name2[20];\nstrcpy(name2, \"Bob\");\nint len = strlen(name);" },
              { "type": "text", "value": "Arrays in C are zero-indexed. Strings are null-terminated character arrays ('\\0' marks the end). String functions are in <string.h>." },
              { "type": "related", "value": [
                { "year": "2020", "paper": "C Programming", "section": "Section A", "qid": "Q4" }
              ]}
            ],
            "examTips": ["Array index bounds are NOT checked — buffer overflow risk", "strlen() returns length without null terminator; sizeof includes it"]
          },
          {
            "id": "c-pointers",
            "title": "Pointers & Dynamic Memory",
            "content": [
              { "type": "code", "lang": "c", "value": "int x = 10;\nint *ptr = &x;  // ptr holds address of x\n*ptr = 20;       // dereference: changes x to 20\n\n// Dynamic allocation\nint *arr = (int*)malloc(5 * sizeof(int));\nif (arr != NULL) {\n    arr[0] = 1;\n    free(arr);  // always free allocated memory\n}" },
              { "type": "list", "title": "Key Pointer Concepts", "values": [
                "&amp; — address-of operator (gets memory address)",
                "* — dereference operator (accesses value at address)",
                "malloc() — allocates memory on heap",
                "calloc() — allocates and zero-initializes",
                "realloc() — resizes allocated memory",
                "free() — releases allocated memory"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "C Programming", "section": "Section B", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Always check if malloc returned NULL (out of memory)", "Always free dynamically allocated memory to prevent leaks"]
          },
          {
            "id": "c-structures",
            "title": "Structures & File I/O",
            "content": [
              { "type": "code", "lang": "c", "value": "// Structure definition\nstruct Student {\n    int id;\n    char name[50];\n    float gpa;\n};\n\nstruct Student s1 = {101, \"John\", 3.8};\ns1.gpa = 3.9;\n\n// File operations\nFILE *fp = fopen(\"data.txt\", \"r\");\nif (fp != NULL) {\n    char buffer[256];\n    while (fgets(buffer, 256, fp) != NULL) {\n        printf(\"%s\", buffer);\n    }\n    fclose(fp);\n}" },
              { "type": "list", "title": "File Modes", "values": [
                "\"r\" — read (file must exist)",
                "\"w\" — write (creates/truncates)",
                "\"a\" — append (creates if not exists)",
                "\"r+\" — read/write (file must exist)",
                "\"w+\" — read/write (creates/truncates)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "C Programming", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Always close files after use (fclose)", "fgets() is safer than gets() — prevents buffer overflow"]
          }
        ]
      },
      {
        "id": "oop",
        "title": "Object-Oriented Programming (C++/Java)",
        "icon": "\uD83D\uDCD7",
        "chapters": [
          {
            "id": "oop-basics",
            "title": "OOP Core Concepts",
            "content": [
              { "type": "list", "title": "Four Pillars of OOP", "values": [
                "<b>Encapsulation</b> — Bundling data and methods; hiding internal state via private members",
                "<b>Inheritance</b> — A class derives from another, reusing and extending functionality",
                "<b>Polymorphism</b> — Same interface, different implementations (overloading, overriding)",
                "<b>Abstraction</b> — Hiding complex implementation details, showing only essential features"
              ]},
              { "type": "mermaid", "value": "classDiagram\n  class Animal {\n    +String name\n    +makeSound()\n  }\n  class Dog {\n    +makeSound()\n  }\n  class Cat {\n    +makeSound()\n  }\n  Animal <|-- Dog\n  Animal <|-- Cat" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "OOP", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know the 4 pillars with definitions and examples", "Be able to read and draw UML class diagrams representing OOP design"]
          },
          {
            "id": "cpp-classes",
            "title": "C++ Classes & Objects",
            "content": [
              { "type": "code", "lang": "cpp", "value": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    int id;\n    string name;\n\npublic:\n    // Constructor\n    Student(int i, string n) : id(i), name(n) {}\n\n    // Method\n    void display() {\n        cout << \"ID: \" << id << \", Name: \" << name << endl;\n    }\n};\n\nint main() {\n    Student s1(101, \"Alice\");\n    s1.display();\n    return 0;\n}" },
              { "type": "list", "title": "Access Specifiers", "values": [
                "private — accessible only within the class",
                "protected — accessible within class and derived classes",
                "public — accessible from anywhere"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "OOP", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Constructor has same name as class and no return type", "Destructor (~ClassName) is called when object is destroyed"]
          },
          {
            "id": "cpp-inheritance",
            "title": "C++ Inheritance & Polymorphism",
            "content": [
              { "type": "code", "lang": "cpp", "value": "class Shape {\nprotected:\n    double area;\npublic:\n    virtual double calculateArea() = 0;  // pure virtual\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double calculateArea() override {\n        return 3.14159 * radius * radius;\n    }\n};\n\n// Polymorphism\nShape* shapes[2];\nshapes[0] = new Circle(5.0);\nshapes[1] = new Rectangle(4.0, 6.0);\nfor (int i = 0; i < 2; i++)\n    cout << shapes[i]->calculateArea() << endl;" },
              { "type": "list", "title": "Types of Inheritance", "values": [
                "Single — one base, one derived class",
                "Multiple — derived from multiple bases (C++ allows, Java uses interfaces)",
                "Multilevel — A → B → C",
                "Hierarchical — one base, multiple derived classes",
                "Hybrid — combination (can cause diamond problem in C++)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "OOP", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["virtual keyword enables runtime polymorphism in C++", "Pure virtual function (=0) makes a class abstract — cannot instantiate"]
          },
          {
            "id": "java-oop",
            "title": "Java OOP Specifics",
            "content": [
              { "type": "code", "lang": "java", "value": "public class BankAccount {\n    private double balance;\n\n    public BankAccount(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        balance += amount;\n    }\n\n    // Getter\n    public double getBalance() {\n        return balance;\n    }\n}\n\n// Interface example\ninterface Drawable {\n    void draw();  // implicitly abstract\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}" },
              { "type": "list", "title": "Java Specific Features", "values": [
                "No multiple inheritance (uses interfaces instead)",
                "Garbage collection — automatic memory management",
                "All objects are references (no pointers)",
                "final keyword: prevents inheritance (class), overriding (method), reassignment (variable)",
                "static: belongs to class, not instance"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "OOP", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Java does NOT support multiple class inheritance, only multiple interface implementation", "this keyword refers to current instance"]
          }
        ]
      },
      {
        "id": "algorithms-ds",
        "title": "Algorithms & Data Structures",
        "icon": "\uD83D\uDCCA",
        "chapters": [
          {
            "id": "algo-analysis",
            "title": "Algorithm Analysis & Complexity",
            "content": [
              { "type": "text", "value": "Algorithm analysis measures how time and space requirements grow with input size (n). Big-O notation describes the upper bound (worst case)." },
              { "type": "table", "headers": ["Complexity", "Name", "Example Algorithm"], "rows": [
                ["O(1)", "Constant", "Array access by index"],
                ["O(log n)", "Logarithmic", "Binary search"],
                ["O(n)", "Linear", "Linear search"],
                ["O(n log n)", "Linearithmic", "Merge sort, Quick sort"],
                ["O(n²)", "Quadratic", "Bubble sort, Selection sort"],
                ["O(2ⁿ)", "Exponential", "Recursive Fibonacci"],
                ["O(n!)", "Factorial", "Travelling Salesman (brute force)"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Algorithms & DS", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Big-O describes growth rate as n → ∞, ignoring constants and lower terms", "Know best, average, and worst case for common algorithms"]
          },
          {
            "id": "sorting-algos",
            "title": "Sorting Algorithms",
            "content": [
              { "type": "table", "headers": ["Algorithm", "Best", "Average", "Worst", "Space", "Stable"], "rows": [
                ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1)", "No"],
                ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1)", "Yes"],
                ["Merge Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)", "Yes"],
                ["Quick Sort", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)", "No"],
                ["Heap Sort", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)", "No"]
              ]},
              { "type": "mermaid", "value": "flowchart TD\n  A[Unsorted Array] --> B{Dividing}\n  B --> C[Split into halves\nrecursively]\n  C --> D[Sort each half]\n  D --> E[Merge sorted halves]\n  E --> F[Sorted Array]" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "Algorithms & DS", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Quick sort uses divide-and-conquer with a pivot; worst case occurs when pivot is smallest/largest", "Merge sort is stable, O(n log n) guaranteed, but needs O(n) extra space"]
          },
          {
            "id": "searching-algos",
            "title": "Searching Algorithms",
            "content": [
              { "type": "code", "lang": "c", "value": "// Linear Search - O(n)\nint linearSearch(int arr[], int n, int key) {\n    for (int i = 0; i < n; i++)\n        if (arr[i] == key) return i;\n    return -1;\n}\n\n// Binary Search - O(log n) - requires sorted array\nint binarySearch(int arr[], int low, int high, int key) {\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == key) return mid;\n        if (arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}" },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Algorithms & DS", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Binary search only works on SORTED arrays", "Compute mid as low + (high-low)/2 to avoid integer overflow"]
          },
          {
            "id": "linked-lists",
            "title": "Linked Lists",
            "content": [
              { "type": "code", "lang": "c", "value": "struct Node {\n    int data;\n    struct Node* next;\n};\n\n// Insert at beginning\nstruct Node* insertFirst(struct Node* head, int data) {\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = head;\n    return newNode;\n}\n\n// Traverse\nvoid display(struct Node* head) {\n    while (head != NULL) {\n        printf(\"%d -> \", head->data);\n        head = head->next;\n    }\n    printf(\"NULL\\n\");\n}" },
              { "type": "list", "title": "Linked List Types", "values": [
                "<b>Singly Linked List</b> — Each node has data + next pointer. Forward traversal only",
                "<b>Doubly Linked List</b> — Each node has prev + next pointers. Two-way traversal",
                "<b>Circular Linked List</b> — Last node points back to first. No NULL at end"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Algorithms & DS", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Linked lists use dynamic memory allocation", "Insertion/deletion at beginning is O(1); at end is O(n) for singly linked"]
          },
          {
            "id": "stacks-queues",
            "title": "Stacks & Queues",
            "content": [
              { "type": "list", "title": "Stacks (LIFO)", "values": [
                "Operations: push() — add to top; pop() — remove from top; peek()/top() — view top",
                "Used in: function call management, expression evaluation, undo operations",
                "Can be implemented using arrays or linked lists"
              ]},
              { "type": "list", "title": "Queues (FIFO)", "values": [
                "Operations: enqueue() — add to rear; dequeue() — remove from front; front() — view front",
                "Used in: scheduling, BFS, buffering, print spooling",
                "Circular queue uses array efficiently, wrapping around"
              ]},
              { "type": "code", "lang": "c", "value": "// Stack using array\n#define MAX 100\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if (top == MAX-1) { printf(\"Stack Overflow\\n\"); return; }\n    stack[++top] = val;\n}\n\nint pop() {\n    if (top == -1) { printf(\"Stack Underflow\\n\"); return -1; }\n    return stack[top--];\n}" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "Algorithms & DS", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Stack overflow = push when full; stack underflow = pop when empty", "Know how to implement stack/queue using arrays and linked lists"]
          },
          {
            "id": "trees-graphs",
            "title": "Trees & Graphs",
            "content": [
              { "type": "list", "title": "Binary Trees", "values": [
                "Root → left subtree → right subtree",
                "<b>Binary Search Tree (BST)</b>: left < root < right for all nodes",
                "Traversals: Inorder (L-Root-Right), Preorder (Root-L-R), Postorder (L-R-Root)",
                "BST search is O(h) where h = height"
              ]},
              { "type": "list", "title": "Graph Traversals", "values": [
                "<b>BFS</b> (Breadth-First) — Uses queue, visits level by level. Shortest path in unweighted graphs",
                "<b>DFS</b> (Depth-First) — Uses stack/recursion, goes deep before backtracking"
              ]},
              { "type": "mermaid", "value": "graph TD\n  A[Root] --> B[Left]\n  A --> C[Right]\n  B --> D[Left-Left]\n  B --> E[Left-Right]\n  C --> F[Right-Left]\n  C --> G[Right-Right]" },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Algorithms & DS", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Inorder traversal of BST gives sorted order", "BST worst case O(n) when tree is skewed — AVL trees fix this (self-balancing)"]
          }
        ]
      },
      {
        "id": "system-analysis",
        "title": "System Analysis & Design / UML",
        "icon": "\uD83D\uDEE0\uFE0F",
        "chapters": [
          {
            "id": "sdLC",
            "title": "System Development Life Cycle (SDLC)",
            "content": [
              { "type": "mermaid", "value": "flowchart LR\n  A[Planning] --> B[Analysis]\n  B --> C[Design]\n  C --> D[Implementation]\n  D --> E[Testing]\n  E --> F[Deployment]\n  F --> G[Maintenance]\n  G -.-> A" },
              { "type": "list", "title": "SDLC Phases", "values": [
                "<b>Planning</b> — Feasibility study, resource estimation, project plan",
                "<b>Analysis</b> — Requirements gathering (interviews, questionnaires, observation, document analysis)",
                "<b>Design</b> — System architecture, database design, UI design, DFDs, ERDs",
                "<b>Implementation</b> — Coding, unit testing",
                "<b>Testing</b> — Integration, system, acceptance testing (UAT)",
                "<b>Deployment</b> — Installation, training, cutover (direct, parallel, phased)",
                "<b>Maintenance</b> — Corrective, adaptive, perfective, preventive"
              ]},
              { "type": "list", "title": "SDLC Models", "values": [
                "Waterfall — Sequential, rigid, good for well-understood requirements",
                "Agile — Iterative, flexible, customer collaboration (Scrum, XP)",
                "Spiral — Risk-driven, iterative with prototyping",
                "V-Model — Verification & Validation at each phase",
                "Prototyping — Build quick mockups for user feedback"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "System Analysis & Design", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Waterfall vs Agile differences are frequently tested", "Know which fact-finding method (interview, questionnaire, observation) is best for each scenario"]
          },
          {
            "id": "uml-diagrams",
            "title": "UML Diagrams",
            "content": [
              { "type": "text", "value": "UML (Unified Modeling Language) is a standard visual language for modeling software systems. Two main categories:" },
              { "type": "list", "title": "Structural (Static) Diagrams", "values": [
                "<b>Class Diagram</b> — Classes, attributes, methods, relationships (inheritance, association, aggregation, composition)",
                "<b>Object Diagram</b> — Instances of classes at a specific moment",
                "<b>Component Diagram</b> — Physical components of a system",
                "<b>Deployment Diagram</b> — Hardware nodes and software deployment",
                "<b>Package Diagram</b> — Grouping elements into packages"
              ]},
              { "type": "list", "title": "Behavioral (Dynamic) Diagrams", "values": [
                "<b>Use Case Diagram</b> — Actors and system functions (use cases)",
                "<b>Sequence Diagram</b> — Interactions over time, message ordering",
                "<b>Activity Diagram</b> — Workflow, business processes, parallel actions",
                "<b>Statechart Diagram</b> — States and transitions of an object"
              ]},
              { "type": "mermaid", "value": "classDiagram\n  class User {\n    -String userId\n    -String name\n    +login()\n    +logout()\n  }\n  class Account {\n    -String accountNo\n    -double balance\n    +deposit()\n    +withdraw()\n    +getBalance()\n  }\n  class Transaction {\n    -String id\n    -double amount\n    -Date date\n  }\n  User \"1\" --> \"*\" Account : owns\n  Account \"1\" --> \"*\" Transaction : has" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "System Analysis & Design", "section": "Section A", "qid": "Q2" },
                { "year": "2021", "paper": "System Analysis & Design", "section": "Section A", "qid": "Q6" }
              ]}
            ],
            "examTips": ["Know the difference between aggregation (weak whole-part) and composition (strong whole-part, lifetime tied)", "Use Case diagrams are most common in exams — be able to identify actors and use cases"]
          },
          {
            "id": "dfd-erd",
            "title": "DFD & ERD",
            "content": [
              { "type": "list", "title": "Data Flow Diagram (DFD)", "values": [
                "External Entity — Rectangle (source/destination of data)",
                "Process — Circle/rounded rect (transforms data)",
                "Data Store — Open rectangle (where data is stored)",
                "Data Flow — Arrow (movement of data)",
                "Level 0 (Context diagram) → Level 1 → Level 2 (increasing detail)"
              ]},
              { "type": "list", "title": "Entity Relationship Diagram (ERD)", "values": [
                "<b>Entity</b> — Rectangle, represents a real-world object (Student, Course)",
                "<b>Attribute</b> — Oval/ellipse, properties of entity (name, age)",
                "<b>Relationship</b> — Diamond, connects entities (enrolls, teaches)",
                "Cardinality: 1:1, 1:M, M:N"
              ]},
              { "type": "mermaid", "value": "erDiagram\n  STUDENT ||--o{ ENROLLMENT : has\n  COURSE ||--o{ ENROLLMENT : includes\n  STUDENT {\n    int studentId PK\n    string name\n    string email\n  }\n  COURSE {\n    string courseCode PK\n    string title\n    int credits\n  }\n  ENROLLMENT {\n    int studentId FK\n    string courseCode FK\n    date enrollDate\n  }" },
              { "type": "related", "value": [
                { "year": "2020", "paper": "System Analysis & Design", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["DFD shows data flow — NOT control flow (that's flowchart)", "ERD cardinalities: || = exactly one, o{ = zero or many, |{ = one or many"]
          },
          {
            "id": "requirements",
            "title": "Requirements Engineering",
            "content": [
              { "type": "list", "title": "Types of Requirements", "values": [
                "<b>Functional Requirements</b> — What the system should DO (e.g., \"User shall be able to login\")",
                "<b>Non-Functional Requirements</b> — HOW the system performs (performance, security, usability, reliability)"
              ]},
              { "type": "list", "title": "Fact-Finding Techniques", "values": [
                "Interview — Direct conversation, in-depth probing",
                "Questionnaire — Large groups, standardized questions",
                "Observation — Watch users perform current tasks",
                "Document analysis — Review existing forms, reports, manuals"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "System Analysis & Design", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Select the BEST fact-finding technique based on: time, budget, access, type of information needed", "Functional requirements describe features; non-functional describe quality attributes"]
          }
        ]
      },
      {
        "id": "database-sql",
        "title": "Database & SQL",
        "icon": "\uD83D\uDDC4\uFE0F",
        "chapters": [
          {
            "id": "db-concepts",
            "title": "Database Concepts & Architecture",
            "content": [
              { "type": "list", "title": "Key Concepts", "values": [
                "<b>Database</b> — Organized collection of structured data",
                "<b>DBMS</b> — Software that manages databases (MySQL, Oracle, SQL Server)",
                "<b>Schema</b> — The logical structure of the database",
                "<b>Primary Key</b> — Uniquely identifies each row in a table",
                "<b>Foreign Key</b> — References primary key in another table, establishes relationships"
              ]},
              { "type": "list", "title": "Three-Level Architecture (ANSI-SPARC)", "values": [
                "External level — User views (different users see different data)",
                "Conceptual level — Logical structure of entire database",
                "Internal level — Physical storage on disk"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Database & SQL", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Data independence: logical (change conceptual without affecting external) and physical (change storage without affecting conceptual)", "Know the difference between DBMS and file system"]
          },
          {
            "id": "sql-queries",
            "title": "SQL Queries (DML)",
            "content": [
              { "type": "code", "lang": "sql", "value": "-- SELECT with conditions\nSELECT name, age FROM students WHERE age > 18 ORDER BY name ASC;\n\n-- JOIN\nSELECT s.name, c.title\nFROM students s\nJOIN enrollments e ON s.id = e.student_id\nJOIN courses c ON e.course_id = c.id;\n\n-- Aggregate functions\nSELECT department, COUNT(*) AS count, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5;\n\n-- Subquery\nSELECT name FROM students\nWHERE id IN (SELECT student_id FROM enrollments WHERE course_id = 101);" },
              { "type": "table", "headers": ["SQL Command", "Category", "Purpose"], "rows": [
                ["SELECT", "DML", "Retrieve data"],
                ["INSERT", "DML", "Add new rows"],
                ["UPDATE", "DML", "Modify existing rows"],
                ["DELETE", "DML", "Remove rows"],
                ["CREATE TABLE", "DDL", "Create new table"],
                ["ALTER TABLE", "DDL", "Modify table structure"],
                ["DROP TABLE", "DDL", "Delete table"],
                ["CREATE INDEX", "DDL", "Create index for faster search"],
                ["GRANT", "DCL", "Give user permissions"],
                ["REVOKE", "DCL", "Remove user permissions"],
                ["COMMIT", "TCL", "Save transaction"],
                ["ROLLBACK", "TCL", "Undo transaction"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Database & SQL", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["SQL keywords are case-insensitive but conventionally written in UPPERCASE", "HAVING filters groups (after GROUP BY); WHERE filters rows (before GROUP BY)"]
          },
          {
            "id": "normalization",
            "title": "Normalization",
            "content": [
              { "type": "list", "title": "Normal Forms", "values": [
                "<b>1NF</b> — Each cell contains a single value; each column has unique name; no duplicate rows",
                "<b>2NF</b> — 1NF + every non-key attribute is fully functionally dependent on the whole primary key (no partial dependency)",
                "<b>3NF</b> — 2NF + no transitive dependency (non-key attribute depends only on the primary key)",
                "<b>BCNF</b> — 3NF + every determinant is a candidate key"
              ]},
              { "type": "text", "value": "<b>Example:</b> A table with (StudentID, CourseID, StudentName, Instructor) violates 2NF because StudentName depends only on StudentID (partial dependency). Fix: split into Students and Enrollments tables." },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Database & SQL", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Functional dependency: X → Y means if you know X, you can determine Y", "Normalization reduces redundancy and prevents anomalies (insert, update, delete)"]
          },
          {
            "id": "er-to-relational",
            "title": "ER to Relational Mapping",
            "content": [
              { "type": "text", "value": "Converting an ER diagram to relational tables follows a systematic mapping process:" },
              { "type": "list", "title": "Mapping Steps", "values": [
                "Each strong entity → a table (attributes become columns, PK maps to PK)",
                "Each relationship: 1:M — add FK in the many-side table; 1:1 — add FK to either side; M:N — new table with composite PK",
                "Weak entity → table with FK to its owner's PK as part of composite key",
                "Multivalued attribute → new table with FK back to the owning entity"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Database & SQL", "section": "Section B", "qid": "Q2" }
              ]}
            ],
            "examTips": ["M:N relationships always produce a new intersection table", "For 1:M, put the FK in the table on the M side"]
          },
          {
            "id": "transactions",
            "title": "Transactions & ACID Properties",
            "content": [
              { "type": "list", "title": "ACID Properties", "values": [
                "<b>A</b>tomicity — Transaction is all-or-nothing (completes fully or rolls back fully)",
                "<b>C</b>onsistency — Database state is valid before and after transaction",
                "<b>I</b>solation — Concurrent transactions don't interfere with each other",
                "<b>D</b>urability — Committed changes persist (survive crashes)"
              ]},
              { "type": "list", "title": "Transaction States", "values": [
                "Active → Partially Committed → Committed (success)",
                "Active → Failed → Aborted (rolled back)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Database & SQL", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable (highest to lowest)", "COMMIT makes changes permanent; ROLLBACK undoes changes"]
          }
        ]
      },
      {
        "id": "web-programming",
        "title": "Web Programming",
        "icon": "\uD83C\uDF10",
        "chapters": [
          {
            "id": "html-css",
            "title": "HTML & CSS",
            "content": [
              { "type": "code", "lang": "markup", "value": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Page Title</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <header>\n        <h1>Welcome</h1>\n        <nav>\n            <a href=\"index.html\">Home</a>\n            <a href=\"about.html\">About</a>\n        </nav>\n    </header>\n    <main>\n        <p>Hello, world!</p>\n    </main>\n    <footer>&copy; 2025</footer>\n</body>\n</html>" },
              { "type": "code", "lang": "css", "value": "/* CSS Selectors */\nbody { font-family: Arial, sans-serif; margin: 0; }\n.container { max-width: 960px; margin: 0 auto; }\nh1 { color: #333; font-size: 2em; }\nnav a { text-decoration: none; padding: 8px 16px; }\nnav a:hover { background: #eee; }\n\n/* Flexbox */\n.flex-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* CSS Grid */\n.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }" },
              { "type": "list", "title": "Key HTML Concepts", "values": [
                "Block vs inline elements: div (block), span (inline)",
                "Semantic elements: header, nav, main, section, article, footer",
                "Forms: form, input, select, textarea, button, label",
                "Tables: table, tr, th, td",
                "Lists: ul (unordered), ol (ordered), li"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Web Programming", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Semantic HTML improves accessibility and SEO", "CSS specificity: inline > id > class > element. Important! overrides everything"]
          },
          {
            "id": "javascript",
            "title": "JavaScript Basics",
            "content": [
              { "type": "code", "lang": "javascript", "value": "// Variables\nlet name = \"Alice\";\nconst PI = 3.14;\nvar old = \"avoid using\";\n\n// Function\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// DOM manipulation\ndocument.getElementById(\"btn\").addEventListener(\"click\", function() {\n    document.querySelector(\".message\").textContent = \"Clicked!\";\n});\n\n// Array methods\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconst even = numbers.filter(n => n % 2 === 0);\nconst sum = numbers.reduce((acc, n) => acc + n, 0);" },
              { "type": "list", "title": "Key JavaScript Concepts", "values": [
                "DOM (Document Object Model) — Tree representation of HTML elements",
                "Events — click, submit, keydown, load, mouseover",
                "AJAX/Fetch — Asynchronous requests to servers",
                "JSON — JavaScript Object Notation for data exchange",
                "Scope: var (function-scoped), let/const (block-scoped)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Web Programming", "section": "Section A", "qid": "Q3" }
              ]}
            ],
            "examTips": ["== compares with type coercion; === compares strictly (no coercion) — always prefer ===", "Understand event bubbling and capturing phases"]
          },
          {
            "id": "php-mysql",
            "title": "PHP & MySQL Integration",
            "content": [
              { "type": "code", "lang": "php", "value": "<?php\n// Database connection\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"university\");\n\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\n\n// Prepared statement (prevents SQL injection)\n$stmt = $conn->prepare(\"INSERT INTO students (name, email) VALUES (?, ?)\");\n$stmt->bind_param(\"ss\", $name, $email);\n\n$name = \"Alice\";\n$email = \"alice@example.com\";\n$stmt->execute();\n\n// Fetch results\n$result = $conn->query(\"SELECT * FROM students\");\nwhile ($row = $result->fetch_assoc()) {\n    echo $row[\"name\"] . \" - \" . $row[\"email\"] . \"<br>\";\n}\n\n$stmt->close();\n$conn->close();\n?>" },
              { "type": "list", "title": "PHP Concepts", "values": [
                "PHP code executes on server, generates HTML sent to client",
                "Variables start with $, no type declaration needed",
                "$_GET, $_POST, $_REQUEST — superglobals for form data",
                "Sessions: session_start(), $_SESSION — persist data across pages",
                "Cookies: setcookie(), $_COOKIE — stored client-side"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Web Programming", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Always use prepared statements to prevent SQL injection — never use string concatenation for queries", "$_GET shows data in URL; $_POST hides data in request body"]
          }
        ]
      },
      {
        "id": "networking",
        "title": "Networking",
        "icon": "\uD83C\uDF10",
        "chapters": [
          {
            "id": "network-basics",
            "title": "Network Basics & Topologies",
            "content": [
              { "type": "list", "title": "Network Types by Size", "values": [
                "<b>PAN</b> (Personal Area Network) — ~10m range, Bluetooth, USB",
                "<b>LAN</b> (Local Area Network) — Building/campus, Ethernet/Wi-Fi",
                "<b>MAN</b> (Metropolitan Area Network) — City-wide",
                "<b>WAN</b> (Wide Area Network) — Country/continent, Internet is the largest"
              ]},
              { "type": "mermaid", "value": "flowchart TD\n  subgraph Star\n    S1[Switch]\n    S1 --- C1[Computer 1]\n    S1 --- C2[Computer 2]\n    S1 --- C3[Computer 3]\n  end\n  subgraph Bus\n    B1[Backbone Cable]\n    B1 --- B2[Computer A]\n    B1 --- B3[Computer B]\n    B1 --- B4[Computer C]\n  end\n  subgraph Ring\n    R1[Node 1] --- R2[Node 2]\n    R2 --- R3[Node 3]\n    R3 --- R1\n  end" },
              { "type": "table", "headers": ["Topology", "Advantage", "Disadvantage"], "rows": [
                ["Star", "Easy to manage, fault isolation", "Single point of failure (switch)"],
                ["Bus", "Simple, cheap", "Entire network fails if cable breaks"],
                ["Ring", "Orderly, no collisions", "Single break stops entire network"],
                ["Mesh", "Highly reliable", "Expensive (many cables)"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Networking", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Star topology is most common in modern LANs (Ethernet switches)", "Mesh is used in WANs and critical systems where reliability is paramount"]
          },
          {
            "id": "osi-model",
            "title": "OSI Model & TCP/IP",
            "content": [
              { "type": "table", "headers": ["Layer", "OSI Name", "TCP/IP", "PDU", "Example Protocols"], "rows": [
                ["7", "Application", "Application", "Data", "HTTP, FTP, SMTP, DNS"],
                ["6", "Presentation", "Application", "Data", "SSL/TLS, JPEG, ASCII"],
                ["5", "Session", "Application", "Data", "NetBIOS, RPC"],
                ["4", "Transport", "Transport", "Segment", "TCP, UDP"],
                ["3", "Network", "Internet", "Packet", "IP, ICMP, ARP"],
                ["2", "Data Link", "Network Access", "Frame", "Ethernet, PPP, MAC"],
                ["1", "Physical", "Network Access", "Bit", "RS-232, Ethernet cable"]
              ]},
              { "type": "mermaid", "value": "flowchart TB\n  subgraph OSI Model\n    direction TB\n    L7[7. Application]\n    L6[6. Presentation]\n    L5[5. Session]\n    L4[4. Transport]\n    L3[3. Network]\n    L2[2. Data Link]\n    L1[1. Physical]\n    L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1\n  end" },
              { "type": "list", "title": "TCP vs UDP", "values": [
                "TCP — Connection-oriented, reliable, ordered delivery, flow control, error checking. Used for: web, email, file transfer",
                "UDP — Connectionless, unreliable, no ordering, faster. Used for: streaming, VoIP, DNS queries"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Networking", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Mnemonic: Please Do Not Throw Sausage Pizza Away (Physical → Application)", "TCP/IP model has 4 layers vs OSI's 7 layers"]
          },
          {
            "id": "ip-addressing",
            "title": "IP Addressing & Subnetting",
            "content": [
              { "type": "list", "title": "IPv4 Address Classes", "values": [
                "Class A: 1.0.0.0 - 126.255.255.255 (8-bit network, 24-bit host), default mask 255.0.0.0",
                "Class B: 128.0.0.0 - 191.255.255.255 (16-bit network, 16-bit host), default mask 255.255.0.0",
                "Class C: 192.0.0.0 - 223.255.255.255 (24-bit network, 8-bit host), default mask 255.255.255.0",
                "Class D: 224.0.0.0 - 239.255.255.255 (multicast)",
                "Class E: 240.0.0.0 - 255.255.255.255 (reserved)"
              ]},
              { "type": "list", "title": "Subnetting", "values": [
                "Borrow bits from host portion to create subnets",
                "Number of subnets = 2^n (n = borrowed bits)",
                "Number of hosts per subnet = 2^h - 2 (h = remaining host bits, subtract network & broadcast)",
                "Subnet mask = network bits set to 1, host bits set to 0"
              ]},
              { "type": "text", "value": "<b>Example:</b> 192.168.1.0/24. To create 4 subnets, borrow 2 bits → /26 (255.255.255.192). Each subnet has 62 usable hosts." },
              { "type": "related", "value": [
                { "year": "2021", "paper": "Networking", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Private IP ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x (not routable on Internet)", "CIDR notation: /n means first n bits are network portion"]
          },
          {
            "id": "protocols-services",
            "title": "Network Services & Protocols",
            "content": [
              { "type": "table", "headers": ["Protocol/Service", "Port", "Description"], "rows": [
                ["HTTP", "80", "Web page transfer (unencrypted)"],
                ["HTTPS", "443", "Web page transfer (encrypted with TLS)"],
                ["FTP", "20, 21", "File transfer"],
                ["SMTP", "25", "Sending email"],
                ["POP3", "110", "Receiving email (download)"],
                ["IMAP", "143", "Receiving email (server-based)"],
                ["DNS", "53", "Domain name to IP resolution"],
                ["DHCP", "67, 68", "Automatic IP assignment"],
                ["SSH", "22", "Secure remote access"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Networking", "section": "Section B", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know common port numbers — especially HTTP(80), HTTPS(443), FTP(21), SMTP(25), DNS(53), SSH(22)", "DNS converts domain names (google.com) to IP addresses"]
          }
        ]
      },
      {
        "id": "operating-systems",
        "title": "Operating Systems",
        "icon": "\uD83D\uDDA5\uFE0F",
        "chapters": [
          {
            "id": "os-basics",
            "title": "OS Concepts & Types",
            "content": [
              { "type": "text", "value": "An Operating System is system software that manages hardware resources, provides services to applications, and acts as an intermediary between user and hardware." },
              { "type": "list", "title": "Functions of an OS", "values": [
                "Process management — creation, scheduling, synchronization",
                "Memory management — allocation, paging, segmentation, virtual memory",
                "File system management — organization, storage, access control",
                "I/O management — device drivers, buffering, spooling",
                "Security — authentication, access control, encryption",
                "User interface — CLI (command line) or GUI (graphical)"
              ]},
              { "type": "list", "title": "Types of Operating Systems", "values": [
                "Batch — Jobs collected and processed together (no user interaction)",
                "Time-sharing (Multitasking) — CPU switches between jobs, each gets a time slice",
                "Real-time — Guaranteed response within time constraints (aircraft, medical)",
                "Distributed — Multiple computers appear as a single system",
                "Embedded — Dedicated to specific device (smartphone, IoT, router)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Operating Systems", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Know the difference between multitasking (one CPU, rapid switching) and multiprocessing (multiple CPUs)", "Real-time OS must guarantee deadlines — hard RT vs soft RT"]
          },
          {
            "id": "process-scheduling",
            "title": "Process Scheduling",
            "content": [
              { "type": "list", "title": "Process States", "values": [
                "New → Ready → Running → Waiting → Terminated",
                "Ready: waiting for CPU. Running: CPU executing. Waiting: waiting for I/O"
              ]},
              { "type": "table", "headers": ["Algorithm", "Type", "Description", "Pros/Cons"], "rows": [
                ["FCFS", "Non-preemptive", "First come, first served", "Simple, but convoy effect (short jobs wait behind long ones)"],
                ["SJF", "Non-preemptive", "Shortest job first", "Optimal avg waiting time, but starvation of long jobs"],
                ["SRTF", "Preemptive", "Shortest remaining time first", "Preemptive version of SJF, overhead of tracking remaining time"],
                ["Round Robin", "Preemptive", "Fixed time quantum per process", "Good for time-sharing, fair, but quantum selection is critical"],
                ["Priority", "Both", "Higher priority runs first", "Starvation of low-priority processes (solved by aging)"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Operating Systems", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Preemptive = CPU can be taken away; Non-preemptive = process keeps CPU until it voluntarily releases", "Round Robin quantum: too large → degenerates to FCFS; too small → too many context switches"]
          },
          {
            "id": "memory-management",
            "title": "Memory Management",
            "content": [
              { "type": "list", "title": "Memory Allocation Techniques", "values": [
                "Contiguous — Each process occupies a single contiguous block (external fragmentation problem)",
                "Paging — Memory divided into fixed-size frames; processes divided into pages. Eliminates external fragmentation",
                "Segmentation — Logical divisions (code, data, stack). Each segment can grow independently",
                "Virtual Memory — Uses disk as extension of RAM; enables running larger programs than physical memory"
              ]},
              { "type": "list", "title": "Page Replacement Algorithms", "values": [
                "FIFO — Replace oldest page (Belady's anomaly: more frames can cause more page faults)",
                "LRU (Least Recently Used) — Replace page not used for longest time (good but expensive to implement)",
                "Optimal (MIN) — Replace page that will be used farthest in future (theoretical, not implementable)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Operating Systems", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Thrashing = excessive paging due to too many processes in memory", "LRU is approximated in practice (not implemented exactly due to cost)"]
          },
          {
            "id": "file-systems",
            "title": "File Systems & Storage",
            "content": [
              { "type": "list", "title": "File Allocation Methods", "values": [
                "Contiguous — Fast sequential access, but external fragmentation",
                "Linked — Each block points to next, no fragmentation, slow random access",
                "Indexed — Index block contains pointers to all data blocks, supports direct access"
              ]},
              { "type": "list", "title": "Disk Scheduling", "values": [
                "FCFS — First come, first served (fair but slow)",
                "SSTF — Shortest seek time first (good throughput, may starve far requests)",
                "SCAN (Elevator) — Move in one direction, service all requests, reverse at end",
                "C-SCAN — Service only in one direction, then jump back (more uniform wait times)"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Operating Systems", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["SCAN algorithm behaves like an elevator — fair and avoids starvation", "Know the difference between: FAT, NTFS, ext4 (common file systems)"]
          }
        ]
      },
      {
        "id": "information-systems",
        "title": "Information Systems",
        "icon": "\u2139\uFE0F",
        "chapters": [
          {
            "id": "is-basics",
            "title": "Information Systems Overview",
            "content": [
              { "type": "text", "value": "An Information System (IS) is a set of interrelated components that collect, process, store, and distribute information to support decision-making and control in an organization." },
              { "type": "mermaid", "value": "flowchart LR\n  A[Data] --> B[Input]\n  B --> C[Processing]\n  C --> D[Output]\n  D --> E[Information]\n  D --> F[Feedback]\n  F -.-> B" },
              { "type": "list", "title": "Components of an IS", "values": [
                "Hardware — Computers, servers, network equipment",
                "Software — Programs, databases, middleware",
                "Data — Raw facts and figures",
                "Procedures — Rules and policies for operation",
                "People — Users, operators, developers, managers"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Information Systems", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Information ≠ Data. Data is raw; information is processed data with meaning", "Know the 5 components of an IS"]
          },
          {
            "id": "is-types",
            "title": "Types of Information Systems",
            "content": [
              { "type": "list", "title": "Organizational IS Types", "values": [
                "<b>TPS</b> (Transaction Processing System) — Handles daily business transactions (POS, billing)",
                "<b>MIS</b> (Management Information System) — Summarized reports for middle management",
                "<b>DSS</b> (Decision Support System) — Analytical models for semi-structured decisions",
                "<b>EIS</b> (Executive Information System) — Strategic data for top executives",
                "<b>OAS</b> (Office Automation System) — Document management, email, scheduling"
              ]},
              { "type": "table", "headers": ["System", "Users", "Outputs", "Decision Type"], "rows": [
                ["TPS", "Operational staff", "Transaction records", "Structured"],
                ["MIS", "Middle managers", "Summary reports", "Structured"],
                ["DSS", "Analysts", "Models, simulations", "Semi-structured"],
                ["EIS", "Executives", "Strategic data, trends", "Unstructured"]
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Information Systems", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["TPS processes structured data about daily operations; EIS provides strategic data for top-level decisions", "Know which system supports which management level"]
          },
          {
            "id": "e-commerce",
            "title": "E-Commerce & Digital Business",
            "content": [
              { "type": "list", "title": "E-Commerce Models", "values": [
                "<b>B2C</b> (Business to Consumer) — Retail, Amazon, eBay",
                "<b>B2B</b> (Business to Business) — Wholesale, supplier transactions",
                "<b>C2C</b> (Consumer to Consumer) — Auctions, marketplaces (eBay, Etsy)",
                "<b>G2C</b> (Government to Citizen) — Tax filing, license renewal"
              ]},
              { "type": "list", "title": "Benefits of E-Commerce", "values": [
                "24/7 availability, global reach",
                "Lower operational costs (no physical store)",
                "Personalization and targeted marketing",
                "Faster transactions and reduced paperwork"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Information Systems", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["Know the difference between B2B, B2C, C2C, G2C", "E-commerce challenges: security, trust, logistics, legal issues"]
          }
        ]
      },
      {
        "id": "mobile-programming",
        "title": "Mobile Programming",
        "icon": "\uD83D\uDCF1",
        "chapters": [
          {
            "id": "mobile-basics",
            "title": "Mobile App Development Basics",
            "content": [
              { "type": "list", "title": "Mobile Development Approaches", "values": [
                "<b>Native</b> — Platform-specific (Android: Java/Kotlin, iOS: Swift/ObjC). Best performance, full API access",
                "<b>Hybrid</b> — Web technologies wrapped in native container (Cordova, PhoneGap). Cross-platform",
                "<b>Cross-platform</b> — Single codebase, native performance (React Native, Flutter, Xamarin)"
              ]},
              { "type": "list", "title": "Android App Components", "values": [
                "Activity — Single screen with UI (like a window)",
                "Service — Background task without UI",
                "Broadcast Receiver — Responds to system-wide events",
                "Content Provider — Manages shared app data",
                "Intent — Message for communication between components"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Mobile Programming", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["Activity lifecycle: onCreate() → onStart() → onResume() → onPause() → onStop() → onDestroy()", "Understand how Intents work for navigation between activities"]
          },
          {
            "id": "android-ui",
            "title": "Android UI & Layouts",
            "content": [
              { "type": "code", "lang": "markup", "value": "<!-- XML Layout Example (activity_main.xml) -->\n<LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n\n    <TextView\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Welcome\"\n        android:textSize=\"24sp\" />\n\n    <EditText\n        android:id=\"@+id/inputName\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"wrap_content\"\n        android:hint=\"Enter your name\" />\n\n    <Button\n        android:id=\"@+id/btnSubmit\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Submit\" />\n</LinearLayout>" },
              { "type": "list", "title": "Layout Types", "values": [
                "LinearLayout — Arranges children in single row/column",
                "RelativeLayout — Positions children relative to each other or parent",
                "ConstraintLayout — Flexible, flat hierarchy, drag-and-drop in designer",
                "FrameLayout — Stacks children on top of each other",
                "TableLayout — Grid of rows and columns"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Mobile Programming", "section": "Section A", "qid": "Q2" }
              ]}
            ],
            "examTips": ["dp (density-independent pixels) for sizes; sp (scale-independent pixels) for fonts", "match_parent fills container; wrap_content fits content"]
          }
        ]
      },
      {
        "id": "discrete-mathematics",
        "title": "Discrete Mathematics",
        "icon": "\u2A00",
        "chapters": [
          {
            "id": "sets-logic",
            "title": "Set Theory & Logic",
            "content": [
              { "type": "list", "title": "Set Operations", "values": [
                "Union (A &cup; B) — All elements in A OR B",
                "Intersection (A &cap; B) — Elements in both A AND B",
                "Difference (A - B) — Elements in A but not in B",
                "Complement (A') — Elements not in A (universe - A)",
                "Cartesian Product (A &times; B) — All ordered pairs (a,b)"
              ]},
              { "type": "list", "title": "Logical Connectives", "values": [
                "&not;p — Negation (not p)",
                "p &and; q — Conjunction (p and q)",
                "p &or; q — Disjunction (p or q)",
                "p &rarr; q — Implication (if p then q)",
                "p &harr; q — Biconditional (p if and only if q)"
              ]},
              { "type": "related", "value": [
                { "year": "2020", "paper": "Discrete Mathematics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["De Morgan's laws: (A &cup; B)' = A' &cap; B', (A &cap; B)' = A' &cup; B'", "Truth tables are the standard way to evaluate logical expressions"]
          },
          {
            "id": "relations-graphs",
            "title": "Relations & Graph Theory",
            "content": [
              { "type": "list", "title": "Properties of Relations", "values": [
                "Reflexive — aRa for all a (every element related to itself)",
                "Symmetric — aRb implies bRa for all a,b",
                "Transitive — aRb and bRc implies aRc for all a,b,c",
                "Equivalence Relation — Reflexive + Symmetric + Transitive (partitions set into equivalence classes)"
              ]},
              { "type": "list", "title": "Graph Theory Terms", "values": [
                "Vertex (Node) — Basic element of a graph",
                "Edge — Connection between two vertices",
                "Directed vs Undirected — Edges have direction or not",
                "Complete Graph (K_n) — Every vertex connects to every other",
                "Tree — Connected acyclic graph (no cycles), n-1 edges for n vertices",
                "Eulerian Circuit — Visits every edge exactly once, returns to start"
              ]},
              { "type": "related", "value": [
                { "year": "2021", "paper": "Discrete Mathematics", "section": "Section A", "qid": "Q1" }
              ]}
            ],
            "examTips": ["A graph has an Eulerian circuit iff all vertices have even degree", "In a tree, number of edges = vertices - 1"]
          }
        ]
      }
    ]
  }
};
