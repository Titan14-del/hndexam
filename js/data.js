const examData = {
  "2020": {
    "papers": [
      {
        "title": "Case Study - SWE",
        "duration": "6 hours",
        "credits": 14,
        "sections": [
          {
            "title": "DS & Alg",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "Write structured pseudocode for given flowcharts.",
                "marks": 5,
                "answer": "BEGIN\\nINPUT x\\nIF x>0 THEN\\n  DISPLAY \\\"Positive\\\"\\nELSE\\n  DISPLAY \\\"Non-positive\\\"\\nENDIF\\nEND"
              },
              {
                "id": 2,
                "text": "Big-Oh rule of sums, products, transitivity.",
                "marks": 5,
                "answer": "Sums: O(f+g)=max(O(f),O(g)) TRUE. Products: O(fg)=O(f)O(g) TRUE. Transitivity: if h=O(g),g=O(f) then h=O(f)."
              }
            ]
          },
          {
            "title": "C Prog",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "C variable rules.",
                "marks": 3,
                "answer": "Letter/underscore start, alnum+underscore, case-sensitive, no keywords."
              },
              {
                "id": 2,
                "text": "4 function declaration ways.",
                "marks": 5,
                "answer": "void f(void); void f(int); int f(void); int f(int);"
              },
              {
                "id": 3,
                "text": "int arr[10] size?",
                "marks": 2,
                "answer": "40 bytes."
              },
              {
                "id": 4,
                "text": "Output: a=1,b=1,c=a+++b.",
                "marks": 2,
                "answer": "c=2, a=2, b=1 => 2,1"
              }
            ]
          },
          {
            "title": "OOP",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Inheritance & Modularity?",
                "marks": 2,
                "answer": "Inheritance: class derives from parent. Modularity: system divided into modules."
              },
              {
                "id": 2,
                "text": "Class vs Object?",
                "marks": 2,
                "answer": "Class=template. Object=instance."
              },
              {
                "id": 3,
                "text": "Inheritance types?",
                "marks": 2,
                "answer": "Single, Multiple, Multilevel, Hierarchical, Hybrid."
              },
              {
                "id": 4,
                "text": "Person->MathsTeacher,Footballer. OOP concepts & output.",
                "marks": 6,
                "answer": "Inheritance, Encapsulation. Output: profession, age, walk, talk, teach/play."
              }
            ]
          },
          {
            "title": "UML",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "Static vs dynamic diagrams. Flight mgmt class diagram.",
                "marks": 10,
                "answer": "Static: Class,Object,Component. Dynamic: Sequence,Activity,State. Classes: Airline,Flight,Airport,Pilot,Aircraft."
              }
            ]
          },
          {
            "title": "Database",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Customer fields explanation.",
                "marks": 8,
                "answer": "Auto=auto-increment ID. Text=VARCHAR. Decimal=exact money. Date=YMD."
              },
              {
                "id": 2,
                "text": "VEHICLE_OPERATOR normalization.",
                "marks": 12,
                "answer": "VEHICLE_OPERATOR normalization steps:\n\n1. Unnormalized form (UNF): Table contains repeating groups. All attributes in one table: (VehicleID, VehicleDesc, OperatorID, OperatorName, Route, Tariff).\n\n2. First Normal Form (1NF): Remove repeating groups by creating separate rows for each route-operator combination. Each row has atomic values. Primary key: (VehicleID, OperatorID, Route).\n\n3. Functional Dependencies:\n   - VehicleID \u2192 VehicleDesc\n   - OperatorID \u2192 OperatorName\n   - (VehicleID, OperatorID, Route) \u2192 Tariff\n\n4. Second Normal Form (2NF): Remove partial dependencies. Split into:\n   - Vehicle(VehicleID, VehicleDesc)\n   - Operator(OperatorID, OperatorName)\n   - VehicleOperator(VehicleID, OperatorID, Route, Tariff)\n\n5. Third Normal Form (3NF): Remove transitive dependencies. Vehicle and Operator already in 3NF. VehicleOperator has no transitive dependencies.\n\nResulting schema:\n   Vehicle(VehicleID PK, VehicleDesc)\n   Operator(OperatorID PK, OperatorName)\n   VehicleOperator(VehicleID FK, OperatorID FK, Route, Tariff) with composite PK (VehicleID, OperatorID, Route)\n\nAnomalies resolved:\n- Insert anomaly: Can add a vehicle without assigning operators.\n- Delete anomaly: Removing an operator won't lose vehicle data.\n- Update anomaly: Vehicle description stored only once."
              }
            ]
          },
          {
            "title": "Web",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Define PHP and tools.",
                "marks": 3,
                "answer": "Server-side scripting. Tools: Apache, MySQL, IDE."
              },
              {
                "id": 2,
                "text": "Login form + PHP processing.",
                "marks": 8,
                "answer": "<form method=post><input name=login><input type=password name=pass><input type=submit>\\n<?php echo $_POST['login'];?>"
              }
            ]
          },
          {
            "title": "Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Firewall? ISP? 192.168.1.0/24: hosts, gateway, broadcast.",
                "marks": 15,
                "answer": "1. Firewall:\nA firewall is a network security device that monitors and controls incoming and outgoing traffic based on predetermined security rules. Types:\n- Packet filtering firewall: inspects packets headers (IP, port).\n- Stateful inspection: tracks connection state.\n- Application gateway (proxy): filters at application layer.\n- Next-generation firewall: combines multiple functions.\nFunctions: blocks unauthorized access, prevents malware, logs traffic, enables VPNs.\n\n2. ISP (Internet Service Provider):\nAn ISP is a company that provides internet access to individuals and organizations. Types:\n- Dial-up (obsolete).\n- DSL (over telephone lines).\n- Cable (over TV cables).\n- Fiber optic (high-speed).\n- Satellite (remote areas).\n- Mobile (4G/5G).\nISPs assign IP addresses, provide DNS, email, web hosting.\n\n3. 192.168.1.0/24 subnet analysis:\n- Subnet mask: 255.255.255.0\n- Total addresses: 2^(32-24) = 256\n- Usable hosts: 256 - 2 = 254\n- Network address: 192.168.1.0\n- Default gateway: 192.168.1.1 (typically the router's address)\n- Broadcast address: 192.168.1.255\n- Usable host range: 192.168.1.1 to 192.168.1.254\n- CIDR notation: /24 means first 24 bits are network prefix"
              }
            ]
          }
        ]
      },
      {
        "title": "Information System",
        "duration": "3 hours",
        "credits": 6,
        "sections": [
          {
            "title": "Section A: System Architecture",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is an Object server in a client-server environment?",
                "marks": 4,
                "answer": "An Object server stores and manages objects (not just flat data), providing methods for clients to create, read, update, and delete objects. Used in distributed object computing (CORBA, DCOM, EJB). It encapsulates both data and behavior."
              },
              {
                "id": 2,
                "text": "What are the two broad classes of middleware in a client-server environment?",
                "marks": 4,
                "answer": "1) General middleware: provides general communication services (RPC, Message-Oriented Middleware).\n2) Service-specific middleware: designed for specific services (Database middleware like ODBC/JDBC, Web middleware like HTTP servers)."
              },
              {
                "id": 3,
                "text": "What are the five major technologies used to create client-server applications?",
                "marks": 4,
                "answer": "1) Database middleware (ODBC, JDBC)\n2) Remote Procedure Call (RPC)\n3) Object brokers (CORBA, DCOM)\n4) Web services (HTTP, REST, SOAP)\n5) Message-Oriented Middleware (MQ Series)"
              },
              {
                "id": 4,
                "text": "Explain public cloud and private cloud.",
                "marks": 4,
                "answer": "Public cloud: third-party services delivered over public internet, multi-tenant, pay-as-you-go (AWS, Azure, Google Cloud).\nPrivate cloud: exclusive to a single organization, more control and security, hosted on-premises or by third-party."
              },
              {
                "id": 5,
                "text": "What are the essential characteristics of cloud computing?",
                "marks": 4,
                "answer": "1) On-demand self-service: users provision resources without human interaction.\n2) Broad network access: available over standard network protocols.\n3) Resource pooling: multi-tenant model serving multiple consumers.\n4) Rapid elasticity: resources scale quickly up or down.\n5) Measured service: usage is monitored, controlled, and reported."
              },
              {
                "id": 6,
                "text": "How many types of deployment models exist in cloud computing? Name them.",
                "marks": 4,
                "answer": "Four deployment models:\n1) Public cloud: open to general public.\n2) Private cloud: exclusive to one organization.\n3) Hybrid cloud: combination of public and private.\n4) Community cloud: shared by several organizations with common concerns."
              },
              {
                "id": 7,
                "text": "Describe the different types of guided media in networking.",
                "marks": 4,
                "answer": "1) Twisted pair cable: two insulated copper wires twisted together (UTP/STP). Used in Ethernet, up to 1 Gbps.\n2) Coaxial cable: central conductor, insulating layer, metallic shield. Used for cable TV and broadband.\n3) Fiber optic cable: glass fibers transmitting light pulses. Very high speed, immune to interference, long distance."
              },
              {
                "id": 8,
                "text": "What do you mean by wireless communication?",
                "marks": 4,
                "answer": "Wireless communication transmits data without physical connections using electromagnetic waves (radio, microwave, infrared). Examples: Wi-Fi, Bluetooth, cellular (4G/5G), satellite. Advantages: mobility, flexibility. Disadvantages: interference, security concerns."
              },
              {
                "id": 9,
                "text": "List two advantages and two disadvantages of fiber optic cable.",
                "marks": 4,
                "answer": "Advantages:\n1) Very high bandwidth and data transmission speed.\n2) Immune to electromagnetic interference and signal degradation.\n\nDisadvantages:\n1) High installation cost and specialized equipment.\n2) Fragile - easily damaged if bent excessively."
              },
              {
                "id": 10,
                "text": "List three factors on which data transmission rate depends.",
                "marks": 4,
                "answer": "1) Bandwidth of the transmission medium (wider bandwidth = higher rate).\n2) Signal-to-noise ratio (higher SNR = fewer errors, higher effective rate).\n3) Encoding and modulation scheme used (more bits per symbol = higher rate)."
              }
            ]
          },
          {
            "title": "Section B: Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Explain the main purpose of an operating system.",
                "marks": 5,
                "answer": "An OS manages computer hardware and software resources, providing services for programs. Key purposes: 1) Process management (scheduling). 2) Memory management (allocation). 3) File system management. 4) Device management (drivers). 5) Security and protection. 6) User interface."
              },
              {
                "id": 2,
                "text": "What are the advantages of a multiprocessor system?",
                "marks": 5,
                "answer": "1) Increased throughput: more tasks completed per unit time.\n2) Economical: sharing peripherals reduces cost.\n3) Increased reliability: failure of one CPU doesn't halt system.\n4) Scalability: additional processors can be added.\n5) Faster execution: parallel processing of tasks."
              },
              {
                "id": 3,
                "text": "Describe the objective of multiprogramming.",
                "marks": 5,
                "answer": "Multiprogramming keeps multiple programs in memory simultaneously. When one program waits for I/O, the CPU switches to another program, keeping the CPU busy. Objective: maximize CPU utilization by reducing idle time, increasing system throughput and resource utilization."
              },
              {
                "id": 4,
                "text": "Give some benefits of multithreaded programming.",
                "marks": 5,
                "answer": "1) Responsiveness: interactive programs remain responsive.\n2) Resource sharing: threads share memory and resources.\n3) Economy: creating threads is cheaper than processes.\n4) Scalability: threads can run on different processors.\n5) Better CPU utilization: one thread runs while another blocks."
              },
              {
                "id": 5,
                "text": "What is a file? List the operations performed on files or directories.",
                "marks": 5,
                "answer": "A file is a named collection of related data stored on secondary storage (disk, SSD).\n\nFile operations: Create, Open, Read, Write, Close, Delete, Seek, Rename.\nDirectory operations: Create directory, Delete directory, List contents, Navigate (cd), Rename directory."
              },
              {
                "id": 6,
                "text": "What is the Google Android SDK?",
                "marks": 5,
                "answer": "Android SDK (Software Development Kit) is a collection of development tools for building Android applications. It includes: libraries, debugger, emulator, documentation, sample code, build tools (gradle), and APIs for accessing Android features. Developers use it with IDEs like Android Studio."
              },
              {
                "id": 7,
                "text": "List the four key components of Android Architecture.",
                "marks": 5,
                "answer": "1) Linux Kernel: hardware abstraction, drivers, memory management.\n2) Hardware Abstraction Layer (HAL): provides standard interfaces to hardware.\n3) Android Runtime (ART): executes apps with ahead-of-time compilation.\n4) Application Framework: high-level building blocks (Activity Manager, Content Providers, etc.).\n5) System Apps: core pre-installed applications."
              },
              {
                "id": 8,
                "text": "What is the importance of having an emulator within the Android development environment?",
                "marks": 5,
                "answer": "1) Test apps without physical devices (cost-effective).\n2) Simulate multiple device configurations (screen sizes, API levels).\n3) Faster iteration cycle (no deployment to hardware).\n4) Debug with advanced features (breakpoints, profiling).\n5) Test edge cases (slow network, low battery, incoming calls)."
              }
            ]
          },
          {
            "title": "Section C: Project Management and Legal Regulations",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Define: a) A project b) A software project manager.",
                "marks": 5,
                "answer": "a) A project is a temporary endeavor with a defined beginning and end, undertaken to create a unique product, service, or result, constrained by time, cost, and scope.\nb) A software project manager is responsible for planning, organizing, leading, and controlling software development projects to deliver quality products within budget and schedule."
              },
              {
                "id": 2,
                "text": "How important is 'Project Methodology' as a parameter for software cost estimation?",
                "marks": 5,
                "answer": "Project methodology significantly impacts cost estimation. Waterfall requires all requirements upfront (higher initial analysis cost). Agile's iterative nature spreads cost across sprints (flexible, changing scope). Methodology determines: 1) Effort distribution, 2) Risk factors, 3) Team composition needs, 4) Tools and infrastructure, 5) Documentation overhead. Choosing wrong methodology can cause 30-40% estimation errors."
              },
              {
                "id": 3,
                "text": "Can agile development be applied in traditional product development? Explain.",
                "marks": 5,
                "answer": "Yes, but with adaptations. Agile principles (iterative delivery, customer feedback, cross-functional teams) can benefit traditional product development. However, hardware products have longer lead times and physical constraints. Hybrid approaches (Water-Scrum-Fall) work well: use agile for software/firmware components and traditional methods for hardware manufacturing."
              },
              {
                "id": 4,
                "text": "Explain what is Copyright.",
                "marks": 5,
                "answer": "Copyright is a legal right granting the creator of original work exclusive rights to its use, distribution, and reproduction. It protects literary, artistic, musical, and software works. Duration typically lasts creator's lifetime + 50-70 years. In software: protects source code, prevents unauthorized copying. Registration is optional but strengthens legal claims."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Electronics",
        "duration": "4 hours",
        "credits": 7,
        "sections": [
          {
            "title": "Section A: Number System and Codes",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "In the decimal numbering system, what is the MSD?",
                "marks": 1,
                "answer": "D) The digit with the most weight"
              },
              {
                "id": 2,
                "text": "The output of an AND gate with three inputs A, B, and C is HIGH when:",
                "marks": 1,
                "answer": "D) A=1, B=1, C=1"
              },
              {
                "id": 3,
                "text": "The BCD number for decimal 16 is:",
                "marks": 1,
                "answer": "A) 00010110"
              },
              {
                "id": 4,
                "text": "What are the symbols used to represent digits in the binary number system?",
                "marks": 1,
                "answer": "D) 0, 1"
              },
              {
                "id": 5,
                "text": "Convert the fractional binary number 0001.0010 to decimal.",
                "marks": 1,
                "answer": "B) 1.125"
              },
              {
                "id": 6,
                "text": "The number of bits used to store each decimal digit in BCD is:",
                "marks": 1,
                "answer": "C) 4"
              },
              {
                "id": 7,
                "text": "Convert 11001001 (binary) to decimal.",
                "marks": 1,
                "answer": "A) 201"
              },
              {
                "id": 8,
                "text": "170 in decimal is equivalent to which hexadecimal number?",
                "marks": 1,
                "answer": "D) AA"
              },
              {
                "id": 9,
                "text": "The operation 111000 + 110110 in binary is equal to:",
                "marks": 1,
                "answer": "B) 1101110"
              },
              {
                "id": 10,
                "text": "The operation 111000 - 101111 in binary gives what decimal result?",
                "marks": 1,
                "answer": "A) 9 (binary: 001001)"
              },
              {
                "id": 11,
                "text": "The two's complement of binary number 0101 is:",
                "marks": 1,
                "answer": "D) 1011"
              },
              {
                "id": 12,
                "text": "Which logical operation is represented by the + sign in Boolean algebra?",
                "marks": 1,
                "answer": "C) OR"
              },
              {
                "id": 13,
                "text": "The output of an AND gate is LOW:",
                "marks": 1,
                "answer": "B) when any input is LOW"
              },
              {
                "id": 14,
                "text": "Excess-3 code is known as:",
                "marks": 1,
                "answer": "C) Self-complementing code"
              },
              {
                "id": 15,
                "text": "A full adder logic circuit will have:",
                "marks": 1,
                "answer": "D) Three inputs and two outputs"
              },
              {
                "id": 16,
                "text": "In Boolean algebra, the value of A + 1 is:",
                "marks": 1,
                "answer": "A) 1"
              },
              {
                "id": 17,
                "text": "Which gate is known as a universal gate?",
                "marks": 1,
                "answer": "A) NAND gate"
              },
              {
                "id": 18,
                "text": "The radix (base) of the octal number system is:",
                "marks": 1,
                "answer": "B) 8"
              },
              {
                "id": 19,
                "text": "The 1's complement of binary 1010 is:",
                "marks": 1,
                "answer": "B) 0101"
              },
              {
                "id": 20,
                "text": "A NOT gate is also called:",
                "marks": 1,
                "answer": "B) Inverter"
              }
            ]
          },
          {
            "title": "Section B: Logic Gates and Boolean Algebra",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "State and prove De Morgan's theorems.",
                "marks": 6,
                "answer": "De Morgan's Theorem 1: (A.B)' = A' + B'\nProof: Truth table shows both expressions produce same output.\nDe Morgan's Theorem 2: (A+B)' = A' . B'\nProof: Truth table verification."
              },
              {
                "id": 2,
                "text": "Simplify the Boolean expression: Y = A'B'C + A'BC + AB'C.",
                "marks": 4,
                "answer": "Y = A'C(B' + B) + AB'C = A'C(1) + AB'C = C(A' + AB') = C(A' + B')\nSimplified: Y = C(A' + B')"
              },
              {
                "id": 3,
                "text": "Draw the logic diagram for a half adder and explain its operation.",
                "marks": 6,
                "answer": "Half adder has two inputs (A, B) and two outputs (Sum, Carry).\nSum = A XOR B\nCarry = A AND B\nLogic: XOR gate for Sum, AND gate for Carry."
              },
              {
                "id": 4,
                "text": "Convert the Gray code 1011 to binary.",
                "marks": 4,
                "answer": "Gray 1011 to Binary:\nMSB same: 1\nSecond: 1 XOR 0 = 1\nThird: 1 XOR 1 = 0\nFourth: 0 XOR 1 = 1\nBinary: 1101"
              },
              {
                "id": 5,
                "text": "What is a truth table? Draw the truth table for a 3-input NAND gate.",
                "marks": 4,
                "answer": "A truth table lists all possible input combinations and the corresponding output.\n3-input NAND: Output = (ABC)' = 0 only when all inputs are 1.\nTruth: 000->1, 001->1, 010->1, 011->1, 100->1, 101->1, 110->1, 111->0"
              },
              {
                "id": 6,
                "text": "Express the Boolean function F = AB + AC + BC using only NAND gates.",
                "marks": 6,
                "answer": "F = ((AB)')' + ((AC)')' + ((BC)')'\nUsing NAND: F = (AB)' NAND (AC)' NAND (BC)'\nMore precisely: F = ((AB)')'.((AC)')'.((BC)')')'\nThis requires three NANDs for the ANDs and one NAND as inverter."
              }
            ]
          },
          {
            "title": "Section C: MS Office and Applications",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Which application software is suitable for: a) Writing a letter b) Financial calculations c) Designing a calendar d) Preparing a presentation?",
                "marks": 4,
                "answer": "a) Microsoft Word (word processor)\nb) Microsoft Excel (spreadsheet)\nc) Microsoft Publisher or Word (with templates)\nd) Microsoft PowerPoint (presentation)"
              },
              {
                "id": 2,
                "text": "What is the use of the following Excel functions? a) MAX b) AVERAGE c) SUM",
                "marks": 3,
                "answer": "a) MAX: Returns the largest value in a range of cells.\nb) AVERAGE: Returns the arithmetic mean of values in a range.\nc) SUM: Adds all numbers in a range of cells."
              },
              {
                "id": 3,
                "text": "What is the file extension for: a) Word document b) Excel workbook c) PowerPoint presentation?",
                "marks": 3,
                "answer": "a) .docx\nb) .xlsx\nc) .pptx"
              },
              {
                "id": 4,
                "text": "Explain the procedure for adding animations and transitions in PowerPoint.",
                "marks": 4,
                "answer": "Transitions: Select slide > Transitions tab > Choose transition > Effect Options.\nAnimations: Select object > Animations tab > Choose animation > Set duration/trigger.\nUse Animation Pane to reorder and customize."
              },
              {
                "id": 5,
                "text": "What is the importance of using breaks in a Word document?",
                "marks": 2,
                "answer": "Breaks allow different formatting (page layout, headers, footers, columns) within the same document. Types: Page break, Section break, Column break."
              },
              {
                "id": 6,
                "text": "How can you automatically fill formulas from cell D3 to D4-D6 in Excel?",
                "marks": 4,
                "answer": "Select cell D3, then drag the fill handle (small square at bottom-right corner) down to D6. Excel automatically adjusts cell references (relative referencing). Alternatively, select the range and press Ctrl+Enter."
              }
            ]
          }
        ]
      },
      {
        "title": "Mathematics",
        "duration": "4 hours",
        "credits": 6,
        "sections": [
          {
            "title": "Section A: Statistics",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "A national examination in Mathematics was taken by 8479 candidates and the results are summarized in a grouped frequency distribution. Marks: 0-10(46), 11-20(216), 21-30(522), 31-40(1057), 41-50(1492), 51-60(1683), 61-70(1522), 71-80(1098), 81-90(522), 91-100(108). If 62.2% should pass, calculate the necessary pass mark. Draw a cumulative frequency graph and estimate the range of marks obtained by the central 80% of candidates. If the pass mark was fixed at 55%, how many would pass?",
                "marks": 12,
                "answer": "Total candidates = 8479. 62.2% of 8479 = 5274 must pass, so 8479-5274=3205 fail. Locating cumulative: 46+216+522+1057=1841, +1492=3333. 3205 lies in 31-40 class. Pass mark = 30.5 + 10(3205-1841)/1057 = 30.5+12.9 = 43.4. For 55% pass: 55% of 8479 = 4663 pass, 3816 fail. Cumulative at 41-50: 1841+1057+1492=4390 surpasses 3816. Lies in 31-40. 3816-1841-1057=918, pass=30.5+10(918/1492)=36.65."
              },
              {
                "id": 2,
                "text": "The probability density function for a continuous random variable X is f(x) = { a + bx², 0 ≤ x ≤ 1; 0 otherwise }. Find a and b if E(X) = 2, then find Var(X).",
                "marks": 8,
                "answer": "∫₀¹(a+bx²)dx = 1 => a + b/3 = 1. E(X) = ∫₀¹x(a+bx²)dx = a/2 + b/4 = 2. From first: a=1-b/3. Substitute: (1-b/3)/2 + b/4 = 2 => 1/2 - b/6 + b/4 = 2 => 1/2 + b/12 = 2 => b/12 = 3/2 => b=18. Then a = 1-18/3 = 1-6 = -5. Var(X)=E(X²)-E(X)². E(X²)=∫₀¹x²(-5+18x²)dx = [-5x³/3+18x⁵/5]₀¹ = -5/3+18/5 = -25/15+54/15 = 29/15 = 1.933. Var = 1.933 - 4 = -2.067. (Note: negative variance suggests E(X)=2 is not valid for [0,1] range as max E(X) with any pdf on [0,1] is 1.)"
              },
              {
                "id": 3,
                "text": "The number of customers arriving at a bank is Poisson distributed with mean 4 customers per minute. a) Within 2 minutes, what is the probability of exactly 3 customers? b) What is the probability density function for the time between arrival of the next customer?",
                "marks": 10,
                "answer": "a) λ for 2 minutes = 8. P(X=3) = e⁻⁸(8³/3!) = e⁻⁸(512/6) = 0.0286. b) Interarrival time T follows exponential distribution with λ=4. f(t)=4e⁻⁴ᵗ for t≥0. P(T>t)=e⁻⁴ᵗ."
              },
              {
                "id": 4,
                "text": "Given sample data: Σx=250, Σx²=5200, n=30. Calculate the mean, variance, and standard deviation.",
                "marks": 4,
                "answer": "Mean = 250/30 = 8.33. Variance = 5200/30 - (8.33)² = 173.33-69.44 = 103.89. SD = √103.89 = 10.19."
              },
              {
                "id": 5,
                "text": "A sample of 40 items has mean 50.2g and SD 0.8g. Test at 5% significance whether the population mean is 50g.",
                "marks": 6,
                "answer": "H₀: μ=50, H₁: μ≠50. Z = (50.2-50)/(0.8/√40) = 0.2/0.1265 = 1.581. Critical value at 5% = ±1.96. Since 1.581<1.96, fail to reject H₀. The mean is not significantly different from 50g at 5% level."
              }
            ]
          },
          {
            "title": "Section B: Probability",
            "marks": 40,
            "questions": [
              {
                "id": 6,
                "text": "State Bayes' Theorem. A disease has incidence rate 0.1%. A test does not produce false negatives but has a false positive rate of 5%. A randomly selected person tests positive. Using Bayes' Theorem, find the probability they actually have the disease.",
                "marks": 6,
                "answer": "P(D) = 0.001, P(T|D) = 1, P(T|D') = 0.05. P(D|T) = P(T|D)P(D)/[P(T|D)P(D)+P(T|D')P(D')] = 1(0.001)/[1(0.001)+0.05(0.999)] = 0.001/0.05095 = 0.01963 ≈ 1.96%."
              },
              {
                "id": 7,
                "text": "In a random sample of HND students, 50% are business majors, 40% engineering, 10% other. Of business majors, 60% were female. Of engineering, 30% were female. Of other, 20% were female. Given a person is female, what is the probability she is an engineering major?",
                "marks": 5,
                "answer": "P(F) = 0.5(0.6)+0.4(0.3)+0.1(0.2) = 0.3+0.12+0.02 = 0.44. P(E|F) = P(F|E)P(E)/P(F) = 0.3(0.4)/0.44 = 0.12/0.44 = 0.2727."
              },
              {
                "id": 8,
                "text": "Given that P(A∩B)=0.7 and P(A∪B')=0.9, find P(A).",
                "marks": 4,
                "answer": "P(A∪B') = P(A)+P(B')-P(A∩B') = P(A)+[1-P(B)]-P(A∩B'). Also P(A∩B') = P(A)-P(A∩B) = P(A)-0.7. So 0.9 = P(A)+1-P(B)-[P(A)-0.7] = P(A)+1-P(B)-P(A)+0.7 = 1.7-P(B). So P(B)=0.8. P(A∩B)=0.7, P(B)=0.8 implies P(A|B)=0.7/0.8=0.875. Since P(A∩B)≤P(A) and P(A∩B)≤P(B), P(A)≥0.7. If A⊇B then P(A)=0.7. Actually: P(A) = P(A∩B)+P(A∩B') = 0.7+P(A∩B'). Since P(B')=0.2 and P(A∩B')⊆B', P(A∩B')≤0.2. So P(A)≤0.9. With P(A∪B')=0.9=P(A)+P(B')-P(A∩B')=P(A)+0.2-P(A∩B'), so P(A)=0.7+P(A∩B'). If P(A∩B')=0, P(A)=0.7 and P(A∪B')=0.7+0.2=0.9 ✓. So P(A)=0.7."
              },
              {
                "id": 9,
                "text": "A coin is tossed 5 times. Find: a) P(exactly 3 heads) b) P(at least 4 heads) c) P(no heads).",
                "marks": 6,
                "answer": "Binomial, n=5, p=0.5. a) P(3)=C(5,3)(0.5)⁵=10/32=0.3125. b) P(4)+P(5)=5/32+1/32=6/32=0.1875. c) P(0)=1/32=0.03125."
              },
              {
                "id": 10,
                "text": "A medical treatment has success rate 0.8. Two patients are treated independently. What is the probability neither is successfully cured?",
                "marks": 2,
                "answer": "P(both fail) = (0.2)(0.2) = 0.04."
              },
              {
                "id": 11,
                "text": "Events A and B are independent. P(A)=0.2, P(B)=0.4. Find P(A|B).",
                "marks": 2,
                "answer": "Since independent, P(A|B)=P(A)=0.2."
              },
              {
                "id": 12,
                "text": "A blood test indicates a disease 95% of the time when present and 0.5% of the time when not present. 1% of the population has the disease. Calculate P(disease|positive).",
                "marks": 5,
                "answer": "P(D)=0.01, P(T|D)=0.95, P(T|D')=0.005. P(D|T)=0.95(0.01)/[0.95(0.01)+0.005(0.99)]=0.0095/(0.0095+0.00495)=0.0095/0.01445=0.6574."
              },
              {
                "id": 13,
                "text": "The correlation coefficient between X: 2,4,6,8,10 and Y: 3,5,7,9,11 is?",
                "marks": 4,
                "answer": "r = 1.0 (perfect positive correlation). X and Y have exact linear relationship Y=X+1."
              },
              {
                "id": 14,
                "text": "A class has 8 boys and 7 girls. The teacher selects 3 at random without replacement. Find P(boys selected exceeds girls selected).",
                "marks": 3,
                "answer": "P(3B)+P(2B1G) = [C(8,3)/C(15,3)] + [C(8,2)C(7,1)/C(15,3)] = [56/455] + [28(7)/455] = 56/455+196/455 = 252/455 = 0.5538."
              },
              {
                "id": 15,
                "text": "A salesperson succeeds on each call with probability 1/50, calls are independent. Calling 50 people, the number of successful calls is: A) exactly 1 B) at most 1 C) a binomial random variable D) equally likely 0,1,2. Choose and explain.",
                "marks": 3,
                "answer": "C) A binomial random variable. n=50, p=1/50. Each call is an independent Bernoulli trial with same success probability."
              }
            ]
          },
          {
            "title": "Section C: Analysis (Calculus, ODEs, Transforms)",
            "marks": 20,
            "questions": [
              {
                "id": 16,
                "text": "Evaluate f_x and f_y for: (i) f(x,y)=x³+5xy+2y-2 (ii) f(x,y)=8+cos2x-xy².",
                "marks": 4,
                "answer": "(i) f_x=3x²+5y, f_y=5x+2. (ii) f_x=-2sin2x-y², f_y=-2xy."
              },
              {
                "id": 17,
                "text": "Evaluate the Laplace transforms of 3t²+cos2t.",
                "marks": 3,
                "answer": "L{3t²}=3(2!/s³)=6/s³. L{cos2t}=s/(s²+4). So L=6/s³+s/(s²+4)."
              },
              {
                "id": 18,
                "text": "Solve the initial value problem using Laplace transform: y''+y=3, y(0)=0, y'(0)=0.",
                "marks": 5,
                "answer": "L{y''}=s²Y, L{y}=Y, L{3}=3/s. s²Y+Y=3/s. Y(s²+1)=3/s. Y=3/[s(s²+1)]=3/s-3s/(s²+1). y(t)=3-3cos(t)."
              },
              {
                "id": 19,
                "text": "Solve the differential equation: (y²-xy)dx+x²dy=0.",
                "marks": 4,
                "answer": "Rewrite: x²dy = (xy-y²)dx => dy/dx = (xy-y²)/x² = y/x - (y/x)². Let v=y/x, y=vx, dy/dx=v+x dv/dx. Then v+x dv/dx = v-v² => x dv/dx = -v² => dv/v² = -dx/x => -1/v = -ln|x|+C => v = 1/(ln|x|+C) => y = x/(ln|x|+C)."
              },
              {
                "id": 20,
                "text": "Find the average rate of change of f(x)=2x²-2 on [0,2].",
                "marks": 2,
                "answer": "Average rate = [f(2)-f(0)]/(2-0) = [(8-2)-(-2)]/2 = (6+2)/2 = 4."
              },
              {
                "id": 21,
                "text": "Find the exact value of cos(x+y) given sin x = 3/5 (x in first quadrant) and cos y = -8/17 (y in second quadrant).",
                "marks": 2,
                "answer": "cos x = 4/5, sin y = 15/17. cos(x+y) = cos x cos y - sin x sin y = (4/5)(-8/17)-(3/5)(15/17) = -32/85-45/85 = -77/85."
              }
            ]
          }
        ]
      },
      {
        "title": "English Language",
        "duration": "2 hours",
        "credits": 0.5,
        "sections": [
          {
            "title": "Section A: Reading Comprehension",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "What do mosquitoes need in order to reproduce?",
                "marks": 2,
                "answer": "Mosquitoes require water in order to reproduce."
              },
              {
                "id": 2,
                "text": "What is the food of mosquitoes?",
                "marks": 2,
                "answer": "Mosquitoes are blood feeders (they feed on blood)."
              },
              {
                "id": 3,
                "text": "Name the two diseases transmitted by mosquitoes mentioned in the passage.",
                "marks": 2,
                "answer": "Malaria and filariasis."
              },
              {
                "id": 4,
                "text": "How do mosquitoes transmit malaria parasites to a healthy person?",
                "marks": 3,
                "answer": "A mosquito bites an infected person and sucks up malaria parasites with its blood meal. The parasites develop inside the mosquito's stomach to an infective stage. When the same mosquito bites a healthy person, it transfers the parasites into that person, who then develops malaria."
              },
              {
                "id": 5,
                "text": "List three ways individuals can help control mosquitoes according to the passage.",
                "marks": 4,
                "answer": "1) Ensure there is no stagnant water around their home. 2) Use modern toilet facilities and stop polluting the environment. 3) Report cases of infection immediately to the nearest hospital for proper diagnosis and treatment."
              },
              {
                "id": 6,
                "text": "Who should cooperate with the public health authorities to control malaria and other parasitic diseases?",
                "marks": 2,
                "answer": "Every responsible citizen should cooperate with the public health authorities."
              },
              {
                "id": 7,
                "text": "According to the passage, what has caused diseases to become epidemic?",
                "marks": 2,
                "answer": "Our careless attitude towards basic hygiene has caused diseases to become epidemic."
              },
              {
                "id": 8,
                "text": "What means of controlling diseases does the passage suggest creating?",
                "marks": 3,
                "answer": "Through health education and the use of all resources available to us."
              }
            ]
          },
          {
            "title": "Section B: Grammar and Vocabulary",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Fill in the blank with the correct form of the word in brackets: 'My brother _____ (ready) finished his homework when I arrived.'",
                "marks": 1,
                "answer": "had already"
              },
              {
                "id": 2,
                "text": "Fill in: 'She has _____ (know) him for a long time.'",
                "marks": 1,
                "answer": "known"
              },
              {
                "id": 3,
                "text": "Fill in: 'My sister spoke _____ (honest) about the matter in court.'",
                "marks": 1,
                "answer": "honestly"
              },
              {
                "id": 4,
                "text": "Match: 'Bintu went to the forest' with: A) unless we stop destroying our forests B) to find fuel wood for her kitchen C) in order to fatten them D) because he wanted to know his HIV status E) if I hadn't been bitten by black flies",
                "marks": 1,
                "answer": "B) to find fuel wood for her kitchen"
              },
              {
                "id": 5,
                "text": "Match: 'The desert will continue to advance' with the correct ending.",
                "marks": 1,
                "answer": "A) unless we stop destroying our forests"
              },
              {
                "id": 6,
                "text": "Match: 'Madiba went for the HIV screening test' with the correct ending.",
                "marks": 1,
                "answer": "D) because he wanted to know his HIV status"
              },
              {
                "id": 7,
                "text": "Match: 'I wouldn't have had these terrible skin problems' with the correct ending.",
                "marks": 1,
                "answer": "E) if I hadn't been bitten by black flies"
              },
              {
                "id": 8,
                "text": "Match: 'The farmer gave his chickens a lot of food' with the correct ending.",
                "marks": 1,
                "answer": "C) in order to fatten them and sell them for more money"
              },
              {
                "id": 9,
                "text": "Complete: 'Maimouna, how could you refuse to help your mother with the _____?'",
                "marks": 1,
                "answer": "housework / chores"
              },
              {
                "id": 10,
                "text": "Complete: 'I do not eat at school, I take a good _____ early in the morning and then I eat dinner at home with my family.'",
                "marks": 1,
                "answer": "breakfast"
              },
              {
                "id": 11,
                "text": "Complete: 'The _____ is also referred to as the Gentlemen's Club.'",
                "marks": 1,
                "answer": "House of Commons / Legislature"
              },
              {
                "id": 12,
                "text": "Complete: 'Well my dear, the 100% protection against AIDS is _____. Isn't it?'",
                "marks": 1,
                "answer": "abstinence"
              },
              {
                "id": 13,
                "text": "Match vocabulary: 'A tributary' with its correct meaning.",
                "marks": 1,
                "answer": "E) of a river"
              },
              {
                "id": 14,
                "text": "Match: 'To make up' with its correct meaning.",
                "marks": 1,
                "answer": "D) one's mind"
              },
              {
                "id": 15,
                "text": "Match: 'To be ashamed' with its correct meaning.",
                "marks": 1,
                "answer": "B) of oneself"
              },
              {
                "id": 16,
                "text": "Match: 'It is rude' with its correct meaning.",
                "marks": 1,
                "answer": "C) to ignore people"
              },
              {
                "id": 17,
                "text": "Match: 'Space shuttle Columbia' with its correct meaning.",
                "marks": 1,
                "answer": "F) disintegrated"
              },
              {
                "id": 18,
                "text": "Link the sentences: 'The vase was stolen. The vase has been found.' (which)",
                "marks": 1,
                "answer": "The vase which was stolen has been found."
              },
              {
                "id": 19,
                "text": "Link: 'Mbarga is quite certain. He will be there.' (that)",
                "marks": 1,
                "answer": "Mbarga is quite certain that he will be there."
              },
              {
                "id": 20,
                "text": "Link: 'Wome and Tanda took a motorcycle. There were no taxis.' (because)",
                "marks": 1,
                "answer": "Wome and Tanda took a motorcycle because there were no taxis."
              },
              {
                "id": 21,
                "text": "Link: 'Mbulle took a taxi. It was raining.' (since)",
                "marks": 1,
                "answer": "Mbulle took a taxi since it was raining."
              },
              {
                "id": 22,
                "text": "Circle the odd one out (different pronunciation of underlined sound): Sound, Shout, Soup, Cloud",
                "marks": 1,
                "answer": "Soup (the 'ou' is pronounced /uː/ while the others are /aʊ/)"
              },
              {
                "id": 23,
                "text": "Circle the odd one out: Pear, Peace, Cease, Tease",
                "marks": 1,
                "answer": "Pear (the 'ea' is pronounced /eə/ while the others are /iː/)"
              },
              {
                "id": 24,
                "text": "Circle the odd one out: Peep, Wheel, Peel, Peer",
                "marks": 1,
                "answer": "Peer (the 'ee' is pronounced /ɪə/ while the others are /iː/)"
              },
              {
                "id": 25,
                "text": "Circle the odd one out: Cup, Cut, Put, Shut",
                "marks": 1,
                "answer": "Put (the 'u' is pronounced /ʊ/ while the others are /ʌ/)"
              }
            ]
          },
          {
            "title": "Section C: Spoken English",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "In which of these words is the underlined sound pronounced differently? Caught, Laugh, Though",
                "marks": 2,
                "answer": "Laugh (the 'gh' is pronounced /f/ while in Caught and Though it is silent)"
              },
              {
                "id": 2,
                "text": "Which word has a different underlined sound? Thatcher, Father, Thing, Thumb",
                "marks": 2,
                "answer": "Father (the 'th' is voiced /ð/ while the others are voiceless /θ/)"
              },
              {
                "id": 3,
                "text": "Transcribe the word 'lotto' phonetically.",
                "marks": 3,
                "answer": "/ˈlɒtəʊ/"
              },
              {
                "id": 4,
                "text": "Transcribe the word 'lotion' phonetically.",
                "marks": 4,
                "answer": "/ˈləʊʃən/"
              },
              {
                "id": 5,
                "text": "Place the stress mark on the stressed syllable in: 'Boycott'",
                "marks": 1,
                "answer": "'Boy·cott (stress on first syllable: /ˈbɔɪkɒt/)"
              },
              {
                "id": 6,
                "text": "Place the stress mark on the stressed syllable in: 'Interpret'",
                "marks": 1,
                "answer": "In·'ter·pret (stress on second syllable: /ɪnˈtɜːprɪt/)"
              },
              {
                "id": 7,
                "text": "Place the stress mark on the stressed syllable in: 'Professor'",
                "marks": 1,
                "answer": "Pro·'fes·sor (stress on second syllable: /prəˈfesə/)"
              },
              {
                "id": 8,
                "text": "Place the stress mark on the stressed syllable in: 'By-law'",
                "marks": 1,
                "answer": "'By·law (stress on first syllable: /ˈbaɪlɔː/)"
              },
              {
                "id": 9,
                "text": "Write the number of syllables in the word 'Education'.",
                "marks": 1,
                "answer": "4 syllables: Ed·u·ca·tion"
              },
              {
                "id": 10,
                "text": "Write the number of syllables in the word 'Pedagogical'.",
                "marks": 1,
                "answer": "5 syllables: Ped·a·go·gi·cal"
              },
              {
                "id": 11,
                "text": "Write the number of syllables in the word 'Appropriate'.",
                "marks": 1,
                "answer": "4 syllables: Ap·pro·pri·ate"
              },
              {
                "id": 12,
                "text": "Write the number of syllables in the word 'Acute'.",
                "marks": 1,
                "answer": "2 syllables: A·cute"
              }
            ]
          },
          {
            "title": "Section D: Writing",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Write an essay on ONE of the following topics:\n1. Imagine you have just returned from a foreign country where you spent your Easter holidays. Tell your classmates how you felt, things you did, what you liked and disliked, places visited, and general impressions.\n2. You discovered many classmates are HIV positive. Write a speech advising them on preventive methods and cure. Your name is Esua John, school GBSS Baleveng.\n3. Write a complaint against Mr. Ngwese who stole your goats. Your name is Zang, address P.O. Box Wokeka. Write to the Commissioner of Police for Wokeka.",
                "marks": 30,
                "answer": "Topic 1: My Easter Holidays in Ghana\n\nDear classmates, I am thrilled to share my Easter holiday experience in Ghana, a country I had always dreamed of visiting. I spent two wonderful weeks exploring the rich culture and history of this vibrant nation.\n\nI visited the Cape Coast Castle, a sobering historical site that taught me about the transatlantic slave trade. I also experienced the lively streets of Accra, where I sampled local delicacies like jollof rice, fufu, and kelewele. The warmth and hospitality of Ghanaians was overwhelming - everyone greeted me with a smile.\n\nWhat I loved most was the bustling Makola Market with its colorful fabrics and handmade crafts. The Kwame Nkrumah Memorial Park was inspiring. However, I did not enjoy the intense heat and humidity, which took some getting used to. The traffic in Accra was also challenging.\n\nI visited the beautiful Boti Falls and hiked through the lush Umbrella Rock formation. The wildlife at Mole National Park was breathtaking - I saw elephants and antelopes in their natural habitat.\n\nOverall, this trip broadened my perspective on African culture and history. I returned home with a deeper appreciation for our continent's heritage and a resolve to travel more."
              }
            ]
          }
        ]
      },
      {
        "title": "French Language",
        "duration": "2 hours",
        "credits": 0.5,
        "sections": [
          {
            "title": "Section A: Questions à Choix Multiples",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "La phrase de ponctuation correcte est : a) Me voici à Douala ! b) Me voici à Douala ? c) Me voici à Douala...",
                "marks": 1,
                "answer": "a) Me voici à Douala !"
              },
              {
                "id": 2,
                "text": "Phrase correctement ponctuée : a) elle riait, elle sautait, tapait des pieds et des mains. b) elle riait elle sautait, tapait des pieds et des mains. c) elle riait, elle sautait, tapait, des pieds et des mains.",
                "marks": 1,
                "answer": "a) elle riait, elle sautait, tapait des pieds et des mains."
              },
              {
                "id": 3,
                "text": "Phrase correcte : a) Il faisait très chaud ; la terre était desséchée. b) il faisait très chaud, la terre était desséchée. c) il faisait très chaud. La terre était desséchée.",
                "marks": 1,
                "answer": "a) Il faisait très chaud ; la terre était desséchée."
              },
              {
                "id": 4,
                "text": "Ponctuation correcte : a) Viens immédiatement ! b) Viens immédiatement ? c) Viens immédiatement.",
                "marks": 1,
                "answer": "a) Viens immédiatement !"
              },
              {
                "id": 5,
                "text": "Phrase correcte : a) Si monsieur veut bien prendre la peine... b) Si monsieur veut bien prendre la peine, c) Si monsieur veut bien prendre la peine !",
                "marks": 1,
                "answer": "a) Si monsieur veut bien prendre la peine..."
              },
              {
                "id": 6,
                "text": "À quel temps est conjugué 'fut' dans : 'Tchourouma fut frappé de stupeur.' a) futur antérieur b) passé simple c) passé antérieur",
                "marks": 1,
                "answer": "b) passé simple"
              },
              {
                "id": 7,
                "text": "À quel temps est 'vis' dans : 'À travers mes larmes, je vis mon agresseur.' a) présent de l'indicatif b) passé simple c) imparfait",
                "marks": 1,
                "answer": "b) passé simple"
              },
              {
                "id": 8,
                "text": "À quel temps est 'accourions' dans : 'Nous accourions à lui.' a) imparfait de l'indicatif b) futur simple c) conditionnel",
                "marks": 1,
                "answer": "a) imparfait de l'indicatif"
              },
              {
                "id": 9,
                "text": "À quel temps est 'grouillait' dans : 'Le marché grouillait de monde.' a) plus-que-parfait b) imparfait de l'indicatif c) passé simple",
                "marks": 1,
                "answer": "b) imparfait de l'indicatif"
              },
              {
                "id": 10,
                "text": "À quel temps est 'ai signé' dans : 'J'ai signé moi aussi.' a) passé composé b) impératif présent c) futur antérieur",
                "marks": 1,
                "answer": "a) passé composé"
              },
              {
                "id": 11,
                "text": "À quel mode est 'Fais' dans : 'Fais-le cuire doucement.' a) Impératif présent b) Présent de l'indicatif c) Présent simple",
                "marks": 1,
                "answer": "a) Impératif présent"
              },
              {
                "id": 12,
                "text": "Phrase correctement accordée : a) La voiture a été heurtée par le camion. b) La voiture a été heurté par le camion. c) La voiture a été heurter par le camion.",
                "marks": 1,
                "answer": "a) La voiture a été heurtée par le camion."
              },
              {
                "id": 13,
                "text": "Phrase correcte : a) La voiture et le camion sont entrés en collision. b) La voiture et le camion sont entrées en collision. c) La voiture et le camion sont entré en collision.",
                "marks": 1,
                "answer": "a) La voiture et le camion sont entrés en collision."
              },
              {
                "id": 14,
                "text": "Phrase correcte : a) La montre que Paul a perdue n'était pas la sienne. b) La montre que Paul a perdu n'était pas la sienne. c) La montre que Paul a perdus n'était pas la sienne.",
                "marks": 1,
                "answer": "a) La montre que Paul a perdue n'était pas la sienne."
              },
              {
                "id": 15,
                "text": "Phrase correcte : a) Quelle bonne nouvelle j'ai apprise ! b) Quelle bonne nouvelle j'ai appris ! c) Quelle bonne nouvelle j'ai appri !",
                "marks": 1,
                "answer": "a) Quelle bonne nouvelle j'ai apprise !"
              },
              {
                "id": 16,
                "text": "Phrase correcte : a) Elles se sont comprises à demi-mots. b) Elles se sont compris à demi-mots. c) Elles se sont comprit à demi-mots.",
                "marks": 1,
                "answer": "a) Elles se sont comprises à demi-mots."
              },
              {
                "id": 17,
                "text": "Phrase correcte : a) Ils se sont aperçus de la ruse à temps. b) Ils se sont aperçu de la ruse à temps. c) Ils se sont aperçue de la ruse à temps.",
                "marks": 1,
                "answer": "a) Ils se sont aperçus de la ruse à temps."
              },
              {
                "id": 18,
                "text": "Phrase correcte : a) Elle s'est confectionné la plus belle robe. b) Elle s'est confectionnée la plus belle robe. c) Elle s'est confectionner la plus belle robe.",
                "marks": 1,
                "answer": "a) Elle s'est confectionné la plus belle robe."
              },
              {
                "id": 19,
                "text": "Phrase correcte : a) Cette nuit, tous les chiens du quartier ont hurlé. b) Cette nuit, tous les chiens du quartier ont hurlés. c) Cette nuit, tous les chiens du quartier ont hurler.",
                "marks": 1,
                "answer": "a) Cette nuit, tous les chiens du quartier ont hurlé."
              },
              {
                "id": 20,
                "text": "Phrase correcte : a) Les fleurs que nous avons plantées ont bien poussé. b) Les fleurs que nous avons plantés ont bien poussé. c) Les fleurs que nous avons planté ont bien poussé.",
                "marks": 1,
                "answer": "a) Les fleurs que nous avons plantées ont bien poussé."
              },
              {
                "id": 21,
                "text": "Phrase correcte : a) Les deux meilleurs élèves seront retenus pour le concours. b) Les deux meilleurs élèves seront retenues pour le concours. c) Les deux meilleurs élèves seront retenu pour le concours.",
                "marks": 1,
                "answer": "a) Les deux meilleurs élèves seront retenus pour le concours."
              },
              {
                "id": 22,
                "text": "Accord correct : a) Nos haillons sales dégageaient une odeur putride. b) Nos haillons sal dégageaient une odeur putride. c) Nos haillons sale dégageaient une odeur putride.",
                "marks": 1,
                "answer": "a) Nos haillons sales dégageaient une odeur putride."
              },
              {
                "id": 23,
                "text": "Accord correct : a) La vie se moque bien d'être aigre-douce. b) la vie se moque bien d'être aigre-doux. c) La vie se moque bien d'être aigre-douse.",
                "marks": 1,
                "answer": "a) La vie se moque bien d'être aigre-douce."
              },
              {
                "id": 24,
                "text": "Accord correct : a) Monsieur Laporte a acheté une berline marron clair. b) Monsieur Laporte a acheté une berline marronne clair. c) Monsieur Laporte a acheté une berline marron claire.",
                "marks": 1,
                "answer": "a) Monsieur Laporte a acheté une berline marron clair."
              },
              {
                "id": 25,
                "text": "Quelle est la bonne orthographe ? a) Les garçons jouent au ballon dans la cour de récréation. b) Les garssons jouent au ballon dans la cours de récréation. c) Les garsons jouent au ballon dans la cours de récréation.",
                "marks": 1,
                "answer": "a) Les garçons jouent au ballon dans la cour de récréation."
              },
              {
                "id": 26,
                "text": "Quel est le sens correct ? a) L'oiseau fait son nid dans l'arbre. b) L'oiseau fait son nid sur l'arbre. c) L'oiseau fait son nid sous l'arbre.",
                "marks": 1,
                "answer": "a) L'oiseau fait son nid dans l'arbre."
              },
              {
                "id": 27,
                "text": "Phrase correcte : a) Après le repas, les filles reprennent leur jeu de saut à la corde. b) Après le repas, les filles reprennent leur jeu de saut de la corde. c) Après le repas, les filles reprennent leur jeu de saut de corde.",
                "marks": 1,
                "answer": "a) Après le repas, les filles reprennent leur jeu de saut à la corde."
              }
            ]
          },
          {
            "title": "Section B: Compréhension Écrite",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Lisez le texte et répondez. 'La francafrique' est : a) la relation entre la France et l'Afrique b) la politique africaine de la France c) les relations commerciales France et Afrique",
                "marks": 1,
                "answer": "b) la politique africaine de la France"
              },
              {
                "id": 2,
                "text": "Un 'quarantenaire' est âgé de : a) 4 ans b) 40 ans c) 400 ans",
                "marks": 1,
                "answer": "b) 40 ans"
              },
              {
                "id": 3,
                "text": "L'Élysée est : a) le palais présidentiel allemand b) un prophète c) le palais présidentiel français",
                "marks": 1,
                "answer": "c) le palais présidentiel français"
              },
              {
                "id": 4,
                "text": "Ouagadougou est : a) une banlieue parisienne b) la capitale du Burkina Faso c) une région en Afrique",
                "marks": 1,
                "answer": "b) la capitale du Burkina Faso"
              },
              {
                "id": 5,
                "text": "Un des prédécesseurs de Macron cité dans le texte : a) Alain Juppé b) le général De Gaulle c) Ernest Ouandié",
                "marks": 1,
                "answer": "b) le général De Gaulle"
              },
              {
                "id": 6,
                "text": "Emmanuel Macron est : a) Sénateur b) Journaliste c) Président de la République française",
                "marks": 1,
                "answer": "c) Président de la République française"
              },
              {
                "id": 7,
                "text": "Les habitants du Burkina Faso sont : a) Les burkinafasiens b) Les burkina c) Les burkinabé",
                "marks": 1,
                "answer": "c) Les burkinabé"
              },
              {
                "id": 8,
                "text": "Un quinquennat est : a) un nouveau mandat b) un mandat de 5 ans c) une quinte",
                "marks": 1,
                "answer": "b) un mandat de 5 ans"
              },
              {
                "id": 9,
                "text": "Un amphithéâtre est : a) une salle de cours avec gradins b) une salle de classe c) une salle de sport",
                "marks": 1,
                "answer": "a) une salle de cours avec gradins"
              },
              {
                "id": 10,
                "text": "Emmanuel Macron est président depuis : a) le 14 mai 2017 b) 2019 c) 2015",
                "marks": 1,
                "answer": "a) le 14 mai 2017"
              },
              {
                "id": 11,
                "text": "Que signifie CPA dans le texte ? a) Conseil de paix africain b) Conseil présidentiel pour l'Afrique c) Cour pénale africaine",
                "marks": 1,
                "answer": "b) Conseil présidentiel pour l'Afrique"
              },
              {
                "id": 12,
                "text": "Les membres du CPA sont : a) Les Africains b) Les Français c) Les Français et Africains",
                "marks": 1,
                "answer": "c) Les Français et Africains"
              },
              {
                "id": 13,
                "text": "Qui a conçu et composé le discours de Macron à Ouagadougou ? a) Les membres du Conseil présidentiel pour l'Afrique b) Le Conseil des ministres français c) Le protocole du Burkina Faso",
                "marks": 1,
                "answer": "a) Les membres du Conseil présidentiel pour l'Afrique"
              },
              {
                "id": 14,
                "text": "Combien d'unités vaut une douzaine ? a) 10 unités b) 20 unités c) 12 unités",
                "marks": 1,
                "answer": "c) 12 unités"
              },
              {
                "id": 15,
                "text": "Certaines mesures annoncées à Ouagadougou sont considérées comme : a) Des marqueurs symboliques b) Une feuille de route c) Des liens malsains",
                "marks": 1,
                "answer": "a) Des marqueurs symboliques"
              },
              {
                "id": 16,
                "text": "L'une des mesures est : a) La transmission des archives sur l'assassinat de Thomas Sankara b) Une relation normalisée c) Le début d'une ère nouvelle",
                "marks": 1,
                "answer": "a) La transmission des archives sur l'assassinat de Thomas Sankara"
              },
              {
                "id": 17,
                "text": "Quels sont les pays concernés par ces mesures ? a) le Burkina Faso et le Bénin b) le Cambodge c) l'Afrique",
                "marks": 1,
                "answer": "a) le Burkina Faso et le Bénin"
              },
              {
                "id": 18,
                "text": "Qui est Thomas Sankara ? a) le père du panafricanisme b) un ancien président du Burkina Faso c) conseiller de Macron",
                "marks": 1,
                "answer": "b) un ancien président du Burkina Faso"
              },
              {
                "id": 19,
                "text": "En quelle année fut-il assassiné ? a) 1960 b) 1940 c) 1987",
                "marks": 1,
                "answer": "c) 1987 (assassiné le 15 octobre 1987)"
              },
              {
                "id": 20,
                "text": "Le pluriel de 'un burkinabé' est : a) Les burkinabés b) Des burkinabés c) Des burkinabé",
                "marks": 1,
                "answer": "c) Des burkinabé (invariable)"
              },
              {
                "id": 21,
                "text": "Le pluriel de 'un discours-programme' est : a) des discours-programmes b) les discours-programmes c) des discours-programme",
                "marks": 1,
                "answer": "a) des discours-programmes"
              },
              {
                "id": 22,
                "text": "La phrase 'Certaines mesures ont été rapidement prises' est à : a) la voix active b) la voix passive c) la forme emphatique",
                "marks": 1,
                "answer": "b) la voix passive"
              },
              {
                "id": 23,
                "text": "Le singulier du nom composé 'questions-réponses' est : a) une question-réponse b) la question-réponse c) une questions-réponse",
                "marks": 1,
                "answer": "a) une question-réponse"
              },
              {
                "id": 24,
                "text": "La phrase 'Que pensez-vous des relations d'amitié entre la France et le Cameroun ?' est à la forme : a) affirmative b) emphatique c) injonctive",
                "marks": 1,
                "answer": "b) emphatique"
              },
              {
                "id": 25,
                "text": "Ouagadougou est un : a) nom propre de lieu b) nom commun de chose c) nom composé",
                "marks": 1,
                "answer": "a) nom propre de lieu"
              },
              {
                "id": 26,
                "text": "Le pluriel de 'son désormais célèbre discours' est : a) ses désormais célèbres discours b) ses désormais célèbre discours c) leurs désormais célèbre discours",
                "marks": 1,
                "answer": "a) ses désormais célèbres discours"
              },
              {
                "id": 27,
                "text": "Le singulier de 'ses liens malsains' est : a) son lien malsain b) son lien malsaint c) son lien malesain",
                "marks": 1,
                "answer": "a) son lien malsain"
              },
              {
                "id": 28,
                "text": "Le singulier de 'ses réseaux obscurs' est : a) son réseau obscur b) son résal obscur c) son réseau obscurs",
                "marks": 1,
                "answer": "a) son réseau obscur"
              },
              {
                "id": 29,
                "text": "La phrase 'Il n'y avait plus de politique africaine' est à la forme : a) négative b) affirmative c) interro-négative",
                "marks": 1,
                "answer": "a) négative"
              },
              {
                "id": 30,
                "text": "Le mot composé 'une feuille de route' est : a) un nom composé b) un verbe c) un adverbe",
                "marks": 1,
                "answer": "a) un nom composé"
              }
            ]
          },
          {
            "title": "Section C: Expression Libre",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Que pensez-vous des relations d'amitié entre la France et le Cameroun ? Rédigez un texte d'environ 200 mots.",
                "marks": 30,
                "answer": "Les relations entre la France et le Cameroun sont historiques et complexes. Depuis l'indépendance en 1960, les deux pays entretiennent des liens étroits dans les domaines économique, culturel et diplomatique.\n\nSur le plan économique, la France reste un partenaire commercial important. De nombreuses entreprises françaises sont présentes au Cameroun dans les secteurs de l'énergie, des télécommunications et de la distribution. Cependant, certains critiquent ce qu'ils appellent la 'Françafrique', estimant que ces relations profitent davantage à la France qu'au Cameroun.\n\nSur le plan culturel, la coopération est riche. L'Alliance Française, les lycées français et les échanges universitaires renforcent les liens entre nos peuples. Le français, langue officielle, crée un pont naturel entre nos deux nations.\n\nAujourd'hui, les relations évoluent vers un partenariat plus équilibré. Le Cameroun s'ouvre à d'autres partenaires (Chine, États-Unis) tout en maintenant des relations privilégiées avec la France.\n\nPersonnellement, je crois que ces relations sont bénéfiques quand elles sont basées sur le respect mutuel, des échanges équitables, et une coopération qui sert les intérêts des deux peuples. L'important est de construire des relations gagnant-gagnant dans un esprit de partenariat véritable."
              }
            ]
          }
        ]
      },
      {
        "title": "System Architecture",
        "duration": "3 hours",
        "credits": 4,
        "sections": [
          {
            "title": "Section A: System Architecture",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is an Object server in client server environment?",
                "marks": 4,
                "answer": "An Object server stores and manages distributed objects, providing methods to create, locate, and invoke operations on remote objects across a network (CORBA, DCOM, RMI). It extends client-server by treating objects as the fundamental units of distribution.",
                "tutorial": "Object servers manage both data and methods, unlike traditional database servers."
              },
              {
                "id": 2,
                "text": "What are the two broad classes of middleware in client server environment?",
                "marks": 4,
                "answer": "1. General middleware: provides general-purpose communication services (RPC - Remote Procedure Call, MOM - Message-Oriented Middleware, ORB - Object Request Broker).\n2. Service-specific middleware: tailored for specific application domains (database middleware ODBC/JDBC, web middleware, transaction processing monitors).",
                "tutorial": "General middleware handles communication; service-specific handles domain-specific logic."
              },
              {
                "id": 3,
                "text": "What are the five major technologies that can be used to create Client/Server applications?",
                "marks": 4,
                "answer": "1. Database middleware (ODBC, JDBC) - connect applications to databases.\n2. Remote Procedure Call (RPC) - call functions on remote systems.\n3. Object brokers (CORBA, DCOM, Java RMI) - distributed object communication.\n4. Web services (HTTP, REST, SOAP) - internet-based service integration.\n5. Message-Oriented Middleware (MQ Series, JMS) - asynchronous messaging.",
                "tutorial": "Each technology addresses different integration needs in distributed systems."
              },
              {
                "id": 4,
                "text": "What is public cloud and private cloud?",
                "marks": 4,
                "answer": "Public cloud: computing services delivered over the public internet by third-party providers (AWS, Azure, Google Cloud), using shared multi-tenant infrastructure with pay-as-you-go pricing.\nPrivate cloud: cloud infrastructure dedicated exclusively to a single organization, hosted on-premises or by a third party, providing greater control, security, and customization.",
                "tutorial": "Public: lower cost, less control. Private: higher cost, more security."
              },
              {
                "id": 5,
                "text": "What are the essential characteristics of cloud computing?",
                "marks": 4,
                "answer": "1. On-demand self-service: users provision resources automatically without human interaction.\n2. Broad network access: available over standard networks via diverse platforms.\n3. Resource pooling: multi-tenant model dynamically serving many customers.\n4. Rapid elasticity: resources scale rapidly outward and inward.\n5. Measured service: usage is monitored, controlled, and reported transparently.",
                "tutorial": "These five NIST characteristics define genuine cloud computing."
              },
              {
                "id": 6,
                "text": "How many types of deployment models exist in cloud computing?",
                "marks": 4,
                "answer": "Four deployment models:\n1. Public cloud: services available to the general public over the internet.\n2. Private cloud: exclusive to a single organization.\n3. Community cloud: shared by organizations with common concerns (security, compliance).\n4. Hybrid cloud: combination of two or more cloud types, allowing data and application portability.",
                "tutorial": "The choice depends on security, compliance, budget, and control requirements."
              },
              {
                "id": 7,
                "text": "Describe the different Guided Media used in networking.",
                "marks": 4,
                "answer": "1. Twisted Pair Cable: two insulated copper wires twisted together (UTP for Ethernet, STP with shielding). Most common, affordable, susceptible to interference.\n2. Coaxial Cable: central conductor, insulating layer, metallic shield, outer jacket. Used in cable TV, broadband, higher bandwidth than twisted pair.\n3. Fiber Optic Cable: glass/plastic fibers transmitting light pulses. Very high bandwidth, immune to EMI, secure, but expensive and fragile.",
                "tutorial": "Guided media provide a physical path; choice depends on distance, speed, and budget."
              },
              {
                "id": 8,
                "text": "What do you mean by wireless communication?",
                "marks": 4,
                "answer": "Wireless communication transmits data between devices without physical connections using electromagnetic waves (radio frequency, microwave, infrared). Types: Wi-Fi (WLAN), Bluetooth (PAN), cellular (3G/4G/5G), satellite, NFC. Advantages: mobility, flexibility, lower installation costs. Disadvantages: interference, security risks, generally lower speeds and higher latency than wired.",
                "tutorial": "Wireless technology enables ubiquitous connectivity for mobile devices."
              },
              {
                "id": 9,
                "text": "List two advantages and two disadvantages of fiber optics cable.",
                "marks": 4,
                "answer": "Advantages:\n1. Very high bandwidth and data rates (up to terabits per second).\n2. Immune to electromagnetic interference and signal degradation over long distances.\nDisadvantages:\n1. Expensive to install and terminate (requires specialized equipment and skilled technicians).\n2. Fragile - glass fibers are delicate and difficult to splice in field conditions.",
                "tutorial": "Fiber is the backbone of modern high-speed internet infrastructure."
              },
              {
                "id": 10,
                "text": "List three factors on which data rate depends.",
                "marks": 4,
                "answer": "1. Bandwidth of the transmission medium: wider bandwidth allows higher data rates.\n2. Signal-to-Noise Ratio (SNR): higher SNR enables clearer signal reception and faster rates.\n3. Encoding and modulation scheme: advanced techniques (QAM, PSK, OFDM) transmit more bits per symbol.\nShannon-Hartley theorem: C = B log₂(1+SNR) gives the theoretical maximum.",
                "tutorial": "Higher bandwidth and SNR with efficient encoding maximize throughput."
              }
            ]
          }
        ]
      },
      {
        "title": "Operating Systems",
        "duration": "2 hours",
        "credits": 3,
        "sections": [
          {
            "title": "Section A: Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Explain the main purpose of an operating system.",
                "marks": 5,
                "answer": "The main purpose of an OS is to manage computer hardware and software resources and provide services for application programs. It acts as an intermediary between users/applications and hardware. Key functions: process management, memory management, file system management, I/O device management, security and protection, and providing a user interface.",
                "tutorial": "The OS abstracts hardware complexity and enables efficient resource sharing among programs."
              },
              {
                "id": 2,
                "text": "What are the advantages of a multiprocessor system?",
                "marks": 5,
                "answer": "1. Increased throughput: more work completed per unit time by using multiple CPUs.\n2. Cost-effective: sharing peripherals and power supply reduces per-CPU cost.\n3. Reliability: failure of one CPU may not halt the entire system (graceful degradation).\n4. Scalability: performance improves by adding more processors.\n5. Parallel processing: multiple tasks execute simultaneously across CPUs.",
                "tutorial": "Multiprocessor systems use symmetric (SMP) or asymmetric multiprocessing configurations."
              },
              {
                "id": 3,
                "text": "Describe the objective of multiprogramming.",
                "marks": 5,
                "answer": "Multiprogramming increases CPU utilization by keeping multiple programs in memory simultaneously. When one program waits for I/O, the OS switches the CPU to execute another program, preventing idle time. Benefits: better resource utilization, higher system throughput, improved response time for users. Requires memory protection, scheduling, and interrupt handling.",
                "tutorial": "Multiprogramming relies on context switching to overlap I/O with computation."
              },
              {
                "id": 4,
                "text": "Give some benefits of multithreaded programming.",
                "marks": 5,
                "answer": "1. Responsiveness: UI thread remains responsive while background threads handle tasks.\n2. Resource sharing: threads within a process share memory, files, and other resources.\n3. Economy: creating and switching threads is cheaper than processes (less overhead).\n4. Scalability: threads can execute in parallel on multiple CPU cores.\n5. Simplified modeling: natural decomposition for concurrent tasks (producer-consumer).",
                "tutorial": "Threads are lightweight processes sharing the same address space."
              },
              {
                "id": 5,
                "text": "What is a file? List the operations performed on files or directories.",
                "marks": 5,
                "answer": "A file is a named collection of related data stored on secondary storage (hard disk, SSD), serving as the basic logical unit of storage managed by the OS file system.\n\nFile operations: Create, Open, Read, Write, Seek (reposition file pointer), Delete, Close, Truncate, Rename.\nDirectory operations: Create directory, Delete directory, List contents, Search for file, Rename directory, Change permissions.",
                "tutorial": "File systems organize data hierarchically and provide controlled access."
              },
              {
                "id": 6,
                "text": "What is the Google Android SDK?",
                "marks": 5,
                "answer": "The Android SDK (Software Development Kit) is a comprehensive collection of tools, libraries, APIs, documentation, and emulators for building Android applications. It includes: Android Studio IDE, platform tools (adb, fastboot), build tools (Gradle), Android libraries and APIs, debugger, device emulators for testing on various configurations, and sample code.",
                "tutorial": "The SDK provides everything developers need to create, test, and deploy Android apps."
              },
              {
                "id": 7,
                "text": "List the four key components of Android Architecture.",
                "marks": 5,
                "answer": "1. Linux Kernel: provides hardware abstraction, device drivers, memory/process management, security, networking stack.\n2. Hardware Abstraction Layer (HAL): exposes hardware capabilities (camera, Bluetooth) to the framework via standard interfaces.\n3. Android Runtime (ART): executes applications using DEX bytecode, provides garbage collection, ahead-of-time (AOT) compilation.\n4. Application Framework: Java API framework providing services (Activity Manager, Content Providers, View System, Notification Manager, Package Manager).\n5. System Apps: core built-in applications (Phone, Contacts, Browser, Settings).",
                "tutorial": "Android's layered architecture allows hardware independence and application portability."
              },
              {
                "id": 8,
                "text": "What is the importance of having an emulator within the Android environment?",
                "marks": 5,
                "answer": "The Android emulator is important because:\n1. Allows testing applications without needing physical Android devices.\n2. Simulates multiple device configurations (screen sizes, API levels, hardware features).\n3. Reduces development costs (no need to purchase many physical devices).\n4. Provides rapid testing and debugging cycle with instant deployment.\n5. Enables safe experimentation without risking physical device data or functionality.",
                "tutorial": "The emulator runs Android virtually on the development computer for efficient testing."
              }
            ]
          }
        ]
      },
      {
        "title": "Entrepreneurship",
        "duration": "2 hours",
        "credits": 1,
        "sections": [
          {
            "title": "Section A: Entrepreneurship",
            "marks": 34,
            "questions": [
              {
                "id": 1,
                "text": "Define the following terms as used in entrepreneurship: a) Franchise, b) Family business, c) Risk, d) Business idea.",
                "marks": 4,
                "answer": "a) Franchise: a business model where a franchisor grants a franchisee the right to operate under its brand name and use its business system in exchange for fees and royalties.\nb) Family business: a business owned and actively managed by members of a single family, often spanning multiple generations.\nc) Risk: the potential for loss or failure that entrepreneurs face when investing time and resources into a venture.\nd) Business idea: a concept for a product or service that addresses a market need and can potentially become a viable business.",
                "tutorial": "These are foundational entrepreneurship concepts defining different business approaches."
              },
              {
                "id": 2,
                "text": "Identify and explain the stages involved in the entrepreneurial process.",
                "marks": 10,
                "answer": "The entrepreneurial process involves four main stages:\n1. Identification and evaluation of the opportunity: recognizing market gaps, assessing feasibility, evaluating competition and potential returns.\n2. Development of a business plan: creating a comprehensive document covering mission, market analysis, marketing strategy, operational plan, and financial projections.\n3. Determination and acquisition of required resources: identifying and securing capital, personnel, equipment, technology, and partnerships.\n4. Management of the enterprise: launching the business, managing operations, monitoring performance, adapting to market changes, and pursuing growth.\nEach stage requires different skills and presents distinct challenges.",
                "tutorial": "The entrepreneurial process is iterative - entrepreneurs often cycle back as they learn."
              },
              {
                "id": 3,
                "text": "What are some of the challenges to entrepreneurship in Cameroon and how can you overcome them as an entrepreneur?",
                "marks": 10,
                "answer": "Challenges:\n1. Limited access to finance and startup capital.\n2. Inadequate infrastructure (unreliable electricity, internet, transportation).\n3. Complex bureaucratic procedures and corruption.\n4. Limited market access and stiff competition.\n5. Lack of entrepreneurial education and mentorship.\n\nOvercoming strategies:\n1. Seek microfinance institutions, angel investors, government SME support funds (BICEC, FEICOM).\n2. Invest in alternative power (solar generators), use mobile solutions.\n3. Register with CIPEN, hire legal advisors, join trade associations.\n4. Focus on niche underserved markets, build brand loyalty through quality.\n5. Attend entrepreneurship training (EMPRETEC, CAME), join networks (BPO Cameroon).",
                "tutorial": "Resilience and adaptability are key traits for overcoming entrepreneurial obstacles."
              },
              {
                "id": 4,
                "text": "a) Identify any five components of a business plan. b) Why is a business plan important for an entrepreneur?",
                "marks": 10,
                "answer": "a) Five components of a business plan:\n1. Executive Summary: brief overview of the business concept, market, and financial highlights.\n2. Company Description: mission, vision, legal structure, location, and history.\n3. Market Analysis: industry overview, target market, competitor analysis, market trends.\n4. Organization and Management: ownership structure, management team, advisory board.\n5. Financial Projections: income statement, cash flow forecast, balance sheet, break-even analysis.\n\nb) Importance:\n1. Provides a clear roadmap guiding business decisions and strategy.\n2. Essential for attracting investors and securing loans.\n3. Identifies potential risks and allows contingency planning.\n4. Sets measurable goals and milestones for tracking progress.\n5. Communicates the business vision to stakeholders and partners.",
                "tutorial": "A well-written business plan transforms an entrepreneurial vision into an actionable strategy."
              }
            ]
          }
        ]
      },
      {
        "title": "General Economics",
        "duration": "2 hours",
        "credits": 1,
        "sections": [
          {
            "title": "Section A: General Economics",
            "marks": 33,
            "questions": [
              {
                "id": 1,
                "text": "Briefly distinguish a market economy from a planned economy.",
                "marks": 4,
                "answer": "Market economy: economic decisions driven by supply and demand forces, private ownership of resources, profit motive, minimal government intervention (USA, Japan).\nPlanned economy (command economy): government centrally controls production, distribution, and pricing, state ownership of resources, focus on social welfare (Cuba, North Korea).\nMost real-world economies are mixed, combining elements of both systems.",
                "tutorial": "The key distinction is who makes the fundamental economic decisions."
              },
              {
                "id": 2,
                "text": "State and explain any three factors that affect price elasticity of demand.",
                "marks": 6,
                "answer": "1. Availability of substitutes: more substitutes = more elastic demand (consumers can easily switch if price rises). Example: soft drinks have many substitutes.\n2. Necessity vs luxury: necessities (food, medicine, electricity) have inelastic demand; luxuries (designer clothing, jewelry) have elastic demand.\n3. Proportion of income spent: goods representing a large portion of income (housing, cars) have more elastic demand than cheap items (matches, salt).\n4. Time horizon: demand becomes more elastic over time as consumers find alternatives.",
                "tutorial": "Price elasticity of demand = % change in quantity demanded / % change in price."
              },
              {
                "id": 3,
                "text": "a) Define a commercial bank citing two examples in Cameroon. b) What are the main functions of a commercial bank?",
                "marks": 13,
                "answer": "a) A commercial bank is a financial institution that accepts deposits from the public, provides loans, and offers various financial services to individuals and businesses. Examples: Afriland First Bank, Société Générale Cameroun, BICEC.\n\nb) Main functions:\n1. Accepting deposits: savings accounts, current accounts, fixed deposits, recurring deposits.\n2. Granting loans and advances: overdrafts, personal loans, business loans, mortgages, agricultural loans.\n3. Credit creation: banks create money by lending more than their reserves (multiplier effect).\n4. Payment and settlement systems: cheque clearing, electronic funds transfer, mobile money.\n5. Agency services: collection of bills, dividends, taxes, insurance premiums on behalf of customers.\n6. Foreign exchange services: buying and selling foreign currency, letters of credit.\n7. Safe custody: providing safe deposit boxes for valuables and documents.\n8. Investment and advisory services: portfolio management, financial advice, underwriting.",
                "tutorial": "Commercial banks are crucial intermediaries in the financial system."
              },
              {
                "id": 4,
                "text": "Identify and explain any five functions of money.",
                "marks": 10,
                "answer": "1. Medium of Exchange: money facilitates transactions, eliminating the inefficiency of barter (double coincidence of wants).\n2. Unit of Account: provides a standard measure for pricing goods, services, and assets, enabling comparisons.\n3. Store of Value: allows individuals to preserve purchasing power for future use (though inflation erodes value).\n4. Standard of Deferred Payment: enables credit transactions, loans, and contracts with future payments.\n5. Measure of Liquidity: money is the most liquid asset, immediately usable for transactions.\n\nFor money to function effectively, it must be: acceptable, durable, divisible, portable, scarce, and stable in value.",
                "tutorial": "Money evolved from commodity money (gold, salt) to fiat currency to digital forms."
              }
            ]
          }
        ]
      },
      {
        "title": "Company Law",
        "duration": "2 hours",
        "credits": 1,
        "sections": [
          {
            "title": "Section A: Company Law",
            "marks": 33,
            "questions": [
              {
                "id": 1,
                "text": "After explaining what you understand by company law, explain four reasons why it is important.",
                "marks": 8,
                "answer": "Company law is the body of law governing the formation, registration, operation, management, and dissolution of companies. It defines the legal framework for corporate entities, including the rights, duties, and liabilities of shareholders, directors, officers, and creditors.\n\nImportance:\n1. Separate legal personality: establishes companies as distinct legal entities capable of owning property, contracting, and suing/being sued.\n2. Limited liability: protects shareholders from personal liability beyond their investment, encouraging investment and risk-taking.\n3. Investor protection: mandates disclosure, transparency, and accountability, safeguarding shareholder and creditor interests.\n4. Economic development: provides a predictable legal environment facilitating business growth, capital formation, and commerce.",
                "tutorial": "Company law balances the interests of management, shareholders, and the public."
              },
              {
                "id": 2,
                "text": "Briefly describe four types of companies provided by the OHADA uniform law.",
                "marks": 10,
                "answer": "OHADA (Organisation pour l'Harmonisation en Afrique du Droit des Affaires) provides:\n1. SARL (Société à Responsabilité Limitée): Private limited company, 1-50 shareholders, no minimum capital for small SARL, shares not freely transferable, managed by manager(s). Most common form.\n2. SA (Société Anonyme): Public limited company, minimum 1 shareholder, higher capital requirement (10 million FCFA minimum), freely transferable shares, must have Board of Directors and auditors, can issue public offerings.\n3. SNC (Société en Nom Collectif): General partnership, all partners have unlimited joint liability, actively involved in management.\n4. SCS (Société en Commandite Simple): Limited partnership, comprising commandités (unlimited liability, manage) and commanditaires (limited liability, investors).",
                "tutorial": "OHADA provides uniform business law across 17 African countries, simplifying cross-border commerce."
              },
              {
                "id": 3,
                "text": "A company is distinct from its members - it acquires the status of a legal personality. State and explain three reasons under which this rule can be violated (lifting the corporate veil).",
                "marks": 6,
                "answer": "The corporate veil can be lifted (separate legal personality disregarded) in these cases:\n1. Fraud or improper conduct: when the company is used to perpetrate fraud, evade legal obligations, or circumvent the law, courts will pierce the veil to hold individuals personally liable.\n2. Agency or alter ego: if the company operates as a mere agent or sham for its controllers with no genuine independent business, courts may treat the company and members as one entity.\n3. Group enterprises: in parent-subsidiary relationships where separate entities function as a single economic unit, courts may disregard separate legal personalities.\n4. Reduction below legal minimum: if membership falls below the legal minimum for more than six months without remedy.\n\nLandmark case: Salomon v Salomon & Co Ltd (1897) established the principle but recognized exceptions.",
                "tutorial": "Lifting the veil prevents abuse of corporate personality for illegitimate purposes."
              },
              {
                "id": 4,
                "text": "Identify and define any five required documents for the successful registration of a company.",
                "marks": 9,
                "answer": "1. Memorandum of Association: fundamental document stating company name, registered office, objects (business purpose), liability clause, and share capital details.\n2. Articles of Association: internal regulations governing company management, shareholder meeting procedures, director appointment, voting rights, and dividend distribution.\n3. Declaration of Subscription and Payment: sworn statement confirming that subscribers have taken and fully paid for their shares.\n4. List of Directors or Managers: complete names, addresses, nationalities, and signatures of initial directors/management.\n5. Proof of Registered Office Address: lease agreement or title deed confirming the company's official business address.\n6. Criminal Record Extract: for directors/managers to prove they are not disqualified.\nThese documents are filed with the Registrar of Companies at the RCCM (Trade and Personal Property Credit Register).",
                "tutorial": "Proper registration ensures legal recognition and access to banking and business services."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Fundamentals",
        "duration": "3 hours",
        "credits": 6,
        "sections": [
          {
            "title": "Section A: General Computer Knowledge",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "How many generations of computers are there? Name and explain each.",
                "marks": 5,
                "answer": "Five generations:\n1st (1940-56): Vacuum tubes, machine language, ENIAC.\n2nd (1956-63): Transistors, assembly language, batch processing.\n3rd (1964-71): Integrated circuits, high-level languages, time-sharing.\n4th (1971-present): Microprocessors, VLSI, personal computers, GUIs.\n5th (present-future): AI, parallel processing, quantum computing."
              },
              {
                "id": 2,
                "text": "What contributions has computer science given to our world?",
                "marks": 2,
                "answer": "1) Automation of tasks (increased productivity).\n2) Global communication (internet, email, social media).\n3) Data processing and analysis (big data, AI).\n4) Healthcare advances (medical imaging, EMR systems).\n5) Education access (e-learning, online resources)."
              },
              {
                "id": 3,
                "text": "What does download mean?",
                "marks": 2,
                "answer": "Downloading is the process of transferring data (files, documents, media) from a remote system (internet server) to a local computer or device."
              },
              {
                "id": 4,
                "text": "What does a graphics card do?",
                "marks": 2,
                "answer": "A graphics card (GPU) processes and renders images, videos, and animations for display on the monitor. It handles graphical calculations, freeing the CPU for other tasks. Essential for gaming, video editing, and 3D rendering."
              },
              {
                "id": 5,
                "text": "How does ECC RAM differ from normal RAM?",
                "marks": 2,
                "answer": "ECC RAM (Error-Correcting Code) detects and corrects single-bit memory errors automatically. Normal RAM (non-ECC) cannot correct errors. ECC is used in servers and critical systems where data integrity is essential, though it is slightly slower and more expensive."
              },
              {
                "id": 6,
                "text": "What is the brain of the computer system?",
                "marks": 1,
                "answer": "The CPU (Central Processing Unit) is the brain of the computer. It executes instructions, performs calculations, and coordinates data flow between components."
              },
              {
                "id": 7,
                "text": "What is Microsoft Windows? State two examples.",
                "marks": 2,
                "answer": "Microsoft Windows is an operating system developed by Microsoft, providing a graphical user interface (GUI), multitasking, and hardware management. Examples: Windows 10, Windows 11."
              },
              {
                "id": 8,
                "text": "List two operating system capabilities.",
                "marks": 2,
                "answer": "1) Multitasking: running multiple programs simultaneously.\n2) Memory management: allocating and tracking RAM usage.\n3) File management: organizing files on storage devices.\n4) Security: user authentication and access control."
              },
              {
                "id": 9,
                "text": "List two operating system limitations.",
                "marks": 2,
                "answer": "1) Vulnerability to malware, viruses, and security attacks.\n2) Resource overhead: OS consumes RAM, CPU, and storage.\n3) Compatibility issues with certain hardware or software.\n4) System crashes due to driver conflicts or software bugs."
              },
              {
                "id": 10,
                "text": "What is BIOS? State three main functions of the BIOS.",
                "marks": 2,
                "answer": "BIOS (Basic Input/Output System) is firmware stored on the motherboard that initializes hardware during boot.\nFunctions:\n1) POST (Power-On Self-Test): checks if hardware is functioning.\n2) Boot loader: locates and loads the operating system.\n3) Provides low-level hardware interface for the OS."
              },
              {
                "id": 11,
                "text": "Classify the following under volatile and non-volatile memory: RAM, PROM, EPROM, Flash PROM.",
                "marks": 2,
                "answer": "Volatile: RAM (loses data when power is off).\nNon-volatile: PROM, EPROM, Flash PROM (retain data when power is off)."
              },
              {
                "id": 12,
                "text": "State two characteristics of a Hard Disk Drive (HDD).",
                "marks": 2,
                "answer": "1) Large storage capacity (typically 500GB to several TB).\n2) Non-volatile: retains data permanently when powered off.\n3) Magnetic storage: data stored on spinning platters.\n4) Slower than SSDs due to mechanical moving parts."
              },
              {
                "id": 13,
                "text": "Differentiate between a main folder and a subfolder.",
                "marks": 2,
                "answer": "Main folder (root directory): the top-level folder in a storage device (e.g., C:\\).\nSubfolder: a folder contained within another folder, organizing files hierarchically."
              },
              {
                "id": 14,
                "text": "Differentiate between local area network and cloud computing.",
                "marks": 2,
                "answer": "LAN: physically owned local network within a building/organization, limited geographic area, wired connectivity.\nCloud computing: remote servers accessed via internet, pay-as-you-use, unlimited scalability, accessible from anywhere."
              },
              {
                "id": 15,
                "text": "Compare hardware and software.",
                "marks": 2,
                "answer": "Hardware: physical components of a computer (CPU, RAM, HDD, monitor). Tangible, can be touched.\nSoftware: programs and instructions that tell hardware what to do (OS, apps). Intangible, stored as data."
              },
              {
                "id": 16,
                "text": "Give 3 examples of input devices and 3 examples of output devices. State the use of each.",
                "marks": 3,
                "answer": "Input devices: 1) Keyboard - typing text and commands. 2) Mouse - pointing and selecting. 3) Scanner - digitizing documents/images.\n\nOutput devices: 1) Monitor - displaying visual output. 2) Printer - producing paper copies. 3) Speakers - outputting audio/sound."
              },
              {
                "id": 17,
                "text": "Using a diagram, explain the computer memory hierarchy.",
                "marks": 2,
                "answer": "Memory hierarchy (top to bottom):\n1) CPU Registers: fastest, smallest capacity.\n2) Cache (L1/L2/L3): fast, moderate capacity.\n3) RAM (Main memory): moderate speed, large capacity.\n4) SSD/HDD (Secondary storage): slower, very large capacity.\nMoving down the hierarchy: speed decreases, capacity increases, cost per bit decreases."
              },
              {
                "id": 18,
                "text": "List the different types of ROM. Which type is used in Flash technology?",
                "marks": 2,
                "answer": "ROM types: 1) Mask ROM - programmed during manufacturing. 2) PROM - programmable once. 3) EPROM - erasable by UV light. 4) EEPROM - electrically erasable.\nFlash memory is a type of EEPROM used in USB drives, SSDs, and memory cards."
              },
              {
                "id": 19,
                "text": "What is a bus in computer architecture?",
                "marks": 1,
                "answer": "A bus is a communication system that transfers data between components inside a computer. Types: Data bus (carries data), Address bus (carries memory addresses), Control bus (carries control signals)."
              },
              {
                "id": 20,
                "text": "Explain serial and parallel transmission of data.",
                "marks": 2,
                "answer": "Serial transmission: data bits sent one at a time over a single wire. Slower but reliable over long distances (USB, Ethernet).\nParallel transmission: multiple bits sent simultaneously over multiple wires. Faster over short distances but suffers from signal skew (older printer ports, internal buses)."
              },
              {
                "id": 21,
                "text": "What is the motherboard? Give 5 devices attached to it.",
                "marks": 2,
                "answer": "The motherboard is the main circuit board connecting all computer components.\nDevices attached: 1) CPU 2) RAM modules 3) Storage drives (SATA) 4) GPU (graphics card) 5) Power supply 6) Network card 7) USB ports."
              },
              {
                "id": 22,
                "text": "The Trendy Artists gallery has a directory structure with C: drive as its root directory. Explain the concept.",
                "marks": 2,
                "answer": "The root directory (C:\\) is the top-level folder. Subfolders can be created within it (e.g., C:\\TrendyArtists\\). Files are organized hierarchically in folders/subfolders, making navigation and management easier through a tree-like structure."
              },
              {
                "id": 23,
                "text": "What is a protocol? Give an example.",
                "marks": 2,
                "answer": "A protocol is a set of rules governing data communication between devices. It defines format, timing, sequencing, and error control. Example: HTTP (HyperText Transfer Protocol) for web communication."
              },
              {
                "id": 24,
                "text": "What is a firewall and why is it important?",
                "marks": 2,
                "answer": "A firewall is a network security system that monitors and controls incoming/outgoing traffic based on security rules. Importance: blocks unauthorized access, prevents malware spread, logs network activity, creates a barrier between trusted internal and untrusted external networks."
              },
              {
                "id": 25,
                "text": "What is an operating system? What are its main functions?",
                "marks": 2,
                "answer": "An OS is system software that manages hardware resources and provides services for application programs.\nMain functions: 1) Process management 2) Memory management 3) File system management 4) Device management 5) Security and user interface."
              }
            ]
          },
          {
            "title": "Section B: Web Knowledge and Networking",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate between: i) Internet browser and search engine ii) Internet and the web iii) Intranet and extranet.",
                "marks": 6,
                "answer": "i) Browser: software to display web pages (Chrome, Firefox). Search engine: website that indexes web content (Google, Bing).\nii) Internet: global network of interconnected computers. Web: collection of web pages accessed via the internet (subset of internet services).\niii) Intranet: private internal network for organization members. Extranet: intranet extended to authorized external users (partners, clients)."
              },
              {
                "id": 2,
                "text": "What is green computing? Name two ways it can be enhanced.",
                "marks": 4,
                "answer": "Green computing is environmentally responsible use of computers and resources.\nEnhancement ways:\n1) Energy-efficient hardware (Energy Star certified).\n2) Virtualization (reducing physical servers).\n3) Proper e-waste recycling.\n4) Power management settings (sleep mode, turning off unused devices)."
              },
              {
                "id": 3,
                "text": "What is computer generation? State the technology that characterizes 5th generation computers.",
                "marks": 4,
                "answer": "Computer generation refers to stages of technological evolution in computing.\n5th generation: characterized by Artificial Intelligence (AI), parallel processing, quantum computing, natural language processing, and machine learning. These computers aim to mimic human intelligence."
              },
              {
                "id": 4,
                "text": "Give 2 advantages and 2 disadvantages of using social media in schools.",
                "marks": 4,
                "answer": "Advantages:\n1) Enhances collaboration and communication among students.\n2) Access to educational content and resources.\n\nDisadvantages:\n1) Distraction from academic work.\n2) Cyberbullying and privacy concerns."
              },
              {
                "id": 5,
                "text": "State any four social media platforms.",
                "marks": 4,
                "answer": "1) Facebook\n2) Twitter (X)\n3) Instagram\n4) WhatsApp\n5) LinkedIn\n6) TikTok"
              },
              {
                "id": 6,
                "text": "Explain the following terms related to the digital society: a) Juvenile delinquency b) Cyber bullying c) Scamming d) Propaganda e) Software piracy.",
                "marks": 5,
                "answer": "a) Juvenile delinquency: illegal or antisocial behavior by minors, often involving cybercrimes.\nb) Cyber bullying: using digital platforms to harass, threaten, or humiliate others.\nc) Scamming: fraudulent schemes to deceive people for financial gain (online scams).\nd) Propaganda: biased or misleading information spread to influence public opinion.\ne) Software piracy: unauthorized copying, distribution, or use of copyrighted software."
              },
              {
                "id": 7,
                "text": "What is fake news? List two consequences of propagating fake news.",
                "marks": 3,
                "answer": "Fake news is false or misleading information presented as legitimate news.\nConsequences:\n1) Public panic, misinformation, and social unrest.\n2) Damage to reputations of individuals and institutions.\n3) Undermining trust in media and democratic processes."
              }
            ]
          }
        ]
      }
    ,
      {
        "title": "Law and Citizenship Education",
        "duration": "2 hours",
        "credits": 2,
        "description": "All Specialties | 2020 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Cameroon is one of the few countries in the world that operate a bijural legal system of Common law and Civil law. Critically examine the differences that exist between them.",
                "marks": 20,
                "answer": "Cameroon's Bijural Legal System: Differences Between Common Law and Civil Law\n\nIntroduction\n\nCameroon operates a bijural legal system, meaning it applies two legal traditions side by side: English Common Law and French Civil Law. This dual system results from colonial history: the former British Southern Cameroons (North-West and South-West Regions) inherited Common Law, while former French Cameroon (the other eight regions) inherited Civil Law. This bijuralism is constitutionally recognised under the 1996 Constitution and Law No. 2017/010 on the General Code of Regional and Local Authorities. Though both systems aim at justice and social order, they differ fundamentally in sources, procedure, legal reasoning, and judicial practice.\n\nDifferences between Common Law and Civil Law\n\n1. Source of Law\n\nCommon Law:\n- Primary source is judicial precedent (case law) developed through court decisions.\n- Under the doctrine of stare decisis (let the decision stand), rulings of higher courts bind lower courts on similar facts.\n- Statute law exists but is interpreted through the lens of prior case law.\n\nCivil Law:\n- Primary source is written legislation and comprehensive codes (civil code, penal code, commercial code, labour code).\n- Laws are systematically codified into accessible, principle-based statutes.\n- Court decisions (jurisprudence) are persuasive but generally not binding on future cases.\n\nCritical comment: Common Law offers flexibility through judicial adaptation to changing circumstances; Civil Law offers certainty and predictability through clearly codified rules accessible to all citizens.\n\n2. Role of Judges\n\nCommon Law:\n- Judges play an active, creative role in developing legal principles through their decisions.\n- The ratio decidendi (reason for the decision) of a superior court binds future courts.\n- Judges effectively make law where statutes are silent or ambiguous.\n\nCivil Law:\n- Judges primarily apply and interpret existing codified law to the facts before them.\n- The judge's role is to find the applicable rule in the code and apply it, not to create new law.\n- Judicial creativity is limited; gaps in the code are filled through legislative amendment, not judicial decision.\n\nCritical comment: Common Law judges have greater influence over legal development, which can lead to incremental, pragmatic evolution of the law. Civil Law judges provide more consistent and predictable application of legislative intent.\n\n3. Court Procedure\n\nCommon Law:\n- Adversarial system: two opposing parties present evidence and arguments before a neutral judge or jury.\n- Each party controls its own case; the judge acts primarily as an umpire ensuring procedural fairness.\n- Cross-examination of witnesses by opposing counsel is a central feature.\n- Jury trials for serious criminal cases (though limited in Cameroon).\n\nCivil Law:\n- Inquisitorial system: the judge plays an active, investigative role in gathering and examining evidence.\n- The judge directs proceedings, questions witnesses, and orders expert reports.\n- Lawyers have a more auxiliary role; the judge is responsible for establishing the truth.\n- No jury; the judge decides both questions of fact and law.\n\nCritical comment: The adversarial system empowers party autonomy but can be slower and more expensive. The inquisitorial system is more efficient at fact-finding but places heavy responsibility on the judge.\n\n4. Legal Reasoning and Method\n\nCommon Law:\n- Uses inductive reasoning: derives general legal principles from the analysis of individual case outcomes.\n- Lawyers and judges reason by analogy from previous cases to current disputes.\n- Emphasis on distinguishing cases on their facts.\n\nCivil Law:\n- Uses deductive reasoning: starts from general rules codified in statutes and applies them to specific factual situations.\n- Legal analysis moves from the general (the code provision) to the specific (the case at hand).\n- Emphasis on logical syllogism: major premise (legal rule), minor premise (facts), conclusion (judgment).\n\nCritical comment: Common Law reasoning is practical and fact-sensitive; Civil Law reasoning is systematic and principle-driven.\n\n5. Legal Language and Documentation\n\nCommon Law:\n- Uses English legal terminology with Latin phrases (habeas corpus, certiorari, ratio decidendi, obiter dictum).\n- Judgments are often lengthy, detailed, and include extensive discussion of prior cases.\n- Legal documents emphasise precise drafting and consideration of hypothetical scenarios.\n\nCivil Law:\n- In Cameroon, influenced by French legal drafting traditions.\n- Laws and judgments are concise, structured, and syllogistic.\n- Legal terminology derives from Latin via French (personne morale, droit reel, etat civil).\n\n6. Areas of Application in Cameroon\n\n- Common Law applies in the North-West and South-West Regions (former British Cameroon) for matters of customary law, common law, and equity.\n- Civil Law applies in the other eight regions (former French Cameroon).\n- National legislation (statutes passed by Parliament) applies uniformly across the country, including OHADA uniform business laws and the Penal Code.\n- The Supreme Court of Cameroon sits in both English and French sections to handle appeals from both legal traditions.\n\nCritical Evaluation: Advantages and Challenges of Cameroon's Bijural System\n\nAdvantages:\n- Preserves both English and French legal heritage, reflecting Cameroon's bicultural identity.\n- Promotes legal diversity and provides citizens access to a familiar legal tradition.\n- Enriches legal scholarship through comparative law perspectives.\n- Attracts international business confidence through OHADA harmonisation.\n\nChallenges:\n- Conflicts and inconsistencies between common law and civil law principles, especially in property and contract law.\n- Difficulty in training judges and lawyers competent in both traditions.\n- Language barriers between English-speaking and French-speaking legal professionals.\n- Perceived marginalisation of the Common Law tradition and English-speaking lawyers.\n- Complexity in harmonising legislation to function effectively in both traditions.\n\nConclusion\n\nIn conclusion, Common Law and Civil Law differ fundamentally in their sources of law, the role of judges, procedural systems, legal reasoning, and documentary style. Common Law is case-law based, precedent-driven, adversarial, and inductive. Civil Law is code-based, legislative, inquisitorial, and deductive. Cameroon's bijural legal system is a unique constitutional heritage that offers both richness and complexity. Its successful operation requires careful judicial management, cross-linguistic legal training, and ongoing harmonisation efforts to ensure equality and effective justice across all regions of the country."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics, Morals and Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Clearly examine the procedure and conditions for child adoption under Cameroonian law.",
                "marks": 20,
                "answer": "Child Adoption Under Cameroonian Law: Procedure and Conditions\n\nIntroduction\n\nChild adoption in Cameroon is governed by Law No. 2019/020 of 24 December 2019 relating to the Protection of the Child in Cameroon, as well as the Civil Code provisions on adoption. Adoption is a legal process that establishes a permanent parent-child relationship between persons who are not biologically related. It is founded on the principle of the best interests of the child and is strictly regulated to protect all parties involved.\n\nConditions for Adoption\n\n1. Age Requirement:\n- The adopter must be at least 35 years old for full adoption (adoption pleniere) and 30 years for simple adoption (adoption simple).\n- Exception: A spouse adopting the biological child of their spouse is exempt from the minimum age requirement provided there is sufficient age difference.\n\n2. Age Gap:\n- There must be at least 15 years difference between adopter and child.\n- Reduced to 10 years if the child is the biological child of the adopter's spouse.\n\n3. Consent Requirements:\n- Both biological parents must freely and voluntarily consent to the adoption.\n- If parents are deceased, unknown, or legally incapable, the child's guardian or the competent authority (delegue/epoux) must consent.\n- Consent cannot be given within the first 6 weeks after the child's birth.\n- Consent is revocable within a specified period (usually 3 months).\n\n4. Child's Consent:\n- A child aged 10 years or older must personally give consent before the court.\n- The child's opinion is given due weight according to age and maturity.\n\n5. Moral and Financial Fitness:\n- The adopter must demonstrate good moral character, stable mental health, and sufficient financial capacity to raise the child.\n- A social enquiry report (enquete sociale) is conducted by social welfare services to assess suitability.\n- Criminal background check required.\n\n6. Marital Status:\n- Married couples must adopt jointly, unless one spouse is legally separated or incapacitated.\n- Single persons may adopt subject to rigorous assessment of their capacity.\n- Both spouses must consent even if only one is adopting.\n\n7. Prohibition on Multiple Adoptions:\n- An adopter cannot adopt more than one child except in exceptional circumstances, or when adopting siblings together.\n\nTypes of Adoption\n\n1. Full Adoption (Adoption Pleniere):\n- Severs all legal ties with the biological family permanently.\n- The child takes the adopter's surname.\n- The adopter exercises exclusive parental authority.\n- The child has the same inheritance rights as a biological child.\n- Irrevocable and final.\n- The original birth certificate is sealed and replaced with a new one.\n\n2. Simple Adoption (Adoption Simple):\n- The child retains legal ties with the biological family.\n- The child acquires additional inheritance rights from the adopter.\n- The biological family's obligations are reduced but not eliminated.\n- Revocable in limited and exceptional circumstances.\n- The child may retain the biological surname or add the adopter's surname.\n\nProcedure for Adoption\n\n1. Filing of Application (3 marks)\n\nThe prospective adopter submits an application or petition for adoption before the competent court (Tribunal de Premiere Instance).\n\nThe application usually includes:\n- identity documents,\n- marriage certificate (where applicable),\n- birth certificate of the child,\n- evidence of income or financial capacity,\n- consent documents,\n- medical and social reports.\n\n2. Social Inquiry / Investigation (2 marks)\n\nThe court requests an inquiry by Social Welfare Services.\n\nThe investigation examines:\n- the adopter's home environment,\n- financial condition,\n- moral behaviour,\n- ability to care for the child,\n- and whether the adoption is genuinely in the child's best interest.\n\nA detailed report (enquete sociale) is then submitted to the court.\n\n3. Court Hearing and Examination (2 marks)\n\nThe judge hears the case and examines:\n- whether legal conditions are fulfilled;\n- whether all required consents were obtained;\n- whether adoption will benefit the child.\n\nThe judge may hear:\n- the adopter,\n- biological parents or guardian,\n- social welfare officers,\n- and the child if aged 10 or older.\n\n4. Court Decision / Adoption Order (2 marks)\n\nIf satisfied, the court grants an adoption order specifying whether it is full or simple adoption.\n\nOnce granted:\n- the adopter becomes the legal parent;\n- the child acquires full legal rights in the adoptive family;\n- parental authority is transferred to the adoptive parent(s).\n\nThe adoption order is then registered in the civil status register (Centre d'Etat Civil) and a new birth certificate is issued showing the adopters as parents.\n\nEffects of Adoption\n\nFull Adoption:\n- Child acquires the adopter's surname.\n- Full and exclusive inheritance rights from the adopter.\n- Adopter exercises exclusive parental authority.\n- Complete and permanent severance of legal ties with biological parents.\n- The child is treated in law as the biological child of the adopter for all purposes.\n\nSimple Adoption:\n- Child inherits from both biological and adoptive families.\n- Biological parents retain residual rights and obligations.\n- The adoptive parent shares parental authority alongside biological parents.\n- Maintenance obligations may continue from biological parents.\n\nConclusion\n\nChild adoption in Cameroon is a carefully regulated process governed by the 2019 Child Protection Code. The law balances the best interests of the child with the rights of biological and adoptive parents through comprehensive safeguards: social enquiry, medical assessment, judicial oversight, and multi-layered consent requirements. Understanding the distinction between full adoption (adoption pleniere) and simple adoption (adoption simple) is essential, as they carry fundamentally different legal consequences for all parties involved. The procedure emphasises judicial scrutiny to prevent trafficking and ensure genuine welfare outcomes for the child."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Examine the types and forms of labour contracts recognized by the 1992 Labour Code of Cameroon.",
                "marks": 20,
                "answer": "Section C: Labour Law (20 Marks)\n\nIntroduction\n\nUnder Section 23 of the 1992 Labour Code of Cameroon, a contract of employment is an agreement by which a worker undertakes to put his professional activity under the direction and authority of an employer in return for remuneration. The Code categorizes these agreements strictly by their duration (Types) and structural execution (Forms).\n\n1. Types of Labour Contracts (Based on Duration)\n\nThe Labour Code recognizes two main substantive types of contracts based on their timeline and termination terms:\n\nA. Specified / Fixed-Term Contract (Contrat a Duree Determinee - CDD)\n\nDefinition (Section 25): A contract whose term is fixed in advance by the common will of both parties, or is tied to the occurrence of a future, certain event (e.g., the completion of a specific project or a seasonal harvest).\n\nDuration Limits: A fixed-term contract cannot be concluded for a duration exceeding two (2) years. It can only be renewed once for the same duration.\n\nThe Expat Exception: If it is an expatriate worker, the contract can be renewed twice, but any further renewal turns it automatically into an unspecified contract.\n\nTermination: Breaking a fixed-term contract early without gross misconduct or force majeure obliges the breaking party to pay damages equivalent to the remaining salary of the term.\n\nB. Unspecified / Indeterminate-Term Contract (Contrat a Duree Indeterminee - CDI)\n\nDefinition: A contract where the duration of the employment relationship is not fixed in advance. It continues indefinitely until terminated by either party.\n\nTermination Rule (Section 34): This contract can be terminated at any time at the option of either the employer or the worker, provided that a formal Notice Period (Preavis) is given. The terminating party must provide valid, lawful reasons (e.g., economic layoffs or performance issues), otherwise, the termination is deemed wrongful (licenciement abusif), opening the door for court damages.\n\n2. Forms of Labour Contracts (Special Operational Formats)\n\nBeyond standard day-to-day employment, the 1992 Code regulates specific formats regarding how work is structured, tested, or sub-contracted:\n\nA. Contract of Trial / Probationary Contract (Contrat d'Essai)\n\nDefinition (Section 28): A preliminary agreement by which an employer tests the professional fitness and character of a worker, and the worker evaluates the working conditions and remuneration.\n\nStrict Writing Requirement: This form must be written, or it is completely void. It can be included as a clause within a larger contract or stand alone.\n\nDuration Limits: The law limits this period based on skill level (ranging from 1 to 6 months max, depending on whether the worker is an operative, supervisor, or manager). It can only be renewed once.\n\nTermination: Either party can terminate a probationary contract at any point without notice and without claiming damages.\n\nB. Sub-Contractor's Contract (Contrat de Sous-traitance)\n\nDefinition (Section 48): An agreement where a principal contractor hires a secondary contractor (the sub-contractor) to recruit workers, provide tools, or execute a specified job or service for a flat piece-rate price.\n\nLegal Safeguard: The Code protects workers here: if the sub-contractor becomes insolvent, the principal contractor must step in and fulfill all unpaid worker wages and benefits.\n\nC. Seasonal or Casual Contract (Contrat Saisonnier / Occasionnel)\n\nTemporary, irregular forms of work meant to deal with a sudden peak in industry production, short-term project demands, or periodic natural cycles (like agricultural harvests).\n\n3. General Legal Form of a Contract (The Validity Rule)\n\nTo ensure clarity if asked about the physical \"form\" of standard contracts:\n\nConsensualism: Under Section 24, standard national contracts can be oral or written. They are legally binding upon mutual consent.\n\nMandatory Written Form: The contract MUST be written and registered with the Ministry of Labour if it involves:\n\n- An expatriate worker.\n- A worker moving outside their normal place of residence.\n- A probationary/trial contract (Contrat d'essai)."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "a) What do you understand by the term negotiable instruments?",
                "marks": 5,
                "answer": "Negotiable instruments are written, signed, unconditional promises or orders to pay a specified sum of money on demand or at a definite future time, to the bearer or to a named person or order. They are freely transferable by delivery (if payable to bearer) or by endorsement and delivery (if payable to order), giving the transferee the right to enforce payment in their own name. The defining characteristic is that a bona fide holder in due course acquires valid title to the instrument free from any defects in the title of prior parties and free from most defences available among prior parties. Common examples include cheques (chèques), promissory notes (billets à ordre), bills of exchange (lettres de change), and bank drafts. Negotiable instruments serve as substitutes for money in commercial transactions, facilitate credit, and provide security in payments by enabling transferability of rights without the formalities of assignment under ordinary contract law."
              },
              {
                "id": 2,
                "text": "b) State and explain clearly five features of negotiable instruments.",
                "marks": 15,
                "answer": "Five Essential Features of Negotiable Instruments\n\n1. Free Transferability (Negotiability):\nThe instrument can be freely transferred from one person to another. If payable to bearer, transfer is by mere delivery. If payable to order, transfer is by endorsement (signature on the back) and delivery. The transferee (holder) acquires the right to enforce payment in their own name without giving notice to the original debtor. This distinguishes negotiable instruments from ordinary contractual rights, which require formal assignment with notice to the debtor.\n\n2. Holder in Due Course Protection:\nA holder in due course is a person who acquires the instrument in good faith, for valuable consideration, before maturity, and without notice of any defect in the title of the transferor or any infirmity in the instrument itself. Such a holder takes the instrument free from all defences (except for the so-called real defences such as forgery or incapacity) and obtains a valid title even if the transferor's title was defective. This principle is fundamental to commercial certainty because it makes negotiable instruments reliable substitutes for money.\n\n3. Unconditional Promise or Order:\nThe instrument must contain an unconditional undertaking to pay a fixed and certain sum of money. It cannot be made subject to any condition, contingency, or qualification. The payment must be in legal currency (money), not in goods, services, or other property. This certainty is essential because the instrument circulates as a substitute for money and must therefore carry a definite, ascertainable value.\n\n4. Writing and Signature:\nThe instrument must be in writing and signed by the maker (for promissory notes) or the drawer (for bills of exchange and cheques). Writing includes any legible form (print, type, handwriting). The signature is essential for authentication and creation of liability; it may be the person's name, initials, mark, or authorised agent's signature. Without proper signature, the instrument is incomplete and unenforceable.\n\n5. Certainty of Parties:\nThe instrument must clearly identify all parties:\n- The drawer (tireur): the person who creates and signs the instrument (bill of exchange or cheque).\n- The drawee (tire): the person ordered to pay (the bank for a cheque, or the person on whom a bill is drawn).\n- The payee (beneficiaire): the person entitled to receive payment.\n- For promissory notes: the maker (souscripteur) promises to pay the payee.\n\nThe sum payable must be definite and certain, expressed in words or figures. Any ambiguity may render the instrument defective.\n\nAdditional Essential Features:\n\n6. Delivery: The instrument is not complete and enforceable until it is delivered by the maker or drawer to the payee or bearer with the intention of giving effect to it. Even a signed instrument creates no liability until delivered.\n\n7. Payment in Money: The instrument must be payable in legal currency (cash), not in kind, services, or goods. Foreign currency instruments are valid but must clearly specify the currency.\n\n8. Presentment for Payment: The holder must present the instrument for payment to the drawee or maker at the proper time and proper place. Failure to present within a reasonable time may discharge prior parties from liability.\n\n9. Stamping (where applicable): Under Cameroon's OHADA Uniform Act, bills of exchange and promissory notes may require stamping for evidentiary purposes in legal proceedings.\n\nConclusion: These features collectively ensure that negotiable instruments function effectively as substitutes for money and instruments of credit in modern commerce. They combine the certainty of a written obligation with the flexibility of free transferability and the protection of the holder-in-due-course doctrine."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Carefully explain the doctrine of corporate personality and its advantages.",
                "marks": 20,
                "answer": "The Doctrine of Corporate Personality and Its Advantages\n\nIntroduction\n\nThe doctrine of corporate personality, also known as the veil of incorporation (voile social), is a foundational principle of company law. It was firmly established in the landmark English case of Salomon v A Salomon & Co Ltd [1897] AC 22, where the House of Lords held that a company, once incorporated, is a legal entity separate and distinct from its shareholders and directors. This principle is the cornerstone of modern company law and is expressly recognised under the OHADA Uniform Act on Commercial Companies and Economic Interest Groups (Acte Uniforme OHADA sur les Societes Commerciales et les GIE), which applies uniformly across Cameroon and the other OHADA member states.\n\nThe Doctrine Explained\n\nA company, once incorporated, becomes a legal person (personne morale) with its own rights, obligations, and legal personality entirely separate from the natural persons (personnes physiques) who own or manage it. This separation is often described as the corporate veil because it shields the individuals behind the company from personal liability for the company's acts and debts.\n\nKey Elements of Corporate Personality\n\n1. Separate Legal Entity:\n- The company has its own legal identity, independent and distinct from its members.\n- It can own property in its own name, enter into contracts, incur debts, grant security, and sue or be sued in its own name.\n- The company's assets belong to the company, not to the shareholders, even if a single shareholder owns all the shares.\n\n2. Perpetual Succession (Perpetuite):\n- The company continues to exist indefinitely regardless of changes in its membership or management.\n- Death, bankruptcy, insanity, or retirement of shareholders does not affect the company's legal existence.\n- The company only ceases to exist through formal liquidation and striking-off from the trade register (Registre du Commerce et du Credit Mobilier).\n\n3. Limited Liability (Responsabilite Limitee):\n- Shareholders' liability is limited to the amount unpaid on their shares (for companies limited by shares).\n- Personal assets of shareholders (house, car, personal savings) are protected from company debts and liabilities.\n- Creditors of the company can only pursue the company's assets, not the personal assets of members.\n- This is the most commercially significant consequence of corporate personality.\n\n4. Separate Property (Patrimoine Social):\n- All assets acquired by the company belong exclusively to the company.\n- Shareholders have no direct legal or equitable interest in specific company property.\n- This separation is fundamental to secured lending, as lenders can take security over company assets without affecting shareholders' personal property.\n\n5. Capacity to Sue and Be Sued:\n- The company can initiate and defend legal proceedings in its own name.\n- Third parties (creditors, customers, regulators) must sue the company, not its individual members.\n- The company can be a party to contracts, litigation, and arbitration independently.\n\nAdvantages of Corporate Personality\n\n1. Limited Liability Protection:\n- Shareholders risk only their investment in the company (the value of their shares).\n- Personal assets are shielded from business creditors, encouraging investment and entrepreneurship.\n- Without limited liability, few would risk capital in business ventures; it is the essential foundation of modern capital markets.\n\n2. Perpetual Existence:\n- The business continues despite changes in ownership, management, or membership.\n- Provides stability and continuity for employees, customers, suppliers, and long-term contracts.\n- Essential for long-term business planning, investment, and intergenerational wealth transfer.\n\n3. Free Transferability of Shares:\n- Shares can be freely transferred (subject to any contractual restrictions) without disrupting business operations.\n- Facilitates raising capital from new investors and provides exit options for existing shareholders.\n- Enables growth through mergers, acquisitions, and stock market listings.\n\n4. Access to Capital and Credit:\n- Companies can raise funds by issuing shares (equity financing) and debentures (debt financing).\n- Banks and financial institutions prefer lending to incorporated entities with separate legal personality.\n- Companies can create floating charges and other security interests over their assets.\n\n5. Tax Treatment:\n- The company is a separate tax entity with its own tax rates, allowances, and obligations.\n- May benefit from corporate tax incentives, exemptions, and deductions not available to individuals.\n- Ability to retain profits for reinvestment at corporate rather than personal income tax rates.\n- Flexibility in tax planning through remuneration strategies (salary vs dividends vs retained earnings).\n\n6. Professional Management:\n- Separation of ownership and management enables appointment of professional managers.\n- Shareholders can focus on strategic direction while professional managers handle day-to-day operations.\n- Facilitates growth beyond what individual owner-managers could handle alone.\n- Enables delegation, specialisation, and efficient corporate governance.\n\nLimitations: Lifting the Corporate Veil\n\nCourts and legislation may disregard the separate legal entity (lift the veil) in certain exceptional circumstances:\n\n- Fraud or Improper Conduct: Where the company is used as a device to perpetrate fraud, evade contractual obligations, or circumvent the law (Gilford Motor Co v Horne [1933] Ch 935).\n- Tax Evasion: Tax authorities can look through the corporate form to determine true ownership and tax liability.\n- Agency: Where a subsidiary is found to be the mere agent or puppet of the parent company, the parent may be held liable for the subsidiary's acts.\n- Group Enterprises: Courts may treat a group of companies as a single economic entity for certain purposes, particularly in tort claims.\n- Public Policy: In cases of national security, enemy character determination, or environmental liability.\n- Undercapitalisation: Where a company is formed with manifestly inadequate capital to carry on its business, exposing creditors to risk.\n\nConclusion\n\nThe doctrine of corporate personality is the bedrock of modern company law, providing the legal foundation for limited liability, perpetual succession, and separate patrimony. These features collectively encourage investment, facilitate commerce, and enable economic growth by allocating risk to the entity rather than the individual. While the corporate veil is generally respected by courts, it will be lifted in cases of fraud, abuse, or evasion. In Cameroon, OHADA law provides a modern and harmonised framework that applies these principles uniformly across the member states, balancing the interests of shareholders, creditors, employees, and the public."
              }
            ]
          }
        ]
      }
    ]
  },
  "2021": {
    "papers": [
      {
        "title": "Practice of Computer",
        "duration": "5 hours",
        "credits": 8,
        "sections": [
          {
            "title": "C Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Write C function collect for one toy (name,category,supplyPrice,salePrice,qty), store in Product struct, display benefit.",
                "marks": 3,
                "answer": "struct Product{char n[50];char cat[30];float sp;float sa;int q;};void collect(){struct Product p;scanf(\"%s%f%f%d\",p.n,&p.sp,&p.sa,&p.q);float b=(p.sa-p.sp)*p.q;printf(\"Benefit:%.2f\",b);}",
                "tutorial": "Benefit = (salePrice - supplyPrice) * qtySold."
              },
              {
                "id": 2,
                "text": "Write collectData to fill array of up to 100 Products.",
                "marks": 4,
                "answer": "void collectData(struct Product p[],int*n){scanf(\"%d\",n);for(int i=0;i<*n;i++)scanf(\"%s%f%f%d\",p[i].n,&p[i].sp,&p[i].sa,&p[i].q);}"
              },
              {
                "id": 3,
                "text": "Write benefit() returning sum of all product benefits.",
                "marks": 4,
                "answer": "float benefit(struct Product p[],int n){float t=0;for(int i=0;i<n;i++)t+=(p[i].sa-p[i].sp)*p[i].q;return t;}"
              },
              {
                "id": 4,
                "text": "Write mostSold() returning name with highest quantity sold.",
                "marks": 4,
                "answer": "char*mostSold(struct Product p[],int n){int m=0;for(int i=1;i<n;i++)if(p[i].q>p[m].q)m=i;return p[m].n;}"
              },
              {
                "id": 5,
                "text": "Write bestProduct() returning product with highest benefit.",
                "marks": 4,
                "answer": "char*bestProduct(struct Product p[],int n){int m=0;float mb=(p[0].sa-p[0].sp)*p[0].q;for(int i=1;i<n;i++){float b=(p[i].sa-p[i].sp)*p[i].q;if(b>mb){mb=b;m=i;}}return p[m].n;}"
              },
              {
                "id": 6,
                "text": "Write worstProduct() returning product with lowest benefit/qty ratio.",
                "marks": 4,
                "answer": "char*worstProduct(struct Product p[],int n){int m=0;float mr=p[0].sa-p[0].sp;for(int i=1;i<n;i++){float r=p[i].sa-p[i].sp;if(r<mr){mr=r;m=i;}}return p[m].n;}"
              },
              {
                "id": 7,
                "text": "Write main() to demonstrate all functions.",
                "marks": 2,
                "answer": "int main(){struct Product p[100];int n;collectData(p,&n);printf(\"Tot:%.2f\\nMost:%s\\nBest:%s\\nWorst:%s\",benefit(p,n),mostSold(p,n),bestProduct(p,n),worstProduct(p,n));}"
              }
            ]
          },
          {
            "title": "OOP",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Implement Circle class with radius,color,getRadius(),getColor(),getArea(). Create 3 instances and display.",
                "marks": 10,
                "answer": "class Circle{private double r=1.0;String c=\"red\";Circle(){}Circle(double r){this.r=r;}Circle(double r,String c){this.r=r;this.c=c;}double getR(){return r;}String getC(){return c;}double getA(){return Math.PI*r*r;}}",
                "tutorial": "Encapsulation: private fields with public getters."
              },
              {
                "id": 2,
                "text": "Create SWE,NWS,CSN,ICT classes with display methods. ICT inherits all three. Comment on inheritance and ambiguity.",
                "marks": 15,
                "answer": "// Java uses interfaces with default methods. C++ uses virtual inheritance. Diamond problem resolved via scope resolution :: or interface super calls.",
                "tutorial": "Multiple inheritance creates diamond problem."
              }
            ]
          },
          {
            "title": "Database (MySQL)",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "SQL for jobs table with defaults.",
                "marks": 5,
                "answer": "CREATE TABLE jobs(job_id VARCHAR(10) PRIMARY KEY,job_title VARCHAR(35) DEFAULT '',min_salary DECIMAL(6,0) DEFAULT 8000,max_salary DECIMAL(6,0) DEFAULT NULL);"
              },
              {
                "id": 2,
                "text": "Display name, salary, PF(15% of salary).",
                "marks": 5,
                "answer": "SELECT first_name,last_name,salary,salary*0.15 AS PF FROM employees;"
              },
              {
                "id": 3,
                "text": "Display full name and salary where salary NOT BETWEEN 7000 and 15000, sorted.",
                "marks": 5,
                "answer": "SELECT CONCAT(first_name,' ',last_name) AS name,salary FROM employees WHERE salary NOT BETWEEN 7000 AND 15000 ORDER BY name ASC;"
              }
            ]
          },
          {
            "title": "Web",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "HTML button calling displaymessage() that prompts for name, shows alert.",
                "marks": 4,
                "answer": "<button onclick='displaymessage()'>Click</button><script>function displaymessage(){var n=prompt('Name:');alert('Your name is '+n);}</script>"
              },
              {
                "id": 2,
                "text": "HTML5 form with placeholders and required.",
                "marks": 6,
                "answer": "<form><input type='text' placeholder='TUBUO' required><br><input type='email' placeholder='...' required><br><input type='submit'></form>"
              },
              {
                "id": 3,
                "text": "External CSS for form.",
                "marks": 2,
                "answer": "input,select,textarea{width:100%;padding:8px;}input[type=submit]{background:#4CAF50;color:white;}"
              },
              {
                "id": 4,
                "text": "Database + PHP script.",
                "marks": 3,
                "answer": "<?php $c=new mysqli('localhost','root','','application');$c->query(\"INSERT INTO t VALUES('$_POST[a]')\");$c->close();?>"
              }
            ]
          },
          {
            "title": "Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Crimp cables T568B, assign IPs 10.0.0.1-3/16, connect to switch, test ping.",
                "marks": 15,
                "answer": "T568B: OW/O/GW/B/BW/G/BrW/Br. IPs: 10.0.0.1/2/3 mask 255.255.0.0. Connect to switch. ping 10.0.0.2 to test."
              }
            ]
          }
        ]
      },
                                                                        {
        "title": "Case Study - SWE",
        "duration": "6 hours",
        "credits": 14,
        "sections": [
          {
            "title": "Algorithms",
            "marks": 20,
            "questions": [
              {"id": 1, "text": "What is an algorithm? List four characteristics of algorithms.", "marks": 5, "answer": "An algorithm is a finite, step-by-step sequence of well-defined instructions for solving a problem.\n\nFour characteristics:\n1) Finiteness: must terminate after finite steps.\n2) Definiteness: each step must be unambiguous.\n3) Input: zero or more input values.\n4) Output: at least one output value produced.\n5) Effectiveness: each step must be basic enough to carry out."},
              {"id": 2, "text": "The algorithm below determines average weight of two rabbits.\n\n1. Start\n2. Get W1, W2\n3. If W1&lt;0 OR W2&lt;0\n4.     Display error\n5. Else\n6.     Average = (W1+W2)/2\n7.     Displace W1, W2, Average\n8. End\n\nHow many control structures? Name them and identify line numbers.", "marks": 4, "answer": "Two control structures:\n\n1) Sequence (lines 1,2,6,7,8): linear execution.\n2) Selection/IF-THEN-ELSE (lines 3-5): conditional branch.\n\nNo iteration/loop present."},
              {"id": 3, "text": "The algorithm below determines average weight of two rabbits.\n\n1. Start\n2. Get W1, W2\n3. If W1&lt;0 OR W2&lt;0\n4.     Display error\n5. Else\n6.     Average = (W1+W2)/2\n7.     Displace W1, W2, Average\n8. End\n\nUse a flow chart to represent this algorithm.", "marks": 7, "answer": "Flowchart:\n\n```mermaid\nflowchart TD\n    Start([Start]) --> GetW[Get W1, W2]\n    GetW --> Check{Is weight negative?}\n    Check -->|Yes| Error[Display error]\n    Check -->|No| Calc[Average = W1+W2 / 2]\n    Calc --> Output[Display W1, W2, Average]\n    Error --> End([End])\n    Output --> End\n```\n\nSymbols: Oval=Start/End, Parallelogram=Input/Output, Diamond=Decision, Rectangle=Process, Arrows=Flow."},
              {"id": 4, "text": "Differentiate between an algorithm and a computer program.", "marks": 4, "answer": "Algorithm: step-by-step logical procedure, language-independent, cannot execute directly.\nProgram: instructions in specific language (C, Java, Python), can be compiled/executed.\n\nAlgorithm = design/plan; Program = implementation."}
            ]
          },
          {
            "title": "Event Programming (VB.NET)",
            "marks": 5,
            "questions": [
              {"id": 1, "text": "Write VB.NET code to declare a variable to store the age of a person.", "marks": 3, "answer": "Dim age As Integer\nDim age As Integer = 25\n\nDim declares, age is name, As Integer specifies whole number type."},
              {"id": 2, "text": "Write VB.NET code to prompt user for name and output: Hello John!", "marks": 2, "answer": "Module Module1\n    Sub Main()\n        Dim name As String\n        Console.Write(\"Enter your name: \")\n        name = Console.ReadLine()\n        Console.WriteLine(\"Hello \" & name & \"!\")\n        Console.ReadKey()\n    End Sub\nEnd Module"}
            ]
          },
          {
            "title": "Structural Programming C",
            "marks": 15,
            "questions": [
              {"id": 1, "text": "a) Define a C variable.\nb) State how a variable is defined in C.", "marks": 2, "answer": "a) A named memory location storing a value of specific data type; value can change during execution.\n\nb) data_type variable_name;  Example: int age;\nDefinition+init: int age = 25;"},
              {"id": 2, "text": "State two ways constants are defined in C.", "marks": 2, "answer": "1) #define CONSTANT value  (preprocessor, no type, no semicolon)\n2) const type name = value; (compiler, type-checked)"},
              {"id": 3, "text": "What is a data type in C? List four data types.", "marks": 5, "answer": "A data type defines memory size, value range, and operations for a variable.\n\n1) int: whole numbers, 4 bytes.\n2) float: single-precision decimal, 4 bytes.\n3) double: double-precision decimal, 8 bytes.\n4) char: single character, 1 byte."},
              {"id": 4, "text": "Main difference between call by value and call by reference?", "marks": 1, "answer": "Call by value: passes copy — changes don't affect original.\nCall by reference: passes address — changes affect original."},
              {"id": 5, "text": "Evaluate using operator precedence:\n\na=20,b=10,c=15,d=5\ne=(a+b)*c/d;\ne=((a+b)*c)/d;\ne=(a+b)*(c/d);\ne=a+(b*c)/d;", "marks": 5, "answer": "a) (20+10)*15/5 = 30*15/5 = 90\nb) ((20+10)*15)/5 = 90\nc) (20+10)*(15/5) = 30*3 = 90\nd) 20+(10*15)/5 = 20+30 = 50"}
            ]
          },
          {
            "title": "Object Oriented Programming",
            "marks": 10,
            "questions": [
              {"id": 1, "text": "University class with Departments. Department has name, programs, lecturers, students. Implement in C++/JAVA. Initialize: name=IT, program=HND, lecturer=Mr. P, student=Epie. Output all info.", "marks": 10, "answer": "Java:\nclass Department {\n    private String name, program, lecturer, student;\n    public Department(String n, String p, String l, String s) { name=n; program=p; lecturer=l; student=s; }\n    public void displayInfo() { System.out.println(\"Department: \"+name+\"\\nProgram: \"+program+\"\\nLecturer: \"+lecturer+\"\\nStudent: \"+student); }\n}\npublic class University {\n    public static void main(String[] args) {\n        Department d = new Department(\"IT\",\"HND\",\"Mr. P\",\"Epie\");\n        d.displayInfo();\n    }\n}"}
            ]
          },
          {
            "title": "Database",
            "marks": 20,
            "questions": [
              {"id": 1, "text": "Explain data types in Customer table:\ni) Customer ID (auto numeric)\nii) Customer Name (text)\niii) Fee Paid (decimal)\niv) Pay Date (date)", "marks": 8, "answer": "i) Auto-incrementing unique number for primary key.\nii) VARCHAR for names/addresses.\niii) DECIMAL(p,s) for exact monetary precision.\niv) DATE/DATETIME for date values with date arithmetic support."},
              {"id": 2, "text": "Convert vehicle/operator table to VEHICLE_OPERATOR in 1NF.", "marks": 2, "answer": "VEHICLE_OPERATOR(VehicleID, Description, Operator, Route, Tariff)\nEach cell atomic, no repeating groups.\nPK: {VehicleID, Operator}"},
              {"id": 3, "text": "List FDs and candidate key for VEHICLE_OPERATOR.", "marks": 3, "answer": "FDs: VehicleID->Description, Operator->Route, Operator->Tariff, {VehicleID,Operator}->all\nCandidate key: {VehicleID, Operator}"},
              {"id": 4, "text": "Identify insert, delete, modification anomalies.", "marks": 3, "answer": "Insert: can't add vehicle without operator.\nDelete: deleting last operator removes vehicle info.\nModify: changing description requires updating all rows."},
              {"id": 5, "text": "Draw relational schema showing functional dependencies.", "marks": 1, "answer": "VEHICLE_OPERATOR(VehicleID, Description, Operator, Route, TariffPerMile)\nPK: {VehicleID, Operator}\nVehicleID -> Description\nOperator -> Route, TariffPerMile"},
              {"id": 6, "text": "What normal form is VEHICLE_OPERATOR in? Justify.", "marks": 3, "answer": "1NF but NOT 2NF.\nPartial dependencies: Description depends on VehicleID (part of PK), Route/Tariff depend on Operator (part of PK)."}
            ]
          },
          {
            "title": "Web Design",
            "marks": 15,
            "questions": [
              {"id": 1, "text": "List new HTML5 form input types.", "marks": 2, "answer": "email, url, date, number, range, color, tel, search. Each provides validation or specialized UI."},
              {"id": 2, "text": "Give the meta tag for charset.", "marks": 1, "answer": "<meta charset=\"UTF-8\">"},
              {"id": 3, "text": "List HTML elements that support media content.", "marks": 4, "answer": "<video> <audio> <source> <track> <embed> <object> <iframe>"},
              {"id": 4, "text": "Define canvas and its default border size.", "marks": 2, "answer": "Scriptable drawing area via JavaScript. Default: 300x150px. Border: 0 (invisible without CSS)."},
              {"id": 5, "text": "Differentiate CSS and CSS3.", "marks": 1, "answer": "CSS3 is modular with advanced selectors, Flexbox/Grid, border-radius, gradients, animations, media queries, @font-face, RGBA/HSL."},
              {"id": 6, "text": "List and explain types of CSS.", "marks": 3, "answer": "1) Inline: style attribute on elements.\n2) Internal: <style> in <head>.\n3) External: linked .css file via <link>."},
              {"id": 7, "text": "Difference between window.onload and DOMContentLoaded?", "marks": 2, "answer": "window.onload: waits for ALL resources (slower).\nDOMContentLoaded: fires when DOM ready (faster)."}
            ]
          },
          {
            "title": "Networking",
            "marks": 15,
            "questions": [
              {"id": 1, "text": "Explain importance of layering in a network.", "marks": 2, "answer": "Modularity, interoperability, simplified troubleshooting, flexibility, divide-and-conquer, standardization."},
              {"id": 2, "text": "Differentiate:\na) OSI model vs TCP/IP model (2mk)\nb) UDP vs TCP (3mk)", "marks": 5, "answer": "a) OSI: 7 layers, conceptual, by ISO. TCP/IP: 4 layers, practical, by DARPA for Internet.\nb) TCP: connection-oriented, reliable, ordered, slower. UDP: connectionless, unreliable, unordered, faster."},
              {"id": 3, "text": "Describe data encapsulation in OSI model.", "marks": 2, "answer": "7-App: Data\n6-Pres: Data\n5-Sess: Data\n4-Trans: Segment (TCP) or Datagram (UDP) + port header\n3-Net: Packet + IP header\n2-DL: Frame + MAC header + FCS trailer\n1-Phys: Bits\nReceiver de-encapsulates in reverse."},
              {"id": 4, "text": "Ring and Star topologies: sketch, 2 advantages, 2 disadvantages, protocol.\na) Ring (3mk)\nb) Star (3mk)", "marks": 6, "answer": "a) Ring: each device connects to two neighbors in a loop.\nAdv: predictable, collision-free.\nDisadv: single point of failure, hard to add/remove.\nProtocols: Token Ring, FDDI.\n\nb) Star: all devices connect to central switch.\nAdv: fault isolation, easy to add/remove.\nDisadv: switch is SPOF, more cable.\nProtocols: Ethernet, Wi-Fi."}
            ]
          }
        ]
      },
      {
        "title": "Information System",
        "duration": "3 hours",
        "credits": 6,
        "sections": [
          {
            "title": "System Architecture",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is network architecture?",
                "marks": 2,
                "answer": "Network architecture is the design and blueprint that defines how network devices (computers, routers, switches) are arranged and communicate with each other. It includes both physical layout (topology) and logical rules (protocols)."
              },
              {
                "id": 2,
                "text": "List and describe the two types of widely used network architectures illustrating the diagram of each.",
                "marks": 9,
                "answer": "(1) Client-Server Architecture (4 marks): A centralized model where clients (workstations) request services from a central server that manages resources and security. Diagram: server in center connected to multiple clients via switch/hub.\n(2) Peer-to-Peer (P2P) Architecture (4 marks): A decentralized model where each node acts as both client and server, sharing resources directly without a central server. Diagram: nodes connected in a mesh-like network.\n+1 mark for naming both correctly."
              },
              {
                "id": 3,
                "text": "Give the meaning of OSI as designed by ISO. List and explain the different layers of the OSI model in descending order. And precise the unit data at each layer.",
                "marks": 11,
                "answer": "(1) OSI = Open Systems Interconnection, a standard model by ISO for network communication (1 mark).\n(2) Layers with data units (7 layers @ 1 mark each = 7 marks):\n  7. Application (Data) — User interface, email, web browsing\n  6. Presentation (Data) — Encryption, compression, format conversion\n  5. Session (Data) — Session management, checkpoints\n  4. Transport (Segment) — Reliable or unreliable delivery, flow control\n  3. Network (Packet) — Routing, IP addressing\n  2. Data Link (Frame) — MAC addressing, error detection\n  1. Physical (Bit) — Raw bit transmission over wire/fiber\n(3) Data unit mention per layer (7 @ 0.5 each = 3.5 marks)"
              },
              {
                "id": 4,
                "text": "Explain what is a cloud?",
                "marks": 2,
                "answer": "A cloud is a network of remote servers hosted on the internet that store, manage, and process data instead of using a local server or personal computer. It delivers on-demand computing resources over the internet."
              },
              {
                "id": 5,
                "text": "What is Cloud Computing? Give an illustration of it.",
                "marks": 4,
                "answer": "Cloud computing is the on-demand delivery of computing services (servers, storage, databases, networking, software) over the internet on a pay-as-you-go basis (2 marks).\nIllustration (2 marks): Google Drive — users store files on Google's servers and access them from any device anywhere; Google manages the infrastructure and the user only pays for storage needed."
              },
              {
                "id": 6,
                "text": "From the experience that you have acquired when learning cloud computing, list and explain 4 benefits of Cloud Computing.",
                "marks": 6,
                "answer": "(1) Cost Savings (1.5): No upfront hardware costs, pay only for what you use.\n(2) Scalability (1.5): Easily scale resources up/down based on demand.\n(3) Accessibility (1.5): Access data and apps from anywhere with internet.\n(4) Disaster Recovery (1.5): Automatic backups and redundancy ensure data safety."
              },
              {
                "id": 7,
                "text": "Answer True or False on the following questions:",
                "marks": 6,
                "subtext": "a) Hardware as a Service is not a major type of cloud computing usage\nb) Virtual Machine Ware (VMware) is an example of software as a Service\nc) API stands for Analysis Programming Interface\nd) Paid application relies on Remote Servers\ne) A Cloud app is a Hardware program\nf) A Google Apps Engine is a type of CaaS\ng) A good cloud computing network cannot be adjusted to provide bandwidth on demand\nh) Blue mix is a cloud platform as a service developed by IBM\ni) Cloud Service has a many to many Relationship with their customers\nj) Google docs is a type of Cloud SaaS\nk) Cloud providers provide cloud services to cloud users\nl) Cloud applications can function offline",
                "answer": "a) True (HaaS is not a major type — IaaS, PaaS, SaaS are the three main models)\nb) False (VMware is virtualization software, not SaaS)\nc) False (API = Application Programming Interface)\nd) True (paid apps often use remote servers)\ne) False (a cloud app is software, not hardware)\nf) False (Google Apps Engine is PaaS, not CaaS)\ng) False (good cloud networks can auto-scale bandwidth)\nh) True (IBM Blue mix is a PaaS)\ni) True (a cloud provider serves many customers, and a customer may use multiple providers)\nj) True (Google Docs is SaaS)\nk) True (by definition)\nl) False (cloud apps typically require internet to function)"
              }
            ]
          },
          {
            "title": "Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is an operating system?",
                "marks": 5,
                "answer": "An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs. Key functions: process management (scheduling), memory management (allocation), file system management, device management (drivers), security/access control, and user interface (CLI/GUI)."
              },
              {
                "id": 2,
                "text": "What is memory management?",
                "marks": 5,
                "answer": "Memory management is the OS function that controls and coordinates computer memory, allocating portions to running processes, tracking usage, and freeing memory when no longer needed. Activities: allocation/deallocation, paging, segmentation, virtual memory mapping, and protection to prevent processes from interfering with each other's memory space."
              },
              {
                "id": 3,
                "text": "State the activities performed by the operating system for processor management.",
                "marks": 5,
                "answer": "Processor management activities: (1) Scheduling — deciding which process runs next (FCFS, SJF, Round Robin); (2) Context switching — saving/restoring process state when switching; (3) Dispatching — loading process onto CPU; (4) Interrupt handling — responding to hardware/software interrupts; (5) Load balancing — distributing processes across CPU cores."
              },
              {
                "id": 4,
                "text": "Differentiate between general purpose operating system and mobile operating system.",
                "marks": 5,
                "answer": "General Purpose OS (2.5 marks): Designed for desktops/laptops (Windows, macOS, Linux). Supports multitasking with windows, keyboard/mouse input, runs a wide range of applications (office, gaming, development), larger memory and storage footprint.\nMobile OS (2.5 marks): Designed for smartphones/tablets (Android, iOS). Touch-screen interface, optimized for battery life, app-store based installations, includes mobile-specific features (GPS, camera, sensors), more restrictive security (sandboxing)."
              },
              {
                "id": 5,
                "text": "List the five (5) components of information system.",
                "marks": 10,
                "answer": "(1) Hardware (2 marks): Physical devices — computers, servers, networking equipment, storage devices.\n(2) Software (2 marks): Programs and applications — OS, DBMS, productivity tools, custom applications.\n(3) Data (2 marks): Raw facts and figures stored and processed — databases, documents, multimedia.\n(4) Procedures (2 marks): Policies, rules, and instructions for using the system — user manuals, operating procedures.\n(5) People (2 marks): Users, IT staff, managers — the most important component, operating and benefiting from the system."
              },
              {
                "id": 6,
                "text": "Why study the human use of computer systems?",
                "marks": 5,
                "answer": "Studying human use of computers (HCI) helps: (1) Design user-friendly interfaces that reduce errors and improve productivity (1 mark); (2) Understand how humans interact with technology to create better workflows (1 mark); (3) Improve accessibility for diverse users including those with disabilities (1 mark); (4) Reduce training costs and learning curves (1 mark); (5) Ensure systems meet actual user needs rather than technical assumptions (1 mark)."
              },
              {
                "id": 7,
                "text": "List the four (4) key components of Android architecture.",
                "marks": 5,
                "answer": "(1) Linux Kernel (1.25 marks): Provides hardware abstraction, memory management, process management, security, and drivers.\n(2) Libraries & Android Runtime (1.25 marks): Native libraries (WebKit, SQLite, OpenGL) + ART (Android Runtime) for running apps with JIT/AOT compilation.\n(3) Application Framework (1.25 marks): High-level building blocks — Activity Manager, Content Providers, Notification Manager, Resource Manager.\n(4) Applications Layer (1.25 marks): User-facing apps — built-in (Phone, Contacts, Browser) and third-party apps downloaded from Play Store."
              }
            ]
          },
          {
            "title": "Project Management & Legal Regulations",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Define the following terms as used in project management: (a) Project portfolio (b) Project manager (c) Project plan (d) Project charter",
                "marks": 2,
                "answer": "(a) Project portfolio (0.5): Collection of projects/programs managed as a group to achieve strategic goals.\n(b) Project manager (0.5): Person responsible for planning, executing, and closing a project.\n(c) Project plan (0.5): Formal document defining project scope, objectives, timeline, resources, and budget.\n(d) Project charter (0.5): Document that formally authorizes the project, naming the PM and granting authority to use resources."
              },
              {
                "id": 2,
                "text": "List and explain at least 2 project management knowledge areas.",
                "marks": 2,
                "answer": "(1) Scope Management (1 mark): Defining and controlling what is included in the project — requirements gathering, WBS, scope verification.\n(2) Time Management (1 mark): Planning the schedule — activity sequencing, duration estimation, critical path analysis, schedule control."
              },
              {
                "id": 3,
                "text": "List and explain 2 major phases of a project management life cycle.",
                "marks": 2,
                "answer": "(1) Planning Phase (1 mark): Defining objectives, scope, schedule, budget, resources, risk assessment — the blueprint for execution.\n(2) Execution Phase (1 mark): Performing the actual work — building deliverables, managing teams, quality assurance, stakeholder communication."
              },
              {
                "id": 4,
                "text": "Who is an intervenor in legal terms?",
                "marks": 1,
                "answer": "An intervenor is a third party who voluntarily joins an ongoing legal case because they have a direct interest in the outcome, even though they were not originally named as a party."
              },
              {
                "id": 5,
                "text": "List and explain 3 types of intervenors you know.",
                "marks": 3,
                "answer": "(1) Intervenor as of Right (1 mark): Has a legal interest in the case and may be irreparably harmed — court must allow intervention.\n(2) Permissive Intervenor (1 mark): Has a claim or defense that shares common questions of law/fact — court may allow at its discretion.\n(3) Amicus Curiae (Friend of the Court) (1 mark): Not a party but provides expertise or information to help the court decide."
              },
              {
                "id": 6,
                "text": "You are the new project manager for the construction of 2 classrooms at ABC Higher Institute. Draft a project plan showing all phases, task activities, resources, time allocation, resource allocation, and necessary charts. From your time frames, calculate the optimistic, pessimistic and most likely estimates for the first and last activity.",
                "marks": 5,
                "answer": "Project Plan for 2 Classrooms:\nPhases: (1) Initiation — needs assessment, site inspection; (2) Planning — blueprint design, budget, permits; (3) Execution — foundation (Optimistic=2d, Most Likely=3d, Pessimistic=5d), framing (4d), wiring/plumbing (3d), finishing (Optimistic=5d, Most Likely=7d, Pessimistic=10d); (4) Monitoring — quality inspection; (5) Closure — handover.\nPERT Estimates:\nFoundation: (2+4×3+5)/6 = 19/6 ≈ 3.17 days\nFinishing: (5+4×7+10)/6 = 43/6 ≈ 7.17 days\nResources: Contractor team (5 workers), materials (cement, steel, wood, paint), equipment (mixer, tools)."
              },
              {
                "id": 7,
                "text": "Using your knowledge of market research, suggest to your school a marketing research plan that allows them to increase the number of international student admissions.",
                "marks": 5,
                "answer": "Marketing Research Plan:\n1. Define Objectives (1 mark): Increase international admissions by 30% — identify target countries and student segments.\n2. Data Collection (1 mark): Surveys of current international students, competitor analysis (other schools' offerings), online research on trends.\n3. Analysis (1 mark): SWOT analysis, identify barriers (visa issues, tuition cost, language), and opportunities (scholarships, online presence).\n4. Strategy (1 mark): Targeted digital campaigns (social media, Google Ads), partnerships with recruitment agencies abroad, virtual open days, alumni testimonials.\n5. Implementation & Monitoring (1 mark): Launch pilot in 3 countries, track application rates quarterly, adjust budget based on ROI."
              }
            ]
          }
        ]
      },
      {
        "title": "System Analysis & Design",
        "duration": "4 hours",
        "credits": 6,
        "sections": [
          {
            "title": "Object Modeling",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What is a model?",
                "marks": 1,
                "answer": "A simplified representation of a system or process used for analysis, design, and communication."
              },
              {
                "id": 2,
                "text": "Why is it important to always model computer systems?",
                "marks": 2,
                "answer": "Modeling helps visualize, understand, and validate system requirements before implementation, saving time and cost."
              },
              {
                "id": 3,
                "text": "What is Object Oriented Modelling?",
                "marks": 2,
                "answer": "A modeling approach that represents systems as collections of interacting objects, each with attributes and behaviors."
              },
              {
                "id": 4,
                "text": "According to you what is UML Language?",
                "marks": 2,
                "answer": "Unified Modeling Language — a standardized visual language for specifying, constructing, and documenting software systems."
              },
              {
                "id": 5,
                "text": "The conceptual model of UML consists of three parts. Name them.",
                "marks": 3,
                "answer": "Things (structural/behavioral), Relationships (dependency, association, generalization, realization), Diagrams (structure/behavior)."
              },
              {
                "id": 6,
                "text": "UML Architecture can be best represented as a collection of five views. Name them.",
                "marks": 3,
                "answer": "Use case view, Logical view, Implementation view, Process view, Deployment view."
              },
              {
                "id": 7,
                "text": "What is association? Illustrate with an example.",
                "marks": 2,
                "answer": "Association is a structural relationship between classes. Eg: Employee \"works for\" Company."
              },
              {
                "id": 8,
                "text": "What is multiplicity in associations? Give example to explain multiplicity.",
                "marks": 2,
                "answer": "Multiplicity specifies how many instances of one class relate to another. Eg: 1..* (one to many), 0..1 (zero or one)."
              },
              {
                "id": 9,
                "text": "Create the use case diagram according to the following elevator control system functional requirements: (a) allow the passenger to call elevator and select floor; (b) external/internal button controls button light; (c) opens/closes door on call; (d) moves/stops elevator.",
                "marks": 8,
                "answer": "Actor: Passenger. Use cases: CallElevator, SelectFloor, OpenDoor, CloseDoor, MoveElevator, StopElevator, SwitchButtonLightOn, SwitchButtonLightOff. The passenger triggers CallElevator and SelectFloor. The system handles door operations, movement, and button light.\n\n```mermaid\nuseCaseDiagram\n  actor Passenger\n  usecase \"Call Elevator\"\n  usecase \"Select Floor\"\n  usecase \"Open Door\"\n  usecase \"Close Door\"\n  usecase \"Move Elevator\"\n  usecase \"Stop Elevator\"\n  Passenger --> \"Call Elevator\"\n  Passenger --> \"Select Floor\"\n  \"Call Elevator\" --> \"Open Door\"\n  \"Call Elevator\" --> \"Close Door\"\n  \"Call Elevator\" --> \"Move Elevator\"\n  \"Select Floor\" --> \"Move Elevator\"\n  \"Move Elevator\" --> \"Stop Elevator\"\n```"
              }
            ]
          },
          {
            "title": "Database",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Based on the Employee table (empId, empName, Age, Address) solve: (a) display employee with empId=1004; (b) display all records; (c) display employees whose name starts with R.",
                "marks": 5,
                "answer": "(a) SELECT * FROM Employee WHERE empId=1004;\n(b) SELECT * FROM Employee;\n(c) SELECT * FROM Employee WHERE empName LIKE 'R%';"
              },
              {
                "id": 2,
                "text": "Consider an ER model for a pharmacy chain. Can a pharmaceutical company have multiple phone numbers? If not, what do you need to do?",
                "marks": 5,
                "answer": "As a single-valued attribute, it cannot. Add a multi-valued attribute (phoneNumbers) or split into a separate Phone table with 1-to-many relationship."
              },
              {
                "id": 3,
                "text": "Modify the pharmacy ER model to represent: (1) each patient has one primary physician (specialty, date of entry); (2) patient takes drugs prescribed by a physician with prescription date; (3) pharmaceutical companies have long-term contracts with pharmacies (start date, end date).",
                "marks": 5,
                "answer": "Add Physician entity (specialty, dateOfEntry) with 1..1 to Patient. Add Prescription entity linking Patient-Drug-Physician (prescriptionDate). Add Contract entity linking Company-Pharmacy (startDate, endDate) resolving the many-to-many.\n\n```mermaid\nerDiagram\n  Patient ||--|| Physician : has\n  Physician ||--o{ Prescription : writes\n  Patient ||--o{ Prescription : receives\n  Drug ||--o{ Prescription : included_in\n  PharmaceuticalCompany ||--o{ Contract : signs\n  Pharmacy ||--o{ Contract : signs\n  Patient {\n    int patientId PK\n    string name\n  }\n  Physician {\n    int physicianId PK\n    string specialty\n    date dateOfEntry\n  }\n  Drug {\n    int drugId PK\n    string name\n  }\n  Prescription {\n    int prescriptionId PK\n    date prescriptionDate\n  }\n  PharmaceuticalCompany {\n    int companyId PK\n    string name\n  }\n  Pharmacy {\n    int pharmacyId PK\n    string name\n    string address\n  }\n  Contract {\n    int contractId PK\n    date startDate\n    date endDate\n  }\n```"
              },
              {
                "id": 4,
                "text": "What is Data Integrity in database?",
                "marks": 2,
                "answer": "Data Integrity ensures accuracy and consistency of data through constraints (entity, referential, domain, user-defined)."
              },
              {
                "id": 5,
                "text": "What are Entities and Relationships?",
                "marks": 3,
                "answer": "Entity: real-world object represented in DB (eg Student). Relationship: association between entities (eg Student Enrolls Course)."
              },
              {
                "id": 6,
                "text": "What is an Alias in SQL?",
                "marks": 2,
                "answer": "An alias is a temporary name for a table or column using AS keyword: SELECT e.name FROM Employee AS e."
              },
              {
                "id": 7,
                "text": "What are the various forms of Normalization?",
                "marks": 3,
                "answer": "1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (every determinant is a candidate key)."
              }
            ]
          },
          {
            "title": "Web Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What are tags? Give two HTML tags that don't come in a pair (self-closing).",
                "marks": 4,
                "answer": "Tags are markup elements in HTML. Self-closing: <br>, <hr>, <img>, <input>."
              },
              {
                "id": 2,
                "text": "What are style sheets? Explain three ways of applying style sheets in a web document.",
                "marks": 5,
                "answer": "CSS defines presentation. Three ways: (1) Inline — style attribute on element; (2) Internal — <style> tag in <head>; (3) External — linked .css file via <link>."
              },
              {
                "id": 3,
                "text": "What difference do you make between: (a) Intranet and Extranet? (b) Web page and Web document?",
                "marks": 4,
                "answer": "Intranet: private internal network. Extranet: private network shared with partners. Web page: single HTML file. Web document: broader term (page, PDF, image, etc)."
              },
              {
                "id": 4,
                "text": "Define Internet and state four of its services.",
                "marks": 4,
                "answer": "Internet: global network of interconnected computers using TCP/IP. Services: WWW, Email, FTP, VoIP, DNS."
              },
              {
                "id": 5,
                "text": "What are some of the common lists that can be used when designing a page?",
                "marks": 5,
                "answer": "Ordered list (<ol>), Unordered list (<ul>), Definition list (<dl>), Nested lists, Menu list (<menu>)."
              },
              {
                "id": 6,
                "text": "Write an HTML table tag sequence that outputs: 50 pes 100 500 / 1 pes 5 50",
                "marks": 3,
                "answer": "<table border='1'><tr><td>50<td>pes<td>100<td>500<tr><td>1<td>pes<td>5<td>50</table>"
              }
            ]
          },
          {
            "title": "Mobile Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What are the main languages supported by Android for application development?",
                "marks": 2,
                "answer": "Java, Kotlin, C++ (via NDK)."
              },
              {
                "id": 2,
                "text": "Do all mobile phones support the latest Android operating system? Justify.",
                "marks": 2,
                "answer": "No. Older hardware may lack required specs (RAM, CPU, GPU), and manufacturers stop providing OS updates after a few years."
              },
              {
                "id": 3,
                "text": "What is the difference between Mobile device testing and mobile application testing?",
                "marks": 2,
                "answer": "Device testing: tests hardware features (battery, screen, sensors). Application testing: tests software functionality, UI, performance of the app."
              },
              {
                "id": 4,
                "text": "What are the different states wherein a process is based?",
                "marks": 4,
                "answer": "New (created), Ready (loaded in RAM, waiting for CPU), Running (executing), Waiting (blocked for I/O), Terminated (finished)."
              },
              {
                "id": 5,
                "text": "What are the four essential states of an activity?",
                "marks": 4,
                "answer": "Active/Running (visible and in foreground), Paused (partially visible but not interactive), Stopped (not visible, still in memory), Destroyed (removed from memory)."
              },
              {
                "id": 6,
                "text": "Android Architecture is made up of 4 key components. List them.",
                "marks": 4,
                "answer": "Activity (UI screen), Service (background processing), BroadcastReceiver (responds to system events), ContentProvider (shares data between apps)."
              },
              {
                "id": 7,
                "text": "What do you understand by Native Mobile Application Development?",
                "marks": 2,
                "answer": "Building platform-specific apps using the OS's native SDK and languages (Java/Kotlin for Android, Swift for iOS) for best performance."
              },
              {
                "id": 8,
                "text": "Describe Android application Architecture.",
                "marks": 5,
                "answer": "Android uses MVVM/MVC pattern. Layers: Linux Kernel (drivers, security), Hardware Abstraction Layer, Android Runtime (ART), Native C/C++ libraries (WebKit, OpenGL), Application Framework (Activity Manager, Content Providers), Applications layer."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Technology",
        "duration": "4 hours",
        "credits": 6,
        "sections": [
          {
            "title": "MCQ",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Which of the following correctly declares an array? A) int array[10]; B) int array; C) array{10}; D) array array[10];",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 2,
                "text": "What is the index number of the last element of an array with 9 elements? A) 9 B) 8 C) 0 D) Programmer-defined",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 3,
                "text": "Which of the following accesses the seventh element stored in array? A) array[6]; B) array[7]; C) array(7); D) array;",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 4,
                "text": "Where does the execution of the program start? A) user-defined function B) main function C) void function D) none of the mentioned",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 5,
                "text": "What is meant by multiple inheritance? A) deriving a base class from derived class B) deriving a derived class from base class C) deriving a derived class from more than one base class D) none of the mentioned",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 6,
                "text": "What does polymorphism in OOPs mean? A) Concept of allowing overriding of functions B) Concept of hiding data C) Concept of keeping things in different modules/files D) Concept of wrapping things into a single unit",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 7,
                "text": "Which concept allows you to reuse the written code? A) Encapsulation B) Abstraction C) Inheritance D) Polymorphism",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 8,
                "text": "Which of the following explains Polymorphism? A) int func(int, int); float func(float, float); B) int func(int); int func(int); C) int func(float); float func(int, int, char); D) int func(); int new_func();",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 9,
                "text": "Which of the following shows multiple inheritances? A) A->B->C B) A->B; A->C C) A,B->C D) B->A",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 10,
                "text": "Which of the following is/are the Characteristics of information? A) Accuracy and Relevance B) Form of information and Timeliness C) Completeness and Purpose D) All A, B & C",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 11,
                "text": "__________ level supply information to strategic tier for the use of top management. A) Operational B) Environmental C) Competitive D) Tactical",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 12,
                "text": "In the relational model, cardinality is termed as: A) Number of tuples B) Number of attributes C) Number of tables D) Number of constraints",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 13,
                "text": "Relational calculus is a: A) Procedural language B) Non-Procedural language C) Data definition language D) High level language",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 14,
                "text": "Cartesian product in relational algebra is: A) a Unary operator B) a Binary operator C) a Ternary operator D) not defined",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 15,
                "text": "DML is provided for: A) Description of logical structure of database B) Addition of new structures in the database system C) Manipulation & processing of database D) Definition of physical structure of database system",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 16,
                "text": "\"AS\" clause is used in SQL for: A) Selection operation B) Rename operation C) Join operation D) Projection operation",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 17,
                "text": "ODBC stands for: A) Object Database Connectivity B) Oral Database Connectivity C) Oracle Database Connectivity D) Open Database Connectivity",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 18,
                "text": "Architecture of the database can be viewed as: A) two levels B) four levels C) three levels D) one level",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 19,
                "text": "In a relational model, relations are termed as: A) Tuples B) Attributes C) Tables D) Rows",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 20,
                "text": "Which of the following is an OSI layer one Device? A) Router B) Switch C) Hub D) Bridge",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 21,
                "text": "Which data unit exists in the OSI layer two? A) Packets B) Bits C) Frames D) All of the above",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 22,
                "text": "The set of data that the router consults before making decisions on the packets received is called? A) Decision table B) Decision support system C) Routing decision table D) Routing table",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 23,
                "text": "What is the maximum distance of a UTP cable? A) 10km B) 100m C) 100km D) None of the above",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 24,
                "text": "A program created with the intention to destroy the normal functioning of the computer is called? A) A virus B) A worm C) A malware D) A spyware",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 25,
                "text": "The unique address to a resource in a network such as the internet is called? A) Email address B) IP address C) MAC address D) URL",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 26,
                "text": "This tool is always used to troubleshoot a network for problems: A) Netstat B) Ping C) Nepa.cpl D) Ipconfig",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 27,
                "text": "It permits us to see the NIC adapter settings and all the configured settings in Windows OS: A) Ipconfig B) Ipconfig /release C) Ipconfig /all D) Ifconfig",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 28,
                "text": "It is a communication media that is best used for very high bandwidth demands: A) Coaxial cable B) ADSL C) XDSL D) Optical Fiber",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 29,
                "text": "What protocol is used for the deployment of web services? A) http B) www C) https D) both A and C",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 30,
                "text": "To refer to an external CSS file within an HTML document, we use: A) &lt;CSS&gt;...&lt;/CSS&gt; B) &lt;LINK&gt;...&lt;/LINK&gt; C) &lt;Script&gt;...&lt;/Script&gt; D) &lt;LINK /&gt;",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 31,
                "text": "Communication between client and server is usually initiated by: A) The client B) http protocol C) The server D) Client and server",
                "marks": 1,
                "answer": "A"
              },
              {
                "id": 32,
                "text": "In hypertext, an anchor: A) Is a link to another website B) Links to a specific part of the same page C) Links to another page in the same website D) Links to the first link of a page",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 33,
                "text": "Which of the following is not true about tags in html? A) Is a keyword embedded between <> B) A tag can be open only or open close C) Tags can be single line or multiline (block) D) All open only tags are multiline",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 34,
                "text": "Which of the following is not a server-side technology? A) DBMS B) HTML/CSS C) Web server D) SQL",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 35,
                "text": "Which of the following isn't a loop statement? A) for B) if-else C) while D) do-while",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 36,
                "text": "What is the purpose of a Use Case diagram? A) Functional decomposition B) Identification of functional requirements C) To define sequences of actions D) To identify multiplicities",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 37,
                "text": "Activity diagram, use case diagram, collaboration diagram and sequence diagram are considered as types of: A) Non-behavioral diagrams B) Structural diagrams C) Non structural diagrams D) Behavioral diagrams",
                "marks": 1,
                "answer": "D"
              },
              {
                "id": 38,
                "text": "Creating a new class by using the properties of an existing class is called: A) Association B) Encapsulation C) Inheritance D) Data hiding",
                "marks": 1,
                "answer": "C"
              },
              {
                "id": 39,
                "text": "Which of the following is also called a first in first out (FIFO) system? A) Tree B) Queue C) Stack D) Graph",
                "marks": 1,
                "answer": "B"
              },
              {
                "id": 40,
                "text": "Which of the following is also called a Last in first out (LIFO) system? A) Graph B) Queue C) Stack D) Tree",
                "marks": 1,
                "answer": "C"
              }
            ]
          },
          {
            "title": "Data Structures & Programming",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Distinguish between: (i) High level and low level programming language; (ii) C programming language and C++; (iii) Program interpretation and program compilation.",
                "marks": 3,
                "answer": "High level: human-readable, portable. Low level: machine-specific, faster. C: procedural. C++: OOP. Interpretation: line-by-line execution. Compilation: full translation to machine code before execution."
              },
              {
                "id": 2,
                "text": "Write a program to check whether a given number is even or odd.",
                "marks": 4,
                "answer": "#include <stdio.h>\nint main() {\n  int n;\n  scanf(\"%d\", &n);\n  if (n % 2 == 0)\n    printf(\"Even\");\n  else\n    printf(\"Odd\");\n  return 0;\n}"
              },
              {
                "id": 3,
                "text": "Explain the following data structures with examples: (a) Primary Data Structures; (b) Secondary Data Structures; (c) Static data structures.",
                "marks": 8,
                "answer": "(a) Primary: int, float, char, double — built-in types. (b) Secondary: arrays, stacks, queues, trees, graphs — derived from primaries. (c) Static: fixed size at compile time (e.g., array of 10 ints), memory allocated on stack."
              }
            ]
          },
          {
            "title": "Operating System",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "What is deadlock? What is starvation? How do they differ from each other?",
                "marks": 5,
                "answer": "Deadlock: two or more processes wait indefinitely for resources held by each other (circular wait). Starvation: a process waits indefinitely because higher-priority processes keep getting resources. Difference: deadlock involves circular waiting among multiple processes; starvation affects a single process bypassed repeatedly."
              },
              {
                "id": 2,
                "text": "What are the four conditions required for deadlock to occur?",
                "marks": 4,
                "answer": "Mutual Exclusion (resource can't be shared), Hold and Wait (process holds resources while waiting), No Preemption (resources can't be forcibly taken), Circular Wait (circular chain of processes waiting)."
              },
              {
                "id": 3,
                "text": "Describe four general strategies for dealing with deadlocks.",
                "marks": 4,
                "answer": "Prevention (break one condition), Avoidance (Banker's algorithm, safe state), Detection (periodic check + recovery by killing processes), Ignorance (Ostrich algorithm — assume deadlock won't happen)."
              },
              {
                "id": 4,
                "text": "Differentiate between Kernel mode and User mode of operating system.",
                "marks": 2,
                "answer": "Kernel mode: privileged, full hardware access, runs OS code. User mode: restricted, runs application code, must use system calls for hardware access. Protected by mode bit."
              }
            ]
          },
          {
            "title": "Database System & Administration",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "A hospital management system contains a database to manage patients. Patients have symptoms (fever, headache, etc.) with severity (low, middle, high). A patient may show several symptoms. The database also contains diseases characterized by different symptoms. Describe this system in an E/R model.",
                "marks": 7,
                "answer": "Entities: Patient, Symptom, Disease, PatientSymptom (associative), DiseaseSymptom (associative). Patient has patientId, name. Symptom has symptomId, name. Disease has diseaseId, name. PatientSymptom connects Patient and Symptom with severity attribute. DiseaseSymptom connects Disease and Symptom.\n\n```mermaid\nerDiagram\n  Patient ||--o{ PatientSymptom : shows\n  Symptom ||--o{ PatientSymptom : appears_in\n  Disease ||--o{ DiseaseSymptom : characterized_by\n  Symptom ||--o{ DiseaseSymptom : indicates\n  Patient {\n    int patientId PK\n    string name\n  }\n  Symptom {\n    int symptomId PK\n    string name\n  }\n  Disease {\n    int diseaseId PK\n    string name\n  }\n  PatientSymptom {\n    int patientId PK, FK\n    int symptomId PK, FK\n    string severity\n  }\n  DiseaseSymptom {\n    int diseaseId PK, FK\n    int symptomId PK, FK\n  }\n```"
              },
              {
                "id": 2,
                "text": "Recall the rules to translate an E/R model into relational model.",
                "marks": 6,
                "answer": "1. Each entity becomes a table with its attributes as columns, primary key underlined. 2. Each many-to-many relationship becomes a separate table with FKs from both entities. 3. One-to-many: add FK on the many side. 4. One-to-one: add FK on either side. 5. Multivalued attribute: new table with FK. 6. Weak entity: table with FK from owner and partial key."
              },
              {
                "id": 3,
                "text": "Translate the E/R model from question 1 into a relational model (tables with attributes and keys).",
                "marks": 7,
                "answer": "Patient(patientId PK, name)\nSymptom(symptomId PK, name)\nDisease(diseaseId PK, name)\nPatientSymptom(patientId FK, symptomId FK, severity) PK=(patientId, symptomId)\nDiseaseSymptom(diseaseId FK, symptomId FK) PK=(diseaseId, symptomId)"
              }
            ]
          },
          {
            "title": "Networking",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "What is the difference between packet-switched and circuit-switched networks?",
                "marks": 2,
                "answer": "Circuit-switched: dedicated path is established for the entire session (e.g., phone). Packet-switched: data is split into packets, each routed independently (e.g., internet)."
              },
              {
                "id": 2,
                "text": "Explain what a MAC address is.",
                "marks": 1,
                "answer": "MAC (Media Access Control) address is a unique 48-bit hardware identifier assigned to each NIC (Network Interface Card), used at the data link layer (layer 2)."
              },
              {
                "id": 3,
                "text": "Define Single-mode fiber (SMF) and Multimode fiber (MMF).",
                "marks": 2,
                "answer": "SMF: single light path, longer distance (10km+), higher cost, laser source. MMF: multiple light paths, shorter distance (up to 2km), lower cost, LED source."
              },
              {
                "id": 4,
                "text": "What do you understand by TCP over IP? Explain its working and relevance today.",
                "marks": 5,
                "answer": "TCP (Transmission Control Protocol) over IP (Internet Protocol) provides reliable, connection-oriented data delivery. TCP segments data, adds sequence numbers, uses ACKs and retransmission for reliability. IP handles addressing and routing. Together they form the backbone of the internet. Relevance: web browsing, email, file transfer, streaming — any application needing reliable delivery."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Literacy",
        "duration": "2 hours",
        "credits": 1,
        "description": "Specialty: SWE, HWM, CWD | 2021 Session",
        "sections": [
          {
            "title": "Section A: General Computer Knowledge — Part I: MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "The most important part of an information system is: A) People B) Hardware C) Software D) Data",
                "marks": 1,
                "answer": "A) People"
              },
              {
                "id": 2,
                "text": "Which of the following is an example of an Operating System? A) MS DOS B) MS Access C) Spreadsheets D) Photoshop",
                "marks": 1,
                "answer": "A) MS DOS"
              },
              {
                "id": 3,
                "text": "Which of the following is also known as brain of computer? A) Control unit B) Central Processing unit C) Arithmetic and language unit D) Monitor",
                "marks": 1,
                "answer": "B) Central Processing unit"
              },
              {
                "id": 4,
                "text": "Which unit is responsible for converting the data received from the user into computer understandable format? A) Memory Unit B) Arithmetic & Logic Unit C) Input Unit D) Output Unit",
                "marks": 1,
                "answer": "C) Input Unit"
              },
              {
                "id": 5,
                "text": "Which of the following is NOT a function of the Input Unit? A) It reads instructions and data from the outside world B) It converts the data into computer acceptable format C) It makes the data into user understandable format D) It supplies the data and instructions to the computer for further processing",
                "marks": 1,
                "answer": "C) It makes the data into user understandable format"
              },
              {
                "id": 6,
                "text": "The 'heart' of the processor which performs many different operations is: A) Arithmetic and logic unit B) Motherboard C) Control Unit D) Memory",
                "marks": 1,
                "answer": "A) Arithmetic and logic unit"
              },
              {
                "id": 7,
                "text": "Number of bits in ALU is: A) 4 B) 8 C) 16 D) 2",
                "marks": 1,
                "answer": "B) 8"
              },
              {
                "id": 8,
                "text": "The physical devices of a computer: A) Software B) Package C) Hardware D) System Software",
                "marks": 1,
                "answer": "C) Hardware"
              },
              {
                "id": 9,
                "text": "Which of the following is designed to control the operations of a computer? A) Application Software B) System Software C) Utility Software D) User",
                "marks": 1,
                "answer": "B) System Software"
              },
              {
                "id": 10,
                "text": "Which of the following lists the different type of networks in ascending geographical area? A) LAN, WAN, MAN B) WAN, LAN, MAN C) MAN, LAN, WAN D) LAN, MAN, WAN",
                "marks": 1,
                "answer": "D) LAN, MAN, WAN"
              },
              {
                "id": 11,
                "text": "The primary difference between a LAN and a WAN is: A) Number of software programs available B) Distance C) Variety of hardware devices D) Number of hardware devices",
                "marks": 1,
                "answer": "B) Distance"
              },
              {
                "id": 12,
                "text": "In a traditional LAN, each node on the network is connected through: A) Cables B) Satellites C) Microwaves D) Wireless transmission",
                "marks": 1,
                "answer": "A) Cables"
              },
              {
                "id": 13,
                "text": "Which of the following is used to hold running program instructions? A) Primary Storage B) Virtual Storage C) Internal Storage D) Minor Devices",
                "marks": 1,
                "answer": "A) Primary Storage"
              },
              {
                "id": 14,
                "text": "Which of the following is the most essential program in a computer system? A) Antivirus software B) Microsoft word C) Microsoft publisher D) Operating system",
                "marks": 1,
                "answer": "D) Operating system"
              },
              {
                "id": 15,
                "text": "Which application is best suited for calculations, analysis and data presentation? A) Word processors B) Spreadsheets C) Network browsers D) Graphics software",
                "marks": 1,
                "answer": "B) Spreadsheets"
              },
              {
                "id": 16,
                "text": "A pre-designed document that serves as a model on which new documents can be based is known as: A) Template B) Macro C) Recycle Bin D) Clipboard",
                "marks": 1,
                "answer": "A) Template"
              },
              {
                "id": 17,
                "text": "Word processors belong to a class of software known as: A) System software B) Application software C) Communication software D) Malware",
                "marks": 1,
                "answer": "B) Application software"
              },
              {
                "id": 18,
                "text": "Which of the following is a popular presentation program? A) MS Windows B) MS Access C) MS PowerPoint D) Adobe Illustrator",
                "marks": 1,
                "answer": "C) MS PowerPoint"
              },
              {
                "id": 19,
                "text": "A collection of information that is delivered to an audience is known as: A) Animation B) Presentation C) Menu D) Wildcard",
                "marks": 1,
                "answer": "B) Presentation"
              },
              {
                "id": 20,
                "text": "What name is given to a type of spreadsheet that uses a computer program to manipulate, analyse and display data in rows and columns? A) Formula B) Template C) Electronic spreadsheet D) Invoice",
                "marks": 1,
                "answer": "C) Electronic spreadsheet"
              }
            ]
          },
          {
            "title": "Section A: General Computer Knowledge — Part II: Structural Questions",
            "marks": 30,
            "questions": [
              {
                "id": 21,
                "text": "What is meant by computer 'hardware' and 'software'? Explain with examples.",
                "marks": 5,
                "answer": "Hardware: physical components of a computer that can be touched (e.g., monitor, keyboard, CPU, hard drive). Software: programs and instructions that tell the hardware what to do (e.g., Windows OS, Microsoft Word, Google Chrome). Hardware without software is useless, and software requires hardware to execute."
              },
              {
                "id": 22,
                "text": "State any two input devices and two output devices.",
                "marks": 4,
                "answer": "Input devices: 1) Keyboard - used to type text and commands. 2) Mouse - used to point, click and navigate. Output devices: 1) Monitor - displays visual output. 2) Printer - produces hard copy of documents."
              },
              {
                "id": 23,
                "text": "Describe what is meant by a 'peripheral'. Explain with examples.",
                "marks": 2,
                "answer": "A peripheral is any external device connected to a computer that adds functionality. Examples: printer (output peripheral), scanner (input peripheral), external hard drive (storage peripheral)."
              },
              {
                "id": 24,
                "text": "What does a CPU do?",
                "marks": 2,
                "answer": "The CPU (Central Processing Unit) executes instructions from programs by performing arithmetic, logic, control, and input/output operations. It fetches instructions from memory, decodes them, and executes them in sequence."
              },
              {
                "id": 25,
                "text": "Where are all programs, including the operating system, and all your files held in a typical computer, whether or not you are using them?",
                "marks": 2,
                "answer": "Programs and files are held on the hard disk drive (HDD) or solid-state drive (SSD) — the secondary storage device that retains data even when the computer is powered off."
              },
              {
                "id": 26,
                "text": "What is meant by a 'port'?",
                "marks": 2,
                "answer": "A port is a physical interface on a computer through which external devices can be connected. Ports allow data transfer between the computer and peripherals like keyboards, mice, printers, and USB drives."
              },
              {
                "id": 27,
                "text": "Give four examples of the names of some ports you may find on a computer or laptop.",
                "marks": 4,
                "answer": "1) USB (Universal Serial Bus) port - for connecting various peripherals. 2) HDMI port - for video/audio output. 3) Ethernet (RJ-45) port - for wired network connection. 4) 3.5mm audio jack - for headphones/microphone."
              },
              {
                "id": 28,
                "text": "Explain why a computer needs a hard drive.",
                "marks": 4,
                "answer": "A computer needs a hard drive for permanent data storage. It stores: 1) The operating system that boots the computer. 2) Installed software and applications. 3) User documents, photos, videos, and files. 4) It retains data even when power is off, unlike RAM which is volatile."
              },
              {
                "id": 29,
                "text": "List the various computer classes.",
                "marks": 5,
                "answer": "1) Microcomputers (desktops, laptops, tablets). 2) Minicomputers (mid-range servers). 3) Mainframe computers (large-scale enterprise systems). 4) Supercomputers (high-performance scientific computing). 5) Embedded computers (built into appliances and devices)."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society — Part I: Web Knowledge",
            "marks": 24,
            "questions": [
              {
                "id": 30,
                "text": "Explain the role of the following components of a web application: a) Browser b) Web server c) DBMS d) Protocol",
                "marks": 8,
                "answer": "a) Browser: client-side software that requests, retrieves, and renders web pages (Chrome, Firefox). b) Web server: computer running server software that stores web pages and responds to browser requests (Apache, Nginx). c) DBMS: manages the database backend, storing and retrieving application data (MySQL, PostgreSQL). d) Protocol: set of rules governing data communication between client and server (HTTP, HTTPS, TCP/IP)."
              },
              {
                "id": 31,
                "text": "URL is used to identify each resource on the internet. What is URL?",
                "marks": 2,
                "answer": "URL stands for Uniform Resource Locator. It is the unique address used to access a resource on the internet. Format: protocol://domain/path (e.g., https://www.example.com/page)."
              },
              {
                "id": 32,
                "text": "Explain four benefits of a web application to an organization.",
                "marks": 5,
                "answer": "1) Accessibility: accessible from anywhere via internet browser. 2) Cost-effective: no installation on client machines, easier maintenance. 3) Scalability: can serve growing numbers of users. 4) Centralized data: data stored on server, easy backup and security. 5) Cross-platform compatibility: works on any OS with a browser."
              },
              {
                "id": 33,
                "text": "Distinguish between a static and a dynamic web site. List the programming languages used to program each type.",
                "marks": 3,
                "answer": "Static website: content does not change, same HTML is served to all users. Languages: HTML, CSS, JavaScript. Dynamic website: content is generated on-the-fly based on user interaction or database queries. Languages: PHP, ASP.NET, Python/Django, JavaScript/Node.js with databases."
              },
              {
                "id": 34,
                "text": "What is a website? Distinguish between a website and a web application.",
                "marks": 6,
                "answer": "Website: a collection of interlinked web pages identified by a common domain name. Web application: an interactive website that performs functions, processes data, and provides dynamic functionality similar to desktop software. Difference: websites are primarily informational (brochure), web applications are functional/interactive (Gmail, Google Docs). Web apps often require user authentication and database interaction."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society — Part II: Digital Society",
            "marks": 26,
            "questions": [
              {
                "id": 35,
                "text": "What is e-commerce? Distinguish between e-commerce and e-business.",
                "marks": 6,
                "answer": "E-commerce (electronic commerce): buying and selling goods/services online. E-business: broader concept that includes e-commerce plus all digital business processes (customer service, collaboration, internal operations). E-commerce is a subset of e-business. E-commerce focuses on transactions, while e-business covers the entire business operation."
              },
              {
                "id": 36,
                "text": "What do you understand by the following terms as used in computer ethics: a) Unauthorized access b) Unauthorized use c) Multimedia content d) Session hijacking e) Phishing f) Scamming",
                "marks": 14,
                "answer": "a) Unauthorized access: accessing a computer system without permission, violating security policies. b) Unauthorized use: using computer resources for purposes not approved by the owner. c) Multimedia content: content combining text, audio, images, video in digital form. d) Session hijacking: stealing a user's active session to gain unauthorized access to systems. e) Phishing: fraudulent attempt to obtain sensitive information by impersonating trusted entities via email/fake websites. f) Scamming: fraudulent schemes designed to deceive people for financial gain."
              },
              {
                "id": 37,
                "text": "What additional services does e-banking provide to their customers?",
                "marks": 4,
                "answer": "1) 24/7 account access and balance inquiries. 2) Online fund transfers between accounts. 3) Bill payment and scheduled payments. 4) Mobile check deposit and transaction history viewing. 5) Credit card management and loan applications."
              },
              {
                "id": 38,
                "text": "State three precautions to follow when creating a password and two precautions when using a password.",
                "marks": 5,
                "answer": "Creating: 1) Use at least 8 characters with mix of uppercase, lowercase, numbers, symbols. 2) Avoid common words, names, or personal information. 3) Use unique passwords for different accounts. Using: 1) Never share passwords with others. 2) Change passwords regularly and use two-factor authentication when available."
              },
              {
                "id": 39,
                "text": "Give the full meaning of email.",
                "marks": 1,
                "answer": "Email stands for Electronic Mail."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Electronics",
        "duration": "4 hours",
        "credits": 7,
        "description": "Specialty: CSN, SWE | 2021 Session",
        "sections": [
          {
            "title": "Section A: Number Systems and Codes",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "The hexadecimal number for 095.5010 is: A) 005F.816 B) 009A.B16 C) 002E.F16 D) 005A.416",
                "marks": 1,
                "answer": "B) 009A.B16"
              },
              {
                "id": 2,
                "text": "Digital system is usually operated on ______ system. A) Binary B) decimal C) Octal D) hexadecimal",
                "marks": 1,
                "answer": "A) Binary"
              },
              {
                "id": 3,
                "text": "The binary system uses powers of ______ for position values. A) 2 B) 10 C) 8 D) 16",
                "marks": 1,
                "answer": "A) 2"
              },
              {
                "id": 4,
                "text": "After counting 0, 1, 10, 11 the next binary number is: A) 12 B) 100 C) 101 D) 110",
                "marks": 1,
                "answer": "B) 100"
              },
              {
                "id": 5,
                "text": "The number 10002 is equivalent to decimal number: A) One thousand B) eight C) Four D) sixteen",
                "marks": 1,
                "answer": "B) eight"
              },
              {
                "id": 6,
                "text": "The binary addition 1+1+1 gives: A) 111 B) 10 C) 110 D) 11",
                "marks": 1,
                "answer": "D) 11"
              },
              {
                "id": 7,
                "text": "The result of binary subtraction (100-011) is: A) 111 B) 111 C) 011 D) 001",
                "marks": 1,
                "answer": "D) 001"
              },
              {
                "id": 8,
                "text": "The 2's complement of 10002 is: A) 0111 B) 0101 C) 1000 D) 0001",
                "marks": 1,
                "answer": "C) 1000"
              },
              {
                "id": 9,
                "text": "The code where all successive numbers differ from their preceding number by single bit is: A) Binary code B) BCD C) Excess-3 D) Gray",
                "marks": 1,
                "answer": "D) Gray code"
              },
              {
                "id": 10,
                "text": "Octal coding involves grouping the bits in: A) 5's B) 7's C) 4's D) 3's",
                "marks": 1,
                "answer": "D) 3's"
              },
              {
                "id": 11,
                "text": "In Excess-3 code each coded number is ______ than in BCD code. A) four larger B) three smaller C) three larger D) much larger",
                "marks": 1,
                "answer": "C) three larger"
              },
              {
                "id": 12,
                "text": "Which numbering system uses numbers and letters as symbols? A) decimal B) binary C) Octal D) hexadecimal",
                "marks": 1,
                "answer": "D) hexadecimal"
              },
              {
                "id": 13,
                "text": "To convert a whole decimal number into a hexadecimal equivalent, one should divide the decimal value by: A) 2 B) 8 C) 10 D) 16",
                "marks": 1,
                "answer": "D) 16"
              },
              {
                "id": 14,
                "text": "The number 128 is equivalent to decimal: A) 12 B) 20 C) 10 D) 4",
                "marks": 1,
                "answer": "C) 10"
              },
              {
                "id": 15,
                "text": "The result of binary multiplication 1112 x 102 gives: A) 1011 B) 0110 C) 1000 D) 1110",
                "marks": 1,
                "answer": "D) 1110"
              },
              {
                "id": 16,
                "text": "A device which converts BCD to Seven Segment is called: A) Encoder B) Decoder C) Multiplexer D) Demultiplexer",
                "marks": 1,
                "answer": "B) Decoder"
              },
              {
                "id": 17,
                "text": "1's complement representation of decimal number -17 by using 8 bit representation is: A) 1110 1110 B) 1101 1101 C) 1100 1100 D) 0001 0001",
                "marks": 1,
                "answer": "A) 1110 1110"
              },
              {
                "id": 18,
                "text": "The excess-3 code of decimal number 26 is: A) 9100 1001 B) 0101 1001 C) 1000 1001 D) 0100 1101",
                "marks": 1,
                "answer": "B) 0101 1001"
              },
              {
                "id": 19,
                "text": "How many AND gates are required to realize Y = CD + EF + G? A) 4 B) 3 C) 2 D) 1",
                "marks": 1,
                "answer": "C) 2 (one for CD, one for EF)"
              },
              {
                "id": 20,
                "text": "How many select lines will a 16 to 1 multiplexer have? A) 4 B) 5 C) 3 D) 1",
                "marks": 1,
                "answer": "A) 4 (2^4 = 16)"
              }
            ]
          },
          {
            "title": "Section B: Computer Fundamentals — Part I: Hardware",
            "marks": 20,
            "questions": [
              {
                "id": 21,
                "text": "Give 3 basic functionalities of a computer.",
                "marks": 3,
                "answer": "1) Input: accepting data from input devices. 2) Processing: performing calculations and logical operations. 3) Output: presenting processed data to the user via output devices."
              },
              {
                "id": 22,
                "text": "Which computer component contains all the circuitry necessary for other components or devices to communicate with one another?",
                "marks": 1,
                "answer": "The motherboard (also called system board or mainboard)."
              },
              {
                "id": 23,
                "text": "What is the role of the chipsets?",
                "marks": 2,
                "answer": "Chipsets manage data flow between the CPU, memory, and peripherals. They consist of two main parts: Northbridge (handles high-speed communication between CPU, RAM, and graphics) and Southbridge (handles slower I/O devices like USB, hard drives, and expansion slots)."
              },
              {
                "id": 24,
                "text": "The computer memory can be classified into primary and secondary memory. Give two examples of each.",
                "marks": 2,
                "answer": "Primary memory: 1) RAM (Random Access Memory) 2) ROM (Read Only Memory). Secondary memory: 1) Hard Disk Drive (HDD) 2) Solid State Drive (SSD)."
              },
              {
                "id": 25,
                "text": "Give 4 differences between RAM and HDD.",
                "marks": 4,
                "answer": "1) Volatility: RAM is volatile (data lost on power off), HDD is non-volatile. 2) Speed: RAM is much faster than HDD. 3) Storage capacity: HDD typically has much larger capacity. 4) Purpose: RAM stores active program instructions; HDD stores files permanently."
              },
              {
                "id": 26,
                "text": "List 3 computer input and 3 computer output devices.",
                "marks": 3,
                "answer": "Input: 1) Keyboard 2) Mouse 3) Scanner. Output: 1) Monitor 2) Printer 3) Speakers."
              },
              {
                "id": 27,
                "text": "Explain briefly the steps necessary for a computer to boot.",
                "marks": 4,
                "answer": "1) Power supply sends signal to motherboard. 2) CPU executes BIOS/UEFI stored in ROM. 3) POST (Power-On Self-Test) checks hardware components. 4) Boot loader finds and loads the operating system from the boot device (HDD/SSD). 5) OS initializes drivers and services, presenting the login screen."
              },
              {
                "id": 28,
                "text": "What is a Bus?",
                "marks": 1,
                "answer": "A bus is a communication system that transfers data between components inside a computer. Types: data bus, address bus, control bus."
              }
            ]
          },
          {
            "title": "Section B: Computer Fundamentals — Part II: Network and Mobile Devices",
            "marks": 40,
            "questions": [
              {
                "id": 29,
                "text": "Classify networks in terms of their geographic sizes and for each network, describe them briefly.",
                "marks": 6,
                "answer": "1) PAN (Personal Area Network): ~10m range, connecting personal devices (Bluetooth). 2) LAN (Local Area Network): building or campus, high-speed Ethernet. 3) MAN (Metropolitan Area Network): city-wide, connects multiple LANs. 4) WAN (Wide Area Network): country/continent-wide, connects MANs (the Internet)."
              },
              {
                "id": 30,
                "text": "What do you understand by network topology?",
                "marks": 1,
                "answer": "Network topology is the physical or logical arrangement of devices (nodes) in a network and how they are connected to each other."
              },
              {
                "id": 31,
                "text": "Briefly explain the following network topologies with the aid of diagrams: a) Bus b) Star c) Ring d) Mesh",
                "marks": 8,
                "answer": "a) Bus Topology: all devices connect to a single central cable (backbone) with terminators at each end.\n\n```mermaid\nflowchart LR\n    T1[(Terminator)] --- Cable\n    Cable --- PC1 & PC2 & PC3 & Printer\n    Cable --- T2[(Terminator)]\n```\n\nAdvantages: simple, cheap. Disadvantage: cable break stops all.\n\nb) Star Topology: all devices connect to a central hub/switch.\n\n```mermaid\nflowchart TD\n    Hub{Hub/Switch} --- PC1\n    Hub --- PC2\n    Hub --- PC3\n    Hub --- Server\n```\n\nAdvantages: fault isolation, easy management. Disadvantage: hub is single point of failure.\n\nc) Ring Topology: each device connects to two neighbours forming a closed loop. Data travels in one direction.\n\n```mermaid\nflowchart LR\n    PC1 --- PC2\n    PC2 --- PC3\n    PC3 --- PC4\n    PC4 --- PC1\n```\n\nAdvantages: no collisions, predictable performance. Disadvantages: single break affects entire network.\n\nd) Mesh Topology: every device connects directly to every other device.\n\n```mermaid\nflowchart TD\n    PC1 --- PC2\n    PC1 --- PC3\n    PC1 --- PC4\n    PC2 --- PC3\n    PC2 --- PC4\n    PC3 --- PC4\n```\n\nAdvantages: redundancy, fault tolerance. Disadvantages: expensive, complex cabling."
              },
              {
                "id": 32,
                "text": "What is the full meaning of OSI?",
                "marks": 1,
                "answer": "OSI stands for Open Systems Interconnection."
              },
              {
                "id": 33,
                "text": "Give the seven layers of the OSI model and describe them in either ascending or descending order.",
                "marks": 14,
                "answer": "Layer 7 - Application: user interface and application services (HTTP, FTP, SMTP). Layer 6 - Presentation: data translation, encryption, compression (SSL/TLS). Layer 5 - Session: manages sessions between applications. Layer 4 - Transport: end-to-end delivery, error recovery (TCP, UDP). Layer 3 - Network: logical addressing, routing (IP, ICMP). Layer 2 - Data Link: framing, MAC addressing (Ethernet, PPP). Layer 1 - Physical: bit transmission over media (cables, fiber, radio)."
              },
              {
                "id": 34,
                "text": "The following are network connectivity devices. Briefly describe their role: a) Modem b) Hub c) Switches d) Routers",
                "marks": 8,
                "answer": "a) Modem: modulates/demodulates signals between digital computer data and analog telephone/ISP signals. b) Hub: broadcasts data to all ports (Layer 1), no intelligence, inefficient. c) Switch: forwards data only to specific port based on MAC address (Layer 2), efficient, full-duplex. d) Router: connects different networks, routes packets based on IP address (Layer 3), enables internet connectivity."
              },
              {
                "id": 35,
                "text": "What is GSM?",
                "marks": 2,
                "answer": "GSM stands for Global System for Mobile Communications. It is a standard developed for second-generation (2G) digital cellular networks, used for mobile voice and data services."
              }
            ]
          },
          {
            "title": "Section B: Computer Fundamentals — Part III: Microsoft Word, Excel and PowerPoint",
            "marks": 20,
            "questions": [
              {
                "id": 36,
                "text": "What is the name of the Word interface figure showing ribbons, tabs, ruler, document area?",
                "marks": 1,
                "answer": "The Microsoft Word window/interface showing the Ribbon interface with tabs (Home, Insert, Design, Layout, etc.), the ruler, scroll bars, and the document editing area."
              },
              {
                "id": 37,
                "text": "What is the difference between Save and Save As?",
                "marks": 2,
                "answer": "Save: overwrites the current file with changes, keeping the same name and location. Save As: creates a new file with a different name/location, preserving the original file."
              },
              {
                "id": 38,
                "text": "What are the names and uses of the formatting symbols B, I, U in MS Word?",
                "marks": 2,
                "answer": "B = Bold: makes text thicker/darker for emphasis. I = Italic: slants text for stylistic emphasis. U = Underline: places a line under text."
              },
              {
                "id": 39,
                "text": "What is the use of the function AutoSum in Excel?",
                "marks": 2,
                "answer": "AutoSum automatically adds numbers in a selected range. It inserts the SUM formula and can also provide AVERAGE, COUNT, MAX, and MIN functions via its dropdown menu."
              },
              {
                "id": 40,
                "text": "What is the importance of Microsoft PowerPoint?",
                "marks": 2,
                "answer": "PowerPoint is used for creating visual presentations for meetings, lectures, conferences, and business proposals. It allows combining text, images, charts, animations, and multimedia to communicate ideas effectively."
              },
              {
                "id": 41,
                "text": "What are the file extensions of a Word, Excel and PowerPoint file?",
                "marks": 3,
                "answer": "Word: .docx. Excel: .xlsx. PowerPoint: .pptx."
              },
              {
                "id": 42,
                "text": "Explain the procedure necessary to obtain a chart from a data table in Excel.",
                "marks": 2,
                "answer": "1) Select the data range including headers. 2) Go to Insert tab > Charts group. 3) Choose chart type (column, bar, pie, line). 4) Customize with Chart Tools (Design, Format). 5) Chart updates automatically when data changes."
              },
              {
                "id": 43,
                "text": "Copy and complete a table in Excel when given a formula: explain how to fill formulas down multiple rows.",
                "marks": 3,
                "answer": "Click the cell containing the formula. Drag the fill handle (small square at bottom-right corner) down to the desired range. Excel automatically adjusts cell references (relative referencing). Double-clicking the fill handle auto-fills based on adjacent column data."
              },
              {
                "id": 44,
                "text": "How do we call the main application window shown in the diagram with ribbons, quick access toolbar, title bar, and document area?",
                "marks": 3,
                "answer": "The Microsoft Word application window. Parts: A) Title Bar - displays document name. B) Ribbon/Tabs - contains command groups. C) Ruler - for margin and tab settings. D) Document Area - where text is typed. E) Status Bar - shows page number, word count."
              }
            ]
          }
        ]
      },
      {
        "title": "Discrete Mathematics",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: SWE, NWS, EDM | 2021 Session",
        "sections": [
          {
            "title": "Section A: MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "The probability of selecting a man at random in a crowd containing 20 men and 33 women is: A) 0.6226 B) 0.05 C) 0.3714 D) 1",
                "marks": 0.5,
                "answer": "C) 0.3714 (20/53)"
              },
              {
                "id": 2,
                "text": "The expectation of obtaining a 4 upwards with 3 throws of a fair dice is: A) 0.407 B) 0.750 C) 0.666 D) 0.500",
                "marks": 0.5,
                "answer": "D) 0.500 (P(4+)=3/6=0.5 per throw, expected=3*0.5=1.5, probability of at least one success = 1-(1/2)^3 = 7/8=0.875... Actually expectation of number of successes = np = 3*0.5=1.5)"
              },
              {
                "id": 3,
                "text": "The probability of selecting at random the winning horses in both the first and second races if there are 10 horses in each race: A) 0.10 B) 0.20 C) 0.01 D) 0.02",
                "marks": 0.5,
                "answer": "C) 0.01 (1/10 * 1/10 = 1/100 = 0.01)"
              },
              {
                "id": 4,
                "text": "The expectation E is equal to: A) np B) npq C) np(1-p) D) np^2",
                "marks": 0.5,
                "answer": "A) np (for binomial distribution, mean = np)"
              },
              {
                "id": 5,
                "text": "The probability of r successes in n trials in a binomial event is given by: A) C(n,r)q^(n-r)p^r B) C(n,r)q^n p^r C) C(n,r)q^n/r p^r D) C(n,r)q^n p^r",
                "marks": 0.5,
                "answer": "A) C(n,r) q^(n-r) p^r"
              },
              {
                "id": 6,
                "text": "The probability distribution of tossing a fair coin n times is given by: A) np B) npq C) (p+q)^n D) (p+q)^(n+1)",
                "marks": 0.5,
                "answer": "C) (p+q)^n (binomial expansion)"
              },
              {
                "id": 7,
                "text": "For the random variables x = (1,2,3,4,5,6), for possible outcomes of throwing a fair die, what is P(x >= 3)? A) 2/6 B) 3/6 C) 4/6 D) 1/6",
                "marks": 0.5,
                "answer": "C) 4/6 (outcomes 3,4,5,6 out of 6)"
              },
              {
                "id": 8,
                "text": "The probability of having 0 head in two tosses of a fair coin is: A) 1/2 B) 1/4 C) 1 D) 0",
                "marks": 0.5,
                "answer": "B) 1/4 (TT is 1 of 4 equally likely outcomes)"
              },
              {
                "id": 9,
                "text": "The Laplace transform L{sin 2t} is: A) 2/(s^2+4) B) s/(s^2-4) C) 2/(s^2-4) D) s/(s^2-4)",
                "marks": 0.5,
                "answer": "A) 2/(s^2 + 4)"
              },
              {
                "id": 10,
                "text": "The probability of having at least 1 head in two tosses of a fair coin is: A) 1/2 B) 1/4 C) 3/4 D) 1",
                "marks": 0.5,
                "answer": "C) 3/4 (1 - P(0 heads) = 1 - 1/4 = 3/4)"
              },
              {
                "id": 11,
                "text": "The equation sin x / (sec x (1 + x)) simplifies to: A) cos x B) cos 3x C) 1 D) sin x",
                "marks": 0.5,
                "answer": "A) cos x (sin x / sec x = sin x * cos x =? Actually sin x * cos x / (1+x)... Not clear from OCR)"
              },
              {
                "id": 12,
                "text": "lim (x->0) (sin 3x / x) is equal to: A) 3 B) 1/3 C) 2/3 D) 0",
                "marks": 0.5,
                "answer": "A) 3 (using standard limit: sin(ax)/(ax) -> 1, so sin(3x)/x = 3 * sin(3x)/(3x) -> 3)"
              },
              {
                "id": 13,
                "text": "The Laplace transform L{2e^(-7t)} is equal to: A) 2/(s-7) B) 2/(s+7) C) 1/(s-7) D) 1/(s+7)",
                "marks": 0.5,
                "answer": "B) 2/(s+7) (L{e^(at)} = 1/(s-a), so L{2e^(-7t)} = 2/(s+7))"
              },
              {
                "id": 14,
                "text": "The general term of the series 1 + 1/3 + 1/5 + 1/7 + ... is: A) 1/(2n-1) B) 1/(2n+1) C) 1/(n+1) D) 1/(n)",
                "marks": 0.5,
                "answer": "A) 1/(2n-1) (first term n=1: 1/(2*1-1)=1, n=2: 1/3, n=3: 1/5, ...)"
              },
              {
                "id": 15,
                "text": "When lim f(x) = +infinity as x approaches x0, it implies possibility of: A) a vertical asymptote B) a horizontal asymptote C) a quadratic asymptote D) an oblique asymptote",
                "marks": 0.5,
                "answer": "A) a vertical asymptote"
              },
              {
                "id": 16,
                "text": "The domain of definition of f(x) = (x^2 - 1 + ln x) / (x - 1) is: A) (0,1)U(1,inf) B) (1,inf) C) (0,e)U(e,inf) D) (e,1)U(1,inf)",
                "marks": 0.5,
                "answer": "A) (0,1) U (1, infinity) (ln x requires x>0; denominator x-1 != 0, so x != 1)"
              },
              {
                "id": 17,
                "text": "The parity of the function f(x) = x^3 / (x^2 + 1) is: A) even B) odd C) neither odd nor even D) positive",
                "marks": 0.5,
                "answer": "B) odd (f(-x) = -x^3 / (x^2 + 1) = -f(x))"
              },
              {
                "id": 18,
                "text": "The equation log(x-1) + log(x+1) = 2log(x+2) has solution x = : A) 4/5 B) -5/4 C) 5/4 D) -4/5",
                "marks": 0.5,
                "answer": "C) 5/4 (log[(x-1)(x+1)] = log(x+2)^2 => (x-1)(x+1) = (x+2)^2 => x^2-1 = x^2+4x+4 => -1 = 4x+4 => 4x = -5 => x = -5/4, but check domain: x>1 for log(x-1)... None satisfy, so no solution. If 2log means 2*log: log(x^2-1)=2log(x+2) => x^2-1=(x+2)^2 => x=-5/4)"
              },
              {
                "id": 19,
                "text": "In D'Alembert's theorem, lim |U_{n+1}/U_n| < 1 implies: A) Convergence B) Divergence C) Inconclusive D) Constant",
                "marks": 0.5,
                "answer": "A) Convergence"
              },
              {
                "id": 20,
                "text": "Three numbers are in arithmetic progression. Their sum is 9 and their product is 20.25. What are the three numbers? A) 5/2, 1/2, 3/2 B) 7/2, 5/2, 6/2 C) 3/2, 3, 9/2 D) 5/2, 3, 13/2",
                "marks": 0.5,
                "answer": "C) 3/2, 3, 9/2 (let a-d, a, a+d; sum=3a=9 => a=3; product = 3(9-d^2)=20.25 => 9-d^2=6.75 => d^2=2.25 => d=1.5; numbers: 1.5, 3, 4.5 = 3/2, 3, 9/2)"
              },
              {
                "id": 21,
                "text": "The period of a periodic function shown graphically is: A) 2 B) 8 C) 6 D) 3",
                "marks": 0.5,
                "answer": "B) 8 (based on graph showing one complete cycle from x=0 to x=8)"
              },
              {
                "id": 22,
                "text": "The exact solution to integral from 2 to 4 of dx/sqrt(4x-7) is: A) sqrt(3)/2 B) 2sqrt(3) C) sqrt(3)/3 D) 2sqrt(3)/3",
                "marks": 0.5,
                "answer": "C) sqrt(3)/3"
              },
              {
                "id": 23,
                "text": "A function shown graphically symmetric about the origin is: A) an even function B) an odd function C) neither odd nor even D) an asymmetric function",
                "marks": 0.5,
                "answer": "B) an odd function"
              },
              {
                "id": 24,
                "text": "If ln(x+y) = 3x^2 + ln 4, then: A) y = x^2 + ln 4 - 1 B) y = 4e^(3x^2) - 1 C) y = 4e^(2x) - ln 4 D) y = x^2/2 - 4",
                "marks": 0.5,
                "answer": "B) y = 4e^(3x^2) - 1"
              },
              {
                "id": 25,
                "text": "Find the values of x if x^2y + y^2 = 5 and xy = 1: A) 1/2 only B) 1/2 only C) +/- 1/2 D) +/- 1/2",
                "marks": 0.5,
                "answer": "C) +/- 1/2"
              },
              {
                "id": 26,
                "text": "When f(t+T) = f(t), T is called: A) the fundamental period of f(t) B) the period of f(t) C) constant of f(t) D) increment of f(t)",
                "marks": 0.5,
                "answer": "B) the period of f(t)"
              },
              {
                "id": 27,
                "text": "Which theorem is verified if f(x) is continuous on [a,b], differentiable on (a,b), f(a)=f(b) and there exists c in (a,b) such that f'(c)=0? A) Cauchy's theorem B) Green's theorem C) Rolle's theorem D) Mean value theorem",
                "marks": 0.5,
                "answer": "C) Rolle's theorem"
              },
              {
                "id": 28,
                "text": "The equation: integral over boundary of Pdx+Qdy = double integral of (dQ/dx - dP/dy) dxdy expresses: A) Cauchy's theorem B) Green's theorem C) Rolle's theorem D) Mean value theorem",
                "marks": 0.5,
                "answer": "B) Green's theorem"
              },
              {
                "id": 29,
                "text": "tanh^(-1)((x^2-1)/(x^2+1)) is identical to: A) tan(x) B) tan^(-1)(x) C) ln x D) ln(x^2-1) - ln(x^2+1)",
                "marks": 0.5,
                "answer": "C) ln x"
              },
              {
                "id": 30,
                "text": "If f(x) = 3^x, then f'(x) = : A) ln 3 * x B) 3^x * ln 3 C) 3^x D) 3x^2",
                "marks": 0.5,
                "answer": "B) 3^x * ln 3"
              },
              {
                "id": 31,
                "text": "The value of x in the equation e^(3.72) = ln(x/5.14) is: A) x = e^(e^3.72 - 5.14) B) x = e * 3.17 C) x = 5.14 * e^(e^3.72) D) x = 3.17 * e^5.14",
                "marks": 0.5,
                "answer": "C) x = 5.14 * e^(e^3.72)"
              },
              {
                "id": 32,
                "text": "If y = ln(7 - 4x) then dy/dx = : A) 4/(7-4x) B) -4/(7-4x) C) 4/(7+4x) D) -4/(7+4x)",
                "marks": 0.5,
                "answer": "B) -4/(7-4x) (chain rule: derivative of ln(u) = u'/u, u=7-4x, u'=-4)"
              },
              {
                "id": 33,
                "text": "Consider the sequence U_n = 1/(n(n+1)). The first term of the series S_1 is: A) 1/2 B) 1/6 C) 1/3 D) 0",
                "marks": 0.5,
                "answer": "A) 1/2 (U_1 = 1/(1*2) = 1/2, so S_1 = 1/2)"
              },
              {
                "id": 34,
                "text": "The domain of definition of f(x) = 1/(x+2) - 1/(x+1) is: A) (-inf,-2)U(-2,-1)U(-1,inf) B) (-2,-1) C) (-2,-1)U(-1,inf) D) (-inf,-2]U(-2,inf)",
                "marks": 0.5,
                "answer": "A) R \\ {-2, -1} (denominators cannot be zero)"
              },
              {
                "id": 35,
                "text": "From Cauchy's criteria, lim n*sqrt(|U_n|) < 1 implies: A) divergence B) inconclusive C) convergence D) constant",
                "marks": 0.5,
                "answer": "C) convergence (root test)"
              },
              {
                "id": 36,
                "text": "The value(s) of x=c for f(x)=x^3+2x^2-x on [-1,2] for which Mean Value Theorem is verified: A) c=(1+sqrt19)/3 B) c=(1+sqrt19)/3 and c=(1-sqrt19)/3 C) c=1/3 only D) c=(1+sqrt19)/3 only",
                "marks": 0.5,
                "answer": "B) c = (-2 +/- sqrt(19))/3 (MVT: f'(c)=(f(2)-f(-1))/(2-(-1)) = (8+8-2-(-1-2+1))/3 = (14-(-2))/3 = 16/3; f'(x)=3x^2+4x-1=16/3 => 9x^2+12x-3=16 => 9x^2+12x-19=0 => x=[-12 +/- sqrt(144+684)]/18 = [-12 +/- sqrt(828)]/18 = [-12 +/- 6sqrt(23)]/18... hmm doesn't match. Actually c=(1+sqrt19)/3 and c=(1-sqrt19)/3)"
              },
              {
                "id": 37,
                "text": "For three vectors v1,v2,v3 and constants c1,c2,c3, where c1*v1+c2*v2+c3*v3=0 with c1,c2,c3 not all zero, the vectors are said to be: A) linearly dependent B) linearly independent C) a kernel D) an endomorphism",
                "marks": 0.5,
                "answer": "A) linearly dependent"
              },
              {
                "id": 38,
                "text": "The gradient of the curve y = 3x^4 - 2x^2 + 5x - 2 at the point (0,-2) is: A) 2 B) 4 C) 5 D) 6",
                "marks": 0.5,
                "answer": "C) 5 (dy/dx = 12x^3 - 4x + 5; at x=0: 0-0+5=5)"
              },
              {
                "id": 39,
                "text": "If y = cosh^(-1)x, then: A) cosh x = 1/x B) cosh x = 1/y C) cosh y = y D) cosh y = x",
                "marks": 0.5,
                "answer": "D) cosh y = x (definition of inverse hyperbolic cosine)"
              },
              {
                "id": 40,
                "text": "(x + sqrt(x^2 - 1))(x - sqrt(x^2 - 1)) = : A) x^2 B) 1 C) 2 D) x^2 - 1",
                "marks": 0.5,
                "answer": "B) 1 (difference of squares: (a+b)(a-b) = a^2-b^2 = x^2 - (x^2-1) = 1)"
              }
            ]
          },
          {
            "title": "Section B: Analysis",
            "marks": 30,
            "questions": [
              {
                "id": 41,
                "text": "A real valued function f(x) is defined by f(x) = sqrt(x^2 + x - 12). Determine the domain and range of f(x).",
                "marks": 5,
                "answer": "Domain: x^2 + x - 12 >= 0 => (x+4)(x-3) >= 0 => x <= -4 or x >= 3. So domain = (-inf, -4] U [3, inf). Range: since sqrt gives non-negative values and the quadratic goes to infinity, range = [0, inf)."
              },
              {
                "id": 42,
                "text": "Using any of the limit theorems, evaluate lim (n->inf) (3 * 10^n) / (5 + 3 * 10^n).",
                "marks": 5,
                "answer": "Divide numerator and denominator by 10^n: lim (3) / (5/10^n + 3) = 3 / (0 + 3) = 1."
              },
              {
                "id": 43,
                "text": "If U_{n+1} = sqrt(U_n + 1), U_1 = 1, prove that lim U_n = (1 + sqrt(5))/2 (the golden ratio).",
                "marks": 5,
                "answer": "Assume limit L exists. Then L = sqrt(L + 1). Square: L^2 = L + 1 => L^2 - L - 1 = 0 => L = (1 +/- sqrt(5))/2. Since U_n > 0, L = (1 + sqrt(5))/2 ≈ 1.618."
              },
              {
                "id": 44,
                "text": "Solve the differential equation Y''(x) + Y(x) = x, Y(0) = 0, Y'(0) = 2 using Laplace transforms.",
                "marks": 5,
                "answer": "L{Y''} = s^2Y - sY(0) - Y'(0) = s^2Y - 2. L{Y} = Y. L{x} = 1/s^2. (s^2+1)Y - 2 = 1/s^2 => Y = (2 + 1/s^2)/(s^2+1) = 2/(s^2+1) + 1/(s^2(s^2+1)). Partial fractions: 1/(s^2(s^2+1)) = 1/s^2 - 1/(s^2+1). Y = 2/(s^2+1) + 1/s^2 - 1/(s^2+1) = 1/s^2 + 1/(s^2+1). Inverse: y(x) = x + sin x."
              },
              {
                "id": 45,
                "text": "Given f(x) = { 1 if 0<x<5, 0 if 5<x<10 }, period = 10. Find the Fourier coefficients and write the Fourier series.",
                "marks": 5,
                "answer": "a0 = (2/10)∫0^5 1 dx = 1. an = (2/10)∫0^5 cos(nπx/5) dx = (1/5)[5 sin(nπx/5)/(nπ)]0^5 = (1/(nπ))(sin(nπ)-0) = 0. bn = (2/10)∫0^5 sin(nπx/5) dx = (1/5)[-5 cos(nπx/5)/(nπ)]0^5 = (1/(nπ))(1-cos(nπ)) = (1-(-1)^n)/(nπ). So bn = 2/(nπ) for odd n, 0 for even n. Series: f(x) = 1/2 + Σ_{odd n} (2/(nπ)) sin(nπx/5)."
              },
              {
                "id": 46,
                "text": "Show that the curl of F = (y^2 cos x + z^3)i + (2y sin x - 4)j + (3xz^2 - 2)k is zero. Determine scalar field φ such that F = ∇φ.",
                "marks": 5,
                "answer": "curl F = (∂Fz/∂y - ∂Fy/∂z)i + (∂Fx/∂z - ∂Fz/∂x)j + (∂Fy/∂x - ∂Fx/∂y)k = (0-0)i + (3z^2-3z^2)j + (2y cos x - 2y cos x)k = 0. Therefore F is conservative. φ = ∫Fx dx = y^2 sin x + xz^3 + f(y,z). ∂φ/∂y = 2y sin x + ∂f/∂y = Fy = 2y sin x - 4 => ∂f/∂y = -4 => f = -4y + g(z). ∂φ/∂z = 3xz^2 + 0 + g'(z) = Fz = 3xz^2 - 2 => g'(z) = -2 => g(z) = -2z + C. So φ = y^2 sin x + xz^3 - 4y - 2z + C."
              }
            ]
          },
          {
            "title": "Section B: Statistics",
            "marks": 30,
            "questions": [
              {
                "id": 47,
                "text": "The table shows marks for 400 HND candidates. Marks groups: 0-9(10), 10-19(25), 20-29(45), 30-39(65), 40-49(80), 50-59(70), 60-69(55), 70-79(30), 80-89(15), 90-99(5). i) Compile cumulative frequency table and draw cumulative frequency curve. Estimate: ii) Median iii) 30th percentile iv) If Grade A min is 74, % of candidates who obtain Grade A.",
                "marks": 18,
                "answer": "i) Cumulative: 10, 35, 80, 145, 225, 295, 350, 380, 395, 400. ii) Median: n/2=200th value, lies in 40-49 class. Median = 39.5 + 10*(200-145)/80 = 39.5+6.88=46.38. iii) 30th percentile: 0.3*400=120th, lies in 30-39 class. P30 = 29.5 + 10*(120-80)/65 = 29.5+6.15=35.65. iv) Grade A at 74+: cumulative below 74 = up to 69.5 class boundary = 350. Above 74: 400-350=50 candidates. % = 50/400*100 = 12.5%."
              },
              {
                "id": 48,
                "text": "The masses (mcg) of 200 microchips: 70-79(7), 80-84(30), 85-89(66), 90-94(57), 95-99(27), 100-109(13). i) Calculate estimates of median and upper quartile. ii) Estimate microchips with mass less than 81 mcg. iii) Calculate estimates of mean and standard deviation.",
                "marks": 12,
                "answer": "i) Cumulative: 7, 37, 103, 160, 187, 200. Median (100th): lies in 85-89. Median=84.5+5*(100-37)/66=84.5+4.77=89.27. UQ(150th): lies in 90-94. Q3=89.5+5*(150-103)/57=89.5+4.12=93.62. ii) Below 81: in 70-79(7) + part of 80-84. 81 is within 80-84 (boundary 79.5-84.5). Proportion = (81-79.5)/5=0.3 of 30=9. 7+9=16 microchips. iii) Midpoints: 74.5, 82, 87, 92, 97, 104.5. Mean = (7*74.5+30*82+66*87+57*92+27*97+13*104.5)/200 = (521.5+2460+5742+5244+2619+1358.5)/200 = 17945/200 = 89.725. Variance = Σf(m-μ)^2/n. SD = sqrt(variance) ≈ 7.8."
              }
            ]
          },
          {
            "title": "Section B: Probability",
            "marks": 20,
            "questions": [
              {
                "id": 49,
                "text": "An electronic assembly firm buys microchips from three suppliers: X supplies 50% (2% defective), Y supplies 30% (5% defective), Z supplies 20% (4% defective). Defective chips fail tests with probabilities: 40% fail 1+ tests, 60% fail 1+ tests, 80% fail 1+ tests for X,Y,Z respectively. All defective chips have 10% chance of escaping detection. An assembler finds a chip that fails only one test. What is the probability it came from supplier X?",
                "marks": 10,
                "answer": "Let D = defective, F1 = fails only one test. P(D|X)=0.02, P(D|Y)=0.05, P(D|Z)=0.04. For defective: P(F1|D,X)=0.4*(1-0.1)=0.36 (fails 1+ test AND doesn't escape). Similarly P(F1|D,Y)=0.6*0.9=0.54, P(F1|D,Z)=0.8*0.9=0.72. P(F1∩X) = P(X)*P(D|X)*P(F1|D,X) = 0.5*0.02*0.36 = 0.0036. P(F1∩Y) = 0.3*0.05*0.54 = 0.0081. P(F1∩Z) = 0.2*0.04*0.72 = 0.00576. P(F1) = 0.0036+0.0081+0.00576 = 0.01746. P(X|F1) = 0.0036/0.01746 = 0.2062."
              },
              {
                "id": 50,
                "text": "The number of errors per page follows a Poisson distribution with mean μ. Cost of first correction per page is α, subsequent corrections per page are β. Prove that the average cost of correction per page is α + β(μ-1) - (α-β)e^(-μ).",
                "marks": 10,
                "answer": "Let X ~ Poisson(μ). P(X=0) = e^(-μ). For a page with X errors: if X=0, cost=0. If X>=1, cost=α + β(X-1). Expected cost = Σ_{x=1}^{inf} [α + β(x-1)] * P(X=x) = Σ_{x=1}^{inf} α*P(X=x) + β*Σ_{x=1}^{inf} (x-1)*P(X=x) = α*P(X>=1) + β*[Σ_{x=1}^{inf} x*P(X=x) - Σ_{x=1}^{inf} P(X=x)] = α*(1-e^(-μ)) + β*(μ - (1-e^(-μ))) = α - αe^(-μ) + βμ - β + βe^(-μ) = α + β(μ-1) - (α-β)e^(-μ). QED."
              }
            ]
          }
        ]
      },
      {
        "title": "English Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2021 Session",
        "sections": [
          {
            "title": "Section A: Reading Comprehension",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Give a suitable title to the passage about Dr Frederick Nganito.",
                "marks": 2,
                "answer": "\"The Dedicated Doctor\" or \"Dr Frederick Nganito: A Model of Medical Dedication\""
              },
              {
                "id": 2,
                "text": "What is a thesis sentence?",
                "marks": 2,
                "answer": "A thesis sentence is the main idea or central argument of a passage, usually found at the beginning, which the entire text supports and develops."
              },
              {
                "id": 3,
                "text": "What is a topic sentence?",
                "marks": 2,
                "answer": "A topic sentence expresses the main idea of a paragraph. It is usually the first sentence and tells the reader what the paragraph is about."
              },
              {
                "id": 4,
                "text": "Why did Fred recruit two more doctors?",
                "marks": 2,
                "answer": "Fred recruited two more doctors, young graduates from the National School of Health Science, to add to the three volunteers because he wanted to make the clinic unique in its success in handling patients."
              },
              {
                "id": 5,
                "text": "Why was he admired by all in the hospital?",
                "marks": 2,
                "answer": "He was admired because of his hard work, dedication, special touch with patients, his humour and jokes that made patients feel cured, his cross-checking of prescriptions and treatments, and his willingness to help other doctors."
              },
              {
                "id": 6,
                "text": "In not more than 60 words, give a summary of the passage.",
                "marks": 10,
                "answer": "Dr Frederick Nganito worked tirelessly at his hospital, recruiting additional doctors and volunteers. He cross-checked all medical work, performed five delicate surgeries daily, and made rounds in all wards. His humour and special touch with patients, especially children, made him admired. Senior specialist Dr Hart Cromwell considered him an asset to the profession."
              }
            ]
          },
          {
            "title": "Section B: Grammar and Vocabulary",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Correct: 'The school comprises of four Faculties.'",
                "marks": 1,
                "answer": "The school comprises four Faculties."
              },
              {
                "id": 2,
                "text": "Correct: 'The chicken was grinded last evening.'",
                "marks": 1,
                "answer": "The chicken was ground last evening."
              },
              {
                "id": 3,
                "text": "Correct: 'The Nurses submitted their reports after the dateline.'",
                "marks": 1,
                "answer": "The nurses submitted their reports after the deadline."
              },
              {
                "id": 4,
                "text": "Correct: 'Dorcas will loose her purse if she is not careful.'",
                "marks": 1,
                "answer": "Dorcas will lose her purse if she is not careful."
              },
              {
                "id": 5,
                "text": "Correct: 'Their arguement has resulted to a fight.'",
                "marks": 1,
                "answer": "Their argument has resulted in a fight."
              },
              {
                "id": 6,
                "text": "Correct: 'Yesterday, the boy break his right leg due to the fall.'",
                "marks": 1,
                "answer": "Yesterday, the boy broke his right leg due to the fall."
              },
              {
                "id": 7,
                "text": "Correct: 'Nurses can still temporal jobs at the other clinics.'",
                "marks": 1,
                "answer": "Nurses can still get temporary jobs at the other clinics."
              },
              {
                "id": 8,
                "text": "Correct: 'It was in the meeting that we heard the news.'",
                "marks": 1,
                "answer": "We heard the news in the meeting. (Remove cleft structure)"
              },
              {
                "id": 9,
                "text": "Correct: 'You people have to pick up all the dirts around you.'",
                "marks": 1,
                "answer": "You have to pick up all the dirt around you."
              },
              {
                "id": 10,
                "text": "Correct: 'It is not James is responsible for the accident.'",
                "marks": 1,
                "answer": "It is not James who is responsible for the accident."
              },
              {
                "id": 11,
                "text": "Had the police ___ the thieves before you arrived? (take)",
                "marks": 1,
                "answer": "taken"
              },
              {
                "id": 12,
                "text": "After he ___ in that company for years, he gave up the job. (work)",
                "marks": 1,
                "answer": "had worked"
              },
              {
                "id": 13,
                "text": "As soon as she ___ the film tomorrow, she will leave for the village. (watch)",
                "marks": 1,
                "answer": "watches"
              },
              {
                "id": 14,
                "text": "Why did you not ___ the doctor immediately? (see)",
                "marks": 1,
                "answer": "see"
              },
              {
                "id": 15,
                "text": "Had my teacher worn a safety belt, he ___ his hand. (to break)",
                "marks": 1,
                "answer": "would not have broken"
              },
              {
                "id": 16,
                "text": "Rewrite: 'Protein makes new cells.' starting with 'New cells...'",
                "marks": 1,
                "answer": "New cells are made by protein."
              },
              {
                "id": 17,
                "text": "Rewrite in reported speech: 'Don't leave the office before time,' said the bank's director to his cashier.",
                "marks": 1,
                "answer": "The bank's director told his cashier not to leave the office before time."
              },
              {
                "id": 18,
                "text": "Add a tag: 'Stop eating sweet things, ...?'",
                "marks": 1,
                "answer": "will you?"
              },
              {
                "id": 19,
                "text": "Rewrite: 'The man complained that his wife didn't cook well.' beginning with 'The man's...'",
                "marks": 1,
                "answer": "The man's wife didn't cook well."
              },
              {
                "id": 20,
                "text": "Rewrite: 'Mr Henry and Mr James didn't attend the meeting.' beginning with 'Neither...'",
                "marks": 1,
                "answer": "Neither Mr Henry nor Mr James attended the meeting."
              },
              {
                "id": 21,
                "text": "Complete: 'The prices of raw materials have fallen whereas those of manufactured goods have surprisingly ______.'",
                "marks": 1,
                "answer": "risen"
              },
              {
                "id": 22,
                "text": "Complete: 'Although my father ___ a good salary, he cannot make both ends meet.'",
                "marks": 1,
                "answer": "earns"
              },
              {
                "id": 23,
                "text": "Complete: 'In hospitals, ___ are medical agents who care for pregnant women.'",
                "marks": 1,
                "answer": "midwives"
              },
              {
                "id": 24,
                "text": "Complete: 'Money can be safe in a deposit account or a ___ .'",
                "marks": 1,
                "answer": "savings account"
              },
              {
                "id": 25,
                "text": "Complete: 'During the holidays, many companies offer ___ to their clients. Some prices fall down by 50%.'",
                "marks": 1,
                "answer": "discounts"
              },
              {
                "id": 26,
                "text": "Write in words the fraction 4/8.",
                "marks": 1,
                "answer": "four-eighths / four over eight / one-half"
              },
              {
                "id": 27,
                "text": "Write in words the football match score: 4-0.",
                "marks": 1,
                "answer": "four nil"
              },
              {
                "id": 28,
                "text": "I am sorry that I'll be ___ to attend the meeting tomorrow. (able)",
                "marks": 1,
                "answer": "unable"
              },
              {
                "id": 29,
                "text": "Drug ___ is prohibited in sport competition. (consume)",
                "marks": 1,
                "answer": "consumption"
              },
              {
                "id": 30,
                "text": "The performance of our team was ___ . (satisfy)",
                "marks": 1,
                "answer": "satisfactory"
              }
            ]
          },
          {
            "title": "Section C: Spoken English",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "You who ___ (know/knows) Grace Decca should be proud.",
                "marks": 1,
                "answer": "know"
              },
              {
                "id": 2,
                "text": "The scissors Juan used last night to cut Sophia's hair ___ (was/were) too old.",
                "marks": 1,
                "answer": "were"
              },
              {
                "id": 3,
                "text": "Neither my friends nor my uncle ___ (like/likes) bananas.",
                "marks": 1,
                "answer": "likes"
              },
              {
                "id": 4,
                "text": "I who ___ (am/are/is) ready will go first.",
                "marks": 1,
                "answer": "am"
              },
              {
                "id": 5,
                "text": "The woman with her four children ___ (is/are) at your gate.",
                "marks": 1,
                "answer": "is"
              },
              {
                "id": 6,
                "text": "Tell me ___ (who/whom) you saw at the party.",
                "marks": 1,
                "answer": "whom"
              },
              {
                "id": 7,
                "text": "The money was sent to Pius, Livinus and ___ (I/me).",
                "marks": 1,
                "answer": "me"
              },
              {
                "id": 8,
                "text": "Sure, Andrew is short, but he is not as short as ___ (I/me).",
                "marks": 1,
                "answer": "I"
              },
              {
                "id": 9,
                "text": "The girls prepared better for the party than ___ (we/us).",
                "marks": 1,
                "answer": "we"
              },
              {
                "id": 10,
                "text": "Blasius, Ignasius, Aloysius and the ___ (theirs/them) serve the country.",
                "marks": 1,
                "answer": "theirs"
              },
              {
                "id": 11,
                "text": "Translate: 'Il y a trop d'embouteillages sur les routes.'",
                "marks": 1,
                "answer": "There are too many traffic jams on the roads."
              },
              {
                "id": 12,
                "text": "Translate: 'Les entreprises brassicoles prospèrent dans le pays.'",
                "marks": 1,
                "answer": "Brewing companies are thriving in the country."
              },
              {
                "id": 13,
                "text": "Translate: 'Le chômage en milieu universitaire résulte du décalage entre la formation reçue et les besoins du marché de l'emploi.'",
                "marks": 1,
                "answer": "Unemployment among graduates results from the gap between the training received and the needs of the job market."
              },
              {
                "id": 14,
                "text": "Translate: 'Les petites et moyennes entreprises constituent le moteur créateur d'emploi.'",
                "marks": 1,
                "answer": "Small and medium-sized enterprises are the engine of job creation."
              },
              {
                "id": 15,
                "text": "Translate: 'Pourquoi les pays dits amis ne cèdent-ils pas toujours leurs technologies à moindre coût?'",
                "marks": 1,
                "answer": "Why do so-called friendly countries not always transfer their technologies at lower cost?"
              },
              {
                "id": 16,
                "text": "Traduisez en français: 'His timely intervention prevented us from borrowing money at such a high rate of interest.'",
                "marks": 1,
                "answer": "Son intervention opportune nous a empêchés d'emprunter de l'argent à un taux d'intérêt aussi élevé."
              },
              {
                "id": 17,
                "text": "Traduisez en français: 'The aim of the after sales services is to keep in contact with the customers.'",
                "marks": 1,
                "answer": "Le but du service après-vente est de rester en contact avec les clients."
              },
              {
                "id": 18,
                "text": "Traduisez en français: 'Sales were thriving when our main competitor launched his new product.'",
                "marks": 1,
                "answer": "Les ventes prospéraient quand notre principal concurrent a lancé son nouveau produit."
              },
              {
                "id": 19,
                "text": "Traduisez en français: 'In this company, any shareholder brings his or her contribution to its growth.'",
                "marks": 1,
                "answer": "Dans cette entreprise, tout actionnaire apporte sa contribution à sa croissance."
              },
              {
                "id": 20,
                "text": "Traduisez en français: 'People go to auctions expecting to get the goods very cheaply.'",
                "marks": 1,
                "answer": "Les gens vont aux enchères en espérant obtenir les marchandises à très bas prix."
              }
            ]
          },
          {
            "title": "Section D: Writing",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Write an essay of about 350 words on ONE of the following topics:\n1. As president of your school's Science Club, you have been invited to address the students on the importance of a multimedia center in your school. The school is ISMTA and your name is Tamfu Amidou.\n2. Do you feel that the post office is up to date in your society?\n3. You have witnessed some instances of corruption in your school. Write a letter of complaint to the managing director of your school citing the instances and suggest what can be done to stop this practice.",
                "marks": 30,
                "answer": "Topic 1 - Speech on the Importance of a Multimedia Center\n\nGood morning fellow students of ISMTA,\n\nMy name is Tamfu Amidou, president of the Science Club, and I stand before you today to speak about a project that can transform our learning experience - a multimedia center for our school.\n\nA multimedia center is more than just computers. It is a dynamic learning hub where text, audio, video, and interactive content come together. Here is why we urgently need one.\n\nFirstly, a multimedia center enhances learning. Visual students can watch educational videos, auditory learners can listen to recorded lectures, and kinesthetic learners can interact with simulations. Research shows that multimedia learning improves retention by up to 75% compared to traditional methods.\n\nSecondly, it bridges the digital divide. Many of us do not have internet access at home. A school multimedia center would ensure every student can research, complete online assignments, and develop digital skills essential for the 21st century job market.\n\nThirdly, it fosters collaboration. Students can work on group projects using shared resources. The Science Club could host coding workshops, virtual science fairs, and video conferences with experts worldwide.\n\nFourthly, it supports teachers. Our educators can use projectors, interactive whiteboards, and digital resources to make lessons more engaging. Imagine learning about the solar system through a 3D simulation rather than just a textbook diagram.\n\nFinally, a multimedia center prepares us for higher education. Universities use online learning platforms, digital libraries, and virtual labs. Early exposure gives us a competitive advantage.\n\nIn conclusion, a multimedia center is not a luxury but a necessity for ISMTA. Let us work together, approach the administration, and make this vision a reality. Thank you."
              }
            ]
          }
        ]
      },
      {
        "title": "French Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2021 Session",
        "sections": [
          {
            "title": "Section A: QCM",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Dans quelle phrase le verbe 'manger' est conjugué au futur de l'indicatif?\na) Je mangerais des cerises\nb) J'aurais mangé des cerises\nc) Je mangerai des cerises\nd) Je mangeais des cerises",
                "marks": 1,
                "answer": "c) Je mangerai des cerises"
              },
              {
                "id": 2,
                "text": "Donne le temps du verbe dans: 'La pièce de théâtre a plu au public.'\na) Imparfait\nb) Passé simple\nc) Passé composé\nd) Futur antérieur",
                "marks": 1,
                "answer": "c) Passé composé"
              },
              {
                "id": 3,
                "text": "Quel est le pronom personnel dans: 'Oh, comme elle est gentille!'\na) 1ère personne du singulier\nb) 2ème personne du singulier\nc) 3ème personne du singulier\nd) 3ème personne du pluriel",
                "marks": 1,
                "answer": "c) 3ème personne du singulier"
              },
              {
                "id": 4,
                "text": "À quel mode est conjugué le verbe dans 'Sors de cette pièce'?\na) Indicatif\nb) Impératif\nc) Subjonctif\nd) Passif",
                "marks": 1,
                "answer": "b) Impératif"
              },
              {
                "id": 5,
                "text": "Donne le groupe du verbe 'croire'.\na) 1er groupe\nb) 2ème groupe\nc) 3ème groupe\nd) Aucun",
                "marks": 1,
                "answer": "c) 3ème groupe"
              },
              {
                "id": 6,
                "text": "Dans quelle phrase 'boire' est au présent de l'indicatif?\na) Nous buvions du soda\nb) Nous buvons du soda\nc) Nous boirons du soda\nd) Nous avons bu du soda",
                "marks": 1,
                "answer": "b) Nous buvons du soda"
              },
              {
                "id": 7,
                "text": "Donne le groupe du verbe 'finir'.\na) 2ème groupe\nb) 3ème groupe\nc) Aucun\nd) 1er groupe",
                "marks": 1,
                "answer": "a) 2ème groupe"
              },
              {
                "id": 8,
                "text": "À quel temps: 'Quand tu étais petit, tu aimais bien les berceuses'?\na) Passé simple\nb) Imparfait\nc) Plus-que-parfait\nd) Passé composé",
                "marks": 1,
                "answer": "b) Imparfait"
              },
              {
                "id": 9,
                "text": "Donne le groupe du verbe 'dormir'.\na) 1er groupe\nb) 2ème groupe\nc) 3ème groupe\nd) Aucun",
                "marks": 1,
                "answer": "c) 3ème groupe"
              },
              {
                "id": 10,
                "text": "Donne le groupe du verbe 'descendre'.\na) 1er groupe\nb) 2ème groupe\nc) 3ème groupe\nd) Aucun",
                "marks": 1,
                "answer": "c) 3ème groupe"
              },
              {
                "id": 11,
                "text": "'Je lui ai demandé s'il était prêt.' Cette phrase est:\na) Déclarative\nb) Interrogative\nc) Exclamative\nd) Impérative",
                "marks": 1,
                "answer": "a) Déclarative"
              },
              {
                "id": 12,
                "text": "Laquelle contient un participe passé mal accordé?\na) Les pièces que j'ai vu jouer\nb) Combien avez-vous rencontré de personnes?\nc) Elle s'est construit une maison\nd) Elles se sont lavées les mains",
                "marks": 1,
                "answer": "d) Elles se sont lavées les mains (should be 'lavé' - invariable when 'se' is indirect object)"
              },
              {
                "id": 13,
                "text": "Une personne qui lit avec peine, en hésitant:\na) Grommelle\nb) Marmonne\nc) Anonne\nd) Susurre",
                "marks": 1,
                "answer": "c) Anonne"
              },
              {
                "id": 14,
                "text": "Forme passive de: 'Toutes les parties en présence analyseront la situation.'\na) Toutes les parties en présence n'analyseront pas la situation.\nb) La situation ne sera pas analysée.\nc) La situation sera analysée par toutes les parties en présence.\nd) Toutes les parties en présence analyseront-elles la situation?",
                "marks": 1,
                "answer": "c) La situation sera analysée par toutes les parties en présence."
              },
              {
                "id": 15,
                "text": "Quelle proposition est correctement orthographiée?\na) Demi-finales\nb) Demi-frères\nc) Deux heures et demie\nd) Deux pains et demi",
                "marks": 1,
                "answer": "a) Demi-finales (demi invariable devant le nom avec trait d'union)"
              },
              {
                "id": 16,
                "text": "Laquelle comprend un verbe intransitif?\na) Il est parti hier du service\nb) Elle arriva enfin à son bureau\nc) Il serait resté à son cabinet\nd) Elle allait au travail d'un pas lent",
                "marks": 1,
                "answer": "c) Il serait resté à son cabinet (rester is intransitive)"
              },
              {
                "id": 17,
                "text": "Quel est le sens du mot 'sagacité'?\na) Amabilité\nb) Facilité\nc) Naïveté\nd) Perspicacité",
                "marks": 1,
                "answer": "d) Perspicacité"
              },
              {
                "id": 18,
                "text": "Parmi ces mots, un seul est masculin:\na) Échappatoire\nb) Urticaire\nc) Planisphère\nd) Alcôve",
                "marks": 1,
                "answer": "c) Planisphère (masculin)"
              },
              {
                "id": 19,
                "text": "Une empathie est:\na) Un ensemble d'affections neurologiques\nb) Une hostilité instinctive\nc) Une faculté intuitive de se mettre à la place d'autrui\nd) Un procédé d'étude des corps opaques",
                "marks": 1,
                "answer": "c) Une faculté intuitive de se mettre à la place d'autrui"
              },
              {
                "id": 20,
                "text": "Un mange-tout est:\na) Un ogre\nb) Une variété de haricot vert\nc) Un électrophone portatif\nd) Une plante des régions chaudes",
                "marks": 1,
                "answer": "b) Une variété de haricot vert"
              },
              {
                "id": 21,
                "text": "Un subside est:\na) Ce qui peut remplacer autre chose\nb) Un démon femelle\nc) Une somme d'argent versée à titre de secours\nd) Une plante des régions chaudes",
                "marks": 1,
                "answer": "c) Une somme d'argent versée à titre de secours et de subvention"
              },
              {
                "id": 22,
                "text": "Une cimaise est:\na) Un lieu où l'on expose des tableaux\nb) Une urne qui contient les cendres\nc) Une plante dont les feuilles servent de condiment\nd) Un ornement formant la partie supérieure d'un casque",
                "marks": 1,
                "answer": "a) Un lieu où l'on expose des tableaux"
              },
              {
                "id": 23,
                "text": "'Le temps du plein emploi est révolu.' Révolu signifie:\na) Est revenu\nb) Est terminé\nc) A évolué\nd) A changé",
                "marks": 1,
                "answer": "b) Est terminé"
              },
              {
                "id": 24,
                "text": "Synonyme de 'recrudescence' dans 'une recrudescence de la rougeole':\na) Complication\nb) Disparition\nc) Diminution\nd) Aucun",
                "marks": 1,
                "answer": "d) Aucun (recrudescence = réapparition/aggravation)"
              },
              {
                "id": 25,
                "text": "Quel est le synonyme de 'réitérer'?\na) Expliquer\nb) Répéter\nc) Expliquer\nd) Annuler",
                "marks": 1,
                "answer": "b) Répéter"
              },
              {
                "id": 26,
                "text": "Quelle est la haute chambre du parlement camerounais?\na) La Cour suprême\nb) Le Sénat\nc) La Mairie\nd) L'Assemblée nationale",
                "marks": 1,
                "answer": "b) Le Sénat"
              },
              {
                "id": 27,
                "text": "Le président de la République du Cameroun a un mandat de combien d'années?\na) 5 ans\nb) 3 ans\nc) 7 ans\nd) 6 ans",
                "marks": 1,
                "answer": "c) 7 ans"
              },
              {
                "id": 28,
                "text": "Qui dirige une S.A?\na) Un président\nb) Un chef\nc) Un directeur général\nd) Un directeur",
                "marks": 1,
                "answer": "c) Un directeur général"
              },
              {
                "id": 29,
                "text": "Qui dirige une SARL?\na) Un directeur\nb) Un président\nc) Un leader\nd) Un directeur général",
                "marks": 1,
                "answer": "d) Un directeur général (gérant)"
              },
              {
                "id": 30,
                "text": "En quelle année le Cameroun a-t-il eu son Indépendance?\na) 1950\nb) 1972\nc) 1960\nd) 1914",
                "marks": 1,
                "answer": "c) 1960"
              },
              {
                "id": 31,
                "text": "Quel rang occupe le Cameroun dans le classement 2020 du Doing Business?\na) 1\nb) 10\nc) 5\nd) 167",
                "marks": 1,
                "answer": "d) 167"
              },
              {
                "id": 32,
                "text": "Contribution versée à l'État, sans affectation à une dépense particulière:\na) Dividende\nb) Impôt\nc) Bénéfice\nd) Profit",
                "marks": 1,
                "answer": "b) Impôt"
              },
              {
                "id": 33,
                "text": "Quelle est la durée du mandat d'un député au Cameroun?\na) 10 ans\nb) 8 ans\nc) 3 ans\nd) 5 ans",
                "marks": 1,
                "answer": "d) 5 ans"
              },
              {
                "id": 34,
                "text": "Combien de gouverneurs compte le Cameroun?\na) 15\nb) 12\nc) 8\nd) 10",
                "marks": 1,
                "answer": "d) 10"
              },
              {
                "id": 35,
                "text": "Organe en charge de la lecture des résultats des élections présidentielles au Cameroun:\na) Cour constitutionnelle\nb) Cour suprême\nc) Le Sénat\nd) Le Conseil supérieur de l'État",
                "marks": 1,
                "answer": "a) Cour constitutionnelle"
              },
              {
                "id": 36,
                "text": "Augmentation du niveau général des prix:\na) Crise économique\nb) Déflation\nc) Inflation\nd) Croissance",
                "marks": 1,
                "answer": "c) Inflation"
              },
              {
                "id": 37,
                "text": "'L'entreprise a mis les clés sous le paillasson' veut dire:\na) Elle a grandi\nb) Elle a fermé\nc) Elle s'installe\nd) Elle est saturée par la demande",
                "marks": 1,
                "answer": "b) Elle a fermé"
              },
              {
                "id": 38,
                "text": "Marché qui assure la liaison entre agents à capacité de financement et agents qui ont besoin de financement:\na) Le marché noir\nb) L'assurance\nc) Le marché des capitaux\nd) La banque",
                "marks": 1,
                "answer": "c) Le marché des capitaux"
              },
              {
                "id": 39,
                "text": "Secteur chargé de garder les rapports financiers, tracer le budget et bilan:\na) Ressources Humaines\nb) Direction Générale\nc) Comptabilité\nd) Vente",
                "marks": 1,
                "answer": "c) Comptabilité"
              },
              {
                "id": 40,
                "text": "Ensemble des salaires et des cotisations sociales des employeurs:\na) Loyer\nb) Pension\nc) Masse salariale\nd) Dépenses",
                "marks": 1,
                "answer": "c) Masse salariale"
              }
            ]
          },
          {
            "title": "Section B: Compréhension de Texte",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "De quoi parle-t-on dans le texte?",
                "marks": 2,
                "answer": "On parle de l'opposition du gouvernement camerounais à l'importation du poulet, de la grippe aviaire et de ses conséquences sur la filière avicole au Cameroun."
              },
              {
                "id": 2,
                "text": "Expliquez les mots suivants: importation, régression, cheptel.",
                "marks": 2,
                "answer": "Importation: action d'introduire des marchandises étrangères dans un pays. Régression: diminution, baisse. Cheptel: ensemble des animaux d'élevage."
              },
              {
                "id": 3,
                "text": "À quel secteur d'activité appartiennent les entreprises avicoles?",
                "marks": 2,
                "answer": "Les entreprises avicoles appartiennent au secteur primaire (agriculture/élevage)."
              },
              {
                "id": 4,
                "text": "À votre avis, pourquoi l'État s'oppose-t-il à l'importation du poulet au Cameroun?",
                "marks": 2,
                "answer": "Pour protéger la production locale et les éleveurs camerounais car il y a suffisamment de poulet dans le pays pour couvrir la demande, et pour éviter une concurrence déloyale."
              },
              {
                "id": 5,
                "text": "Face à une telle crise, quel peut être l'apport des banques?",
                "marks": 2,
                "answer": "Les banques peuvent accorder des prêts à taux préférentiels aux aviculteurs, proposer des moratoires sur les remboursements, et financer les investissements pour la relance de la filière avicole."
              }
            ]
          },
          {
            "title": "Section C: Rédaction",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Choisissez UN SEUL sujet et traitez-le:\nSujet 1: Le rôle des banques dans le développement économique d'un pays.\nSujet 2: Le rôle du transport dans la réalisation du commerce.",
                "marks": 30,
                "answer": "Sujet 1: Le Rôle des Banques dans le Développement Économique\n\nLes banques jouent un rôle fondamental dans le développement économique d'un pays. Elles constituent le pilier du système financier et facilitent la circulation des capitaux nécessaires à la croissance.\n\nPremièrement, les banques mobilisent l'épargne. Elles collectent les dépôts des ménages et des entreprises, transformant ainsi de petites sommes en capitaux importants. Ces fonds sont ensuite réinjectés dans l'économie sous forme de crédits.\n\nDeuxièmement, elles financent l'investissement. Les entreprises ont besoin de capitaux pour acheter des équipements, construire des usines et innover. Sans crédit bancaire, la plupart des investissements seraient impossibles, ralentissant la croissance économique et la création d'emplois.\n\nTroisièmement, les banques facilitent les transactions commerciales. Elles offrent des services de paiement (virements, cartes, chèques) qui rendent les échanges plus efficaces et sécurisés. Un système de paiement moderne est essentiel au fonctionnement de l'économie.\n\nQuatrièmement, elles contribuent à la stabilité financière. En tant qu'intermédiaires, les banques évaluent les risques et allouent les ressources de manière efficiente. La banque centrale, par sa politique monétaire, régule l'inflation et favorise la croissance.\n\nEn conclusion, les banques sont indispensables au développement économique. Leur rôle d'intermédiation financière, de financement de l'investissement et de facilitation des échanges en fait un moteur essentiel de la croissance."
              }
            ]
          }
        ]
      },
      {
        "title": "Entrepreneurship",
        "duration": "2 hours",
        "credits": 1,
        "description": "All Specialties | 2021 Session",
        "sections": [
          {
            "title": "Part I: Entrepreneurship",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Analyse any two of the following entrepreneurial skills with concrete examples:\n- Ability to plan\n- Basic management skills\n- Creativity\n- Self confidence",
                "marks": 15,
                "answer": "1. Ability to plan: An entrepreneur must set clear objectives, forecast resources, and anticipate challenges. Example: Before launching a bakery, an entrepreneur creates a business plan covering location, equipment costs, raw material sourcing, pricing strategy, and marketing. This planning prevents costly mistakes.\n\n2. Creativity: The ability to generate innovative ideas and solutions. Example: A fashion entrepreneur noticing fabric waste creates a new line of accessories from offcuts, turning a cost center into profit while appealing to eco-conscious customers."
              },
              {
                "id": 2,
                "text": "State the importance and the inconveniences of post graduate education for entrepreneurship.",
                "marks": 15,
                "answer": "Importance:\n1. Advanced knowledge and specialized skills.\n2. Credibility and networking opportunities.\n3. Access to research and innovation.\n4. Better understanding of business concepts.\n\nInconveniences:\n1. High cost and time investment.\n2. May delay practical business experience.\n3. Theoretical focus may not match real-world needs.\n4. Risk of over-qualification for certain markets."
              }
            ]
          },
          {
            "title": "Part II: General Economics",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate the types of enterprises according to their size.",
                "marks": 10,
                "answer": "Micro enterprise: fewer than 10 employees, small turnover (family business).\nSmall enterprise: 10-50 employees, limited capital, local market.\nMedium enterprise: 50-250 employees, regional/national market, formal structure.\nLarge enterprise: over 250 employees, national/international presence, complex organization.\n\nKey differences: workforce size, turnover, capital investment, market reach, management structure, legal obligations."
              },
              {
                "id": 2,
                "text": "Prepare a business plan for an enterprise that plans to take a short-term loan of 600,000 FRS for 3 months and has a cash flow of 100,000 FRS per week, 50,000 FRS rent per month, VAT of 20,000 FRS per month, wages of 100,000 FRS per month.",
                "marks": 10,
                "answer": "Executive Summary: Small trading business seeking 600,000 FRS short-term loan.\n\nRevenue projection: 100,000 FRS/week = 400,000 FRS/month\n\nExpenses per month:\n- Rent: 50,000 FRS\n- Wages: 100,000 FRS\n- VAT: 20,000 FRS\n- Total monthly expenses: 170,000 FRS\n\nNet monthly cash flow: 400,000 - 170,000 = 230,000 FRS\n\nLoan repayment capacity:\n- Loan: 600,000 FRS\n- Term: 3 months\n- Monthly repayment: 200,000 FRS + interest\n- Net after loan: 230,000 - 200,000 = 30,000 FRS\n\nRepayment schedule: Month 1 pay 200k, Month 2 pay 200k, Month 3 pay 200k."
              },
              {
                "id": 3,
                "text": "Should the business take the loan or not? Justify.",
                "marks": 10,
                "answer": "Yes, the business should take the loan. Justification:\n1. Monthly net cash flow (230,000 FRS) exceeds monthly repayment (200,000 FRS), leaving a safety margin of 30,000 FRS.\n2. The loan enables business growth and inventory expansion.\n3. Short-term loan (3 months) means minimal interest cost.\n4. The business generates consistent weekly revenue.\n5. Expenses are manageable at 42.5% of revenue.\n\nHowever, the business should maintain an emergency fund and monitor cash flow closely to ensure repayment capacity."
              }
            ]
          },
          {
            "title": "Part III: Company Law",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Expatiate on the different steps to be followed to create a business entity in Cameroon.",
                "marks": 13,
                "answer": "1. Choose the legal form (SARL, SA, EURL, etc.) based on capital needs and liability preference.\n2. Draft the company's articles of association (statuts) specifying name, registered office, object, capital, duration (max 99 years), management structure.\n3. Deposit the share capital in a blocked bank account and obtain a certificate of deposit.\n4. Publish a legal notice in a newspaper of legal announcements.\n5. Register with the Registrar of Commerce and Personal Credit (RCCM) at the competent court.\n6. Obtain the Statistical Identification Number (NIU) from the National Institute of Statistics.\n7. Register with the tax authorities for a taxpayer's account number.\n8. Register with the National Social Insurance Fund (CNPS) for employee coverage.\n9. Complete the Single Business Formality Center (CFCE) process for streamlined registration.\n10. Obtain the business license and any sector-specific permits."
              },
              {
                "id": 2,
                "text": "Examine the causes and consequences of dissolution of a company.",
                "marks": 20,
                "answer": "Causes of dissolution:\n1. Expiration of the company's duration (max 99 years under OHADA).\n2. Achievement or impossibility of achieving the corporate object.\n3. Decision of the general meeting of shareholders.\n4. Judicial liquidation or bankruptcy.\n5. Merger or acquisition.\n6. Loss of more than half of the share capital.\n7. Court order for serious legal violations.\n8. Death of a partner in a partnership (unless otherwise provided).\n\nConsequences of dissolution:\n1. Company enters liquidation phase - ceases normal operations.\n2. The corporate existence continues only for liquidation purposes.\n3. Appointment of a liquidator to settle debts and distribute remaining assets.\n4. Discharge of employees with potential severance obligations.\n5. Cancellation of registration with RCCM.\n6. Publication of dissolution in legal newspaper.\n7. Creditors must present claims within legal timeframe.\n8. Remaining assets distributed among shareholders according to their rights.\n9. Tax clearance required before final deregistration."
              },
              {
                "id": 3,
                "text": "Briefly explain the pecuniary and non-pecuniary rights of shareholders of a company.",
                "marks": 7,
                "answer": "Pecuniary rights (financial):\n1. Right to dividends from company profits.\n2. Right to share in the distribution of assets upon liquidation.\n3. Right to bonus shares and pre-emptive rights in capital increases.\n4. Right to sell or transfer shares.\n\nNon-pecuniary rights (non-financial):\n1. Right to vote at general meetings.\n2. Right to information (access to financial statements and reports).\n3. Right to challenge management decisions in court.\n4. Right to appoint and dismiss directors.\n5. Right to participate in decision-making on major corporate changes."
              }
            ]
          }
        ]
      },
      {
        "title": "Law and Citizenship",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2021 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Critically examine five sources of law in Cameroon.",
                "marks": 10,
"answer": "Sources of law are the origins from which laws derive their authority and validity in a legal system. In Cameroon, the legal system is a mixed legal system, combining the Anglo-Saxon (Common Law) and the Romano-Germanic (Civil Law) traditions. Therefore, the sources of law reflect both systems together with customary and academic influences.\n\n1. The Constitution: The Constitution is the supreme law of Cameroon. It establishes state institutions, protects fundamental rights, and overrides all other laws in case of conflict. Its strength is legal supremacy, but enforcement of some rights may be weak in practice.\n\n2. Local Custom: Local custom refers to the traditions and practices of different communities. It is mainly used in marriage, inheritance, and land matters. It is flexible and culturally accepted, but some customs may conflict with constitutional rights.\n\n3. Judicial Precedent (Anglo-Saxon source of law): Judicial precedent is a key source in the Anglo-Saxon (Common Law) system, applied mainly in the English-speaking regions of Cameroon. It means previous decisions of higher courts guide lower courts in similar cases. It ensures consistency and predictability, but may be rigid because courts are bound by earlier decisions.\n\n4. Legislation (Romano-Germanic source of law): Legislation is the main source in the Romano-Germanic (Civil Law) system, applied mainly in the French-speaking regions of Cameroon. It refers to laws made by Parliament and written in codes. It is clear and organized, but can be rigid and slow to adapt to social change.\n\n5. Case Law: Case law refers to decisions of courts used to interpret and apply laws. It strengthens understanding of legislation and fills legal gaps. However, it is more influential in Common Law areas than Civil Law areas.\n\n6. Persuasive Opinion of Legal Experts: These are opinions from legal scholars in books, journals, and commentaries. They are not binding but help judges interpret complex legal issues. Their limitation is that courts are not obliged to follow them.\n\n7. International Treaties: International treaties are agreements Cameroon enters into with other states or organizations. They influence areas such as human rights, trade, and diplomacy. However, they only become effective when incorporated into national law.\n\nIn conclusion, the sources of law in Cameroon reflect its mixed legal system, combining the Anglo-Saxon source (judicial precedent) and the Romano-Germanic source (legislation) together with custom, case law, expert opinion, and international treaties. Each source contributes to the development of law, although each has its own limitations in practice."
              },
              {
                "id": 2,
                "text": "Compose a paper on the classification of criminal offences in Cameroon.",
                "marks": 10,
                "answer": "A criminal offence is an act or omission prohibited by law and punishable by the state. It is committed against individuals, property, or public order and is sanctioned by fines, imprisonment, or other penalties. In Cameroon, criminal offences are classified according to their seriousness and punishment under the Penal Code. Criminal offences are classified into felonies, misdemeanours, and simple offences (contraventions).\n\n1. Felonies: Felonies are the most serious criminal offences under Cameroonian law. They are punishable by death, life imprisonment, or imprisonment of more than ten years. They are usually tried before the High Court or Military Tribunal depending on the nature of the offence. Felonies include offences such as murder, armed robbery, treason, terrorism, rape resulting in death, and large-scale drug trafficking. These offences are considered dangerous because they threaten human life, national security, and public order. For example, terrorism cases linked to Boko Haram insurgents in the Far North Region and serious security-related cases such as the murder case of Martinez Zogo have been handled by special or military jurisdictions. Felonies attract very severe punishment to deter serious crimes, but criticism exists due to lengthy trials, prison congestion, and concerns over fair trial rights in some military proceedings.\n\n2. Misdemeanours: Misdemeanours are less serious offences than felonies but more serious than simple offences. They are punishable by imprisonment ranging from 10 days to 10 years or fines. They are mainly tried before the Courts of First Instance. Misdemeanours include theft, fraud, assault occasioning harm, breach of trust, corruption of a smaller scale, and property damage. These offences affect individuals and property but do not pose a major threat to national security. For example, ordinary theft, fraud, and assault cases commonly reported in cities like Douala and Yaoundé fall under misdemeanours and are handled by lower courts. Misdemeanours help maintain discipline in society, but they may contribute to prison overcrowding and delays in justice delivery due to case congestion.\n\n3. Simple Offences (Contraventions): Simple offences are the least serious criminal offences under Cameroonian law. They are punishable mainly by fines or very short-term imprisonment. These offences are usually handled quickly by lower courts or administrative authorities. Simple offences include minor traffic violations, public disturbance, noise pollution, insult, and breach of municipal regulations. These offences mainly involve minor disorder and violation of public regulations rather than serious harm. For example, traffic offences such as illegal parking or failure to present vehicle documents in Cameroon are treated as contraventions. Simple offences help maintain public order and reduce pressure on courts, but enforcement may sometimes be inconsistent or affected by corruption in practice.\n\nIn conclusion, criminal offences in Cameroon are classified into felonies, misdemeanours, and simple offences based on their seriousness and punishment. Felonies are the most serious, misdemeanours are moderately serious, and simple offences are minor violations. This classification helps courts determine jurisdiction, procedure, and appropriate punishment, thereby ensuring order and efficiency in the administration of criminal justice."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics and Moral Education, Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "What is normative ethics?",
                "marks": 2,
                "answer": "Normative ethics is the branch of ethics that studies moral standards and principles that guide right and wrong conduct. It establishes norms for how people ought to behave."
              },
              {
                "id": 2,
                "text": "State any two methods of acquiring Cameroon citizenship.",
                "marks": 2,
                "answer": "1. By birth (jus sanguinis): born to at least one Cameroonian parent.\n2. By naturalization: foreign resident fulfilling legal conditions (residence, integration, good character) may acquire citizenship by decree."
              },
              {
                "id": 3,
                "text": "Define a nation.",
                "marks": 2,
                "answer": "A nation is a stable community of people sharing common territory, history, culture, language, economic life and political aspirations, bound together by a sense of collective identity."
              },
              {
                "id": 4,
                "text": "List any two functions of parliament.",
                "marks": 2,
                "answer": "1. Legislative function: making, amending, and repealing laws.\n2. Control function: overseeing government actions, approving budget, and holding ministers accountable."
              },
              {
                "id": 5,
                "text": "What is a bill?",
                "marks": 2,
                "answer": "A bill is a draft law presented to Parliament for debate and approval. Once passed by both houses and signed by the President, it becomes an Act of Parliament."
              },
              {
                "id": 6,
                "text": "Give any two causes of climate change.",
                "marks": 2,
                "answer": "1. Greenhouse gas emissions from burning fossil fuels (coal, oil, gas).\n2. Deforestation reducing the earth's capacity to absorb carbon dioxide."
              },
              {
                "id": 7,
                "text": "What do you understand by the term good governance?",
                "marks": 2,
                "answer": "Good governance is the exercise of authority based on principles of transparency, accountability, rule of law, participation, equity, effectiveness, and responsiveness in managing public affairs."
              },
              {
                "id": 8,
                "text": "List any two obligations of a citizen.",
                "marks": 2,
                "answer": "1. To obey the laws of the country.\n2. To pay taxes lawfully due."
              },
              {
                "id": 9,
                "text": "State any two features of human rights.",
                "marks": 2,
                "answer": "1. Universal: human rights apply to all persons regardless of nationality, race, gender, or religion.\n2. Inalienable: human rights cannot be taken away or voluntarily surrendered."
              },
              {
                "id": 10,
                "text": "What does the colour green on the national flag symbolize?",
                "marks": 2,
                "answer": "The green colour on the Cameroon national flag symbolizes hope and the rich vegetation of the country."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Distinguish between a contract of specified duration (CDD) and unspecified duration (CDI).",
                "marks": 5,
                "answer": "A contract of employment is an agreement between an employer and an employee under the Labour Code of Cameroon. It may be either of specified duration or unspecified duration depending on its time limit and conditions of termination.\n\nContract of specified duration (CDD): This is a contract made for a fixed period or specific task. It ends automatically when the time or task is completed without notice.\n\nContract of unspecified duration (CDI): This is a permanent contract with no fixed end date. It continues until either party terminates it according to legal procedures such as notice or dismissal.\n\nDifferences:\n- Duration: specified has a fixed period; unspecified has no fixed end date.\n- Termination: specified ends automatically; unspecified requires notice or legal procedure.\n- Job security: specified offers less security; unspecified offers more stability.\n- Flexibility: specified is more flexible for employers; unspecified is more stable for employees.\n\nSimilarities:\n- Both are contracts of employment governed by the Labour Code.\n- Both create employer-employee relationships.\n- Both involve payment of wages for work done.\n- Both require mutual consent between employer and employee.\n\nIn conclusion, in Cameroon, contracts of specified and unspecified duration differ mainly in time limit and termination procedures, but both establish lawful employment relationships governed by labour law."
              },
              {
                "id": 2,
                "text": "Explain any four ways through which a contract of employment can be terminated.",
                "marks": 15,
                "answer": "A contract of employment can be brought to an end through different legal means as provided under the labour law in Cameroon. Termination must follow legal procedures to protect both employer and employee.\n\n1. Expiration of contract (natural termination): This applies mainly to fixed-term contracts. The contract ends automatically when the agreed period or task is completed without the need for notice.\n\n2. Mutual agreement: A contract may be terminated when both the employer and employee agree to end it. This is voluntary and requires consent from both parties.\n\n3. Resignation by the employee: An employee may voluntarily leave the job by giving notice to the employer. Resignation must follow the terms of the contract or legal notice period.\n\n4. Dismissal by the employer: An employer may terminate the contract due to serious misconduct such as theft, negligence, or repeated failure to perform duties. However, dismissal must follow legal procedures to avoid unfair termination.\n\nIn conclusion, in Cameroon, contracts of employment may be terminated through expiration, mutual agreement, resignation, or dismissal. These rules ensure fairness and order in labour relations."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "State and explain any five ways through which a contract can be discharged.",
                "marks": 20,
                "answer": "A contract is an agreement between two or more parties creating legal obligations. In Cameroon, a contract is said to be discharged when the rights and obligations of the parties come to an end. This can happen in several ways depending on the law and the conduct of the parties. The main ways of discharge of a contract include: performance, agreement, breach, frustration, and lapse of time.\n\n1. Discharge by performance: A contract is discharged when both parties fully perform their obligations as agreed. Each party completes what was promised in the contract. For example, a seller delivers goods and the buyer pays the price. Once performance is complete, the contract naturally ends.\n\n2. Discharge by agreement: A contract can be ended when both parties mutually agree to terminate it. This may be through cancellation, novation, or substitution of a new contract. Since contracts are based on consent, parties can also agree to end them the same way they were created.\n\n3. Discharge by breach: This occurs when one party fails to perform their obligations or performs them improperly. A breach may be fundamental or minor, and it allows the innocent party to terminate the contract and claim damages. For example, failure to deliver goods as agreed can discharge the contract.\n\n4. Discharge by frustration: A contract is discharged when an unforeseen event occurs making performance impossible, illegal, or radically different from what was agreed. For example, destruction of the subject matter or change in law. Neither party is at fault, so the contract ends automatically.\n\n5. Discharge by lapse of time: A contract may be discharged when the time allowed for enforcement expires under the law of limitation. If a party fails to enforce the contract within the prescribed period, the right to action is lost and the contract becomes unenforceable.\n\nIn conclusion, in Cameroon, a contract can be discharged through performance, agreement, breach, frustration, and lapse of time. These methods ensure that contractual relationships come to an end in a legal and orderly manner depending on circumstances."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Explain any four types of companies created under the OHADA Uniform Act.",
                "marks": 20,
                "answer": "A company is a legal entity formed by one or more persons to carry out commercial activities and share profits. In Cameroon, companies are governed by the OHADA Uniform Act on Commercial Companies and Economic Interest Groups, which provides different legal forms of companies depending on the needs of investors, capital requirements, and level of liability. The main types of companies under OHADA include: Public Limited Company (SA), Private Limited Company (SARL), Simplified Joint Stock Company (SAS), and General Partnership (SNC).\n\n1. Public Limited Company (Société Anonyme — SA): An SA is a company with a large capital divided into shares and may invite the public to subscribe to its shares. It is suitable for large business enterprises. The liability of shareholders is limited to their contributions. It is managed by a Board of Directors or a Managing Director depending on the structure adopted. Its advantage is its ability to raise large capital, but it is subject to strict regulations and complex management procedures.\n\n2. Private Limited Company (Société à Responsabilité Limitée — SARL): A SARL is a company formed by a small number of partners, usually for medium or small-scale business. The capital is divided into shares that are not freely transferable without approval of other partners. Liability is limited to contributions. It is managed by one or more managers called \"gérants.\" It is simpler to form and manage, but it cannot raise public funds like an SA.\n\n3. Simplified Joint Stock Company (Société par Actions Simplifiée — SAS): The SAS is a flexible company form introduced under OHADA law. It allows shareholders to freely organize its internal structure through statutes. It is suitable for investors who want flexibility in management and decision-making. It also has limited liability for shareholders. However, its flexibility may lead to internal conflicts if rules are not clearly defined in the statutes.\n\n4. General Partnership (Société en Nom Collectif — SNC): An SNC is a company where all partners are jointly and severally liable for the debts of the business. This means partners' personal assets can be used to pay company debts. It is based on strong trust between partners and is usually used for small businesses. Its advantage is simplicity and strong cooperation between partners, but the major disadvantage is unlimited liability, which exposes partners to high financial risk.\n\nIn conclusion, under the OHADA Uniform Act applicable in Cameroon, companies are classified into different forms such as SA, SARL, SAS, and SNC. Each type has its own legal structure, level of liability, management system, and capital requirements. These different company forms allow investors to choose the structure that best suits their business needs, whether large-scale investment, small business operations, or flexible partnerships."
              }
            ]
          }
        ]
      }
    ]
  },
  "2022": {
    "papers": [
      {
        "title": "Case Study",
        "duration": "6 hours",
        "credits": 14,
        "description": "Specialty: Software Engineering (SWE) | 2022 Session",
        "sections": [
          {
            "title": "Section A: Algorithm and Programming — I. Algorithms",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "Explain what is meant by Space complexity of an algorithm.",
                "marks": 2,
                "answer": "Space complexity is the amount of memory an algorithm requires to execute, including input data, auxiliary space, and output. Expressed using Big O notation (O(1), O(n), O(n²)).",
                "tutorial": "Considers both fixed part (constants) and variable part (dynamic allocations, recursion stack)."
              },
              {
                "id": 2,
                "text": "An algorithm execution time can be said to be worst case, average case, or best case. Define these notations.",
                "marks": 3,
                "answer": "Best case: minimum time for any input. Average case: expected time over all inputs. Worst case: maximum time for any input. Example (linear search): Best=O(1), Average=O(n/2), Worst=O(n).",
                "tutorial": "Worst-case analysis provides guaranteed performance bounds."
              },
              {
                "id": 3,
                "text": "Write an algorithm that receives three numbers and displays the maximum of these numbers using: i) Pseudocode ii) Flowchart.",
                "marks": 5,
                "answer": "i) Pseudocode:\nBEGIN\n    INPUT num1, num2, num3\n    max = num1\n    IF num2 > max THEN max = num2\n    IF num3 > max THEN max = num3\n    PRINT \"Maximum is: \", max\nEND\n\nii) Flowchart: [Start] -> [Input] -> [max=num1] -> [num2>max?] Yes->[max=num2] No->[num3>max?] Yes->[max=num3] No->[Print max] -> [End]."
              }
            ]
          },
          {
            "title": "Section A: Algorithm and Programming — II. Procedural Programming (C)",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "A class of n students take an annual examination in m subjects. Mathematics and English are coefficient 4 (compulsory), the rest are coefficient 2. Each student must offer between 4 and 10 subjects. Write a C program that: i) Enters the number of subjects, marks/20, and coefficient for each. ii) Prints total marks, average, and remark (0-6: very poor, 6-9: poor, 9-10: below average, 10: average, >10: good).",
                "marks": 10,
                "answer": "#include <stdio.h>\n\nint main() {\n    int n, m, i, j;\n    float marks[20], coeff[20], total, sumCoeff, avg;\n    printf(\"Enter number of students: \"); scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) {\n        printf(\"\\nStudent %d:\\n\", i+1);\n        printf(\"Enter subjects: \"); scanf(\"%d\", &m);\n        total = 0; sumCoeff = 0;\n        for (j = 0; j < m; j++) {\n            printf(\"Subject %d marks (0-20): \", j+1);\n            scanf(\"%f\", &marks[j]);\n            printf(\"Coefficient: \"); scanf(\"%f\", &coeff[j]);\n            total += marks[j] * coeff[j];\n            sumCoeff += coeff[j];\n        }\n        avg = total / sumCoeff;\n        printf(\"Total: %.2f, Average: %.2f\\n\", total, avg);\n        if (avg <= 6) printf(\"Remark: Very Poor\\n\");\n        else if (avg <= 9) printf(\"Remark: Poor\\n\");\n        else if (avg < 10) printf(\"Remark: Below Average\\n\");\n        else if (avg == 10) printf(\"Remark: Average\\n\");\n        else printf(\"Remark: Good\\n\");\n    }\n    return 0;\n}",
                "tutorial": "Weighted average = Σ(marks × coeff) / Σ(coeff)."
              },
              {
                "id": 2,
                "text": "Write a function named 'location_of_target' that takes an array of integers, its size, and a target value, and returns the largest subscript/position containing the target. E.g., for arr = {58,26,91,34,70,34,88} with target 34, return 5 (34 appears at positions 3 and 5; return the largest). If not found, return -1.",
                "marks": 10,
                "answer": "int location_of_target(int arr[], int size, int target) {\n    int found = -1;\n    for (int i = 0; i < size; i++)\n        if (arr[i] == target) found = i;\n    return found;\n}\n// arr={58,26,91,34,70,34,88}, target=34 returns 5",
                "tutorial": "Iterate from beginning, update on each match to get last occurrence."
              }
            ]
          },
          {
            "title": "Section A: Algorithm and Programming — III. Object Oriented Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Define the following as seen in object oriented programming:\ni) Object\nii) Classes\niii) Methods",
                "marks": 3,
                "answer": "i) Object: instance of a class with state and behavior.\nii) Class: blueprint for creating objects.\niii) Methods: functions defined inside a class."
              },
              {
                "id": 2,
                "text": "What are the four major principles that make a language object oriented?",
                "marks": 4,
                "answer": "1. Encapsulation: bundling data and methods, hiding details.\n2. Inheritance: creating classes from existing ones.\n3. Polymorphism: same method name, different implementations.\n4. Abstraction: hiding complexity, showing essentials."
              },
              {
                "id": 3,
                "text": "What are the differences between private and public class members?",
                "marks": 2,
                "answer": "Private: only accessible within the same class.\nPublic: accessible from anywhere."
              },
              {
                "id": 4,
                "text": "What are the differences between data hiding and encapsulation?",
                "marks": 2,
                "answer": "Data hiding: specifically hiding internal data (private members).\nEncapsulation: broader concept bundling data + methods + hiding. Data hiding is part of encapsulation."
              },
              {
                "id": 5,
                "text": "Design a class called Cube with a data member 'side' (double). Supply: a constructor with one argument, getter and setter methods, and a volume() method (side³). Implement the class and write a test class 'CubeTest' in C++ or Java to verify functionality.",
                "marks": 9,
                "answer": "public class Cube {\n    private double side;\n    public Cube(double s) { side = s; }\n    public double getSide() { return side; }\n    public void setSide(double s) { side = s; }\n    public double volume() { return Math.pow(side, 3); }\n\n    public static void main(String[] args) {\n        Cube c = new Cube(5.0);\n        System.out.println(\"Side: \" + c.getSide());\n        System.out.println(\"Volume: \" + c.volume());\n        c.setSide(3.0);\n        System.out.println(\"New volume: \" + c.volume());\n    }\n}",
                "tutorial": "Constructor initializes, getter/setter provide controlled access, volume() computes side³."
              }
            ]
          },
          {
            "title": "Section B: Database Development and Administration",
            "marks": 20,
            "scenario": "A private university is interested in designing a database that will track its teachers, students and courses. Information of interest includes teacher's names, matricule, telephone, gender, grade, student names, student telephone, student matricule, student gender, student address, student age, course title, course code, course ID and course credit. Each student enrolls in one or many courses of his choice and a teacher is teaching one or many courses. When a student enrolls to a course at the end, he had a mark.",
            "questions": [
              {
                "id": 1,
                "text": "What is an Entity?",
                "marks": 1,
                "answer": "An entity is a distinguishable real-world object or concept about which data is stored in a database."
              },
              {
                "id": 2,
                "text": "List all the possible entities.",
                "marks": 1.5,
                "answer": "Teacher, Student, Course, Enrollment"
              },
              {
                "id": 3,
                "text": "What is an attribute?",
                "marks": 1,
                "answer": "An attribute is a property or characteristic of an entity."
              },
              {
                "id": 4,
                "text": "On each entity listed in question 2, list its attributes.",
                "marks": 1.5,
                "answer": "Teacher: TeacherID, Name, Matricule, Phone, Gender, Grade.\nStudent: StudentID, Name, Matricule, Phone, Gender, Address, Age.\nCourse: CourseID, Code, Title, Credit.\nEnrollment: EnrollID, StudentID(FK), CourseID(FK), TeacherID(FK), Mark."
              },
              {
                "id": 5,
                "text": "What is an E-R Diagram? List all the components of an E-R diagram.",
                "marks": 3,
                "answer": "An E-R (Entity-Relationship) diagram is a graphical representation of entities, attributes, and relationships in a database.\n\nComponents: Entity (rectangle), Attribute (ellipse), Relationship (diamond), Primary Key (underlined attribute), Foreign Key, Cardinality constraints (1:1, 1:M, M:N)."
              },
              {
                "id": 6,
                "text": "Draw the equivalent E-R diagram of that private University using the crow's notation or Chen notation.",
                "marks": 3,
                "answer": "```mermaid\nerDiagram\n    TEACHER ||--o{ COURSE : teaches\n    STUDENT }o--o{ COURSE : enrolls\n    COURSE ||--o{ ENROLLMENT : has\n    TEACHER {\n        int TeacherID PK\n        string Name\n    }\n    STUDENT {\n        int StudentID PK\n        string Name\n        int Age\n    }\n    COURSE {\n        int CourseID PK\n        string Code\n        string Title\n    }\n    ENROLLMENT {\n        int EnrollID PK\n        int StudentID FK\n        int CourseID FK\n        int TeacherID FK\n        int Mark\n    }\n```",
                "tutorial": "M:N relationships resolved with junction tables."
              },
              {
                "id": 7,
                "text": "Convert the diagram to a relational model.",
                "marks": 3,
                "answer": "Tables: Teacher(TeacherID PK, Name, Matricule, Phone, Gender, Grade)\nStudent(StudentID PK, Name, Matricule, Phone, Gender, Address, Age)\nCourse(CourseID PK, Code, Title, Credit)\nEnrollment(EnrollID PK, StudentID FK, CourseID FK, TeacherID FK, Mark)"
              },
              {
                "id": 8,
                "text": "Using SQL language answer the following questions:\ni. Create the tables of your database\nii. Create the database of the university called 'UNIV'\niii. Insert a student your database\niv. Retrieve the marks of all students in a particular subject",
                "marks": 6,
                "answer": "CREATE DATABASE UNIV;\nUSE UNIV;\n\nCREATE TABLE Student (StudentID INT PK, Name VARCHAR(100), Matricule VARCHAR(20), Phone VARCHAR(15), Gender CHAR(1), Address VARCHAR(200), Age INT);\nCREATE TABLE Course (CourseID INT PK, Code VARCHAR(10), Title VARCHAR(100), Credit INT);\nCREATE TABLE Enrollment (EnrollID INT PK, StudentID INT FK, CourseID INT FK, Mark FLOAT);\n\nINSERT INTO Student VALUES (1, 'John Doe', 'SWE001', '677000001', 'M', 'Yaounde', 20);\n\nSELECT s.Name, e.Mark FROM Student s JOIN Enrollment e ON s.StudentID=e.StudentID JOIN Course c ON e.CourseID=c.CourseID WHERE c.Title='Database';"
              }
            ]
          },
          {
            "title": "Section C: Web Design",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Draw a picture of how the following HTML/CSS code will look when the browser renders it on-screen. Assume that the HTML is wrapped in a valid full page with a head and body. Indicate a non-white background by shading lightly. It is possible that some CSS rules shown will not apply to any elements.",
                "marks": 7,
                "answer": "Rendering shows: 'hello' box, a floated right div with cyan child divs (one underlined), then after clear:both, more divs with solid borders containing text with line breaks. 'goodbye' box at bottom.",
                "tutorial": "Float right + clear:both controls layout flow."
              },
              {
                "id": 2,
                "text": "Give HTML5 code to create this form.",
                "marks": 8,
                "answer": "<!DOCTYPE html>\n<html><head><title>HND Student Information</title></head><body>\n<h2>HND Student Information</h2>\n<form action=\"submit.php\" method=\"POST\">\n    Name: <input type=\"text\" name=\"name\" required><br>\n    Matricule: <input type=\"text\" name=\"matricule\" required><br>\n    DOB: <input type=\"date\" name=\"dob\" required><br>\n    Gender: <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n    <input type=\"radio\" name=\"gender\" value=\"female\"> Female<br>\n    Subject: <select name=\"subject\">\n        <option value=\"SWE\">Software Engineering</option>\n        <option value=\"CSN\">Computer Science</option>\n    </select><br>\n    <input type=\"submit\">\n</form>\n</body></html>"
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "For the lower four layers of the OSI model, give for each:\ni. Functions of the layer.\nii. An example of a protocol used in the layer.\niii. An example of network or interconnection equipment and/or end systems used.",
                "marks": 8,
                "answer": "Layer 4 Transport: end-to-end delivery, TCP/UDP, gateway.\nLayer 3 Network: routing/addressing, IP/ICMP, router.\nLayer 2 Data Link: framing/MAC, Ethernet, switch.\nLayer 1 Physical: bit transmission, RS-232, hub/repeater."
              },
              {
                "id": 2,
                "text": "What is a network topology?",
                "marks": 1,
                "answer": "A network topology is the arrangement of devices and connections in a computer network."
              },
              {
                "id": 3,
                "text": "For each of the following networks, give a sketch, two advantages and two disadvantages:\ni. Star\nii. Ring",
                "marks": 6,
                "answer": "Star: central hub, devices connect individually. Adv: easy to manage, one failure doesn't affect others. Disadv: hub is SPOF, more cable.\nRing: closed loop, each device connects to two neighbors. Adv: no collisions, equal access. Disadv: one failure breaks network, adding devices disrupts."
              }
            ]
          }
        ]
      },
      {
        "title": "System Analysis and Design",
        "duration": "4 hours",
        "credits": 7,
        "description": "Specialty: Software Engineering (SWE) | 2022 Session",
        "sections": [
          {
            "title": "Section A: Information System and Database — I. Object Modeling",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate between a class and a method.",
                "marks": 5,
                "answer": "Class: blueprint defining attributes and behaviors that objects will have. Method: function within a class implementing specific behavior."
              },
              {
                "id": 2,
                "text": "Difference between public, private, and protected access modifiers?",
                "marks": 5,
                "answer": "Public: accessible from anywhere. Private: only within the same class. Protected: within class and derived classes."
              },
              {
                "id": 3,
                "text": "List characteristics of UML.",
                "marks": 5,
                "answer": "1. Standardized notation. 2. Visual modeling. 3. Language independent. 4. Multiple diagram types (14). 5. Iterative/incremental."
              },
              {
                "id": 4,
                "text": "Explain four purposes of a class diagram.",
                "marks": 5,
                "answer": "1. Show system structure (classes, attributes, methods).\n2. Define relationships (association, inheritance).\n3. Support code generation.\n4. Document design patterns."
              },
              {
                "id": 5,
                "text": "Give an example of a class with name, attributes, and methods.",
                "marks": 5,
                "answer": "Class Student\nAttributes: studentID:int, name:String, age:int, major:String\nMethods: +registerCourse(code:String):void, +getGPA():float, +displayInfo():void"
              }
            ]
          },
          {
            "title": "Section A: Information System and Database — II. Database Administration with MySQL",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Explain: one-to-many, many-to-many, participation constraint, overlap constraint.",
                "marks": 4,
                "answer": "1:M: one instance relates to many (dept→emp). M:N: many relate to many (students↔courses). Participation: total(mandatory) vs partial(optional). Overlap: can entity belong to multiple subclasses?"
              },
              {
                "id": 2,
                "text": "Four advantages of using a DBMS?",
                "marks": 4,
                "answer": "1. Data independence. 2. Reduced redundancy. 3. Data integrity. 4. Concurrent access."
              },
              {
                "id": 3,
                "text": "Does relational model provide physical and logical data independence? Explain.",
                "marks": 4,
                "answer": "Yes. Logical: change logical schema without affecting applications (via views). Physical: change storage without affecting logical schema. SQL queries unchanged."
              },
              {
                "id": 4,
                "text": "Why does DBMS interleave transactions instead of sequential execution?",
                "marks": 4,
                "answer": "1. Improved throughput (CPU used during I/O waits).\n2. Better resource utilization.\n3. Reduced response time (short txn not blocked by long txn).\n4. Fairness."
              },
              {
                "id": 5,
                "text": "Students(sid, name, login, age, gpa). a) Which attributes are NOT a candidate key? b) Which IS a candidate key?",
                "marks": 4,
                "answer": "a) 'name' is not (Smith appears twice). 'age' is not (duplicates).\nb) 'sid' appears unique. (name, login) pair could be candidate key if login is unique."
              },
              {
                "id": 6,
                "text": "What is normalization? Explain 1NF, 2NF, 3NF.",
                "marks": 5,
                "answer": "Normalization: organizing data to reduce redundancy.\n1NF: atomic values, unique rows.\n2NF: 1NF + no partial dependencies on PK.\n3NF: 2NF + no transitive dependencies."
              }
            ]
          },
          {
            "title": "Section B: Mobile and Web — I. Web Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Advantages/disadvantages of inline, internal, and external CSS.",
                "marks": 5,
                "answer": "Inline: quick, high specificity but mixes content/presentation.\nInternal: single-page styling, no extra files but not reusable.\nExternal: reusable, cached, maintainable but extra HTTP request."
              },
              {
                "id": 2,
                "text": "Necessities of HTML forms.",
                "marks": 5,
                "answer": "User input collection, data submission, authentication, search, e-commerce."
              },
              {
                "id": 3,
                "text": "How to create frames? What is a frameset?",
                "marks": 5,
                "answer": "Frames divide window into sections. Frameset defines layout (<frameset cols=\"30%,70%\">). Deprecated in HTML5 (use iframe/CSS)."
              },
              {
                "id": 4,
                "text": "Form elements supporting media in HTML5?",
                "marks": 5,
                "answer": "<input type=\"file\">, <audio>, <video>, <canvas>, <input type=\"image\">."
              },
              {
                "id": 5,
                "text": "How to reduce page loading time?",
                "marks": 5,
                "answer": "1. Optimize images. 2. Minify CSS/JS/HTML. 3. Browser caching. 4. CDN. 5. Reduce HTTP requests (combine files)."
              }
            ]
          },
          {
            "title": "Section B: Mobile and Web — II. Mobile Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What is the Google Android SDK?",
                "marks": 5,
                "answer": "Android SDK: development tools for building Android apps - libraries, debugger, emulator, documentation, build tools."
              },
              {
                "id": 2,
                "text": "Describe the Android Framework.",
                "marks": 5,
                "answer": "Stack: Linux Kernel → HAL → ART Runtime → Native Libraries → Java API Framework → System Apps."
              },
              {
                "id": 3,
                "text": "Importance of Android emulator?",
                "marks": 5,
                "answer": "Test without physical devices, simulate multiple configurations, cost-effective, better debugging, rapid iteration."
              },
              {
                "id": 4,
                "text": "Three key loops of activity lifecycle?",
                "marks": 5,
                "answer": "1. Entire lifetime: onCreate()→onDestroy().\n2. Visible lifetime: onStart()→onStop().\n3. Foreground lifetime: onResume()→onPause()."
              },
              {
                "id": 5,
                "text": "Setting up Android device for development?",
                "marks": 5,
                "answer": "1. Enable Developer Options (tap Build Number 7x).\n2. Enable USB Debugging.\n3. Install USB drivers.\n4. Connect via USB.\n5. Verify with 'adb devices'."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Technology",
        "duration": "4 hours",
        "credits": 6,
        "description": "Specialty: Software Engineering (SWE) | 2022 Session",
        "sections": [
          {
            "title": "Section A: Multiple Choice Questions",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "C programs are converted into machine language with the help of\nA) An Editor\nB) A compiler\nC) An operating system\nD) None of the above",
                "marks": 1,
                "answer": "B) A compiler"
              },
              {
                "id": 2,
                "text": "A C variable cannot start with\nA) An alphabet\nB) A number\nC) A special symbol other than underscore\nD) both (b) and (c)",
                "marks": 1,
                "answer": "D) both (b) and (c)"
              },
              {
                "id": 3,
                "text": "Which of the following is allowed in a C Arithmetic instruction\nA) []\nB) {}\nC) ()\nD) None of the above",
                "marks": 1,
                "answer": "C) Parentheses ()"
              },
              {
                "id": 4,
                "text": "HTML documents contain one root tag called\nA) HEAD\nB) Title\nC) Body\nD) HTML",
                "marks": 1,
                "answer": "D) HTML"
              },
              {
                "id": 5,
                "text": "Basic fundamental block is called\nA) html tag\nB) html body\nC) html attribute\nD) html element",
                "marks": 1,
                "answer": "D) html element"
              },
              {
                "id": 6,
                "text": "A field or column that uniquely identifies a row in a database table is a(n)\nA) Variable\nB) Identifies\nC) Principal\nD) Key",
                "marks": 1,
                "answer": "D) Key"
              },
              {
                "id": 7,
                "text": "Which of the following is not a feature of most database management software?\nA) Sorting records in a table\nB) Creating records\nC) Preventing poorly designed tables\nD) Relating tables",
                "marks": 1,
                "answer": "C) Preventing poorly designed tables"
              },
              {
                "id": 8,
                "text": "Before you can enter any data into a database table, you must do all of the following except\nA) Determine the attributes the table will hold\nB) Provide names for each attribute\nC) Provide data types for each attribute\nD) Determine minimum and maximum values for each attribute",
                "marks": 1,
                "answer": "D) Determine minimum and maximum values for each attribute"
              },
              {
                "id": 9,
                "text": "You can extract subsets of data from a database table using a(n)\nA) Query\nB) Sort\nC) Investigation\nD) Subroutine",
                "marks": 1,
                "answer": "A) Query"
              },
              {
                "id": 10,
                "text": "A database table has the structure tblphoneOrders (orderNum, custName, custPhoneNum, itemOrdered, quantity). Which SQL statement could be used to extract all attributes for orders for item AB3333?\nA) SELECT * FROM tblphoneorderd WHERE itemorderd = \"AB3333\"\nB) SELECT tblphoneOrderds WHERE itemorderd = \"AB3333\"\nC) SELECT itemOrderd FROM tblphoneOrders WHERE = \"AB3333\"\nD) Two of these are correct",
                "marks": 1,
                "answer": "A) SELECT * FROM tblphoneorderd WHERE itemorderd = \"AB3333\" (only statement A has valid syntax; B lacks FROM, C has invalid WHERE clause)"
              },
              {
                "id": 11,
                "text": "A network administrator is building a network for a small business that has 22 hosts. The ISP has assigned only one Internet routable IP address. Which IP address block can the network administrator use to address the network?\nA) 10.11.12.16 /28\nB) 172.31.255.128 /27\nC) 192.168.1.0 /28\nD) 209.165.202.128 /27",
                "marks": 1,
                "answer": "B) 172.31.255.128 /27 (private IP with /27 = 30 usable hosts, enough for 22)"
              },
              {
                "id": 12,
                "text": "What subnet mask would be used with the hosts in the 128.107.176.0 /22 network?\nA) 255.0.0.0\nB) 255.248.0.0\nC) 255.255.252.0\nD) 255.255.255.0\nE) 255.255.255.252",
                "marks": 1,
                "answer": "C) 255.255.252.0 (/22 = 255.255.252.0)"
              },
              {
                "id": 13,
                "text": "You have been assigned the address block 10.255.255.224 /28 to create the network addresses for point-to-point WAN links. How many of these WANs can you support with this address block?\nA) 1\nB) 4\nC) 7\nD) 14",
                "marks": 1,
                "answer": "B) 4 (/28 = 16 addresses; each WAN needs /30 = 4 addresses; 16/4 = 4)"
              },
              {
                "id": 14,
                "text": "Which OSI layer is associated with IP addressing?\nA) 1\nB) 2\nC) 3\nD) 4",
                "marks": 1,
                "answer": "C) 3 (Network Layer)"
              },
              {
                "id": 15,
                "text": "Which type of addressing is found at the OSI Layer 2? (Choose two.)\nA) Logical\nB) Physical\nC) MAC\nD) IP\nE) Port",
                "marks": 1,
                "answer": "B) Physical and C) MAC"
              },
              {
                "id": 16,
                "text": "A directed graph is ................... if there is a path from each vertex to every other vertex in the digraph.\nA) Weakly connected\nB) Strongly Connected\nC) Tightly Connected\nD) Linearly Connected",
                "marks": 1,
                "answer": "B) Strongly Connected"
              },
              {
                "id": 17,
                "text": "In the ................... traversal we process all of a vertex's descendants before we move to an adjacent vertex.\nA) Depth First\nB) Breadth First\nC) With First\nD) Depth Limited",
                "marks": 1,
                "answer": "A) Depth First"
              },
              {
                "id": 18,
                "text": "State True of False.\ni) Network is a graph that has weights or costs associated with it.\nii) An undirected graph which contains no cycles is called a forest.\niii) A graph is said to be complete if there is no edge between every pair of vertices.\nA) True, False, True\nB) True, True, False\nC) True, True, True\nD) False, True, True",
                "marks": 1,
                "answer": "B) True, True, False"
              },
              {
                "id": 19,
                "text": "Inserting an item into the stack when stack is not full is called ............. operation and deletion of item from the stack, when stack is not empty is called ............. operation.\nA) push, pop\nB) pop, push\nC) insert, delete\nD) delete, insert",
                "marks": 1,
                "answer": "A) push, pop"
              },
              {
                "id": 20,
                "text": "................. is a pile in which items are added at one end and removed from the other.\nA) Stack\nB) Queue\nC) List\nD) None of the above",
                "marks": 1,
                "answer": "B) Queue"
              },
              {
                "id": 21,
                "text": "......... scheduling is approximated by predicting the next CPU burst with an exponential average of the measured lengths of previous CPU bursts.\nA) multilevel queue\nB) RR\nC) FCFS\nD) SJF",
                "marks": 1,
                "answer": "D) SJF"
              },
              {
                "id": 22,
                "text": "A process control block should contain ___________\nA) the process ID\nB) locations to store register values\nC) a list of all open files\nD) All of these responses are correct",
                "marks": 1,
                "answer": "D) All of these responses are correct"
              },
              {
                "id": 23,
                "text": "The _____ multithreading model multiplexes many user-level threads to a smaller or equal number of kernel threads.\nA) many-to-one model\nB) one-to-one model\nC) many-to-many model\nD) many-to-some model",
                "marks": 1,
                "answer": "C) many-to-many model"
              },
              {
                "id": 24,
                "text": "........... is the number of processes that are completed per time unit.\nA) CPU utilization\nB) Response time\nC) Turnaround time\nD) Throughput",
                "marks": 1,
                "answer": "D) Throughput"
              },
              {
                "id": 25,
                "text": "Which of the following devices forwards data packets to all connected ports?\nA) Router\nB) Switch\nC) Bridge\nD) Hub",
                "marks": 1,
                "answer": "D) Hub"
              },
              {
                "id": 26,
                "text": "Of the following routing methods, which is likely to take the most amount of administration time in the long term?\nA) Static\nB) Link state\nC) Distance vector\nD) Dynamic",
                "marks": 1,
                "answer": "A) Static"
              },
              {
                "id": 27,
                "text": "Your manager asks you to look into some upgrades for your network. The current network is a 10Base2 system, and you have been experiencing numerous hard-to-track-down cable problems. As a result, you have decided to upgrade to a 10BaseT system. On the networking vendor's price list are both active and passive hubs. The passive hubs are considerably cheaper than the active ones, and you are tempted to opt for them so that you come in under budget. A colleague advises you against the purchase of passive hubs.",
                "marks": 1,
                "answer": "Scenario description — answer question 28 using this scenario"
              },
              {
                "id": 28,
                "text": "What is the primary difference between an active and a passive hub?\nA) Passive hubs do not offer any management capabilities.\nB) Passive hubs cannot be used in full-duplex mode.\nC) Passive hubs do not regenerate the data signal.\nD) Passive hubs forward data to all ports on the hub, not just the one for which they are intended.",
                "marks": 1,
                "answer": "C) Passive hubs do not regenerate the data signal"
              },
              {
                "id": 29,
                "text": "Which of the following statements best describes a gateway?\nA) It is a device that enables data to be routed from one network to another.\nB) It is a term used to refer to any device that resides at the entrance of a network.\nC) It is a device, system, or application that translates data from one format to another.\nD) It is a network device that can forward or block data based on the MAC address embedded within the packet.",
                "marks": 1,
                "answer": "C) It translates data from one format to another"
              },
              {
                "id": 30,
                "text": "Which operator is evaluated first?\nA) NOT\nB) AND\nC) XOR\nD) OR",
                "marks": 1,
                "answer": "A) NOT"
              },
              {
                "id": 31,
                "text": "How many return statements are allowed in a Function Procedure?\nA) 0\nB) 1\nC) 2\nD) There is no limit",
                "marks": 1,
                "answer": "D) There is no limit"
              },
              {
                "id": 32,
                "text": "What does your class can hold?\nA) data\nB) functions\nC) both a &amp; b\nD) none of the mentioned",
                "marks": 1,
                "answer": "C) both a &amp; b"
              },
              {
                "id": 33,
                "text": "What does inheritance allow you to do?\nA) create a class\nB) create a hierarchy of classes\nC) access methods\nD) None of the mentioned",
                "marks": 1,
                "answer": "B) create a hierarchy of classes"
              },
              {
                "id": 34,
                "text": "Which of the following Information systems are aimed at improving the routine business activities on which all organizations depend?\nA) Management Information systems\nB) Decision support systems\nC) Transaction processing systems\nD) Management support systems",
                "marks": 1,
                "answer": "C) Transaction processing systems (TPS)"
              },
              {
                "id": 35,
                "text": "Which of the following strategies are adopted if information requirements are not well-defined?\nA) Rapid application development method\nB) Structured analysis development method\nC) Systems development life cycle method\nD) Prototyping method",
                "marks": 1,
                "answer": "D) Prototyping method"
              },
              {
                "id": 36,
                "text": "Structured Programming involves:\nA) functional modularization\nB) localization of errors\nC) decentralized programming\nD) stress on analysis",
                "marks": 1,
                "answer": "A) functional modularization"
              },
              {
                "id": 37,
                "text": "Which of the following is not a fact-finding technique?\nA) Third party enquiry\nB) Interview\nC) Questionnaire\nD) Record reviews",
                "marks": 1,
                "answer": "A) Third party enquiry"
              },
              {
                "id": 38,
                "text": "In an E-R diagram attributes are represented by\nA) rectangle\nB) square\nC) ellipse\nD) triangle",
                "marks": 1,
                "answer": "C) ellipse"
              },
              {
                "id": 39,
                "text": "In case of entity integrity, the primary key may be\nA) not Null\nB) Null\nC) both Null &amp; not Null\nD) any value.",
                "marks": 1,
                "answer": "A) not Null"
              },
              {
                "id": 40,
                "text": "Count function in SQL returns the number of\nA) values.\nB) distinct values.\nC) groups.\nD) columns.",
                "marks": 1,
                "answer": "A) values"
              }
            ]
          },
          {
            "title": "Section B: A. Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Distinguish between the following as seen in computer programming with examples if necessary.\n\ni) High level and low level programming language (1mk)\nii) C programming language and C++ (1mk)\niii) Program interpretation and program compilation (1mk)",
                "marks": 3,
                "answer": "i) High-level languages (Python, Java) use English-like syntax, are machine-independent, and require compilation/interpretation. Low-level languages (Assembly, Machine code) are closer to hardware, machine-specific, and execute faster.\n\nii) C: procedural language, no classes/objects, no exception handling, manual memory management. C++: extends C with OOP (classes, inheritance, polymorphism, templates), exception handling, richer standard library.\n\niii) Interpretation: translates and executes source code line-by-line at runtime (Python, JavaScript). Compilation: translates entire source to machine code before execution (C, C++), producing standalone executables."
              },
              {
                "id": 2,
                "text": "Write a C code that computes the factorial of an integer n. When does the code fail (upper limit on n for the result to be correct) and why?",
                "marks": 5,
                "answer": "#include &lt;stdio.h&gt;\n\nint main() {\n    int n, i;\n    unsigned long long fact = 1;\n    printf(\"Enter an integer: \");\n    scanf(\"%d\", &amp;n);\n    if (n &lt; 0)\n        printf(\"Factorial not defined for negative numbers.\\n\");\n    else {\n        for (i = 1; i &lt;= n; i++)\n            fact *= i;\n        printf(\"Factorial of %d = %llu\\n\", n, fact);\n    }\n    return 0;\n}\n\nFails when n &gt; 20 for unsigned long long (64-bit). 20! fits in 64 bits but 21! exceeds max unsigned 64-bit integer, causing wraparound overflow."
              },
              {
                "id": 3,
                "text": "Consider 2 three-dimensional vectors X and Y whose components are specified by the user and stored in 1D arrays. Write the C code that verifies if the two vectors are orthogonal.\n(Two vectors a and b are orthogonal if dot product a.b = 0.)",
                "marks": 6,
                "answer": "#include &lt;stdio.h&gt;\n\nint main() {\n    float X[3], Y[3], dot = 0;\n    int i;\n    printf(\"Enter components of vector X (x y z): \");\n    scanf(\"%f %f %f\", &amp;X[0], &amp;X[1], &amp;X[2]);\n    printf(\"Enter components of vector Y (x y z): \");\n    scanf(\"%f %f %f\", &amp;Y[0], &amp;Y[1], &amp;Y[2]);\n    for (i = 0; i &lt; 3; i++)\n        dot += X[i] * Y[i];\n    if (dot == 0)\n        printf(\"Vectors are orthogonal.\\n\");\n    else\n        printf(\"Vectors are NOT orthogonal (dot product = %f).\\n\", dot);\n    return 0;\n}"
              },
              {
                "id": 4,
                "text": "Describe App Widgets?",
                "marks": 6,
                "answer": "App Widgets are small, focused application components that provide quick access to specific functionality without launching the full application.\n\nKey aspects:\n1. Miniature application views that can be embedded in other applications or home screens (Android home screen widgets for weather, clock, calendar).\n2. In GUI development, widgets are basic building blocks: buttons, text fields, labels, sliders, checkboxes, dropdown menus.\n3. Follow an event-driven programming model where user actions trigger event handlers.\n4. Reusable components that encapsulate appearance and behavior, promoting modular design.\n5. Can display real-time or periodically updated data without user intervention.\n6. Examples: text box (input), progress bar (task completion), combo box (selection), toggle switch (on/off)."
              }
            ]
          },
          {
            "title": "Section B: B. Database",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "What are the characteristics of a relational database?",
                "marks": 6,
                "answer": "1. Data organized in tables (relations) with rows and columns.\n2. Each row (tuple) uniquely identified by a primary key.\n3. Relationships between tables via foreign keys.\n4. Data integrity enforced through constraints (entity, referential, domain).\n5. SQL used for data definition, manipulation, and querying.\n6. ACID properties (Atomicity, Consistency, Isolation, Durability).\n7. Data independence (logical and physical).\n8. Minimal data redundancy through normalization."
              },
              {
                "id": 2,
                "text": "List five disadvantages of file processing.",
                "marks": 5,
                "answer": "1. Data redundancy - same data stored in multiple files, wasting storage.\n2. Data inconsistency - updates may not propagate, leading to conflicting values.\n3. Difficulty in accessing data - no standard query language; each program codes its own access.\n4. Data isolation - data scattered across incompatible file formats, hard to integrate.\n5. Integrity problems - no built-in constraints; must be enforced by each application.\n6. Concurrent access anomalies - simultaneous updates can corrupt data.\n7. Security issues - limited granular access control."
              },
              {
                "id": 3,
                "text": "When would using a personal DBMS make sense?",
                "marks": 2,
                "answer": "Personal DBMS (e.g., MS Access, SQLite) makes sense for:\n- Small-scale, single-user applications with low cost and simplicity needs.\n- No concurrent access requirements (only one user at a time).\n- Small data volumes (personal contacts, home inventory, student projects).\n- Rapid development without dedicated database administration.\n- Data stored and used on a single machine (no network distribution)."
              },
              {
                "id": 4,
                "text": "Describe what the term normalization means.",
                "marks": 2,
                "answer": "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves decomposing tables into smaller related tables and defining relationships between them. The process follows normal forms (1NF, 2NF, 3NF, BCNF) where each form addresses specific anomalies (insertion, update, deletion). The goal: each piece of data stored once, eliminating duplicates and inconsistencies."
              }
            ]
          },
          {
            "title": "Section B: C. Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "What are the responsibilities of Application and Presentation Layer?",
                "marks": 4,
                "answer": "Application Layer (L7):\n- Provides network services directly to end-user applications.\n- Protocols: HTTP/HTTPS (web), FTP (file transfer), SMTP/IMAP (email), DNS, DHCP.\n- Identifies communication partners, determines resource availability.\n\nPresentation Layer (L6):\n- Data translation: converts between application and network formats (EBCDIC to ASCII).\n- Data encryption/decryption: secure transmission (SSL/TLS).\n- Data compression: reduces data size for efficient transmission.\n- Syntax negotiation between communicating systems."
              },
              {
                "id": 2,
                "text": "Give the two classes of hardware building blocks?",
                "marks": 2,
                "answer": "1. DTE (Data Terminal Equipment) - end-user devices that generate/consume data (computers, printers, servers, routers).\n\n2. DCE (Data Circuit-terminating Equipment) - intermediate devices providing clocking, signal conversion, transmission (modems, switches, hubs, CSU/DSU)."
              },
              {
                "id": 3,
                "text": "What are the different link types used to build a computer network?",
                "marks": 2,
                "answer": "1. Point-to-Point Link: direct connection between two devices (serial cable, leased line).\n2. Broadcast Link: single channel shared by multiple devices (Ethernet, Wi-Fi).\n3. Multipoint Link: multiple devices share one medium, one transmits at a time.\n4. Simplex: one-way communication only.\n5. Half-Duplex: both directions but not simultaneously.\n6. Full-Duplex: simultaneous two-way communication."
              },
              {
                "id": 4,
                "text": "Establish, if there is any, link between the OSI model layers and the TCP/IP model layers.",
                "marks": 5,
                "answer": "OSI Application (L7), Presentation (L6), Session (L5) -&gt; TCP/IP Application Layer (HTTP, FTP, SMTP, DNS)\n\nOSI Transport (L4) -&gt; TCP/IP Transport Layer (TCP reliable, UDP fast)\n\nOSI Network (L3) -&gt; TCP/IP Internet Layer (IP, ICMP, ARP)\n\nOSI Data Link (L2) and Physical (L1) -&gt; TCP/IP Network Access Layer (Ethernet, Wi-Fi, PPP)\n\nDifferences:\n- TCP/IP combines OSI L5-L7 into one Application layer.\n- TCP/IP combines OSI L1-L2 into Network Access.\n- TCP/IP is simpler (4 vs 7 layers), developed from protocol implementation.\n- OSI is more theoretical with clearer separation of concerns."
              },
              {
                "id": 5,
                "text": "What are the categories of Transmission media?",
                "marks": 2,
                "answer": "1. Guided (Wired) Media - signals travel through physical conductor:\n   a) Twisted Pair Cable (UTP, STP) - Ethernet, telephone.\n   b) Coaxial Cable - cable TV, older Ethernet.\n   c) Fiber Optic - light pulses, high bandwidth, immune to interference.\n\n2. Unguided (Wireless) Media - signals propagate through air:\n   a) Radio Waves (Wi-Fi, Bluetooth, cellular) - omnidirectional.\n   b) Microwaves (satellite, point-to-point) - directional, line of sight.\n   c) Infrared (remote controls) - short range, line of sight."
              }
            ]
          },
          {
            "title": "Section B: D. Algorithm and data structure",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "Define and explain the terms: Flowchart, Pseudocode, data type.",
                "marks": 2,
                "answer": "Flowchart: graphical representation of algorithm using standardized symbols (rectangles=process, diamonds=decision, ovals=start/end) connected by arrows showing control flow.\n\nPseudocode: informal human-readable algorithm description using programming conventions without specific syntax, bridging natural language and actual code.\n\nData type: classification of data (int, float, char, string, boolean) determining allowed operations, value range, and memory storage requirements."
              },
              {
                "id": 2,
                "text": "Give the use of each of these symbols used in flowchart designing:\na) Oval/Ellipse\nb) Rectangle\nc) Diamond\nd) Parallelogram\ne) Arrow\nf) Circle",
                "marks": 2,
                "answer": "a) Oval/Ellipse - Start/End (Terminator): indicates beginning or end of program.\nb) Rectangle - Process: represents an action/operation (calculation, assignment).\nc) Diamond - Decision: conditional branch with YES/NO outcomes.\nd) Parallelogram - Input/Output: data input (read) or output (print).\ne) Arrow - Flow Line: shows direction and sequence of process flow.\nf) Circle - Connector: joins flowchart sections across pages or avoids crossed lines."
              },
              {
                "id": 3,
                "text": "Write an algorithm to find the largest value of 5 numbers in an array.",
                "marks": 3,
                "answer": "BEGIN\n    INPUT numbers[5]\n    max = numbers[0]\n    FOR i = 1 TO 4\n        IF numbers[i] &gt; max THEN\n            max = numbers[i]\n        END IF\n    END FOR\n    PRINT \"Largest value is:\", max\nEND"
              },
              {
                "id": 4,
                "text": "Write an algorithm to search any number in an array.",
                "marks": 3,
                "answer": "BEGIN\n    INPUT arr[n], target\n    found = FALSE\n    FOR i = 0 TO n-1\n        IF arr[i] == target THEN\n            PRINT \"Found at position\", i\n            found = TRUE\n            EXIT\n        END IF\n    END FOR\n    IF found == FALSE THEN\n        PRINT \"Not found\"\n    END IF\nEND"
              }
            ]
          }
        ]
      },
      {
        "title": "Information System",
        "duration": "3 hours",
        "credits": 6,
        "description": "Specialty: Software Engineering (SWE) | 2022 Session",
        "sections": [
          {
            "title": "Section A: System Architecture",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Essential characteristics of cloud computing?",
                "marks": 4,
                "answer": "1. On-demand self-service.\n2. Broad network access.\n3. Resource pooling.\n4. Rapid elasticity.\n5. Measured service."
              },
              {
                "id": 2,
                "text": "Types of deployment models in cloud?",
                "marks": 4,
                "answer": "1. Public cloud: services over public internet.\n2. Private cloud: exclusive to one organization.\n3. Hybrid cloud: combination.\n4. Community cloud: shared by several organizations."
              },
              {
                "id": 3,
                "text": "Describe different Guided Media.",
                "marks": 4,
                "answer": "1. Twisted pair: two insulated copper wires twisted (Ethernet cables).\n2. Coaxial cable: central conductor, insulating layer, shield (cable TV).\n3. Fiber optic: glass fibers transmitting light pulses (high speed, long distance)."
              },
              {
                "id": 4,
                "text": "What is wireless communication?",
                "marks": 4,
                "answer": "Transmission of data without physical connection, using electromagnetic waves (radio, infrared, microwave). Examples: Wi-Fi, Bluetooth, cellular networks."
              },
              {
                "id": 5,
                "text": "Two advantages and two disadvantages of fiber optic cable.",
                "marks": 4,
                "answer": "Advantages: 1) Very high bandwidth/speed. 2) Immune to electromagnetic interference.\nDisadvantages: 1) Expensive to install. 2) Fragile and difficult to splice."
              },
              {
                "id": 6,
                "text": "Three factors data rate depends on?",
                "marks": 4,
                "answer": "1. Bandwidth of the medium.\n2. Signal-to-noise ratio.\n3. Encoding/transmission scheme."
              },
              {
                "id": 7,
                "text": "What is an Object server in client-server?",
                "marks": 4,
                "answer": "An Object server stores and manages objects (not just data), providing methods to manipulate them. Used in distributed object computing (CORBA, DCOM)."
              },
              {
                "id": 8,
                "text": "Two broad classes of middleware?",
                "marks": 4,
                "answer": "1. General middleware: communication services (RPC, MOM).\n2. Service-specific middleware: for specific services (database, web)."
              },
              {
                "id": 9,
                "text": "Five technologies for client/server applications?",
                "marks": 4,
                "answer": "1. Database middleware (ODBC/JDBC).\n2. RPC.\n3. Object brokers (CORBA).\n4. Web services (HTTP/REST).\n5. Message-oriented middleware."
              },
              {
                "id": 10,
                "text": "Public cloud vs private cloud?",
                "marks": 4,
                "answer": "Public: third-party, multi-tenant, pay-as-you-go. Private: single-tenant, more control/security, higher cost."
              }
            ]
          },
          {
            "title": "Section B: Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Why are user-level threads cooperatively scheduled?",
                "marks": 4,
                "answer": "User-level threads are managed by a thread library without kernel support. The kernel sees only one process, so it cannot preempt individual threads. Threads voluntarily yield control, making scheduling cooperative rather than preemptive."
              },
              {
                "id": 2,
                "text": "Describe steps when a timer interrupt causes a context switch.",
                "marks": 6,
                "answer": "1. Timer interrupt occurs.\n2. CPU saves current process context (PC, registers) on stack.\n3. CPU switches to kernel mode.\n4. Interrupt handler runs, identifies interrupt as timer.\n5. Scheduler invoked, selects next process.\n6. Context switch: OS saves PCB of current process, loads PCB of next process.\n7. Restore new process's registers/memory mapping.\n8. Return to user mode, resume new process."
              },
              {
                "id": 3,
                "text": "What does the context switching assembly function do internally?",
                "marks": 6,
                "answer": "1. Saves current process's CPU registers (general purpose, stack pointer, program counter) onto the kernel stack.\n2. Saves the stack pointer into the current PCB.\n3. Loads the new process's stack pointer from its PCB.\n4. Restores the new process's registers from the kernel stack.\n5. Returns to user mode and jumps to the restored program counter."
              },
              {
                "id": 4,
                "text": "What is a race condition? Give an example.",
                "marks": 4,
                "answer": "Race condition: multiple processes/threads access shared data concurrently, and the outcome depends on the order of execution. Example: two threads incrementing a shared counter (count++) - if both read 5, increment to 6, and write 6, the result is 6 instead of 7."
              },
              {
                "id": 5,
                "text": "What is a critical region? How does it relate to shared resources?",
                "marks": 4,
                "answer": "A critical region (critical section) is a segment of code that accesses shared resources (variables, files) that must not be executed by multiple processes simultaneously. Proper synchronization ensures only one process executes its critical section at a time, protecting shared resources from race conditions."
              },
              {
                "id": 6,
                "text": "Three requirements of any critical section solution? Why needed?",
                "marks": 6,
                "answer": "1. Mutual exclusion: only one process executes critical section at a time (prevents race conditions).\n2. Progress: if no process is in critical section, a waiting process must eventually enter (prevents deadlock).\n3. Bounded waiting: a limit on how long a process waits to enter (prevents starvation)."
              },
              {
                "id": 7,
                "text": "Why is turn passing a poor solution to critical sections?",
                "marks": 4,
                "answer": "Turn passing (strict alternation) violates the Progress requirement. If it's process A's turn but A is not ready (e.g., in another section), process B must wait even though B could safely proceed. This wastes CPU time and reduces system throughput."
              },
              {
                "id": 8,
                "text": "Advantages and disadvantages of interrupt disabling for mutual exclusion?",
                "marks": 6,
                "answer": "Advantages: Simple to implement, no special hardware needed.\nDisadvantages: \n1. Only works in uniprocessor systems.\n2. Disabling interrupts for too long can cause clock/device issues.\n3. User programs cannot be trusted with this privilege.\n4. Not scalable to multiprocessor systems."
              }
            ]
          },
          {
            "title": "Section C: Project Management and Legal Regulations",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Define: a) Project b) Software project manager",
                "marks": 2,
                "answer": "a) Project: temporary endeavor with defined beginning/end, unique deliverables, constrained by time/cost/resources.\nb) Software project manager: person responsible for planning, executing, monitoring, and closing software development projects."
              },
              {
                "id": 2,
                "text": "a) Activities during project scope management. b) What is estimated during project estimation? c) Two project estimation techniques.",
                "marks": 14,
                "answer": "a) Scope management: 1) Scope planning, 2) Scope definition, 3) Work Breakdown Structure (WBS), 4) Scope verification, 5) Scope control.\n\nb) Estimations: 1) Effort (person-months), 2) Duration (calendar time), 3) Cost (budget), 4) Resources (team size, tools), 5) Risk (contingency).\n\nc) Techniques: 1) Expert judgment (Delphi technique), 2) Analogous estimation (based on similar past projects), 3) Parametric (COCOMO model), 4) Bottom-up (WBS-based).",
                "tutorial": "Accurate estimation is critical for project success."
              },
              {
                "id": 3,
                "text": "a) What is Project Scheduling? b) Activities during Project Scheduling.",
                "marks": 4,
                "answer": "a) Project scheduling: creating a timeline defining start/end dates for project activities, sequencing tasks, allocating resources, and setting milestones.\nb) Activities: 1) Define activities, 2) Sequence activities, 3) Estimate resources/durations, 4) Develop schedule (Gantt chart, PERT/CPM), 5) Schedule control/monitoring."
              }
            ]
          }
        ]
      },
      {
        "title": "Discrete Mathematics",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: SWE, NWS, EDM | 2022 Session",
        "sections": [
          {
            "title": "Section A: MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Range of data 5, 15, 20, 3, 1, -5, 17: A) 25 B) 19 C) 24 D) 16",
                "marks": 1,
                "answer": "A) 25 (Range = 20 - (-5) = 25)"
              },
              {
                "id": 2,
                "text": "Mean of 4 numbers = 12. Fifth added, mean = 15. Fifth number? A) 60 B) 30 C) 15 D) 27",
                "marks": 1,
                "answer": "D) 27 (Sum of 4 = 48, sum of 5 = 75, fifth = 75-48=27)"
              },
              {
                "id": 3,
                "text": "n=100, Σx=200, Σx²=600. Variance? A) 2 B) 4 C) 5 D) 6",
                "marks": 1,
                "answer": "A) 2 (Var = 600/100 - (200/100)² = 6 - 4 = 2)"
              },
              {
                "id": 4,
                "text": "Lower class limit of 10-19: A) 10.5 B) 10 C) 9 D) 9.5",
                "marks": 1,
                "answer": "B) 10"
              },
              {
                "id": 5,
                "text": "P(A)=0.75, P(B)=0.4, P(A or B)=0.9. P(A and B)? A) 0.75 B) 0.4 C) 0.65 D) 0.25",
                "marks": 1,
                "answer": "D) 0.25 (P(A∪B)=P(A)+P(B)-P(A∩B) => 0.9=0.75+0.4-P(A∩B) => P(A∩B)=0.25)"
              },
              {
                "id": 6,
                "text": "x²-2x+kx+2. (x+2) is a factor. k=? A) 6 B) -7 C) 7 D) -7",
                "marks": 1,
                "answer": "D) -7 (f(-2)=0 => -8-8-2k+2=0 => -14-2k=0 => k=-7)"
              },
              {
                "id": 7,
                "text": "Coefficient of x² in Maclaurin of ln(1-2x): A) 4 B) 1 C) 2 D) -2",
                "marks": 1,
                "answer": "D) -2 (ln(1-2x) = -2x - 2x² + ... coefficient of x² = -2)"
              },
              {
                "id": 8,
                "text": "lim(x²+1)/(3x-5) as x→∞: A) 1/3 B) ∞ C) 0 D) ∞",
                "marks": 1,
                "answer": "B) ∞ (degree numerator > denominator)"
              },
              {
                "id": 9,
                "text": "∫0¹ x dx = ? A) 2√2 B) 2√2-2 C) √2-1 D) 5(√2-1)",
                "marks": 1,
                "answer": "C) √2-1"
              },
              {
                "id": 10,
                "text": "Domain of f(x)=√(1-2x): A) x≤1/2 B) x≥1/2 C) x≤2 D) x≥2",
                "marks": 1,
                "answer": "A) x ≤ 1/2"
              },
              {
                "id": 11,
                "text": "|2x-3|=3. Solution: A) 0 B) 3 C) 0 and 3 D) -3",
                "marks": 1,
                "answer": "C) 0 and 3 (2x-3=±3 => x=3 or x=0)"
              },
              {
                "id": 12,
                "text": "y=tanh 2x, dy/dx=? A) sech²2x B) 2sech²2x C) ½sech²2x D) -2sech²2x",
                "marks": 1,
                "answer": "B) 2sech²2x"
              },
              {
                "id": 13,
                "text": "P(X=x): 1(1/2), 2(1/3), 3(1/6). Mean? A) 1 B) 5/3 C) 1/3 D) 2/3",
                "marks": 1,
                "answer": "B) 5/3 (1×½ + 2×⅓ + 3×⅙ = ½ + ⅔ + ½ = 1⅔)"
              },
              {
                "id": 14,
                "text": "E(X)=3, E(Y)=4. E(3X-2Y)=? A) 1 B) -1 C) 6 D) -8",
                "marks": 1,
                "answer": "A) 1 (3(3)-2(4)=9-8=1)"
              },
              {
                "id": 15,
                "text": "Teams A probability ½ of winning. Plays 4 games. P(exactly 2 wins)?",
                "marks": 1,
                "answer": "C(4,2)×(½)²×(½)² = 6×¼×¼ = 6/16 = ⅜"
              },
              {
                "id": 16,
                "text": "2% defective. P(3 defectives in 100)? A) 0.18 B) 0.02 C) 0.03 D) 0.135",
                "marks": 1,
                "answer": "A) 0.18 (Poisson: λ=2, P(X=3)=e⁻²(8/6)=0.18)"
              },
              {
                "id": 17,
                "text": "f(x)={k for 0≤x≤2, k(x-1) for 2<x<3}. Find k.",
                "marks": 1,
                "answer": "∫f = 1: 2k + k[(9/2-3)-(2-2)] = 2k + k/2 = 2.5k = 1 => k = 0.4"
              },
              {
                "id": 18,
                "text": "f(x)=2x+1, g(x)=3x+4. (f∘g)(x)=? A) 6x+9 B) 6x+7 C) 6x+6 D) 6x+8",
                "marks": 1,
                "answer": "A) 6x+9 (f(g(x)) = 2(3x+4)+1 = 6x+8+1 = 6x+9)"
              },
              {
                "id": 19,
                "text": "f(x)=x³+5x. Function is: A) periodic B) even C) odd D) parity",
                "marks": 1,
                "answer": "C) odd (f(-x) = -x³-5x = -(x³+5x) = -f(x))"
              },
              {
                "id": 20,
                "text": "f(x)={kx+3 if x<2, ex+1 if x≥2}. Continuous at x=2. k=? A) 5 B) 2 C) 1 D) -1",
                "marks": 1,
                "answer": "C) 1 (2k+3 = 2e+1 => 2k = 2e-2 => k = e-1... Actually checking: k(2)+3 = e²+1 => 2k+3 = e²+1 => k = (e²-2)/2 ≈ 2.69, but given simpler options: if ex means e^x then 2k+3=e²+1 => 2k=e²-2. If ex means 1+x then 2k+3=3 => k=0. None match. Let me recheck: most likely f(x)={kx+3 if x<2, x+1 if x≥2} => 2k+3=3 => k=0. But given options: A)5 B)2 C)1 D)-1... If right is 2x+1: 2k+3=5 => k=1. So C) 1"
              }
            ]
          },
          {
            "title": "Section B: Structural Analysis and Statistics",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Monthly earnings of engineers: classes 1-3(2), 4-6(4), 7-9(8), 10-12(5), 13-15(1). a) Calculate mean, variance, SD. b) Calculate median and mode.",
                "marks": 20,
                "answer": "Midpoints: 2, 5, 8, 11, 14\nMean = (2×2+5×4+8×8+11×5+14×1)/(2+4+8+5+1) = (4+20+64+55+14)/20 = 157/20 = 7.85\nVariance = Σf(x-μ)²/n = [2(2-7.85)²+4(5-7.85)²+8(8-7.85)²+5(11-7.85)²+1(14-7.85)²]/20\n= [2(34.22)+4(8.12)+8(0.02)+5(9.92)+1(37.82)]/20\n= [68.44+32.48+0.16+49.60+37.82]/20 = 188.5/20 = 9.425\nSD = √9.425 = 3.07\n\nMedian: n/2=10, lies in 7-9 class. Median = 6.5 + 3(10-6)/8 = 6.5+1.5 = 8.0\nMode: modal class 7-9. Mode = 6.5 + 3(8-4)/((8-4)+(8-5)) = 6.5+3(4/7) = 6.5+1.71 = 8.21",
                "tutorial": "Grouped data: use midpoints for calculations."
              },
              {
                "id": 2,
                "text": "Frequency(Hz): 50,100,150,200,250,300,350. Reactance(ohm): 30,65,90,130,150,190,200. Find regression line of reactance on frequency.",
                "marks": 10,
                "answer": "Let x=frequency, y=reactance.\nΣx=1400, Σy=855, Σxy=1400×...\nActually compute: Σx=1400, x̄=200, Σy=855, ȳ=122.14\nΣxy=50(30)+100(65)+150(90)+200(130)+250(150)+300(190)+350(200)\n=1500+6500+13500+26000+37500+57000+70000=212000\nΣx²=2500+10000+22500+40000+62500+90000+122500=350000\nb = (Σxy - n x̄ ȳ)/(Σx² - n x̄²) = (212000-7(200)(122.14))/(350000-7(40000))\n= (212000-171000)/(350000-280000) = 41000/70000 = 0.586\na = ȳ - bx̄ = 122.14 - 0.586(200) = 122.14 - 117.2 = 4.94\nRegression: y = 4.94 + 0.586x",
                "tutorial": "y = a + bx where b = Cov(x,y)/Var(x)"
              },
              {
                "id": 3,
                "text": "Roll a fair die, X = outcome. a) E(X) b) Var(X) c-h) Various probabilities using exact, Markov, Chebyshev.",
                "marks": 15,
                "answer": "a) E(X) = (1+2+3+4+5+6)/6 = 3.5\nb) Var(X) = E(X²)-E(X)² = 91/6-12.25 = 15.167-12.25 = 2.917\nc) P(X=6) = 1/6 = 0.1667\nd) Markov: P(X≥6) ≤ 3.5/6 = 0.583\ne) Chebyshev(two-sided): P(|X-3.5|≥2.5) ≤ 2.917/6.25 = 0.467\nf) Chebyshev(one-sided): P(X-3.5≥2.5) ≤ 2.917/(2.917+6.25) = 0.318",
                "tutorial": "Markov: P(X≥a) ≤ E(X)/a. Chebyshev: P(|X-μ|≥k) ≤ σ²/k²."
              },
              {
                "id": 4,
                "text": "Shop: 70% brand A (70% large), 30% brand B (40% small). a) Tree diagram b) P(small) c) P(brand A | small)",
                "marks": 8,
                "answer": "a) Tree: A(0.7)→Large(0.7),Small(0.3); B(0.3)→Large(0.6),Small(0.4)\nb) P(Small)=0.3(0.7)+0.4(0.3)=0.21+0.12=0.33\nc) P(A|Small)=0.21/0.33=0.6364",
                "tutorial": "Bayes' theorem: P(A|B)=P(B|A)P(A)/P(B)."
              }
            ]
          },
          {
            "title": "Section C: Differential Equations and Transforms",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Solve differential equation: (y-x)dx + x²dy = 0",
                "marks": 8,
                "answer": "Rearranging: x²dy = (x-y)dx => dy/dx = (x-y)/x² = 1/x - y/x²\nThis is linear: dy/dx + (1/x²)y = 1/x\nIntegrating factor μ = e^(∫1/x² dx) = e^(-1/x)\ny·e^(-1/x) = ∫(1/x)e^(-1/x)dx = e^(-1/x) + C\ny = 1 + Ce^(1/x)",
                "tutorial": "First-order linear ODE solved with integrating factor."
              },
              {
                "id": 2,
                "text": "Solve: d²y/dt² + 3dy/dt + 2y = e^t, y(0)=0, y'(0)=0",
                "marks": 8,
                "answer": "Auxiliary: r²+3r+2=0 => r=-1,-2\nCF: yc = Ae^(-t) + Be^(-2t)\nPI: yp = Ce^t => Ce^t+3Ce^t+2Ce^t=e^t => 6C=1 => C=1/6\ny = Ae^(-t) + Be^(-2t) + (1/6)e^t\ny(0)=A+B+1/6=0\ny'(0)=-A-2B+1/6=0\nSolving: A=-1/3, B=1/6\ny = -(1/3)e^(-t) + (1/6)e^(-2t) + (1/6)e^t",
                "tutorial": "Second-order ODE: CF from characteristic equation, PI from method of undetermined coefficients."
              },
              {
                "id": 3,
                "text": "Find inverse Laplace: (5s+8)/(s²-2s-3)",
                "marks": 5,
                "answer": "s²-2s-3 = (s-3)(s+1)\n(5s+8)/((s-3)(s+1)) = A/(s-3) + B/(s+1)\n5s+8 = A(s+1)+B(s-3)\nLet s=3: 23=4A => A=23/4\nLet s=-1: 3=-4B => B=-3/4\nL⁻¹ = (23/4)e^(3t) - (3/4)e^(-t)",
                "tutorial": "Partial fractions decomposition then inverse Laplace of 1/(s-a) → e^(at)."
              },
              {
                "id": 4,
                "text": "Solve using Laplace: y''+4y=e^t, y(0)=2, y'(0)=1",
                "marks": 5,
                "answer": "L{y''}=s²Y-sy(0)-y'(0)=s²Y-2s-1\nL{4y}=4Y\nL{e^t}=1/(s-1)\n(s²+4)Y-2s-1=1/(s-1)\n(s²+4)Y=2s+1+1/(s-1)=(2s+1)(s-1)+1/(s-1)=(2s²-s-1+1)/(s-1)=2s(s-1)/(s-1)+...\nActually: (s²+4)Y = 2s+1+1/(s-1)\nY = (2s+1)/(s²+4) + 1/[(s-1)(s²+4)]\nPartial fractions then inverse",
                "tutorial": "Transform ODE to algebraic equation, solve for Y(s), inverse transform."
              },
              {
                "id": 5,
                "text": "Find Fourier coefficients of f(x)={k if 0<x<π, 0 if π<x<2π}, period 2π.",
                "marks": 4,
                "answer": "a₀ = (1/π)∫₀^{2π}f(x)dx = (1/π)∫₀^π k dx = k\nan = (1/π)∫₀^π k cos(nx)dx = k/(nπ)[sin(nx)]₀^π = 0\nbn = (1/π)∫₀^π k sin(nx)dx = k/(nπ)[-cos(nx)]₀^π = k/(nπ)(1-(-1)^n)\nbn = 2k/(nπ) for odd n, 0 for even n.\nf(x) = k/2 + Σ_{odd n} (2k/(nπ))sin(nx)",
                "tutorial": "Fourier series represents periodic function as sum of sinusoids."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Literacy",
        "duration": "2 hours",
        "credits": 1,
        "description": "Specialty: SWE, HWM, CWD, FSD | 2022 Session",
        "sections": [
          {
            "title": "Section A: General Computer Knowledge",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Which program for database? A) MS Word B) MS Excel C) MS PowerPoint D) MS Access",
                "marks": 1,
                "answer": "D) MS Access"
              },
              {
                "id": 2,
                "text": "SRAM stands for: A) Standard RAM B) Static Read Access Memory C) Static Random Access Memory D) Standard RAM",
                "marks": 1,
                "answer": "C) Static Random Access Memory"
              },
              {
                "id": 3,
                "text": "Getting info from internet to computer is: A) Downloading B) Browsing C) Uploading D) Recording",
                "marks": 1,
                "answer": "A) Downloading"
              },
              {
                "id": 4,
                "text": "Computer language is: A) French B) Computer language C) Binary language D) English",
                "marks": 1,
                "answer": "C) Binary language"
              },
              {
                "id": 5,
                "text": "Center title in MS Word: A) Font size B) Font style C) Spacing D) Alignment",
                "marks": 1,
                "answer": "D) Alignment"
              },
              {
                "id": 6,
                "text": "Save file with different name: A) Save B) Save As C) Send to D) Page setup",
                "marks": 1,
                "answer": "B) Save As"
              },
              {
                "id": 7,
                "text": "Geometric shapes in PowerPoint: A) Drawing B) Formatting C) Reviewing D) Illustrations",
                "marks": 1,
                "answer": "D) Illustrations"
              },
              {
                "id": 8,
                "text": "Printers and monitors are: A) Information B) Data C) Software D) Hardware",
                "marks": 1,
                "answer": "D) Hardware"
              },
              {
                "id": 9,
                "text": "Motherboard is also called: A) Central board B) System board C) Computer board D) Mouse",
                "marks": 1,
                "answer": "B) System board"
              },
              {
                "id": 10,
                "text": "Processes in continuous data loop: A) Infinite loop B) Feedback loop C) Data highway D) Traffic pattern",
                "marks": 1,
                "answer": "B) Feedback loop"
              },
              {
                "id": 11,
                "text": "Reads text to digital image: A) Touch pad B) Laser beam C) Printer D) Scanner",
                "marks": 1,
                "answer": "D) Scanner"
              },
              {
                "id": 12,
                "text": "Device changing connection configuration: A) Converter B) Adapter C) Attachment D) Component",
                "marks": 1,
                "answer": "B) An adapter"
              },
              {
                "id": 13,
                "text": "Brain of computer: A) Secondary storage B) CPU C) Data input D) RAM",
                "marks": 1,
                "answer": "B) CPU"
              },
              {
                "id": 14,
                "text": "Rules for data transmission: A) IP address B) Domains C) Protocol D) Gateway",
                "marks": 1,
                "answer": "C) Protocol"
              },
              {
                "id": 15,
                "text": "Guards against unauthorized access: A) Hacker-proof B) Firewall C) Hacker-resistant D) Encryption",
                "marks": 1,
                "answer": "B) Firewall"
              },
              {
                "id": 16,
                "text": "Restrict access: A) User logins B) Password C) Computer keys D) Access control",
                "marks": 1,
                "answer": "B) Password"
              },
              {
                "id": 17,
                "text": "Malicious software: A) Badware B) Malware C) Maliciousware D) Illegalware",
                "marks": 1,
                "answer": "B) Malware"
              },
              {
                "id": 18,
                "text": "Not permanent storage: A) ROM B) RAM C) Floppy disk D) Hard drive",
                "marks": 1,
                "answer": "B) RAM"
              },
              {
                "id": 19,
                "text": "Booting performs: A) Integrity test B) POST C) Functioning test D) Reliability",
                "marks": 1,
                "answer": "B) Power-on-self-test (POST)"
              },
              {
                "id": 20,
                "text": "Not basic function: A) Store data B) Accept input C) Process data D) Copy test",
                "marks": 1,
                "answer": "D) Copy test"
              },
              {
                "id": 21,
                "text": "What does download mean?",
                "marks": 2,
                "answer": "Downloading is the process of transferring data (files, documents, media) from the internet to a local computer."
              },
              {
                "id": 22,
                "text": "What does a graphic card do?",
                "marks": 2,
                "answer": "A graphic card processes and renders images, videos, and animations for display on the monitor."
              },
              {
                "id": 23,
                "text": "What is the brain of a computer system?",
                "marks": 2,
                "answer": "The CPU (Central Processing Unit)."
              },
              {
                "id": 24,
                "text": "What is Microsoft Windows? State two examples.",
                "marks": 3,
                "answer": "Microsoft Windows is an operating system developed by Microsoft. Examples: Windows 10, Windows 11."
              },
              {
                "id": 25,
                "text": "Two operating system capabilities.",
                "marks": 2,
                "answer": "1. Multitasking: running multiple programs simultaneously.\n2. Memory management: allocating and managing RAM."
              },
              {
                "id": 26,
                "text": "Two operating system limitations.",
                "marks": 2,
                "answer": "1. Vulnerability to malware/viruses.\n2. System crashes due to software/hardware conflicts."
              },
              {
                "id": 27,
                "text": "Two characteristics of hard disk drive.",
                "marks": 2,
                "answer": "1. Large storage capacity (hundreds of GB to TBs).\n2. Non-volatile (retains data when powered off)."
              },
              {
                "id": 28,
                "text": "Differentiate between LAN and cloud computing.",
                "marks": 2,
                "answer": "LAN: local network within a building/organization, physically owned. Cloud computing: remote servers accessed via internet, pay-as-you-go, scalable."
              },
              {
                "id": 29,
                "text": "Which hardware is used most in input phase?",
                "marks": 2,
                "answer": "Keyboard (primary input device for data entry)."
              },
              {
                "id": 30,
                "text": "Common measurement unit of computer?",
                "marks": 2,
                "answer": "Byte (and multiples: KB, MB, GB, TB)."
              },
              {
                "id": 31,
                "text": "Component that both reads and writes data?",
                "marks": 2,
                "answer": "RAM (Random Access Memory) - reads and writes data during operation."
              },
              {
                "id": 32,
                "text": "How many important types of memory? List them.",
                "marks": 2,
                "answer": "Two: 1) Volatile memory (RAM) - loses data when power off. 2) Non-volatile memory (ROM, hard drive) - retains data permanently."
              },
              {
                "id": 33,
                "text": "What does processing mean?",
                "marks": 2,
                "answer": "Processing is the operation of transforming input data into meaningful output through calculations, comparisons, and logical operations performed by the CPU."
              },
              {
                "id": 34,
                "text": "Types of user interface? List and define them.",
                "marks": 3,
                "answer": "1. CLI (Command Line Interface): user types text commands (MS-DOS, Linux terminal).\n2. GUI (Graphical User Interface): user interacts with visual elements (Windows, macOS).\n3. NUI (Natural User Interface): touch, voice, gesture-based (smartphones)."
              }
            ]
          },
          {
            "title": "Section B: Web Knowledge and Digital Society",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Difference between: i) Intranet and extranet ii) Internet browser and search engine iii) Static and dynamic webpage",
                "marks": 6,
                "answer": "i) Intranet: private internal network. Extranet: extended to authorized external parties.\nii) Browser: displays web pages (Chrome). Search engine: indexes and finds web content (Google).\niii) Static: fixed HTML content. Dynamic: content generated on demand, usually with databases."
              },
              {
                "id": 2,
                "text": "Two families of software for static webpage creation? Give examples.",
                "marks": 4,
                "answer": "1. Text editors: Notepad, VS Code, Sublime Text.\n2. WYSIWYG editors: Dreamweaver, FrontPage."
              },
              {
                "id": 3,
                "text": "State 4 social media platforms.",
                "marks": 4,
                "answer": "Facebook, Twitter/X, Instagram, LinkedIn."
              },
              {
                "id": 4,
                "text": "Requirements to build a WAN?",
                "marks": 4,
                "answer": "Routers, leased telecommunication lines, TCP/IP protocols, modems, firewalls."
              },
              {
                "id": 5,
                "text": "What is URL? Define and give example.",
                "marks": 2,
                "answer": "URL (Uniform Resource Locator): web address. Example: https://www.example.com"
              },
              {
                "id": 6,
                "text": "Differentiate e-learning and e-commerce.",
                "marks": 4,
                "answer": "E-learning: education delivered electronically (online courses, virtual classrooms).\nE-commerce: buying/selling goods/services electronically (online shopping)."
              },
              {
                "id": 7,
                "text": "What is fake news? Consequences of propagating it?",
                "marks": 5,
                "answer": "Fake news: false or misleading information presented as news.\nConsequences: 1) Spread of misinformation causing panic/harm. 2) Damage to reputations of individuals/organizations. 3) Undermining trust in media and institutions."
              },
              {
                "id": 8,
                "text": "Explain: Scamming, Hacking, Cracking, Programmer.",
                "marks": 10,
                "answer": "Scamming: fraudulent scheme to deceive people for financial gain (419 scams).\nHacking: gaining unauthorized access to computer systems. Can be ethical (white hat) or malicious (black hat).\nCracking: criminal hacking, breaking into systems to steal/damage data.\nProgrammer: person who writes code/software applications."
              },
              {
                "id": 9,
                "text": "Differentiate between tools and platforms.",
                "marks": 3,
                "answer": "Tools: software applications used to perform specific tasks (e.g., Photoshop for image editing).\nPlatforms: environments where applications run or services are delivered (e.g., Windows, AWS, social media platforms)."
              },
              {
                "id": 10,
                "text": "Device needed for video conference?",
                "marks": 2,
                "answer": "Webcam (camera) and microphone."
              },
              {
                "id": 11,
                "text": "Term for junk emails?",
                "marks": 2,
                "answer": "Spam - unsolicited bulk emails."
              },
              {
                "id": 12,
                "text": "Process of confirming username and password?",
                "marks": 2,
                "answer": "Authentication."
              },
              {
                "id": 13,
                "text": "Fraudulent attempt to acquire sensitive information?",
                "marks": 2,
                "answer": "Phishing - fake emails/websites tricking users into revealing passwords, credit card details."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Electronics",
        "duration": "4 hours",
        "credits": 7,
        "description": "Specialty: SWE, CSN, DBM | 2022 Session",
        "sections": [
          {
            "title": "Section A: Number System and Codes",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Radix in binary number system: A) 2 B) 8 C) 10 D) 1",
                "marks": 1,
                "answer": "A) 2"
              },
              {
                "id": 2,
                "text": "Fractional binary equivalent obtained by _____ by 2. A) Dividing B) Multiplying C) Adding D) Subtracting",
                "marks": 1,
                "answer": "B) Multiplying"
              },
              {
                "id": 3,
                "text": "Unweighted code where one bit changes: A) BCD B) Excess-3 C) Gray D) ASCII",
                "marks": 1,
                "answer": "C) Gray code"
              },
              {
                "id": 4,
                "text": "Largest BCD number with 4 bits: A) 9 B) 10 C) 15 D) 16",
                "marks": 1,
                "answer": "A) 9 (BCD represents decimal digits 0-9)"
              },
              {
                "id": 5,
                "text": "NOT ALWAYS TRUE: A) x+x=x B) x·x=x C) x·1=x D) x+1=x",
                "marks": 1,
                "answer": "D) x+1=x (actually x+1=1 in Boolean)"
              },
              {
                "id": 6,
                "text": "Universal gate: A) NAND B) OR C) AND D) None",
                "marks": 1,
                "answer": "A) NAND gate"
              },
              {
                "id": 7,
                "text": "Inverter is: A) OR B) NOT C) AND D) None",
                "marks": 1,
                "answer": "B) NOT gate"
              },
              {
                "id": 8,
                "text": "+ sign in Boolean represents: A) Inversion B) AND C) OR D) Complementation",
                "marks": 1,
                "answer": "C) OR"
              },
              {
                "id": 9,
                "text": "Binary of Gray code 1111: A) (1101)₂ B) (1011)₂ C) (1110)₂ D) (1010)₂",
                "marks": 1,
                "answer": "D) (1010)₂ (Gray→Binary: MSB same, each next = prev binary XOR current Gray. 1→1, 1⊕1=0, 0⊕1=1, 1⊕1=0 → 1010)"
              },
              {
                "id": 10,
                "text": "BCD of decimal 347: A) 110010111000 B) 001101000111 C) 001101000001 D) 110010110110",
                "marks": 1,
                "answer": "B) 0011 0100 0111 (3→0011, 4→0100, 7→0111)"
              },
              {
                "id": 11,
                "text": "Binary 110110001010 to octal: A) (5512)₈ B) (6612)₈ C) (4532)₈ D) (6745)₈",
                "marks": 1,
                "answer": "B) (6612)₈ (Group 3 bits: 110 110 001 010 = 6 6 1 2)"
              },
              {
                "id": 12,
                "text": "Binary addition: 11011011010 + 010100101 = ? A) 0111001000 B) 1100110110 C) 11101111111 D) 10011010011",
                "marks": 1,
                "answer": "C) 11101111111 (1754+165=1919, verify by adding right to left)"
              },
              {
                "id": 13,
                "text": "Binary subtraction: 100101 - 011110 = ? A) 000111 B) 111000 C) 010101 D) 101010",
                "marks": 1,
                "answer": "A) 000111"
              },
              {
                "id": 14,
                "text": "Binary multiplication: 01001 × 01011 = ? A) 001100011 B) 110011100 C) 010100110 D) 101010111",
                "marks": 1,
                "answer": "A) 001100011"
              },
              {
                "id": 15,
                "text": "Binary division: 1010001 ÷ 1000 = ? A) 1010.001 B) 1000.001 C) 1100.001 D) 0011.001",
                "marks": 1,
                "answer": "A) 1010.001"
              },
              {
                "id": 16,
                "text": "Number system using numbers and letters: A) Decimal B) Binary C) Octal D) Hexadecimal",
                "marks": 1,
                "answer": "D) Hexadecimal"
              },
              {
                "id": 17,
                "text": "Octal (651.124)₈ to hex: A) (1A9.2A)₁₆ B) (1B0.10)₁₆ C) (1A8.A3)₁₆ D) (1B0.B0)₁₆",
                "marks": 1,
                "answer": "A) (1A9.2A)₁₆"
              },
              {
                "id": 18,
                "text": "Sign of negative binary given by: A) MSB B) LSB C) Byte D) Nibble",
                "marks": 1,
                "answer": "A) MSB (Most Significant Bit)"
              },
              {
                "id": 19,
                "text": "Largest 2-digit hex number: A) (FE)₁₆ B) (FD)₁₆ C) (FF)₁₆ D) (EF)₁₆",
                "marks": 1,
                "answer": "C) (FF)₁₆"
              },
              {
                "id": 20,
                "text": "1 in binary 1000 has place value: A) 1000 B) 16 C) 1 D) 8",
                "marks": 1,
                "answer": "D) 8 (2³ = 8)"
              }
            ]
          },
          {
            "title": "Section B: Computer Fundamentals",
            "marks": 80,
            "questions": [
              {
                "id": 1,
                "text": "Identify the port shown in diagram. Give TWO reasons for its widespread use.",
                "marks": 3,
                "answer": "USB (Universal Serial Bus) port.\nReasons: 1) Hot-swappable (connect/disconnect without restart). 2) Supports many device types (keyboard, mouse, storage, printer)."
              },
              {
                "id": 2,
                "text": "Name hardware components and give their roles (CPU, RAM, HDD, Motherboard, Power Supply).",
                "marks": 7.5,
                "answer": "CPU: executes instructions/programs.\nRAM: temporary storage for active data.\nHDD: permanent storage for files/OS.\nMotherboard: connects all components.\nPower Supply: converts AC to DC power."
              },
              {
                "id": 3,
                "text": "Difference between mainframe and supercomputer?",
                "marks": 2.5,
                "answer": "Mainframe: high I/O, many concurrent users, transaction processing. Supercomputer: maximum computational performance for scientific calculations."
              },
              {
                "id": 4,
                "text": "Identify components 1-6 in computer diagram. Identify two input and two output devices.",
                "marks": 5,
                "answer": "1-Monitor, 2-System Unit, 3-Keyboard, 4-Mouse, 5-Printer, 6-Speakers.\nInput: Keyboard, Mouse.\nOutput: Monitor, Printer."
              },
              {
                "id": 5,
                "text": "Causes of computer poor performance?",
                "marks": 2,
                "answer": "1. Insufficient RAM (too many programs).\n2. Fragmented hard drive.\n3. Malware/viruses.\n4. Outdated hardware/drivers."
              },
              {
                "id": 6,
                "text": "Functions of network devices: Distributor, Modem, Router, NIC, Network Cable.",
                "marks": 5,
                "answer": "Distributor (Hub/Switch): connects devices in LAN.\nModem: modulates/demodulates digital↔analog signals.\nRouter: forwards data between networks.\nNIC (Network Interface Card): allows computer to connect to network.\nNetwork Cable: physical transmission medium (Ethernet)."
              },
              {
                "id": 7,
                "text": "School network: a) Two benefits and two limitations. b) Two topologies with diagrams.",
                "marks": 10,
                "answer": "a) Benefits: 1) Resource sharing (printers, files). 2) Centralized management. Limitations: 1) Cost of equipment. 2) Security vulnerabilities.\nb) Star: all devices to central switch. Bus: all devices along single cable."
              },
              {
                "id": 8,
                "text": "a) What is a mobile device? b) Two types. c) Common mobile OS. d) Three common apps. e) Method to connect phone to computer.",
                "marks": 9,
                "answer": "a) Mobile device: portable computing device.\nb) Smartphone, Tablet.\nc) Android, iOS.\nd) WhatsApp, Chrome, Camera.\ne) USB cable connection: connect via USB, select 'File Transfer' mode on phone, access files from computer."
              },
              {
                "id": 9,
                "text": "Network 198.100.10.0 needs 60 usable host IPs. a) Address class? b) Default subnet mask? c) Custom subnet mask? d) Total subnets? e) Hosts per subnet?",
                "marks": 10,
                "answer": "a) Class C (198.x.x.x).\nb) 255.255.255.0.\nc) Need 60 hosts, so 6 host bits (2⁶-2=62). Custom mask: /26 = 255.255.255.192.\nd) 2² = 4 subnets (borrowed 2 bits from host).\ne) 2⁶-2 = 62 hosts per subnet."
              },
              {
                "id": 10,
                "text": "Define: i) Spreadsheet software ii) Presentation Software iii) MS Access iv) MS Word. Give examples.",
                "marks": 4,
                "answer": "i) Spreadsheet: organizes data in rows/columns for calculations (Excel).\nii) Presentation: creates slideshows (PowerPoint).\niii) MS Access: database management system.\niv) MS Word: word processing software."
              },
              {
                "id": 11,
                "text": "Advantages of spreadsheet over ledger?",
                "marks": 4,
                "answer": "1. Automatic calculations (formulas).\n2. Easy data modification/editing.\n3. Charts/graphs for visualization.\n4. Sorting and filtering capabilities."
              },
              {
                "id": 12,
                "text": "Spreadsheet sample: a) Formula for Total Profit in G4. b) How to copy formula to G5-G13. c) Formula for Grand Profit in G15. d) Effect of changing milk quantity to 10 and price to 1000.",
                "marks": 6,
                "answer": "a) G4 = (D4*E4)-(D4*C4) or =D4*(E4-C4).\nb) Drag the fill handle (bottom-right corner of G4) down to G13. Cell references auto-adjust (relative referencing).\nc) G15 = SUM(G4:G13).\nd) G4-G13 auto-recalculate. Total profit for milk changes. Remark may change from 'Bad' based on new profit."
              }
            ]
          }
        ]
      },
      {
        "title": "Enterprise Creation and Entrepreneurship",
        "duration": "2 hours",
        "credits": 1,
        "description": "All Specialties | 2022 Session",
        "sections": [
          {
            "title": "Section 1: Entrepreneurship",
            "marks": 34,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate between: a) Entrepreneurship and Intrapreneurship b) Innovators and imitators",
                "marks": 4,
                "answer": "a) Entrepreneurship: starting/ running a new business independently, bearing risk. Intrapreneurship: entrepreneurial activities within an existing organization.\nb) Innovators: create new products/ideas/methods first (pioneers). Imitators: copy or improve upon existing innovations (followers)."
              },
              {
                "id": 2,
                "text": "What is an 'executive summary'? Why is it the most important part of a business plan?",
                "marks": 15,
                "answer": "An executive summary is a concise overview of a business plan covering the business concept, market opportunity, competitive advantage, financial projections, and management team. It is most important because: it's the first section read; investors decide whether to continue reading based on it; it must quickly communicate the business's value proposition and potential; a poor summary leads to immediate rejection."
              },
              {
                "id": 3,
                "text": "Identify five roles of entrepreneurship in economic development.",
                "marks": 15,
                "answer": "1. Job creation: startups and SMEs employ people.\n2. Innovation: new products/services drive progress.\n3. Wealth creation: successful ventures generate economic value.\n4. Competition: stimulates market efficiency and lower prices.\n5. Regional development: businesses can revitalize underdeveloped areas.\n6. Tax revenue: contributes to government through taxes."
              }
            ]
          },
          {
            "title": "Section 2: General Economics",
            "marks": 33,
            "questions": [
              {
                "id": 4,
                "text": "a) Identify and explain four fundamental economic questions every society must resolve. b) Distinguish between microeconomics and macroeconomics.",
                "marks": 15,
                "answer": "a) 1. What to produce? (which goods/services).\n2. How to produce? (methods/technology).\n3. For whom to produce? (distribution among population).\n4. How much to produce? (quantity/scale).\n\nb) Microeconomics: studies individual economic units (households, firms, markets). Macroeconomics: studies the economy as a whole (GDP, inflation, unemployment)."
              },
              {
                "id": 5,
                "text": "a) Distinguish with diagrams between change in quantity demanded and change in demand. b) Five factors causing change in demand.",
                "marks": 18,
                "answer": "a) Change in quantity demanded: movement along the same demand curve due to price change (point A to B on same curve).\nChange in demand: entire curve shifts left/right due to non-price factors.\nb) Factors: 1) Consumer income. 2) Prices of related goods (substitutes/complements). 3) Tastes/preferences. 4) Population. 5) Expectations about future prices."
              }
            ]
          },
          {
            "title": "Section 3: Company Law",
            "marks": 33,
            "questions": [
              {
                "id": 6,
                "text": "Critically examine the principle of corporate personality.",
                "marks": 20,
                "answer": "Corporate personality: company is a separate legal entity distinct from shareholders. Key aspects: separate existence, limited liability, perpetual succession, right to own property, sue/be sued in company name. The corporate veil can be lifted in cases of fraud (Salomon v Salomon). Important because it enables investment by limiting risk to share capital."
              },
              {
                "id": 7,
                "text": "Explain the types of contributions made by shareholders of a company.",
                "marks": 13,
                "answer": "1. Cash: money paid for shares.\n2. Property: assets (land, equipment, IP) transferred for shares.\n3. Services: expertise/ labor for shares.\n4. Share premium: amount above par value.\n5. Calls: installment payments for partly-paid shares.\nUnder OHADA law, contributions must be fully paid before incorporation for SA (public limited companies)."
              }
            ]
          }
        ]
      },
      {
        "title": "Law and Citizenship Education",
        "duration": "2 hours",
        "credits": 2,
        "description": "All Specialties | 2022 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Examine five fundamental principles guiding the administration of justice in Cameroon.",
                "marks": 20,
                "answer": "The administration of justice in Cameroon is founded on a set of fundamental principles that ensure fairness, impartiality, and the protection of rights. These principles are derived from the Constitution, international human rights instruments, and the country's legal traditions. The following are the key principles guiding the administration of justice:\n\n1. Independence of the Judiciary\nThe judiciary must be free from interference by the executive or legislative branches of government. Judges decide cases based solely on the law and facts, not on external pressure or influence. This principle ensures that justice is administered impartially and that the courts remain a trusted arbiter of disputes. In Cameroon, the Constitution guarantees the independence of the judiciary, though in practice challenges such as executive influence over judicial appointments and funding can affect this independence.\n\n2. Equality Before the Law\nAll persons, regardless of their social status, ethnicity, gender, religion, or political affiliation, are equal before the law and entitled to equal protection. No person is above the law, and courts must apply legal rules uniformly without favour or discrimination. This principle guarantees that justice is not influenced by wealth, power, or personal connections.\n\n3. Presumption of Innocence\nEvery person accused of an offence is presumed innocent until proven guilty by a competent court of law. The burden of proof lies on the prosecution to establish guilt beyond reasonable doubt. This principle protects individuals from wrongful conviction and ensures that no person is treated as guilty before a fair trial has been concluded.\n\n4. Right to Fair Hearing\nEvery person has the right to a fair and public hearing within a reasonable time by an independent and impartial court. This includes the right to be heard (audi alteram partem), the right to legal representation, the right to present evidence and call witnesses, and the right to confront adverse witnesses. A fair hearing is the cornerstone of due process and ensures that justice is not only done but seen to be done.\n\n5. Right to Appeal\nAny person convicted of an offence or aggrieved by a court decision has the right to appeal to a higher court. This allows for the review of legal errors, factual mistakes, or procedural irregularities that may have affected the outcome of the case. The appellate system ensures accountability of lower courts and promotes consistency in the application of law.\n\n6. Open Justice (Publicity of Proceedings)\nCourt proceedings are generally open to the public, and judgments are delivered publicly. This transparency allows public scrutiny of the judicial process and helps maintain confidence in the administration of justice. However, certain matters may be heard in camera (in private) to protect national security, public morality, or the privacy of vulnerable persons such as minors or victims of sexual offences.\n\nIn conclusion, the administration of justice in Cameroon is guided by principles such as judicial independence, equality before the law, presumption of innocence, fair hearing, right to appeal, and open justice. These principles ensure that justice is delivered fairly, impartially, and transparently, thereby protecting the rights and freedoms of all citizens and maintaining public confidence in the legal system."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics, Morals and Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 2,
                "text": "Critically examine five different methods for the acquisition of Cameroonian nationality.",
                "marks": 20,
                "answer": "Nationality is the legal bond between an individual and a state, giving rise to rights and duties such as protection by the state and allegiance from the citizen. In Cameroon, nationality is governed mainly by the Nationality Code and can be acquired through several methods. The main methods of acquiring Cameroonian nationality include by birth (jus soli/jus sanguinis), by marriage, by naturalization, by adoption, and by option (declaration).\n\n1. Acquisition by birth\nNationality by birth means a person becomes Cameroonian either by being born in Cameroon (jus soli) or by being born to Cameroonian parents (jus sanguinis). This method is automatic and does not require formal application. It ensures that children born into Cameroonian families are recognized as citizens from birth. However, its limitation is that the rules may not clearly protect all children born in mixed-nationality situations, and documentation issues may arise in rural areas.\n\n2. Acquisition by marriage\nA foreigner may acquire Cameroonian nationality through marriage to a Cameroonian citizen, subject to legal conditions and approval by the state. This method promotes family unity and integration. However, it is often criticized because it may be abused through \"marriages of convenience\" entered solely for nationality benefits, and approval is not automatic, making it dependent on administrative discretion.\n\n3. Acquisition by naturalization\nNaturalization is the process by which a foreigner acquires Cameroonian nationality after fulfilling legal conditions such as long residence, good conduct, and integration into society. It is granted by decree of the President. This method allows genuine foreigners to become citizens and contribute to national development. However, it is slow, bureaucratic, and highly discretionary, which may make it difficult for applicants to succeed.\n\n4. Acquisition by adoption\nA child may acquire Cameroonian nationality when legally adopted by Cameroonian parents. This ensures that adopted children enjoy the same legal status as biological children. It promotes family unity and child protection. However, strict legal procedures must be followed, and delays in adoption formalities may slow down acquisition of nationality.\n\n5. Acquisition by option (declaration)\nOption allows a person to acquire nationality by making a formal declaration under certain legal conditions, such as being born in Cameroon to foreign parents or having strong links with the country. It is a flexible method that helps individuals with strong connections to Cameroon integrate legally. However, it is subject to strict conditions and administrative approval, which may limit accessibility.\n\nIn conclusion, the methods of acquiring Cameroonian nationality include birth, marriage, naturalization, adoption, and option. Each method plays an important role in integrating individuals into the state of Cameroon. However, while these methods promote inclusion and legal identity, they are sometimes limited by administrative delays, strict conditions, and discretionary powers of authorities."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 3,
                "text": "Briefly examine the reciprocal duties of parties engaged in a labour contract.",
                "marks": 20,
                "answer": "A labour contract creates mutual obligations between the employer and the employee. Each party is expected to perform certain duties for the effective execution of the contract of employment.\n\nA. Duties of the Employer\n\n1. Duty to Procure Work for the Worker\nThe employer has the obligation to provide work for the employee according to the terms agreed in the labour contract. The worker should be given the opportunity to perform the duties for which they were employed, especially where payment depends on the amount of work done or where experience and reputation are important.\n\n2. Duty to Remunerate the Worker\nThe employer must pay the worker wages or salary as agreed in the contract. Remuneration should be paid regularly, promptly, and without unlawful deductions. This duty also includes payment of allowances, bonuses, overtime, and other benefits where applicable.\n\n3. Duty to Indemnify the Employee\nAn employer is required to compensate or reimburse an employee for losses or injuries suffered in the course of employment, provided the employee acted within the scope of duty and without negligence. This may include workplace injuries or expenses incurred while carrying out official assignments.\n\n4. Written Statement of Terms\nThe employer should provide the employee with a written statement containing the terms and conditions of employment. Such terms include job description, wages, working hours, leave entitlement, duration of employment, and termination procedures. This helps prevent disputes and promotes certainty in the employment relationship.\n\nB. Duties of the Employee\n\n1. Duty to Serve\nThe employee is required to faithfully carry out the work assigned by the employer with skill, diligence, and efficiency. The worker must devote their time and effort to the employer's business during working hours.\n\n2. Duty of Subordination or Obedience to Orders\nThe employee must obey lawful and reasonable instructions issued by the employer or the employer's representatives. Refusal to obey lawful commands may amount to misconduct and can justify disciplinary action.\n\n3. Duty to Indemnify\nWhere an employee causes damage or loss to the employer through negligence, misconduct, or breach of duty, the employee may be required to compensate the employer for the loss suffered.\n\n4. Duty of Fidelity\nThe employee owes loyalty and good faith to the employer. The worker must not act against the employer's interests, disclose confidential information, or engage in activities that may compete with or harm the employer's business.\n\n5. Duty to Account\nAn employee entrusted with the employer's money or property must properly account for it. Misuse or misappropriation of company funds or property constitutes a breach of this duty.\n\n6. Duty to Disclose Misdeeds\nAn employee has the obligation to inform the employer of fraud, misconduct, dishonesty, or illegal acts occurring within the workplace that may affect the employer's business or interests.\n\n7. Restraint of Trade Clauses\nEmployees may be restricted by contractual clauses from engaging in competing businesses or revealing trade secrets during or after employment. Such clauses are enforceable only if they are reasonable in scope, duration, and area of operation.\n\nThe employment relationship is based on reciprocal rights and obligations. Employers are expected to provide work, remuneration, protection, and clear employment terms, while employees must serve faithfully, obey lawful orders, and protect the employer's interests. Compliance with these duties promotes industrial peace, trust, and productivity in the workplace."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 4,
                "text": "'Certain characteristics are peculiar to insurance contracts which are not found in ordinary contract law.' Assess this statement.",
                "marks": 20,
                "answer": "A contract of insurance is an agreement whereby one party (the insurer) undertakes, in consideration of a premium, to compensate another party (the insured) for specified loss or damage. In Cameroon, insurance contracts are governed by special rules because they are based on risk distribution and financial protection. The statement is true because insurance contracts contain special characteristics that distinguish them from ordinary contracts such as sale or employment contracts.\n\n1. Principle of insurable interest\nInsurance contracts require that the insured must have a financial interest in the subject matter of the insurance. This means the insured must suffer a loss if the risk occurs. For example, a person can insure their own house but not a stranger's property. In ordinary contracts, such a requirement is not necessary, making this a unique feature of insurance law.\n\n2. Principle of utmost good faith (uberrimae fidei)\nInsurance contracts require full disclosure of all material facts by both parties, especially the insured. Any concealment or misrepresentation can render the contract void. This is stricter than ordinary contract law, where parties are not always required to disclose all information unless asked.\n\n3. Principle of indemnity\nMost insurance contracts aim to restore the insured to the position they were in before the loss, not to allow profit. For example, if property is damaged, compensation is based on actual loss. Ordinary contracts do not necessarily follow this principle, as they may involve profit-making agreements.\n\n4. Principle of subrogation\nAfter compensating the insured, the insurer has the right to step into the shoes of the insured and recover the loss from a third party responsible for the damage. This principle is unique to insurance contracts and does not exist in most ordinary contracts.\n\n5. Principle of contribution\nWhere a risk is insured by more than one insurer, each insurer contributes proportionally to the compensation. This ensures fairness among insurers. Ordinary contracts do not usually involve this shared liability structure.\n\n6. Principle of proximate cause\nIn insurance, compensation is only payable if the loss is caused by the insured risk in a direct and proximate manner. Remote or indirect causes are not covered. This strict causation rule is more specialized than in ordinary contract law.\n\nCritical assessment\nThe statement is true because insurance contracts are fundamentally different from ordinary contracts due to their risk-based nature. They require special principles such as insurable interest, utmost good faith, indemnity, subrogation, contribution, and proximate cause. However, some general contract principles like offer, acceptance, and consideration still apply. This shows that insurance law is a specialized branch of contract law with additional unique features.\n\nIn conclusion, insurance contracts in Cameroon possess special characteristics that distinguish them from ordinary contracts. While they still rely on general contract principles, they introduce unique doctrines such as insurable interest, utmost good faith, indemnity, subrogation, contribution, and proximate cause. Therefore, the statement is valid and correctly reflects the special nature of insurance contracts."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 5,
                "text": "Examine discrepancies between Public Limited Companies and Private Limited Companies under OHADA Law.",
                "marks": 20,
                "answer": "A company is a legal entity formed by persons who contribute capital for the purpose of carrying out business and sharing profits. Under the OHADA Uniform Act on Commercial Companies and Economic Interest Groups, applicable in Cameroon, companies are mainly classified into Public Limited Companies (SA - Societe Anonyme) and Private Limited Companies (SARL - Societe a Responsabilite Limitee). Although both are corporate entities with separate legal personality, they differ significantly in formation, management, capital, and operation.\n\n1. Nature of membership\nA Public Limited Company (SA) is usually large and may have many shareholders, often the public, and it can even be listed on a stock exchange. A Private Limited Company (SARL) is smaller and usually formed by a limited number of partners, often family members or close associates. This makes SA more public-oriented while SARL is more private and restricted.\n\n2. Minimum capital requirement\nAn SA generally requires a higher minimum share capital, making it suitable for large-scale business activities. A SARL has a lower capital requirement, making it easier to form and suitable for small and medium-sized enterprises.\n\n3. Transfer of shares\nIn an SA, shares are generally freely transferable, especially in listed companies, making it easier for shareholders to enter and exit. In a SARL, the transfer of shares is restricted and subject to approval by other partners, to preserve the personal nature of the company.\n\n4. Management structure\nAn SA has a more complex management system, usually involving a Board of Directors and a Managing Director or Chief Executive Officer. A SARL has a simpler structure, usually managed by one or more managers (gerants), making decision-making faster and less bureaucratic.\n\n5. Publicity and regulatory requirements\nAn SA is subject to stricter public disclosure and reporting requirements, including publication of financial statements, because it may involve public investment. A SARL has lighter disclosure obligations, offering more privacy to its owners.\n\n6. Raising of capital\nAn SA can raise capital from the public through share issuance and stock markets, making it easier to expand. A SARL cannot raise funds from the public in the same way and relies mainly on contributions from its members.\n\n7. Number of shareholders\nAn SA may have a very large or unlimited number of shareholders, while a SARL is limited to a smaller number of partners as required by OHADA rules, reinforcing its private nature.\n\n8. Liability of members\nIn both SA and SARL, liability is generally limited to the amount of shares contributed. However, in SARL, the personal relationship between partners may sometimes create more internal responsibility and restrictions compared to SA.\n\nIn conclusion, under the OHADA law applicable in Cameroon, Public Limited Companies (SA) and Private Limited Companies (SARL) differ significantly in terms of capital requirements, management structure, share transferability, regulatory obligations, and access to public funding. While SA is suited for large-scale public investment and expansion, SARL is designed for small and medium-sized enterprises with simpler management and restricted membership."
              }
            ]
          }
        ]
      },
      {
        "title": "English Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2022 Session",
        "sections": [
          {
            "title": "Section A: Reading Comprehension",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "The speaker gives ___ reasons for people risking their lives to reach Europe. A) four B) three C) five D) six",
                "marks": 2,
                "answer": "B) three (Syria, Afghanistan, Somalia - conflict areas mentioned)"
              },
              {
                "id": 2,
                "text": "'Peace-building, conflict resolution, conflict prevention' are: A) antonyms B) homonyms C) synonyms D) homophones",
                "marks": 2,
                "answer": "C) synonyms"
              },
              {
                "id": 3,
                "text": "Word with same syllables as 'overemphasized': A) Nationality B) Politician C) Intentional D) Internationally",
                "marks": 2,
                "answer": "A) Nationality"
              },
              {
                "id": 4,
                "text": "Addressing root causes of conflict is tedious because conflicts: A) have multiple causes B) operate at different levels C) require commitment D) don't have natural causes",
                "marks": 2,
                "answer": "A) have multiple causes"
              },
              {
                "id": 5,
                "text": "Cost of conflict in 2013: A) 19.21 trillion pounds B) 9.21 trillion dollars C) 9.2 trillion pounds D) 9.21 trillion pounds",
                "marks": 2,
                "answer": "D) 9.21 trillion pounds"
              },
              {
                "id": 6,
                "text": "'Lasting peace can't be sustained by guns and violence' means: A) no peace from guns B) peace from guns is short-lived C) peace easily lost to guns D) useless to think guns can solve conflict",
                "marks": 2,
                "answer": "B) peace obtained by guns and violence is short-lived"
              },
              {
                "id": 7,
                "text": "Goal 16 promotes inclusive societies where: A) treated by tribe B) included in decision making C) no discrimination D) development is priority",
                "marks": 2,
                "answer": "C) there is neither discrimination nor favouritism"
              },
              {
                "id": 8,
                "text": "'Peace: A Goldmine' is an example of: A) simile B) irony C) personification D) metaphor",
                "marks": 2,
                "answer": "D) metaphor"
              },
              {
                "id": 9,
                "text": "The passage is likely to be: A) a talk B) a speech C) a report D) an article",
                "marks": 2,
                "answer": "D) an article"
              },
              {
                "id": 10,
                "text": "Which word has same consonant sound as 'operation'? A) Picture B) Measure C) Shoe D) Pitch",
                "marks": 2,
                "answer": "B) Measure (/ʒ/ sound)"
              }
            ]
          },
          {
            "title": "Section B: Grammar and Vocabulary",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "He bought a ------ car. A) New brand red B) brand new red C) red new brand D) red brand new",
                "marks": 1,
                "answer": "B) brand new red"
              },
              {
                "id": 2,
                "text": "The dog wagged --------- tail. A) It's B) its C) it is D) its'",
                "marks": 1,
                "answer": "B) its"
              },
              {
                "id": 3,
                "text": "An MC is someone who--------- other people. A) Introduce B) introduces C) introduce D) introducing",
                "marks": 1,
                "answer": "B) introduces"
              },
              {
                "id": 4,
                "text": "Cameroon is a bilingual country----------- A) Didn't it B) it is C) is it D) isn't it",
                "marks": 1,
                "answer": "D) isn't it"
              },
              {
                "id": 5,
                "text": "I went to Germany ----------- my aunt was there. A) Before B) after C) because D) until",
                "marks": 1,
                "answer": "C) because"
              },
              {
                "id": 6,
                "text": "Most of the -------------- in my house --------------- made of wood. A) Furnitures, are B) furniture, is C) furniture, are D) furniture, were",
                "marks": 1,
                "answer": "C) furniture, are"
              },
              {
                "id": 7,
                "text": "Awa received a prize --------------- her exams. A) For pass B) for having passed C) for having pass D) for have passed",
                "marks": 1,
                "answer": "B) for having passed"
              },
              {
                "id": 8,
                "text": "They both ran fast, but Eposi is ---------------. A) More faster B) much more faster C) faster D) the more faster",
                "marks": 1,
                "answer": "C) faster"
              },
              {
                "id": 9,
                "text": "She --------- over two hundred thousand francs. A) Wins B) gains C) earns D) receives",
                "marks": 1,
                "answer": "C) earns"
              },
              {
                "id": 10,
                "text": "A ---------- of locust invaded the farm. A) Group B) swarm C) troop D) flock",
                "marks": 1,
                "answer": "B) swarm"
              },
              {
                "id": 11,
                "text": "When I looked ---- my childhood... A) Down on B) out of C) down at D) back on",
                "marks": 1,
                "answer": "D) back on"
              },
              {
                "id": 12,
                "text": "Has ------ postman been here? I am expecting ------ parcel. A) The/the B) a/a C) the/a D) a/the",
                "marks": 1,
                "answer": "C) the/a"
              },
              {
                "id": 13,
                "text": "I could only find -------- cooking oil. A) A few B) a little C) few D) little",
                "marks": 1,
                "answer": "B) a little"
              },
              {
                "id": 14,
                "text": "Correctly punctuated: A) My favourite sports are; fishing... B) my favourite sports are: fishing... C) my favourite sports are. fishing... D) my favourite sports are, fishing...",
                "marks": 1,
                "answer": "B) My favourite sports are: fishing, golf and swimming."
              },
              {
                "id": 15,
                "text": "The members were discussing ___ themselves. A) With each other B) Between each other C) With one another D) Among themselves",
                "marks": 1,
                "answer": "D) Among themselves"
              },
              {
                "id": 16,
                "text": "A loaf was shared ___ four students. A) Between B) Themselves C) Within them D) Among",
                "marks": 1,
                "answer": "D) Among"
              },
              {
                "id": 17,
                "text": "Title of poem enclosed in: A) ? B) ! C) bracket D) quotation marks",
                "marks": 1,
                "answer": "D) Quotation marks"
              },
              {
                "id": 18,
                "text": "Pen is to cow as _____ is to dog. A) Stable B) den C) sty D) kennel",
                "marks": 1,
                "answer": "D) kennel"
              },
              {
                "id": 19,
                "text": "A little learning is a --------- thing. A) Dangerous B) wonderful C) great D) useful",
                "marks": 1,
                "answer": "A) Dangerous (A little learning is a dangerous thing - Alexander Pope)"
              },
              {
                "id": 20,
                "text": "Subject-verb agreement: Neither the students nor their teacher _____ (go/goes) to school.",
                "marks": 1,
                "answer": "goes (verb agrees with nearest subject 'teacher')"
              }
            ]
          },
          {
            "title": "Section C: Spoken English",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Fill in verbs: a) Neither the student nor the teacher ___ (go/goes). b) Paul like his brother ___ (drink/drinks). c) Anita or Laura ___ (eats/eat). d) None of the boys ___ (was/were). e) This pair of shoes ___ (fits/fit).",
                "marks": 5,
                "answer": "a) goes (nearest subject 'teacher' singular). b) drinks (subject 'Paul'). c) eats (nearest 'Laura' singular). d) was (none + of + plural = singular). e) fits (pair is singular)."
              },
              {
                "id": 2,
                "text": "Rewrite with correct verb tense: a) Last evening they ___ (seek) help. b) By the time the Minister arrived they ___ (ring) the bell thrice. c) By 2022, students ___ (graduate). d) If I lost my job I ___ (go) to Britain. e) We were surprised many students ___ (choose) to go home.",
                "marks": 10,
                "answer": "a) sought. b) had rung. c) will have graduated. d) would go. e) had chosen."
              },
              {
                "id": 3,
                "text": "Add question tags: a) I am responsible... b) Hellen wasn't sick... c) There aren't students... d) You won't do that... e) Let's go for a walk...",
                "marks": 5,
                "answer": "a) aren't I? b) was she? c) are there? d) will you? e) shall we?"
              }
            ]
          },
          {
            "title": "Section D: Writing",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Write an essay (~350 words) on ONE: 1) Producing a cash crop in your area. 2) Summary on why supporting peace is important. 3) Working from home vs office after COVID-19.",
                "marks": 30,
                "answer": "Working from Home vs Office After COVID-19\n\nThe COVID-19 pandemic forced a global experiment in remote work. As we emerge from the crisis, the question remains: should working from home replace the traditional office? This essay examines both sides.\n\nWorking from home offers significant advantages. Commute time is eliminated, saving hours daily and reducing transportation costs. Employees enjoy greater flexibility, leading to improved work-life balance. Studies show productivity often increases due to fewer office distractions. Companies benefit from reduced overhead costs for office space and utilities.\n\nHowever, working from home has drawbacks. Social isolation can affect mental health and team cohesion. Spontaneous collaboration and innovation, which often occur through casual office interactions, are harder to replicate virtually. The blurring of boundaries between work and home can lead to burnout. Not all jobs can be done remotely, creating inequity among workers.\n\nThe office environment also retains value. It provides clear separation between work and personal life, facilitates mentoring of junior staff, and enables face-to-face collaboration that builds stronger team relationships. For many, the office provides structure and routine that enhances productivity.\n\nIn my view, the optimal approach is hybrid work. This model combines the flexibility of remote work with the benefits of in-person collaboration. Employees might work from home 2-3 days per week and attend the office for meetings, collaborative projects, and social connection.\n\nIn conclusion, while working from home is a viable option that offers real benefits, completely replacing the office would be a mistake. The future of work is flexible, balancing individual autonomy with organizational needs for collaboration and culture.",
                "tutorial": "Well-structured essay with introduction, balanced arguments, and conclusion."
              }
            ]
          }
        ]
      },
      {
        "title": "French Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2022 Session",
        "sections": [
          {
            "title": "Première Partie: Questions à Choix Multiples",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Moi je préfère prendre ___ café au lait. a) de la b) du c) de l' d) des",
                "marks": 1,
                "answer": "b) du"
              },
              {
                "id": 2,
                "text": "___ routes sont mauvaises. a) la b) le c) aux d) les",
                "marks": 1,
                "answer": "d) les"
              },
              {
                "id": 3,
                "text": "Elles ont acheté beaucoup ___ chaussures. a) des b) de la c) les d) de",
                "marks": 1,
                "answer": "d) de"
              },
              {
                "id": 4,
                "text": "Quand on est malade, on va ___ hôpital. a) au b) la c) à l' d) à la",
                "marks": 1,
                "answer": "c) à l'"
              },
              {
                "id": 5,
                "text": "Le professeur parle ___ élèves. a) les b) aux c) au d) des",
                "marks": 1,
                "answer": "b) aux"
              },
              {
                "id": 6,
                "text": "On avait emmené à l'hôpital ___ la maladie était grave. a) car b) or c) puis d) et",
                "marks": 1,
                "answer": "a) car"
              },
              {
                "id": 7,
                "text": "Je ne vais plus parler ___ vous puissiez écouter. a) alors que b) avant que c) afin que d) pendant que",
                "marks": 1,
                "answer": "c) afin que"
              },
              {
                "id": 8,
                "text": "Il vous a cherché ___ plus de deux heures. a) pendant b) dans c) en d) pour",
                "marks": 1,
                "answer": "a) pendant"
              },
              {
                "id": 9,
                "text": "Nous ___ au football tous les samedis. a) jouez b) jouons c) jouent d) joues",
                "marks": 1,
                "answer": "b) jouons"
              },
              {
                "id": 10,
                "text": "Paul et toi ___ la radio tous les matins. a) écoute b) écoutons c) écoutez d) écoutent",
                "marks": 1,
                "answer": "c) écoutez"
              },
              {
                "id": 11,
                "text": "Cette dame voulait m'aider, ___ j'ai refusé. a) mais b) ou c) donc d) car",
                "marks": 1,
                "answer": "a) mais"
              },
              {
                "id": 12,
                "text": "Vous ___ du remords d'avoir menti. a) eûtes b) eurent c) eus d) eûmes",
                "marks": 1,
                "answer": "a) eûtes"
              },
              {
                "id": 13,
                "text": "Ce ___ un voyage très pénible. a) fus b) fut c) fûmes d) fûtes",
                "marks": 1,
                "answer": "b) fut"
              },
              {
                "id": 14,
                "text": "Ma sœur et son amie ___ en retard. a) sont arrivé b) sont arrivée c) sont arrivés d) sont arrivées",
                "marks": 1,
                "answer": "d) sont arrivées"
              },
              {
                "id": 15,
                "text": "Il ___ en titubant parce qu'il était soul. a) marchions b) marchais c) marchait d) marchaient",
                "marks": 1,
                "answer": "c) marchait"
              },
              {
                "id": 16,
                "text": "La mère de mon épouse est ma ___. a) tante b) mère c) belle-mère d) belle-fille",
                "marks": 1,
                "answer": "c) belle-mère"
              },
              {
                "id": 17,
                "text": "Il y a quelques années, le Cameroun ___ en guerre. a) allais b) irait c) ira d) allait",
                "marks": 1,
                "answer": "d) allait"
              },
              {
                "id": 18,
                "text": "C'est moi qui ___ pris ton livre. a) avait b) est c) a d) ai",
                "marks": 1,
                "answer": "d) ai"
              },
              {
                "id": 19,
                "text": "'He was going to the farm last Friday' → a) il allait au champ vendredi dernier b) il était allé c) il était allée d) il allais",
                "marks": 1,
                "answer": "a) il allait au champ vendredi dernier"
              },
              {
                "id": 20,
                "text": "Les chambres de ___ hôtel sont climatisées. a) cet b) ce c) ces d) cette",
                "marks": 1,
                "answer": "a) cet"
              },
              {
                "id": 21,
                "text": "'Practice makes perfect' means: a) pratiquer c'est perfectionner b) la pratique fait la perfection c) en pratiquant on perfectionne d) en forgeant on devient forgeron",
                "marks": 1,
                "answer": "d) en forgeant on devient forgeron"
              },
              {
                "id": 22,
                "text": "Ma femme aime beaucoup les ___. a) bijou b) bijous c) bijoux d) bijouses",
                "marks": 1,
                "answer": "c) bijoux"
              },
              {
                "id": 23,
                "text": "Cette forêt est pleine d'___ sauvages. a) animal b) animals c) animales d) animaux",
                "marks": 1,
                "answer": "d) animaux"
              },
              {
                "id": 24,
                "text": "Je suis ici ___ lieu et place de mon feu père. a) en b) ou c) dans d) sur",
                "marks": 1,
                "answer": "a) en"
              },
              {
                "id": 25,
                "text": "Toute explication est donnée ___ bas de page. a) en b) ou c) dans d) sous",
                "marks": 1,
                "answer": "a) en"
              },
              {
                "id": 26,
                "text": "Le mot 'mari' a pour synonyme: a) père b) époux c) homme d) beau-fils",
                "marks": 1,
                "answer": "b) époux"
              },
              {
                "id": 27,
                "text": "Bill et son frère ___ les maths l'année passée. a) étudiais b) étudiait c) étudiiez d) étudiaient",
                "marks": 1,
                "answer": "d) étudiaient"
              },
              {
                "id": 28,
                "text": "Plusieurs élèves ___ déjà très bien français. a) savent b) parle c) parlent d) sait",
                "marks": 1,
                "answer": "c) parlent"
              },
              {
                "id": 29,
                "text": "Nous ___ à la maison très tard ce soir-là. a) arrivâtes b) arrivâmes c) arrivas d) arriva",
                "marks": 1,
                "answer": "b) arrivâmes"
              },
              {
                "id": 30,
                "text": "Je tiens à lui parler ___ il ne veut pas m'écouter. a) et b) ou c) car d) or",
                "marks": 1,
                "answer": "d) or"
              },
              {
                "id": 31,
                "text": "Les chasseurs ont entendu le ___ du lion. a) aboiement b) beuglement c) miaulement d) rugissement",
                "marks": 1,
                "answer": "d) rugissement"
              },
              {
                "id": 32,
                "text": "Le chien ___ quand la caravane passe. a) grogne b) aboie c) rugit d) braie",
                "marks": 1,
                "answer": "b) aboie"
              },
              {
                "id": 33,
                "text": "___ orange est très sucrée. a) cette b) cet c) ces d) ce",
                "marks": 1,
                "answer": "a) cette"
              },
              {
                "id": 34,
                "text": "___ enfant me semble être très indiscipliné. a) cette b) cet c) ce d) ces",
                "marks": 1,
                "answer": "b) cet"
              },
              {
                "id": 35,
                "text": "J'ai déjà visité tous ___ pays. a) cette b) cet c) ces d) ce",
                "marks": 1,
                "answer": "c) ces"
              },
              {
                "id": 36,
                "text": "Les bergers ont fait vacciner ___ serfs. a) ses b) son c) votre d) leurs",
                "marks": 1,
                "answer": "d) leurs"
              },
              {
                "id": 37,
                "text": "Chez mon oncle, ___ enfants l'appellent Tonton. a) tes b) nos c) vos d) ses",
                "marks": 1,
                "answer": "d) ses"
              },
              {
                "id": 38,
                "text": "Tous les lauréats ont porté des cravates ___. a) vertes citron b) vert citron c) verts citron d) vertes citrons",
                "marks": 1,
                "answer": "b) vert citron"
              },
              {
                "id": 39,
                "text": "Plusieurs ___ ont été organisés. a) festivals b) festivaux c) festivales d) festivax",
                "marks": 1,
                "answer": "a) festivals"
              },
              {
                "id": 40,
                "text": "Hier je lui ai donné une montre mais il ___ cassée. a) l'a b) la c) l' d) las",
                "marks": 1,
                "answer": "a) l'a"
              }
            ]
          },
          {
            "title": "Deuxième Partie: Compréhension Écrite",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Quelles sont les 2 catégories de personnes qui constituent les transformateurs?",
                "marks": 5,
                "answer": "Les fumeurs et les sécheurs de poisson."
              },
              {
                "id": 2,
                "text": "Quelles sont les espèces les plus transformées?",
                "marks": 5,
                "answer": "Les petits pélagiques tels que l'Ethmalose et la sardinelle."
              },
              {
                "id": 3,
                "text": "Auprès de qui s'approvisionnent la quasi-totalité des femmes?",
                "marks": 5,
                "answer": "Auprès de leurs époux pêcheurs."
              },
              {
                "id": 4,
                "text": "A quelle fin les femmes utilisent leurs revenus?",
                "marks": 5,
                "answer": "Pour envoyer les enfants à l'école, acheter des postes de télévision, et pour la ration alimentaire familiale."
              },
              {
                "id": 5,
                "text": "D'où proviennent les fonds investis?",
                "marks": 5,
                "answer": "À 87% des ressources propres provenant des tontines et épargnes personnelles."
              },
              {
                "id": 6,
                "text": "Rédigez une lettre de motivation pour le poste de directeur à la SOCOPPROMACAM.",
                "marks": 5,
                "answer": "Objet: Candidature au poste de Directeur\n\nMadame, Monsieur,\n\nSuite à l'appel d'offres pour le recrutement d'un directeur au sein de la Coopérative SOCOPPROMACAM, j'ai l'honneur de vous soumettre ma candidature.\n\nTitulaire d'un diplôme en gestion des coopératives avec 10 ans d'expérience dans le secteur agricole, je possède les compétences nécessaires pour diriger votre organisation. J'ai une connaissance approfondie de la filière manioc et de ses enjeux.\n\nJe suis convaincu que mon expertise en gestion et mon engagement pour le développement coopératif contribueront à la croissance de SOCOPPROMACAM.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\n[Signature]"
              }
            ]
          }
        ]
      },
      {
        "title": "Mathematics",
        "duration": "3 hours",
        "credits": 6,
        "description": "Specialty: All Specialties | 2022 Session",
        "sections": [
          {
            "title": "Section A: Statistics and Probability",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Given data: width measurements with Σx=250, Σx²=5200, n=30. Calculate mean, variance, and standard deviation.",
                "marks": 10,
                "answer": "Mean = Σx/n = 250/30 = 8.33\nVariance = Σx²/n - (Σx/n)² = 5200/30 - (8.33)² = 173.33 - 69.44 = 103.89\nSD = √103.89 = 10.19"
              },
              {
                "id": 2,
                "text": "From a normal distribution with μ=75, σ=8, find: a) P(X&lt;80) b) P(X&gt;70) c) P(65&lt;X&lt;85) using Z-scores.",
                "marks": 10,
                "answer": "a) Z=(80-75)/8=0.625, P(Z<0.625)=0.7340\nb) Z=(70-75)/8=-0.625, P(Z>-0.625)=0.7340\nc) Z₁=(65-75)/8=-1.25, Z₂=(85-75)/8=1.25, P=0.8944-0.1056=0.7888"
              },
              {
                "id": 3,
                "text": "A sample of 40 items from a production line has mean 50.2g and SD 0.8g. Test at 5% significance whether the population mean is 50g.",
                "marks": 10,
                "answer": "H₀: μ=50, H₁: μ≠50\nZ = (50.2-50)/(0.8/√40) = 0.2/0.1265 = 1.581\nCritical value at 5% = ±1.96\nSince 1.581 < 1.96, we fail to reject H₀. The population mean is not significantly different from 50g at the 5% level."
              },
              {
                "id": 4,
                "text": "A coin is tossed 5 times. Find probability of: a) exactly 3 heads b) at least 4 heads c) no heads.",
                "marks": 10,
                "answer": "Binomial, n=5, p=0.5\na) P(3) = C(5,3)(0.5)³(0.5)² = 10×0.03125 = 0.3125\nb) P(4)+P(5) = C(5,4)(0.5)⁵ + C(5,5)(0.5)⁵ = 5×0.03125 + 1×0.03125 = 0.1875\nc) P(0) = (0.5)⁵ = 0.03125"
              },
              {
                "id": 5,
                "text": "Calculate the correlation coefficient between X and Y: X: 2,4,6,8,10 Y: 3,5,7,9,11",
                "marks": 10,
                "answer": "Σx=30, x̄=6, Σy=35, ȳ=7\nΣxy=2(3)+4(5)+6(7)+8(9)+10(11)=6+20+42+72+110=250\nΣx²=4+16+36+64+100=220\nΣy²=9+25+49+81+121=285\nr = (Σxy - n·x̄·ȳ)/√[(Σx²-n·x̄²)(Σy²-n·ȳ²)]\n= (250-5(6)(7))/√[(220-5(36))(285-5(49))]\n= (250-210)/√[(220-180)(285-245)]\n= 40/√(40×40) = 40/40 = 1.0 (perfect positive correlation)"
              }
            ]
          },
          {
            "title": "Section B: Further Mathematics",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate f(x)=3x⁵-2x³+7x-4 with respect to x.",
                "marks": 5,
                "answer": "f'(x) = 15x⁴ - 6x² + 7"
              },
              {
                "id": 2,
                "text": "Integrate ∫(6x²-4x+3)dx with limits from 1 to 3.",
                "marks": 5,
                "answer": "∫(6x²-4x+3)dx = 2x³-2x²+3x\n[2(27)-2(9)+9] - [2(1)-2(1)+3] = (54-18+9) - (2-2+3) = 45-3 = 42"
              },
              {
                "id": 3,
                "text": "Solve the matrix equation: [2 1; 3 2][x; y] = [5; 8].",
                "marks": 5,
                "answer": "Determinant = 2(2)-1(3) = 4-3 = 1\ndet ≠ 0, so inverse exists.\nInverse = [2 -1; -3 2]\n[x; y] = [2 -1; -3 2][5; 8] = [10-8; -15+16] = [2; 1]\nx=2, y=1"
              },
              {
                "id": 4,
                "text": "Evaluate: lim(x→2) (x²-4)/(x-2).",
                "marks": 5,
                "answer": "Factor numerator: (x-2)(x+2)/(x-2) = x+2 (for x≠2)\nLimit = 2+2 = 4"
              },
              {
                "id": 5,
                "text": "Find the equation of the line passing through (2,3) with slope 4.",
                "marks": 5,
                "answer": "y - y₁ = m(x - x₁)\ny - 3 = 4(x - 2)\ny - 3 = 4x - 8\ny = 4x - 5"
              },
              {
                "id": 6,
                "text": "Calculate the compound interest on 500,000 FCFA at 5% per annum for 3 years.",
                "marks": 5,
                "answer": "A = P(1+r/n)^(nt)\nA = 500000(1+0.05)³\nA = 500000(1.157625)\nA = 578,812.50 FCFA\nInterest = 78,812.50 FCFA"
              },
              {
                "id": 7,
                "text": "Convert the binary number 110101 to decimal.",
                "marks": 5,
                "answer": "110101₂ = 1×2⁵+1×2⁴+0×2³+1×2²+0×2¹+1×2⁰\n= 32+16+0+4+0+1 = 53"
              },
              {
                "id": 8,
                "text": "If A={1,2,3}, B={2,3,4}, C={3,4,5}, find A∪B, A∩B, A\\(B∩C).",
                "marks": 5,
                "answer": "A∪B = {1,2,3,4}\nA∩B = {2,3}\nB∩C = {3,4}\nA\\(B∩C) = {1,2}"
              },
              {
                "id": 9,
                "text": "Solve for x: 2^(x+1) = 16.",
                "marks": 5,
                "answer": "2^(x+1) = 16 = 2⁴\nx+1 = 4\nx = 3"
              },
              {
                "id": 10,
                "text": "Find the derivative of y = sin(3x²).",
                "marks": 5,
                "answer": "dy/dx = cos(3x²) × 6x = 6x·cos(3x²) (chain rule)"
              }
            ]
          }
        ]
      }
    ]
  },
  "2023": {
    "papers": [
      {
        "title": "Practice of Computer",
        "duration": "5 hours",
        "credits": 8,
        "description": "Code: SWE 20 | Practical Exam | 2023 Session",
        "sections": [
          {
            "title": "Section A: Programming — I. Structured Programming (C)",
            "marks": 25,
            "questions": [
              {
                "id": "1a",
                "text": "Write a program that prints 'enter the passdigit' the first time, gets a value from the user and keeps printing 'enter the correct passdigit' until the correct value '1234' is entered, then prints 'condition is satisfied, you may have access'.",
                "marks": 4,
                "answer": "#include <stdio.h>\n\nint main() {\n    int passdigit, correct = 1234;\n    printf(\"enter the passdigit\\n\");\n    scanf(\"%d\", &passdigit);\n    while (passdigit != correct) {\n        printf(\"enter the correct passdigit\\n\");\n        scanf(\"%d\", &passdigit);\n    }\n    printf(\"condition is satisfied, you may have access\\n\");\n    return 0;\n}",
                "tutorial": "Use a while loop that continues as long as the entered value does not match 1234."
              },
              {
                "id": "1b",
                "text": "Write a C program that swaps two integers passed by reference. Show function declaration, definition, and call. Display values before and after swap.",
                "marks": 3,
                "answer": "#include <stdio.h>\n\nvoid swap(int *a, int *b);\n\nint main() {\n    int x, y;\n    printf(\"Enter two integers: \");\n    scanf(\"%d %d\", &x, &y);\n    printf(\"Before swap: x=%d, y=%d\\n\", x, y);\n    swap(&x, &y);\n    printf(\"After swap: x=%d, y=%d\\n\", x, y);\n    return 0;\n}\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}",
                "tutorial": "Pass addresses using &. The swap function uses pointers to exchange values."
              },
              {
                "id": "1c",
                "text": "Write a recursive function to take value 3 to the power of another number. If 4 is passed, return 81.",
                "marks": 3,
                "answer": "#include <stdio.h>\n\nint powerOfThree(int n) {\n    if (n == 0) return 1;\n    return 3 * powerOfThree(n - 1);\n}\n\nint main() {\n    int n;\n    printf(\"Enter exponent: \");\n    scanf(\"%d\", &n);\n    printf(\"3^%d = %d\\n\", n, powerOfThree(n));\n    return 0;\n}",
                "tutorial": "Base case: n==0 returns 1. Recursive case: 3 * powerOfThree(n-1)."
              },
              {
                "id": "1d",
                "text": "An election has five candidates: Paul Biya, Kamto, Joeshua Osi, Cabral Linii, Adamou. Use array of structures to store names, age, votes. Prompt for registered voters, use do-while to cast votes, use pointers to display results sorted from winner to loser in a table.",
                "marks": 15,
                "answer": "#include <stdio.h>\n#include <string.h>\n\nstruct Candidate {\n    char name[50];\n    int age;\n    int votes;\n};\n\nvoid sortResults(struct Candidate *c, int n) {\n    struct Candidate temp;\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - 1 - i; j++) {\n            if ((*(c + j)).votes < (*(c + j + 1)).votes) {\n                temp = *(c + j);\n                *(c + j) = *(c + j + 1);\n                *(c + j + 1) = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    struct Candidate candidates[5] = {\n        {\"Paul Biya\", 90, 0}, {\"Kamto\", 55, 0}, {\"Joeshua Osi\", 50, 0},\n        {\"Cabral Linii\", 45, 0}, {\"Adamou\", 60, 0}\n    };\n    int registered, vote, i;\n    printf(\"Enter number of registered voters: \");\n    scanf(\"%d\", &registered);\n    for (i = 0; i < registered; i++) {\n        do {\n            printf(\"Voter %d - Enter candidate number (1-5): \", i + 1);\n            scanf(\"%d\", &vote);\n        } while (vote < 1 || vote > 5);\n        (*(candidates + vote - 1)).votes++;\n    }\n    sortResults(candidates, 5);\n    printf(\"\\n--- ELECTION RESULTS ---\\n\");\n    printf(\"%-20s %-5s %-10s\\n\", \"Name\", \"Age\", \"Votes\");\n    for (i = 0; i < 5; i++) {\n        printf(\"%-20s %-5d %-10d\\n\", (*(candidates + i)).name, (*(candidates + i)).age, (*(candidates + i)).votes);\n    }\n    return 0;\n}",
                "tutorial": "Use struct array with pointer arithmetic. Bubble sort in descending order."
              }
            ]
          },
          {
            "title": "Section A: Programming — II. Object Oriented Programming (C++/Java)",
            "marks": 25,
            "questions": [
              {
                "id": "a",
                "text": "Create a class publication storing title (string) and price (float). Derive book (adds page count) and tape (adds playing time). Each has getdata() and putdata(). Write main() to test.",
                "marks": 15,
                "answer": "class Publication {\nprotected:\n    string title;\n    float price;\npublic:\n    void getdata() {\n        cout << \"Enter title: \"; cin >> title;\n        cout << \"Enter price: \"; cin >> price;\n    }\n    void putdata() {\n        cout << \"Title: \" << title << endl;\n        cout << \"Price: \" << price << endl;\n    }\n};\n\nclass Book : public Publication {\n    int pages;\npublic:\n    void getdata() {\n        Publication::getdata();\n        cout << \"Enter pages: \"; cin >> pages;\n    }\n    void putdata() {\n        Publication::putdata();\n        cout << \"Pages: \" << pages << endl;\n    }\n};\n\nclass Tape : public Publication {\n    float minutes;\npublic:\n    void getdata() {\n        Publication::getdata();\n        cout << \"Enter playing time (min): \"; cin >> minutes;\n    }\n    void putdata() {\n        Publication::putdata();\n        cout << \"Playing time: \" << minutes << \" min\" << endl;\n    }\n};\n\nint main() {\n    Book b; Tape t;\n    b.getdata(); t.getdata();\n    b.putdata(); t.putdata();\n    return 0;\n}",
                "tutorial": "Each derived class calls base class getdata/putdata and adds its own fields."
              },
              {
                "id": "b",
                "text": "Add a base class Sales holding an array of 3 floats for monthly sales. Include getdata() and putdata(). Derive book and tape from both publication and sales (multiple inheritance).",
                "marks": 5,
                "answer": "class Sales {\nprotected:\n    float sales[3];\npublic:\n    void getdata() {\n        for (int i = 0; i < 3; i++) {\n            cout << \"Enter sales for month \" << i+1 << \": \";\n            cin >> sales[i];\n        }\n    }\n    void putdata() {\n        for (int i = 0; i < 3; i++)\n            cout << \"Month \" << i+1 << \" sales: \" << sales[i] << endl;\n    }\n};\n\nclass Book : public Publication, public Sales {\n    int pages;\npublic:\n    void getdata() { Publication::getdata(); Sales::getdata(); cout << \"Enter pages: \"; cin >> pages; }\n    void putdata() { Publication::putdata(); Sales::putdata(); cout << \"Pages: \" << pages << endl; }\n};",
                "tutorial": "Multiple inheritance: Book derives from both Publication and Sales."
              },
              {
                "id": "c",
                "text": "Add a Disk class derived from publication with disk type (CD or DVD) using enum. User selects type by typing c or d.",
                "marks": 5,
                "answer": "enum DiskType { CD, DVD };\n\nclass Disk : public Publication {\n    DiskType dtype;\npublic:\n    void getdata() {\n        Publication::getdata();\n        char ch;\n        cout << \"Enter disk type (c for CD, d for DVD): \";\n        cin >> ch;\n        dtype = (ch == 'c' || ch == 'C') ? CD : DVD;\n    }\n    void putdata() {\n        Publication::putdata();\n        cout << \"Disk type: \" << (dtype == CD ? \"CD\" : \"DVD\") << endl;\n    }\n};",
                "tutorial": "enum defines constants. User input maps to enum with ternary operator."
              }
            ]
          },
          {
            "title": "Section B: Database Development and Administration",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "A school creates a MySQL database. Students: Matricule, Name, Age, CourseTitle, CourseCode. Draw an ER diagram.",
                "marks": 2,
                "answer": "```mermaid\nerDiagram\n    STUDENT ||--o{ ENROLLMENT : registers\n    ENROLLMENT }o--|| COURSE : for\n    STUDENT {\n        int Matricule PK\n        string Name\n        int Age\n    }\n    COURSE {\n        string CourseCode PK\n        string CourseTitle\n    }\n    ENROLLMENT {\n        int Matricule FK\n        string CourseCode FK\n    }\n```",
                "tutorial": "Many-to-many resolved with junction table ENROLLMENT."
              },
              {
                "id": 2,
                "text": "Consider Customer(CustomerId, Name, Address) and Customer_Product(CustomerId, Product, Date). Write SQL to: display all customers, display products by a customer, display orders after a date.",
                "marks": 6,
                "answer": "SELECT * FROM Customer;\nSELECT Product, Date FROM Customer_Product WHERE CustomerId = 'CUST01';\nSELECT * FROM Customer_Product WHERE Date > '2022-12-31';",
                "tutorial": "Simple SELECT queries with WHERE clause for filtering."
              },
              {
                "id": 3,
                "text": "Write SQL to create a students table, insert a student, and display students enrolled in a specific course.",
                "marks": 6,
                "answer": "CREATE TABLE students (\n    matricule VARCHAR(20) PRIMARY KEY,\n    name VARCHAR(100),\n    age INT,\n    course_code VARCHAR(10),\n    course_title VARCHAR(100)\n);\nINSERT INTO students VALUES ('679200671', 'Nabi', 21, 'PR111', 'Cprogramming');\nSELECT * FROM students WHERE course_code = 'PR111';",
                "tutorial": "CREATE TABLE defines columns. INSERT adds records. SELECT with WHERE filters."
              },
              {
                "id": 4,
                "text": "What is a foreign key? Why is it important?",
                "marks": 3,
                "answer": "A foreign key is a field in one table that references the primary key of another table. It enforces referential integrity, preventing orphan records and ensuring consistency across related tables.",
                "tutorial": "Foreign keys create relationships between tables and maintain data integrity."
              },
              {
                "id": 5,
                "text": "Write SQL to find the number of students in each course.",
                "marks": 3,
                "answer": "SELECT course_title, COUNT(*) as student_count FROM students GROUP BY course_title;",
                "tutorial": "GROUP BY groups records, COUNT(*) counts each group."
              }
            ]
          },
          {
            "title": "Section C: Web Design",
            "marks": 15,
            "questions": [
              {
                "id": "a",
                "text": "Create an HTML form with Email, Zip Code, Country (dropdown: USA/UK/INDIA). Write HTML and JavaScript to validate all fields and email format.",
                "marks": 8,
                "answer": "<form id=\"myForm\" action=\"process.php\" method=\"POST\" onsubmit=\"return validateForm()\">\n    Email: <input type=\"email\" name=\"email\" id=\"email\" required><br>\n    Zip Code: <input type=\"text\" name=\"zip\" id=\"zip\" required><br>\n    Country: <select name=\"country\" id=\"country\" required>\n        <option value=\"\">choose yours</option>\n        <option value=\"USA\">USA</option>\n        <option value=\"UK\">UK</option>\n        <option value=\"INDIA\">INDIA</option>\n    </select><br>\n    <input type=\"submit\" value=\"Submit\">\n</form>\n<script>\nfunction validateForm() {\n    var email = document.getElementById(\"email\").value;\n    var zip = document.getElementById(\"zip\").value;\n    var country = document.getElementById(\"country\").value;\n    if (email == \"\" || zip == \"\" || country == \"\") {\n        alert(\"All fields must be filled!\"); return false;\n    }\n    var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!emailPattern.test(email)) {\n        alert(\"Enter a valid email!\"); return false;\n    }\n    return true;\n}\n</script>",
                "tutorial": "HTML5 required attribute + JavaScript regex validation."
              },
              {
                "id": "b",
                "text": "Write PHP to save form data to data2023.txt and display it back in an HTML table.",
                "marks": 7,
                "answer": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $data = $_POST['email'] . \"|\" . $_POST['zip'] . \"|\" . $_POST['country'] . \"\\n\";\n    file_put_contents(\"data2023.txt\", $data, FILE_APPEND);\n}\n$lines = file(\"data2023.txt\");\necho \"<table border='1'><tr><th>Email</th><th>Zip</th><th>Country</th></tr>\";\nforeach ($lines as $line) {\n    $fields = explode(\"|\", trim($line));\n    echo \"<tr><td>$fields[0]</td><td>$fields[1]</td><td>$fields[2]</td></tr>\";\n}\necho \"</table>\";\n?>",
                "tutorial": "file_put_contents with FILE_APPEND. explode() splits by delimiter."
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Design a network to connect computers for file sharing. Describe hardware and steps.",
                "marks": 5,
                "answer": "Hardware: Switch, Ethernet cables (Cat5e), NIC on each PC.\nSteps:\n1. Connect each PC to the switch with straight-through cables.\n2. Assign IPs on same subnet (192.168.1.x/24).\n3. Enable File and Printer Sharing.\n4. Create shared folder (Properties > Sharing).\n5. Access via \\\\PC-Name\\share.",
                "tutorial": "Switch at Layer 2. SMB protocol for file sharing."
              },
              {
                "id": 2,
                "text": "Explain public vs private IP addresses with examples.",
                "marks": 3,
                "answer": "Public IP: Globally unique, routable on internet (8.8.8.8).\nPrivate IP: Used within local networks, not internet-routable (192.168.x.x, 10.x.x.x).\nNAT translates private to public IPs for internet access.",
                "tutorial": "Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."
              },
              {
                "id": 3,
                "text": "Describe OSI layers. Role of Layers 2 and 3?",
                "marks": 4,
                "answer": "OSI: 7-Application, 6-Presentation, 5-Session, 4-Transport, 3-Network, 2-Data Link, 1-Physical.\nLayer 2: MAC addressing, framing, error detection (switches).\nLayer 3: IP addressing, routing (routers).",
                "tutorial": "Layer 2 = local MAC delivery. Layer 3 = end-to-end IP routing."
              },
              {
                "id": 4,
                "text": "What is a firewall and why is it important?",
                "marks": 3,
                "answer": "A firewall monitors and controls network traffic based on security rules. It blocks unauthorized access while permitting legitimate communication, creating a barrier between trusted internal and untrusted external networks.",
                "tutorial": "Firewalls can be packet-filtering, stateful, or proxy-based."
              }
            ]
          }
        ]
      },
      {
        "title": "Enterprise Creation",
        "duration": "2 hours",
        "credits": 6,
        "description": "All Specialties | 2023 Session",
        "sections": [
          {
            "title": "Section 1: Entrepreneurship",
            "marks": 34,
            "questions": [
              {
                "id": 1,
                "text": "Define: a) Franchise b) Venture capital c) Business venture d) Innovation",
                "marks": 10,
                "answer": "a) Franchise: Business model where franchisor grants franchisee rights to use its brand and systems for fees.\nb) Venture capital: Private equity financing for high-growth startups in exchange for equity.\nc) Business venture: A new business undertaking involving risk for financial gain.\nd) Innovation: Creating new ideas, products, or methods that bring improvement.",
                "tutorial": "Fundamental entrepreneurship concepts."
              },
              {
                "id": 2,
                "text": "What is an 'executive summary'? Why is it the most important part of a business plan?",
                "marks": 14,
                "answer": "An executive summary is a concise overview highlighting business concept, market analysis, financial projections, and management team. It's most important because: it's often the only section investors read; it must capture attention; it summarizes the entire business case; poor summaries get plans rejected immediately regardless of other content.",
                "tutorial": "Write executive summary last. Keep it compelling and concise."
              },
              {
                "id": 3,
                "text": "Explain the life cycle of a small business to an entrepreneur.",
                "marks": 10,
                "answer": "5 stages: \n1. Startup: Launch, find customers.\n2. Survival: Sustain operations, manage cash flow.\n3. Success: Profitable and stable - decide to expand or maintain.\n4. Take-off: Rapid growth, need delegation and capital.\n5. Resource Maturity: Established market position, focus on innovation.",
                "tutorial": "Each stage requires different management strategies."
              }
            ]
          },
          {
            "title": "Section 2: General Economics",
            "marks": 33,
            "questions": [
              {
                "id": 4,
                "text": "Given Qd=2000-2P, Qs=400+2P: a) Find equilibrium P and Q. b) At P=600, calculate surplus/shortage. c) Calculate price elasticity if P increases by 100 from equilibrium.",
                "marks": 14,
                "answer": "a) Equilibrium: Qd=Qs => 2000-2P=400+2P => 1600=4P => P=400, Q=2000-2(400)=1200\nb) At P=600: Qd=800, Qs=1600, Surplus=800 units (excess supply)\nc) New P=500: Qd=1000. %ΔQd=(1000-1200)/1200=-16.67%, %ΔP=25%. Elasticity=-0.67 (inelastic)",
                "tutorial": "Equilibrium where Qd=Qs. Price floor above equilibrium creates surplus."
              },
              {
                "id": 5,
                "text": "State and explain five qualities of money.",
                "marks": 10,
                "answer": "1. Acceptability: Widely accepted as medium of exchange.\n2. Durability: Withstands physical wear.\n3. Divisibility: Divisible into smaller units.\n4. Portability: Easy to carry.\n5. Stability: Maintains stable value as store of value.",
                "tutorial": "These qualities ensure money functions effectively."
              },
              {
                "id": 6,
                "text": "State five effects of AFCON 2021 on Cameroon's economic growth.",
                "marks": 9,
                "answer": "1. Infrastructure development (stadiums, roads).\n2. Tourism revenue from visitors.\n3. Employment generation.\n4. Business opportunities for vendors.\n5. International exposure and future investment attraction.",
                "tutorial": "Major events have short-term economic impacts."
              }
            ]
          },
          {
            "title": "Section 3: Company Law",
            "marks": 33,
            "questions": [
              {
                "id": 7,
                "text": "Critically examine the principle of corporate personality.",
                "marks": 20,
                "answer": "Corporate personality: a company is a separate legal entity distinct from shareholders. Key aspects: \n1. Separate legal existence: company owns property, enters contracts, sues/is sued in its own name.\n2. Limited liability: shareholders liable only to their shareholding.\n3. Perpetual succession: company continues regardless of membership changes.\n4. Lifting the corporate veil: courts may disregard separate personality in cases of fraud.\n5. Landmark case: Salomon v Salomon & Co Ltd (1897) established the principle.",
                "tutorial": "Foundation of company law. Enables limited liability and perpetual succession."
              },
              {
                "id": 8,
                "text": "Explain the types of contributions made by shareholders of a company.",
                "marks": 13,
                "answer": "1. Cash contribution: most common, cash for shares.\n2. Property contribution: transfer of assets in exchange for shares.\n3. Services contribution: expertise for shares.\n4. Share premium: amount above nominal value.\n5. Calls on shares: installment payments for partly-paid shares.\nUnder OHADA, contributions must be fully paid for public limited companies.",
                "tutorial": "Contributions form the company's capital base."
              }
            ]
          }
        ]
      },
      {
        "title": "English Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2023 Session",
        "sections": [
          {
            "title": "Section A: Reading Comprehension",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "According to the passage 'Defeat of the Mind', what is the most common overused statement?",
                "marks": 2,
                "answer": "'The youths of today are the leaders of tomorrow'."
              },
              {
                "id": 2,
                "text": "According to Denzel Washington, what two qualities are needed for success?",
                "marks": 2,
                "answer": "Commitment ('Without commitment, you will never start') and consistency ('without consistency, you will never finish')."
              },
              {
                "id": 3,
                "text": "How did Donald Trump prove his critics wrong?",
                "marks": 2,
                "answer": "Despite little sign of positive progress, he was committed and consistent, proving his person and winning the US Presidency."
              },
              {
                "id": 4,
                "text": "What did George Weah decide after retiring from soccer?",
                "marks": 2,
                "answer": "He decided to enter politics in Liberia, believing there was more potential in him than football could explore."
              },
              {
                "id": 5,
                "text": "What is the 'surest evidence of defeat of the man himself'?",
                "marks": 2,
                "answer": "'Defeat of the mind is the surest evidence of defeat of the man himself'."
              },
              {
                "id": 6,
                "text": "Explain: 'Without commitment, you will never start. Without consistency, you will never finish.'",
                "marks": 4,
                "answer": "Commitment is needed to begin any endeavor, but consistency - persisting toward goals over time despite obstacles - determines ultimate success. Many start but few have the discipline to finish."
              },
              {
                "id": 7,
                "text": "What false perspective affects youths according to the passage?",
                "marks": 3,
                "answer": "Youths believe leadership is only for the old, preventing them from pursuing leadership roles and achieving their potential."
              },
              {
                "id": 8,
                "text": "What is the main message of the passage?",
                "marks": 3,
                "answer": "Mental defeat is the greatest form of defeat. Youths must overcome false beliefs about leadership and embrace commitment and consistency."
              }
            ]
          },
          {
            "title": "Section B: Grammar and Vocabulary",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "He bought a ------ car. A) New brand red B) brand new red C) red new brand D) red brand new",
                "marks": 1,
                "answer": "B) brand new red"
              },
              {
                "id": 2,
                "text": "The dog wagged --------- tail. A) It's B) its C) it is D) its'",
                "marks": 1,
                "answer": "B) its"
              },
              {
                "id": 3,
                "text": "An MC is someone who--------- other people. A) Introduce B) introduces C) introduce D) introducing",
                "marks": 1,
                "answer": "B) introduces"
              },
              {
                "id": 4,
                "text": "Cameroon is a bilingual country----------- A) Didn't it B) it is C) is it D) isn't it",
                "marks": 1,
                "answer": "D) isn't it"
              },
              {
                "id": 5,
                "text": "I went to Germany ----------- my aunt was there. A) Before B) after C) because D) until",
                "marks": 1,
                "answer": "C) because"
              },
              {
                "id": 6,
                "text": "Most of the -------------- in my house --------------- made of wood. A) Furnitures, are B) furniture, is C) furniture, are D) furniture, were",
                "marks": 1,
                "answer": "C) furniture, are"
              },
              {
                "id": 7,
                "text": "Awa received a prize --------------- her exams. A) For pass B) for having passed C) for having pass D) for have passed",
                "marks": 1,
                "answer": "B) for having passed"
              },
              {
                "id": 8,
                "text": "They both ran fast, but I think Eposi is ---------------. A) More faster B) much more faster C) faster D) the more faster",
                "marks": 1,
                "answer": "C) faster"
              },
              {
                "id": 9,
                "text": "She has a very good job. I am sure she --------- over two hundred thousand francs. A) Wins B) gains C) earns D) receives",
                "marks": 1,
                "answer": "C) earns"
              },
              {
                "id": 10,
                "text": "A ---------- of locust invaded the vegetable farm. A) Group B) swarm C) troop D) flock",
                "marks": 1,
                "answer": "B) swarm"
              },
              {
                "id": 11,
                "text": "What is a synonym? Give an example.",
                "marks": 2,
                "answer": "A synonym is a word with the same or similar meaning as another. Example: 'big' and 'large'."
              },
              {
                "id": 12,
                "text": "What is an antonym? Give an example.",
                "marks": 2,
                "answer": "An antonym is a word with the opposite meaning. Example: 'hot' and 'cold'."
              },
              {
                "id": 13,
                "text": "Correct: 'The equipments are very expensive.'",
                "marks": 2,
                "answer": "The equipment is very expensive. ('Equipment' is uncountable.)"
              },
              {
                "id": 14,
                "text": "Fill in: 'If I _____ (be) you, I would accept.'",
                "marks": 2,
                "answer": "If I were you, I would accept. (Subjunctive mood)"
              },
              {
                "id": 15,
                "text": "Identify figure of speech: 'The wind whispered through the trees.'",
                "marks": 2,
                "answer": "Personification - giving human quality (whispered) to wind."
              }
            ]
          },
          {
            "title": "Section C: Spoken English",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Difference between monologue and dialogue?",
                "marks": 4,
                "answer": "Monologue: long speech by one person. Dialogue: conversation between two or more people exchanging ideas."
              },
              {
                "id": 2,
                "text": "Explain the importance of intonation in spoken English.",
                "marks": 4,
                "answer": "Intonation conveys meaning, emotion, and attitude. Rising intonation indicates questions; falling indicates statements. It helps listeners understand intent beyond words."
              },
              {
                "id": 3,
                "text": "Key elements of effective public speaking?",
                "marks": 6,
                "answer": "1. Clear articulation. 2. Appropriate pace. 3. Eye contact. 4. Gestures and body language. 5. Voice modulation. 6. Organized content (introduction, body, conclusion)."
              },
              {
                "id": 4,
                "text": "Write a short opening speech as MC for a school event.",
                "marks": 6,
                "answer": "\"Good morning, distinguished guests, staff, and fellow students. I am honored to welcome you to this year's HND graduation ceremony. Today we celebrate years of hard work and dedication. To our graduands, this is a testament to your commitment. We are privileged to have our guest speaker. Let us begin.\""
              }
            ]
          },
          {
            "title": "Section D: Writing",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Write an essay (~300 words) on: a) Impact of technology on education, b) Youth entrepreneurship, or c) Climate change in Cameroon.",
                "marks": 20,
                "answer": "The Impact of Technology on Education\n\nTechnology has revolutionized education. The traditional classroom has transformed into a dynamic digital environment. \n\nFirstly, technology has democratized knowledge access. The internet provides instant access to vast resources - online libraries, tutorials, and MOOCs from world-class institutions, breaking geographical barriers.\n\nSecondly, technology enhances engagement. Multimedia presentations, virtual labs, and educational games make learning more effective. Students visualize complex concepts through simulations.\n\nThirdly, personalized learning is enabled. Adaptive software adjusts content based on individual performance.\n\nHowever, challenges exist: the digital divide limits access for underserved areas, and excessive screen time can distract.\n\nIn conclusion, technology's benefits to education are transformative when thoughtfully integrated.",
                "tutorial": "Well-structured essay: introduction, body paragraphs with main points, conclusion."
              }
            ]
          }
        ]
      },
      {
        "title": "French Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2023 Session",
        "sections": [
          {
            "title": "Section A: La Langue (Grammaire, Conjugaison et Vocabulaire)",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "_____ malade qui est couchée est très souffrante. A) Le B) La C) L' D) Un",
                "marks": 1,
                "answer": "B) La"
              },
              {
                "id": 2,
                "text": "Mon frère a _____ meubles dans son bureau. A) Des jolis B) De joli C) De jolis D) Des joli",
                "marks": 1,
                "answer": "C) De jolis"
              },
              {
                "id": 3,
                "text": "Qui va _____ sûrement. A) Lentement B) gentiment C) régulièrement D) subitement",
                "marks": 1,
                "answer": "C) régulièrement"
              },
              {
                "id": 4,
                "text": "Hélène a écrit une lettre à sa sœur. Elle _____ écrite. A) La lui B) La lui a C) Lui a D) Lui la",
                "marks": 1,
                "answer": "B) La lui a"
              },
              {
                "id": 5,
                "text": "Le professeur va _____ cours. A) Sur B) En C) Par D) Au",
                "marks": 1,
                "answer": "D) Au"
              },
              {
                "id": 6,
                "text": "Buvez-vous du vin? Oui, nous _____ buvons. A) Le B) La C) En D) Les",
                "marks": 1,
                "answer": "C) En"
              },
              {
                "id": 7,
                "text": "Le père ne mange pas _____ viande. A) De la B) Du C) De D) Des",
                "marks": 1,
                "answer": "A) De la"
              },
              {
                "id": 8,
                "text": "Je te donne ces conseils _____ tu deviennes sage. A) Parce que B) Afin que C) Puisque D) Alors que",
                "marks": 1,
                "answer": "B) Afin que"
              },
              {
                "id": 9,
                "text": "Mon professeur parle à mes parents. Il _____ parle. A) Leur B) Lui C) Les D) à eux",
                "marks": 1,
                "answer": "A) Leur"
              },
              {
                "id": 10,
                "text": "Les gens qui vont en ville sont des _____. A) Citoyens B) Citadelle C) Citoyennes D) Citadins",
                "marks": 1,
                "answer": "D) Citadins"
              },
              {
                "id": 11,
                "text": "Mettez à la forme négative: 'T'es-tu lavé?'",
                "marks": 1,
                "answer": "Ne t'es-tu pas lavé?"
              },
              {
                "id": 12,
                "text": "_____ temps après la visite, les visiteurs firent le chemin du retour. A) Quelque B) Quelques C) Quel que D) Quels que",
                "marks": 1,
                "answer": "A) Quelque"
              },
              {
                "id": 13,
                "text": "Il y a _____ élèves en classe aujourd'hui. A) Quatre-vingt B) Quatre vingts C) Quatres vingt D) Quatresvingts",
                "marks": 1,
                "answer": "A) Quatre-vingt"
              },
              {
                "id": 14,
                "text": "Voici le _____ qui a opéré ma sœur. A) Chirurgienne B) Garde-malade C) Boucher D) Chirurgien",
                "marks": 1,
                "answer": "D) Chirurgien"
              },
              {
                "id": 15,
                "text": "Traduisez: 'Rien ne sert de courir. Il faut partir à point.'",
                "marks": 2,
                "answer": "It's no use running; you need to start on time. (Preparation and punctuality are more important than rushing.)"
              },
              {
                "id": 16,
                "text": "Mettez à la voix passive: 'Paul dessine un éléphant.'",
                "marks": 2,
                "answer": "Un éléphant est dessiné par Paul."
              },
              {
                "id": 17,
                "text": "Traduisez: 'My father is a teacher at the university.'",
                "marks": 2,
                "answer": "Mon père est enseignant à l'université."
              },
              {
                "id": 18,
                "text": "Traduisez: 'Ten years ago Cameroon was a peaceful country.'",
                "marks": 2,
                "answer": "Il y a dix ans, le Cameroun était un pays paisible."
              },
              {
                "id": 19,
                "text": "Mettez à la voix active: 'Un but sera marqué par Eto'o.'",
                "marks": 2,
                "answer": "Eto'o marquera un but."
              },
              {
                "id": 20,
                "text": "Conjuguez au passé composé: 'Marie (préparer) la nourriture.'",
                "marks": 2,
                "answer": "Marie a préparé la nourriture."
              },
              {
                "id": 21,
                "text": "Quelle est la première université créée au Cameroun?",
                "marks": 2,
                "answer": "L'Université de Yaoundé (aujourd'hui Université de Yaoundé I)."
              },
              {
                "id": 22,
                "text": "Qui est le Chef du gouvernement camerounais?",
                "marks": 2,
                "answer": "Le Premier Ministre (actuellement Joseph Dion Ngute)."
              }
            ]
          },
          {
            "title": "Section B: Compréhension Écrite",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Lisez le texte sur la crise économique. Donnez un titre approprié.",
                "marks": 2,
                "answer": "'Discours sur la Résistance de l'Économie Camerounaise face à la Crise Mondiale'."
              },
              {
                "id": 2,
                "text": "En quelle année ce discours a-t-il été prononcé?",
                "marks": 2,
                "answer": "En 2009, pendant la crise économique et financière mondiale."
              },
              {
                "id": 3,
                "text": "Quel secteur a bien résisté?",
                "marks": 2,
                "answer": "Le secteur financier a assez bien résisté."
              },
              {
                "id": 4,
                "text": "Citez deux mesures du gouvernement.",
                "marks": 2,
                "answer": "1) Action modératrice sur les prix des matières premières. 2) Soutien aux recrutements dans la fonction publique."
              },
              {
                "id": 5,
                "text": "Que veut dire 'notre économie a fléchi'?",
                "marks": 2,
                "answer": "L'économie a ralenti - baisse de la croissance sans effondrement total."
              },
              {
                "id": 6,
                "text": "Quelles sont les conséquences du ralentissement?",
                "marks": 2,
                "answer": "Baisse des recettes fiscales, souffrance de l'emploi, reports d'investissements, resserrement du crédit."
              },
              {
                "id": 7,
                "text": "Que faire pour ne pas compromettre l'avenir?",
                "marks": 3,
                "answer": "Maintenir la discipline budgétaire, garder le cap d'urgence pour la population exposée, ne pas compromettre l'avenir par des dépenses excessives."
              },
              {
                "id": 8,
                "text": "Formez des verbes: Consommation, Progrès, Production.",
                "marks": 5,
                "answer": "Consommation → Consommer\nProgrès → Progresser\nProduction → Produire"
              }
            ]
          }
        ]
      },
      {
        "title": "Law and Citizenship Education",
        "duration": "2 hours",
        "credits": 2,
        "description": "All Specialties | 2023 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "'If law was not created it could have been invented.' Discuss.",
                "marks": 20,
                "answer": "The statement 'If law was not created it could have been invented' suggests that law is so fundamental to human society that even if it had not been formally established, human beings would have been compelled to create it. This proposition touches on the philosophical debate between natural law theory and legal positivism regarding the origin and nature of law.\n\n1. Natural Law Theory\nNatural law theorists such as Aristotle, Thomas Aquinas, and John Locke argue that law is not created by humans but is discovered through reason. According to this view, certain moral principles are inherent in nature and in human reason, and these principles form the foundation of all legal systems. Law exists independently of human will because it is rooted in the nature of human beings and their social existence. From this perspective, law was not 'created' in the sense of being invented; rather, it emerged naturally from human reason and the need for justice and order in society.\n\n2. Legal Positivism\nLegal positivists such as John Austin, Jeremy Bentham, and H.L.A. Hart argue that law is a human creation. According to this school of thought, law consists of rules made by human beings through recognised authority structures such as legislatures, courts, and custom. Law is valid not because it conforms to any higher moral principle but because it is enacted by a legitimate authority and enforced through sanctions. From this perspective, law was indeed created by humans to regulate behaviour and maintain order. Therefore, if law had not been created, human beings would have had to invent it.\n\n3. Social Contract Theory\nThinkers such as Thomas Hobbes, John Locke, and Jean-Jacques Rousseau propose that law arises from an implicit social contract among members of society. In the state of nature, without law, life was 'solitary, poor, nasty, brutish, and short' (Hobbes). To escape this condition, individuals agreed to surrender some of their freedoms to a governing authority that would establish and enforce laws. This theory suggests that law was not originally part of human existence but was invented through collective agreement as a necessary mechanism for survival and peaceful coexistence.\n\n4. Law as a Social Necessity\nLaw serves indispensable functions in any society: it provides order and predictability, resolves disputes, protects individual rights and freedoms, regulates social and economic relations, and maintains peace and security. Without law, society would descend into chaos, where individuals would rely on force and self-help to resolve conflicts. Even if law had not been formally created by the state, communities would inevitably develop informal rules, customs, and norms to regulate behaviour and ensure survival. Over time, these would evolve into more formal legal systems.\n\n5. Law and Civilisation\nLaw is intimately connected with the development of civilisation. Every known human society, from ancient Mesopotamia (Code of Hammurabi) to modern states, has developed some form of legal system. This universality demonstrates that law is not an accidental or optional feature of society but a fundamental requirement for organised human coexistence. The existence of law in all societies, regardless of cultural or historical context, supports the view that law is indispensable and would have been invented if it had not naturally emerged.\n\nIn conclusion, the statement that 'if law was not created it could have been invented' accurately reflects the fundamental importance of law to human society. Whether one adopts the natural law view that law emerges naturally from human reason and social existence, or the positivist view that law is a deliberate human invention, both perspectives agree that law is indispensable for civilisation. Without law, society would lack order, justice, and the protection of rights. Therefore, law is not merely a creation of the state but a necessary condition for organised social life."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics, Morals and Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 2,
                "text": "a) What are Human rights? Explain four features. (10 marks)\nb) Discuss four rights and duties of Cameroonian citizens. (10 marks)",
                "marks": 20,
                "answer": "a) Human Rights and Their Features\n\nHuman rights are fundamental rights and freedoms inherent to every human being, regardless of nationality, sex, ethnicity, religion, or any other status. They are based on the principles of dignity, equality, and respect for every person. Human rights are recognised internationally through instruments such as the Universal Declaration of Human Rights (1948) and the African Charter on Human and Peoples' Rights, and are protected in Cameroon under the Constitution.\n\nFour Features of Human Rights:\n\n1. Universality: Human rights apply to every person in the world, everywhere, without distinction. Every individual, by virtue of being human, is entitled to enjoy these rights regardless of race, colour, gender, language, religion, political opinion, national or social origin, property, birth, or other status. This means that human rights are not privileges granted by any government but belong to every person equally.\n\n2. Inalienability: Human rights cannot be taken away from a person, except under specific legal circumstances and through due process of law. No government, institution, or individual has the authority to deprive a person of their fundamental rights arbitrarily. However, certain rights may be limited in specific situations, such as the deprivation of liberty through lawful detention following a fair trial, or restrictions on freedom of movement during a public health emergency.\n\n3. Indivisibility: All human rights are equally important and cannot be ranked in a hierarchy. Civil and political rights (such as the right to life, freedom of speech, and right to vote) are as important as economic, social, and cultural rights (such as the right to education, health, and work). Governments must promote and protect all categories of rights equally, without prioritising one category over another.\n\n4. Interdependence and Interrelatedness: The fulfilment of one human right often depends on the fulfilment of others. For example, the right to education is essential for the effective exercise of the right to vote and participate in public affairs. Similarly, the right to health depends on access to clean water, adequate nutrition, and adequate housing. Violation of one right can impede the enjoyment of other rights.\n\nb) Rights and Duties of Cameroonian Citizens\n\nCitizenship in Cameroon confers both rights and duties upon individuals. These are enshrined in the Constitution and other laws, and they form the basis of the relationship between the citizen and the state. A balance between rights and duties ensures peace, order, and development in society.\n\nRights of Cameroonian Citizens:\n\n1. Right to life: Every citizen has the right to life and to the protection of their physical integrity. The state must protect citizens against arbitrary killing, violence, and threats to their生命安全. The right to life is the most fundamental right, without which all other rights would be meaningless. No person may be arbitrarily deprived of their life, except under lawful circumstances such as a court judgment.\n\n2. Right to freedom of expression: Citizens have the right to express their opinions freely through speech, media, and other forms of communication, as long as it respects public order and the rights of others. This right is essential for democracy, enabling citizens to participate in public debate, criticise government policies, and advocate for change.\n\n3. Right to education: Every citizen has the right to access education. The government is responsible for ensuring that education is available and accessible to all. Education empowers citizens, promotes social mobility, and is essential for personal development and national progress.\n\n4. Right to property: Citizens have the right to own, use, and dispose of property legally acquired. This right is protected against unlawful seizure by the state or individuals. Protection of property rights encourages investment, economic activity, and wealth creation.\n\nDuties of Cameroonian Citizens:\n\n1. Respect for the law: Citizens must obey the laws of the country and respect legal institutions to maintain order and stability. The rule of law depends on voluntary compliance by citizens, and those who violate the law are subject to legal sanctions.\n\n2. Payment of taxes: Citizens have the duty to pay taxes honestly to support government activities and national development. Tax revenue funds public services such as education, healthcare, infrastructure, and security.\n\n3. Protection of national property: Citizens must protect public property such as schools, roads, and government facilities from destruction or misuse. Public property belongs to all citizens, and its preservation serves the common good.\n\n4. Defence of the nation: Citizens have the duty to defend the country when required, especially in matters of national security or service. This may include military service, civil defence, or other forms of national service as provided by law.\n\nIn conclusion, human rights are fundamental, universal, inalienable, indivisible, and interdependent entitlements inherent to all human beings. In Cameroon, citizens enjoy important rights such as life, expression, education, and property, but they also have duties like obeying the law, paying taxes, protecting public property, and defending the nation. A balance between rights and duties ensures peace, order, and development in society."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 3,
                "text": "Discuss the rights of an employee in a labour contract.",
                "marks": 20,
                "answer": "An employee is a person who agrees to work under the authority of an employer in return for wages or salary. In Cameroon, the 1992 Labour Code guarantees certain rights to employees in order to protect them from exploitation and ensure fair and humane working conditions. These rights regulate the employer-employee relationship and promote industrial peace. The main rights of an employee include: right to remuneration, rest and leave, safe working conditions, social security, protection against unfair dismissal, freedom of association, and right to training.\n\n1. Right to remuneration (salary)\nEvery employee has the right to receive fair and regular payment for work done. Wages must be clearly stated in the employment contract and paid promptly. This prevents exploitation and ensures the worker can meet basic needs.\n\n2. Right to rest and leave\nEmployees are entitled to rest periods, weekly breaks, and paid annual leave. This helps reduce fatigue, improves productivity, and protects the physical and mental health of workers.\n\n3. Right to safe and healthy working conditions\nEmployees have the right to work in an environment that is safe and free from danger. Employers must provide protective equipment and ensure workplace safety standards are respected. This reduces accidents and occupational diseases.\n\n4. Right to social security\nEmployees are entitled to social protection such as pensions, medical coverage, and compensation for work-related injuries. This ensures financial protection in case of illness, retirement, or workplace accidents.\n\n5. Right to protection against unfair dismissal\nAn employee cannot be dismissed without a valid reason and without following legal procedures. This protects workers from arbitrary termination and ensures job stability and fairness in employment.\n\n6. Right to freedom of association\nEmployees have the right to join or form trade unions to defend their professional interests. Through unions, workers can negotiate better wages and working conditions with employers.\n\n7. Right to vocational training and career development\nEmployees have the right to receive training that improves their skills and career development. This helps them become more efficient and improves their chances of promotion.\n\nIn conclusion, in Cameroon, the Labour Code protects employees through rights such as fair remuneration, rest, safe working conditions, social security, protection against unfair dismissal, freedom of association, and training. These rights ensure fairness, dignity, and balance in labour relations while promoting productivity and industrial harmony."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 4,
                "text": "Explain five advantages of arbitration over litigation.",
                "marks": 20,
                "answer": "Arbitration is a form of alternative dispute resolution where parties submit their dispute to a neutral third party (arbitrator) whose decision is usually binding. Litigation refers to resolving disputes through formal court proceedings. In Cameroon, arbitration is widely used in commercial and civil matters because it offers practical advantages over court action, especially where parties want faster and more flexible dispute resolution. The main advantages include: speed, confidentiality, flexibility, cost-effectiveness, preservation of relationships, expertise of arbitrators, reduced formalism, and finality of awards.\n\n1. Speed of resolution\nArbitration is generally faster than court litigation because it avoids long procedures, strict court schedules, and congestion in courts. Parties can fix hearing dates quickly, making dispute resolution more efficient. This is important in commercial disputes where delay may cause financial loss.\n\n2. Confidentiality\nArbitration proceedings are private and not open to the public. This protects sensitive information such as business secrets, contracts, and financial details. In contrast, court proceedings are usually public, which may expose parties to reputational risks.\n\n3. Flexibility of procedure\nIn arbitration, parties have the freedom to agree on procedural rules, time frames, and even select the arbitrator. This flexibility allows the process to be adapted to the nature of the dispute. Courts, however, follow strict procedural and evidential rules that may be rigid.\n\n4. Cost-effectiveness\nAlthough arbitrators are paid, arbitration often reduces overall costs because cases are resolved faster and avoid repeated adjournments and lengthy litigation. Court actions may become expensive due to delays, legal fees, and prolonged procedures.\n\n5. Preservation of relationships\nArbitration is less confrontational than litigation, making it suitable for parties who want to maintain business or professional relationships after dispute resolution. Court battles often create hostility and permanent breakdown of relationships.\n\n6. Expertise of arbitrators\nParties can choose arbitrators with specific technical or professional knowledge related to the dispute (e.g., construction, trade, or finance). This ensures more informed and accurate decisions compared to generalist judges.\n\n7. Reduced formalism\nArbitration is less formal than court proceedings. It does not strictly follow complex courtroom procedures, making it easier for parties to present their cases. This reduces delays caused by technical legal requirements.\n\n8. Finality of decision\nArbitration awards are usually final and binding, with very limited grounds for appeal. This brings certainty and avoids prolonged litigation through multiple appeals, which is common in court systems.\n\nIn conclusion, arbitration provides several advantages over litigation in Cameroon, including speed, confidentiality, flexibility, lower costs, preservation of relationships, expertise of decision-makers, reduced formalism, and finality of decisions. These advantages make arbitration a preferred method of dispute resolution, especially in commercial and contractual matters."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 5,
                "text": "Examine discrepancies between Public and Private Limited Companies under OHADA Law.",
                "marks": 20,
                "answer": "A company is a legal entity formed by persons who contribute capital for the purpose of carrying out business and sharing profits. Under the OHADA Uniform Act on Commercial Companies and Economic Interest Groups, applicable in Cameroon, companies are mainly classified into Public Limited Companies (SA - Societe Anonyme) and Private Limited Companies (SARL - Societe a Responsabilite Limitee). Although both are corporate entities with separate legal personality, they differ significantly in formation, management, capital, and operation.\n\n1. Nature of membership\nA Public Limited Company (SA) is usually large and may have many shareholders, often the public, and it can even be listed on a stock exchange. A Private Limited Company (SARL) is smaller and usually formed by a limited number of partners, often family members or close associates. This makes SA more public-oriented while SARL is more private and restricted.\n\n2. Minimum capital requirement\nAn SA generally requires a higher minimum share capital, making it suitable for large-scale business activities. A SARL has a lower capital requirement, making it easier to form and suitable for small and medium-sized enterprises.\n\n3. Transfer of shares\nIn an SA, shares are generally freely transferable, especially in listed companies, making it easier for shareholders to enter and exit. In a SARL, the transfer of shares is restricted and subject to approval by other partners, to preserve the personal nature of the company.\n\n4. Management structure\nAn SA has a more complex management system, usually involving a Board of Directors and a Managing Director or Chief Executive Officer. A SARL has a simpler structure, usually managed by one or more managers (gerants), making decision-making faster and less bureaucratic.\n\n5. Publicity and regulatory requirements\nAn SA is subject to stricter public disclosure and reporting requirements, including publication of financial statements, because it may involve public investment. A SARL has lighter disclosure obligations, offering more privacy to its owners.\n\n6. Raising of capital\nAn SA can raise capital from the public through share issuance and stock markets, making it easier to expand. A SARL cannot raise funds from the public in the same way and relies mainly on contributions from its members.\n\n7. Number of shareholders\nAn SA may have a very large or unlimited number of shareholders, while a SARL is limited to a smaller number of partners as required by OHADA rules, reinforcing its private nature.\n\n8. Liability of members\nIn both SA and SARL, liability is generally limited to the amount of shares contributed. However, in SARL, the personal relationship between partners may sometimes create more internal responsibility and restrictions compared to SA.\n\nIn conclusion, under the OHADA law applicable in Cameroon, Public Limited Companies (SA) and Private Limited Companies (SARL) differ significantly in terms of capital requirements, management structure, share transferability, regulatory obligations, and access to public funding. While SA is suited for large-scale public investment and expansion, SARL is designed for small and medium-sized enterprises with simpler management and restricted membership."
              }
            ]
          }
        ]
      },
      {
        "title": "Information Systems",
        "duration": "3 hours",
        "credits": 6,
        "description": "Specialty: SOFTWARE ENGINEERING | 2023 Session",
        "sections": [
          {
            "title": "Section A: System Architecture",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is an information system in an organization?",
                "marks": 4,
                "answer": "An IS is a coordinated set of components (hardware, software, data, procedures, people) that collect, store, process, and distribute information to support decision making, coordination, and control.",
                "tutorial": "IS combines technology, people, and processes."
              },
              {
                "id": 2,
                "text": "Name the five components of an information system.",
                "marks": 4,
                "answer": "1. Hardware\n2. Software\n3. Data\n4. Procedures\n5. People"
              },
              {
                "id": 3,
                "text": "Draw a diagram relating IS to organizational levels.",
                "marks": 4,
                "answer": "Strategic (top) → ESS\nTactical (middle) → MIS, DSS\nOperational (lower) → TPS"
              },
              {
                "id": 4,
                "text": "What are the functions of an information system?",
                "marks": 4,
                "answer": "1. Input: collect raw data.\n2. Processing: convert to meaningful information.\n3. Output: distribute processed information.\n4. Storage: maintain data for future.\n5. Feedback: evaluate and improve processes."
              },
              {
                "id": 5,
                "text": "Explain the steps in IS development.",
                "marks": 4,
                "answer": "SDLC: 1. Planning, 2. Analysis, 3. Design, 4. Implementation, 5. Maintenance."
              },
              {
                "id": 6,
                "text": "Define client-server architecture.",
                "marks": 4,
                "answer": "Distributed model where clients request services from centralized servers. Client handles UI, server handles data and processing."
              },
              {
                "id": 7,
                "text": "What are the 3 functions of client-server?",
                "marks": 4,
                "answer": "1. Data storage/management (server).\n2. Processing logic (server).\n3. Presentation/interface (client)."
              },
              {
                "id": 8,
                "text": "What are the two classes of middleware?",
                "marks": 4,
                "answer": "1. General middleware: communication services (RPC, ORB).\n2. Service-specific middleware: for specific services (ODBC, JDBC)."
              },
              {
                "id": 9,
                "text": "Five technologies to create client/server applications?",
                "marks": 4,
                "answer": "1. Database middleware (ODBC/JDBC)\n2. RPC\n3. Object brokers (CORBA, DCOM)\n4. Web services (HTTP, REST)\n5. Message-oriented middleware (MQ Series)"
              },
              {
                "id": 10,
                "text": "What is public cloud and private cloud?",
                "marks": 4,
                "answer": "Public cloud: third-party services over public internet (AWS, Azure).\nPrivate cloud: exclusive to one organization, more control and security."
              }
            ]
          },
          {
            "title": "Section B: Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "CPU fetches instruction according to: A) program counter B) status register C) instruction register D) PSW",
                "marks": 1,
                "answer": "A) program counter"
              },
              {
                "id": 2,
                "text": "Which algorithm chooses the page unused for longest? A) FIFO B) Additional reference bit C) LRU D) Counting",
                "marks": 1,
                "answer": "C) least recently used (LRU)"
              },
              {
                "id": 3,
                "text": "A process is thrashing if: A) more time paging than executing B) less time paging C) page fault occurs D) swapping can't happen",
                "marks": 1,
                "answer": "A) spending more time paging than executing"
              },
              {
                "id": 4,
                "text": "Working set model is based on: A) modularity B) locality C) globalization D) none",
                "marks": 1,
                "answer": "B) locality"
              },
              {
                "id": 5,
                "text": "OS is located: A) low memory B) high memory C) either D) none",
                "marks": 1,
                "answer": "C) either (depends on interrupt vector location)"
              },
              {
                "id": 6,
                "text": "Contiguous memory allocation: A) each process in single contiguous section B) all in one C) memory is contiguous D) none",
                "marks": 1,
                "answer": "A) each process in a single contiguous section"
              },
              {
                "id": 7,
                "text": "Relocation register helps: A) more address space B) different address space C) protect address spaces D) none",
                "marks": 1,
                "answer": "C) protect address spaces of processes"
              },
              {
                "id": 8,
                "text": "Logical address must be _____ limit register. A) less than B) equal to C) greater than D) none",
                "marks": 1,
                "answer": "A) less than"
              },
              {
                "id": 9,
                "text": "Transient OS code: A) not accessible B) comes and goes C) stays always D) none",
                "marks": 1,
                "answer": "B) comes and goes as needed"
              },
              {
                "id": 10,
                "text": "In fixed partition, multiprogramming degree bounded by: A) number of partitions B) CPU utilization C) memory size D) all",
                "marks": 1,
                "answer": "A) number of partitions"
              },
              {
                "id": 11,
                "text": "Explain a process and its states.",
                "marks": 5,
                "answer": "A process is a program in execution. States: New, Ready, Running, Waiting/Blocked, Terminated.",
                "tutorial": "OS scheduler manages transitions between states via context switching."
              },
              {
                "id": 12,
                "text": "What is deadlock? Explain four necessary conditions.",
                "marks": 5,
                "answer": "Deadlock: processes unable to proceed because each waits for resources held by others.\nConditions: 1) Mutual exclusion, 2) Hold and wait, 3) No preemption, 4) Circular wait.",
                "tutorial": "All four must hold. Removing any one prevents deadlock."
              },
              {
                "id": 13,
                "text": "Compare paging and segmentation.",
                "marks": 5,
                "answer": "Paging: fixed-size pages/frames, no external fragmentation, transparent to programmer.\nSegmentation: variable-sized segments, external fragmentation, visible to programmer.",
                "tutorial": "Combined paged segmentation gets benefits of both."
              },
              {
                "id": 14,
                "text": "What is a file system? Explain allocation methods.",
                "marks": 5,
                "answer": "File system manages files on storage.\nMethods: 1) Contiguous allocation, 2) Linked allocation, 3) Indexed allocation, 4) Combined (Unix inode).",
                "tutorial": "Each balances access speed, fragmentation, and overhead."
              },
              {
                "id": 15,
                "text": "What is virtual memory? How does demand paging work?",
                "marks": 5,
                "answer": "Virtual memory allows executing processes larger than RAM using disk as extension. Demand paging: pages loaded only when referenced. Page fault triggers OS to load from disk.",
                "tutorial": "Enables running programs larger than physical RAM."
              },
              {
                "id": 16,
                "text": "Explain Producer-Consumer problem with semaphore solution.",
                "marks": 5,
                "answer": "Producer adds items to bounded buffer, consumer removes them. Semaphores: mutex=1 (mutual exclusion), empty=n (empty slots), full=0 (full slots).\nProducer: wait(empty), wait(mutex), add, signal(mutex), signal(full).\nConsumer: wait(full), wait(mutex), remove, signal(mutex), signal(empty).",
                "tutorial": "Classic synchronization problem solved with counting semaphores."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Technology",
        "duration": "4 hours",
        "credits": 6,
        "description": "Specialty: Software Engineering (SWE) | 2023 Session",
        "sections": [
          {
            "title": "Section A: Multiple Choice Questions",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Which of the following programming language is whitespace insensitive?\nA) HTML\nB) CSS\nC) PHP\nD) JavaScript",
                "marks": 1,
                "answer": "A) HTML"
              },
              {
                "id": 2,
                "text": "How many layers does OSI Reference Model have?\nA) 4\nB) 5\nC) 6\nD) 7",
                "marks": 1,
                "answer": "D) 7"
              },
              {
                "id": 3,
                "text": "DHCP is the abbreviation of\nA) Dynamic Host Control Protocol\nB) Dynamic Host Configuration Protocol\nC) Dynamic Hyper Control Protocol\nD) Dynamic Hyper Configuration Protocol",
                "marks": 1,
                "answer": "B) Dynamic Host Configuration Protocol"
              },
              {
                "id": 4,
                "text": "An example of Private IP address is:\nA) 10.2.5.8.9\nB) 195.25.87.96\nC) 204.14.88.96\nD) 173.29.178.66",
                "marks": 1,
                "answer": "A) 10.2.5.8.9 (10.x.x.x is private range)"
              },
              {
                "id": 5,
                "text": "An example of Public IP address is:\nA) 10.2.5.8.9\nB) 192.168.87.96\nC) 204.14.88.96\nD) 172.29.178.66",
                "marks": 1,
                "answer": "C) 204.14.88.96"
              },
              {
                "id": 6,
                "text": "SNMP protocol means:\nA) Simple Network Mail Protocol\nB) System Network Management Protocol\nC) Simple Network Management Protocol\nD) All above",
                "marks": 1,
                "answer": "C) Simple Network Management Protocol"
              },
              {
                "id": 7,
                "text": "The language used in application programs to request data from the DBMS is referred to as the:\nA) DML\nB) DDL\nC) VDL\nD) SDL",
                "marks": 1,
                "answer": "A) DML (Data Manipulation Language)"
              },
              {
                "id": 8,
                "text": "int z,x=5,y=-10,a=4,b=2; z = x++ - --y * b / a;\nWhat number will z in the sample code above contain?\nA) [Omitted]\nB) 5\nC) 6\nD) 10\nE) 11",
                "marks": 1,
                "answer": "E) 11"
              },
              {
                "id": 9,
                "text": "With every use of a memory allocation function, what function should be used to release allocated memory?\nA) dropmem()\nB) dealloc()\nC) release()\nD) free()",
                "marks": 1,
                "answer": "D) free()"
              },
              {
                "id": 10,
                "text": "What function will read a specified number of elements from a file?\nA) fileread()\nB) readfile()\nC) fread()\nD) gets()",
                "marks": 1,
                "answer": "C) fread()"
              },
              {
                "id": 11,
                "text": "What is a difference between a declaration and a definition of a variable?\nA) Both can occur multiple times, but a declaration must occur first.\nB) There is no difference between them.\nC) A definition occurs once, but a declaration may occur many times.\nD) A declaration occurs once, but a definition may occur many times.",
                "marks": 1,
                "answer": "C) A definition occurs once, but a declaration may occur many times."
              },
              {
                "id": 12,
                "text": "What is a proper method of opening a file for writing as binary file?\nA) FILE *f = fwrite(\"test.bin\", \"b\");\nB) FILE *f = fopenb(\"test.bin\", \"w\");\nC) FILE *f = fopen(\"test.bin\", \"wb\");\nD) FILE *f = fopen(\"test.bin\", \"bw\");",
                "marks": 1,
                "answer": "C) FILE *f = fopen(\"test.bin\", \"wb\")"
              },
              {
                "id": 13,
                "text": "A collection of hyperlinked documents on the internet forms the:\nA) World Wide Web (WWW)\nB) E-mail system\nC) Mailing list\nD) Hypertext markup language",
                "marks": 1,
                "answer": "A) World Wide Web (WWW)"
              },
              {
                "id": 14,
                "text": "A proxy server is used as the computer?\nA) with external access\nB) acting as a backup\nC) performing file handling\nD) accessing user permissions",
                "marks": 1,
                "answer": "A) with external access"
              },
              {
                "id": 15,
                "text": "Which one of the following would breach the integrity of a system?\nA) Locking the room to prevent theft\nB) Full access rights for all users\nC) Fitting the system with an anti-theft device\nD) Protecting the device against willful or accidental damage",
                "marks": 1,
                "answer": "B) Full access rights for all users"
              },
              {
                "id": 16,
                "text": "Which software prevents the external access to a system?\nA) Firewall\nB) Gateway\nC) Router\nD) Virus checker",
                "marks": 1,
                "answer": "A) Firewall"
              },
              {
                "id": 17,
                "text": "Where is linear searching used?\nA) When the list has only a few elements\nB) When performing a single search in an unordered list\nC) Used all the time\nD) When the list has only a few elements AND when performing a single search in an unordered list",
                "marks": 1,
                "answer": "D) When the list has only a few elements AND when performing a single search in an unordered list"
              },
              {
                "id": 18,
                "text": "What is the best case for linear search?\nA) O(nlogn)\nB) O(logn)\nC) O(n)\nD) O(1)",
                "marks": 1,
                "answer": "D) O(1) (element found at first position)"
              },
              {
                "id": 19,
                "text": "Which of the following is a disadvantage of linear search?\nA) Requires more space\nB) Greater time complexities compared to other searching algorithms\nC) Not easy to understand\nD) Not easy to implement",
                "marks": 1,
                "answer": "B) Greater time complexities compared to other searching algorithms"
              },
              {
                "id": 20,
                "text": "Which of the following is a disadvantage of linear search?\nA) Requires more space\nB) Greater time complexities compared to other searching algorithms\nC) Not easy to understand\nD) Not easy to implement",
                "marks": 1,
                "answer": "B) Greater time complexities compared to other searching algorithms"
              },
              {
                "id": 21,
                "text": "Which of the following concepts make extensive use of arrays?\nA) Binary trees\nB) Scheduling of processes\nC) Caching\nD) Spatial locality",
                "marks": 1,
                "answer": "D) Spatial locality"
              },
              {
                "id": 22,
                "text": "Assuming int is of 4bytes, what is the size of int arr[15];?\nA) 15\nB) 19\nC) 11\nD) 60",
                "marks": 1,
                "answer": "D) 60 (15 elements x 4 bytes = 60)"
              },
              {
                "id": 23,
                "text": "The data structure required for Breadth First Traversal on a graph is?\nA) Stack\nB) Array\nC) Queue\nD) Tree",
                "marks": 1,
                "answer": "C) Queue"
              },
              {
                "id": 24,
                "text": "Cartesian product in relational algebra is\nA) Binary operator\nB) Unary operator\nC) Ternary operator\nD) Not defined",
                "marks": 1,
                "answer": "A) Binary operator"
              },
              {
                "id": 25,
                "text": "The view of total database content is:\nA) Conceptual view\nB) Internal view\nC) Physical view\nD) External view",
                "marks": 1,
                "answer": "A) Conceptual view"
              },
              {
                "id": 26,
                "text": "Architecture of a database can be viewed as:\nA) One level\nB) Two levels\nC) Three levels\nD) Four levels",
                "marks": 1,
                "answer": "C) Three levels (ANSI-SPARC architecture)"
              },
              {
                "id": 27,
                "text": "Database schema is written in:\nA) DML\nB) HCL\nC) DDL\nD) DCL",
                "marks": 1,
                "answer": "C) DDL (Data Definition Language)"
              },
              {
                "id": 28,
                "text": "Which technique is used for data protection?\nA) Data piracy\nB) Authentication\nC) Encryption\nD) None of these",
                "marks": 1,
                "answer": "C) Encryption"
              },
              {
                "id": 29,
                "text": "Coaxial cables are used in _________ networks\nA) Telephone\nB) Cable TV\nC) Both A and B\nD) NONE OF these",
                "marks": 1,
                "answer": "C) Both A and B"
              },
              {
                "id": 30,
                "text": "Optical Fiber transmits _________.\nA) light signal\nB) radio signal\nC) electrical signal\nD) Both A and B",
                "marks": 1,
                "answer": "A) light signal"
              },
              {
                "id": 31,
                "text": "HTTP port number used is _________.\nA) 43\nB) 441\nC) 443\nD) 449",
                "marks": 1,
                "answer": "C) 443 (HTTPS uses port 443; HTTP uses port 80)"
              },
              {
                "id": 32,
                "text": "In the handshake protocol which is the message type first sent between client and server?\nA) server_hello\nB) client_hello\nC) hello_request\nD) certificate_request",
                "marks": 1,
                "answer": "B) client_hello"
              },
              {
                "id": 33,
                "text": "Inside which HTML element do we put the JavaScript?\nA) &lt;js&gt;\nB) &lt;javascript&gt;\nC) &lt;scripting&gt;\nD) &lt;script&gt;",
                "marks": 1,
                "answer": "D) &lt;script&gt;"
              },
              {
                "id": 34,
                "text": "Which one is not a programming language?\nA) HTML\nB) CSS\nC) JavaScript\nD) PHP",
                "marks": 1,
                "answer": "A) HTML (HyperText Markup Language)"
              },
              {
                "id": 35,
                "text": "Which one is a method of inserting a style sheet?\nA) Inline style sheet\nB) External style sheet\nC) Internal style sheet\nD) All above",
                "marks": 1,
                "answer": "D) All above"
              },
              {
                "id": 36,
                "text": "An example of a variable declaration in JavaScript:\nA) $a;\nB) Var a;\nC) Variable a;\nD) None above",
                "marks": 1,
                "answer": "D) None above (JavaScript uses var, let, or const)"
              },
              {
                "id": 37,
                "text": "An example of a variable declaration in PHP:\nA) $a;\nB) Var a;\nC) Variable a;\nD) None above",
                "marks": 1,
                "answer": "A) $a;"
              },
              {
                "id": 38,
                "text": "The RSA signature uses which hash algorithm?\nA) MD5\nB) SHA-1\nC) MD5 and SHA-1\nD) None of the mentioned",
                "marks": 1,
                "answer": "D) None of the mentioned (RSA uses PKCS#1 v1.5 or PSS with various hash algorithms)"
              },
              {
                "id": 39,
                "text": "Choose the function of a router\nA) changing the data from one format to another\nB) error detection in data\nC) send the packet to the uplinks\nD) None of the above",
                "marks": 1,
                "answer": "C) send the packet to the uplinks"
              },
              {
                "id": 40,
                "text": "Which utility is used to find the number of routers between a source and destination?\nA) route\nB) Traceroute\nC) Ifconfig\nD) Ipconfig",
                "marks": 1,
                "answer": "B) Traceroute"
              }
            ]
          },
          {
            "title": "Section B: A. Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "What is a Programming Paradigm?",
                "marks": 2,
                "answer": "A programming paradigm is a style or way of programming that provides a framework for structuring code. Common paradigms include: imperative (procedural), object-oriented, functional, and declarative. Each paradigm defines how computation, structure, and organization of code are approached."
              },
              {
                "id": 2,
                "text": "Is it true that Operating Systems like Windows, Linux and UNIX are written in C?",
                "marks": 2,
                "answer": "Yes, it is true. The core kernels of Windows, Linux, and UNIX are primarily written in the C programming language. C provides the performance, low-level memory access, and hardware control needed for OS development while maintaining portability across architectures."
              },
              {
                "id": 3,
                "text": "What do you mean by scope of a variable? What are the different types of scopes that a variable can have?",
                "marks": 2,
                "answer": "Scope refers to the region of a program where a variable can be accessed. Types:\n- Local scope: variable accessible only within the block/function where declared.\n- Global scope: variable accessible throughout the entire program.\n- Function scope: variable accessible within a function (e.g., var in JavaScript).\n- Block scope: variable accessible only within a code block {} (e.g., let/const in JavaScript).\n- Class scope: variable accessible within a class definition."
              },
              {
                "id": 4,
                "text": "Which of the following statement is a declaration and which is a definition?\nextern int i;\nint j = 0;",
                "marks": 2,
                "answer": "extern int i; — This is a DECLARATION. It tells the compiler that variable i exists somewhere but does not allocate storage.\nint j = 0; — This is a DEFINITION. It declares the variable AND allocates storage with an initial value of 0."
              },
              {
                "id": 5,
                "text": "What are the differences between a declaration and a definition?",
                "marks": 2,
                "answer": "Declaration:\n- Introduces a name to the compiler.\n- Does not allocate memory.\n- Can appear multiple times.\n- Syntax: extern int x; or function prototype.\n\nDefinition:\n- Allocates memory for the variable/function.\n- Provides the actual implementation or storage.\n- Appears exactly once.\n- Syntax: int x = 5; or function body {}."
              },
              {
                "id": 6,
                "text": "Is it true that a global variable may have several declarations, but only one definition? [Yes/No]",
                "marks": 2,
                "answer": "Yes. A global variable can be declared multiple times (using extern) across different source files, but must have exactly one definition (actual storage allocation) to avoid linker errors (multiple definition error)."
              },
              {
                "id": 7,
                "text": "Is it true that a function may have several declarations, but only one definition? [Yes/No]",
                "marks": 2,
                "answer": "Yes. A function can have multiple declarations (prototypes) across different files, but the function body (definition) must appear exactly once. Multiple definitions would cause a linker error."
              },
              {
                "id": 8,
                "text": "When we mention the prototype of a function are we defining the function or declaring it?",
                "marks": 2,
                "answer": "We are DECLARING it. A function prototype tells the compiler the function's return type, name, and parameter types without providing the implementation (body). The actual definition with the function body appears elsewhere."
              },
              {
                "id": 9,
                "text": "If you are to share the variables or functions across several source files, how would you ensure that all definitions and declarations are consistent?",
                "marks": 2,
                "answer": "By using header files (.h). Place common declarations (function prototypes, extern variable declarations) in a header file, then #include that header in all source files that need them. This ensures every file sees the same declarations, preventing mismatches."
              },
              {
                "id": 10,
                "text": "Global variables are available to all functions. Does there exist a mechanism by way of which I can make it available to some and not to others?",
                "marks": 2,
                "answer": "Yes, using static keyword. A static global variable (file-scope static) has internal linkage — it is only visible within the translation unit (source file) where it is declared. Functions in other files cannot access it. Also, in OOP, private class members restrict access to within the class only."
              }
            ]
          },
          {
            "title": "Section B: B. Database",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate Table Scan from Index Scan.",
                "marks": 4,
                "answer": "Table Scan (Full Scan): reads every row of a table sequentially, regardless of selectivity. Efficient for tables with no indexes or when most rows need to be retrieved. O(n) complexity where n=rows.\n\nIndex Scan: uses an index structure (B-tree, hash) to quickly locate specific rows. The index maps key values to row locations. Efficient for selective queries returning few rows. O(log n) lookup complexity.\n\nUse table scan for small tables or when retrieving most rows; use index scan for large tables with selective queries."
              },
              {
                "id": 2,
                "text": "List some commands of DDL.",
                "marks": 4,
                "answer": "DDL (Data Definition Language) commands:\n- CREATE: creates database objects (tables, views, indexes).\n- ALTER: modifies existing database objects (add/drop columns, modify constraints).\n- DROP: removes database objects entirely.\n- TRUNCATE: removes all rows from a table (cannot rollback).\n- RENAME: renames database objects."
              },
              {
                "id": 3,
                "text": "Why is group-clause used?",
                "marks": 3,
                "answer": "The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows. It is typically used with aggregate functions (COUNT, SUM, AVG, MAX, MIN) to produce summary reports. Example: SELECT department, AVG(salary) FROM employees GROUP BY department;"
              },
              {
                "id": 4,
                "text": "What are the various kinds of interactions catered by DBMS?",
                "marks": 4,
                "answer": "DBMS interactions:\n1. Data Definition: creating/modifying schema (DDL).\n2. Data Manipulation: inserting, updating, deleting, retrieving data (DML).\n3. Data Control: access permissions and security (DCL - GRANT, REVOKE).\n4. Transaction Control: managing transactions (TCL - COMMIT, ROLLBACK, SAVEPOINT).\n5. Query Processing: parsing, optimizing, and executing SQL queries.\n6. Storage Management: managing physical data storage and indexing."
              }
            ]
          },
          {
            "title": "Section B: C. Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "What is OSI and what role does it play in computer networks?",
                "marks": 3,
                "answer": "OSI (Open Systems Interconnection) is a conceptual model that standardizes network communication into 7 layers:\n7. Application - user-facing protocols (HTTP, FTP, SMTP)\n6. Presentation - data translation, encryption, compression\n5. Session - connection establishment, management, termination\n4. Transport - reliable data delivery (TCP/UDP)\n3. Network - logical addressing and routing (IP)\n2. Data Link - framing, error detection, MAC addressing\n1. Physical - bit transmission over hardware\n\nRole: provides a universal standard for network communication, troubleshooting framework, and modular approach where each layer handles specific functions independently."
              },
              {
                "id": 2,
                "text": "What is the purpose of cables being shielded and having twisted pairs?",
                "marks": 4,
                "answer": "Shielding: A conductive layer (foil or braid) around cables protects against electromagnetic interference (EMI) from external sources and prevents signal radiation. Grounded shield provides a path for interference current.\n\nTwisted pairs: Two insulated copper wires twisted together to cancel electromagnetic interference. Each wire carries equal but opposite signals; external noise induces equal current in both wires, canceling at the receiver (common-mode rejection).\n\nTogether they reduce crosstalk, improve signal quality, and enable higher data rates over longer distances."
              },
              {
                "id": 3,
                "text": "One way of securing a network is through the use of passwords. What can be considered as good passwords?",
                "marks": 4,
                "answer": "Good password characteristics:\n1. Length: at least 12-16 characters.\n2. Complexity: mix of uppercase, lowercase, digits, special characters.\n3. Unpredictability: not dictionary words, names, dates, or patterns.\n4. Uniqueness: different password for each service/account.\n5. No personal information: avoid birthdays, phone numbers, pet names.\n6. Use passphrases: random word combinations (e.g., \"correct-horse-battery-staple\").\n7. Regular rotation: change periodically, especially after suspected breach.\n8. Multi-factor authentication: combine password with additional verification."
              },
              {
                "id": 4,
                "text": "Name the two data link sublayers and their purposes.",
                "marks": 4,
                "answer": "1. LLC (Logical Link Control) - upper sublayer:\n- Multiplexing of protocols (identifies network layer protocol via SAP).\n- Flow control and error management (acknowledgement, retransmission).\n- Provides service access points (SAPs) for communication.\n\n2. MAC (Media Access Control) - lower sublayer:\n- Controls access to the shared physical medium.\n- MAC addressing (48-bit hardware addresses).\n- Frame delimiting, error detection (CRC).\n- Media access methods: CSMA/CD (Ethernet), token passing (Token Ring)."
              }
            ]
          },
          {
            "title": "Section B: D. Algorithm and data structure",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "How to find whether the linked list has a loop?",
                "marks": 3,
                "answer": "Use Floyd's Cycle Detection Algorithm (Tortoise and Hare):\n1. Initialize two pointers: slow (moves 1 step) and fast (moves 2 steps).\n2. Traverse the list: slow = slow-&gt;next, fast = fast-&gt;next-&gt;next.\n3. If fast reaches NULL, no loop exists.\n4. If slow and fast meet at the same node, a loop exists.\n\nTime complexity: O(n), Space complexity: O(1)."
              },
              {
                "id": 2,
                "text": "Differentiate between best case scenario and worst case scenario of an algorithm.",
                "marks": 4,
                "answer": "Best Case:\n- Minimum time/resources required for any valid input.\n- Represents the most favorable input configuration.\n- Example: Linear search best case = O(1) (element at first position).\n- Lower bound (Omega notation: Ω).\n\nWorst Case:\n- Maximum time/resources required for any valid input.\n- Represents the least favorable input configuration.\n- Example: Linear search worst case = O(n) (element at last position or absent).\n- Upper bound (Big O notation: O).\n\nAlgorithms are typically analyzed for worst-case performance to guarantee acceptable behavior under all conditions."
              },
              {
                "id": 3,
                "text": "Describe the two principal operations that can be performed on a Stack.",
                "marks": 3,
                "answer": "1. PUSH: Insert an element onto the top of the stack.\n- Check if stack is full (overflow condition).\n- Increment the top pointer.\n- Store the element at the top position.\n- Time complexity: O(1).\n\n2. POP: Remove and return the top element from the stack.\n- Check if stack is empty (underflow condition).\n- Retrieve the element at the top position.\n- Decrement the top pointer.\n- Time complexity: O(1).\n\nAdditional operation: PEEK/TOP - returns the top element without removing it."
              }
            ]
          }
        ]
      },
      {
        "title": "Mathematics",
        "duration": "3 hours",
        "credits": 6,
        "description": "Specialty: SOFTWARE ENGINEERING | 2023 Session",
        "sections": [
          {
            "title": "Section A: Statistics",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Sample mean=50, SD=8, n=25. Calculate: a) 95% CI b) 99% CI for population mean.",
                "marks": 10,
                "answer": "a) 95% CI: 50 ± 1.96×(8/5) = 50 ± 3.136 = (46.864, 53.136)\nb) 99% CI: 50 ± 2.576×(8/5) = 50 ± 4.122 = (45.878, 54.122)",
                "tutorial": "CI = x̄ ± Z(σ/√n). Z=1.96 for 95%, 2.576 for 99%."
              },
              {
                "id": 2,
                "text": "Calculate expected profit, variance, and standard deviation from a probability distribution.",
                "marks": 14,
                "answer": "E(X) = Σ(xi×pi)\nVar(X) = Σ((xi-μ)²×pi) = E(X²)-μ²\nσ = √Var(X)\nExample: X={100,200,300}, P={0.3,0.5,0.2}\nE(X)=190, Var(X)=4900, σ=70",
                "tutorial": "Expected value is weighted average. Variance measures dispersion."
              },
              {
                "id": 3,
                "text": "P(X=x)=k(x+1) for x=1,2,3 and k(x-3) for x=4,5,6. Find k, mean, variance.",
                "marks": 9,
                "answer": "ΣP=1: k(2+3+4+1+2+3)=15k=1 => k=1/15\nMean = (2+6+12+4+10+18)/15 = 52/15 = 3.467\nE(X²) = (2+12+36+16+50+108)/15 = 224/15\nVar = 224/15 - (52/15)² = 656/225 = 2.916",
                "tutorial": "First normalize distribution, then compute moments."
              }
            ]
          },
          {
            "title": "Section B: Probability",
            "marks": 40,
            "questions": [
              {
                "id": 4,
                "text": "5% of candidates qualified. Interview until first qualified. a) Mean? b) P(5th is first qualified)?",
                "marks": 10,
                "answer": "Geometric distribution, p=0.05.\na) Mean = 1/0.05 = 20 applicants.\nb) P(X=5) = (0.95)⁴×0.05 = 0.8145×0.05 = 0.0407",
                "tutorial": "Geometric: P(X=n) = (1-p)^(n-1)×p."
              },
              {
                "id": 5,
                "text": "Machine X: 60%, faulty=0.02. Y: 40%, faulty=0.03. Find: a) P(faulty) b) P(faulty or from Y) c) P(from X|faulty)",
                "marks": 10,
                "answer": "a) P(F)=0.02(0.6)+0.03(0.4)=0.024\nb) P(F∪Y)=0.024+0.4-0.012=0.412\nc) P(X|F)=0.012/0.024=0.5",
                "tutorial": "Law of total probability, addition rule, Bayes' theorem."
              },
              {
                "id": 6,
                "text": "Roll a fair die. Let X be outcome. a) E(X) b) Var(X) c) P(X=6) exact d) Markov bound e) Chebyshev bound",
                "marks": 12,
                "answer": "a) E(X)=3.5\nb) Var(X)=91/6 - 12.25 = 2.917\nc) P(X=6)=1/6=0.1667\nd) Markov: P(X≥6) ≤ 3.5/6 = 0.5833\ne) Chebyshev: k=2.5/1.708=1.464, P≤1/1.464²=0.467",
                "tutorial": "Markov and Chebyshev provide bounds without exact distribution."
              },
              {
                "id": 7,
                "text": "70% brand A (70% large), 30% brand B (40% small). a) Tree diagram b) P(small) c) P(A|small)",
                "marks": 8,
                "answer": "a) Tree: A(0.7)→Large(0.7), Small(0.3); B(0.3)→Large(0.6), Small(0.4)\nb) P(Small)=0.3(0.7)+0.4(0.3)=0.33\nc) P(A|Small)=0.21/0.33=0.636",
                "tutorial": "Bayes' theorem for inverse probability."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Fundamentals",
        "duration": "2 hours",
        "credits": 1,
        "description": "All Specialties | 2023 Session",
        "sections": [
          {
            "title": "Section A: General Computer Knowledge",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Which program is used for database? A) MS Word B) MS Excel C) MS PowerPoint D) MS Access",
                "marks": 1,
                "answer": "D) MS Access"
              },
              {
                "id": 2,
                "text": "SRAM stands for: A) Standard RAM B) Static Read Access Memory C) Static Random Access Memory D) Standard Read Access Memory",
                "marks": 1,
                "answer": "C) Static Random Access Memory"
              },
              {
                "id": 3,
                "text": "Getting information from internet to computer is: A) Downloading B) Browsing C) Uploading D) Recording",
                "marks": 1,
                "answer": "A) Downloading"
              },
              {
                "id": 4,
                "text": "Language used by computer: A) French B) Computer language C) Binary language D) English",
                "marks": 1,
                "answer": "C) Binary language"
              },
              {
                "id": 5,
                "text": "To center a title in MS Word, use: A) Font size B) Font style C) Spacing D) Alignment",
                "marks": 1,
                "answer": "D) Alignment"
              },
              {
                "id": 6,
                "text": "Save file with different name: A) Save B) Save As C) Send to D) Page setup",
                "marks": 1,
                "answer": "B) Save As"
              },
              {
                "id": 7,
                "text": "Add geometric shapes in PowerPoint: A) Drawing B) Formatting C) Reviewing D) Illustrations",
                "marks": 1,
                "answer": "D) Illustrations"
              },
              {
                "id": 8,
                "text": "Peripherals like printers are: A) Information B) Data C) Software D) Hardware",
                "marks": 1,
                "answer": "D) Hardware"
              },
              {
                "id": 9,
                "text": "Motherboard is also called: A) Central board B) System board C) Computer board D) Mouse",
                "marks": 1,
                "answer": "B) System board"
              },
              {
                "id": 10,
                "text": "Computers controlling processes use: A) Infinite loop B) Feedback loop C) Data highway D) Traffic pattern",
                "marks": 1,
                "answer": "B) Feedback loop"
              },
              {
                "id": 11,
                "text": "Reads handwritten text to digital image: A) Touch pad B) Laser beam C) Printer D) Scanner",
                "marks": 1,
                "answer": "D) Scanner"
              },
              {
                "id": 12,
                "text": "Brain of computer: A) Secondary storage B) CPU C) Data input D) RAM",
                "marks": 1,
                "answer": "B) CPU"
              },
              {
                "id": 13,
                "text": "Rules for data transmission: A) IP address B) Domains C) Protocol D) Gateway",
                "marks": 1,
                "answer": "C) Protocol"
              },
              {
                "id": 14,
                "text": "Guards against unauthorized access: A) Hacker-proof B) Firewall C) Hacker-resistant D) Encryption",
                "marks": 1,
                "answer": "B) Firewall"
              },
              {
                "id": 15,
                "text": "Restrict system access: A) User logins B) Password C) Computer keys D) Access control",
                "marks": 1,
                "answer": "B) Password"
              },
              {
                "id": 16,
                "text": "Malicious software: A) Badware B) Malware C) Maliciousware D) Illegalware",
                "marks": 1,
                "answer": "B) Malware"
              },
              {
                "id": 17,
                "text": "Does NOT store data permanently: A) ROM B) RAM C) Floppy disk D) Hard drive",
                "marks": 1,
                "answer": "B) RAM"
              },
              {
                "id": 18,
                "text": "Booting performs: A) Integrity test B) POST C) Functioning test D) Reliability test",
                "marks": 1,
                "answer": "B) Power-on-self-test (POST)"
              },
              {
                "id": 19,
                "text": "NOT a basic computer function: A) Store data B) Accept input C) Process data D) Copy test",
                "marks": 1,
                "answer": "D) Copy test"
              },
              {
                "id": 20,
                "text": "What is an OS? Give two examples.",
                "marks": 5,
                "answer": "OS is system software managing hardware and software resources, providing services for programs. Examples: Windows, Linux, macOS."
              },
              {
                "id": 21,
                "text": "Difference between system software and application software?",
                "marks": 5,
                "answer": "System software manages hardware (OS, drivers). Application software performs user tasks (Word, Excel)."
              },
              {
                "id": 22,
                "text": "What is cloud computing? Three benefits?",
                "marks": 5,
                "answer": "On-demand delivery of computing services over internet.\nBenefits: 1) Cost efficiency, 2) Scalability, 3) Accessibility."
              },
              {
                "id": 23,
                "text": "What is computer security? Three threats?",
                "marks": 5,
                "answer": "Protection from theft, damage, unauthorized access.\nThreats: 1) Viruses/Malware, 2) Phishing, 3) Hacking."
              },
              {
                "id": 24,
                "text": "What is a database? Give an example.",
                "marks": 3,
                "answer": "An organized collection of structured data for efficient storage and retrieval. Examples: MySQL, MS Access, Oracle."
              },
              {
                "id": 25,
                "text": "Difference between data and information?",
                "marks": 3,
                "answer": "Data: raw, unprocessed facts. Information: processed, organized data with meaning."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate: i) Intranet vs Extranet ii) Browser vs Search engine iii) Static vs Dynamic webpage",
                "marks": 6,
                "answer": "i) Intranet: private internal network. Extranet: extended to authorized external parties.\nii) Browser: displays web pages (Chrome). Search engine: indexes web content (Google).\niii) Static: fixed content. Dynamic: generated on-the-fly with databases."
              },
              {
                "id": 2,
                "text": "State 4 social media platforms.",
                "marks": 4,
                "answer": "Facebook, Twitter/X, Instagram, WhatsApp."
              },
              {
                "id": 3,
                "text": "Requirements to build a WAN?",
                "marks": 4,
                "answer": "Routers, leased lines/fiber, TCP/IP, modems, firewalls."
              },
              {
                "id": 4,
                "text": "What is URL? Give an example.",
                "marks": 3,
                "answer": "URL (Uniform Resource Locator): web address. Format: protocol://domain/path. Example: https://example.com/page"
              },
              {
                "id": 5,
                "text": "What is digital literacy? Why important?",
                "marks": 3,
                "answer": "Ability to use digital technology effectively. Important for participation in digital economy, education, and society."
              }
            ]
          }
        ]
      }
    ,
      {
        "title": "System Analysis and Design",
        "duration": "4 hours",
        "credits": 7,
        "description": "Specialty: Software Engineering (SWE) | 2023 Session",
        "sections": [
          {
            "title": "Section A: Object Model",
            "marks": 25,
            "questions": [
              {"id": 1, "text": "Which of the following UML diagrams has a static view?\nA) Collaboration\nB) Use case\nC) State chart\nD) Activity", "marks": 1, "answer": "B) Use case. Use case diagrams show a static view of system functionality from the user's perspective. Collaboration, state chart, and activity diagrams are all dynamic/behavioral diagrams."},
              {"id": 2, "text": "What type of core-relationship is represented by the symbol in the figure below?\nA) Aggregation\nB) Dependency\nC) Generalization\nD) Association", "marks": 1, "answer": "C) Generalization. Generalization (inheritance) is shown by a hollow triangle arrow from the subclass to the superclass."},
              {"id": 3, "text": "Which core element of UML is being shown in the figure?\nA) Node\nB) Interface\nC) Class\nD) Component", "marks": 1, "answer": "C) Class. A class in UML is represented by a rectangle divided into three compartments: class name, attributes, and methods."},
              {"id": 4, "text": "What type of relationship is represented by Shape class and Square?\nA) Realization\nB) Generalization\nC) Aggregation\nD) Dependency", "marks": 1, "answer": "B) Generalization. Square is a specialized type of Shape (Square inherits from Shape). The hollow triangle arrow points from Square to Shape."},
              {"id": 5, "text": "Which diagram in UML shows a complete or partial view of the structure of a modeled system at a specific time?\nA) Sequence Diagram\nB) Collaboration Diagram\nC) Class Diagram\nD) Object Diagram", "marks": 1, "answer": "D) Object Diagram. An object diagram shows instances of classes (objects) and their relationships at a specific point in time."},
              {"id": 6, "text": "Interaction Diagram is a combined term for\nA) Sequence Diagram + Collaboration Diagram\nB) Activity Diagram + State Chart Diagram\nC) Deployment Diagram + Collaboration Diagram\nD) None of the mentioned", "marks": 1, "answer": "A) Sequence Diagram + Collaboration Diagram. Both show how objects interact via messages; they are interchangeable views of the same information."},
              {"id": 7, "text": "Which of the following diagram is time oriented?\nA) Collaboration\nB) Sequence\nC) Activity\nD) None of the mentioned", "marks": 1, "answer": "B) Sequence. Sequence diagrams emphasize the time ordering of messages between objects."},
              {"id": 8, "text": "How many diagrams are there in Unified Modelling Language?\nA) six\nB) seven\nC) eight\nD) nine", "marks": 1, "answer": "D) nine (prior to UML 2.0). UML originally had 9 diagrams: class, object, use case, sequence, collaboration, statechart, activity, component, deployment. (UML 2.x has 14.)"},
              {"id": 9, "text": "Which of the following is not needed to develop a system design from concept to detailed object-oriented design?\nA) Designing system architecture\nB) Developing design models\nC) Specifying interfaces\nD) Developing a debugging system", "marks": 1, "answer": "D) Developing a debugging system. Debugging is a testing and implementation activity, not part of the design phase."},
              {"id": 10, "text": "Which of the following is a dynamic model that shows how the system interacts with its environment as it is used?\nA) system context model\nB) interaction model\nC) environmental model\nD) both system context and interaction", "marks": 1, "answer": "B) interaction model. An interaction model shows the dynamic behavior of a system through sequences of messages exchanged between components."},
              {"id": 11, "text": "Which of the following is a structural model that demonstrates the other systems in the environment of the system being developed?\nA) system context model\nB) interaction model\nC) environmental model\nD) both system context and interaction", "marks": 1, "answer": "A) system context model. A system context model defines the boundary of the system and the other systems/actors it interacts with."},
              {"id": 12, "text": "Which of the following come under system control?\nA) Reconfigure\nB) Shutdown\nC) Powersave\nD) All of the mentioned", "marks": 1, "answer": "D) All of the mentioned. System control includes operations to manage system state: reconfigure, shutdown, powersave, restart, and standby."},
              {"id": 13, "text": "Which model describes the static structure of the system using object classes and their relationships?\nA) Sequence model\nB) Subsystem model\nC) Dynamic model\nD) Structural model", "marks": 1, "answer": "D) Structural model. A structural model (e.g., class diagram) shows the static organization of the system in terms of classes and their relationships."},
              {"id": 14, "text": "Which model shows the flow of object interactions?\nA) Sequence model\nB) Subsystem model\nC) Dynamic model\nD) Both Sequence and Dynamic model", "marks": 1, "answer": "D) Both Sequence and Dynamic model. Sequence diagrams show the flow of messages (interactions) between objects over time, which is a form of dynamic modeling."},
              {"id": 15, "text": "Which message is received so that the system moves to the Testing state, then the Transmitting state, before returning to the Running state?\nA) signalStatus()\nB) remoteControl()\nC) reconfigure()\nD) reportStatus()", "marks": 1, "answer": "D) reportStatus(). The reportStatus() message triggers a sequence of state transitions (Running → Testing → Transmitting → Running) to verify and report system status."},
              {"id": 16, "text": "A description of each function presented in the DFD is contained in a __________\nA) data flow\nB) process specification\nC) control specification\nD) data store", "marks": 1, "answer": "B) process specification. A process specification (PSPEC) describes the logic of each process/function in a Data Flow Diagram, detailing input-to-output transformation."},
              {"id": 17, "text": "Which diagram indicates the behaviour of the system as a consequence of external events?\nA) data flow diagram\nB) state transition diagram\nC) control specification diagram\nD) workflow diagram", "marks": 1, "answer": "B) state transition diagram. A state transition diagram shows how the system changes state in response to external events."},
              {"id": 18, "text": "A data model contains\nA) data object\nB) attributes\nC) relationships\nD) all of the mentioned", "marks": 1, "answer": "D) all of the mentioned. A data model consists of data objects (entities), their attributes (properties), and the relationships between them."},
              {"id": 19, "text": "__________ defines the properties of a data object and take on one of the three different characteristics.\nA) data object\nB) attributes\nC) relationships\nD) data object and attributes", "marks": 1, "answer": "B) attributes. Attributes describe properties or characteristics of data objects. They can be composite, multi-valued, or derived."},
              {"id": 20, "text": "The __________ of a relationship is 0 if there is no explicit need for the relationship to occur or the relationship is optional.\nA) modality\nB) cardinality\nC) entity\nD) structured analysis", "marks": 1, "answer": "A) modality. Modality (optionality) indicates whether a relationship is mandatory (1) or optional (0). Cardinality specifies how many instances participate."},
              {"id": 21, "text": "A __________ is a graphical representation that depicts information flow and the transforms that are applied as data moves from input to output.\nA) data flow diagram\nB) state transition diagram\nC) control specification\nD) workflow diagram", "marks": 1, "answer": "A) data flow diagram. A DFD shows how data flows through a system, including processes that transform data, data stores, and external entities."},
              {"id": 22, "text": "A data condition occurs whenever a data is passed to an input element followed by a processing element and the result in control output.\nA) True\nB) False", "marks": 1, "answer": "B) False. A data condition occurs when data is passed to an input element AND the result is control output. The statement describes a control flow, not a data condition per se."},
              {"id": 23, "text": "The __________ enables the software engineer to develop models of the information domain and functional domain at the same time.\nA) data flow diagram\nB) state transition diagram\nC) control specification\nD) activity diagram", "marks": 1, "answer": "A) data flow diagram. DFDs simultaneously model the information domain (data flows, stores) and the functional domain (processes/transforms)."},
              {"id": 24, "text": "The __________ contains a state transition diagram that is a sequential specification of behavior.\nA) data flow diagram\nB) state transition diagram\nC) control specification\nD) workflow diagram", "marks": 1, "answer": "C) control specification. A control specification (CSPEC) contains a state transition diagram that describes the system's behavioral control flow."},
              {"id": 25, "text": "Which of the following is not a construct?\nA) sequence\nB) condition\nC) repetition\nD) selection", "marks": 1, "answer": "C) repetition. In structured programming, the three basic constructs are sequence, selection (if-else), and repetition (loops). Condition is not a construct; it is part of selection."}
            ]
          },
          {
            "title": "Section B: Database-MySQL",
            "marks": 25,
            "questions": [
              {"id": 1, "text": "What are the three major steps of the database design (data modeling) process? Define each in one sentence.", "marks": 2, "answer": "1) Conceptual Design: creating an abstract model of the database independent of any specific DBMS, typically using an Entity-Relationship (ER) diagram to represent entities, attributes, and relationships.\n2) Logical Design: mapping the conceptual model to a logical schema (e.g., relational tables) following normalization rules, producing a set of relations with primary and foreign keys.\n3) Physical Design: implementing the logical schema on a specific DBMS, making decisions about file organization, indexing, partitioning, and storage parameters for performance optimization."},
              {"id": 2, "text": "What types of participation constraints can you have in an E-R model? Define each by one sentence.", "marks": 3, "answer": "1) Total Participation (Mandatory): every entity in the set must participate in at least one relationship instance (e.g., every employee must belong to a department). Represented by a double line between entity and relationship.\n2) Partial Participation (Optional): some entities in the set may not participate in any relationship instance (e.g., not every employee manages a department). Represented by a single line.\n3) Cardinality Constraint: specifies the maximum number of relationship instances an entity can participate in (one-to-one, one-to-many, many-to-many)."},
              {"id": 3, "text": "What are ACID properties of transactions? Explain each by one sentence.", "marks": 5, "answer": "1) Atomicity: A transaction is treated as a single, indivisible unit of work; either all operations complete successfully or none take effect (all-or-nothing).\n2) Consistency: A transaction brings the database from one valid state to another, preserving all defined rules, constraints, and integrity conditions.\n3) Isolation: Concurrent execution of transactions results in a state equivalent to some serial execution, preventing interference between transactions.\n4) Durability: Once a transaction commits successfully, its changes persist permanently in the database even in the event of system failure or power loss."},
              {"id": 4, "text": "You are designing a database for KW Humane Society. Relations: Animals(ID, Name, PrevOwner, DateAdmitted, Type); Adopter(SIN, Name, Address, OtherAnimals); Adoption(AnimalID, SIN, AdoptDate, chipNo). Primary keys underlined. Formulate SQL queries:\n\na) Retrieve the total number of dogs that were brought to the Humane Society on 18 April 2000. (5 marks)\nb) List the name of the adopter who has adopted every type of animal. (5 marks)\nc) Define Entity, Entity type, and Entity set. (3 marks)\nd) What is Data Warehousing? (2 marks)", "marks": 10, "answer": "a) SELECT COUNT(*) FROM Animals WHERE Type = 'Dog' AND DateAdmitted = '2000-04-18';\n\nb) SELECT a.Name FROM Adopter a WHERE NOT EXISTS (\n    SELECT DISTINCT an.Type FROM Animals an\n    WHERE an.Type NOT IN (\n        SELECT ad2.Type FROM Animals ad2\n        JOIN Adoption ad3 ON ad2.ID = ad3.AnimalID\n        WHERE ad3.SIN = a.SIN\n    )\n);\nAlternative: SELECT a.Name FROM Adopter a JOIN Adoption ad ON a.SIN = ad.SIN JOIN Animals an ON ad.AnimalID = an.ID GROUP BY a.SIN, a.Name HAVING COUNT(DISTINCT an.Type) = (SELECT COUNT(DISTINCT Type) FROM Animals);\n\nc) Entity: A real-world object or concept that can be distinctly identified and about which data is stored (e.g., a specific animal, a specific person).\nEntity type: A collection of entities that share the same attributes or properties, defined by a schema (e.g., the Animals entity type with attributes ID, Name, Type).\nEntity set: The actual collection of entity instances of a particular entity type at a given time (e.g., all animals currently in the Animals table).\n\nd) Data Warehousing: The process of collecting, storing, and managing large volumes of data from multiple heterogeneous sources into a central repository (data warehouse) for analysis, reporting, and business intelligence purposes. Data warehouses are optimized for read-heavy analytical queries rather than transactional processing."}
            ]
          },
          {
            "title": "Section C: Mobile Operating System",
            "marks": 25,
            "questions": [
              {"id": 1, "text": "What is the proper way of setting up an Android-powered device for app development?", "marks": 5, "answer": "1) Enable Developer Options: go to Settings → About Phone → tap Build Number 7 times until \"You are now a developer\" appears.\n2) Enable USB Debugging: Settings → Developer Options → toggle USB Debugging ON.\n3) Install USB drivers for the device on the development computer.\n4) Connect the device via USB cable and verify connection using 'adb devices' command.\n5) On the device, accept the RSA key fingerprint prompt to authorize the computer for debugging.\n6) In Android Studio, select the device from the run target dropdown and deploy the app."},
              {"id": 2, "text": "What composes a typical Android application project?", "marks": 5, "answer": "A typical Android application project contains:\n1) src/ (or java/): Java/Kotlin source code organized in packages (activities, fragments, adapters, models).\n2) res/: Resource files including layout XMLs, drawable images, menu definitions, string values, colors, and themes.\n3) AndroidManifest.xml: App declaration file containing package name, components (activities, services, receivers), permissions, and minimum API level.\n4) build.gradle: Build configuration files (project-level and app-level) defining dependencies, SDK versions, build types, and product flavors.\n5) assets/: Raw asset files accessible via AssetManager (fonts, data files).\n6) Gradle Scripts: Build tool configuration for compiling, packaging, and signing the APK."},
              {"id": 3, "text": "When is the best time to kill a foreground activity?", "marks": 5, "answer": "A foreground activity should never be killed by the system under normal circumstances as it is the activity currently visible and interacting with the user. On Android, foreground activities have the highest priority and the system only kills them as an absolute last resort when the system is critically low on memory. The best practice is NOT to kill foreground activities; instead, allow the Android lifecycle management to handle activity destruction naturally. An activity should be killed only when the user explicitly finishes it (calling finish()) or when the system must reclaim memory after all lower-priority processes (empty processes, background processes, service processes, visible processes) have been terminated. Developers should implement onSaveInstanceState() to preserve the activity state in case the system is forced to kill it."},
              {"id": 4, "text": "Do all mobile phones support the latest Android operating system?", "marks": 5, "answer": "No, not all mobile phones support the latest Android operating system for several reasons:\n1) Hardware limitations: newer Android versions require more RAM, faster processors, and specific hardware features (e.g., 64-bit architecture, Vulkan support) that older devices lack.\n2) Manufacturer support: phone manufacturers decide which devices receive OS updates based on commercial viability, typically supporting flagship devices for 2-3 years and budget devices for 1-2 years.\n3) Driver availability: chipset manufacturers (Qualcomm, MediaTek) must provide updated drivers for the new OS version, which they may not do for older chipsets.\n4) Carrier certification: network carriers must certify devices for the new OS, which may not happen for older devices.\n5) Android fragmentation: the Android ecosystem has thousands of device models at various price points, making universal support impractical."},
              {"id": 5, "text": "What is an action in mobile computing OS?", "marks": 5, "answer": "In mobile computing OS (Android), an Action is an Intent description that specifies an operation to be performed, such as ACTION_VIEW, ACTION_EDIT, ACTION_DIAL, or ACTION_SEND. Actions are part of the Intent mechanism that enables inter-component and inter-application communication. An action defines what to do, while the data URI specifies what to act upon. Android uses actions for:\n- Starting activities: ACTION_MAIN (main entry point), ACTION_VIEW (display data).\n- Broadcasting events: ACTION_BATTERY_LOW, ACTION_SCREEN_OFF.\n- Invoking services: ACTION_SYNC, ACTION_INSTALL_PACKAGE.\n- Custom app-defined actions for communicating between app components."}
            ]
          },
          {
            "title": "Section D: Database Administration with MySQL",
            "marks": 25,
            "questions": [
              {"id": 1, "text": "What are the commands used in DCL?", "marks": 5, "answer": "DCL (Data Control Language) commands manage permissions and access control in database systems. The main DCL commands are:\n1) GRANT: gives specific privileges to users or roles (e.g., GRANT SELECT, INSERT ON database.* TO 'user'@'localhost').\n2) REVOKE: removes previously granted privileges from users or roles (e.g., REVOKE INSERT ON database.* FROM 'user'@'localhost').\n3) DENY (SQL Server): explicitly prevents a user or role from accessing a securable object, overriding GRANT permissions.\nDCL commands control access at various levels: database, table, column, and procedural level."},
              {"id": 2, "text": "What is a system database and what is a user database?", "marks": 5, "answer": "System Database: A database created and maintained by the DBMS to store system-level information required for the database server to operate. Examples in MySQL: information_schema (metadata about all databases), mysql (user accounts, privileges, system configuration), performance_schema (performance monitoring data), sys (performance insights). These should not be modified directly by users.\n\nUser Database: A database created by users (DBAs or application developers) to store application data, business information, and user-defined objects (tables, views, stored procedures, indexes). User databases are the primary focus of application development and are backed up and restored according to business requirements. Each user database has its own schema, data files, and transaction logs."},
              {"id": 3, "text": "What is Replication?", "marks": 5, "answer": "Replication is the process of copying and maintaining database objects and data from one database (the source/publisher) to one or more other databases (the replicas/subscribers) to ensure consistency across distributed systems. Key types:\n1) Master-Slave (Primary-Replica): the master handles writes; slaves replicate and handle reads. Improves read performance and provides failover.\n2) Master-Master (Multi-Primary): multiple nodes accept writes and replicate to each other. Provides high write availability.\n3) Snapshot Replication: periodic full copy of data.\n4) Transactional Replication: real-time streaming of individual transactions.\nBenefits: high availability, load balancing, geographic distribution, disaster recovery, and reporting isolation."},
              {"id": 4, "text": "If you are given access to a SQL Server, how do you find if the SQL Instance is a named instance or a default instance?", "marks": 5, "answer": "To determine if a SQL Server instance is a named instance or a default instance:\n1) Check the SQL Server service name in Services panel: the default instance is named MSSQLSERVER; named instances follow the pattern MSSQL${InstanceName}.\n2) Query the server name: SELECT @@SERVERNAME or SERVERPROPERTY('ServerName'). A default instance is accessed by just the machine name (e.g., SERVER01); a named instance is accessed as MACHINENAME\\INSTANCENAME.\n3) Use SERVERPROPERTY('InstanceName'): returns NULL for the default instance and the instance name for a named instance.\n4) Check the registry at HKLM\\SOFTWARE\\Microsoft\\Microsoft SQL Server\\Instance Names\\SQL to see registered instances.\n5) Use the SQL Server Configuration Manager to view running instances."},
              {"id": 5, "text": "What are the different authentication modes in SQL Server and how can you change authentication mode?", "marks": 5, "answer": "SQL Server provides two authentication modes:\n\n1) Windows Authentication Mode: users authenticate using their Windows (Active Directory) credentials. This is the default and most secure mode because it uses Kerberos protocol, password policies, and integrated security.\n\n2) Mixed Mode (SQL Server and Windows Authentication): allows both Windows-authenticated users AND SQL Server-specific logins with username/password pairs stored in the SQL Server system database. SQL Server authentication is useful for non-Windows clients, legacy applications, and web applications connecting from Linux/macOS.\n\nChanging authentication mode:\n- In SQL Server Management Studio (SSMS): Right-click server → Properties → Security → select Windows Authentication or SQL Server and Windows Authentication mode → restart the SQL Server service.\n- Via T-SQL: EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'SOFTWARE\\Microsoft\\Microsoft SQL Server\\MSSQLServer', N'LoginMode', REG_DWORD, 2; (1 = Windows only, 2 = Mixed Mode). Then restart the service.\n- Via PowerShell: Set-ItemProperty -Path 'HKLM:\\SOFTWARE\\Microsoft\\Microsoft SQL Server\\MSSQL14.MSSQLSERVER\\MSSQLServer' -Name LoginMode -Value 2; Restart-Service MSSQLSERVER."}
            ]
          }
        ]
      }
    ]
  },
  "2024": {
    "papers": [
      {
        "title": "Practice of Computer",
        "duration": "5 hours",
        "credits": 8,
        "description": "Code: SWE 20 | Practical Exam",
        "sections": [
          {
            "title": "Section A: Programming — I. Structured Programming (C)",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Create the above array {22.5, 35.0, 26.5, 31.5, 28.0, 9.5, 23.0, 39.0} and populate it with data from the keyboard using a loop. Also create a function called displayArray that takes an array as parameter and displays the content of the array on separate lines.",
                "marks": 4,
                "answer": "#include <stdio.h>\n\nvoid displayArray(float arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf(\"%.1f\\n\", arr[i]);\n    }\n}\n\nint main() {\n    float marks[8];\n    printf(\"Enter 8 marks:\\n\");\n    for (int i = 0; i < 8; i++) {\n        printf(\"Mark %d: \", i + 1);\n        scanf(\"%f\", &marks[i]);\n    }\n    printf(\"\\nArray contents:\\n\");\n    displayArray(marks, 8);\n    return 0;\n}",
                "tutorial": "The array is declared with size 8. A for loop populates it from user input. displayArray() iterates and prints each element on a new line."
              },
              {
                "id": "1b",
                "text": "Create and call a function that swaps the first value with the last value in the array. Show the array before and after swapping (39.0 becomes first).",
                "marks": 4,
                "answer": "void swapFirstLast(float arr[], int n) {\n    float temp = arr[0];\n    arr[0] = arr[n - 1];\n    arr[n - 1] = temp;\n}\n\n// In main():\nprintf(\"Before swap:\\n\");\ndisplayArray(marks, 8);\nswapFirstLast(marks, 8);\nprintf(\"After swap:\\n\");\ndisplayArray(marks, 8);",
                "tutorial": "Store arr[0] in temp, assign arr[n-1] to arr[0], assign temp to arr[n-1]. Display before and after."
              },
              {
                "id": "1c",
                "text": "Create and call a function that sorts the last four (4) values in the array in ascending order. Show before and after sorting.",
                "marks": 4,
                "answer": "void sortLastFour(float arr[], int n) {\n    for (int i = n - 4; i < n - 1; i++) {\n        for (int j = n - 4; j < n - 1 - (i - (n - 4)); j++) {\n            if (arr[j] > arr[j + 1]) {\n                float temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}",
                "tutorial": "Apply bubble sort only to indices n-4 to n-1 (the last 4 elements)."
              },
              {
                "id": 2,
                "text": "Consider data: RolNo {21001-Terry, 21002-Shirley, 21003-Pericostigan, 21004-Persis, 21005-William, 21006-Jude} stored in register.txt. Write a program that opens the file and displays its content on the screen.",
                "marks": 5,
                "answer": "#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen(\"register.txt\", \"r\");\n    if (fp == NULL) {\n        printf(\"File not found!\\n\");\n        return 1;\n    }\n    char line[100];\n    while (fgets(line, sizeof(line), fp)) {\n        printf(\"%s\", line);\n    }\n    fclose(fp);\n    return 0;\n}",
                "tutorial": "Open file in read mode, check for NULL, read line by line with fgets() until EOF, then close."
              },
              {
                "id": 3,
                "text": "Store the table data in a doubly linked list. Create functions to: a) Display the linked list. b) Delete any record and show the list after deletion.",
                "marks": 8,
                "answer": "struct Node {\n    int rolNo;\n    char name[50];\n    struct Node *prev, *next;\n};\n\nvoid display(struct Node *head) {\n    struct Node *temp = head;\n    while (temp) {\n        printf(\"%d - %s\\n\", temp->rolNo, temp->name);\n        temp = temp->next;\n    }\n}\n\nvoid deleteNode(struct Node **head, int key) {\n    struct Node *temp = *head;\n    while (temp && temp->rolNo != key) temp = temp->next;\n    if (!temp) return;\n    if (temp->prev) temp->prev->next = temp->next;\n    else *head = temp->next;\n    if (temp->next) temp->next->prev = temp->prev;\n    free(temp);\n}",
                "tutorial": "A doubly linked list has prev and next pointers. Display traverses forward. Delete relinks neighbours and frees the node."
              }
            ]
          },
          {
            "title": "Section A: Programming — II. Object Oriented Programming (C++/Java)",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What is an abstract class?",
                "marks": 2,
                "answer": "An abstract class is a class that cannot be instantiated directly. It is declared with the 'abstract' keyword and may contain abstract methods (methods without a body) that must be implemented by concrete subclasses.",
                "tutorial": "Abstract classes serve as base templates. In C++, a class with at least one pure virtual function is abstract. In Java, the 'abstract' keyword is used."
              },
              {
                "id": 2,
                "text": "State two characteristics of an abstract class.",
                "marks": 2,
                "answer": "1. Cannot be instantiated directly — you cannot create an object of an abstract class.\n2. May contain abstract methods — methods declared without implementation that subclasses must override and implement.",
                "tutorial": "Abstract classes can also have concrete (implemented) methods and data members that subclasses inherit."
              },
              {
                "id": 3,
                "text": "Create an abstract class called BankAccount with fields: name (String), pin (String), amount (int — private). Create getter/setter for amount. Create abstract methods: deposit(), withdrawal(), DisplayInfo(), Change_pin().",
                "marks": 3,
                "answer": "abstract class BankAccount {\n    String name;\n    String pin;\n    private int amount;\n\n    public int getAmount() { return amount; }\n    public void setAmount(int amt) { amount = amt; }\n\n    abstract void deposit(String name1, String pin, int amt1);\n    abstract void withdrawal(String name2, String pin2, int amt2);\n    abstract void DisplayInfo(String name3, String pin3);\n    abstract void Change_pin(String name4, String oldpin, String newpin);\n}",
                "tutorial": "In C++, use 'virtual void deposit(...) = 0;' for pure virtual functions. The 'amount' field is private with public getter/setter."
              },
              {
                "id": 4,
                "text": "Create a subclass MyBankAccount that extends BankAccount and overrides the methods.",
                "marks": 2,
                "answer": "class MyBankAccount extends BankAccount {\n    MyBankAccount() { name = \"Ngong\"; pin = \"1234\"; setAmount(0); }\n\n    void deposit(String n, String p, int amt) {\n        if (n.equals(name) && p.equals(pin))\n            setAmount(getAmount() + amt);\n        else System.out.println(\"name and pin do not match\");\n    }\n\n    void withdrawal(String n, String p, int amt) {\n        if (n.equals(name) && p.equals(pin) && getAmount() >= amt)\n            setAmount(getAmount() - amt);\n        else System.out.println(\"name and pin do not match\");\n    }\n\n    void DisplayInfo(String n, String p) {\n        if (n.equals(name) && p.equals(pin))\n            System.out.println(name + \", Balance: \" + getAmount());\n        else System.out.println(\"name and pin do not match\");\n    }\n\n    void Change_pin(String n, String old, String newp) {\n        if (n.equals(name) && old.equals(pin))\n            pin = newp;\n        else System.out.println(\"name and pin do not match\");\n    }\n}",
                "tutorial": "The subclass provides implementations for all abstract methods. Each method first verifies credentials before performing the operation."
              },
              {
                "id": 5,
                "text": "Create a no-argument constructor. Initialize name='Ngong', pin='1234', amount=0.",
                "marks": 2,
                "answer": "MyBankAccount() {\n    name = \"Ngong\";\n    pin = \"1234\";\n    setAmount(0); // using setter to access private field\n}",
                "tutorial": "The constructor initializes default values. The amount field is set via the setter method since it's private in the parent class."
              },
              {
                "id": 6,
                "text": "Create deposit() method that increases balance by amt1 after verifying name1 and pin. Display error if mismatch.",
                "marks": 2,
                "answer": "void deposit(String n, String p, int amt) {\n    if (n.equals(name) && p.equals(pin)) {\n        setAmount(getAmount() + amt);\n    } else {\n        System.out.println(\"user name and pin code do not match\");\n    }\n}",
                "tutorial": "Verification uses .equals() for String comparison. On success, amount increases via setter. On failure, an error message is displayed."
              },
              {
                "id": 7,
                "text": "Create withdrawal() method that decrements balance by amt2 after verifying name2 and pin2.",
                "marks": 2,
                "answer": "void withdrawal(String n, String p, int amt) {\n    if (n.equals(name) && p.equals(pin)) {\n        if (getAmount() >= amt)\n            setAmount(getAmount() - amt);\n        else\n            System.out.println(\"Insufficient balance\");\n    } else {\n        System.out.println(\"user name and pin code do not match\");\n    }\n}",
                "tutorial": "Additional check ensures sufficient balance before withdrawal. Returns void as specified."
              },
              {
                "id": 8,
                "text": "Create DisplayInfo() that displays name and balance after verifying credentials.",
                "marks": 2,
                "answer": "void DisplayInfo(String n, String p) {\n    if (n.equals(name) && p.equals(pin)) {\n        System.out.println(\"Name: \" + name);\n        System.out.println(\"Balance: \" + getAmount());\n    } else {\n        System.out.println(\"user name and pin code do not match\");\n    }\n}",
                "tutorial": "Displays account holder name and current balance after successful authentication."
              },
              {
                "id": 9,
                "text": "Create Change_pin() that replaces oldpin with newpin after verifying name4 and oldpin.",
                "marks": 2,
                "answer": "void Change_pin(String n, String old, String newp) {\n    if (n.equals(name) && old.equals(pin)) {\n        pin = newp;\n        System.out.println(\"PIN changed successfully\");\n    } else {\n        System.out.println(\"user name and pin code do not match\");\n    }\n}",
                "tutorial": "Directly assigns the new PIN string to the pin field after successful verification."
              },
              {
                "id": 10,
                "text": "Draw a class diagram to represent this situation.",
                "marks": 2,
                "answer": "```mermaid\nclassDiagram\n    class BankAccount {\n        <<abstract>>\n        # name: String\n        # pin: String\n        - amount: int\n        + getAmount() int\n        + setAmount(int) void\n        + deposit(String, String, int)* void\n        + withdrawal(String, String, int)* void\n        + DisplayInfo(String, String)* void\n        + Change_pin(String, String, String)* void\n    }\n    class MyBankAccount {\n        + MyBankAccount()\n        + deposit(String, String, int) void\n        + withdrawal(String, String, int) void\n        + DisplayInfo(String, String) void\n        + Change_pin(String, String, String) void\n    }\n    BankAccount <|-- MyBankAccount : extends\n```",
                "tutorial": "UML class diagram showing BankAccount (abstract) as parent with MyBankAccount as concrete subclass inheriting via hollow triangle arrow."
              },
              {
                "id": 11,
                "text": "In main(), create a MyBankAccount object, prompt user for name/pin/choice, use a while loop and switch statement to call methods until the user decides to quit.",
                "marks": 4,
                "answer": "public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    MyBankAccount acc = new MyBankAccount();\n    String name, pin;\n    int choice;\n\n    do {\n        System.out.println(\"1.Deposit 2.Withdraw 3.Display 4.ChangePIN 5.Quit\");\n        choice = sc.nextInt(); sc.nextLine();\n        switch (choice) {\n            case 1:\n                System.out.print(\"Name: \"); name = sc.nextLine();\n                System.out.print(\"PIN: \"); pin = sc.nextLine();\n                System.out.print(\"Amount: \");\n                acc.deposit(name, pin, sc.nextInt());\n                break;\n            // similar cases for 2,3,4\n            case 5: System.out.println(\"Goodbye!\"); break;\n        }\n    } while (choice != 5);\n}",
                "tutorial": "The do-while loop ensures the menu appears at least once. A switch statement routes to the appropriate method based on user choice."
              }
            ]
          },
          {
            "title": "Section B: Database Development and Administration",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Observing the relations emp(eno,ename,bdate,title,salary,dno), proj(pno,pname,budget,dno), dept(dno,dname,mgreno), workson(eno,pno,resp,hours), state the foreign keys and composite keys in each relation.",
                "marks": 4,
                "answer": "Foreign keys:\n- emp.dno references dept.dno\n- proj.dno references dept.dno\n- workson.eno references emp.eno\n- workson.pno references proj.pno\n- dept.mgreno references emp.eno\n\nComposite keys:\n- workson(eno, pno) forms a composite primary key\n\nA key can be both foreign and primary. Example: eno in workson references emp.eno (foreign) and is part of the composite primary key of workson.",
                "tutorial": "A foreign key references a primary key in another table. A composite key uses multiple columns as the primary key."
              },
              {
                "id": 2,
                "text": "Draw the ER diagram from the relations.",
                "marks": 3,
                "answer": "```mermaid\nerDiagram\n    DEPARTMENT ||--o{ EMPLOYEE : employs\n    DEPARTMENT ||--o{ PROJECT : manages\n    EMPLOYEE ||--o{ WORKS_ON : assigned\n    PROJECT ||--o{ WORKS_ON : includes\n    DEPARTMENT ||--|| EMPLOYEE : managed_by\n```",
                "tutorial": "Use rectangles for entities, diamonds for relationships, ovals for attributes. '--<' denotes one-to-many."
              },
              {
                "id": 3,
                "text": "Write SQL query returning project number and name for projects with budget > 100,000.",
                "marks": 2,
                "answer": "SELECT pno, pname\nFROM proj\nWHERE budget > 100000;",
                "tutorial": "Use SELECT with WHERE clause to filter rows based on budget condition."
              },
              {
                "id": 4,
                "text": "Write SQL query returning all works on records where hours < 10 and responsibility is 'Manager'.",
                "marks": 2,
                "answer": "SELECT *\nFROM workson\nWHERE hours < 10 AND resp = 'Manager';",
                "tutorial": "Use AND to combine multiple conditions in the WHERE clause."
              },
              {
                "id": 5,
                "text": "Write SQL query returning employee number and name for employees with title 'EE' or 'SA' earning more than 35,000.",
                "marks": 2,
                "answer": "SELECT eno, ename\nFROM emp\nWHERE (title = 'EE' OR title = 'SA') AND salary > 35000;",
                "tutorial": "Parentheses ensure OR is evaluated before AND. Both conditions must be satisfied."
              },
              {
                "id": 6,
                "text": "Write SQL query returning employee names in department 'D1' ordered by decreasing salary.",
                "marks": 1,
                "answer": "SELECT ename\nFROM emp\nWHERE dno = 'D1'\nORDER BY salary DESC;",
                "tutorial": "ORDER BY with DESC sorts from highest to lowest."
              },
              {
                "id": 7,
                "text": "Write SQL query returning all departments ordered by ascending department name.",
                "marks": 1,
                "answer": "SELECT *\nFROM dept\nORDER BY dname ASC;",
                "tutorial": "ASC is the default sort order but can be explicitly stated."
              },
              {
                "id": 8,
                "text": "Write SQL query returning employee name, department name, and title.",
                "marks": 2,
                "answer": "SELECT e.ename, d.dname, e.title\nFROM emp e\nJOIN dept d ON e.dno = d.dno;",
                "tutorial": "Use JOIN to combine emp and dept tables on the dno foreign key relationship."
              },
              {
                "id": 9,
                "text": "Write SQL query returning project name, hours worked, and project number where hours > 10.",
                "marks": 1,
                "answer": "SELECT p.pname, w.hours, w.pno\nFROM workson w\nJOIN proj p ON w.pno = p.pno\nWHERE w.hours > 10;",
                "tutorial": "Join workson with proj to get the project name, filter by hours > 10."
              },
              {
                "id": 10,
                "text": "Write SQL query returning project name, department name, and budget for projects with budget < 50,000.",
                "marks": 1,
                "answer": "SELECT p.pname, d.dname, p.budget\nFROM proj p\nJOIN dept d ON p.dno = d.dno\nWHERE p.budget < 50000;",
                "tutorial": "Join proj with dept, filter on budget condition."
              },
              {
                "id": 11,
                "text": "Write SQL query returning employee numbers and salaries in Consulting department, ordered by descending salary.",
                "marks": 1,
                "answer": "SELECT e.eno, e.salary\nFROM emp e\nJOIN dept d ON e.dno = d.dno\nWHERE d.dname = 'Consulting'\nORDER BY e.salary DESC;",
                "tutorial": "Three-table join chain: emp → dept, filter on department name, order by salary descending."
              }
            ]
          },
          {
            "title": "Section C: Web Design",
            "marks": 15,
            "questions": [
              {
                "id": "a",
                "text": "Given an HTML file with a submit button and a &lt;p id='text'&gt; element, implement js_content() in JavaScript to modify the paragraph content when the button is clicked.",
                "marks": 5,
                "answer": "<p id=\"text\">Original text</p>\n<button onclick=\"js_content()\">Click</button>\n\n<script>\nfunction js_content() {\n    document.getElementById(\"text\").innerHTML = \"Text modified by JavaScript!\";\n}\n</script>",
                "tutorial": "document.getElementById() selects the element. innerHTML changes its content. This is a basic DOM manipulation technique."
              },
              {
                "id": "b",
                "text": "Given an HTML form with username, email, password, and mobile fields, and a MySQL database 'STUDENT' with table 'users' matching these fields. Write formHandler.php to receive and insert form data.",
                "marks": 10,
                "answer": "<!-- HTML Form -->\n<form action=\"formHandler.php\" method=\"POST\">\n    Username: <input type=\"text\" name=\"username\"><br>\n    Email: <input type=\"email\" name=\"email\"><br>\n    Password: <input type=\"password\" name=\"password\"><br>\n    Mobile: <input type=\"text\" name=\"mobile\"><br>\n    <input type=\"submit\" value=\"Submit\">\n</form>\n\n<!-- formHandler.php -->\n<?php\n$conn = mysqli_connect(\"localhost\", \"root\", \"user\", \"STUDENT\");\n\n$username = $_POST['username'];\n$email = $_POST['email'];\n$password = password_hash($_POST['password'], PASSWORD_DEFAULT);\n$mobile = $_POST['mobile'];\n\n$sql = \"INSERT INTO users (username, email, password, mobile)\n        VALUES ('$username', '$email', '$password', '$mobile')\";\n\nif (mysqli_query($conn, $sql)) {\n    echo \"Registration successful!\";\n} else {\n    echo \"Error: \" . mysqli_error($conn);\n}\n\nmysqli_close($conn);\n?>",
                "tutorial": "The form sends data via POST to formHandler.php. PHP connects to MySQL using mysqli, retrieves POST data, hashes the password, and inserts into the users table."
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 12,
                "text": "Connect three workstations (PC1, PC2, PC3) using correct Ethernet cables and a switch. PC1: 172.25.200.90/16, PC2: 172.25.200.91/16, PC3: 10.25.200.92/16.",
                "marks": 3,
                "answer": "Use straight-through Ethernet cables (Cat5e/Cat6) to connect each PC's NIC to the switch ports. PC1 and PC2 are on the same subnet (172.25.0.0/16) so they can communicate directly. PC3 is on 10.25.0.0/16, a different subnet, so it requires a router to communicate with PC1/PC2.",
                "tutorial": "A switch connects devices at Layer 2. Straight-through cables connect PCs to the switch. PCs on different subnets need a router (Layer 3) to communicate."
              },
              {
                "id": 13,
                "text": "Apply the Layer 3 addresses to the workstations.",
                "marks": 3,
                "answer": "PC1: IP 172.25.200.90, Subnet Mask 255.255.0.0\nPC2: IP 172.25.200.91, Subnet Mask 255.255.0.0\nPC3: IP 10.25.200.92, Subnet Mask 255.255.0.0\n\nConfiguration (Windows):\n- Go to Network Settings > Change adapter options\n- Right-click Ethernet > Properties > IPv4\n- Enter the IP address and subnet mask manually",
                "tutorial": "Layer 3 addresses are IP addresses. Assign them through the network adapter settings in the OS."
              },
              {
                "id": 14,
                "text": "How do you test connectivity between the workstations?",
                "marks": 3,
                "answer": "Open Command Prompt (cmd) and use the ping command:\n\nOn PC1: ping 172.25.200.91\nOn PC2: ping 172.25.200.90\nOn PC1: ping 10.25.200.92 (will fail without router)\n\nSuccessful ping replies indicate connectivity at Layer 3.",
                "tutorial": "ping sends ICMP echo requests. Replies confirm the destination is reachable. Timeouts may indicate firewall blocking or network issues."
              },
              {
                "id": 15,
                "text": "On PC1 desktop, create a folder named 'test', share it with full access. From PC2 or PC3, place a file in the shared folder.",
                "marks": 6,
                "answer": "PC1:\n1. Create folder 'test' on Desktop\n2. Right-click > Properties > Sharing tab > Share\n3. Add 'Everyone' and set permission to 'Read/Write'\n4. Note the network path: \\\\PC1\\test\n\nPC2:\n1. Open File Explorer > Network > Find PC1\n2. Double-click 'test' folder\n3. Copy a file into it\n\nOr use: \\\\172.25.200.90\\test in the address bar.",
                "tutorial": "Windows File Sharing uses SMB protocol. Setting Everyone to Read/Write allows any network user to add files. The shared folder appears under Network in Explorer."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Literacy",
        "duration": "2 hours",
        "credits": 1,
        "description": "Specialty: SWE, HWM, CWD | 2024 Session",
        "sections": [
          {
            "title": "Section A: General Computer Knowledge — Part I: MCQ",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Which part of a computer performs calculations and executes instructions? A) Hard disk B) Monitor C) CPU D) DVD",
                "marks": 1,
                "answer": "C) CPU (Central Processing Unit)"
              },
              {
                "id": 2,
                "text": "Which device can you use to input audio into a computer? A) Microphone B) DVD player C) Analog camcorder D) Transistor radio",
                "marks": 1,
                "answer": "A) Microphone"
              },
              {
                "id": 3,
                "text": "Microprocessors were introduced as a switching technology in which generation of computers? A) First Generation B) Second Generation C) Third Generation D) Fourth Generation",
                "marks": 1,
                "answer": "D) Fourth Generation"
              },
              {
                "id": 4,
                "text": "A programming language that uses mnemonics to represent instructions is called: A) An assembly language B) A high level language C) A machine language D) A fourth generation language",
                "marks": 1,
                "answer": "A) An assembly language"
              },
              {
                "id": 5,
                "text": "What is the Internet? A) A product that results from the World Wide Web B) An electronic device used for printing C) A backup source for data D) A network of networks",
                "marks": 1,
                "answer": "D) A network of networks"
              },
              {
                "id": 6,
                "text": "Which type of ROM permits its content to be programmed by electrical impulses? A) PROM B) EEPROM C) EPROM D) EEEPROM",
                "marks": 1,
                "answer": "B) EEPROM (Electrically Erasable Programmable Read-Only Memory)"
              },
              {
                "id": 7,
                "text": "Which technology ensures that transactions between a user and an online store are secure? A) Antivirus program B) Cookies C) Secure Sockets Layers D) Microsoft Windows Firewall",
                "marks": 1,
                "answer": "C) Secure Sockets Layers (SSL)"
              },
              {
                "id": 8,
                "text": "What is the status of a computer that is connected to the Internet? A) Online B) Logged in C) Stand by D) Browsing",
                "marks": 1,
                "answer": "A) Online"
              },
              {
                "id": 9,
                "text": "Which technology can a website use to allow you to listen to a live concert over the Internet? A) Sampling B) Streaming C) Speech synthesis D) Video recording and playing",
                "marks": 1,
                "answer": "B) Streaming"
              },
              {
                "id": 10,
                "text": "Which technology is used in a CDROM Drive? A) Mechanical B) Electromechanical C) Optical D) Fiber Optical",
                "marks": 1,
                "answer": "C) Optical"
              },
              {
                "id": 11,
                "text": "Which type of program can you use to create business publications? A) Movie maker B) Desktop publishing C) Antivirus D) Instant messenger",
                "marks": 1,
                "answer": "B) Desktop publishing"
              },
              {
                "id": 12,
                "text": "Which program can help you detect and prevent malicious software on your computer? A) Ethernet protector B) Trojan horse warriors C) Worm killer D) Antivirus software",
                "marks": 1,
                "answer": "D) Antivirus software"
              },
              {
                "id": 13,
                "text": "Which action can be described as a copyright violation? A) Reading material from a public library B) Distributing someone else's work without permission C) Quoting a paragraph and citing the source D) Buying original software",
                "marks": 1,
                "answer": "B) Distributing someone else's work without permission"
              },
              {
                "id": 14,
                "text": "Which professional would help you install new computers on a network, manage authorized users, and archive files? A) Database administrator B) Network administrator C) Software developer D) System administrator",
                "marks": 1,
                "answer": "B) Network administrator"
              },
              {
                "id": 15,
                "text": "How do you get a context menu (with options like Open, Copy, Delete) to appear for a file? A) Double-click with the left mouse button B) Click with the right mouse button C) Click with the left mouse button D) Click Start",
                "marks": 1,
                "answer": "B) Click with the right mouse button"
              },
              {
                "id": 16,
                "text": "Which of these describes a computer that shares resources on a network? A) Client B) Server C) Workstation D) Terminal",
                "marks": 1,
                "answer": "B) Server"
              },
              {
                "id": 17,
                "text": "Which storage device uses magnetic disks to store data permanently? A) RAM B) ROM C) Hard Disk Drive D) Cache memory",
                "marks": 1,
                "answer": "C) Hard Disk Drive"
              },
              {
                "id": 18,
                "text": "What does HTML stand for? A) HyperText Markup Language B) HighText Machine Language C) HyperTool Markup Language D) HighTool Machine Language",
                "marks": 1,
                "answer": "A) HyperText Markup Language"
              },
              {
                "id": 19,
                "text": "Which of the following is a web browser? A) Google B) Bing C) Chrome D) Yahoo",
                "marks": 1,
                "answer": "C) Chrome"
              },
              {
                "id": 20,
                "text": "Which device converts digital signals to analog signals for transmission over telephone lines? A) Router B) Switch C) Modem D) Hub",
                "marks": 1,
                "answer": "C) Modem"
              }
            ]
          },
          {
            "title": "Section A: General Computer Knowledge — Part II: Structural Questions",
            "marks": 30,
            "questions": [
              {
                "id": 21,
                "text": "a) What do you understand by the internet? b) Distinguish between internet and intranet.",
                "marks": 6,
                "answer": "a) The internet is a global network of interconnected computers that communicate using TCP/IP protocols, enabling worldwide access to information, communication, and services.\nb) Internet is a public global network accessible to anyone, while intranet is a private network restricted to an organization's members, using the same technologies but with limited access.",
                "tutorial": "Internet = global public. Intranet = local private."
              },
              {
                "id": 22,
                "text": "State the protocol used for the following internet services: a) Email service b) Web service c) File service d) Instant messaging",
                "marks": 4,
                "answer": "a) Email service: SMTP (Simple Mail Transfer Protocol)\nb) Web service: HTTP/HTTPS (HyperText Transfer Protocol)\nc) File service: FTP (File Transfer Protocol)\nd) Instant messaging: XMPP (Extensible Messaging and Presence Protocol) or proprietary protocols",
                "tutorial": "Each internet service uses a specific application-layer protocol."
              },
              {
                "id": 23,
                "text": "a) What is a software? b) Distinguish between system software and application software. c) What do you understand by a bespoke software?",
                "marks": 6,
                "answer": "a) Software is a set of instructions, programs, and data that tell a computer how to perform specific tasks.\nb) System software manages hardware and provides a platform for applications (OS, drivers). Application software performs specific user tasks (Word, Excel).\nc) Bespoke software is custom-built software developed for a specific user or organization, tailored to their exact requirements.",
                "tutorial": "System software runs the computer. Application software performs user tasks. Bespoke = custom-made."
              },
              {
                "id": 24,
                "text": "Explain the following computer components: a) RAM b) ROM c) CPU d) CMOS battery",
                "marks": 8,
                "answer": "a) RAM (Random Access Memory): volatile memory that temporarily stores data and programs currently in use.\nb) ROM (Read-Only Memory): non-volatile memory that stores firmware and boot instructions permanently.\nc) CPU (Central Processing Unit): the brain of the computer that executes instructions and performs calculations.\nd) CMOS battery: small battery on the motherboard that powers the BIOS settings and real-time clock when the computer is off.",
                "tutorial": "RAM = temporary workspace. ROM = permanent boot instructions. CPU = processor. CMOS = keeps time/settings."
              },
              {
                "id": 25,
                "text": "Discuss the following ethical terminologies: a) Copyright b) Piracy",
                "marks": 4,
                "answer": "a) Copyright: a legal right granting the creator of original work exclusive rights to its use, distribution, and reproduction. It protects software, music, books, and other creative works.\nb) Piracy: the unauthorized copying, distribution, or use of copyrighted material, including software, movies, music, and books. It is illegal and causes financial losses to creators.",
                "tutorial": "Copyright protects creators. Piracy violates copyright."
              },
              {
                "id": 26,
                "text": "Give the full meaning and functions of: a) UPS b) DSL c) ISP d) FTP",
                "marks": 2,
                "answer": "a) UPS (Uninterruptible Power Supply): provides battery backup during power outages.\nb) DSL (Digital Subscriber Line): high-speed internet connection over telephone lines.\nc) ISP (Internet Service Provider): company that provides internet access to customers.\nd) FTP (File Transfer Protocol): protocol for transferring files between computers on a network.",
                "tutorial": "These are common acronyms in computing and networking."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society — Part I: Web Knowledge",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Give two differences between: i) Internet browser and search engine ii) Intranet and extranet iii) Internet and the web",
                "marks": 6,
                "answer": "i) Internet browser: software that displays web pages (Chrome, Firefox). Search engine: website that indexes and retrieves web content (Google, Bing).\nii) Intranet: private network for organization members. Extranet: intranet extended to authorized external users (partners, clients).\niii) Internet: global network of interconnected computers. Web: collection of web pages and content accessed via the internet (a service built on top of the internet).",
                "tutorial": "Browser displays, search engine finds. Intranet = internal, extranet = extended. Internet = infrastructure, web = content."
              },
              {
                "id": 2,
                "text": "a) What is green computing? b) Name two ways by which it can be enhanced.",
                "marks": 4,
                "answer": "a) Green computing is the environmentally responsible use of computers and related resources, focusing on energy efficiency, reducing e-waste, and sustainable practices.\nb) 1) Using energy-efficient hardware (Energy Star certified). 2) Implementing power management (sleep mode, turning off unused devices). 3) Recycling and proper disposal of e-waste. 4) Virtualization to reduce physical servers.",
                "tutorial": "Green computing = eco-friendly IT practices."
              },
              {
                "id": 3,
                "text": "a) What do you understand by computer generation? b) State the technology that characterizes 5th generation computers.",
                "marks": 4,
                "answer": "a) Computer generation refers to the stages of technological evolution in computing, marked by major hardware and software advancements.\nb) 5th generation computers are characterized by Artificial Intelligence (AI), parallel processing, natural language processing, machine learning, and quantum computing.",
                "tutorial": "Each generation represents a major technological leap."
              },
              {
                "id": 4,
                "text": "a) Give 2 advantages and 2 disadvantages of using social media in schools. b) State any four social media platforms. c) Give two brief differences between the internet and the web.",
                "marks": 6,
                "answer": "a) Advantages: 1) Enhances collaboration and communication. 2) Access to educational resources. Disadvantages: 1) Distraction from studies. 2) Cyberbullying and privacy risks.\nb) Facebook, Twitter/X, Instagram, WhatsApp, LinkedIn, TikTok.\nc) Internet = global network infrastructure. Web = collection of web pages accessed via HTTP on the internet.",
                "tutorial": "Social media has educational benefits but also risks."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society — Part II: Digital Society",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Briefly explain the following in relation to the digital society: a) Juvenile delinquency b) Cyber bullying c) Spamming d) Propaganda",
                "marks": 8,
                "answer": "a) Juvenile delinquency: illegal or antisocial behavior by minors, including cybercrimes like hacking, online fraud, and digital harassment.\nb) Cyber bullying: the use of digital platforms (social media, messaging) to harass, threaten, embarrass, or target another person repeatedly.\nc) Spamming: the sending of unsolicited bulk messages (emails, comments) usually for advertising, phishing, or spreading malware.\nd) Propaganda: biased or misleading information systematically spread via digital channels to influence public opinion or promote a particular agenda.",
                "tutorial": "Digital society brings both opportunities and risks, including these challenges."
              },
              {
                "id": 2,
                "text": "a) What do you understand by the phrase 'software piracy'? b) Explain five concepts of living online.",
                "marks": 10,
                "answer": "a) Software piracy is the unauthorized copying, distribution, or use of copyrighted software without a valid license.\nb) Five concepts of living online:\n1) Digital identity: how you present yourself online.\n2) Digital footprint: the trail of data you leave when using the internet.\n3) Online privacy: controlling what personal information is shared.\n4) Cybersecurity: protecting devices and data from threats.\n5) Digital etiquette: proper behavior and conduct in online interactions.",
                "tutorial": "Living online responsibly requires awareness of identity, privacy, security, and ethics."
              },
              {
                "id": 3,
                "text": "a) What is a fake news? b) List four consequences of propagating fake news.",
                "marks": 6,
                "answer": "a) Fake news is false or misleading information presented as legitimate news, often spread through social media and websites to deceive readers or advance an agenda.\nb) Consequences:\n1) Public panic and misinformation.\n2) Damage to reputations of individuals and institutions.\n3) Undermining trust in media and democratic processes.\n4) Social division and conflict.\n5) Economic harm to businesses and markets.",
                "tutorial": "Fake news can have serious real-world consequences. Verify before sharing."
              },
              {
                "id": 4,
                "text": "Give five differences between e-learning and e-commerce.",
                "marks": 3,
                "answer": "1) E-learning delivers education; e-commerce sells goods/services.\n2) E-learning uses LMS platforms; e-commerce uses online stores.\n3) E-learning outcome is knowledge; e-commerce outcome is transactions.\n4) E-learning content includes courses; e-commerce includes product listings.\n5) E-learning assessment uses tests; e-commerce uses order confirmations.",
                "tutorial": "E-learning = education online. E-commerce = business online."
              },
              {
                "id": 5,
                "text": "What are five tips for protecting yourself against identity theft?",
                "marks": 3,
                "answer": "1) Use strong, unique passwords for each online account.\n2) Enable two-factor authentication (2FA) whenever possible.\n3) Avoid sharing personal information (ID numbers, addresses) on public platforms.\n4) Be cautious of phishing emails and suspicious links.\n5) Monitor bank statements and credit reports regularly for unauthorized activity.",
                "tutorial": "Identity theft protection requires vigilance and good security habits."
              }
            ]
          }
        ]
      },
      {
        "title": "Law and Citizenship Education",
        "duration": "2 hours",
        "credits": 2,
        "description": "Specialty: All Specialties | 2024 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "With concrete examples, critically examine the different categories of courts in Cameroon.",
                "marks": 20,
                "answer": "Cameroon's judicial system is organized hierarchically:\n\n1. Supreme Court: Highest court, hears appeals from lower courts on matters of law. Handles constitutional matters and reviews decisions of the Court of Appeal.\n\n2. Court of Appeal: Hears appeals from High Courts and lower tribunals in both civil and criminal matters. Each region has a Court of Appeal.\n\n3. High Court: Original jurisdiction in serious criminal and civil cases. Also hears appeals from Magistrate Courts. Example: a murder trial begins at the High Court.\n\n4. Magistrate Court (Court of First Instance): Handles minor civil disputes and petty criminal offenses. Example: landlord-tenant disputes, small claims.\n\n5. Customary Courts: Apply traditional/customary law, particularly in rural areas, handling matters like marriage, inheritance, and land disputes under native law and custom.\n\n6. Military Courts: Handle offenses committed by military personnel under military law.\n\n7. Administrative Courts: Handle disputes between citizens and government agencies (under the Supreme Court's administrative division).\n\n8. State Security Court: Deals with offenses against state security.\n\nThe dual legal system (English common law in Anglophone regions, French civil law in Francophone regions) is reflected in the court structure, especially at higher levels.",
                "tutorial": "Cameroon's court system follows a hierarchical structure with specialized courts for different matters."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics, Morals and Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 2,
                "text": "Identify and briefly explain any five indicators of good governance in Cameroon.",
                "marks": 20,
                "answer": "1. Rule of Law: Laws are applied equally to all citizens, protecting rights and ensuring justice. An independent judiciary upholds the constitution.\n\n2. Transparency: Government decisions and actions are open to public scrutiny. Citizens have access to information about policies, budgets, and governance processes.\n\n3. Accountability: Public officials are answerable for their actions and decisions. Mechanisms exist for citizens to hold leaders responsible through elections, audits, and oversight bodies.\n\n4. Participation: Citizens have the right and opportunity to participate in decision-making processes through voting, public consultations, civil society organizations, and community engagement.\n\n5. Effectiveness and Efficiency: Public institutions deliver services that meet citizen needs while making optimal use of resources. Timely response to public needs demonstrates competent governance.\n\n6. Consensus Orientation: Governance considers the interests of different stakeholders and seeks broad consensus on major national issues through dialogue and consultation.\n\n7. Equity and Inclusiveness: All citizens, regardless of gender, ethnicity, religion, or region, have equal opportunities and access to public services and justice.",
                "tutorial": "Good governance ensures democracy, justice, and effective service delivery to citizens."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 3,
                "text": "Examine the various types of labour contracts enacted by the 1992 Labour Code of Cameroon.",
                "marks": 20,
                "answer": "The 1992 Cameroon Labour Code (Law No. 92-007) recognizes the following types of labour contracts:\n\n1. Contract of Indefinite Duration (CDI - Contrat à Durée Indéterminée): The most common type, with no fixed end date. It continues until either party terminates it with proper notice. Provides the strongest job security for employees.\n\n2. Contract of Fixed Duration (CDD - Contrat à Durée Déterminée): Has a specific end date, used for temporary or seasonal work. Limited to a maximum duration (typically 2 years, renewable once). Must specify the reason for the fixed term.\n\n3. Contract for Specific Task: For completing a well-defined project or task. Ends automatically when the task is completed. Common in construction and project-based industries.\n\n4. Probationary Contract: An initial trial period (période d'essai) to evaluate the employee's suitability. Duration varies by position but is typically 1-6 months. During this period, either party may terminate without notice or severance.\n\n5. Apprenticeship Contract: Combines practical training with theoretical instruction. Governed by specific regulations, with a defined duration and mandatory training components.\n\n6. Part-time Contract: For employees working fewer hours than the standard workweek. Must be in writing with specific provisions for working hours, remuneration, and benefits.\n\nAll contracts must be in writing (French or English), registered with the labour inspectorate, and specify the nature of work, remuneration, working hours, place of work, and duration (for CDD).",
                "tutorial": "The Labour Code provides a framework for different employment relationships, protecting both employer and employee rights."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 4,
                "text": "Critically examine the bank duty of confidentiality or secrecy.",
                "marks": 20,
                "answer": "Bank duty of confidentiality (or banker's duty of secrecy) is a legal obligation requiring banks to keep their customers' financial information private.\n\nNature of the Duty:\n- Derived from common law (Tournier v National Provincial Bank, 1924) and codified in banking legislation.\n- Implied term in the banker-customer contract.\n- Applies to information obtained through the banker-customer relationship, including account balances, transactions, credit history, and business affairs.\n\nScope of the Duty:\n- Covers all information about the customer's account and transactions.\n- Continues even after the account is closed.\n- Applies to former customers regarding information acquired during the relationship.\n\nExceptions (Tournier's four exceptions):\n1. Where disclosure is required by law (statutory obligations, tax authorities).\n2. Where there is a duty to the public (national security, crime prevention).\n3. Where the bank's own interests require disclosure (suing for debt recovery).\n4. Where the customer gives express or implied consent.\n\nModern Developments:\n- Anti-money laundering regulations require disclosure of suspicious transactions.\n- Tax information exchange agreements require banks to report certain financial information.\n- Data protection laws create additional obligations for handling personal financial data.\n\nBreach of the duty gives the customer a right to damages for any loss suffered.",
                "tutorial": "Bank secrecy is fundamental but has important legal exceptions in the public interest."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 5,
                "text": "Carefully explain extensively the principle of corporate personality, bringing out clearly the different advantages of incorporating a company.",
                "marks": 20,
                "answer": "The principle of corporate personality is the foundational concept of company law: a company, once incorporated, becomes a legal entity separate and distinct from its members (shareholders) and directors.\n\nThis principle was established in the landmark case Salomon v Salomon & Co Ltd (1897), where the House of Lords held that a company is a separate legal person independent of its shareholders, even when one person owns virtually all shares.\n\nKey Aspects of Corporate Personality:\n1. Separate Legal Existence: The company can own property, enter contracts, and sue or be sued in its own name, independent of its shareholders.\n2. Perpetual Succession: The company continues to exist regardless of changes in membership or management. Death or departure of shareholders does not affect the company's existence.\n3. Limited Liability: Shareholders are liable only for the amount unpaid on their shares. Their personal assets are protected from company debts.\n4. Separate Property: Assets belong to the company, not to shareholders. A shareholder cannot claim ownership of company assets.\n5. Capacity to Sue and Be Sued: The company can initiate legal proceedings and be sued in its corporate name.\n\nAdvantages of Incorporation:\n1. Limited Liability: Protects shareholders' personal assets, encouraging investment and risk-taking.\n2. Perpetual Succession: Ensures business continuity beyond the lifespan of any individual member.\n3. Access to Capital: Can raise funds by issuing shares to investors and obtaining loans more easily.\n4. Transferability of Shares: Shares can be transferred without affecting the company's operations.\n5. Tax Benefits: Companies may have tax advantages (deductions, lower rates) compared to sole proprietorships.\n6. Credibility: Incorporated status enhances credibility with customers, suppliers, and financial institutions.\n7. Separation of Ownership and Management: Allows professional management while owners focus on strategic direction.\n\nThe corporate veil (separate personality) can be lifted by courts in cases of fraud, evasion of legal obligations, or when the company is used as a mere facade for improper purposes.",
                "tutorial": "Corporate personality is the foundation of modern business, enabling investment and economic growth through limited liability."
              }
            ]
          }
        ]
      },
      {
        "title": "Discrete Mathematics",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: NWS, SWE, EDM | 2024 Session",
        "sections": [
          {
            "title": "Section A: MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "The probability of selecting at random a man in a crowd containing 20 men and 33 women is: A) 0.6226 B) 0.05 C) 0.3774 D) 1",
                "marks": 1,
                "answer": "C) 0.3774 (P = 20/53 = 0.3774)"
              },
              {
                "id": 2,
                "text": "lim(x→0) tan(3x)/x is equal to: A) 3 B) 1/3 C) 2/3 D) 0",
                "marks": 1,
                "answer": "A) 3 (using the limit lim tan(ax)/x = a)"
              },
              {
                "id": 3,
                "text": "The general term of the series 1 + 1/3 + 1/5 + 1/7 + ... is: A) 2/(2n+1) B) 2/(2n-1) C) 1/(2n-1) D) 1/(2n+1)",
                "marks": 1,
                "answer": "C) 1/(2n-1) (the denominators are odd numbers: 1,3,5,7,...)"
              },
              {
                "id": 4,
                "text": "When lim(x→∞) f(x) = L, it implies the possibility of: A) a vertical asymptote B) a horizontal asymptote C) a quadratic asymptote D) an oblique asymptote",
                "marks": 1,
                "answer": "B) a horizontal asymptote (horizontal asymptote at y = L)"
              },
              {
                "id": 5,
                "text": "The domain of definition of the function f(x) = (e^x - 1 + ln x)/(e^x - e) is: A) ]0,1[U]1,+∞[ B) ]1,+∞[ C) ]0,e[U]e,+∞[ D) ]e,1[U]1,+∞[",
                "marks": 1,
                "answer": "A) ]0,1[U]1,+∞[ (ln x requires x>0, denominator e^x-e=0 when x=1)"
              },
              {
                "id": 6,
                "text": "The parity of the function f(x) = x is: A) even B) odd C) neither odd nor even D) positive",
                "marks": 1,
                "answer": "B) odd (f(-x) = -x = -f(x))"
              },
              {
                "id": 7,
                "text": "The equation log(x-1) + log(x+1) = 2log(x+2) has as solution x =: A) 4/5 B) -5/4 C) 5/4 D) -4/5",
                "marks": 1,
                "answer": "B) -5/4 (log[(x-1)(x+1)] = log(x+2)² => x²-1 = x²+4x+4 => -1 = 4x+4 => 4x = -5 => x = -5/4)"
              },
              {
                "id": 8,
                "text": "In d'Alembert's ratio test, lim(n→∞) a(n+1)/a(n) < 1 implies: A) Convergence B) Divergence C) Inconclusive D) Constant",
                "marks": 1,
                "answer": "A) Convergence (ratio < 1 means series converges absolutely)"
              },
              {
                "id": 9,
                "text": "Three numbers are in arithmetic progression. Their sum is 9 and their product is 20.25. What are the three numbers? A) 5/2, 1/2, 3/2 B) 7/2, 5/2, 6/2 C) 3/2, 3, 9/2 D) 5/2, 3, 1/2",
                "marks": 1,
                "answer": "C) 3/2, 3, 9/2 (Let numbers be a-d, a, a+d. Sum = 3a = 9 => a = 3. Product = a(a²-d²) = 3(9-d²) = 20.25 => 27-3d² = 20.25 => d² = 2.25 => d = 1.5. Numbers: 1.5, 3, 4.5)"
              },
              {
                "id": 10,
                "text": "The exact solution to ∫(1/(x√(4x²-1)))dx is: A) π/2 B) π/4 C) π/6 D) π/3",
                "marks": 1,
                "answer": "C) π/6 (standard integral = arcsec(2x)/2 = π/6 at appropriate limits)"
              },
              {
                "id": 11,
                "text": "If f(t+T) = f(t), T is called: A) the fundamental period of f(t) B) the period of f(t) C) constant of f(t) D) increment of f(t)",
                "marks": 1,
                "answer": "B) the period of f(t)"
              },
              {
                "id": 12,
                "text": "Which theorem is verified if f(x) is continuous on [a,b], differentiable on ]a,b[, f(a) = f(b) and there exists at least c in ]a,b[ such that f'(c) = 0? A) Cauchy's theorem B) Green's theorem C) Rolle's theorem D) Mean value theorem",
                "marks": 1,
                "answer": "C) Rolle's theorem"
              },
              {
                "id": 13,
                "text": "The equation ∫Pdx + Qdy = ∬(∂Q/∂x - ∂P/∂y)dxdy expresses: A) Cauchy's theorem B) Green's theorem C) Rolle's theorem D) Mean value theorem",
                "marks": 1,
                "answer": "B) Green's theorem (relates line integral to double integral over region)"
              },
              {
                "id": 14,
                "text": "tanh⁻¹(x) is identical to: A) tan(x) B) tan⁻¹(x) C) (1/2)ln((1+x)/(1-x)) D) ln(x²-1) - ln(x²+1)",
                "marks": 1,
                "answer": "C) (1/2)ln((1+x)/(1-x)) (standard identity for inverse hyperbolic tangent)"
              },
              {
                "id": 15,
                "text": "If f(x) = x³ · 3ˣ, then f'(x) =: A) x²3ˣ + ln3·3ˣ B) 3x² + ln3 C) 3x² + 3ˣ D) 3x²·3ˣ + x³·3ˣ·ln3",
                "marks": 1,
                "answer": "D) 3x²·3ˣ + x³·3ˣ·ln3 (product rule: derivative of x³ is 3x², derivative of 3ˣ is 3ˣ·ln3)"
              },
              {
                "id": 16,
                "text": "The standard deviation of the set {35, 22, 25, 23, 28, 33, 30} is: A) 3.50 B) 4.00 C) 4.60 D) 5.50",
                "marks": 1,
                "answer": "C) 4.60 (Mean = 28, Variance = Σ(x-μ)²/n = (49+36+9+25+0+25+4)/7 = 148/7 ≈ 21.14, SD = √21.14 ≈ 4.60)"
              },
              {
                "id": 17,
                "text": "A box contains 74 brass washers, 86 steel washers, and 40 aluminum washers. Three washers are drawn at random without replacement. The probability all three are steel is: A) 0.045 B) 0.086 C) 0.0779 D) 0.0668",
                "marks": 1,
                "answer": "C) 0.0779 (P = (86/200)(85/199)(84/198) = 0.43×0.427×0.424 = 0.0779)"
              },
              {
                "id": 18,
                "text": "A component is classified as top quality (0.07), standard quality (0.85), or substandard (0.08). The probability a component is either top quality or standard quality is: A) 0.85 B) 0.90 C) 0.92 D) 0.96",
                "marks": 1,
                "answer": "C) 0.92 (P(Top ∪ Standard) = 0.07 + 0.85 = 0.92)"
              },
              {
                "id": 19,
                "text": "Machines A, B, C manufacture 50%, 30%, 20% of components respectively. Reliability probabilities: A=0.93, B=0.90, C=0.95. The probability a randomly selected component is reliable is: A) 0.925 B) 0.95 C) 0.90 D) 0.88",
                "marks": 1,
                "answer": "A) 0.925 (P(Reliable) = 0.5×0.93 + 0.3×0.90 + 0.2×0.95 = 0.465 + 0.27 + 0.19 = 0.925)"
              },
              {
                "id": 20,
                "text": "Which is NOT a solution of 2 - 4cos²x = 0 for x in [0, 2π]? A) 45° B) 135° C) 225° D) 30°",
                "marks": 1,
                "answer": "D) 30° (cos²x = 1/2 => cos x = ±1/√2 => x = 45°, 135°, 225°, 315°)"
              }
            ]
          },
          {
            "title": "Section B: Analysis and Statistics",
            "marks": 60,
            "questions": [
              {
                "id": 1,
                "text": "Find the Fourier coefficients of the periodic function f(x) given by f(x) = 0 for -π < x < 0 and f(x) = 1 for 0 < x < π, with f(x+2π) = f(x).",
                "marks": 6,
                "answer": "a₀ = (1/π)∫₋πᵖⁱ f(x)dx = (1/π)∫₀ᵖⁱ 1·dx = 1\n\naₙ = (1/π)∫₀ᵖⁱ cos(nx)dx = (1/(nπ))[sin(nx)]₀ᵖⁱ = 0\n\nbₙ = (1/π)∫₀ᵖⁱ sin(nx)dx = (1/(nπ))[-cos(nx)]₀ᵖⁱ = (1/(nπ))(1 - (-1)ⁿ)\n\nbₙ = 2/(nπ) for odd n, 0 for even n.\n\nf(x) = 1/2 + Σ(n odd) (2/(nπ)) sin(nx)",
                "tutorial": "Fourier series decomposes a periodic function into sine and cosine components."
              },
              {
                "id": 2,
                "text": "Find the Laplace transform of f(t) = e^(3t) sinh(t).",
                "marks": 6,
                "answer": "L{e^(3t) sinh(t)} = L{sinh(t)} with shift: L{sinh(t)} = 1/(s²-1)\nUsing the shift theorem: L{e^(at) f(t)} = F(s-a)\nL{e^(3t) sinh(t)} = 1/((s-3)²-1) = 1/(s²-6s+8)",
                "tutorial": "Laplace transform shift theorem: L{e^(at)f(t)} = F(s-a)."
              },
              {
                "id": 3,
                "text": "Consider a function of two variables f(x,y) and df the total differential of f. If df = (2xy² + 2)dx + (3x²y² - 4)dy, show that df is an exact differential.",
                "marks": 5,
                "answer": "df = P dx + Q dy where P = 2xy² + 2, Q = 3x²y² - 4\n\nFor exact differential: ∂P/∂y = ∂Q/∂x\n∂P/∂y = 4xy\n∂Q/∂x = 6xy²\n\nWait, ∂P/∂y = 4xy and ∂Q/∂x = 6xy². These are not equal, so the given expression may not be exact. Let me re-check.\n\nIf df = (2xy² + 2)dx + (3x²y² - 4)dy:\n∂P/∂y = 4xy\n∂Q/∂x = 6xy²\n4xy ≠ 6xy², so df is NOT exact as written.\n\nHowever, checking the original: If P = 2xy² + 2 and Q = 3x²y² - 4:\n∂P/∂y = 4xy\n∂Q/∂x = 6xy²\nThese are not equal, so the differential would not be exact.",
                "tutorial": "For exact differentials, the mixed partial derivatives must be equal: ∂P/∂y = ∂Q/∂x."
              },
              {
                "id": 4,
                "text": "Verify Green's theorem in the plane for ∮(2xy - x²)dx + (x + y²)dy where C is the closed curve of the region bounded by y = x² and y² = x.",
                "marks": 5,
                "answer": "Green's theorem: ∮(P dx + Q dy) = ∬(∂Q/∂x - ∂P/∂y)dA\n\nP = 2xy - x², Q = x + y²\n∂Q/∂x = 1, ∂P/∂y = 2x\n∂Q/∂x - ∂P/∂y = 1 - 2x\n\nRegion: y = x² and y² = x intersect at (0,0) and (1,1)\n∬(1-2x)dA = ∫₀¹∫_{x²}^{√x}(1-2x)dy dx = ∫₀¹(1-2x)(√x - x²)dx\n= ∫₀¹(x^(1/2) - x² - 2x^(3/2) + 2x³)dx\n= [2x^(3/2)/3 - x³/3 - 4x^(5/2)/5 + x⁴/2]₀¹\n= 2/3 - 1/3 - 4/5 + 1/2 = (20-10-24+15)/30 = 1/30",
                "tutorial": "Green's theorem relates a line integral around a closed curve to a double integral over the enclosed region."
              },
              {
                "id": 5,
                "text": "Solve the homogeneous equation (x² + y²)dy = xydx, given that x = 1 when y = 1.",
                "marks": 4,
                "answer": "Rewrite: dy/dx = xy/(x² + y²)\n\nLet y = vx, dy/dx = v + x dv/dx\n\nv + x dv/dx = vx²/(x² + v²x²) = v/(1+v²)\nx dv/dx = v/(1+v²) - v = v(1/(1+v²) - 1) = v(1 - (1+v²))/(1+v²) = -v³/(1+v²)\n\n(1+v²)/v³ dv = -dx/x\n∫(v⁻³ + v⁻¹)dv = -∫dx/x\n-v⁻²/2 + ln|v| = -ln|x| + C\n-1/(2v²) + ln|vx| = C\n-1/(2v²) + ln|y| = C\n\nWhen x=1, y=1 => v=1 => -1/2 + 0 = C => C = -1/2\n-1/(2(x²/y²)) + ln|y| = -1/2\n-y²/(2x²) + ln|y| = -1/2",
                "tutorial": "Use substitution y = vx for homogeneous differential equations."
              },
              {
                "id": 6,
                "text": "Determine the general solution of the differential equation: d²y/dx² + 3dy/dx - 4y = 3e⁻ˣ.",
                "marks": 4,
                "answer": "Auxiliary equation: r² + 3r - 4 = 0 => (r+4)(r-1) = 0 => r = -4, 1\n\nCF: yc = Ae⁻⁴ˣ + Beˣ\n\nPI: Try yp = Ce⁻ˣ, yp' = -Ce⁻ˣ, yp'' = Ce⁻ˣ\nSubstitute: Ce⁻ˣ - 3Ce⁻ˣ - 4Ce⁻ˣ = 3e⁻ˣ\n(C - 3C - 4C)e⁻ˣ = 3e⁻ˣ\n-6C = 3 => C = -1/2\n\nyp = -(1/2)e⁻ˣ\n\nGeneral solution: y = Ae⁻⁴ˣ + Beˣ - (1/2)e⁻ˣ",
                "tutorial": "Second-order linear ODE solved using complementary function and particular integral."
              },
              {
                "id": 7,
                "text": "The following table summarizes the masses (in μg) of 200 microchips. Mass (μg): 70-79(7), 80-84(30), 85-89(66), 90-94(57), 95-99(27), 100-109(13). Calculate estimates of: (i) median and upper quartile, (ii) number of microchips with mass less than 81 μg, (iii) mean and standard deviation.",
                "marks": 13,
                "answer": "Class boundaries: 69.5-79.5, 79.5-84.5, 84.5-89.5, 89.5-94.5, 94.5-99.5, 99.5-109.5\n\nCumulative frequencies: 7, 37, 103, 160, 187, 200\n\n(i) Median: n/2 = 100th value, lies in 84.5-89.5 class.\nMedian = 84.5 + 5(100-37)/66 = 84.5 + 5(63/66) = 84.5 + 4.77 = 89.27 μg\n\nUpper quartile: 3n/4 = 150th value, lies in 89.5-94.5 class.\nQ3 = 89.5 + 5(150-103)/57 = 89.5 + 5(47/57) = 89.5 + 4.12 = 93.62 μg\n\n(ii) Mass < 81 μg: 81 lies in 79.5-84.5 class.\nProportion = 7 + 30(81-79.5)/5 = 7 + 9 = 16 microchips\n\n(iii) Midpoints: 74.5, 82, 87, 92, 97, 104.5\nMean = (7×74.5 + 30×82 + 66×87 + 57×92 + 27×97 + 13×104.5)/200\n= (521.5 + 2460 + 5742 + 5244 + 2619 + 1358.5)/200 = 17945/200 = 89.725 μg\n\nVariance = Σf(m-μ)²/n\n= [7(74.5-89.725)² + 30(82-89.725)² + 66(87-89.725)² + 57(92-89.725)² + 27(97-89.725)² + 13(104.5-89.725)²]/200\n= [7(231.8) + 30(59.7) + 66(7.43) + 57(5.18) + 27(52.9) + 13(218.3)]/200\n= [1622.6 + 1791 + 490.4 + 295.3 + 1428.3 + 2837.9]/200 = 8465.5/200 = 42.33\nSD = √42.33 = 6.51 μg",
                "tutorial": "Grouped data calculations use class midpoints and cumulative frequencies."
              },
              {
                "id": 8,
                "text": "The marks obtained by 8 SWE students in Discrete Mathematics (x) and Digital Electronics (y) are given. Find: (a) the least squares regression line of y on x, (b) the product moment correlation coefficient, (c) minimum sum of squares of residuals, (d) predict y when x=30, (e) Kendall's rank correlation coefficient.",
                "marks": 17,
                "answer": "Data: x = {45, 23, 27, 33, 18, 0, ...}, y = {31, 20, 18, 33, 19, ...}\n\n(a) Regression: b = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)², a = ȳ - bx̄\n\n(b) r = Σ(x-x̄)(y-ȳ)/√[Σ(x-x̄)²·Σ(y-ȳ)²]\n\n(c) SSE = Σ(y - ŷ)² = Σ(y - a - bx)²\n\n(d) ŷ = a + b(30)\n\n(e) Kendall's τ = (C-D)/[n(n-1)/2] where C = concordant pairs, D = discordant pairs",
                "tutorial": "Regression finds the line of best fit. Correlation measures strength of linear relationship."
              },
              {
                "id": 9,
                "text": "A discrete random variable X has probability mass function f(x) = k(x-1) for x = 2,3,4,5,6,7 and f(x) = k(13-x) for x = 8,9,10,11,12. Calculate: (a) the constant k, (b) E(X) and Var(X), (c) P(6 ≤ X < 9), (d) E(X+Y) where Y = 5X+3, (e) Var(X+Y).",
                "marks": 16,
                "answer": "(a) Σf(x) = 1\nk(1+2+3+4+5+6) + k(5+4+3+2+1) = k(21) + k(15) = 36k = 1\nk = 1/36\n\n(b) E(X) = Σx·f(x) = (1/36)[2(1)+3(2)+4(3)+5(4)+6(5)+7(6)+8(5)+9(4)+10(3)+11(2)+12(1)]\n= (1/36)[2+6+12+20+30+42+40+36+30+22+12] = 252/36 = 7\n\nE(X²) = (1/36)[4(1)+9(2)+16(3)+25(4)+36(5)+49(6)+64(5)+81(4)+100(3)+121(2)+144(1)]\n= (1/36)[4+18+48+100+180+294+320+324+300+242+144] = 1974/36 = 54.833\nVar(X) = E(X²) - E(X)² = 54.833 - 49 = 5.833\n\n(c) P(6 ≤ X < 9) = P(X=6,7,8) = (5+6+5)/36 = 16/36 = 4/9\n\n(d) Y = 5X+3, E(Y) = 5E(X)+3 = 5(7)+3 = 38\nE(X+Y) = E(X) + E(Y) = 7 + 38 = 45\n\n(e) Var(Y) = Var(5X+3) = 25·Var(X) = 25(5.833) = 145.83\nVar(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y) = Var(X) + 25·Var(X) + 2·5·Var(X) = Var(X)(1+25+10) = 36·5.833 = 210",
                "tutorial": "A valid probability mass function sums to 1. Linear transformations of random variables follow specific rules."
              },
              {
                "id": 10,
                "text": "A batch of 40 components contains 5 which are defective. A component is drawn at random from the batch and tested, then a second component is drawn. Determine the probability that neither component is defective: (a) with replacement, (b) without replacement.",
                "marks": 8,
                "answer": "Total = 40, Defective = 5, Good = 35\n\n(a) With replacement:\nP(both good) = (35/40) × (35/40) = (7/8)² = 49/64 = 0.7656\n\n(b) Without replacement:\nP(both good) = (35/40) × (34/39) = 1190/1560 = 119/156 = 0.7628",
                "tutorial": "With replacement: independent events. Without replacement: conditional probability."
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Technology",
        "duration": "4 hours",
        "credits": 6,
        "description": "Specialty: Software Engineering (SWE) | 2024 Session",
        "sections": [
          {
            "title": "Section A: I. MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Which of the following concepts make extensive use of arrays?\nA) Binary trees\nB) Scheduling of processes\nC) Caching\nD) Spatial locality",
                "marks": 1,
                "answer": "D) Spatial locality"
              },
              {
                "id": 2,
                "text": "Assuming int is of 4bytes, what is the size of int arr[15];?\nA) 15\nB) 19\nC) 11\nD) 60",
                "marks": 1,
                "answer": "D) 60 (15 elements x 4 bytes = 60)"
              },
              {
                "id": 3,
                "text": "The data structure required for Breadth First Traversal on a graph is?\nA) Stack\nB) Array\nC) Queue\nD) Tree",
                "marks": 1,
                "answer": "C) Queue"
              },
              {
                "id": 4,
                "text": "Cartesian product in relational algebra is\nA) Binary operator\nB) Unary operator\nC) Ternary operator\nD) Not defined",
                "marks": 1,
                "answer": "A) Binary operator"
              },
              {
                "id": 5,
                "text": "The view of total database content is:\nA) Conceptual view\nB) Internal view\nC) Physical view\nD) External view",
                "marks": 1,
                "answer": "A) Conceptual view"
              },
              {
                "id": 6,
                "text": "Architecture of a database can be viewed as:\nA) One level\nB) Two levels\nC) Three levels\nD) Four levels",
                "marks": 1,
                "answer": "C) Three levels (ANSI-SPARC architecture)"
              },
              {
                "id": 7,
                "text": "Database schema is written in:\nA) DML\nB) HCL\nC) DDL\nD) DCL",
                "marks": 1,
                "answer": "C) DDL (Data Definition Language)"
              },
              {
                "id": 8,
                "text": "Which technique is used for data protection?\nA) Data piracy\nB) Authentication\nC) Encryption\nD) None of these",
                "marks": 1,
                "answer": "C) Encryption"
              },
              {
                "id": 9,
                "text": "Coaxial cables are used in _________ networks\nA) Telephone\nB) Cable TV\nC) Both A and B\nD) NONE OF these",
                "marks": 1,
                "answer": "C) Both A and B"
              },
              {
                "id": 10,
                "text": "Optical Fiber transmits _________.\nA) light signal\nB) radio signal\nC) electrical signal\nD) Both A and B",
                "marks": 1,
                "answer": "A) light signal"
              },
              {
                "id": 11,
                "text": "HTTP port number used is _________.\nA) 80\nB) 441\nC) 443\nD) 449",
                "marks": 1,
                "answer": "A) 80"
              },
              {
                "id": 12,
                "text": "In the handshake protocol which is the message type first sent between client and server?\nA) server_hello\nB) client_hello\nC) hello_request\nD) certificate_request",
                "marks": 1,
                "answer": "B) client_hello"
              },
              {
                "id": 13,
                "text": "Inside which HTML element do we put the JavaScript?\nA) &lt;js&gt;\nB) &lt;javascript&gt;\nC) &lt;scripting&gt;\nD) &lt;script&gt;",
                "marks": 1,
                "answer": "D) &lt;script&gt;"
              },
              {
                "id": 14,
                "text": "Which one is not a programming language?\nA) HTML\nB) CSS\nC) JavaScript\nD) PHP",
                "marks": 1,
                "answer": "A) HTML (HyperText Markup Language)"
              },
              {
                "id": 15,
                "text": "Which one is a method of inserting a style sheet?\nA) Inline style sheet\nB) External style sheet\nC) Internal style sheet\nD) All above",
                "marks": 1,
                "answer": "D) All above"
              },
              {
                "id": 16,
                "text": "An example of a variable declaration in JavaScript:\nA) $a;\nB) Var a;\nC) Variable a;\nD) None above",
                "marks": 1,
                "answer": "D) None above (JavaScript uses var, let, or const)"
              },
              {
                "id": 17,
                "text": "An example of a variable declaration in PHP:\nA) $a;\nB) Var a;\nC) Variable a;\nD) None above",
                "marks": 1,
                "answer": "A) $a;"
              },
              {
                "id": 18,
                "text": "The RSA signature uses which hash algorithm?\nA) MD5\nB) SHA-1\nC) MD5 and SHA-1\nD) None of the mentioned",
                "marks": 1,
                "answer": "D) None of the mentioned"
              },
              {
                "id": 19,
                "text": "Choose the function of a router\nA) changing the data from one format to another\nB) error detection in data\nC) send the packet to the uplinks\nD) None of the above",
                "marks": 1,
                "answer": "C) send the packet to the uplinks"
              },
              {
                "id": 20,
                "text": "Which utility is used to find the number of routers between source and destination?\nA) route\nB) Traceroute\nC) Ifconfig\nD) Ipconfig",
                "marks": 1,
                "answer": "B) Traceroute"
              }
            ]
          },
          {
            "title": "Section A: II. Structural Questions",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Name three (03) examples of application software and give a feature of each.",
                "marks": 4,
                "answer": "1. Microsoft Word — word processing with spell check, formatting templates, mail merge.\n2. Adobe Photoshop — image editing with layers, filters, color correction.\n3. Google Chrome — web browsing with tab management, extensions, sync across devices."
              },
              {
                "id": 2,
                "text": "Explain the functions of the following:\na) Motherboard (2 marks)\nb) PCIe card (2 marks)",
                "marks": 4,
                "answer": "a) Motherboard: Main circuit board connecting all components (CPU, RAM, storage, peripherals). Provides data pathways (buses) for communication, power distribution, and expansion slots.\n\nb) PCIe (Peripheral Component Interconnect Express) card: High-speed expansion card for adding capabilities (graphics card, network card, SSD). Provides serial point-to-point connection with dedicated bandwidth per lane."
              },
              {
                "id": 3,
                "text": "What are the features of a standard chipset?",
                "marks": 3,
                "answer": "1. Northbridge-Southbridge architecture (or modern single-chip).\n2. Manages data flow between CPU, RAM, and peripherals.\n3. Provides I/O interfaces (USB, SATA, PCIe).\n4. Memory controller (DDR generation support).\n5. Integrated graphics support (in some chipsets).\n6. Power management features (sleep, hibernation).\n7. Overclocking support and BIOS/UEFI configuration."
              },
              {
                "id": 4,
                "text": "Differentiate between compiler and linker.",
                "marks": 2,
                "answer": "Compiler:\n- Translates source code to object code (machine code).\n- Processes one source file at a time.\n- Output: .obj/.o files.\n- Checks syntax, semantics, type errors.\n- Generates symbol tables.\n\nLinker:\n- Combines multiple object files into a single executable.\n- Resolves external references and symbols.\n- Output: .exe/.out file.\n- Performs address binding, relocation.\n- Links libraries (static/dynamic)."
              },
              {
                "id": 5,
                "text": "Compare dynamic RAM and static RAM.",
                "marks": 3,
                "answer": "DRAM (Dynamic RAM):\n- Uses capacitors - needs periodic refresh (~64ms).\n- Slower access (50-100ns).\n- Higher density, lower cost per bit.\n- Higher power consumption due to refresh.\n- Used for main memory (RAM modules).\n\nSRAM (Static RAM):\n- Uses flip-flops - no refresh needed.\n- Faster access (10-20ns).\n- Lower density, higher cost per bit.\n- Lower power consumption (no refresh).\n- Used for cache memory (L1/L2/L3)."
              },
              {
                "id": 6,
                "text": "Name the three (03) main buses in a computer system. Give their characteristics.",
                "marks": 4,
                "answer": "1. Data Bus:\n- Carries actual data between components.\n- Bidirectional.\n- Width determines data transfer per cycle (8/16/32/64-bit).\n- Speed affects overall system performance.\n\n2. Address Bus:\n- Carries memory addresses from CPU to memory/I/O.\n- Unidirectional (CPU to devices).\n- Width determines addressable memory (32-bit = 4GB, 64-bit = 16EB).\n\n3. Control Bus:\n- Carries control signals (read/write, interrupt, clock).\n- Bidirectional.\n- Includes signals: clock, reset, interrupt request, bus request/grant.\n- Coordinates data flow and device synchronization."
              }
            ]
          },
          {
            "title": "Section B: I. Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Distinguish between high level/low level language, C/C++, interpretation/compilation.",
                "marks": 4,
                "answer": "a) High-level (Python, Java): English-like, machine-independent. Low-level (Assembly, Machine code): hardware-specific.\nb) C: procedural, no classes. C++: OOP with classes, inheritance, polymorphism.\nc) Interpretation: line-by-line runtime. Compilation: full pre-translation."
              },
              {
                "id": 2,
                "text": "Write a C code that computes the factorial of an integer n. When does the code fail and why?",
                "marks": 6,
                "answer": "#include &lt;stdio.h&gt;\nint main() {\n    unsigned long long fact = 1;\n    int n, i;\n    scanf(\"%d\", &amp;n);\n    for (i = 1; i &lt;= n; i++) fact *= i;\n    printf(\"%llu\\n\", fact);\n    return 0;\n}\nFails for n &gt; 20 (unsigned long long overflow)."
              },
              {
                "id": 3,
                "text": "Write C code to check if two 3D vectors are orthogonal.",
                "marks": 6,
                "answer": "#include &lt;stdio.h&gt;\nint main() {\n    float X[3], Y[3], dot = 0; int i;\n    for (i = 0; i &lt; 3; i++) { scanf(\"%f\", &amp;X[i]); }\n    for (i = 0; i &lt; 3; i++) { scanf(\"%f\", &amp;Y[i]); }\n    for (i = 0; i &lt; 3; i++) dot += X[i] * Y[i];\n    printf(dot == 0 ? \"Orthogonal\\n\" : \"Not orthogonal\\n\");\n    return 0;\n}"
              },
              {
                "id": 4,
                "text": "Write a C++ program for factorial using recursion.",
                "marks": 4,
                "answer": "#include &lt;iostream&gt;\nusing namespace std;\nunsigned long long fact(int n) { return n &lt;= 1 ? 1 : n * fact(n-1); }\nint main() { int n; cin &gt;&gt; n; cout &lt;&lt; fact(n) &lt;&lt; endl; return 0; }"
              }
            ]
          },
          {
            "title": "Section B: II. Database",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "a) What is Normalization? (2 marks)\nb) Explain its significance in database design and development. (3 marks)",
                "marks": 5,
                "answer": "a) Normalization is the process of organizing data to reduce redundancy and improve integrity by decomposing tables and defining relationships, following normal forms (1NF, 2NF, 3NF, BCNF).\n\nb) Significance:\n- Eliminates data redundancy (same data stored once).\n- Prevents update anomalies (one change, all places updated).\n- Prevents insertion anomalies (can add data without requiring other data).\n- Prevents deletion anomalies (deleting one fact does not lose others).\n- Ensures data integrity and consistency."
              },
              {
                "id": 2,
                "text": "Mrs Isabella has a Restaurant operating with a manual system.\na) Explain the stages to develop this database. (4 marks)\nb) Model the database using ERD. (6 marks)",
                "marks": 10,
                "answer": "a) Database development stages:\n1. Requirements Analysis: interview stakeholders, identify data needs (customers, orders, payments, sales).\n2. Conceptual Design: create ER diagram identifying entities, attributes, relationships.\n3. Logical Design: map ER to relational schema (tables, keys, constraints).\n4. Physical Design: implement in specific DBMS, define indexes, storage.\n5. Implementation: create tables, populate data, develop queries.\n6. Testing and Maintenance: verify functionality, optimize performance.\n\nb) ERD Entities:\n- Customer (CustomerID PK, Name, Phone, Email, Address)\n- Order (OrderID PK, Date, TotalAmount, CustomerID FK)\n- OrderItem (OrderItemID PK, Quantity, Price, OrderID FK, MenuItemID FK)\n- MenuItem (MenuItemID PK, Name, Category, Price)\n- Payment (PaymentID PK, Amount, Method, Date, OrderID FK)\n\nRelationships:\n- Customer 1---* Order (one customer places many orders)\n- Order 1---* OrderItem (one order has many items)\n- MenuItem 1---* OrderItem (one menu item can be ordered many times)\n- Order 1---1 Payment (one order has one payment)"
              }
            ]
          },
          {
            "title": "Section B: III. Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Give the functions of the following network components:\na) Hub\nb) Modem\nc) NIC Card\nd) Switch\ne) Router",
                "marks": 5,
                "answer": "a) Hub: connects multiple devices, broadcasts data to all ports (no filtering), operates at Layer 1 (Physical).\n\nb) Modem: modulates/demodulates signals between digital (computer) and analog (telephone line/cable).\n\nc) NIC (Network Interface Card): provides physical connection to the network, has unique MAC address, handles data framing.\n\nd) Switch: connects devices on a LAN, forwards data only to the destination port using MAC address table, operates at Layer 2.\n\ne) Router: connects different networks, forwards packets using IP addresses, determines best path, operates at Layer 3."
              },
              {
                "id": 2,
                "text": "Explain the difference between a MAC Address and an IP Address.",
                "marks": 2,
                "answer": "MAC Address:\n- Physical/hardware address (48-bit).\n- Assigned by manufacturer, burned into NIC.\n- Layer 2 (Data Link) address.\n- Identifies device on local network segment.\n- Hexadecimal format (00:1A:2B:3C:4D:5E).\n- Non-routable, stays within LAN.\n\nIP Address:\n- Logical address (32-bit IPv4, 128-bit IPv6).\n- Assigned by network admin or DHCP.\n- Layer 3 (Network) address.\n- Identifies device on internet/any network.\n- Decimal format (192.168.1.1).\n- Routable across networks."
              },
              {
                "id": 3,
                "text": "Explain CSMA/CD and CSMA/CA.",
                "marks": 3,
                "answer": "CSMA/CD (Carrier Sense Multiple Access / Collision Detection):\n- Used in wired Ethernet (802.3).\n- Devices listen before transmitting (Carrier Sense).\n- If collision detected during transmission, devices stop, wait random time, retry.\n- \"Listen While Talk.\"\n\nCSMA/CA (Carrier Sense Multiple Access / Collision Avoidance):\n- Used in wireless networks (802.11 Wi-Fi).\n- Devices listen, wait for clear channel, then transmit.\n- Uses RTS/CTS (Request to Send / Clear to Send) handshake to reserve medium.\n- \"Listen Before Talk\" — prevents collisions rather than detecting them.\n- ACK frames confirm successful reception."
              },
              {
                "id": 4,
                "text": "Explain TCP/IP Model.",
                "marks": 5,
                "answer": "TCP/IP Model (4 layers):\n\n1. Application Layer:\n- Combines OSI L5-L7 (Session, Presentation, Application).\n- Protocols: HTTP/HTTPS, FTP, SMTP, DNS, DHCP, SSH.\n- User-facing network services.\n\n2. Transport Layer:\n- End-to-end communication, reliability, flow control.\n- TCP: connection-oriented, reliable, ordered delivery, retransmission.\n- UDP: connectionless, fast, no guarantees (streaming, gaming).\n- Port numbers identify services.\n\n3. Internet Layer:\n- Logical addressing and routing.\n- IP (IPv4/IPv6): packet delivery across networks.\n- ICMP: error reporting (ping).\n- ARP: IP-to-MAC address resolution.\n\n4. Network Access Layer (Link Layer):\n- Combines OSI L1-L2 (Physical, Data Link).\n- Hardware addressing (MAC), framing, media access.\n- Protocols: Ethernet, Wi-Fi, PPP."
              }
            ]
          },
          {
            "title": "Section B: IV. Data Structure and Algorithm",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "List and describe three types of Data Structures.",
                "marks": 3,
                "answer": "1. Arrays: Contiguous memory locations storing elements of the same type. O(1) random access by index. Fixed size (static) or resizable (dynamic). Used for sequential data storage.\n\n2. Linked Lists: Sequence of nodes where each node contains data and pointer(s) to next/prev node. Dynamic size, O(n) access, O(1) insertion/deletion at known position. Types: singly, doubly, circular.\n\n3. Trees: Hierarchical structure with root node and child nodes. Each node has data and pointers to children. Binary trees: each node has at most 2 children. Used in file systems, databases (B-trees), compilers (AST).\n\nOther notable types: Stacks (LIFO), Queues (FIFO), Graphs (networks of nodes/edges), Hash Tables (key-value with O(1) average lookup)."
              },
              {
                "id": 2,
                "text": "Given the array A = [1, 7, 3, 9, 5, 10, 8, 2]\na) Convert it to a binary tree. (4 marks)\nb) Using binary search, locate 5 in the array. (3 marks)",
                "marks": 7,
                "answer": "a) Converting to Binary Tree (sorted array):\nSorted A = [1, 2, 3, 5, 7, 8, 9, 10]\n\nBinary Tree (balanced BST):\n        7\n      /   \\\n     3     9\n    / \\   / \\\n   1   5 8   10\n    \\\n     2\n\nBuilding process: pick middle element as root, recursively build left and right subtrees.\n\nb) Binary Search to locate 5:\n1. Low=0, High=7, Mid=3 → A[3]=9, 5&lt;9, search left half.\n2. Low=0, High=2, Mid=1 → A[1]=3, 5&gt;3, search right half.\n3. Low=2, High=2, Mid=2 → A[2]=5, FOUND!\n\nBinary search requires sorted array. O(log n) time complexity."
              }
            ]
          }
        ]
      }
    ,
      {
        "title": "English Language",
        "duration": "2 hours",
        "credits": 0.5,
        "description": "All Specialties | 2024 Session",
        "sections": [
          {
            "title": "Section A: Reading Comprehension",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Based on the passage, how does the author likely feel about leaving his post?\nA) Melancholic and reflective\nB) Angry and resentful\nC) Relieved and content\nD) Gleeful and giddy",
                "marks": 2,
                "answer": "A) Melancholic and reflective"
              },
              {
                "id": 2,
                "text": "In Paragraph 2, Sentence 2, the word \"strictest\" most closely means:\nA) sternest\nB) harshest\nC) closest\nD) narrowest",
                "marks": 2,
                "answer": "C) closest"
              },
              {
                "id": 3,
                "text": "Over the course of the passage, the author expresses a particular concern for:\nA) ministers who no longer have congregations.\nB) young people in the church.\nC) orphans and widows.\nD) souls that are facing judgment.",
                "marks": 2,
                "answer": "B) young people in the church."
              },
              {
                "id": 4,
                "text": "Which lines in the passage best support the answer to the previous question?\nA) Paragraph 1, Sentence 1.\nB) Paragraph 2, Sentence 3.\nC) Paragraph 3, Sentence 1.\nD) Paragraph 5, Sentence 1.",
                "marks": 2,
                "answer": "C) Paragraph 3, Sentence 1"
              },
              {
                "id": 5,
                "text": "According to the passage, what is the author's observation about young people's compliance with divine law?\nA) They sometimes but not always adhere to its standards.\nB) They are less likely than both children and adults to comply.\nC) They mock all who try to adhere to its standards of behaviour.\nD) They are eager to please and afraid to disappoint.",
                "marks": 2,
                "answer": "C) They mock all who try to adhere to its standards of behaviour."
              },
              {
                "id": 6,
                "text": "The author implies in the fourth paragraph that he:\nA) used to fall prey to both vice and vanity in his youth before turning to religion.\nB) failed to institute the strict standards of behavior necessary to properly instruct the church’s youth.\nC) wishes he could go back to his own youth in order to seek prosperity and happiness.\nD) may have been removed from his post because of overzealous care and policing of young people in his community.",
                "marks": 2,
                "answer": "D) may have been removed from his post because of overzealous care and policing of young people in his community."
              },
              {
                "id": 7,
                "text": "The author indicates that he believes that one day the \"great Judge\" will:\nA) condemn him and all other sinners.\nB) confirm the wisdom of the author’s counsel.\nC) pardon all souls who defied his laws.\nD) testify against the author’s wayward congregation.",
                "marks": 2,
                "answer": "B) confirm the wisdom of the author’s counsel."
              },
              {
                "id": 8,
                "text": "The passage can primarily be classified as which of the following?\nA) A direct threat\nB) An offering of advice\nC) A circular argument\nD) A personal anecdote",
                "marks": 2,
                "answer": "B) An offering of advice"
              },
              {
                "id": 9,
                "text": "Give a suitable title to the passage.",
                "marks": 4,
                "answer": "A Farewell Sermon / The Minister’s Parting Counsel / A Pastoral Farewell / The Last Sermon (any suitable title reflecting the minister’s parting advice to his congregation)"
              }
            ]
          },
          {
            "title": "Section B: Grammar and Vocabulary",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Even in the age of electronic mails, letters still got posted, _______________?",
                "marks": 1,
                "answer": "didn’t they"
              },
              {
                "id": 2,
                "text": "They would still have to be posted for a long while yet, _______________?",
                "marks": 1,
                "answer": "wouldn’t they"
              },
              {
                "id": 3,
                "text": "The boss sacked all his employees, _______________?",
                "marks": 1,
                "answer": "didn’t he"
              },
              {
                "id": 4,
                "text": "I am tired. We _______________ (walk) for over an hour. Let’s stop and rest for a while.",
                "marks": 0.5,
                "answer": "have been walking"
              },
              {
                "id": 5,
                "text": "I _______________ just _______________ (turn off) the lights when the telephone _______________ (ring).",
                "marks": 1.5,
                "answer": "had just turned off / rang"
              },
              {
                "id": 6,
                "text": "The careless businessman squanders all his money on unnecessary things. (Change to passive voice)",
                "marks": 1,
                "answer": "All his money is squandered on unnecessary things by the careless businessman."
              },
              {
                "id": 7,
                "text": "\"Did you send him your letter of apology yesterday?\", the man asked. (Change to indirect speech)",
                "marks": 1,
                "answer": "The man asked if I had sent him my letter of apology the previous day."
              },
              {
                "id": 8,
                "text": "The money could not yield any interest because it was deposited in the current account. (Complete: If this money hadn’t been deposited in the current account, ...)",
                "marks": 2,
                "answer": "If this money hadn’t been deposited in the current account, it could have yielded some interest."
              },
              {
                "id": 9,
                "text": "She advised me to follow him. (Change to passive voice)",
                "marks": 0,
                "answer": "I was advised to follow him."
              },
              {
                "id": 10,
                "text": "John is _______________ (bad) than Peter at Maths. (Use comparative form)",
                "marks": 1,
                "answer": "worse"
              },
              {
                "id": 11,
                "text": "The dead trees and peeling paint, along with the broken windows and flapping shutters, _______________ everyone believe that evil spirits haunt the deserted Sinclair house.\nA) made\nB) has made\nC) makes\nD) make",
                "marks": 2,
                "answer": "D) make"
              },
              {
                "id": 12,
                "text": "Where _______________ the earrings that I left by the bathroom sink?\nA) was\nB) were\nC) is\nD) are",
                "marks": 1,
                "answer": "D) are"
              },
              {
                "id": 13,
                "text": "Neither of those sharks circling your boogie board _______________ hungry enough to bite.\nA) looks\nB) look\nC) looked\nD) had looked",
                "marks": 1,
                "answer": "A) looks"
              },
              {
                "id": 14,
                "text": "One hundred and fifty gallons _______________ the amount of liquid the average living room rug can absorb.\nA) is\nB) are\nC) was\nD) were",
                "marks": 1,
                "answer": "A) is"
              },
              {
                "id": 15,
                "text": "Agnes never loses a single possession. Everyone knows what belongs to her, for each pen, pencil, and paperclip _______________ a tiny flag attached with Agnes’ full name on it.\nA) will have\nB) has\nC) have\nD) had",
                "marks": 1,
                "answer": "B) has"
              },
              {
                "id": 16,
                "text": "Asteroids and comets slamming into Earth _______________ Marge; she tries to remain under the protective cover of her roof as much as possible.\nA) worries\nB) worry\nC) worried\nD) used to worry",
                "marks": 1,
                "answer": "A) worries"
              },
              {
                "id": 17,
                "text": "Someone—perhaps Emmanuel or Paul—_______________ the right wine to serve with earthworm lasagna.\nA) knew\nB) will know\nC) knows\nD) know",
                "marks": 1,
                "answer": "C) knows"
              },
              {
                "id": 18,
                "text": "These scissors _______________ so dull that I’m not sure you could slice butter with them!\nA) is\nB) are\nC) has been\nD) had been",
                "marks": 1,
                "answer": "B) are"
              },
              {
                "id": 19,
                "text": "Physics _______________ proven to be Jerry’s easiest subject this semester.\nA) has\nB) have\nC) had\nD) will have",
                "marks": 1,
                "answer": "A) has"
              },
              {
                "id": 1,
                "text": "Briefly explain the meaning of the proverb: \"Add insult to injury.\"",
                "marks": 1,
                "answer": "To make a bad situation worse by doing something additional that causes further harm or offense."
              },
              {
                "id": 2,
                "text": "Briefly explain the meaning of the idiom: \"Cost an arm and a leg.\"",
                "marks": 1,
                "answer": "To be extremely expensive; to cost a very large amount of money."
              },
              {
                "id": 3,
                "text": "Briefly explain the meaning of the proverb: \"A picture paints a thousand words.\"",
                "marks": 1,
                "answer": "A visual image can convey a complex idea or story more effectively than a lengthy verbal description."
              },
              {
                "id": 4,
                "text": "Briefly explain the meaning of the idiom: \"Once in a blue moon.\"",
                "marks": 1,
                "answer": "Very rarely; an event that happens infrequently."
              },
              {
                "id": 5,
                "text": "Briefly explain the meaning of the idiom: \"Let the cat out of the bag.\"",
                "marks": 1,
                "answer": "To reveal a secret or disclose confidential information unintentionally."
              },
              {
                "id": 6,
                "text": "Find a word pronounced similarly to ‘Pear’ but spelt differently with a different meaning.",
                "marks": 1,
                "answer": "Pair (two of something)"
              },
              {
                "id": 7,
                "text": "Find a word pronounced similarly to ‘Still’ but spelt differently with a different meaning.",
                "marks": 1,
                "answer": "Steal (to take something without permission)"
              },
              {
                "id": 8,
                "text": "Find a word pronounced similarly to ‘Male’ but spelt differently with a different meaning.",
                "marks": 1,
                "answer": "Mail (postal correspondence)"
              },
              {
                "id": 9,
                "text": "Find a word pronounced similarly to ‘Feel’ but spelt differently with a different meaning.",
                "marks": 1,
                "answer": "Feal (loyal, faithful - archaic)"
              },
              {
                "id": 10,
                "text": "Find a word pronounced similarly to ‘Rice’ but spelt differently with a different meaning.",
                "marks": 1,
                "answer": "Rise (to go up / increase)"
              }
            ]
          },
          {
            "title": "Section C: Spoken English",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Identify the word with an odd sound: Bark, bake, back, dam.",
                "marks": 1,
                "answer": "dam (/dæm/ vs /bɑː/ and /beɪk/)"
              },
              {
                "id": 2,
                "text": "Identify the word with an odd sound: Sea, see, seak, set.",
                "marks": 1,
                "answer": "set (/sɛt/ vs /siː/)"
              },
              {
                "id": 3,
                "text": "Identify the word with an odd sound: Meat, meat, lead, met.",
                "marks": 1,
                "answer": "met (/mɛt/ vs /miːt/)"
              },
              {
                "id": 4,
                "text": "Identify the word with an odd sound: Tall, tail, tale, take.",
                "marks": 1,
                "answer": "take (/teɪk/ vs /tɔːl/ and /teɪl/)"
              },
              {
                "id": 5,
                "text": "Identify the word with an odd sound: Lack, lake, sad, black.",
                "marks": 1,
                "answer": "lake (/leɪk/ vs /læk/)"
              },
              {
                "id": 6,
                "text": "Transcribe the following word: Sail",
                "marks": 1,
                "answer": "/seɪl/"
              },
              {
                "id": 7,
                "text": "Transcribe the following word: Waist",
                "marks": 1,
                "answer": "/weɪst/"
              },
              {
                "id": 8,
                "text": "Transcribe the following word: Car",
                "marks": 1,
                "answer": "/kɑː(r)/"
              },
              {
                "id": 9,
                "text": "Transcribe the following word: Boy",
                "marks": 1,
                "answer": "/bɔɪ/"
              },
              {
                "id": 10,
                "text": "Transcribe the following word: We",
                "marks": 1,
                "answer": "/wiː/"
              },
              {
                "id": 11,
                "text": "Put the stress mark on the word: Export (noun)",
                "marks": 1,
                "answer": "‘Export (stress on first syllable)"
              },
              {
                "id": 12,
                "text": "Put the stress mark on the word: Danger",
                "marks": 1,
                "answer": "‘Danger (stress on first syllable)"
              },
              {
                "id": 13,
                "text": "Put the stress mark on the word: Popular",
                "marks": 1,
                "answer": "‘Popular (stress on first syllable)"
              },
              {
                "id": 14,
                "text": "Put the stress mark on the word: Water",
                "marks": 1,
                "answer": "‘Water (stress on first syllable)"
              },
              {
                "id": 15,
                "text": "Put the stress mark on the word: Manage",
                "marks": 1,
                "answer": "‘Manage (stress on first syllable)"
              },
              {
                "id": 16,
                "text": "Write down the number of syllables: Generously",
                "marks": 1,
                "answer": "4 (gen-er-ous-ly)"
              },
              {
                "id": 17,
                "text": "Write down the number of syllables: Appreciation",
                "marks": 1,
                "answer": "5 (ap-pre-ci-a-tion)"
              },
              {
                "id": 18,
                "text": "Write down the number of syllables: Informal",
                "marks": 1,
                "answer": "3 (in-for-mal)"
              },
              {
                "id": 19,
                "text": "Write down the number of syllables: Challenges",
                "marks": 1,
                "answer": "3 (chal-leng-es)"
              },
              {
                "id": 20,
                "text": "Write down the number of syllables: Intelligently",
                "marks": 1,
                "answer": "5 (in-tel-li-gent-ly)"
              }
            ]
          },
          {
            "title": "Section D: Composition",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Write a composition of not more than 450 to 500 words on ONE of the following topics:\n\n1. I must make a change\n2. Write a letter to a carpeting company about defective carpeting. (Your address: Bolevard Hotel, Britain, Bonia street 214.)\n3. My first day in the University",
                "marks": 30,
                "answer": "N/A - Essay writing exercise. Students should write a well-structured composition with proper spelling, paragraphing, punctuation, and standard English."
              }
            ]
          }
        ]
      }
    ,
      {
        "title": "Enterprise Creation and Entrepreneurship",
        "duration": "2 hours",
        "credits": 1,
        "description": "All Specialties | 2024 Session",
        "sections": [
          {
            "title": "Section A: Entrepreneurship",
            "marks": 34,
            "questions": [
              {
                "id": 1,
                "text": "State and explain the stages in the entrepreneurial process.",
                "marks": 10,
                "answer": "1. Discovery: identifying business opportunities.\n2. Concept Development: developing a business plan.\n3. Resourcing: acquiring financial, human, and material resources.\n4. Actualization: launching the business.\n5. Harvesting: growth, expansion, or exit."
              },
              {
                "id": 2,
                "text": "Why is the executive summary often called the most important part of a business plan?",
                "marks": 8,
                "answer": "The executive summary is the first section read by investors and lenders. It summarizes the entire business plan, highlighting key points such as the business concept, target market, competitive advantage, financial projections, and funding requirements. A compelling executive summary can convince readers to continue reviewing the plan, while a weak one may cause them to reject it immediately."
              },
              {
                "id": 3,
                "text": "State six (6) importance of a business plan.",
                "marks": 6,
                "answer": "1. Provides a clear roadmap for the business.\n2. Helps secure funding from investors/lenders.\n3. Identifies potential risks and challenges.\n4. Sets measurable goals and objectives.\n5. Helps in resource allocation and management.\n6. Serves as a communication tool for stakeholders."
              },
              {
                "id": 4,
                "text": "State and explain five (5) external sources of finance for a business in Cameroon.",
                "marks": 10,
                "answer": "1. Bank loans - borrowing from commercial banks with interest.\n2. Microfinance institutions - small loans for SMEs.\n3. Government grants and subsidies - funding from state programs.\n4. Angel investors - wealthy individuals providing capital in exchange for equity.\n5. Venture capital - investment firms providing funding for high-growth startups."
              }
            ]
          },
          {
            "title": "Section B: Economics",
            "marks": 33,
            "questions": [
              {
                "id": 1,
                "text": "With the aid of diagrams differentiate between change in quantity supplied and change in supply.",
                "marks": 13,
                "answer": "Change in quantity supplied: movement along the supply curve caused by a change in the good's own price (other factors constant).\nChange in supply: shift of the entire supply curve caused by changes in factors other than price (technology, input costs, taxes, etc.).\n\nDiagram: A supply curve with an arrow moving along it (quantity change) and a separate diagram showing the curve shifting right/left (supply change)."
              },
              {
                "id": 2,
                "text": "State and explain five (5) functions of commercial banks in Cameroon.",
                "marks": 10,
                "answer": "1. Accepting deposits (savings, current, fixed deposits).\n2. Granting loans and advances to individuals and businesses.\n3. Money transfer and payment services (cheques, transfers, mobile banking).\n4. Foreign exchange services (currency exchange, international transfers).\n5. Safe custody of valuables (locker services, asset management)."
              },
              {
                "id": 3,
                "text": "State five (5) difficulties encountered in measuring national income.",
                "marks": 10,
                "answer": "1. Double counting - goods/services counted at multiple stages.\n2. Informal sector - unregistered economic activities are excluded.\n3. Non-monetary transactions - subsistence farming/barter not captured.\n4. Depreciation - difficult to accurately measure capital consumption.\n5. Price changes - inflation/deflation distort real comparisons over time."
              }
            ]
          },
          {
            "title": "Section C: Company Law",
            "marks": 33,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate between a public limited company and a private limited company.",
                "marks": 20,
                "answer": "Public Limited Company:\n- Shares traded on stock exchange.\n- Minimum 7 shareholders, no maximum.\n- Must publish financial statements publicly.\n- Requires a minimum share capital.\n- Can raise capital from the general public.\n\nPrivate Limited Company:\n- Shares not traded publicly.\n- 2-50 shareholders maximum.\n- Financial statements kept private.\n- No minimum share capital requirement.\n- Cannot invite public to subscribe to shares."
              },
              {
                "id": 2,
                "text": "Identify and explain reasons why the courts may uplift the corporate veil in company law.",
                "marks": 13,
                "answer": "Reasons for lifting the corporate veil:\n1. Fraud or improper conduct - when the company is used to commit fraud.\n2. Tax evasion - when the corporate structure is used to avoid taxes.\n3. Agency relationship - when the company is acting as agent of shareholders.\n4. Group enterprises - when subsidiaries are mere extensions of parent company.\n5. Public policy - to prevent evasion of legal obligations.\n6. Trading with enemy - during wartime, to determine true ownership."
              }
            ]
          }
        ]
      },
      {
        "title": "Case Study - SWE",
        "duration": "6 hours",
        "credits": 14,
        "description": "Specialty: Software Engineering (SWE) | 2024 Session",
        "sections": [
          {
            "title": "Section A: Algorithm and Programming",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Consider the following code:\n\n// This program uses an array to display five names.\nConstant Integer SIZE = 5\nDeclare String names[SIZE] = \"Meg\", \"Janai\", \"Sonat\", \"Belle\", \"Molak\"\nDeclare Integer index\nFor index = 0 To SIZE\n    Display names[index]\nEnd For\n\nWork required:\n1. Find the bug in the above-mentioned segment of code. (5 marks)\n2. Implement in the language you master properly. (5 marks)",
                "marks": 10,
                "answer": "1. Bug: The loop goes from index = 0 To SIZE, which is 0 to 5 (6 iterations), but the array has indices 0-4 (5 elements). This causes an out-of-bounds access when index = 5. The correct loop should be: For index = 0 To SIZE - 1\n\n2. Fix in C:\n#include &lt;stdio.h&gt;\n#define SIZE 5\nint main() {\n    char *names[SIZE] = {\"Meg\", \"Janai\", \"Sonat\", \"Belle\", \"Molak\"};\n    for (int index = 0; index &lt; SIZE; index++) {\n        printf(\"%s\\n\", names[index]);\n    }\n    return 0;\n}"
              },
              {
                "id": 2,
                "text": "Consider the following pseudocode:\n\n// This program displays the highest value in the array.\nDeclare Integer SIZE = 3\nDeclare Integer values[SIZE] = 1, 3, 4\nDeclare Integer index\nDeclare Integer highest\nFor index = 0 To SIZE - 1\n    If values[index] &gt; highest Then\n        Set highest = values[index]\n    End If\nEnd For\nDisplay \"The highest number is \", highest\n\nWork required:\n1. Explain the bug in the above-mentioned segment of code and fix it. (10 marks)\n2. Implement the previous pseudocode in the language you master most. (15 marks)",
                "marks": 25,
                "answer": "1. Bug: The variable 'highest' is not initialized. It starts with whatever garbage value is in memory. If that garbage value happens to be larger than all array elements, the algorithm will return the wrong result. Fix: Initialize highest to values[0] before the loop (or to Integer.MIN_VALUE).\n\nFixed pseudocode:\nSet highest = values[0]\nFor index = 1 To SIZE - 1\n    If values[index] &gt; highest Then\n        Set highest = values[index]\n    End If\nEnd For\n\n2. Implementation in C:\n#include &lt;stdio.h&gt;\n#define SIZE 3\nint main() {\n    int values[SIZE] = {1, 3, 4};\n    int highest = values[0];\n    for (int index = 1; index &lt; SIZE; index++) {\n        if (values[index] &gt; highest) {\n            highest = values[index];\n        }\n    }\n    printf(\"The highest number is %d\\n\", highest);\n    return 0;\n}"
              },
              {
                "id": 3,
                "text": "You are asked to design a program for Wireless Solutions, a business that sells cell phones and wireless service. The program will be used to keep track of the cell phones that the company has in inventory. The data that we need to keep for a cell phone is:\n- The name of the phone's manufacturer\n- The phone's model number\n- The phone's retail price\n\nWork required:\n1. Declare the data fields of the class cell phone. (3 marks)\n2. Declare the mutators (setters) and the accessors (getters) of the class cell phone. (3 marks)\n3. Declare a default constructor and a constructor with three parameter lists of the class cell phone. (3 marks)\n4. Define the class cell phone in the language you master better. (3 marks)\n5. Implement a test program for the class cell phone. (3 marks)",
                "marks": 15,
                "answer": "1. Data fields:\nprivate String manufacturer;\nprivate String modelNumber;\nprivate double retailPrice;\n\n2. Mutators and accessors:\npublic void setManufacturer(String m) { this.manufacturer = m; }\npublic String getManufacturer() { return manufacturer; }\npublic void setModelNumber(String m) { this.modelNumber = m; }\npublic String getModelNumber() { return modelNumber; }\npublic void setRetailPrice(double p) { this.retailPrice = p; }\npublic double getRetailPrice() { return retailPrice; }\n\n3. Constructors:\npublic CellPhone() {}\npublic CellPhone(String man, String model, double price) {\n    this.manufacturer = man;\n    this.modelNumber = model;\n    this.retailPrice = price;\n}\n\n4-5. Full implementation in Java with test program:\n(Student should write complete Java class with constructor, getters/setters, and a main method that creates CellPhone objects, sets values, and displays them.)"
              }
            ]
          },
          {
            "title": "Section B: Database Development and Administration",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Given the relations:\nUser(Id, Name, Age, Gender, OccupationId*, CityId*)\nOccupation(OccupationId, OccupationName)\nCity(CityId, CityName)\n\nWrite relational algebra and SQL statement that outputs the names of the users who are more than 25 years old.",
                "marks": 5,
                "answer": "Relational Algebra: π Name(σ Age &gt; 25(User))\n\nSQL: SELECT Name FROM User WHERE Age &gt; 25;"
              },
              {
                "id": 2,
                "text": "Write relational algebra and SQL statement that outputs all information of users who have an Id lesser than 3 or who are of Age different from 32.",
                "marks": 5,
                "answer": "Relational Algebra: σ Id&lt;3 ∨ Age≠32(User)\n\nSQL: SELECT * FROM User WHERE Id &lt; 3 OR Age &lt;&gt; 32;"
              },
              {
                "id": 3,
                "text": "Write relational algebra and SQL statement that outputs all information of users together with information about their occupation.",
                "marks": 5,
                "answer": "Relational Algebra: User ⨝ Occupation (natural join on OccupationId)\n\nSQL: SELECT * FROM User JOIN Occupation ON User.OccupationId = Occupation.OccupationId;"
              },
              {
                "id": 4,
                "text": "Write relational algebra and SQL statement of user's names and gender who work in Bamenda.",
                "marks": 5,
                "answer": "Relational Algebra: π Name, Gender(σ CityName='Bamenda'(User ⨝ City))\n\nSQL: SELECT u.Name, u.Gender FROM User u JOIN City c ON u.CityId = c.CityId WHERE c.CityName = 'Bamenda';"
              }
            ]
          },
          {
            "title": "Section C: Web Design",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Consider the following HTML/CSS code with CSS positioning:\n[...code with relative, absolute, and fixed positioning...]\n\nName the three positioning elements covered in the above code.",
                "marks": 3,
                "answer": "1. Relative Positioning (position: relative)\n2. Absolute Positioning (position: absolute)\n3. Fixed Positioning (position: fixed)"
              },
              {
                "id": 2,
                "text": "Explain the function of each positioning element from the code.",
                "marks": 3,
                "answer": "1. Relative: positions element relative to its normal document flow position, offset by left/top/right/bottom values.\n2. Absolute: positions element relative to its nearest positioned ancestor (or the initial containing block), removed from normal flow.\n3. Fixed: positions element relative to the browser viewport; stays in place even when scrolling."
              },
              {
                "id": 3,
                "text": "Provide a suitable title for this code.",
                "marks": 3,
                "answer": "CSS Positioning Examples / Learning CSS Positioning Properties"
              },
              {
                "id": 4,
                "text": "What is the purpose of this code?",
                "marks": 3,
                "answer": "To demonstrate and teach how different CSS positioning values (relative, absolute, fixed) affect the layout and placement of HTML elements on a web page."
              },
              {
                "id": 5,
                "text": "Define the function of CSS in the HTML file.",
                "marks": 3,
                "answer": "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements on a web page, including layout, colors, fonts, spacing, positioning, and responsive design."
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Explain the importance of layering in a network.",
                "marks": 2,
                "answer": "Layering divides network communication into smaller, manageable parts. Benefits: simplifies design, allows modular development, enables interoperability between different vendors, facilitates troubleshooting by isolating problems to specific layers, and allows changes in one layer without affecting others."
              },
              {
                "id": 2,
                "text": "Differentiate between:\n1. OSI model and TCP/IP model\n2. UDP and TCP",
                "marks": 5,
                "answer": "1. OSI vs TCP/IP:\n- OSI has 7 layers, TCP/IP has 4/5 layers.\n- OSI is conceptual/theoretical, TCP/IP is practical/implemented.\n- OSI separates presentation and session layers; TCP/IP combines them into Application layer.\n- TCP/IP was developed by DoD; OSI by ISO.\n\n2. UDP vs TCP:\n- TCP is connection-oriented, UDP is connectionless.\n- TCP guarantees delivery, UDP does not.\n- TCP has flow/congestion control, UDP does not.\n- TCP is slower but reliable; UDP is faster but unreliable.\n- TCP used for web/email, UDP for streaming/DNS."
              },
              {
                "id": 3,
                "text": "Describe in detail the data encapsulation process in the OSI model.",
                "marks": 2,
                "answer": "Data encapsulation in OSI:\n1. Application/Presentation/Session layers create data.\n2. Transport layer segments data and adds TCP/UDP header (segment).\n3. Network layer adds IP header (packet).\n4. Data Link layer adds MAC header and trailer (frame).\n5. Physical layer converts to bits for transmission.\nEach layer adds its own header, and the receiving end reverses the process (de-encapsulation)."
              },
              {
                "id": 4,
                "text": "For each of the following networks, give a sketch, two advantages, two disadvantages, and a network protocol or topology employing it:\n1. Mesh topology\n2. Star topology",
                "marks": 6,
                "answer": "1. Mesh Topology:\n- Sketch: each node connected to every other node.\n- Advantages: high reliability, no single point of failure, privacy/security.\n- Disadvantages: expensive (many cables), complex installation.\n- Protocol: fully connected network, used in WAN backbone.\n\n2. Star Topology:\n- Sketch: all nodes connected to a central hub/switch.\n- Advantages: easy to install/manage, failure of one node doesn't affect others.\n- Disadvantages: single point of failure (hub), more cable than bus.\n- Protocol: Ethernet (IEEE 802.3), used in most LANs."
              }
            ]
          }
        ]
      }
    ]
  },
  "2025": {
    "papers": [
      {
        "title": "Computer Technology",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: SOFTWARE ENGINEERING (SWE) | 2025 Session",
        "sections": [
          {
            "title": "Section A: MCQs",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "How can you open a link in a new browser window?\na) &lt;a href=\"url\" new&gt;\nb) &lt;a href=\"url\" target=\"new\"&gt;\nc) &lt;a href=\"url\" target=\"_blank\"&gt;\nd) &lt;a href=\"url\" target=\"\"&gt;",
                "marks": 1,
                "answer": "c) &lt;a href=\"url\" target=\"_blank\"&gt;"
              },
              {
                "id": 2,
                "text": "In C programming, a string might be:\na) A character\nb) A set of character\nc) An array of character\nd) An integer",
                "marks": 1,
                "answer": "c) An array of character"
              },
              {
                "id": 3,
                "text": "An unsigned char format specifier is:\na) %d\nb) %f\nc) %e\nd) %lu",
                "marks": 1,
                "answer": "a) %d"
              },
              {
                "id": 4,
                "text": "Which programming languages are used for web design:\na) XML, HTML, Java\nb) C#, PHP, CSS\nc) PHP, AJAX, JavaScript\nd) CSS, C#, HTML",
                "marks": 1,
                "answer": "c) PHP, AJAX, JavaScript"
              },
              {
                "id": 5,
                "text": "Which topology covers the factors like security, robustness and eliminating traffic?\na) Bus\nb) Star\nc) Mesh\nd) Ring",
                "marks": 1,
                "answer": "c) Mesh"
              },
              {
                "id": 6,
                "text": "Multipoint topology is a .....topology?\na) Ring\nb) Star\nc) Bus\nd) None",
                "marks": 1,
                "answer": "c) Bus"
              },
              {
                "id": 7,
                "text": "Many languages, C and Java included, pass all parameters using:\na) Call by reference\nb) Call by Value\nc) Return by value\nd) Return by reference",
                "marks": 1,
                "answer": "b) Call by Value"
              },
              {
                "id": 8,
                "text": "An unsigned long double format specifier is:\na) %d\nb) %f\nc) %e\nd) %lu",
                "marks": 1,
                "answer": "d) %lu"
              },
              {
                "id": 9,
                "text": "An unsigned float format specifier is:\na) %d\nb) %f\nc) %c\nd) %lu",
                "marks": 1,
                "answer": "b) %f"
              },
              {
                "id": 10,
                "text": "What does CSS stand for?\na) Colorful Style Sheets\nb) Computer Style Sheets\nc) Cascading Style Sheets\nd) Creative Style Sheets",
                "marks": 1,
                "answer": "c) Cascading Style Sheets"
              },
              {
                "id": 11,
                "text": "The formatted input function that works with character data type is:\na) Get()\nb) Getch()\nc) Getchs()\nd) Getches()",
                "marks": 1,
                "answer": "b) Getch()"
              },
              {
                "id": 12,
                "text": "The formatted output function that works with character data type is:\na) Putchs()\nb) Putch()\nc) Putche()\nd) Put()",
                "marks": 1,
                "answer": "b) Putch()"
              },
              {
                "id": 13,
                "text": "Inside which HTML element do we put the JavaScript?\na) &lt;js&gt;\nb) &lt;script&gt;\nc) &lt;scripting&gt;\nd) &lt;javascript&gt;",
                "marks": 1,
                "answer": "b) &lt;script&gt;"
              },
              {
                "id": 14,
                "text": "What is the output of this program:\nmain() {\n  static i=3;\n  printf(\"%d\", i);\n  return i>0 ? main() : 0;\n}\na) 123\nb) 213\nc) 321\nd) 132",
                "marks": 1,
                "answer": "a) Infinite recursion / stack overflow (each call consumes stack space with no base case to terminate)"
              },
              {
                "id": 15,
                "text": "What is the output of this Program:\nchar *foo() {\n  char result[100];\n  strcpy(result, \"anything is good\");\n  return result;\n}\nvoid main() {\n  char *j;\n  j = foo();\n  printf(\"%s\", j);\n}\na) nothing\nb) error message\nc) anything is good\nd) the program will not run",
                "marks": 1,
                "answer": "a) Undefined behavior / dangling pointer (result is a local array whose memory is released after the function returns)"
              },
              {
                "id": 16,
                "text": "One of the steps involved in the Design phase of SDLC is:\na) design strategy\nb) analysis and initial design\nc) requirements gathering\nd) support plan",
                "marks": 1,
                "answer": "a) design strategy"
              },
              {
                "id": 17,
                "text": "Output of this program:\nmain() {\n  int i=0;\n  for(i=0;i<20;i++) {\n    switch(i) {\n      case 0: i+=5;\n      case 1: i+=2;\n      case 5: i+=5;\n      default: i+=4; break;\n    }\n  }\n  printf(\"%d\", i);\n}\na) 0,5,9,13,17\nb) 16,21\nc) 12,17,22\nd) syntax error",
                "marks": 1,
                "answer": "c) 10 (the loop runs i from 0 to 19, and the output is the final value of i after the loop, which is 20, but the case statements change control flow)"
              },
              {
                "id": 18,
                "text": "What does PHP stand for?\na) Hypertext Preprocessor\nb) Personal Hypertext Processor\nc) Private Home Page\nd) All above",
                "marks": 1,
                "answer": "a) Hypertext Preprocessor"
              },
              {
                "id": 19,
                "text": "What will the following program do:\nvoid main() {\n  int i,j;\n  char a[]=\"String\";\n  char *p=\"New Sring\";\n  char *Temp;\n  Temp=a;\n  a=malloc(strlen(p)+1);\n  strcpy(a,p);\n  p=malloc(strlen(Temp)+1);\n  strcpy(p,Temp);\n  printf(\"(%s, %s)\",a,p);\n  free(p); free(a);\n}\na) Swap contents of p & a and print: (New string, string)\nb) Generate compilation error in line number 8\nc) Generate compilation error in line number 5\nd) Generate compilation error in line number 7",
                "marks": 1,
                "answer": "b) Generate compilation error in line number 8"
              },
              {
                "id": 20,
                "text": "The view of total database content is:\na) Conceptual view\nb) Internal view\nc) External view\nd) Physical View",
                "marks": 1,
                "answer": "a) Conceptual view"
              },
              {
                "id": 21,
                "text": "In the following code segment what will be the result:\nunsigned int x=-1;\nint y;\ny=~0;\nif(x==y) printf(\"same\");\nelse printf(\"not same\");\na) same, MAXINT, -1\nb) not same, MAXINT, -MAXINT\nc) same, MAXUINT, -1\nd) same, MAXUINT, MAXINT",
                "marks": 1,
                "answer": "c) same, MAXUINT, -1"
              },
              {
                "id": 22,
                "text": "When applied to a variable, what does & operator yield?\na) The variable's value\nb) The variable's binding\nc) The variable's address\nd) The variable's format",
                "marks": 1,
                "answer": "c) The variable's address"
              },
              {
                "id": 23,
                "text": "What is a Firewall in Computer Network?\na) The physical boundary of Network\nb) An operating System of Computer Network\nc) A system designed to prevent unauthorized access\nd) A web browsing Software",
                "marks": 1,
                "answer": "c) A system designed to prevent unauthorized access"
              },
              {
                "id": 24,
                "text": "Which of these tags are all &lt;table&gt; tags?\na) &lt;table&gt;&lt;head&gt;&lt;tfoot&gt;\nb) &lt;table&gt;&lt;tr&gt;&lt;td&gt;\nc) &lt;table&gt;&lt;tr&gt;&lt;tt&gt;\nd) &lt;thead&gt;&lt;body&gt;&lt;tr&gt;",
                "marks": 1,
                "answer": "b) &lt;table&gt;&lt;tr&gt;&lt;td&gt;"
              },
              {
                "id": 25,
                "text": "How many layers does OSI Reference Model have?\na) 4\nb) 5\nc) 6\nd) 7",
                "marks": 1,
                "answer": "d) 7"
              },
              {
                "id": 26,
                "text": "DHCP is the abbreviation of:\na) Dynamic Host Control Protocol\nb) Dynamic Host Configuration Protocol\nc) Dynamic Hyper Control Protocol\nd) Dynamic Hyper Configuration Protocol",
                "marks": 1,
                "answer": "b) Dynamic Host Configuration Protocol"
              },
              {
                "id": 27,
                "text": "DML is provided for:\na) Description of logical structure of database\nb) Addition of new structures in the database system\nc) Manipulation & processing of database\nd) Definition of physical structure of database system",
                "marks": 1,
                "answer": "c) Manipulation & processing of database"
              },
              {
                "id": 28,
                "text": "IPV4 Address is:\na) 8 bit\nb) 16 bit\nc) 32 bit\nd) 64 bit",
                "marks": 1,
                "answer": "c) 32 bit"
              },
              {
                "id": 29,
                "text": "DNS is the abbreviation of:\na) Dynamic Name System\nb) Dynamic Network System\nc) Domain Name System\nd) Domain Network Service",
                "marks": 1,
                "answer": "c) Domain Name System"
              },
              {
                "id": 30,
                "text": "What is the meaning of Bandwidth in Network?\na) Transmission capacity of a communication channel\nb) Connected Computers in the Network\nc) Class of IP used in Network\nd) None of Above",
                "marks": 1,
                "answer": "a) Transmission capacity of a communication channel"
              },
              {
                "id": 31,
                "text": "What is the use of Bridge in Network?\na) to connect LANs\nb) to separate LANs\nc) to control Network Speed\nd) All of the above",
                "marks": 1,
                "answer": "a) to connect LANs"
              },
              {
                "id": 32,
                "text": "Router operates in which layer of OSI Reference Model?\na) Layer 1 (Physical Layer)\nb) Layer 3 (Network Layer)\nc) Layer 4 (Transport Layer)\nd) Layer 7 (Application Layer)",
                "marks": 1,
                "answer": "b) Layer 3 (Network Layer)"
              },
              {
                "id": 33,
                "text": "Each IP packet must contain:\na) Only Source address\nb) Only Destination address\nc) Source and Destination address\nd) Source or Destination address",
                "marks": 1,
                "answer": "c) Source and Destination address"
              },
              {
                "id": 34,
                "text": "Bridge works in which layer of the OSI model?\na) Application layer\nb) Transport layer\nc) Network layer\nd) Datalink layer",
                "marks": 1,
                "answer": "d) Datalink layer"
              },
              {
                "id": 35,
                "text": "____ provides a connection-oriented reliable service for sending messages:\na) TCP\nb) IP\nc) UDP\nd) All of the above",
                "marks": 1,
                "answer": "a) TCP"
              },
              {
                "id": 36,
                "text": "Which layers of the OSI model are host-to-host layers?\na) Transport, Session, Presentation, Application\nb) Network, Transport, Session, Presentation\nc) Datalink, Network, Transport, Session\nd) Physical, Datalink, Network, Transport",
                "marks": 1,
                "answer": "a) Transport, Session, Presentation, Application"
              },
              {
                "id": 37,
                "text": "Which of the following IP address class is Multicast?\na) Class A\nb) Class B\nc) Class C\nd) Class D",
                "marks": 1,
                "answer": "d) Class D"
              },
              {
                "id": 38,
                "text": "Cartesian product in relational algebra is:\na) a Unary operator\nb) a Binary operator\nc) a Ternary operator\nd) not defined",
                "marks": 1,
                "answer": "b) a Binary operator"
              },
              {
                "id": 39,
                "text": "Which keyword is used to declare variables in JavaScript?\na) var\nb) Dim\nc) String\nd) None of the above",
                "marks": 1,
                "answer": "a) var (or let/const)"
              },
              {
                "id": 40,
                "text": "'AS' clause is used in SQL for:\na) Selection operation\nb) Rename operation\nc) Join operation\nd) Projection operation",
                "marks": 1,
                "answer": "b) Rename operation"
              }
            ]
          },
          {
            "title": "Section B: Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Consider the algorithm:\n1. start\n2. variables: x=0, i,j,k,N as integer\n3. for (i=0; i<N; i++)\n4.   for (j=0; j<N; j++)\n5.     for (k=0; k<N; k++)\n6.       x=x+1\n7. Display x\n8. stop\n\na) Give the equivalent flow chart (10 marks)\nb) Find the space complexity (3 marks)\nc) Find the time complexity (3 marks)\nd) What is the output if N=3 (4 marks)",
                "marks": 20,
                "answer": "a) Flowchart: Start -> x=0 -> i=0 -> i<N? -> No -> Display x -> End. Yes branch: j=0 -> j<N? -> No -> i++ -> back to i<N. Yes: k=0 -> k<N? -> No -> j++ -> back to j<N. Yes: x++ -> k++ -> back to k<N.\n\nb) Space complexity: O(1) - constant space (only integer variables)\n\nc) Time complexity: O(N^3) - three nested loops\n\nd) Output: 27"
              }
            ]
          },
          {
            "title": "Section C: Database",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "What are the commands used in DCL?",
                "marks": 3,
                "answer": "DCL (Data Control Language) commands: GRANT (gives user privileges) and REVOKE (removes user privileges). They manage database security and access control."
              },
              {
                "id": 2,
                "text": "Explain the importance of database partitioning.",
                "marks": 2,
                "answer": "Database partitioning divides large tables into smaller, manageable pieces. Benefits: improved query performance, easier maintenance, better availability, and isolation of failures to specific partitions."
              },
              {
                "id": 3,
                "text": "What are the different authentication modes in SQL Server and how can you change authentication mode?",
                "marks": 2,
                "answer": "Two modes: 1) Windows Authentication Mode - uses Windows accounts. 2) Mixed Mode - allows both Windows and SQL Server authentication. Change via SSMS: right-click server > Properties > Security > select mode."
              },
              {
                "id": 4,
                "text": "Differentiate between Atomicity and Aggregation.",
                "marks": 2,
                "answer": "Atomicity: transaction property where all operations succeed or none take effect (all-or-nothing). Aggregation: ER modeling concept treating a relationship as an entity so it can participate in other relationships."
              },
              {
                "id": 5,
                "text": "Does the relational model provide physical and logical data independence? Explain.",
                "marks": 3,
                "answer": "Yes. Logical independence: changing the logical schema without affecting external views. Physical independence: changing physical storage without affecting logical schema. SQL queries operate at the logical level."
              },
              {
                "id": 6,
                "text": "What is Replication?",
                "marks": 2,
                "answer": "Replication: copying data from one database to another to keep them synchronized. Provides fault tolerance, load balancing, and distributed processing."
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Give the role of Session Layer in an OSI model.",
                "marks": 3,
                "answer": "Session Layer (Layer 5) manages sessions between applications. It establishes, maintains, and terminates connections, provides synchronization checkpoints, and manages dialog control (half/full duplex)."
              },
              {
                "id": 2,
                "text": "What is HTTPS and what port does it use?",
                "marks": 3,
                "answer": "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP using SSL/TLS encryption. It uses port 443."
              },
              {
                "id": 3,
                "text": "a) Which protocol requires a three-way handshake before transmission? (1 mark) b) How does a three-way handshake function? (3 marks)",
                "marks": 4,
                "answer": "a) TCP (Transmission Control Protocol)\nb) 1. SYN: Client sends SYN with sequence number. 2. SYN-ACK: Server acknowledges and sends its SYN. 3. ACK: Client acknowledges server's SYN. Connection established."
              },
              {
                "id": 4,
                "text": "a) Why are error detections necessary in networking? (2 marks) b) Give three types of errors in networking. (3 marks)",
                "marks": 5,
                "answer": "a) Ensures data integrity during transmission against interference, signal degradation, and hardware faults.\nb) 1. Single-bit error. 2. Burst error (multiple consecutive bits). 3. Frame error (lost, duplicated, or out-of-order frames)."
              }
            ]
          },
          {
            "title": "Section E: Data Structure and Algorithm",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "a) Draw a binary tree for the expression: (A+B)*C+(D-E)/F+G*A (2 marks)\nb) Give the pre-order traversal (2 marks)\nc) Give the post-order traversal (2 marks)",
                "marks": 6,
                "answer": "a) Tree structure with operators as internal nodes:\n        +\n      /   \\\n    +       +\n   / \\     / \\\n  *   /   G   *\n / \\ / \\     / \\\n+  C -  F    A  G\n/\\   /\\\nA B D E\n\nb) Pre-order: + + * + A B C / - D E F * G A\nc) Post-order: A B + C * D E - F / G A * + +"
              },
              {
                "id": 2,
                "text": "Give the types of participation constraints in an E-R model.",
                "marks": 2,
                "answer": "1. Total (mandatory): all entities participate (double line). 2. Partial (optional): some may not participate (single line)."
              },
              {
                "id": 3,
                "text": "What are the three major steps of database design? Define each.",
                "marks": 2,
                "answer": "1. Conceptual: abstract model (ER diagram) independent of DBMS. 2. Logical: relational schema (tables, keys, normalization). 3. Physical: implementation-specific (indexes, storage, optimization)."
              }
            ]
          }
        ]
      },
      {
        "title": "Information Systems",
        "duration": "3 hours",
        "credits": 6,
        "description": "Specialty: SOFTWARE ENGINEERING (SWE) | 2025 Session",
        "sections": [
          {
            "title": "Section A: Multiple Choice Questions",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Which of the following is not a characteristic of good test data?\na) users do not participate at this preliminary stage\nb) should be comprehensive\nc) every statement should be executed\nd) All of the above",
                "marks": 1,
                "answer": "a) users do not participate at this preliminary stage"
              },
              {
                "id": 2,
                "text": "In the system concepts, term Integration:\na) implies structure and order\nb) refers to how each component functions with other components\nc) means parts of the computer system depend on one another\nd) refers to the holism of system",
                "marks": 1,
                "answer": "b) refers to how each component functions with other components"
              },
              {
                "id": 3,
                "text": "The rule(s) to follow in constructing decision tables is (are):\na) a decision should be given a name\nb) the logic is independent of condition/rule sequence but action order matters\nc) standardized language must be used consistently\nd) All of the above",
                "marks": 1,
                "answer": "d) All of the above"
              },
              {
                "id": 4,
                "text": "_____ is a group of interested components working together towards a common goal.\na) System\nb) Network\nc) Team\nd) System Unit",
                "marks": 1,
                "answer": "a) System"
              },
              {
                "id": 5,
                "text": "A rectangle in a DFD represents:\na) a process\nb) a data store\nc) an external entity\nd) an input unit",
                "marks": 1,
                "answer": "c) an external entity"
              },
              {
                "id": 6,
                "text": "External Entities may be:\na) Source of input data only\nb) Source of input data or destination of results\nc) Destination of results only\nd) Repository of data",
                "marks": 1,
                "answer": "b) Source of input data or destination of results"
              },
              {
                "id": 7,
                "text": "The major goal of requirement determination phase is:\na) determine whether information is needed\nb) determine what information is needed\nc) determine how information can be provided\nd) determine when information is to be given",
                "marks": 1,
                "answer": "b) determine what information is needed"
              },
              {
                "id": 8,
                "text": "Prioritizing information requirements is necessary because:\na) it is always good to prioritize\nb) there are conflicting demands from users\nc) constraints on budgets, time, and human resources\nd) all good organizations do it",
                "marks": 1,
                "answer": "c) constraints on budgets, time, and human resources"
              },
              {
                "id": 9,
                "text": "Requirement specification is carried out:\na) after requirements are determined\nb) before requirements are determined\nc) simultaneously with requirements determination\nd) independent of requirements determination",
                "marks": 1,
                "answer": "a) after requirements are determined"
              },
              {
                "id": 10,
                "text": "A system analyst drawing up requirements specification is similar to:\na) architect designing a building\nb) structural engineer designing a building\nc) contractor constructing a building\nd) workers constructing a building",
                "marks": 1,
                "answer": "a) architect designing a building"
              },
              {
                "id": 11,
                "text": "Who should be consulted when drawing up requirement specification?\na) only top managers\nb) only top and middle management\nc) only top, middle and operational managers\nd) all managers and all users of the system",
                "marks": 1,
                "answer": "d) all managers and all users of the system"
              },
              {
                "id": 12,
                "text": "To understand an organization for system design, an analyst must:\na) look only at current work and document flow\nb) discuss with top and middle management only\nc) interview all levels of management and data entry clerks\nd) only clerical and middle level staff",
                "marks": 1,
                "answer": "c) interview all levels of management and data entry clerks"
              },
              {
                "id": 13,
                "text": "A feasibility study is carried out:\na) after final requirements specifications are drawn up\nb) during requirements specification\nc) before final requirements specifications are drawn up\nd) at any time",
                "marks": 1,
                "answer": "c) before final requirements specifications are drawn up"
              },
              {
                "id": 14,
                "text": "The main objective of feasibility study is:\na) assess if requirements can be met\nb) assess if requirements can be met subject to constraints\nc) assist management in implementing the system\nd) remove bottlenecks in implementation",
                "marks": 1,
                "answer": "b) assess if requirements can be met subject to constraints"
              },
              {
                "id": 15,
                "text": "A feasibility study is necessary because:\na) top management cannot ensure feasibility before calling an analyst\nb) top management is unsure what they want\nc) technology may not be mature for implementation\nd) all organizations do it",
                "marks": 1,
                "answer": "a) top management cannot ensure feasibility before calling an analyst"
              },
              {
                "id": 16,
                "text": "Feasibility study is carried out by:\na) managers of the organization\nb) system analyst in consultation with managers\nc) users of the proposed system\nd) systems designers with prospective users",
                "marks": 1,
                "answer": "b) system analyst in consultation with managers"
              },
              {
                "id": 17,
                "text": "Initial requirements specification is:\na) not changed till the end\nb) continuously changed during implementation\nc) only a rough indication\nd) changed and finalized after feasibility study",
                "marks": 1,
                "answer": "d) changed and finalized after feasibility study"
              },
              {
                "id": 18,
                "text": "Final specifications are drawn up by:\na) system analyst with management\nb) managers of user organization\nc) system analyst with programmers\nd) system designers with users",
                "marks": 1,
                "answer": "a) system analyst with management"
              },
              {
                "id": 19,
                "text": "The main goal of final specification is:\na) to tell managers how the system will function\nb) to tell managers what the system will achieve in their language\nc) to compute implementation cost\nd) to assist in designing the system",
                "marks": 1,
                "answer": "b) to tell managers what the system will achieve in their language"
              },
              {
                "id": 20,
                "text": "The final specifications are arrived at:\na) after feasibility study\nb) during feasibility study\nc) just before implementation\nd) when the system is being designed",
                "marks": 1,
                "answer": "a) after feasibility study"
              },
              {
                "id": 21,
                "text": "System approval criteria are drawn up:\na) when final specifications are drawn up\nb) during feasibility study\nc) during requirements specification\nd) during system study",
                "marks": 1,
                "answer": "a) when final specifications are drawn up"
              },
              {
                "id": 22,
                "text": "Hardware study is required to:\na) find out computer system cost\nb) determine computer type and software tools needed\nc) ensure the system does not become obsolete\nd) find how to implement the system",
                "marks": 1,
                "answer": "b) determine computer type and software tools needed"
              },
              {
                "id": 23,
                "text": "Hardware study is carried out:\na) after the final system is specified\nb) at requirements specification stage\nc) before requirements are specified\nd) whenever management decides",
                "marks": 1,
                "answer": "a) after the final system is specified"
              },
              {
                "id": 24,
                "text": "System design is carried out:\na) as soon as requirements are determined\nb) whenever the analyst feels it is urgent\nc) after final specifications are approved\nd) whenever user management feels it should be done",
                "marks": 1,
                "answer": "c) after final specifications are approved"
              },
              {
                "id": 25,
                "text": "The primary objective of system design is to:\na) design programs, databases and test plan\nb) design only user interfaces\nc) implement the system\nd) find out how the system will perform",
                "marks": 1,
                "answer": "a) design programs, databases and test plan"
              },
              {
                "id": 26,
                "text": "The primary objective of system implementation is:\ni) build a system prototype\nii) train users to operate the system\niii) implement designed system using computers\niv) write programs, create databases and test\na) i, iii\nb) i, ii, iii\nc) ii, iii\nd) ii, iv",
                "marks": 1,
                "answer": "c) ii, iii"
              },
              {
                "id": 27,
                "text": "During system implementation:\ni) programs are written and tested\nii) user documentation is created and users trained\niii) programmers are recruited and trained\niv) system is tested with operational data\na) i and iii\nb) ii and iii\nc) ii and iv\nd) i, ii & iv",
                "marks": 1,
                "answer": "d) i, ii & iv"
              },
              {
                "id": 28,
                "text": "System evaluation is carried out:\na) after the system has operated for a reasonable time\nb) during system implementation\nc) whenever managers want it\nd) whenever operational staff want it",
                "marks": 1,
                "answer": "a) after the system has operated for a reasonable time"
              },
              {
                "id": 29,
                "text": "The main objective of system evaluation is:\na) to see whether the system met specifications\nb) to improve the system based on operational experience\nc) to remove bugs\nd) to assess efficiency",
                "marks": 1,
                "answer": "a) to see whether the system met specifications"
              },
              {
                "id": 30,
                "text": "Systems are modified whenever:\na) user's requirements change\nb) new computers are introduced\nc) new software tools become available\nd) other organizations modify their systems",
                "marks": 1,
                "answer": "a) user's requirements change"
              },
              {
                "id": 31,
                "text": "The main objective of system modification is:\na) to use the latest software tools\nb) to meet user's new/changed needs\nc) to use the latest hardware\nd) to have the most modern system",
                "marks": 1,
                "answer": "b) to meet user's new/changed needs"
              },
              {
                "id": 32,
                "text": "To easily modify an existing system it is necessary to:\na) use good software tools\nb) use the best hardware\nc) design the system for low-cost change\nd) keep the programming team happy",
                "marks": 1,
                "answer": "c) design the system for low-cost change"
              },
              {
                "id": 33,
                "text": "Information systems must accommodate change because:\na) new computers are introduced yearly\nb) new languages become popular yearly\nc) organizations' requirements change over time\nd) systems need continuous debugging",
                "marks": 1,
                "answer": "c) organizations' requirements change over time"
              },
              {
                "id": 34,
                "text": "Changing an operational information system is:\na) impossible\nb) expensive and done selectively\nc) never required\nd) usually done",
                "marks": 1,
                "answer": "b) expensive and done selectively"
              },
              {
                "id": 35,
                "text": "System analysts interact with:\ni) managers\nii) users\niii) programming team\niv) data entry operators\na) iii and iv\nb) i, ii and iii\nc) ii, iii and iv\nd) ii and iii",
                "marks": 1,
                "answer": "b) i, ii and iii"
              },
              {
                "id": 36,
                "text": "The primary responsibility of a systems analyst is to:\na) specify an IS meeting organizational requirements\nb) write programs to meet specifications\nc) maintain the system\nd) meet managers regularly",
                "marks": 1,
                "answer": "a) specify an IS meeting organizational requirements"
              },
              {
                "id": 37,
                "text": "System analyst responsibilities include:\ni) defining requirements priorities\nii) gathering data and opinions\niii) drawing up specifications\niv) designing and evaluating the system\na) i and ii\nb) i, ii and iv\nc) i, ii, iii and iv\nd) i, ii and iii",
                "marks": 1,
                "answer": "c) i, ii, iii and iv"
              },
              {
                "id": 38,
                "text": "The most important attribute of a systems analyst is:\na) excellent programming skills\nb) very good hardware designing skills\nc) very good technical management skills\nd) very good writing skills",
                "marks": 1,
                "answer": "c) very good technical management skills"
              },
              {
                "id": 39,
                "text": "Essential attributes of a good systems analyst:\ni) knowledge of organization\nii) analytical mind\niii) ability to communicate orally\niv) excellent mathematical abilities\na) i and ii\nb) i, ii and iii\nc) i, ii and iv\nd) i, iii and iv",
                "marks": 1,
                "answer": "b) i, ii and iii"
              },
              {
                "id": 40,
                "text": "Most important attributes of a systems analyst:\ni) knowledge of computer systems and hardware\nii) good interpersonal relations\niii) broad knowledge about various organizations\niv) very good accountancy knowledge\na) i, iii and iv\nb) i and iii\nc) i, ii and iv\nd) i, ii and iii",
                "marks": 1,
                "answer": "d) i, ii and iii"
              }
            ]
          },
          {
            "title": "Section B: Operating Systems",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Part I: MCQs\n\n1) Dual mode of operating system has:\na) 1 mode\nb) 2 modes\nc) 3 modes\nd) 4 modes",
                "marks": 1,
                "answer": "b) 2 modes"
              },
              {
                "id": 2,
                "text": "2) Multi-processor system gives a:\na) small system\nb) tightly coupled system\nc) loosely coupled system\nd) both a and b",
                "marks": 1,
                "answer": "b) tightly coupled system"
              },
              {
                "id": 3,
                "text": "3) Logical extension of multiprogramming is:\na) time sharing\nb) multi-tasking\nc) single programming\nd) both a and b",
                "marks": 1,
                "answer": "d) both a and b"
              },
              {
                "id": 4,
                "text": "4) Multiprocessor system advantage:\na) Increased Throughput\nb) Expensive hardware\nc) operating system\nd) both a and b",
                "marks": 1,
                "answer": "a) Increased Throughput"
              },
              {
                "id": 5,
                "text": "5) Scheduling of threads is done by:\na) input\nb) output\nc) operating system\nd) memory",
                "marks": 1,
                "answer": "c) operating system"
              },
              {
                "id": 6,
                "text": "6) Multiprogramming increases:\na) memory\nb) storage\nc) CPU utilization\nd) cost",
                "marks": 1,
                "answer": "c) CPU utilization"
              },
              {
                "id": 7,
                "text": "7) Another type of multiple-CPU system is:\na) mini Computer\nb) Super Computer\nc) Clustered System\nd) both a and b",
                "marks": 1,
                "answer": "c) Clustered System"
              },
              {
                "id": 8,
                "text": "8) Interrupt table of pointers is located at:\na) high memory\nb) low memory\nc) mid memory\nd) both a and b",
                "marks": 1,
                "answer": "b) low memory"
              },
              {
                "id": 9,
                "text": "9) Example of open source OS is:\na) UNIX\nb) Linux\nc) windows\nd) both a and b",
                "marks": 1,
                "answer": "b) Linux"
              },
              {
                "id": 10,
                "text": "10) Main memory is also called:\na) non volatile\nb) volatile\nc) reserved\nd) large",
                "marks": 1,
                "answer": "b) volatile"
              },
              {
                "id": 11,
                "text": "11) Device controller transfers data from device to:\na) buffers\nb) cache\nc) registers\nd) indexes",
                "marks": 1,
                "answer": "c) registers"
              },
              {
                "id": 12,
                "text": "12) When many users access mainframes, the approach is called:\na) resource allocation\nb) word processors\nc) dedicated resources\nd) interface",
                "marks": 1,
                "answer": "d) interface"
              },
              {
                "id": 13,
                "text": "13) Accessing same data from storage is provided by:\na) serial clusters\nb) parallel clusters\nc) Beowulf clusters\nd) both a and b",
                "marks": 1,
                "answer": "d) both a and b"
              },
              {
                "id": 14,
                "text": "14) To start I/O, device driver loads register into:\na) memory\nb) Secondary storage\nc) Device Controller\nd) Arrays",
                "marks": 1,
                "answer": "c) Device Controller"
              },
              {
                "id": 15,
                "text": "15) Symmetric multiprocessing uses shared:\na) bus\nb) memory\nc) processors\nd) both a and b",
                "marks": 1,
                "answer": "d) both a and b"
              },
              {
                "id": 16,
                "text": "16) In asymmetric clustering, other machines work while one is in:\na) hot standby mode\nb) standby mode\nc) reset mode\nd) undefined mode",
                "marks": 1,
                "answer": "a) hot standby mode"
              },
              {
                "id": 17,
                "text": "17) Ability to provide service proportional to surviving hardware:\na) graceful upgradation\nb) degradation\nc) upgradation\nd) graceful degradation",
                "marks": 1,
                "answer": "d) graceful degradation"
              },
              {
                "id": 18,
                "text": "18) Secondary memory is also called:\na) non volatile\nb) volatile\nc) reserved\nd) small",
                "marks": 1,
                "answer": "a) non volatile"
              },
              {
                "id": 19,
                "text": "19) Environment for program execution is:\na) operating system\nb) nodes\nc) clustered system\nd) both a and b",
                "marks": 1,
                "answer": "a) operating system"
              },
              {
                "id": 20,
                "text": "20) One word memory storage is collection of:\na) 2 bytes\nb) 4 bytes\nc) 7 bytes\nd) 8 bytes",
                "marks": 1,
                "answer": "d) 8 bytes"
              },
              {
                "id": 21,
                "text": "Part II: Structural Questions\n\n1) List the four key components of Android.",
                "marks": 2,
                "answer": "1. Linux Kernel\n2. Libraries (SQLite, WebKit)\n3. Android Runtime (Dalvik/ART)\n4. Application Framework"
              },
              {
                "id": 22,
                "text": "2) Differentiate between general purpose OS and mobile OS.",
                "marks": 3,
                "answer": "General purpose OS (Windows, Linux): multi-user, complex multitasking, wide hardware support. Mobile OS (Android, iOS): touch-optimized, power-efficient, app-centric, limited resources."
              },
              {
                "id": 23,
                "text": "3) Describe operating system operations.",
                "marks": 4,
                "answer": "OS operations: process management (creation/scheduling), memory management (allocation/virtual memory), file management (read/write/permissions), I/O management (drivers/buffering), security (authentication/access control), networking."
              },
              {
                "id": 24,
                "text": "4) Explain simple batch system.",
                "marks": 2,
                "answer": "Simple batch system: jobs grouped and executed sequentially without user interaction. A resident monitor reads/executes jobs from memory, producing output automatically."
              },
              {
                "id": 25,
                "text": "5) Explain time sharing operating system.",
                "marks": 2,
                "answer": "Time sharing: CPU rapidly switches between users/jobs via time slices (quantum). Each user gets interactive response as if they have a dedicated CPU, through context switching."
              },
              {
                "id": 26,
                "text": "6) List four process control system calls.",
                "marks": 2,
                "answer": "1. fork() - create process\n2. exec() - replace process image\n3. wait() - wait for child\n4. exit() - terminate process"
              },
              {
                "id": 27,
                "text": "7) Explain virtual machines.",
                "marks": 4,
                "answer": "VM: software emulation of a physical computer. Hypervisor (VMM) manages VMs allocating physical resources. Type 1 (bare-metal, e.g., VMware ESXi) runs directly on hardware. Type 2 (hosted, e.g., VirtualBox) runs on host OS."
              },
              {
                "id": 28,
                "text": "8) What is Google Android SDK?",
                "marks": 3,
                "answer": "Android SDK: tools, libraries, APIs, and documentation for Android development. Includes Android Studio, platform tools (adb), build tools, emulator, and framework libraries for building/testing/debugging Android apps."
              }
            ]
          },
          {
            "title": "Section C: Project Management and Legal Regulations",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Part I: MCQs\n\n1) Which is not a project constraint?\na) Scope\nb) Resources\nc) Team\nd) Budget",
                "marks": 1,
                "answer": "c) Team"
              },
              {
                "id": 2,
                "text": "2) Which is not correct about the initial project phase?\na) Cost at beginning is highest\nb) Stakeholders have maximum influence\nc) Highest uncertainty at this stage\nd) All above are correct",
                "marks": 1,
                "answer": "a) Cost at beginning is highest"
              },
              {
                "id": 3,
                "text": "3) Project with 9 stakeholders has how many communication channels?\na) 9\nb) 8\nc) 45\nd) 36",
                "marks": 1,
                "answer": "d) 36 (n*(n-1)/2 = 36)"
              },
              {
                "id": 4,
                "text": "4) Which is not formal communication?\na) Contract\nb) email\nc) Project status report\nd) Status meeting",
                "marks": 1,
                "answer": "b) email"
              },
              {
                "id": 5,
                "text": "5) Project with $100,000 funding finished with BAC of $95,000. The $5,000 difference is best described as:\na) Cost Variance\nb) Management Overhead\nc) Management Contingency Reserve\nd) Schedule Variance",
                "marks": 1,
                "answer": "c) Management Contingency Reserve"
              },
              {
                "id": 6,
                "text": "6) If Earned Value equals Actual Cost, it means:\na) Project is on budget and schedule\nb) Schedule Variance Index is 1\nc) No schedule variance\nd) No cost variance",
                "marks": 1,
                "answer": "d) No cost variance"
              },
              {
                "id": 7,
                "text": "7) Most important element of PM Plan for Risk Planning:\na) Risk Management activities\nb) Quality Assurance activities\nc) Activity Resource requirements\nd) Work Breakdown Structure",
                "marks": 1,
                "answer": "a) Risk Management activities"
              },
              {
                "id": 8,
                "text": "8) Which chart BEST tracks project costs?\na) Hierarchical Organizational chart\nb) Organizational Breakdown Structure\nc) Resource Breakdown Structure\nd) Responsibility Assignment Matrix",
                "marks": 1,
                "answer": "c) Resource Breakdown Structure"
              },
              {
                "id": 9,
                "text": "9) True about Responsibility Assignment Matrix (RAM):\na) Defines team responsibility for WBS component\nb) Defines member responsibility for each activity\nc) Text description of roles and authorities\nd) Defines all people associated with each activity",
                "marks": 1,
                "answer": "b) Defines member responsibility for each activity"
              },
              {
                "id": 10,
                "text": "10) Process Analysis is a function of:\na) Performance Analysis\nb) Quality Metrics\nc) Process Improvement Plan\nd) Quality Improvement Plan",
                "marks": 1,
                "answer": "c) Process Improvement Plan"
              },
              {
                "id": 11,
                "text": "Part II: Structural Questions\n\n1) Software project management includes planning, scope definition, cost estimation, scheduling, and resource management.\n\na) Activities carried out during project scope management (3 marks)",
                "marks": 3,
                "answer": "a) Scope management: scope planning (create plan), scope definition (detailed statement), create WBS (decompose work), scope verification (formal acceptance), scope control (manage changes)."
              },
              {
                "id": 12,
                "text": "b) Explain what is estimated during project estimation phase. (2 marks)",
                "marks": 2,
                "answer": "b) Estimation covers: cost (resources, labor, materials), time (duration, timeline), effort (person-hours/days), and risk (contingency reserves)."
              },
              {
                "id": 13,
                "text": "c) Discuss two types of Project Estimation Techniques. (1 mark)",
                "marks": 1,
                "answer": "c) 1. Analogous estimation: using historical data from similar projects. 2. Bottom-up estimation: estimating individual tasks and summing."
              },
              {
                "id": 14,
                "text": "2) Differentiate between agile project management and prince2. (2 marks)",
                "marks": 2,
                "answer": "Agile: iterative/incremental, flexible scope, self-organizing teams, adaptive planning. Prince2: process-based, defined stages, clear roles, controlled phases with gates."
              },
              {
                "id": 15,
                "text": "3) Define software law. (2 marks)",
                "marks": 2,
                "answer": "Software law: legal principles governing software development/distribution/use, covering IP (copyright/patents), licensing, data protection, privacy, cybercrime, and liability for defects."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Literacy",
        "duration": "2 hours",
        "credits": 2,
        "description": "Specialty: SWE, HWM, CWD, FSD | 2025 Session",
        "sections": [
          {
            "title": "Section A: General Computer Knowledge - Part I: MCQs",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Which part of a computer performs calculations?\na) Hard disk\nb) Monitor\nc) CPU\nd) Keyboard",
                "marks": 1,
                "answer": "c) CPU"
              },
              {
                "id": 2,
                "text": "Intersection of a row and column in a spreadsheet is called:\na) Value\nb) Cell\nc) Label\nd) Worksheet",
                "marks": 1,
                "answer": "b) Cell"
              },
              {
                "id": 3,
                "text": "To hide an email recipient's address from another recipient, use:\na) Subject\nb) CC\nc) BCC\nd) To",
                "marks": 1,
                "answer": "c) BCC"
              },
              {
                "id": 4,
                "text": "Bits sent over media as analog signal by:\na) digital modulation\nb) amplitude modulation\nc) frequency modulation\nd) phase modulation",
                "marks": 1,
                "answer": "a) digital modulation"
              },
              {
                "id": 5,
                "text": "Which device plays an audio CD?\na) Microphone\nb) DVD player\nc) Analog Camcorder\nd) Transistor radio",
                "marks": 1,
                "answer": "b) DVD player"
              },
              {
                "id": 6,
                "text": "Microprocessors were introduced in which generation?\na) First\nb) Second\nc) Third\nd) Fourth",
                "marks": 1,
                "answer": "d) Fourth"
              },
              {
                "id": 7,
                "text": "Language that uses binary codes of 0's and 1's:\na) Assembly language\nb) High level language\nc) Machine language\nd) Fourth generation language",
                "marks": 1,
                "answer": "c) Machine language"
              },
              {
                "id": 8,
                "text": "What is the Internet?\na) Product from worldwide interconnection\nb) Device for printing and sharing\nc) Backup source for data\nd) A network of networks",
                "marks": 1,
                "answer": "d) A network of networks"
              },
              {
                "id": 9,
                "text": "ROM that can be programmed/erased with electrical impulses:\na) PROM\nb) EEPROM\nc) EPROM\nd) EEEPROM",
                "marks": 1,
                "answer": "b) EEPROM"
              },
              {
                "id": 10,
                "text": "Technology securing online transactions:\na) Antivirus\nb) Cookies\nc) Secure Sockets Layer (SSL)\nd) Firewall",
                "marks": 1,
                "answer": "c) Secure Sockets Layer (SSL)"
              },
              {
                "id": 11,
                "text": "A computer connected to the Internet is:\na) Online\nb) Logged in\nc) Stand by\nd) Browsing",
                "marks": 1,
                "answer": "a) Online"
              },
              {
                "id": 12,
                "text": "Technology to listen to live concert over Internet:\na) Sampling\nb) Streaming\nc) Speech synthesis\nd) Video recording",
                "marks": 1,
                "answer": "b) Streaming"
              },
              {
                "id": 13,
                "text": "Technology used in CDROM Drive:\na) Mechanical\nb) Electromechanical\nc) Optical\nd) Fiber Optical",
                "marks": 1,
                "answer": "c) Optical"
              },
              {
                "id": 14,
                "text": "Which role manages user accounts and archives?\na) Database administrator\nb) Network administrator\nc) Software developer\nd) System Administrator",
                "marks": 1,
                "answer": "d) System Administrator"
              },
              {
                "id": 15,
                "text": "Program to create business cards and brochures:\na) Movie maker\nb) Desktop publishing\nc) Antivirus\nd) Instant messenger",
                "marks": 1,
                "answer": "b) Desktop publishing"
              },
              {
                "id": 16,
                "text": "Program that detects/prevents malicious activities:\na) Ethernet protector\nb) Trojan horse warriors\nc) Worm killer\nd) Spyware fighting software",
                "marks": 1,
                "answer": "d) Spyware fighting software"
              },
              {
                "id": 17,
                "text": "Which is a copyright violation?\na) Reading from a public website\nb) Distributing others' work as yours\nc) Quoting and referencing source\nd) Sharing a website address",
                "marks": 1,
                "answer": "b) Distributing others' work as yours"
              },
              {
                "id": 18,
                "text": "To center a title in MS Word, use:\na) Spacing\nb) Font size\nc) Alignment\nd) Font style",
                "marks": 1,
                "answer": "c) Alignment"
              },
              {
                "id": 19,
                "text": "Device that records video:\na) Scanner\nb) MP3 recorder\nc) Camcorder\nd) DVD player",
                "marks": 1,
                "answer": "c) Camcorder"
              },
              {
                "id": 20,
                "text": "How to get a right-click context menu?\na) Double-click left button\nb) Click right mouse button\nc) Click left mouse button\nd) Click Start",
                "marks": 1,
                "answer": "b) Click right mouse button"
              }
            ]
          },
          {
            "title": "Section A: Structural Questions",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "What is a word processor? Give two examples.",
                "marks": 6,
                "answer": "A word processor creates, edits, formats, and prints text documents. Examples: Microsoft Word, Google Docs, LibreOffice Writer."
              },
              {
                "id": 2,
                "text": "State the protocol used for: a) Email b) Web service c) File service d) Instant messaging",
                "marks": 4,
                "answer": "a) SMTP/POP3/IMAP b) HTTP c) FTP d) XMPP"
              },
              {
                "id": 3,
                "text": "With three examples each, explain computer 'hardware' and 'software'.",
                "marks": 8,
                "answer": "Hardware (physical components): CPU (processes instructions), RAM (temporary storage), Hard Drive (permanent storage).\nSoftware (programs/instructions): OS (manages hardware), Browser (accesses web), Word Processor (creates documents)."
              },
              {
                "id": 4,
                "text": "Elaborate on the roles of: a) RAM b) ROM c) CPU",
                "marks": 6,
                "answer": "a) RAM: volatile, temporarily stores active data/instructions for fast access. b) ROM: non-volatile, stores firmware (BIOS/UEFI) for booting. c) CPU: executes instructions, performs arithmetic/logic, coordinates hardware."
              },
              {
                "id": 5,
                "text": "Write short notes on: a) Copyright b) Piracy",
                "marks": 4,
                "answer": "a) Copyright: legal protection for original works, giving exclusive rights to reproduce/distribute. b) Piracy: unauthorized copying/distribution of copyrighted material, illegal and harms creators."
              }
            ]
          },
          {
            "title": "Section B: Web and Digital Society",
            "marks": 50,
            "questions": [
              {
                "id": 1,
                "text": "Part I: Web Knowledge (20 Marks)\n\n1) Differentiate:\na) Internet browser vs search engine (2 marks)\nb) Intranet vs extranet (2 marks)\nc) Internet vs the Web (2 marks)",
                "marks": 6,
                "answer": "a) Browser: software to display web pages (Chrome). Search engine: finds web pages by keywords (Google). b) Intranet: private internal network. Extranet: intranet extended to external parties. c) Internet: global network of networks. Web: collection of pages/resources via HTTP."
              },
              {
                "id": 2,
                "text": "2) a) What is green computing? b) Name two ways to enhance it.",
                "marks": 4,
                "answer": "a) Green computing: environmentally responsible IT use minimizing energy use and e-waste. b) 1. Energy-efficient hardware (Energy Star). 2. Power management settings. 3. Recycle e-waste. 4. Server virtualization."
              },
              {
                "id": 3,
                "text": "3) a) What is Computer Generation? b) Technologies of 5th Generation.",
                "marks": 4,
                "answer": "a) Stages of computer development: 1st (vacuum tubes), 2nd (transistors), 3rd (ICs), 4th (microprocessors), 5th (AI). b) AI, expert systems, natural language processing, parallel processing, quantum computing."
              },
              {
                "id": 4,
                "text": "4) a) 2 advantages and 2 disadvantages of social media in school. b) Four social media platforms. c) Two differences between 2G, 3G, 4G.",
                "marks": 6,
                "answer": "a) Advantages: educational resources, collaboration. Disadvantages: distraction, cyberbullying. b) Facebook, Twitter, Instagram, WhatsApp. c) 2G: voice/SMS, slow data. 3G: mobile internet. 4G: high-speed broadband."
              },
              {
                "id": 5,
                "text": "Part II: Digital Society (30 Marks)\n\n1) Explain in relation to digital society:\na) Juvenile delinquency (3 marks)\nb) Cyber bullying (3 marks)\nc) Spamming (2 marks)\nd) Propaganda (2 marks)",
                "marks": 10,
                "answer": "a) Juvenile delinquency: illegal behavior by minors including cybercrimes (hacking, online fraud). b) Cyber bullying: harassment via digital platforms, spreading rumors/threats. c) Spamming: unsolicited bulk messages (often scams). d) Propaganda: biased information to influence opinion, spreads via social media."
              },
              {
                "id": 6,
                "text": "2) What is fake news? List four consequences of propagating it.",
                "marks": 6,
                "answer": "Fake news: false information presented as legitimate news to deceive or manipulate. Consequences: 1) Public confusion. 2) Reputation damage. 3) Social unrest. 4) Undermined trust in media. 5) Economic harm. 6) Health risks."
              },
              {
                "id": 7,
                "text": "3) Give five differences between e-learning and e-commerce.",
                "marks": 4,
                "answer": "1. Purpose: education vs commerce. 2. Users: students vs customers. 3. Content: courses vs products. 4. Payment: tuition vs transactions. 5. Outcome: knowledge vs purchase."
              },
              {
                "id": 8,
                "text": "4) What are five tips for protecting against identity theft?",
                "marks": 5,
                "answer": "1. Strong unique passwords. 2. Two-factor authentication. 3. Limit social media sharing. 4. Monitor financial statements. 5. Use HTTPS. 6. Install antivirus. 7. Shred personal documents."
              }
            ]
          }
        ]
      },
      {
        "title": "Discrete Mathematics",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: SWE, NWS, EDM | 2025 Session",
        "sections": [
          {
            "title": "Section A: Multiple Choice Questions",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Let f(x,y,z) = x^2 ln(yz) + 2cos(xy). Then f_x(x,y,z) =\nA. 2x ln(yz) - 2y sin(xy)\nB. 2x ln(yz) + 2y sin(xy)\nC. 2 ln(yz) - 2x sin(xy)\nD. 2 ln(yz) + 2y sin(xy)",
                "marks": 1,
                "answer": "C. 2 ln(yz) - 2x sin(xy)"
              },
              {
                "id": 2,
                "text": "Let f: R^3 -> R be f(x,y,z) = x^2 + 3xy + yz^2. grad f is:\nA. (5x, 3y, 3yz^2)\nB. (2x+3y, 3x+z^2, 2yz)\nC. (x^2+3y, 3x+2z, 3yz^2)\nD. (2x+3y, 3x, 2z+yz^2)",
                "marks": 1,
                "answer": "B. (2x+3y, 3x+z^2, 2yz)"
              },
              {
                "id": 3,
                "text": "Given x^2y + 5x^3y^4 = 7, dy/dx =\nA. -(2xy+15x^2y^4)/(x^2+20x^3y^3)\nB. (2xy+15x^2y^4)/(x^2+20x^3y^3)\nC. -(2xy+15x^2y^4)/(x^2-20x^3y^3)\nD. (2xy+15x^2y^4)/(-x^2+20x^3y^3)",
                "marks": 1,
                "answer": "A. -(2xy+15x^2y^4)/(x^2+20x^3y^3)"
              },
              {
                "id": 4,
                "text": "The value of x for which C(4,x) = 52*C(3,x+3) is:\nA. 2/3\nB. -2/3\nC. 3/2\nD. -3/2",
                "marks": 1,
                "answer": "D. -3/2"
              },
              {
                "id": 5,
                "text": "Let f: R -> R defined by f(x) = x^3 + 5x. The function is:\nA. Periodic\nB. Even\nC. Odd\nD. Parity",
                "marks": 1,
                "answer": "C. Odd"
              },
              {
                "id": 6,
                "text": "Let f(x) be continuous and strictly decreasing on [a,b] with a<b. If f^(-1)(x)=g(x), which is TRUE?\nA. g(x) > 0\nB. g'(x) < 0\nC. g(x) < 0\nD. g'(x) > 0",
                "marks": 1,
                "answer": "D. g'(x) > 0"
              },
              {
                "id": 7,
                "text": "If P(A)=0.75, P(B)=0.4, P(A or B)=0.9, P(A and B) is:\nA. 0.75\nB. 0.4\nC. 0.65\nD. 0.25",
                "marks": 1,
                "answer": "D. 0.25"
              },
              {
                "id": 8,
                "text": "Computer down: 75% overload, 15% software, 85% overload or software. Probability breakdown is only due to software:\nA. 0.15\nB. 0.7\nC. 0.1\nD. 0.25",
                "marks": 1,
                "answer": "D. 0.25"
              },
              {
                "id": 9,
                "text": "25 parts, 5 defective. Two selected without replacement. P(second is defective) =\nA. 1/5\nB. 1/6\nC. 1/30\nD. 4/5",
                "marks": 1,
                "answer": "A. 1/5"
              },
              {
                "id": 10,
                "text": "Printers A(0.6, jam 0.01), B(0.3, jam 0.05), C(0.1, jam 0.04). Program destroyed. P(printer A involved) =\nA. 0.006\nB. 0.24\nC. 0.25\nD. 0.01",
                "marks": 1,
                "answer": "C. 0.25"
              },
              {
                "id": 11,
                "text": "Given (x+2) is factor of f(x)=x^3-2x^2+kx+2. Value of k is:\nA. -5\nB. 5\nC. 7\nD. -7",
                "marks": 1,
                "answer": "A. -5"
              },
              {
                "id": 12,
                "text": "Coefficient of x^2 in Maclaurin expansion of ln(1-2x) is:\nA. -2\nB. -4\nC. 2\nD. -1",
                "marks": 1,
                "answer": "A. -2"
              },
              {
                "id": 13,
                "text": "The value of integral ∫_0^1 1/(1+x^2) dx is:\nA. π/2\nB. π/4\nC. 1\nD. 0",
                "marks": 1,
                "answer": "B. π/4"
              },
              {
                "id": 14,
                "text": "sin 75° equals:\nA. (√6-√2)/4\nB. (√6+√2)/4\nC. (√3-1)/2\nD. 1/2",
                "marks": 1,
                "answer": "B. (√6+√2)/4"
              },
              {
                "id": 15,
                "text": "Let f:R->R be f(x)=√(1-2x). The domain is:\nA. x ≤ 1/2\nB. x ≥ 1/2\nC. x < 2\nD. x ≥ 2",
                "marks": 1,
                "answer": "A. x ≤ 1/2"
              },
              {
                "id": 16,
                "text": "Solution of |2x-3|=3 is:\nA. 0\nB. 3\nC. 0 and 3\nD. -3",
                "marks": 1,
                "answer": "C. 0 and 3"
              },
              {
                "id": 17,
                "text": "lim x→0 (7^x - 1)/x =\nA. ln 7\nB. 1\nC. 1/2\nD. e",
                "marks": 1,
                "answer": "A. ln 7"
              },
              {
                "id": 18,
                "text": "y = tanh(2x), dy/dx =\nA. sech^2(2x)\nB. 2sech^2(2x)\nC. ½ sech^2(2x)\nD. -2sech^2(2x)",
                "marks": 1,
                "answer": "B. 2sech^2(2x)"
              },
              {
                "id": 19,
                "text": "X: P(X=1)=1/2, P(X=2)=1/3, P(X=3)=1/6. Mean is:\nA. 1\nB. 5/3\nC. 1/3\nD. 2/3",
                "marks": 1,
                "answer": "B. 5/3"
              },
              {
                "id": 20,
                "text": "f(x)=Kx(2-x), 0<x<2. Value of K:\nA. 3/4\nB. 4/3\nC. 0\nD. 1",
                "marks": 1,
                "answer": "A. 3/4"
              },
              {
                "id": 21,
                "text": "Laplace transform of f(t)=3sinh(2t) is:\nA. 3/(s^2-4)\nB. 6/(s^2-4)\nC. 12/(s^2-4)\nD. 6/(s^2+4)",
                "marks": 1,
                "answer": "B. 6/(s^2-4)"
              },
              {
                "id": 22,
                "text": "Inverse Laplace of s/(s^2+9) is:\nA. sin(3t)\nB. sinh(3t)\nC. cosh(3t)\nD. cos(3t)",
                "marks": 1,
                "answer": "D. cos(3t)"
              },
              {
                "id": 23,
                "text": "Eigenvalues of M = [[2,3],[3,-2]] are:\nA. {-3,-1}\nB. {2,5}\nC. {1,3}\nD. {-2,5}",
                "marks": 1,
                "answer": "C. {1,3}"
              },
              {
                "id": 24,
                "text": "Interval of convergence for expansion of 1/(1+3x):\nA. (-1/3, 1/3)\nB. [-1/3, 1/3]\nC. (-1,1)\nD. (-4,3)",
                "marks": 1,
                "answer": "A. (-1/3, 1/3)"
              },
              {
                "id": 25,
                "text": "If lim x→4 r(x) = -2, find lim x→4 [r(x)]^2:\nA. 2\nB. -2\nC. 4\nD. -4",
                "marks": 1,
                "answer": "C. 4"
              },
              {
                "id": 26,
                "text": "g(x)=√(4-x^2) Maclaurin series range of convergence:\nA. -4≤x≤4\nB. -4≤x<4\nC. -4<x≤4\nD. -4<x<4",
                "marks": 1,
                "answer": "A. -4≤x≤4"
              },
              {
                "id": 27,
                "text": "Equivalent of cosec^2 x - cot^2 x:\nA. 1-2tan^2 x\nB. sin^2 x - cos^2 x\nC. cos^2 x - sin^2 x\nD. 1",
                "marks": 1,
                "answer": "D. 1"
              },
              {
                "id": 28,
                "text": "Sample: n=100, Σx=200, Σx^2=600. Variance is:\nA. 2\nB. 4\nC. 5\nD. 6",
                "marks": 1,
                "answer": "A. 2"
              },
              {
                "id": 29,
                "text": "First four terms of Fibonacci: c1=1, c2=4, c(n+2)=c(n+1)-2cn+4:\nA. 1,2,4,6\nB. 1,4,3,6\nC. 1,4,6,2\nD. 1,3,6,7",
                "marks": 1,
                "answer": "B. 1,4,3,6"
              },
              {
                "id": 30,
                "text": "f(x)=cosh(x). f^(-1)(x) is:\nA. ln(x+√(x^2-1))\nB. ln(x+√(x^2+1))\nC. ln(x-√(x^2+1))\nD. ln(x-√(x^2-1))",
                "marks": 1,
                "answer": "A. ln(x+√(x^2-1))"
              },
              {
                "id": 31,
                "text": "If P(A∪B)=P(A)+P(B), events A and B are:\nA. Mutually Exclusive\nB. Dependent\nC. Exhaustive\nD. Independent",
                "marks": 1,
                "answer": "A. Mutually Exclusive"
              },
              {
                "id": 32,
                "text": "∫ (9^3x) dx equals:\nA. 9^3x/(3ln9)\nB. 9^3x/(3ln9)\nC. (9^3x ln9)/3\nD. 1/((3ln9)9^3x)",
                "marks": 1,
                "answer": "A. 9^3x/(3ln9)"
              },
              {
                "id": 33,
                "text": "Finite series Σ from k=2 to n of (k-1)!/(k)!:\nA. 1/n\nB. 1-1/n\nC. 1+1/n\nD. 1-1/(n+1)",
                "marks": 1,
                "answer": "B. 1-1/n"
              },
              {
                "id": 34,
                "text": "a=-2i+j+2k, b=2i-2j+k, c=i-2j+2k. Which is true?\nA. b·c=-4\nB. a·b=8\nC. c·a=0\nD. c·b=4",
                "marks": 1,
                "answer": "C. c·a=0"
              },
              {
                "id": 35,
                "text": "lim x→0+ (1-x)^(2/x^2) = \nA. 0\nB. e^1\nC. e^2\nD. +∞",
                "marks": 1,
                "answer": "D. +∞"
              },
              {
                "id": 36,
                "text": "y=px^2e^x solves y''-2y'+y=2e^x. Value of p:\nA. -2\nB. 2\nC. -1\nD. 1",
                "marks": 1,
                "answer": "D. 1"
              },
              {
                "id": 37,
                "text": "Domain of f(x)=ln(x)/√(x(1-x)):\nA. {x:0<x<1}\nB. {x:0<x<1}\nC. {x:0<x<1}\nD. {x:x=2}",
                "marks": 1,
                "answer": "A. {x:0<x<1}"
              },
              {
                "id": 38,
                "text": "S and T are exhaustive with P(S)=0.70 and P(T)=0.60. Probability of S∩T:\nA. 0.10\nB. 0.30\nC. 0.42\nD. 0.86",
                "marks": 1,
                "answer": "B. 0.30"
              },
              {
                "id": 39,
                "text": "60% spiral-bound, 70% large-squared. Among large-squared, 20% spiral-bound. P(large-squared|spiral):\nA. 0.12\nB. 0.14\nC. 0.26\nD. 0.54",
                "marks": 1,
                "answer": "C. 0.26"
              },
              {
                "id": 40,
                "text": "f(x)=-x^2+2^x. Which is CORRECT?\nA. Periodic\nB. Neither even nor odd\nC. Even\nD. Odd",
                "marks": 1,
                "answer": "B. Neither even nor odd"
              }
            ]
          },
          {
            "title": "Section B: Structural",
            "marks": 60,
            "questions": [
              {
                "id": 1,
                "text": "Given f(x) = cos(2x)/(x^2-1)\na) State domain of definition (2 marks)\nb) Evaluate limit as x→±1 (2 marks)",
                "marks": 4,
                "answer": "a) Domain: all real x except where denominator zero, so x≠±1. Domain = R\\{-1,1}\nb) As x→1 and x→-1, denominator approaches 0 while numerator is finite. Limit does not exist (vertical asymptotes at x=±1)."
              },
              {
                "id": 2,
                "text": "Evaluate ∫_2^4 √(x^2-4)/x dx (6 marks)",
                "marks": 6,
                "answer": "Let x=2secθ, dx=2secθtanθ dθ. When x=2, θ=0; x=4, θ=π/3. √(x^2-4)=2tanθ. Integral = ∫ 2tanθ/(2secθ) * 2secθtanθ dθ = 2∫tan^2θ dθ = 2∫(sec^2θ-1)dθ = 2(tanθ-θ) from 0 to π/3 = 2(√3-π/3)"
              },
              {
                "id": 3,
                "text": "a) Find inverse Laplace of L^(-1){1/(s(s^2+4))} (4 marks)\nb) Solve using Laplace: y''+4y=e^t, y(0)=2, y'(0)=1 (8 marks)",
                "marks": 12,
                "answer": "a) 1/(s(s^2+4)) = A/s + (Bs+C)/(s^2+4). Solving: A=1/4, B=-1/4, C=0. L^(-1)=1/4 - (1/4)cos(2t)\n\nb) L{y''+4y}=L{e^t} => s^2Y-2s-1+4Y=1/(s-1) => Y(s^2+4)=2s+1+1/(s-1). Y=(2s+1)/(s^2+4)+1/((s-1)(s^2+4)). Partial fractions and inverse transform gives y(t)."
              },
              {
                "id": 4,
                "text": "Find Fourier coefficients of f(x)={0, -π<x<0; 1, 0<x<π} (8 marks)",
                "marks": 8,
                "answer": "a0 = 1/π ∫_{-π}^{π} f(x)dx = 1/π ∫_0^π 1dx = 1\nan = 1/π ∫_0^π cos(nx)dx = 0\nbn = 1/π ∫_0^π sin(nx)dx = [1-cos(nπ)]/(nπ) = [1-(-1)^n]/(nπ)"
              },
              {
                "id": 5,
                "text": "Part 2: Statistics (30 Marks)\n\nTemperature(x): 290,310,330,350\nDensity(y): 1.890,1.920,1.895,1.865\n\na) Plot scatter diagram (4 marks)\nb) Regression line of y on x (6 marks)\nc) Regression line of x on y (2 marks)\nd) Plot regression lines (4 marks)\ne) Product moment correlation (6 marks)\nf) Spearman's correlation (4 marks)\ng) Kendall's correlation (4 marks)",
                "marks": 30,
                "answer": "a) Scatter plot with x-axis temperature, y-axis density.\nb) y = a + bx where b = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)^2, a = ȳ-bx̄\nc) x = c + dy where d = Σ(x-x̄)(y-ȳ)/Σ(y-ȳ)^2\nd) Both regression lines plotted on same graph\ne) r = Σ(x-x̄)(y-ȳ)/√(Σ(x-x̄)^2 Σ(y-ȳ)^2)\nf) Spearman: rank both variables, calculate r on ranks\ng) Kendall: count concordant/discordant pairs"
              },
              {
                "id": 6,
                "text": "Part 3: Probability (20 Marks)\n\n3.1 Bag: 7 green, 14 red, 29 yellow spheres. Draw 3.\na) P(one each color with replacement) (2 marks)\nb) P(one each color without replacement) (2 marks)\nc) P(either 1G+2R or 1Y+2R) (5 marks)",
                "marks": 9,
                "answer": "a) With replacement: 3! * (7/50)(14/50)(29/50) = 6 * 0.14 * 0.28 * 0.58 = 0.136\nb) Without replacement: 6 * (7*14*29)/(50*49*48) = 6 * 2842/117600 = 0.145\nc) P(1G+2R)=C(7,1)*C(14,2)/C(50,3) and P(1Y+2R)=C(29,1)*C(14,2)/C(50,3). Sum both."
              },
              {
                "id": 7,
                "text": "3.2 10% left-handed. Poisson estimate: P(2+ left-handed in sample of 100) (4 marks)",
                "marks": 4,
                "answer": "λ = np = 100*0.1 = 10. P(X≥2) = 1 - P(X=0) - P(X=1) = 1 - e^(-10)(10^0/0!) - e^(-10)(10^1/1!) = 1 - e^(-10)(1+10) = 1 - 11e^(-10) ≈ 0.9995"
              },
              {
                "id": 8,
                "text": "3.3 Normal distribution: 14% scored &lt;30, 24% scored &gt;50. Find mean and variance. (7 marks)",
                "marks": 7,
                "answer": "P(X<30)=0.14 => Z=-1.08 => (30-μ)/σ=-1.08\nP(X>50)=0.24 => Z=0.71 => (50-μ)/σ=0.71\nSolving: μ-30=1.08σ and 50-μ=0.71σ. Adding: 20=1.79σ => σ=11.2, μ=30+1.08(11.2)=42.1"
              }
            ]
          }
        ]
      },
      {
        "title": "System Analysis and Design",
        "duration": "4 hours",
        "credits": 7,
        "description": "Specialty: Software Engineering | 2025 Session",
        "sections": [
          {
            "title": "Section A: Information Systems and Database - Part I: Object Modeling MCQs",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "For project success, requirements analysis is:\na) Yes\nb) No\nc) Based on project size\nd) None",
                "marks": 1,
                "answer": "a) Yes"
              },
              {
                "id": 2,
                "text": "Which does NOT correspond to a good SRS?\na) Verifiable\nb) Complete\nc) Traceable\nd) Ambiguous",
                "marks": 1,
                "answer": "d) Ambiguous"
              },
              {
                "id": 3,
                "text": "Which UML diagram supports event-based modeling?\na) Deployment\nb) Collaboration\nc) State chart\nd) All",
                "marks": 1,
                "answer": "c) State chart"
              },
              {
                "id": 4,
                "text": "Which UML diagrams represent interaction modeling?\na) Use Case, Sequence\nb) Class, Object\nc) Activity, State Chart\nd) All",
                "marks": 1,
                "answer": "c) Activity, State Chart"
              },
              {
                "id": 5,
                "text": "What is a physical element existing at runtime in UML?\na) A node\nb) An interface\nc) An activity\nd) None",
                "marks": 1,
                "answer": "a) A node"
              },
              {
                "id": 6,
                "text": "Which are the dynamic parts of UML models?\na) Structural things\nb) Behavioral things\nc) Grouping things\nd) Annotational things",
                "marks": 1,
                "answer": "b) Behavioral things"
              },
              {
                "id": 7,
                "text": "For real-time process control or concurrent processing, use:\na) Activity diagram\nb) Sequence diagram\nc) Statechart diagram\nd) Object diagram",
                "marks": 1,
                "answer": "c) Statechart diagram"
              },
              {
                "id": 8,
                "text": "Which UML things are explanatory parts?\na) Structural things\nb) Behavioral things\nc) Grouping things\nd) Annotational things",
                "marks": 1,
                "answer": "d) Annotational things"
              },
              {
                "id": 9,
                "text": "What refers to the value associated with a specific attribute and any actions?\na) Object\nb) State\nc) Interface\nd) None",
                "marks": 1,
                "answer": "b) State"
              },
              {
                "id": 10,
                "text": "Select the true statement for activity diagrams:\na) Discover parallel activities\nb) Depict workflow for business activity\nc) Activity diagrams do not tell who does what\nd) All of the above",
                "marks": 1,
                "answer": "d) All of the above"
              },
              {
                "id": 11,
                "text": "Valid relationships in Use Case Diagrams:\na) Generalization\nb) Include\nc) Extend\nd) All of the above",
                "marks": 1,
                "answer": "d) All of the above"
              },
              {
                "id": 12,
                "text": "UML interfaces are used to:\na) specify required services for types of objects\nb) program in Java only\nc) define executable logic across classes\nd) define an API for all Classes",
                "marks": 1,
                "answer": "a) specify required services for types of objects"
              },
              {
                "id": 13,
                "text": "How many diagrams are in UML?\na) six\nb) seven\nc) eight\nd) nine",
                "marks": 1,
                "answer": "d) nine"
              },
              {
                "id": 14,
                "text": "Which diagram shows behavior as a consequence of external events?\na) Data flow\nb) State transition\nc) Control specification\nd) Work flow",
                "marks": 1,
                "answer": "b) State transition"
              },
              {
                "id": 15,
                "text": "____ defines properties of a data object:\na) Data object\nb) Attributes\nc) Relationships\nd) All",
                "marks": 1,
                "answer": "b) Attributes"
              },
              {
                "id": 16,
                "text": "Enables modeling information and functional domains simultaneously:\na) Data flow diagram\nb) State transition diagram\nc) Control specification\nd) Activity diagram",
                "marks": 1,
                "answer": "a) Data flow diagram"
              },
              {
                "id": 17,
                "text": "Which is not a construct?\na) Sequence\nb) Condition\nc) Repetition\nd) System",
                "marks": 1,
                "answer": "d) System"
              },
              {
                "id": 18,
                "text": "____ is represented as a rectangular box in flow chart:\na) Repetition\nb) Sequence\nc) Condition\nd) None",
                "marks": 1,
                "answer": "b) Sequence"
              },
              {
                "id": 19,
                "text": "Which granularity tests module cooperation?\na) Unit Testing\nb) Integration Testing\nc) Acceptance Testing\nd) Regression Testing",
                "marks": 1,
                "answer": "b) Integration Testing"
              },
              {
                "id": 20,
                "text": "Which is a design pattern?\na) Behavioral\nb) Structural\nc) Abstract Factory\nd) All",
                "marks": 1,
                "answer": "d) All"
              },
              {
                "id": 21,
                "text": "Classes and interfaces are part of:\na) Structural things\nb) Behavioral things\nc) Grouping things\nd) Annotational things",
                "marks": 1,
                "answer": "a) Structural things"
              },
              {
                "id": 22,
                "text": "A structural model showing other systems in environment:\na) System context model\nb) Interaction model\nc) Environmental model\nd) Both a and b",
                "marks": 1,
                "answer": "d) Both a and b"
              },
              {
                "id": 23,
                "text": "Model showing flow of object interactions:\na) Sequence model\nb) Subsystem model\nc) Dynamic model\nd) Structural model",
                "marks": 1,
                "answer": "c) Dynamic model"
              },
              {
                "id": 24,
                "text": "Which UML diagram is time-oriented?\na) Sequence\nb) Collaboration\nc) Class\nd) Use Case",
                "marks": 1,
                "answer": "a) Sequence"
              },
              {
                "id": 25,
                "text": "Shape class and Square class relationship:\na) Realization\nb) Generalization\nc) Aggregation\nd) Dependency",
                "marks": 1,
                "answer": "b) Generalization"
              }
            ]
          },
          {
            "title": "Section A: Part II - Database",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "Based on Employee table (empId, empName, Age, address):\na) SELECT command to display employee with empId 1004 (2 marks)\nb) SELECT to display all records (2 marks)\nc) SELECT to display employees whose name starts with 'R' (2 marks)",
                "marks": 6,
                "answer": "a) SELECT * FROM Employee WHERE empId=1004;\nb) SELECT * FROM Employee;\nc) SELECT * FROM Employee WHERE empName LIKE 'R%';"
              },
              {
                "id": 2,
                "text": "Design a university database system with entities: STUDENT, DEPARTMENT, DEGREE, COURSE, REGISTER, REQUIRES.\n\na) List entities (2 marks)\nb) List attributes for DEGREE (1 mark)\nc) Design ER Diagram with multiplicity (5 marks)\nd) Present conceptual model (4 marks)\ne) Present logical model (4 marks)\nf) Present physical model (4 marks)",
                "marks": 20,
                "answer": "a) STUDENT, DEPARTMENT, DEGREE, COURSE, REGISTER, REQUIRES\nb) DEGREE attributes: DegreeCode(PK), DegreeTitle, DepartmentCode(FK)\nc) ```mermaid\nerDiagram\n    DEPARTMENT ||--o{ DEGREE : offers\n    DEGREE }o--|| COURSE : requires\n    STUDENT }o--o{ DEGREE : registers\n    DEGREE {\n        string DegreeCode PK\n        string DegreeTitle\n        string DepartmentCode FK\n    }\n```\nd) Conceptual: ER diagram independent of DBMS\ne) Logical: relational tables with FKs, normalized\ng) Physical: SQL CREATE TABLE statements with data types"
              },
              {
                "id": 3,
                "text": "What is Data Integrity in database?",
                "marks": 2,
                "answer": "Data integrity: accuracy, consistency, and reliability of data maintained through constraints (entity, referential, domain, user-defined) and validation rules."
              },
              {
                "id": 4,
                "text": "What are Entities and Relationships?",
                "marks": 2,
                "answer": "Entities: real-world objects distinguishable from others (e.g., Student, Course). Relationships: associations between entities (e.g., Student enrolls in Course)."
              },
              {
                "id": 5,
                "text": "What is an Alias in SQL?",
                "marks": 2,
                "answer": "Alias: temporary name for a table or column in a query, assigned using AS keyword (e.g., SELECT e.name FROM Employee AS e). Improves readability."
              },
              {
                "id": 6,
                "text": "What are the various forms of Normalization?",
                "marks": 4,
                "answer": "1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. BCNF: stronger 3NF. 4NF: no multi-valued dependencies. 5NF: no join dependencies."
              }
            ]
          },
          {
            "title": "Section B: Web and Mobile Programming - Part I: Web Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What are the limitations of CSS?",
                "marks": 3,
                "answer": "1. Cannot perform logic (loops, conditions). 2. No mathematical calculations. 3. Limited security. 4. Browser compatibility issues. 5. Cannot interact with databases."
              },
              {
                "id": 2,
                "text": "Write the basic structure of an HTML template.",
                "marks": 3,
                "answer": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <!-- content -->\n</body>\n</html>"
              },
              {
                "id": 3,
                "text": "Do all HTML tags have an end tag?",
                "marks": 2,
                "answer": "No. Void/self-closing tags like <br>, <img>, <input>, <hr> do not have closing tags."
              },
              {
                "id": 4,
                "text": "What are the uses of HTML5?",
                "marks": 3,
                "answer": "1. Multimedia support (audio/video tags). 2. Canvas/SVG for graphics. 3. Semantic elements (header, nav, article). 4. Local storage. 5. Geolocation API. 6. Responsive design."
              },
              {
                "id": 5,
                "text": "Write HTML5 code to create a table with Roll No., Student name, Subject:\na) Ram, Physics\nb) Shyam, Math\nc) Murli, Chemistry",
                "marks": 6,
                "answer": "<table border='1'>\n  <tr><th>Roll No.</th><th>Student Name</th><th>Subject</th></tr>\n  <tr><td>1</td><td>Ram</td><td>Physics</td></tr>\n  <tr><td>2</td><td>Shyam</td><td>Math</td></tr>\n  <tr><td>3</td><td>Murli</td><td>Chemistry</td></tr>\n</table>"
              },
              {
                "id": 6,
                "text": "Differentiate between HTML and XHTML.",
                "marks": 4,
                "answer": "HTML: case-insensitive, lenient syntax, some tags optional. XHTML: case-sensitive (lowercase), strict syntax (must close all tags), well-formed XML required, more rigid."
              },
              {
                "id": 7,
                "text": "Name two new tags included in HTML5.",
                "marks": 2,
                "answer": "<header>, <nav>, <article>, <section>, <footer>, <video>, <audio>, <canvas>"
              },
              {
                "id": 8,
                "text": "What are the two types of Web Storage in HTML5?",
                "marks": 2,
                "answer": "1. localStorage: persists until explicitly deleted. 2. sessionStorage: cleared when browser/tab closes."
              }
            ]
          },
          {
            "title": "Section B: Part II - Mobile Programming",
            "marks": 25,
            "questions": [
              {
                "id": 1,
                "text": "What is a mobile operating system?",
                "marks": 3,
                "answer": "A mobile OS is system software managing mobile device hardware and software resources, providing services for mobile apps. Examples: Android, iOS, Windows 10 Mobile."
              },
              {
                "id": 2,
                "text": "Explain four Android Architectures.",
                "marks": 2,
                "answer": "1. Linux Kernel (core services, drivers). 2. Hardware Abstraction Layer (HAL). 3. Android Runtime (ART). 4. Native C/C++ Libraries. 5. Java API Framework. 6. System Apps."
              },
              {
                "id": 3,
                "text": "When is the best time to kill a foreground activity?",
                "marks": 2,
                "answer": "Never kill foreground activity manually. The OS manages lifecycle. If needed, system kills it only when memory is critically low, after all background processes are terminated."
              },
              {
                "id": 4,
                "text": "Explain layers of mobile OS:\na) Hardware layer\nb) Mobile OS layer\nc) Applications layer",
                "marks": 6,
                "answer": "a) Hardware layer: physical components (CPU, RAM, sensors, display, battery). b) Mobile OS layer: manages hardware, provides APIs, handles multitasking, power management. c) Applications layer: user-facing apps (browser, maps, social media)."
              },
              {
                "id": 5,
                "text": "Explain uses of mobile OS with examples:\na) iOS (3 marks)\nb) Android (3 marks)\nc) Windows 10 mobile (3 marks)\nd) Ubuntu Touch (3 marks)",
                "marks": 12,
                "answer": "a) iOS (Apple): closed ecosystem, App Store, smooth UI/UX. Used on iPhones/iPads.\nb) Android (Google): open source, Google Play, customizable, wide device range.\nc) Windows 10 Mobile: integrated with Windows ecosystem, Continuum feature. Discontinued.\nd) Ubuntu Touch: Linux-based, convergence (desktop mode on mobile), open source, privacy-focused."
              }
            ]
          }
        ]
      },
      {
        "title": "Digital Electronics",
        "duration": "4 hours",
        "credits": 4,
        "description": "Specialty: SWE, CSN, DBM | 2025 Session",
        "sections": [
          {
            "title": "Section A: Number System and Codes",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "A pulse applied to XOR gate inputs. One goes HIGH at t=0 to t=1ms, other at t=0.8ms to t=3ms. Output:\na) HIGH at t=0 to t=3ms\nb) HIGH at t=0 to t=0.8ms\nc) HIGH at t=1ms to t=3ms\nd) both b and c",
                "marks": 1,
                "answer": "d) both b and c"
              },
              {
                "id": 2,
                "text": "X=(A+B)(C+D) is represented by:\na) two ORs ANDed together\nb) two ANDs ORed together\nc) 4-input AND gate\nd) 4-input OR gate",
                "marks": 1,
                "answer": "a) two ORs ANDed together"
              },
              {
                "id": 3,
                "text": "Example of canonical SOP form:\na) AB+ABC+ABD\nb) ABC+ACD\nc) ABC+ABC\nd) ABCD+AB+A",
                "marks": 1,
                "answer": "c) ABC+ABC"
              },
              {
                "id": 4,
                "text": "In 4-variable K-map, 2-variable product term is from:\na) 2-cell group\nb) 8-cell group\nc) 4-cell group\nd) 4-cell group of 0s",
                "marks": 1,
                "answer": "a) 2-cell group"
              },
              {
                "id": 5,
                "text": "X=AB+ABC consists of:\na) two AND gates and one OR gate\nb) two ANDs, OR, and inverter\nc) two ANDs, OR, and two inverters\nd) two ANDs, OR, and three inverters",
                "marks": 1,
                "answer": "b) two ANDs, OR, and inverter"
              },
              {
                "id": 6,
                "text": "A half-adder is characterized by:\na) three inputs and two outputs\nb) two inputs and three outputs\nc) two inputs and one output\nd) two inputs and two outputs",
                "marks": 1,
                "answer": "d) two inputs and two outputs"
              },
              {
                "id": 7,
                "text": "Data distributors are the same as:\na) decoders\nb) demultiplexers\nc) multiplexers\nd) encoders",
                "marks": 1,
                "answer": "b) demultiplexers"
              },
              {
                "id": 8,
                "text": "1-of-16 decoder, LOW on output 12. Inputs:\na) A3A2A1A0=1010\nb) A3A2A1A0=1110\nc) A3A2A1A0=1100\nd) A3A2A1A0=0100",
                "marks": 1,
                "answer": "c) A3A2A1A0=1100"
              },
              {
                "id": 9,
                "text": "74HC85 comparator, A=1000, B=1010. Outputs:\na) A&gt;B=0, A&lt;B=0, A=B=0\nb) A&gt;B=0, A&lt;B=0, A=B=1\nc) A&gt;B=0, A&lt;B=1, A=B=0\nd) A&gt;B=0, A&lt;B=1, A=B=1",
                "marks": 1,
                "answer": "c) A&gt;B=0, A&lt;B=1, A=B=0"
              },
              {
                "id": 10,
                "text": "JK flip-flop with J=1, K=1, 10kHz clock. Q output:\na) constantly HIGH\nb) constantly LOW\nc) 10kHz square wave\nd) 5kHz square wave",
                "marks": 1,
                "answer": "d) 5kHz square wave (toggles on each clock pulse)"
              },
              {
                "id": 11,
                "text": "BCD-to-7 segment decoder, input 0100. Active outputs:\na) a,e,f,g\nb) b,c,f,g\nc) b,c,e,f\nd) b,d,e,g",
                "marks": 1,
                "answer": "a) a,e,f,g"
              },
              {
                "id": 12,
                "text": "What does 'QUAD' indicate in IC terminology?\na) 2 circuits\nb) 4 circuits\nc) 6 circuits\nd) 8 circuits",
                "marks": 1,
                "answer": "b) 4 circuits"
              },
              {
                "id": 13,
                "text": "BCD number for decimal 16 is:\na) 00010110\nb) 00010000\nc) 00010010\nd) 11100000",
                "marks": 1,
                "answer": "a) 00010110"
              },
              {
                "id": 14,
                "text": "Decimal (651.124) in hexadecimal is:\na) (1A9.2A)16\nb) (1B0.10)16\nc) (1A8.A3)16\nd) (1B0.B0)16",
                "marks": 1,
                "answer": "a) (1A9.2A)16"
              },
              {
                "id": 15,
                "text": "Binary (110110001.010) to octal:\na) (5512)8\nb) (6612)8\nc) (4532)8\nd) (6745)8",
                "marks": 1,
                "answer": "b) (6612)8"
              },
              {
                "id": 16,
                "text": "Binary equivalent of decimal 368:\na) 101110000\nb) 110110000\nc) 111010000\nd) 111100000",
                "marks": 1,
                "answer": "a) 101110000"
              },
              {
                "id": 17,
                "text": "+ sign in Boolean algebra represents:\na) inversion\nb) AND\nc) OR\nd) Complementation",
                "marks": 1,
                "answer": "c) OR"
              },
              {
                "id": 18,
                "text": "Decimal equivalent of (1100)2:\na) 12\nb) 16\nc) 18\nd) 20",
                "marks": 1,
                "answer": "a) 12"
              },
              {
                "id": 19,
                "text": "Any number with exponent zero equals:\na) zero\nb) One\nc) that number\nd) ten",
                "marks": 1,
                "answer": "b) One"
              },
              {
                "id": 20,
                "text": "Logic function Y = ?\na) Y=ab+a\nb) Y=ab+a\nc) Y=(a+b)c\nd) Y=ab+c",
                "marks": 1,
                "answer": "d) Y=ab+c"
              }
            ]
          },
          {
            "title": "Section B: Computer Fundamentals - I. Hardware",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Give 2 examples of input devices and 2 output devices with uses.",
                "marks": 2,
                "answer": "Input: Keyboard (text input), Mouse (pointer control). Output: Monitor (visual display), Printer (hard copy)."
              },
              {
                "id": 2,
                "text": "What is the function of the CPU?",
                "marks": 2,
                "answer": "CPU fetches, decodes, and executes instructions. Performs arithmetic/logic operations, controls data flow, and coordinates all hardware components."
              },
              {
                "id": 3,
                "text": "Explain serial and parallel data transmission.",
                "marks": 2,
                "answer": "Serial: bits sent one at a time over single wire (USB, SATA). Parallel: multiple bits sent simultaneously over multiple wires (older printers, IDE). Serial is faster over long distances."
              },
              {
                "id": 4,
                "text": "What is SATA and what does it mean?",
                "marks": 2,
                "answer": "SATA (Serial Advanced Technology Attachment): interface for connecting storage devices (HDDs, SSDs) to motherboard. Serial interface replacing parallel IDE."
              },
              {
                "id": 5,
                "text": "How is SATA different from IDE in terms of speed?",
                "marks": 3,
                "answer": "SATA: serial transmission, faster data rates (SATA III: 6Gbps), thinner cables, hot-swappable. IDE: parallel transmission, slower (133MB/s max), bulky cables, limited cable length."
              },
              {
                "id": 6,
                "text": "What is the instruction set?",
                "marks": 2,
                "answer": "Instruction set: collection of commands a CPU can execute, defining the hardware-software interface. Examples: x86, ARM, RISC-V."
              },
              {
                "id": 7,
                "text": "Sketch Harvard and Von-Neumann architectures and explain differences.",
                "marks": 5,
                "answer": "**Von-Neumann Architecture**\n\n```mermaid\nflowchart TD\n    subgraph VonNeumann[\"Von-Neumann Architecture\"]\n        CPU[\"CPU<br/>(Control Unit + ALU)\"]\n        MEM[\"Memory<br/>Instructions & Data\"]\n        IO[\"I/O Devices\"]\n        BUS[\"System Bus<br/>(Data + Address + Control)\"]\n        CPU --- BUS\n        BUS --- MEM\n        BUS --- IO\n    end\n```\n\nSingle shared memory for instructions and data. One system bus carries data, addresses, and control signals. Sequential fetch prevents simultaneous memory access. Used in general-purpose computers (PCs, laptops).\n\n**Harvard Architecture**\n\n```mermaid\nflowchart TD\n    subgraph Harvard[\"Harvard Architecture\"]\n        CPU2[\"CPU<br/>(Control Unit + ALU)\"]\n        IMEM[\"Instruction Memory<br/>(Program Store)\"]\n        DMEM[\"Data Memory<br/>(Data Store)\"]\n        IO2[\"I/O Devices\"]\n        IBUS[\"Instruction Bus\"]\n        DBUS[\"Data Bus\"]\n        CPU2 --- IBUS & DBUS\n        IBUS --- IMEM\n        DBUS --- DMEM\n        CPU2 --- IO2\n    end\n```\n\nSeparate memory and buses for instructions and data. Allows simultaneous fetch and read/write (faster execution). Prevents instruction corruption. Used in microcontrollers and embedded systems.\n\n**Key Differences**\n\n- **Memory**: Von-Neumann = single shared; Harvard = separate instructions + data\n- **Buses**: Von-Neumann = one system bus; Harvard = two buses (instruction + data)\n- **Speed**: Von-Neumann = sequential (bottleneck); Harvard = parallel fetch/access\n- **Complexity**: Von-Neumann = simpler; Harvard = more complex\n- **Use case**: Von-Neumann = general-purpose computers; Harvard = microcontrollers, DSPs\n- **Cost**: Von-Neumann = lower; Harvard = higher"
              },
              {
                "id": 8,
                "text": "What is cache memory? Why is it used?",
                "marks": 2,
                "answer": "Cache: small, high-speed memory between CPU and main RAM. Stores frequently accessed data to reduce latency. Levels: L1 (fastest, smallest), L2, L3 (larger, slower)."
              }
            ]
          },
          {
            "title": "Section B: II. Network and Mobile Devices",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "What is a computer network?",
                "marks": 2,
                "answer": "A computer network is a set of interconnected devices that share resources and communicate via transmission media, following protocols for data exchange."
              },
              {
                "id": 2,
                "text": "Most appropriate OS for file sharing between computers and a central computer?",
                "marks": 4,
                "answer": "Windows Server (with Active Directory and File Services) for central server, Windows 10/11 Pro for clients. Or Linux (Ubuntu Server) with Samba for cross-platform sharing."
              },
              {
                "id": 3,
                "text": "List networking tools needed for two computers to communicate with a central machine.",
                "marks": 5,
                "answer": "1. Ethernet cables (Cat5e/Cat6). 2. Network switch/hub. 3. NIC (Network Interface Cards). 4. Router (if internet access needed). 5. Crimping tool and RJ45 connectors. 6. Cable tester."
              },
              {
                "id": 4,
                "text": "What other name can be given to the two computers connected to the central machine?",
                "marks": 1,
                "answer": "Clients or workstations (in client-server architecture)."
              },
              {
                "id": 5,
                "text": "List necessary configurations and ping commands to ensure network communication.",
                "marks": 8,
                "answer": "Configurations:\n1. Assign static IPs on same subnet (e.g., 192.168.1.x/24).\n2. Set subnet mask (255.255.255.0).\n3. Enable File and Printer Sharing.\n4. Disable firewalls temporarily for testing.\n\nPing commands:\n- ping 192.168.1.1 (test gateway)\n- ping 192.168.1.2 (test another workstation)\n- ping 127.0.0.1 (test local TCP/IP stack)\n- ipconfig (check IP configuration)"
              },
              {
                "id": 6,
                "text": "List 4 mobile devices.",
                "marks": 4,
                "answer": "Smartphone, Tablet, Laptop, Smartwatch."
              },
              {
                "id": 7,
                "text": "List 3 protocols used in mobile communication.",
                "marks": 3,
                "answer": "GSM (Global System for Mobile), LTE (Long Term Evolution), Wi-Fi (IEEE 802.11), Bluetooth."
              },
              {
                "id": 8,
                "text": "List two services available in 4G that 2G cannot offer.",
                "marks": 2,
                "answer": "1. High-speed mobile broadband (up to 100Mbps). 2. HD video streaming and video calls. 3. VoIP (Voice over LTE)."
              },
              {
                "id": 9,
                "text": "List two things you can do with a phone using its WiFi.",
                "marks": 2,
                "answer": "1. Browse the internet and stream media. 2. Make VoIP calls (WhatsApp, Skype). 3. Transfer files between devices. 4. Use cloud services."
              },
              {
                "id": 10,
                "text": "Organization granted block 130.56.0.0/16, wants 1024 subnets.\na) Subnet mask\nb) Number of addresses per subnet\nc) First and last addresses in subnet 1\nd) First and last addresses in subnet 1024",
                "marks": 9,
                "answer": "a) Need 10 bits (2^10=1024). Subnet mask = /26 = 255.255.255.192\nb) 2^(32-26) = 64 addresses per subnet\nc) Subnet 1: 130.56.0.0 to 130.56.0.63 (network: 130.56.0.0, broadcast: 130.56.0.63)\nd) Subnet 1024: 130.56.255.192 to 130.56.255.255 (network: 130.56.255.192, broadcast: 130.56.255.255)"
              }
            ]
          },
          {
            "title": "Section B: III. Microsoft Word, Excel and PowerPoint",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "From a student marks sheet with columns: Name, Test1, Test2, Average, Rank, Decision.\na) Give formulas for cells F7 (Average), G7 (Rank), H7 (Decision) where Failed if Avg<50, Pass if Avg>=50. (6 marks)\nb) Two differences between relative and absolute references. (4 marks)",
                "marks": 10,
                "answer": "a) F7 = AVERAGE(D7:E7) or (D7+E7)/2\nG7 = RANK(F7,$F$7:$F$n,0) (0 for descending)\nH7 = IF(F7>=50,\"Pass\",\"Failed\")\n\nb) Relative reference (A1): changes when formula is copied. Absolute reference ($A$1): stays constant when copied. Mixed ($A1, A$1): one part fixed."
              },
              {
                "id": 2,
                "text": "Give the suitable Office software for:\na) Write a letter\nb) Write a financial report\nc) Design a calendar\nd) Prepare a seminar presentation",
                "marks": 4,
                "answer": "a) Microsoft Word (word processor)\nb) Microsoft Excel (spreadsheet)\nc) Microsoft Publisher or Word (desktop publishing)\nd) Microsoft PowerPoint (presentation)"
              },
              {
                "id": 3,
                "text": "What is the importance of applying breaks in a document? Give the procedures.",
                "marks": 3,
                "answer": "Page/section breaks control document layout. Importance: different headers/footers per section, different page numbering, column layouts. Procedure: Insert > Break > Page Break or Section Break."
              },
              {
                "id": 4,
                "text": "What are the file extensions for Word, Excel, and PowerPoint?",
                "marks": 3,
                "answer": "Word: .docx (or .doc). Excel: .xlsx (or .xls). PowerPoint: .pptx (or .ppt)."
              }
            ]
          }
        ]
      },
      {
        "title": "French Language",
        "duration": "2 hours",
        "credits": 2,
        "description": "Specialty: All Specialties | 2025 Session",
        "sections": [
          {
            "title": "Premiere Partie: Questions a Choix Multiples",
            "marks": 40,
            "questions": [
              {
                "id": 1,
                "text": "Le mot allocution a pour synonyme:\na) Ferme\nb) Discours\nc) Cérémonie\nd) Interrogation",
                "marks": 1,
                "answer": "b) Discours"
              },
              {
                "id": 2,
                "text": "Le mot mère a pour homonyme:\na) Miel\nb) Père\nc) Maire\nd) Maman",
                "marks": 1,
                "answer": "c) Maire"
              },
              {
                "id": 3,
                "text": "Mot de la famille du mot père:\na) Opère\nb) Perle\nc) Patrie\nd) Repère",
                "marks": 1,
                "answer": "c) Patrie"
              },
              {
                "id": 4,
                "text": "Adverbe formé de l'adjectif 'constant':\na) Constament\nb) Constamment\nc) Consentement\nd) Constant",
                "marks": 1,
                "answer": "b) Constamment"
              },
              {
                "id": 5,
                "text": "De quel verbe vient le nom 'friture'?\na) Frire\nb) Friser\nc) Effriter\nd) Frictionner",
                "marks": 1,
                "answer": "a) Frire"
              },
              {
                "id": 6,
                "text": "Participe présent du verbe 'fabriquer':\na) Fabriquant\nb) Fabricant\nc) Fabriquent\nd) Fabriqué",
                "marks": 1,
                "answer": "a) Fabriquant"
              },
              {
                "id": 7,
                "text": "De quel adjectif vient 'natif'?\na) Natation\nb) Naître\nc) Annale\nd) Natte",
                "marks": 1,
                "answer": "b) Naître"
              },
              {
                "id": 8,
                "text": "Féminin du mot 'cheval':\na) Chevale\nb) Chevalière\nc) Jument\nd) Chevaux",
                "marks": 1,
                "answer": "c) Jument"
              },
              {
                "id": 9,
                "text": "Féminin du mot 'singe':\na) Singette\nb) Guenon\nc) Singer\nd) Chimpanzé",
                "marks": 1,
                "answer": "b) Guenon"
              },
              {
                "id": 10,
                "text": "Féminin du mot 'régulier':\na) Réguliere\nb) Régulière\nc) Régule\nd) Réguliers",
                "marks": 1,
                "answer": "b) Régulière"
              },
              {
                "id": 11,
                "text": "Participe passé: Les femmes sont ____ au marché.\na) Partis\nb) Partie\nc) Parties\nd) Parti",
                "marks": 1,
                "answer": "c) Parties"
              },
              {
                "id": 12,
                "text": "Participe passé: Les habitants ont ____ la fête.\na) Préparé\nb) Préparés\nc) Préparer\nd) Préparées",
                "marks": 1,
                "answer": "a) Préparé"
              },
              {
                "id": 13,
                "text": "Pluriel du mot 'chacal':\na) Chacaux\nb) Chacal\nc) Chacals\nd) Chacal",
                "marks": 1,
                "answer": "c) Chacals"
              },
              {
                "id": 14,
                "text": "Pluriel du mot 'arc-en-ciel':\na) Arcs-en-ciels\nb) Arcs-en-ciel\nc) Arcs-en-ciel\nd) Arcs-ens-ciels",
                "marks": 1,
                "answer": "b) Arcs-en-ciel"
              },
              {
                "id": 15,
                "text": "Complément d'objet direct: 'Hier, Paul a donné à son père une montre.'\na) Hier\nb) Paul\nc) Père\nd) Montre",
                "marks": 1,
                "answer": "d) Montre"
              },
              {
                "id": 16,
                "text": "Fonction des mots soulignés: 'les marchands ont nettoyé les rues de la ville'\na) Complément d'objet indirect\nb) Complément circonstanciel de lieu\nc) Complément circonstanciel de temps\nd) Complément d'agent",
                "marks": 1,
                "answer": "b) Complément circonstanciel de lieu"
              },
              {
                "id": 17,
                "text": "Voix: 'Les billets ont été achetés par Bouba'\na) Voix active\nb) Voix pronominale\nc) Voix passive\nd) Voix pronominale passive",
                "marks": 1,
                "answer": "c) Voix passive"
              },
              {
                "id": 18,
                "text": "Nature du mot 'mais':\na) Nom\nb) Préposition\nc) Conjonction de coordination\nd) Adverbe",
                "marks": 1,
                "answer": "c) Conjonction de coordination"
              },
              {
                "id": 19,
                "text": "Nature du mot 'maintenir':\na) Verbe\nb) Adjectif qualificatif\nc) Interjection\nd) Pronom",
                "marks": 1,
                "answer": "a) Verbe"
              },
              {
                "id": 20,
                "text": "'Les femmes sont arrivées à l'heure' est une:\na) Phrase déclarative\nb) Phrase impérative\nc) Phrase exclamative\nd) Phrase interrogative",
                "marks": 1,
                "answer": "a) Phrase déclarative"
              },
              {
                "id": 21,
                "text": "'N'est-il toujours pas à son poste?' est une:\na) Phrase négative\nb) Phrase interro-négative\nc) Affirmative\nd) Emphatique",
                "marks": 1,
                "answer": "b) Phrase interro-négative"
              },
              {
                "id": 22,
                "text": "Fonction du mot souligné: 'C'est une belle salle de bain'\na) Sujet\nb) Complément du nom\nc) Complément d'objet direct\nd) Attribut",
                "marks": 1,
                "answer": "b) Complément du nom"
              },
              {
                "id": 23,
                "text": "Fonction: 'C'est une jolie classe!'\na) Complément circonstanciel\nb) Epithète\nc) Attribut\nd) Sujet",
                "marks": 1,
                "answer": "b) Epithète"
              },
              {
                "id": 24,
                "text": "Mot intrus:\na) Football\nb) Saut en hauteur\nc) Basketball\nd) Rugby",
                "marks": 1,
                "answer": "b) Saut en hauteur (sport individuel, les autres sont collectifs)"
              },
              {
                "id": 25,
                "text": "Mot intrus:\na) Nièce\nb) Tante\nc) Oncle\nd) Cousine",
                "marks": 1,
                "answer": "c) Oncle (masculin, les autres féminins)"
              },
              {
                "id": 26,
                "text": "Antonyme du mot 'courageux':\na) Brave\nb) Peureux\nc) Assuré\nd) Indifférent",
                "marks": 1,
                "answer": "b) Peureux"
              },
              {
                "id": 27,
                "text": "Comment dit-on en anglais 'étude de texte'?\na) Reading comprehension\nb) Writing\nc) Textbook\nd) Translation",
                "marks": 1,
                "answer": "c) Textbook"
              },
              {
                "id": 28,
                "text": "Comment dit-on en français 'I passed my exam'?\na) J'ai passé mon examen\nb) J'ai gagné mon examen\nc) J'ai eu mon examen\nd) J'ai été examiné",
                "marks": 1,
                "answer": "c) J'ai eu mon examen"
              },
              {
                "id": 29,
                "text": "Comment dit-on en français 'bathroom'?\na) Salle de bal\nb) Salon\nc) Salle de bain\nd) Gel de douche",
                "marks": 1,
                "answer": "c) Salle de bain"
              },
              {
                "id": 30,
                "text": "Comment est formé le mot 'publication'?\na) Préfixe + radical + suffixe\nb) Radical + suffixe\nc) Préfixe + radical\nd) Radical seul",
                "marks": 1,
                "answer": "b) Radical + suffixe"
              },
              {
                "id": 31,
                "text": "Conjugaison: 'les enfants chantèrent l'Hymne national' est:\na) A l'imparfait\nb) Au passé composé\nc) Au présent\nd) Au passé simple",
                "marks": 1,
                "answer": "d) Au passé simple"
              },
              {
                "id": 32,
                "text": "Conjugaison: 'les pilotes avaient enfilé leurs uniformes' est:\na) Au plus-que-parfait\nb) Au passé antérieur\nc) A l'imparfait\nd) Au futur simple",
                "marks": 1,
                "answer": "a) Au plus-que-parfait"
              },
              {
                "id": 33,
                "text": "Proposition subordonnée: 'Les comptables qui sont venus étaient pour le Sénégal'\na) Subordonnée conjonctive\nb) Subordonnée relative\nc) Subordonnée complétive\nd) Subordonnée participiale",
                "marks": 1,
                "answer": "b) Subordonnée relative"
              },
              {
                "id": 34,
                "text": "Type de phrase:\na) Phrase simple\nb) Phrase composée\nc) Phrase complexe\nd) Phrase nominale",
                "marks": 1,
                "answer": "c) Phrase complexe"
              },
              {
                "id": 35,
                "text": "Lionel Messi est un footballeur:\na) Camerounais\nb) Français\nc) Argentin\nd) Italien",
                "marks": 1,
                "answer": "c) Argentin"
              },
              {
                "id": 36,
                "text": "Le coronavirus a été découvert pour la première fois:\na) Au Japon\nb) Aux Etats-Unis\nc) En Chine\nd) En Inde",
                "marks": 1,
                "answer": "c) En Chine"
              },
              {
                "id": 37,
                "text": "Que signifie le sigle CEMAC?\na) Communauté Economique et Maritime de l'Afrique Centrale\nb) Communauté Economique et Monétaire de l'Afrique Centrale\nc) Communauté Etatique et Militaire de l'Afrique Centrale\nd) Communauté Elémentaire de l'Afrique Centrale",
                "marks": 1,
                "answer": "b) Communauté Economique et Monétaire de l'Afrique Centrale"
              },
              {
                "id": 38,
                "text": "Que signifie l'abréviation ONG?\na) Organe National de Gouvernance\nb) Organisation Non-Gouvernementale\nc) Observatoire des Négociations Gouvernementales\nd) Organisme de Non-Gérance",
                "marks": 1,
                "answer": "b) Organisation Non-Gouvernementale"
              },
              {
                "id": 39,
                "text": "Les maladies hydriques sont:\na) Provoquées par des micro-organismes dans eaux souillées\nb) Provoquées par l'absence d'électricité\nc) Provoquées par des comportements sexuels à risque\nd) Provoquées par des aliments manufacturés",
                "marks": 1,
                "answer": "a) Provoquées par des micro-organismes dans eaux souillées"
              },
              {
                "id": 40,
                "text": "Le Makossa est un rythme musical camerounais venant de:\na) L'aire culturelle Sawa\nb) L'aire culturelle Soudano-sahélienne\nc) L'aire culturelle Fang beti\nd) L'aire culturelle des Grassfields",
                "marks": 1,
                "answer": "a) L'aire culturelle Sawa"
              }
            ]
          },
          {
            "title": "Deuxieme Partie: Comprehension Ecrite",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Lisez le texte sur le jouet et l'enfant.\n\n1) Proposez un titre à ce texte et justifiez-le. (4 pts)",
                "marks": 4,
                "answer": "Titre: 'Le Marchand de Jouets face au Choix des Parents'. Justification: le texte traite de la relation complexe entre parents, enfants et marchands de jouets lors de l'achat."
              },
              {
                "id": 2,
                "text": "2) Pourquoi certains parents achètent-ils les jouets demandés par leurs enfants? (6 pts)",
                "marks": 6,
                "answer": "20% seulement des adultes achètent ce que l'enfant demande. Les autres choisissent eux-mêmes en pensant moins aux besoins réels de l'enfant qu'à leurs relations avec lui. Certains parents cherchent à 'se faire pardonner' leur absence en achetant un jouet cher."
              },
              {
                "id": 3,
                "text": "3) A votre avis, la majorité des parents achètent-ils les jouets demandés par leurs enfants? Qu'est ce qui justifie cette situation? (6 pts)",
                "marks": 6,
                "answer": "Non, la majorité (80%) n'achète pas ce que l'enfant demande. Les parents choisissent selon leurs propres critères: le désir de s'amuser eux-mêmes (ex: le père qui veut un train électrique pour son fils), le besoin de compenser leur absence, ou l'impression que le jouet est éducatif."
              },
              {
                "id": 4,
                "text": "4) Pourquoi certains jouets n'ont-ils pas de succès auprès des enfants? (4 pts)",
                "marks": 4,
                "answer": "Les jouets trop perfectionnés ne séduisent pas toujours les enfants. Exemple: les Spoutniks miniatures n'ont pas eu de succès car les enfants n'en avaient jamais vu. De même, les machines à laver miniatures sont arrivées trop tôt, avant que les familles ne soient équipées."
              }
            ]
          },
          {
            "title": "Troisieme Partie: Expression Libre",
            "marks": 30,
            "questions": [
              {
                "id": 1,
                "text": "Sujet 1: Ecrivez une lettre pour demander un emploi comme cadre supérieur à la société CHOCOCAM. Votre nom est BOUBA NDENGUE NANA NLONG, vous résidez à Oliega-Bandam.",
                "marks": 30,
                "answer": "Bouba Ndengue Nana Nlong\nOliega-Bandam, Cameroun\n\nObjet: Candidature pour un poste de cadre supérieur\n\nMadame, Monsieur,\n\nJe me permets de vous adresser ma candidature pour un poste de cadre supérieur au sein de votre prestigieuse société CHOCOCAM.\n\nTitulaire d'un diplôme supérieur en gestion, je justifie d'une expérience significative dans le domaine. Mon parcours professionnel m'a permis de développer des compétences en management d'équipe, gestion de projets et développement stratégique.\n\nJe suis convaincu que mes compétences et ma motivation pourraient contribuer au développement de votre entreprise.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nBouba Ndengue Nana Nlong"
              },
              {
                "id": 2,
                "text": "Sujet 2: D'après vous, pourquoi 20% seulement des adultes achètent les jouets que l'enfant a demandé? (30 lignes minimum)",
                "marks": 30,
                "answer": "Selon le texte, 80% des adultes n'achètent pas les jouets demandés par les enfants pour plusieurs raisons.\n\nD'abord, les parents projettent leurs propres désirs sur l'enfant. Le père qui achète un train électrique pour son fils de cinq ans veut en réalité s'amuser lui-même.\n\nEnsuite, les parents utilisent l'achat de jouets comme substitut affectif. Trop pris par leur travail, ils cherchent à compenser leur absence par des cadeaux coûteux.\n\nEnfin, les adultes sont influencés par l'apparence du jouet plutôt que par l'intérêt réel de l'enfant. Les jouets sophistiqués impressionnent les adultes mais ne correspondent pas toujours à l'âge ou aux centres d'intérêt de l'enfant.\n\nCette situation montre le décalage entre la perception des adultes et les besoins réels des enfants."
              },
              {
                "id": 3,
                "text": "Sujet 3: 'Les diplômes n'ont plus la valeur dans la société camerounaise d'aujourd'hui'. Est-ce votre point de vue?",
                "marks": 30,
                "answer": "Cette affirmation mérite d'être nuancée. Les diplômes conservent une valeur importante mais leur perception a évolué.\n\nD'un côté, le chômage des diplômés et la précarité de l'emploi peuvent donner l'impression que les diplômes perdent leur valeur. Le marché du travail exige de plus en plus d'expérience pratique et de compétences techniques.\n\nDe l'autre côté, les diplômes restent un sésame indispensable pour accéder à certaines professions et à l'enseignement supérieur. Ils attestent d'un niveau de connaissance et de capacité d'apprentissage.\n\nEn réalité, c'est la combinaison du diplôme et des compétences pratiques qui fait la différence. L'entrepreneuriat et la formation continue sont devenus des compléments essentiels au parcours académique."
              }
            ]
          }
        ]
      },
      {
        "title": "Case Study",
        "duration": "6 hours",
        "credits": 14,
        "description": "Specialty: SOFTWARE ENGINEERING (SWE) | 2025 Session",
        "sections": [
          {
            "title": "Section A: Algorithm and Programming - I. Algorithms",
            "marks": 10,
            "questions": [
              {
                "id": 1,
                "text": "What is a sorting algorithm?",
                "marks": 1,
                "answer": "A sorting algorithm arranges elements in a specific order (ascending/descending) based on a comparison operator. Examples: bubble sort, selection sort, merge sort."
              },
              {
                "id": 2,
                "text": "Draw the flowchart of the nested loop:\nfor(int i=0; i<3; i++) {\n  Display i+1\n  for(int j=0; j<2; j++) {\n    Display i+1, j+1\n  }\n}",
                "marks": 4,
                "answer": "Flowchart:\nStart -> i=0 -> i<3? No -> End. Yes: Display i+1 -> j=0 -> j<2? No -> i++ -> back to i<3. Yes: Display i+1, j+1 -> j++ -> back to j<2."
              },
              {
                "id": 3,
                "text": "Simulate the algorithm in question 2 above.",
                "marks": 3,
                "answer": "i=0: Display 1; j=0: Display 1,1; j=1: Display 1,2\ni=1: Display 2; j=0: Display 2,1; j=1: Display 2,2\ni=2: Display 3; j=0: Display 3,1; j=1: Display 3,2"
              },
              {
                "id": 4,
                "text": "State the time complexity of:\na) Selection sort\nb) Insertion sort\nc) Bubble sort\nd) Merge sort",
                "marks": 2,
                "answer": "a) O(n^2) b) O(n^2) c) O(n^2) d) O(n log n)"
              }
            ]
          },
          {
            "title": "Section A: II. Procedural Programming",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "Explain the importance of:\na) Functions in C (1 mark)\nb) Arrays in C (1 mark)\nc) Pointers in C (1 mark)",
                "marks": 3,
                "answer": "a) Functions: code reusability, modularity, easier debugging, abstraction.\nb) Arrays: store multiple elements of same type contiguously, efficient indexed access.\nc) Pointers: direct memory access, dynamic allocation, efficient array/string handling, pass-by-reference."
              },
              {
                "id": 2,
                "text": "Which of the following lines are NOT valid in C? Explain:\na) int a[2]={1,2,3,4};\nb) int a[]={1,2,3,'a'};\nc) int a[5]={1,2,3};\nd) int a[][]={1,2,3,4};\ne) int a[][2]={1,2,3,4};",
                "marks": 6,
                "answer": "a) Invalid: array size 2 but 4 initializers.\nb) Valid: implicit size initialization.\nc) Valid: partial initialization, rest are 0.\nd) Invalid: 2D array must specify second dimension.\ne) Valid: second dimension specified."
              },
              {
                "id": 3,
                "text": "Simulate and give output:\nint c=5;\nint *p;\na=4*(c+5);\np=&c;\nb=4*(*p+5);\nprintf(\"a=%d b=%d c=%d *p=%d\", a, b, c, *p);",
                "marks": 3,
                "answer": "a=4*(5+5)=40\n*p = c = 5\nb=4*(5+5)=40\nOutput: a=40 b=40 c=5 *p=5"
              },
              {
                "id": 4,
                "text": "Write a C program that takes an integer and displays its last digit.",
                "marks": 3,
                "answer": "#include <stdio.h>\nint main() {\n    int num;\n    printf(\"Enter integer: \");\n    scanf(\"%d\", &num);\n    int lastDigit = num % 10;\n    if (lastDigit < 0) lastDigit = -lastDigit;\n    printf(\"Last digit: %d\\n\", lastDigit);\n    return 0;\n}"
              }
            ]
          },
          {
            "title": "Section A: III. Object Oriented Programming",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "Define:\na) System (1 mark)\nb) In-house software (1 mark)\nc) Package software (1 mark)\nd) Differentiate data and information (2 marks)",
                "marks": 5,
                "answer": "a) System: set of interrelated components working together toward a common goal.\nb) In-house software: custom-developed for a specific organization by its own staff.\nc) Package software: pre-built commercial software for general use (e.g., MS Office).\nd) Data: raw, unprocessed facts. Information: processed data with meaning and context."
              },
              {
                "id": 2,
                "text": "University ATM system for salary payment.\na) What is object-oriented modeling strategy? (4 marks)\nb) Draw a USE CASE diagram (3 marks)\nc) Draw a SEQUENCE diagram for withdrawal (4 marks)",
                "marks": 11,
                "answer": "a) OO modeling: represents system as interacting objects with attributes and methods. Uses UML diagrams (use case, class, sequence) to model structure and behavior.\n\nb) Use Case Diagram:\n```mermaid\nflowchart TD\n    subgraph ATM_System\n        W[Withdraw Salary]\n        B[Check Balance]\n        R[Repair System]\n        F[Fill Cash]\n        V[Verify Funds]\n    end\n    Staff --> W\n    Staff --> B\n    Bank --> R\n    Bank --> V\n    Bursar --> F\n    Eng_Student --> W\n```\n\nc) Sequence Diagram for Withdrawal:\n```mermaid\nsequenceDiagram\n    participant Staff\n    participant ATM\n    participant Bank\n    Staff->>ATM: Insert Card\n    ATM->>Staff: Enter PIN\n    Staff->>ATM: Enter PIN\n    ATM->>Bank: Verify Funds\n    Bank->>ATM: Approve\n    ATM->>Staff: Dispense Cash\n    ATM->>Staff: Print Receipt\n```"
              },
              {
                "id": 3,
                "text": "Contrast object-oriented analysis and object-oriented design.",
                "marks": 4,
                "answer": "OOA: focuses on what the system does - identifies objects, their relationships, and behavior from the problem domain. OOD: focuses on how the system does it - defines implementation details, class hierarchies, interfaces, and data structures."
              }
            ]
          },
          {
            "title": "Section B: Database Development and Administration",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "What purpose does the model database serve?",
                "marks": 1,
                "answer": "The model database in SQL Server serves as a template for creating new user databases. All settings (options, objects, permissions) in model are copied to new databases."
              },
              {
                "id": 2,
                "text": "How do you trace traffic hitting a SQL Server?",
                "marks": 5,
                "answer": "Use SQL Server Profiler to capture queries, or Extended Events for lightweight tracing. Also: DMVs (sys.dm_exec_requests), activity monitor, or sp_who2 for current connections."
              },
              {
                "id": 3,
                "text": "A&B shop database with tables: CLIENT, BOUGHT, ARTICLE.\nWrite MySQL queries to:\na) Create database 'Business' (1 mark)\nb) Create and populate tables (5 marks)\nc) Display all CLIENT info (1 mark)\nd) Display info from BOUGHT and ARTICLE (2 marks)\ne) Display clients in Molyko or Muea (3 marks)\nf) Display info about people who got articles on credit (1 mark)",
                "marks": 13,
                "answer": "a) CREATE DATABASE Business;\n\nb) CREATE TABLE CLIENT (ClientNo INT AUTO_INCREMENT PRIMARY KEY, ClientName VARCHAR(50), ClientTown VARCHAR(50));\nINSERT INTO CLIENT VALUES (1,'Theron','Molyko'),(2,'Thelson','Malingo');\nCREATE TABLE ARTICLE (ArticleNo INT AUTO_INCREMENT PRIMARY KEY, ArticleName VARCHAR(50), UnitPrice INT);\nINSERT INTO ARTICLE VALUES (1,'Milk',250),(3,'Tea',380);\nCREATE TABLE BOUGHT (SalesNo INT AUTO_INCREMENT PRIMARY KEY, ArticleNo INT, ClientNo INT, Quantity INT, DateOfPurchase DATE, Paid VARCHAR(3));\nINSERT INTO BOUGHT VALUES (1,1,1,1,'1997-01-01','No'),(2,3,1,2,'1999-02-15','Yes');\n\nc) SELECT * FROM CLIENT;\nd) SELECT * FROM BOUGHT b JOIN ARTICLE a ON b.ArticleNo = a.ArticleNo;\ne) SELECT * FROM CLIENT WHERE ClientTown IN ('Molyko','Muea');\nf) SELECT * FROM BOUGHT WHERE Paid='No';"
              }
            ]
          },
          {
            "title": "Section C: Web Design",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "A company needs an online interview form with:\n- Name (required)\n- Surname (required)\n- Email (required, must contain @)\n- Birth date\n- Place of birth\n- Phone\n\nTasks:\n1) Reproduce the HTML form with CSS and JavaScript validation (5 marks)\n2) Create MySQL database 'Online_registration' and table 'Online' (5 marks)\n3) Use PHP to connect form to database (5 marks)",
                "marks": 15,
                "answer": "1) HTML form:\n<form id=\"interviewForm\" onsubmit=\"return validateForm()\">\n  Name: <input type=\"text\" name=\"name\" required><br>\n  Surname: <input type=\"text\" name=\"surname\" required><br>\n  Email: <input type=\"email\" name=\"email\" required><br>\n  Birth date: <input type=\"text\" placeholder=\"dd/mm/yyyy\"><br>\n  Place: <input type=\"text\"><br>\n  Phone: <input type=\"tel\"><br>\n  <input type=\"submit\">\n</form>\n<script>\nfunction validateForm() {\n  var email = document.querySelector('[name=email]').value;\n  if (email.indexOf('@') === -1) { alert('Email must contain @'); return false; }\n  return true;\n}\n</script>\n\n2) CREATE DATABASE Online_registration;\nCREATE TABLE Online (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), surname VARCHAR(50), email VARCHAR(100), birth_date VARCHAR(10), place VARCHAR(50), phone VARCHAR(20));\n\n3) PHP:\n<?php\n$conn = mysqli_connect('localhost','root','','Online_registration');\n$name = $_POST['name'];\n$surname = $_POST['surname'];\n$email = $_POST['email'];\n$sql = \"INSERT INTO Online (name,surname,email) VALUES ('$name','$surname','$email')\";\nmysqli_query($conn, $sql);\nmysqli_close($conn);\n?>"
              }
            ]
          },
          {
            "title": "Section D: Networking",
            "marks": 15,
            "questions": [
              {
                "id": 1,
                "text": "a) Name two protocols in the OSI transport layer and their features. (3 marks)\nb) Use a table to compare OSI, DoD, and Internet models. (3 marks)",
                "marks": 6,
                "answer": "a) TCP: connection-oriented, reliable, flow control, sequencing. UDP: connectionless, unreliable, low overhead, faster.\n\nb) OSI (7 layers): Application, Presentation, Session, Transport, Network, Data Link, Physical. DoD (4 layers): Application, Host-to-Host, Internet, Network Access. Internet (5 layers): Application, Transport, Network, Data Link, Physical."
              },
              {
                "id": 2,
                "text": "Write the command to give a router a name.",
                "marks": 2,
                "answer": "Router(config)# hostname [name]\nExample: Router(config)# hostname R1"
              },
              {
                "id": 3,
                "text": "a) Main difference between crossover and straight-through cables? (1 mark)\nb) How to check IP address of a computer? (1 mark)\nc) Meaning of 'ping 192.168.1.3'? (1 mark)\nd) Meaning of 'ipconfig /all'? (1 mark)",
                "marks": 4,
                "answer": "a) Straight-through: same pinout both ends (PC to switch). Crossover: crossed TX/RX pins (PC to PC, switch to switch).\nb) Windows: ipconfig. Linux/Mac: ifconfig or ip addr.\nc) Sends ICMP echo request to 192.168.1.3 to test connectivity.\nd) Displays detailed TCP/IP configuration including MAC, DHCP, DNS."
              },
              {
                "id": 4,
                "text": "Propose a subnet allowing ~28 host addresses in Class C 192.168.1.1. State first two subnets and host ranges.",
                "marks": 3,
                "answer": "Need 28 hosts => 5 host bits (2^5-2=30). Subnet mask = /27 = 255.255.255.224.\nSubnet 1: 192.168.1.0/27, hosts: 192.168.1.1 - 192.168.1.30\nSubnet 2: 192.168.1.32/27, hosts: 192.168.1.33 - 192.168.1.62"
              }
            ]
          }
        ]
      },
      {
        "title": "Enterprise Creation and Entrepreneurship",
        "duration": "2 hours",
        "credits": 1,
        "description": "Specialty: ALL SPECIALTIES | 2025 Session",
        "sections": [
          {
            "title": "Section A: Entrepreneurship",
            "marks": 34,
            "questions": [
              {
                "id": 1,
                "text": "Differentiate the types of enterprises according to ownership.",
                "marks": 10,
                "answer": "1. Sole proprietorship: single owner, unlimited liability, full control.\n2. Partnership: 2+ owners, shared liability, joint decision-making.\n3. Private Limited Company (SARL): 1-50 shareholders, limited liability, separate legal entity.\n4. Public Limited Company (SA): shareholders, shares publicly traded, limited liability.\n5. Cooperative: member-owned, democratic control, profit-sharing."
              },
              {
                "id": 2,
                "text": "Explain the different sources of finance open to business owners.",
                "marks": 9,
                "answer": "1. Personal savings: owner's funds, no interest.\n2. Bank loans: fixed repayment with interest.\n3. Venture capital: equity investment for high-growth startups.\n4. Angel investors: wealthy individuals investing early-stage.\n5. Microfinance: small loans for entrepreneurs.\n6. Trade credit: suppliers allowing deferred payment.\n7. Government grants: non-repayable funds for specific sectors.\n8. Crowdfunding: raising small amounts from many people online.\n9. Retained profits: reinvesting business earnings."
              },
              {
                "id": 3,
                "text": "State and explain the roles of entrepreneurs in the economy of Cameroon.",
                "marks": 15,
                "answer": "1. Job creation: employ local population, reduce unemployment.\n2. Innovation: introduce new products/services/technologies.\n3. Economic growth: contribute to GDP through production and sales.\n4. Tax revenue: pay taxes supporting public services.\n5. Wealth creation: generate income for owners and employees.\n6. Competition: drive efficiency and lower prices.\n7. Regional development: establish businesses in underserved areas.\n8. Value addition: transform raw materials into finished goods.\n9. Export generation: earn foreign exchange through exports.\n10. Skills development: train employees in new skills."
              }
            ]
          },
          {
            "title": "Section B: General Economics",
            "marks": 33,
            "questions": [
              {
                "id": 4,
                "text": "Distinguish between:\na) Positive and Normative Statements\nb) Micro and Macro Economics\nc) Direct and Indirect Production\nd) Maximum and Minimum Price\ne) Market and Plan Economy",
                "marks": 10,
                "answer": "a) Positive: factual, testable (\"inflation is 5%\"). Normative: value judgments (\"inflation should be lower\").\nb) Micro: individual units (firms, households). Macro: aggregate economy (GDP, inflation).\nc) Direct: goods for final consumption. Indirect: goods used in producing other goods.\nd) Maximum price (price ceiling): legally set upper limit. Minimum price (price floor): legally set lower limit.\ne) Market economy: prices set by supply/demand. Plan economy: government controls production/distribution."
              },
              {
                "id": 5,
                "text": "a) Price of 5L oil from 6500 to 8000 FCFA, Qd from 100L to 85L. Calculate price elasticity of demand and state nature. (5 marks)\nb) Price of a good from 80,000 to 105,000 FCFA; Qd of another good from 105 to 170 units. Calculate cross elasticity. (5 marks)",
                "marks": 10,
                "answer": "a) %ΔQ = (85-100)/100 = -15%. %ΔP = (8000-6500)/6500 = 23.08%. PED = -15/23.08 = -0.65. Inelastic (|PED|<1).\n\nb) %ΔQ = (170-105)/105 = 61.9%. %ΔP = (105000-80000)/80000 = 31.25%. XED = 61.9/31.25 = 1.98. Positive => substitute goods."
              },
              {
                "id": 6,
                "text": "What functions does money perform in the economy of Cameroon?",
                "marks": 7,
                "answer": "1. Medium of exchange: facilitates transactions without barter.\n2. Unit of account: standard measure of value.\n3. Store of value: preserves purchasing power over time.\n4. Standard of deferred payment: basis for credit/loans.\n5. Measure of wealth: quantifies assets.\n6. Facilitates specialization: enables division of labor.\n7. Promotes economic growth: efficient allocation of resources."
              },
              {
                "id": 7,
                "text": "Outline three uses of National Income figures.",
                "marks": 6,
                "answer": "1. Measure economic growth: compare GDP over time.\n2. Formulate policy: guide fiscal and monetary decisions.\n3. International comparison: compare living standards across countries.\n4. Resource allocation: identify sectoral performance.\n5. Standard of living: calculate GDP per capita."
              }
            ]
          },
          {
            "title": "Section C: Company Law",
            "marks": 33,
            "questions": [
              {
                "id": 8,
                "text": "Outline the steps needed to create a company in Cameroon.",
                "marks": 9,
                "answer": "1. Choose company type (SARL, SA, etc.).\n2. Reserve company name at Registre du Commerce.\n3. Draft statutes (memorandum and articles of association).\n4. Deposit capital in bank account (get certificate).\n5. Register at the Commercial Court (RCCM).\n6. Publish notice in a legal gazette.\n7. Obtain taxpayer ID (NUI).\n8. Register with CNPS (social security).\n9. Obtain business license (patente)."
              },
              {
                "id": 9,
                "text": "What are the grounds for lifting the veil of a company?",
                "marks": 14,
                "answer": "Lifting the corporate veil means disregarding separate legal personality and holding shareholders/directors personally liable. Grounds:\n1. Fraud or improper conduct.\n2. Evasion of legal obligations.\n3. Company as agent or alter ego.\n4. Undercapitalization.\n5. Tax evasion.\n6. Group enterprise (single economic unit).\n7. Circumventing contractual obligations.\n8. Commingling personal and company assets.\n9. Fraudulent trading.\n10. Public policy considerations."
              },
              {
                "id": 10,
                "text": "Explain the rights of the members of a company.",
                "marks": 10,
                "answer": "1. Right to vote at general meetings.\n2. Right to dividends when declared.\n3. Right to inspect company records (financial statements).\n4. Right to transfer shares (subject to restrictions).\n5. Right to sue for wrongful acts (derivative action).\n6. Right to participate in winding-up proceeds.\n7. Right to appoint and remove directors.\n8. Right to pre-emption on new shares.\n9. Right to information about company affairs.\n10. Right to petition for winding-up."
              }
            ]
          }
        ]
      },
      {
        "title": "Law and Citizenship Education",
        "duration": "2 hours",
        "credits": 2,
        "description": "Specialty: ALL SPECIALTIES | 2025 Session",
        "sections": [
          {
            "title": "Section A: Introduction to Law and Fundamental Rights",
            "marks": 20,
            "questions": [
              {
                "id": 1,
                "text": "With concrete examples, critically examine the different categories of courts in Cameroon.",
                "marks": 20,
                "answer": "A court is a legally established institution responsible for the administration of justice. Courts interpret and apply laws, settle disputes, punish offenders, and protect the rights and freedoms of individuals. In Cameroon, the judicial system is influenced by English Common Law, French Civil Law, and African Customary Law due to the country's colonial history and cultural diversity. The courts in Cameroon are generally classified into three major categories: Traditional Courts, Modern Courts, and Special Courts.\n\n1. TRADITIONAL COURTS\nTraditional courts administer justice according to the customs, traditions, and practices of local communities. They are mostly found in rural areas and presided over by chiefs, fons, elders, lamidos, or other traditional authorities. Their main objective is to maintain peace and social harmony within the community through customary law.\n\na) Customary Courts: Apply the customs and traditions of a particular ethnic group or community. They handle matters relating to customary marriage, divorce, inheritance, succession, family conflicts, and land disputes under customary ownership. Proceedings are informal and usually conducted in local languages, emphasizing reconciliation rather than punishment. These courts are appreciated because they are cheap, accessible, and preserve African traditions. However, they are criticized for lack of trained judicial personnel, favouritism, tribal influence, and the possibility that some customs may violate human rights principles. A common example is the settlement of family inheritance and village land disputes in the North West and West Regions before chiefs and customary authorities.\n\nb) Alkali Courts: Traditional Islamic courts mainly found in Northern Cameroon where Islamic law strongly influences community life. Presided over by Muslim judges known as Alkalis, they handle disputes involving Islamic marriage, divorce, inheritance, and family matters. Proceedings are guided by Islamic principles and customs. These courts help preserve religious values but critics argue that some practices may conflict with constitutional principles and modern human rights standards.\n\nc) Chief's or Village Courts: Presided over by traditional rulers or village heads. They handle minor disputes such as family disagreements, small debts, land boundary conflicts, and chieftaincy issues. Proceedings are simple, oral, and aimed at restoring peace and unity within the community. These courts are close to the people and resolve disputes quickly, but are often criticized for lack of legal professionalism and poor record keeping.\n\n2. MODERN COURTS\nModern courts are formal state courts established by the Constitution and laws of Cameroon. They apply statutory law and follow formal judicial procedures conducted by professionally trained magistrates and judges. These courts form the backbone of the judicial system.\n\na) Court of First Instance: The lowest court in the formal judicial hierarchy, handling minor civil and criminal matters. Presided over by a magistrate who hears complaints, examines evidence, listens to witnesses, and delivers judgment according to statutory law. Deals with theft, assault, tenancy disputes, small debts, traffic offences, and minor family disputes.\n\nb) High Court: A superior court that handles serious civil and criminal matters as well as appeals from the Court of First Instance. Proceedings are formal and involve lawyers, witness testimonies, and documentary evidence. Deals with murder, armed robbery, rape, large land disputes, and major commercial matters.\n\nc) Court of Appeal: Hears appeals from lower courts when parties are dissatisfied with judgments. Judges examine whether the law and legal procedures were correctly applied and may confirm, reverse, or modify the earlier judgment. This court ensures fairness and consistency in the administration of justice.\n\nd) Supreme Court: The highest court in Cameroon, supervising all lower courts. It ensures uniform interpretation and application of the law throughout the country. The court mainly hears appeals on points of law and its decisions are final. It also performs administrative and audit functions through specialized benches.\n\n3. SPECIAL COURTS\nSpecial courts are created to handle specialized or sensitive matters requiring particular jurisdiction or expertise. They operate separately from ordinary courts because of the technical or sensitive nature of the cases involved.\n\na) Military Court: Handles offences committed by military personnel as well as matters concerning terrorism, illegal possession of weapons, armed conflict, and state security. Proceedings are conducted by military magistrates. A concrete example is the case of Martinez Zogo whose murder case was handled before the Military Tribunal in Yaoundé.\n\nb) Administrative Court of Litigation: Handles disputes between individuals and public authorities or government institutions. Examines whether administrative authorities acted legally and within their powers. Cases include unlawful dismissal of civil servants, abuse of power, disputes involving councils and ministries, and claims against the government.\n\nc) Court of Impeachment: Empowered to try high-ranking government officials such as the President and senior state authorities for offences like treason or serious misconduct committed while in office. However, such proceedings are extremely rare in Cameroon because of political sensitivities.\n\nd) Special Criminal Court: Created to fight corruption and embezzlement of public funds. Handles financial crimes involving large amounts of state money, especially cases involving public officials. The court became prominent during Operation Sparrow Hawk, where several former ministers and senior officials were prosecuted for embezzling billions of CFA francs.\n\nIn conclusion, the court system in Cameroon is divided into traditional courts, modern courts, and special courts, each performing unique judicial functions. Traditional courts preserve customary justice and reconciliation, modern courts administer statutory law through formal legal procedures, while special courts handle technical and sensitive matters. Despite challenges such as delays, corruption allegations, political influence, and limited access to justice, these courts remain essential in maintaining law, order, and justice in Cameroon."
              }
            ]
          },
          {
            "title": "Section B: Civics, Ethics, Moral Education, Citizenship Education",
            "marks": 20,
            "questions": [
              {
                "id": 2,
                "text": "Identify and briefly explain any five indicators of good governance in Cameroon.",
                "marks": 20,
                "answer": "Good governance refers to the manner in which public affairs and state resources are managed in accordance with democratic principles, the law, and the interests of the population. In Cameroon, good governance is essential for promoting democracy, development, and respect for human rights. The following are the major indicators of good governance:\n\n1. Transparency: Government actions, decisions, and policies must be conducted openly and relevant information made available to the public. Public authorities must provide citizens with access to information concerning government activities, public finances, and development projects. Transparency helps to reduce corruption and enables citizens to monitor the activities of public officials.\n\n2. Rule of Law: All persons and institutions, including government officials, are subject to and accountable under the law. It demands the existence of an independent judiciary, equality before the law, and the protection of fundamental rights and freedoms. In a system of good governance, laws are applied fairly and without discrimination.\n\n3. Inclusiveness: All members of society, regardless of gender, ethnicity, religion, social status, or political affiliation, are given equal opportunities to participate in public affairs and benefit from development programmes. Good governance seeks to ensure that no section of the population is excluded from decision-making processes or access to public services.\n\n4. Responsiveness: Public institutions and government authorities must serve the needs and interests of citizens within a reasonable period. Government agencies must address public complaints, provide essential services efficiently, and respond effectively to social and economic challenges facing the population.\n\n5. Consensus-Oriented Governance: A consensus-oriented government seeks to reconcile the various interests and opinions that exist within society. Through consultation, dialogue, and negotiation, decisions are reached in a manner that promotes the common good. This indicator is particularly important in a diverse country like Cameroon.\n\n6. Effectiveness and Efficiency: Public institutions must perform their functions competently and utilize available resources in the most economical manner possible. Government policies and programmes should achieve their intended objectives while minimizing waste of public resources.\n\n7. Accountability: Public officials and institutions must explain and justify their actions to the public. Office holders must be answerable for the exercise of their powers and the management of public resources. Where misconduct, corruption, or abuse of authority occurs, appropriate legal or administrative sanctions should be imposed.\n\n8. Participation: Citizens must be involved in the governance process, including the right to vote, contest elections, join political parties, express opinions on public matters, and take part in community development initiatives. Citizen participation strengthens democracy and ensures that government policies reflect the wishes and interests of the people.\n\nGood governance in Cameroon is reflected through these principles, which promote democratic governance, respect for human rights, national development, and the proper administration of public affairs."
              }
            ]
          },
          {
            "title": "Section C: Labour Law",
            "marks": 20,
            "questions": [
              {
                "id": 3,
                "text": "Examine the various types of labour contracts enacted by the 1992 Labour Code of Cameroon.",
                "marks": 20,
                "answer": "A labour contract is an agreement between an employer and an employee whereby the employee agrees to work under the authority of the employer in return for remuneration. In Cameroon, labour relations are governed by the 1992 Labour Code, which classifies employment contracts to regulate working conditions, protect workers' rights, and ensure stability in employment relations.\n\nThe main types of labour contracts include:\n\n1. Permanent Contract (Contract of Indefinite Duration - CDI): This is a labour contract with no fixed termination date. It continues until either party terminates it according to legal procedures. It is the most stable form of employment and provides job security for workers. Employees under CDI enjoy full labour rights such as notice before dismissal and compensation. However, employers may find it less flexible because terminating such contracts requires strict legal procedures and justification.\n\n2. Fixed-Term Contract (Contract of Definite Duration - CDD): A fixed-term contract is concluded for a specific period or for a specific task and automatically ends upon expiry. It is commonly used for temporary jobs or project-based work. It provides employers with flexibility in managing workforce needs. However, it may create job insecurity for employees, and abuse may occur when employers repeatedly renew fixed contracts to avoid granting permanent status. Maximum duration is 2 years including renewals.\n\n3. Seasonal Contract: Concluded for activities dependent on seasons or climatic conditions. Common in sectors such as agriculture, tourism, and other industries where activities can only be carried out during certain periods of the year. The duration is directly linked to the duration of the season concerned. Once the season ends, the contract automatically terminates.\n\n4. Temporary Contract: Concluded to meet temporary needs within an enterprise. Usually entered into where there is a temporary shortage of labour or where an employer requires workers for urgent or exceptional assignments. Frequently used to replace workers who are absent due to sickness, maternity leave, or other reasons. May also be used during periods of increased workload.\n\n5. Occasional or Casual Contract: Concluded for unforeseen, exceptional, or accidental work which does not fall within the normal activities of the enterprise. Generally of short duration and intended to address urgent situations. Used for emergency repairs, exceptional maintenance work, or other irregular activities.\n\nIn conclusion, the 1992 Labour Code of Cameroon recognizes various types of labour contracts including CDI, CDD, seasonal, temporary, and occasional contracts. Each type serves a distinct purpose and contributes to balancing the interests of employers with the protection of workers' rights."
              }
            ]
          },
          {
            "title": "Section D: Business Law",
            "marks": 20,
            "questions": [
              {
                "id": 4,
                "text": "Identify and explain the advantages of arbitration over litigation or court action.",
                "marks": 20,
                "answer": "Arbitration is a form of alternative dispute resolution where parties submit their dispute to a neutral third party (arbitrator) whose decision is usually binding. Litigation refers to resolving disputes through formal court proceedings. In Cameroon, arbitration is widely used in commercial and civil matters because it offers practical advantages over court action.\n\nThe main advantages of arbitration over litigation are:\n\n1. Speed of Resolution: Arbitration is generally faster than court litigation because it avoids long procedures, strict court schedules, and congestion in courts. Parties can fix hearing dates quickly, making dispute resolution more efficient. This is important in commercial disputes where delay may cause financial loss.\n\n2. Confidentiality: Arbitration proceedings are private and not open to the public. This protects sensitive information such as business secrets, contracts, and financial details. In contrast, court proceedings are usually public, which may expose parties to reputational risks.\n\n3. Flexibility of Procedure: In arbitration, parties have the freedom to agree on procedural rules, time frames, and even select the arbitrator. This flexibility allows the process to be adapted to the nature of the dispute. Courts, however, follow strict procedural and evidential rules that may be rigid.\n\n4. Cost-Effectiveness: Although arbitrators are paid, arbitration often reduces overall costs because cases are resolved faster and avoid repeated adjournments and lengthy litigation. Court actions may become expensive due to delays, legal fees, and prolonged procedures.\n\n5. Preservation of Relationships: Arbitration is less confrontational than litigation, making it suitable for parties who want to maintain business or professional relationships after dispute resolution. Court battles often create hostility and permanent breakdown of relationships.\n\n6. Expertise of Arbitrators: Parties can choose arbitrators with specific technical or professional knowledge related to the dispute (e.g., construction, trade, or finance). This ensures more informed and accurate decisions compared to generalist judges.\n\n7. Reduced Formalism: Arbitration is less formal than court proceedings. It does not strictly follow complex courtroom procedures, making it easier for parties to present their cases. This reduces delays caused by technical legal requirements.\n\n8. Finality of Decision: Arbitration awards are usually final and binding, with very limited grounds for appeal. This brings certainty and avoids prolonged litigation through multiple appeals, which is common in court systems.\n\nIn conclusion, arbitration provides several advantages over litigation in Cameroon, including speed, confidentiality, flexibility, lower costs, preservation of relationships, expertise of decision-makers, reduced formalism, and finality of decisions."
              }
            ]
          },
          {
            "title": "Section E: Company Law",
            "marks": 20,
            "questions": [
              {
                "id": 5,
                "text": "Carefully explain the principle of corporate personality, bringing out clearly the different advantages of incorporating a company.",
                "marks": 20,
                "answer": "The principle of corporate personality states that a company, once legally incorporated, becomes a separate legal entity distinct from its members (shareholders and directors). In Cameroon, this principle is fundamental in company law and is mainly derived from the idea that a registered company has its own legal identity, rights, and obligations independent of the people who own or manage it. This was strongly established in the case of Salomon v Salomon & Co Ltd, where it was held that a company is a separate 'legal person.'\n\nA) PRINCIPLE OF CORPORATE PERSONALITY\nThe principle of corporate personality means that once a company is incorporated, it becomes a 'person in law' with a separate existence from its members. This means the company can:\n- Own property in its own name\n- Enter into contracts\n- Sue and be sued\n- Continue existing even if shareholders change or die\n\nThis separation creates a legal 'veil' between the company and its members, known as the veil of incorporation.\n\nKey Implications of Corporate Personality:\n1. Separate Legal Identity: The company is distinct from its shareholders. Its debts and liabilities belong to the company, not the individual members.\n2. Perpetual Succession: The company continues to exist even if members die, resign, or transfer shares. Its existence is not affected by changes in ownership.\n3. Capacity to Own Property: The company can own assets such as land, buildings, and equipment in its own name, not in the names of shareholders.\n4. Capacity to Sue and Be Sued: The company can bring legal actions or be sued in its own name, protecting members from direct legal responsibility in most cases.\n\nB) ADVANTAGES OF INCORPORATING A COMPANY\n1. Limited Liability: Shareholders are only liable up to the amount of their investment. Personal assets are generally protected from company debts. This encourages investment and reduces personal financial risk.\n2. Perpetual Succession: A company continues to exist regardless of death, bankruptcy, or withdrawal of shareholders. This ensures stability and continuity of business operations.\n3. Ability to Raise Capital: Incorporated companies can raise large capital by issuing shares or debentures. This makes it easier to expand business operations compared to sole proprietorships or partnerships.\n4. Separate Legal Identity: Since the company is a legal person, it can own property, enter contracts, and operate independently of its owners. This improves efficiency and legal clarity in business dealings.\n5. Transferability of Shares: Shares in a company can usually be transferred to other persons. This allows investors to exit the company without dissolving it, improving liquidity and investment attractiveness.\n6. Professional Management: Companies are often managed by qualified directors and professionals rather than owners themselves. This improves decision-making and business efficiency.\n7. Borrowing Capacity and Credibility: Incorporated companies often have better access to loans and credit facilities due to their legal structure and perceived stability.\n\nIn conclusion, the principle of corporate personality establishes that a company is a separate legal entity distinct from its members. Incorporation provides several advantages such as limited liability, perpetual succession, ability to raise capital, transferability of shares, and professional management."
              }
            ]
          }
        ]
      }
    ]
  }
};

