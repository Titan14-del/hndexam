const _notesData = {
  "title": "Year 1 - Common Core",
  "subjects": [
    {
      "id": "computer-fundamentals",
      "title": "Computer Fundamentals",
      "icon": "💻",
      "chapters": [
        {
          "id": "intro-computers",
          "title": "Introduction to Computer Systems",
          "content": [
            {
              "type": "text",
              "value": "Think of a computer like a human brain at work. You receive information through your senses (input), your brain processes it (processing), and then you speak or write a response (output). A computer works the same way: it takes in data, does calculations on it, and produces results."
            },
            {
              "type": "text",
              "value": "A <b>computer</b> is an electronic machine that accepts raw data (like numbers, text, or images), processes it according to programmed instructions, and produces useful information as output. The key idea is the <b>Input-Process-Output (IPO)</b> cycle, which is the foundation of all computing."
            },
            {
              "type": "mermaid",
              "value": "flowchart LR\n  A[Input: Keyboard, Mouse,\nMicrophone] --> B[Process: CPU\ncalculates]\n  B --> C[Output: Monitor shows\nresult, Speaker plays sound]\n  C --> D[Storage: Hard drive\nsaves for later]"
            },
            {
              "type": "text",
              "value": "Let us look at a concrete example. When you press a key on your keyboard (input), the computer sends that electrical signal to the CPU (processing). The CPU looks up which letter that key represents, then tells the monitor to display that letter on screen (output). If you save your document, the data gets written to the hard drive (storage). This IPO cycle happens billions of times per second."
            },
            {
              "type": "text",
              "value": "<b>The Main Components Inside Your Computer:</b>"
            },
            {
              "type": "text",
              "value": "<b>CPU (Central Processing Unit):</b> This is the \"brain\" of the computer. It executes all instructions by performing basic arithmetic (add, subtract), logical comparisons (is A greater than B?), and controlling data movement. Modern CPUs operate at speeds of 2-5 GHz, meaning they can perform billions of operations every second. Think of it as a tiny, extremely fast calculator that follows a simple cycle: fetch an instruction from memory, decode what it means, execute it, then write back the result."
            },
            {
              "type": "text",
              "value": "<b>Memory (RAM):</b> RAM stands for Random Access Memory. It is the computer's short-term memory — like a desk where you spread out papers you are currently working on. RAM is <b>volatile</b>, meaning when you turn off the power, everything in RAM disappears. That is why you lose unsaved work when the power goes out. More RAM lets you run more programs simultaneously without slowdown."
            },
            {
              "type": "text",
              "value": "<b>Storage (Hard Drive / SSD):</b> This is the computer's long-term memory — like a filing cabinet where you store completed work. Storage is <b>non-volatile</b>, meaning it retains data even when powered off. Hard Disk Drives (HDDs) use spinning magnetic platters and are slower but cheaper. Solid State Drives (SSDs) use flash memory chips with no moving parts, making them much faster and more durable."
            },
            {
              "type": "text",
              "value": "<b>Motherboard:</b> The motherboard is the main circuit board that connects all components together. Think of it like the nervous system of the computer — it has pathways (called buses) that carry data between the CPU, RAM, storage, and other devices. Every component plugs into the motherboard directly or via cables."
            },
            {
              "type": "text",
              "value": "<b>Why understanding this matters for your exam:</b> Many exam questions ask you to identify components, explain their functions, or distinguish between similar concepts (like RAM vs ROM, or HDD vs SSD). A common question type is: \"Explain the function of each of the following components in a computer system.\" For each component, memorize: (1) what it does, (2) why it matters, and (3) one key characteristic."
            },
            {
              "type": "list",
              "title": "Key Points to Remember",
              "values": [
                "The IPO cycle (Input-Process-Output) is the fundamental model of how computers work",
                "RAM is temporary/volatile (loses data on power-off), while storage is permanent/non-volatile (keeps data)",
                "The CPU executes instructions using the fetch-decode-execute cycle",
                "Every component on the motherboard communicates through data buses (pathways for electrical signals)"
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Fundamentals",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Be ready to draw and label a block diagram of the IPO cycle",
            "Distinguish carefully between RAM (volatile, used during work) and ROM (non-volatile, stores startup instructions)",
            "Know what each component does AND give a real-world analogy for each"
          ]
        },
        {
          "id": "number-systems",
          "title": "Number Systems & Data Representation",
          "content": [
            {
              "type": "text",
              "value": "Computers do not use the same number system we humans use. We use base-10 (decimal) with digits 0 through 9, probably because we have ten fingers. Computers, however, use base-2 (binary) with only two digits: 0 and 1. Why? Because transistors — the tiny switches inside computer chips — can be in only two states: ON (representing 1) or OFF (representing 0)."
            },
            {
              "type": "text",
              "value": "<b>Binary (Base-2):</b> In binary, each digit represents a power of 2. The rightmost digit represents 2^0 = 1, the next represents 2^1 = 2, then 2^2 = 4, then 2^3 = 8, and so on. To convert binary to decimal, you add up the values of each position where there is a 1."
            },
            {
              "type": "text",
              "value": "<b>Example:</b> Convert binary 1101 to decimal.<br>Starting from the right: position 0 has 1 (value = 1 × 2^0 = 1), position 1 has 0 (value = 0 × 2^1 = 0), position 2 has 1 (value = 1 × 2^2 = 4), position 3 has 1 (value = 1 × 2^3 = 8).<br>Total = 8 + 4 + 0 + 1 = <b>13</b>."
            },
            {
              "type": "text",
              "value": "<b>To convert decimal to binary:</b> Repeatedly divide by 2 and record the remainders from bottom to top.<br>Example: Convert 13 to binary.<br>13 ÷ 2 = 6 remainder <b>1</b><br>6 ÷ 2 = 3 remainder <b>0</b><br>3 ÷ 2 = 1 remainder <b>1</b><br>1 ÷ 2 = 0 remainder <b>1</b><br>Reading remainders from bottom to top: <b>1101</b>."
            },
            {
              "type": "text",
              "value": "<b>Hexadecimal (Base-16):</b> Programmers frequently use hexadecimal as a compact way to represent binary. Since one hex digit represents exactly 4 binary bits, it is much easier to read. Hex uses digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15)."
            },
            {
              "type": "text",
              "value": "<b>Example:</b> Convert binary 11011010 to hex.<br>Split into groups of 4 from the right: 1101 1010.<br>1101 = 13 = D, 1010 = 10 = A.<br>Result: <b>0xDA</b> (the 0x prefix means hex)."
            },
            {
              "type": "text",
              "value": "<b>Negative Numbers in Binary (Two's Complement):</b> Computers represent negative numbers using a system called two's complement. To find the two's complement of a binary number: (1) flip all bits (0 becomes 1, 1 becomes 0), (2) add 1. For example, to represent -5 in 4-bit binary: 0101 is +5. Flip bits: 1010. Add 1: 1011. So 1011 represents -5 in two's complement."
            },
            {
              "type": "list",
              "title": "Key Conversion Rules",
              "values": [
                "Binary to Decimal: add powers of 2 where bit is 1, starting from rightmost as 2^0",
                "Decimal to Binary: repeatedly divide by 2, read remainders upward",
                "Binary to Hex: group bits in 4s from right, convert each group (A=10, B=11, C=12, D=13, E=14, F=15)",
                "Two's complement: invert all bits, then add 1 (this is how computers store negative numbers)"
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Practice binary-decimal-hex conversions repeatedly — they are guaranteed to appear",
            "For two's complement, remember: flip all bits then add 1",
            "When adding binary numbers, remember 1+1=0 with a carry of 1 (just like 9+1=0 with carry in decimal)"
          ]
        },
        {
          "id": "software-types",
          "title": "Types of Software",
          "content": [
            {
              "type": "text",
              "value": "If hardware is the physical body of a computer, software is the mind — the instructions that tell the hardware what to do. Without software, a computer is just a collection of metal and plastic that does nothing. There are two main categories of software, and understanding the difference is one of the most basic and important concepts in computing."
            },
            {
              "type": "text",
              "value": "<b>1. System Software:</b> This is the software that manages and controls the computer hardware so that application software can run. Think of system software as the <b>stage crew</b> in a theater — the audience never sees them, but without them the show cannot happen."
            },
            {
              "type": "text",
              "value": "<b>Operating System (OS):</b> The most important system software. Windows, macOS, Linux, Android, and iOS are all operating systems. The OS manages every resource: it decides which program gets CPU time, allocates memory to programs, organizes files on the hard drive, manages input/output devices, and provides a user interface (either a graphical desktop or a command line). Without an OS, you would have to write code to control every single hardware detail yourself."
            },
            {
              "type": "text",
              "value": "<b>Device Drivers:</b> Small programs that allow the OS to communicate with specific hardware devices. Every printer, graphics card, keyboard, and mouse needs its own driver so the OS knows how to talk to it."
            },
            {
              "type": "text",
              "value": "<b>Utility Programs:</b> Tools that help maintain and protect the computer. Examples: antivirus software, disk cleanup tools, file compressors, backup software, firewall programs."
            },
            {
              "type": "text",
              "value": "<b>Language Translators:</b> Compilers, interpreters, and assemblers that convert human-readable programming code into machine code the CPU can execute."
            },
            {
              "type": "text",
              "value": "<b>2. Application Software:</b> These are the programs that directly help users perform specific tasks. Application software is what most people think of when they say \"software.\" Examples include word processors (Microsoft Word), spreadsheets (Excel), web browsers (Chrome, Firefox), games, photo editors (Photoshop), and media players. Application software depends on system software to run — you cannot run Microsoft Word without an operating system underneath."
            },
            {
              "type": "list",
              "title": "Quick Test — Is it System or Application Software?",
              "values": [
                "Microsoft Word = Application (you use it to write documents)",
                "Windows 10 = System (it manages the computer so other programs can run)",
                "Antivirus program = System utility (it maintains the system)",
                "Google Chrome = Application (you use it to browse the web)",
                "Printer driver = System (helps the OS communicate with the printer)"
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q3"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "The simplest distinction: system software makes the computer usable; application software makes it useful",
            "Be able to classify any given software as system or application — this is a very common question",
            "The operating system is the most important example of system software — know its functions"
          ]
        },
        {
          "id": "input-output",
          "title": "Input/Output Devices",
          "content": [
            {
              "type": "text",
              "value": "For a computer to be useful, it needs to receive information from the outside world (input) and deliver results back (output). Devices that perform these functions are called peripherals — they sit \"on the periphery\" of the main computer system."
            },
            {
              "type": "text",
              "value": "<b>Input Devices</b> are hardware that send data TO the computer. They convert some form of real-world information (key presses, sounds, images, movements) into electrical signals the computer can understand."
            },
            {
              "type": "text",
              "value": "<b>Keyboard:</b> The most common input device. Each key press completes an electrical circuit that tells the computer which key was pressed. Keyboards can be wired (USB) or wireless (Bluetooth)."
            },
            {
              "type": "text",
              "value": "<b>Mouse:</b> A pointing device that controls the cursor on screen. Optical mice use an LED to track movement across surfaces. The mouse sends coordinate data to the computer so it knows where to position the cursor."
            },
            {
              "type": "text",
              "value": "<b>Scanner:</b> Converts physical documents (photos, text pages) into digital images. A scanner shines light onto the document and sensors measure the reflected light to create a digital copy."
            },
            {
              "type": "text",
              "value": "<b>Other input devices:</b> Microphone (converts sound into digital audio), Webcam (captures video), Barcode reader (reads product codes using laser), Touch screen (detects finger position on screen), Light pen (points directly at screen), Joystick (gaming input that detects tilt and rotation)."
            },
            {
              "type": "text",
              "value": "<b>Output Devices</b> receive data FROM the computer and present it to the user in a human-readable form."
            },
            {
              "type": "text",
              "value": "<b>Monitor (Display):</b> The primary output device. Modern monitors use LCD (Liquid Crystal Display) or LED (Light-Emitting Diode) technology. A monitor's quality is measured by resolution (number of pixels, e.g., 1920 × 1080), refresh rate (how many times per second the image updates, measured in Hz), and color accuracy."
            },
            {
              "type": "text",
              "value": "<b>Printer:</b> Produces physical (hard copy) output from digital documents. Laser printers use toner (powdered ink) and heat to fuse text onto paper — they are fast and good for text. Inkjet printers spray liquid ink onto paper — they handle color photos well but are slower. Dot matrix printers use a print head with tiny pins that strike an ink ribbon — they are old technology but still used for multi-part forms (like carbon copy receipts)."
            },
            {
              "type": "text",
              "value": "<b>Other output devices:</b> Speakers (convert electrical signals into sound), Projector (projects computer display onto a large screen), Plotter (draws precise line graphics, used for architectural blueprints)."
            },
            {
              "type": "list",
              "title": "The Easy Way to Remember",
              "values": [
                "Input devices send information TO the computer (keyboard types in, scanner copies in, microphone speaks in)",
                "Output devices receive information FROM the computer (monitor shows out, printer prints out, speakers play out)",
                "Some devices are both input AND output — like a touch screen (input: touches; output: display) or a headset with microphone"
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q3"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "For each device, memorize: (1) what category it belongs to (input/output/both), (2) what it does, (3) one real-world use",
            "Touch screen is a special case — it is BOTH input (touch sensor) and output (display)"
          ]
        },
        {
          "id": "computer-generations",
          "title": "Generations of Computers",
          "content": [
            {
              "type": "text",
              "value": "Computers have evolved through five distinct generations, each marked by a breakthrough technology that made computers smaller, faster, cheaper, and more powerful. Understanding this evolution helps you appreciate how we got from room-sized machines that cost millions to the smartphones in our pockets."
            },
            {
              "type": "text",
              "value": "<b>First Generation (1940-1956) — Vacuum Tubes:</b> The earliest computers used vacuum tubes — glass bulbs that controlled electrical current, similar to old radio tubes. A computer like ENIAC (1945) used about 17,000 vacuum tubes, weighed 30 tons, occupied a 1,800-square-foot room, and consumed enough electricity to power a small neighborhood. These machines were programmed using plugboards and punched cards. They generated enormous heat, broke down frequently (tubes burned out often), and only governments and universities could afford them."
            },
            {
              "type": "text",
              "value": "<b>Second Generation (1956-1963) — Transistors:</b> The transistor — a tiny device made of semiconductor material — replaced the bulky vacuum tube. Transistors were smaller, cheaper, consumed far less power, and generated almost no heat. IBM introduced the first transistorized computer, making computers more reliable and accessible to businesses. Magnetic core memory and magnetic tape storage also appeared in this generation."
            },
            {
              "type": "text",
              "value": "<b>Third Generation (1964-1971) — Integrated Circuits (ICs):</b> An integrated circuit packs multiple transistors onto a single silicon chip. This was a revolutionary leap — instead of wiring individual transistors together by hand, entire circuits could be manufactured on a chip the size of a fingernail. This made computers dramatically smaller and more affordable. IBM System/360, a family of compatible computers, defined this era and introduced the concept of software compatibility across different models."
            },
            {
              "type": "text",
              "value": "<b>Fourth Generation (1971-present) — Microprocessors:</b> A microprocessor puts the entire CPU (control unit + arithmetic logic unit) onto a single chip. Intel released the first microprocessor, the 4004, in 1971. This enabled the personal computer revolution — companies like Apple, IBM, and Microsoft created desktop computers that ordinary people could buy and use. This generation also saw the rise of GUIs (Graphical User Interfaces), the mouse, and computer networking."
            },
            {
              "type": "text",
              "value": "<b>Fifth Generation (present and future) — Artificial Intelligence:</b> The current generation focuses not on hardware breakthroughs (though progress continues) but on making computers <b>intelligent</b>. AI systems can learn from data, recognize speech and images, understand natural language, and make decisions. Examples include voice assistants (Siri, Alexa), self-driving cars, facial recognition, and tools like ChatGPT. Parallel processing and quantum computing are also areas of active development."
            },
            {
              "type": "table",
              "headers": [
                "Generation",
                "Key Technology",
                "Example",
                "Key Feature"
              ],
              "rows": [
                [
                  "1st (1940-56)",
                  "Vacuum tubes",
                  "ENIAC, UNIVAC",
                  "Room-sized, extremely slow"
                ],
                [
                  "2nd (1956-63)",
                  "Transistors",
                  "IBM 1401",
                  "Smaller, more reliable"
                ],
                [
                  "3rd (1964-71)",
                  "Integrated Circuits",
                  "IBM System/360",
                  "Dramatically smaller"
                ],
                [
                  "4th (1971-present)",
                  "Microprocessors",
                  "PC, Mac, Laptop",
                  "Personal computers for everyone"
                ],
                [
                  "5th (present+)",
                  "AI & Parallel",
                  "Smartphones, AI systems",
                  "Intelligent, learning machines"
                ]
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q4"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "For each generation, memorize: (1) the key technology, (2) one example computer, (3) one defining characteristic",
            "The pattern is: smaller, faster, cheaper, more reliable with each generation",
            "Fifth generation is about making computers intelligent (AI), not just faster"
          ]
        }
      ]
    },
    {
      "id": "digital-electronics",
      "title": "Digital Electronics",
      "icon": "⚡",
      "chapters": [
        {
          "id": "logic-gates",
          "title": "Logic Gates",
          "content": [
            {
              "type": "text",
              "value": "Logic gates are the fundamental building blocks of all digital circuits. They are the simplest possible computing elements — each gate takes one or more binary inputs (each input can be 0 or 1, representing OFF or ON, FALSE or TRUE) and produces exactly one binary output. The entire digital world — from calculators to smartphones to supercomputers — is built from billions of logic gates interconnected on microchips."
            },
            {
              "type": "text",
              "value": "<b>Thinking in binary:</b> Before we dive into gates, remember that computers use only two states: 0 (FALSE, LOW, OFF) and 1 (TRUE, HIGH, ON). Everything a computer does — every calculation, every pixel on screen, every sound — is ultimately a pattern of 0s and 1s being manipulated by logic gates."
            },
            {
              "type": "text",
              "value": "<b>AND Gate:</b> The AND gate outputs 1 only when ALL of its inputs are 1. Think of it like a series circuit: two light switches in a row, and the bulb lights only if BOTH switches are on. Truth table: 0 AND 0 = 0; 0 AND 1 = 0; 1 AND 0 = 0; 1 AND 1 = 1."
            },
            {
              "type": "text",
              "value": "<b>OR Gate:</b> The OR gate outputs 1 when AT LEAST ONE of its inputs is 1. Think of a parallel circuit: two switches side by side, and the bulb lights if EITHER switch is on. Truth table: 0 OR 0 = 0; 0 OR 1 = 1; 1 OR 0 = 1; 1 OR 1 = 1."
            },
            {
              "type": "text",
              "value": "<b>NOT Gate (Inverter):</b> The NOT gate has only one input and simply flips it. If input is 1, output is 0; if input is 0, output is 1. Written as Q = A'. Think of a light switch that is always in the opposite position."
            },
            {
              "type": "text",
              "value": "<b>NAND and NOR Gates (Universal Gates):</b> NAND is NOT + AND: it outputs the opposite of AND. So NAND outputs 0 only when all inputs are 1; it outputs 1 for every other combination. NOR is NOT + OR: it outputs 1 only when all inputs are 0. These are called \"universal gates\" because you can build ANY other gate — AND, OR, NOT, XOR — using only NAND gates."
            },
            {
              "type": "text",
              "value": "<b>XOR Gate (Exclusive OR):</b> XOR outputs 1 when the inputs are DIFFERENT (one is 0 and the other is 1). If both inputs are the same (both 0 or both 1), XOR outputs 0. XOR is extremely important in arithmetic circuits — it is the core of binary addition."
            },
            {
              "type": "mermaid",
              "value": "flowchart LR\n  subgraph AND\n    A1[A] --> G1[AND]\n    B1[B] --> G1[AND]\n    G1[AND] --> O1[Q = 1 only\nif both are 1]\n  end\n  subgraph OR\n    A2[A] --> G2[OR]\n    B2[B] --> G2[OR]\n    G2[OR] --> O2[Q = 1 if\nat least one is 1]\n  end\n  subgraph NOT\n    A3[A] --> G3[NOT] --> O3[Q = opposite\nof A]\n  end"
            },
            {
              "type": "text",
              "value": "<b>How to build a truth table:</b> A truth table lists all possible input combinations and the corresponding output. For 2 inputs, there are 2² = 4 rows (00, 01, 10, 11). For 3 inputs, 2³ = 8 rows. To construct one: (1) list all input combinations in binary counting order, (2) for each row, evaluate the gate's output based on its rule."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2022",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Memorize the truth tables for all 7 gates — AND, OR, NOT, NAND, NOR, XOR, XNOR",
            "Universal gates (NAND, NOR) can be used to build any other gate — this is a classic exam question",
            "XOR is the basis for binary addition circuits"
          ]
        },
        {
          "id": "boolean-algebra",
          "title": "Boolean Algebra & Simplification",
          "content": [
            {
              "type": "text",
              "value": "Boolean algebra is a mathematical system for working with binary variables (true/false, 0/1). It was invented by George Boole in the 1850s, long before computers existed, but it turned out to be the perfect mathematical foundation for digital circuit design. Using Boolean algebra, engineers can simplify complex logic expressions — meaning they can build circuits using fewer gates, which saves money, reduces power consumption, and increases speed."
            },
            {
              "type": "text",
              "value": "<b>Basic Laws:</b>"
            },
            {
              "type": "text",
              "value": "<b>Identity:</b> A + 0 = A (OR with 0 gives the original value). A · 1 = A (AND with 1 gives the original value)."
            },
            {
              "type": "text",
              "value": "<b>Null:</b> A + 1 = 1 (OR with 1 always gives 1). A · 0 = 0 (AND with 0 always gives 0)."
            },
            {
              "type": "text",
              "value": "<b>Idempotent:</b> A + A = A. A · A = A. Different from normal algebra where x + x = 2x."
            },
            {
              "type": "text",
              "value": "<b>Complement:</b> A + A' = 1 (a value OR its opposite always equals 1). A · A' = 0 (a value AND its opposite always equals 0)."
            },
            {
              "type": "text",
              "value": "<b>Commutative:</b> A + B = B + A and A · B = B · A. Order does not matter."
            },
            {
              "type": "text",
              "value": "<b>Associative:</b> A + (B + C) = (A + B) + C. A · (B · C) = (A · B) · C. Grouping does not matter."
            },
            {
              "type": "text",
              "value": "<b>Distributive:</b> A · (B + C) = A · B + A · C. Like multiplication over addition in normal algebra."
            },
            {
              "type": "text",
              "value": "<b>De Morgan's Theorem (very important for exams):</b> (A + B)' = A' · B' — the complement of a sum equals the product of complements. (A · B)' = A' + B' — the complement of a product equals the sum of complements. In plain English: when you bring a complement across an AND or OR, the operation flips (AND becomes OR, OR becomes AND) and you complement each variable."
            },
            {
              "type": "text",
              "value": "<b>Worked Example:</b> Simplify F = A · (A + B).<br>Step 1: Apply distributive: A · A + A · B<br>Step 2: Idempotent: A · A = A, so we get A + A · B<br>Step 3: Absorption: A + A · B = A · (1 + B) = A · 1 = A<br>So the expression simplifies from A · (A + B) down to just A!"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q3"
                },
                {
                  "year": "2020",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "De Morgan's theorem is the MOST frequently tested topic — memorize both forms cold",
            "When simplifying, show each step and cite which law you used (exams give marks for the method)",
            "Practice simplifying increasingly complex expressions"
          ]
        },
        {
          "id": "flip-flops",
          "title": "Flip-Flops & Sequential Circuits",
          "content": [
            {
              "type": "text",
              "value": "The logic gates we studied so far are <b>combinational circuits</b> — their output depends only on the current inputs. They have no memory. But a computer needs memory — it needs to remember past inputs to make decisions about the future. This is where <b>sequential circuits</b> come in, and the basic building block of sequential circuits is the <b>flip-flop</b>."
            },
            {
              "type": "text",
              "value": "A flip-flop is a circuit that can store one bit of information (a 0 or a 1). Think of it like a light switch that stays in its position until you deliberately change it."
            },
            {
              "type": "text",
              "value": "<b>SR (Set-Reset) Flip-Flop:</b> The simplest flip-flop. Two inputs: S (Set) and R (Reset). When S=1, R=0: Q becomes 1 (set). When S=0, R=1: Q becomes 0 (reset). When S=0, R=0: Q keeps its previous value (memory). The combination S=1, R=1 is forbidden (invalid)."
            },
            {
              "type": "text",
              "value": "<b>JK Flip-Flop:</b> This solves the SR flip-flop's invalid state problem. When J=1 and K=1, the output TOGGLES (flips to the opposite value) instead of being invalid. J is like Set, K is like Reset."
            },
            {
              "type": "text",
              "value": "<b>D Flip-Flop (Data):</b> The simplest flip-flop: output Q always equals input D at the clock edge. D flip-flops are used extensively for registers because they simply capture and store the input value."
            },
            {
              "type": "text",
              "value": "<b>T Flip-Flop (Toggle):</b> When T=1, the output toggles at each clock pulse. When T=0, the output stays the same. T flip-flops are ideal for building counters."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q4"
                },
                {
                  "year": "2020",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Digital Electronics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the characteristic table and excitation table for each flip-flop type",
            "The SR flip-flop has an invalid state (S=1,R=1) — the JK flip-flop fixes this by toggling instead",
            "D flip-flops are the most commonly used for building registers"
          ]
        }
      ]
    },
    {
      "id": "mathematics",
      "title": "Mathematics (Statistics & Probability)",
      "icon": "➖",
      "chapters": [
        {
          "id": "descriptive-stats",
          "title": "Descriptive Statistics",
          "content": [
            {
              "type": "text",
              "value": "Descriptive statistics is about summarizing and describing data. When you have a large set of numbers — like exam scores for 100 students — it is impossible to understand them by looking at each individual score. Instead, we use statistical measures that capture the \"story\" of the data in just a few numbers."
            },
            {
              "type": "text",
              "value": "<b>Measures of Central Tendency:</b> These tell you where the \"center\" of the data lies — the typical or average value."
            },
            {
              "type": "text",
              "value": "<b>Mean (Average):</b> Sum of all values divided by the number of values. Formula: x̄ = (Σx) / n. Example: Scores 70, 80, 90, 85, 75 have mean (70+80+90+85+75)/5 = 80. <b>Weakness:</b> Sensitive to outliers. If one score is 10 instead of 70, the mean drops to 68."
            },
            {
              "type": "text",
              "value": "<b>Median:</b> The middle value when data is sorted. For 70, 75, 80, 85, 90: median = 80. <b>Strength:</b> NOT affected by outliers — replaces 70 with 10, median is still 80."
            },
            {
              "type": "text",
              "value": "<b>Mode:</b> The most frequent value. The only measure that works for categorical data (e.g., most common eye color)."
            },
            {
              "type": "text",
              "value": "<b>When to use which:</b> Use mean for symmetric data without outliers. Use median for skewed data or data with outliers (like income). Use mode for categorical data."
            },
            {
              "type": "text",
              "value": "<b>Measures of Dispersion (Spread):</b> Tell you how spread out the data is."
            },
            {
              "type": "text",
              "value": "<b>Range:</b> Max - Min. Simple but ignores everything in between."
            },
            {
              "type": "text",
              "value": "<b>Variance (σ²):</b> Average of squared deviations from the mean. Formula: σ² = Σ(x - x̄)² / n."
            },
            {
              "type": "text",
              "value": "<b>Standard Deviation (σ):</b> Square root of variance. The most important measure of spread — in the same units as the original data. In a normal distribution: about 68% of values lie within 1σ of the mean, 95% within 2σ, and 99.7% within 3σ."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know which measure of central tendency to use for different types of data",
            "Variance = (standard deviation)²; Standard deviation = √(variance)",
            "The 68-95-99.7 rule for normal distribution appears regularly"
          ]
        },
        {
          "id": "probability",
          "title": "Probability Theory",
          "content": [
            {
              "type": "text",
              "value": "Probability measures how likely something is to happen. It ranges from 0 (impossible) to 1 (certain). We express it as a fraction, decimal, or percentage."
            },
            {
              "type": "text",
              "value": "<b>The Basic Formula:</b> P(event) = (number of favorable outcomes) / (total number of possible outcomes). If you roll a fair six-sided die, P(getting a 4) = 1/6. P(getting an even number) = 3/6 = 1/2."
            },
            {
              "type": "text",
              "value": "<b>The Addition Rule (OR):</b> P(A or B) = P(A) + P(B) - P(A and B). We subtract P(A and B) because we counted it twice. If A and B are <b>mutually exclusive</b> (cannot both happen), then P(A and B) = 0, so P(A or B) = P(A) + P(B)."
            },
            {
              "type": "text",
              "value": "<b>The Multiplication Rule (AND) for independent events:</b> P(A and B) = P(A) × P(B). If you flip a coin AND roll a die, P(heads AND a 6) = 1/2 × 1/6 = 1/12."
            },
            {
              "type": "text",
              "value": "<b>Conditional Probability:</b> P(A|B) means \"probability of A GIVEN that B has occurred.\" Formula: P(A|B) = P(A and B) / P(B)."
            },
            {
              "type": "text",
              "value": "<b>Bayes' Theorem:</b> P(A|B) = P(B|A) × P(A) / P(B). This lets you reverse conditional probabilities."
            },
            {
              "type": "text",
              "value": "<b>Tree Diagrams:</b> A visual tool for multi-stage problems. Each branch represents a possible outcome with its probability. To find the probability of a particular path, multiply along the branches. To find the probability of an event with multiple paths, add the probabilities of each path."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Tree diagrams are your best friend for multi-stage probability — draw them for every problem",
            "Distinguish carefully between mutually exclusive (cannot both happen) and independent (one does not affect the other)",
            "P(not happening) = 1 - P(happening)"
          ]
        },
        {
          "id": "probability-distributions",
          "title": "Probability Distributions",
          "content": [
            {
              "type": "text",
              "value": "A probability distribution gives the probabilities of different possible outcomes. There are two main types: discrete (for countable outcomes) and continuous (for measurable outcomes on a continuous scale)."
            },
            {
              "type": "text",
              "value": "<b>Binomial Distribution (discrete):</b> Models the number of successes in a fixed number of trials, where each trial has two outcomes (success/failure) and the probability of success is constant. Parameters: n = number of trials, p = probability of success. Formula: P(X=k) = C(n,k) × p^k × (1-p)^(n-k)."
            },
            {
              "type": "text",
              "value": "<b>Example:</b> Flip a fair coin 5 times. What is P(exactly 3 heads)? n=5, k=3, p=0.5. P = C(5,3) × 0.5³ × 0.5² = 10 × 0.125 × 0.25 = 0.3125 (31.25%)."
            },
            {
              "type": "text",
              "value": "<b>Poisson Distribution (discrete):</b> Models the number of events in a fixed interval, when events happen independently at a constant average rate. Used for: customers per hour, defects per square meter. Formula: P(X=k) = (e^{-λ} × λ^k) / k!, where λ is the average rate."
            },
            {
              "type": "text",
              "value": "<b>Normal Distribution (continuous):</b> The classic \"bell curve\" — symmetric about the mean. Many natural phenomena follow this distribution: heights, test scores, measurement errors."
            },
            {
              "type": "text",
              "value": "<b>The 68-95-99.7 Rule:</b> In a normal distribution: ≈68% of data within 1 standard deviation of the mean; ≈95% within 2σ; ≈99.7% within 3σ."
            },
            {
              "type": "text",
              "value": "<b>Z-Scores:</b> Z = (x - μ) / σ. A Z-score tells you how many standard deviations a value is from the mean. Z=2 means 2σ above average. Z-scores let you compare values from different normal distributions."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2022",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know when to use Binomial vs Poisson",
            "The 68-95-99.7 rule is your shortcut for normal distribution problems",
            "Z-score formula: Z = (x - μ) / σ"
          ]
        },
        {
          "id": "correlation-regression",
          "title": "Correlation & Regression",
          "content": [
            {
              "type": "text",
              "value": "Correlation and regression help us understand relationships between two variables. For example: does studying more hours lead to higher exam scores? If so, how strong is that relationship?"
            },
            {
              "type": "text",
              "value": "<b>Correlation (r)</b> measures the strength and direction of a LINEAR relationship. Range: -1 to +1."
            },
            {
              "type": "text",
              "value": "r = +1: Perfect positive (as X increases, Y increases). r = -1: Perfect negative (as X increases, Y decreases). r = 0: No linear relationship."
            },
            {
              "type": "text",
              "value": "Values between: ±0.1 = weak, ±0.3 = moderate, ±0.5 = strong, ±0.7+ = very strong."
            },
            {
              "type": "text",
              "value": "<b>IMPORTANT: Correlation does NOT imply causation!</b> Just because ice cream sales and drowning incidents both increase in summer (high positive correlation) does NOT mean ice cream causes drowning. The common cause is hot weather (a confounding variable)."
            },
            {
              "type": "text",
              "value": "<b>Linear Regression:</b> Finds the LINE OF BEST FIT through the scatter plot. Equation: Y = a + bX, where b is the slope and a is the intercept. This allows prediction: given a new X value, you can estimate Y."
            },
            {
              "type": "text",
              "value": "<b>Calculating slope b:</b> b = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)². This minimizes the sum of squared vertical distances from each point to the line (\"least squares\")."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section B",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Mathematics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the formula for Pearson's r and what values mean (strong/weak, positive/negative)",
            "CORRELATION DOES NOT IMPLY CAUSATION — this is a guaranteed exam question",
            "Regression equation Y = a + bX — learn how to calculate b (slope)"
          ]
        }
      ]
    },
    {
      "id": "entrepreneurship",
      "title": "Entrepreneurship",
      "icon": "📈",
      "chapters": [
        {
          "id": "entrepreneurship-basics",
          "title": "Basics of Entrepreneurship",
          "content": [
            {
              "type": "text",
              "value": "Entrepreneurship is the process of starting and running a new business, taking on financial risk in the hope of profit. It is more than just \"starting a business\" — it is a mindset of identifying opportunities, innovating, and creating value."
            },
            {
              "type": "text",
              "value": "<b>Who is an entrepreneur?</b> Someone who identifies a market need, gathers resources, creates a business to meet that need, and accepts the risks involved. Famous entrepreneurs: Mark Zuckerberg (Facebook), Bill Gates (Microsoft), Aliko Dangote (Dangote Group)."
            },
            {
              "type": "text",
              "value": "<b>Key characteristics:</b> Risk-taking (calculated, not reckless), Innovation (new products or better ways), Self-confidence (believing in your idea), Persistence (not giving up after failure), Vision (seeing opportunities others miss), Resourcefulness (making do with limited resources)."
            },
            {
              "type": "text",
              "value": "<b>Functions of an entrepreneur:</b> (1) Identifying business opportunities, (2) Mobilizing resources (capital, labor, materials), (3) Organizing production, (4) Managing the business, (5) Bearing risks."
            },
            {
              "type": "text",
              "value": "<b>Entrepreneur vs Manager:</b> An entrepreneur starts the business and takes the risk. A manager runs day-to-day operations for a salary. An entrepreneur can also be a manager, but a manager is not necessarily an entrepreneur."
            },
            {
              "type": "text",
              "value": "<b>Intrapreneurship:</b> Employees acting like entrepreneurs within an existing company. They develop new products or processes using company resources. Google's policy of allowing 20% time for personal projects led to Gmail."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation",
                  "section": "Entrepreneurship",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the difference between entrepreneur (risk-taker, business starter) and manager (employee, runs operations)",
            "Intrapreneurship = entrepreneurship within an existing organization"
          ]
        },
        {
          "id": "business-plan",
          "title": "Business Plan",
          "content": [
            {
              "type": "text",
              "value": "A <b>business plan</b> is a written document describing your business in detail: what it does, who it serves, how it will make money, and what resources it needs. Think of it as a roadmap for your business journey."
            },
            {
              "type": "text",
              "value": "<b>Why important?</b> (1) Forces you to think through every aspect before investing. (2) Helps identify problems before they happen. (3) Banks and investors require one. (4) Serves as a benchmark to compare actual results against."
            },
            {
              "type": "text",
              "value": "<b>Components:</b> (1) Executive Summary — one-page overview (write last). (2) Company Description — legal structure, mission, goals. (3) Market Analysis — target market, competitors, competitive advantage. (4) Organization and Management — leadership team, org chart. (5) Product or Service — features, benefits, IP. (6) Marketing and Sales Strategy — pricing, advertising, distribution. (7) Funding Request — how much, how used, repayment terms. (8) Financial Projections — P&L, cash flow, balance sheet for 3-5 years."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Entrepreneurship",
                  "section": "Section B",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation",
                  "section": "Entrepreneurship",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation",
                  "section": "Entrepreneurship",
                  "qid": "Q3"
                },
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Be able to list and explain all 8 components of a business plan — this is a common question",
            "The executive summary is the MOST important part — it is often the only part investors read"
          ]
        },
        {
          "id": "business-types",
          "title": "Types of Business Organizations",
          "content": [
            {
              "type": "text",
              "value": "When starting a business, one of the first decisions is the legal structure. Each type has different implications for liability, taxation, control, and raising money."
            },
            {
              "type": "text",
              "value": "<b>Sole Proprietorship:</b> One owner keeps all profits but has unlimited liability. If the business owes $100,000, the owner's house, car, and savings can be taken. Easy to start but hard to raise capital."
            },
            {
              "type": "text",
              "value": "<b>Partnership:</b> Two or more owners share profits and losses. General partners have unlimited liability. A partnership agreement specifies profit sharing and decision-making rules."
            },
            {
              "type": "text",
              "value": "<b>Limited Liability Company (LLC):</b> Hybrid — limited liability (owners do not lose personal assets) plus flexible management and tax benefits. Very popular for small businesses."
            },
            {
              "type": "text",
              "value": "<b>Corporation:</b> A separate legal entity from its owners (shareholders). Limited liability. Can raise capital by selling shares. Drawback: double taxation (corporation pays tax on profits, shareholders pay tax on dividends)."
            },
            {
              "type": "text",
              "value": "<b>Cooperative:</b> Owned and operated by members for mutual benefit. Profits distributed based on participation. Common in agriculture and credit unions."
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Sole Proprietorship",
                "Partnership",
                "LLC",
                "Corporation"
              ],
              "rows": [
                [
                  "Liability",
                  "Unlimited",
                  "Unlimited (general)",
                  "Limited",
                  "Limited"
                ],
                [
                  "Taxation",
                  "Personal only",
                  "Personal only",
                  "Pass-through",
                  "Double tax (C Corp)"
                ],
                [
                  "Raising capital",
                  "Difficult",
                  "Moderate",
                  "Moderate",
                  "Easy (sell shares)"
                ]
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q3"
                },
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Limited liability is the most important concept — it protects personal assets from business debts",
            "Double taxation (corporation pays tax, then shareholders pay tax on dividends) is a key disadvantage of C corporations"
          ]
        },
        {
          "id": "marketing",
          "title": "Marketing Fundamentals",
          "content": [
            {
              "type": "text",
              "value": "Marketing is not just advertising — it is the entire process of identifying customer needs and satisfying them profitably."
            },
            {
              "type": "text",
              "value": "<b>The Marketing Mix (4Ps):</b>"
            },
            {
              "type": "text",
              "value": "<b>Product</b> — What you sell: features, quality, design, branding, packaging. A successful product solves a customer problem."
            },
            {
              "type": "text",
              "value": "<b>Price</b> — How much you charge. Strategies: cost-plus, penetration (low to enter), skimming (high for new products), competitive, value-based. Price communicates quality."
            },
            {
              "type": "text",
              "value": "<b>Place</b> — Where and how customers buy: physical stores, online shops, wholesalers, retailers, direct sales. Make the product available at the right place, right time, right quantity."
            },
            {
              "type": "text",
              "value": "<b>Promotion</b> — How customers learn about your product: advertising, PR, social media, sales promotions, personal selling, content marketing."
            },
            {
              "type": "text",
              "value": "<b>Extended 7Ps</b> (for services): People (employees delivering service), Process (service delivery procedures), Physical evidence (appearance of premises, uniforms, brochures)."
            },
            {
              "type": "text",
              "value": "<b>Market Research:</b> Primary = surveys, interviews, focus groups, observation (new data). Secondary = existing reports, government statistics, industry publications (existing data)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Memorize the 4Ps (Product, Price, Place, Promotion) and be able to explain each with an example",
            "Primary research = new data you collect yourself; Secondary = existing data collected by others"
          ]
        }
      ]
    },
    {
      "id": "economics",
      "title": "General Economics",
      "icon": "📊",
      "chapters": [
        {
          "id": "intro-economics",
          "title": "Introduction to Economics",
          "content": [
            {
              "type": "text",
              "value": "Economics studies how people make choices when resources are limited. The central problem is <b>scarcity</b>: unlimited wants but limited resources. Because resources are scarce, we must make choices, and every choice involves a trade-off."
            },
            {
              "type": "text",
              "value": "<b>Opportunity Cost:</b> The single most important concept in economics. The opportunity cost of any decision is the value of the BEST alternative you gave up. If you spend $20 on a pizza, the opportunity cost is the book or movie ticket you could have bought instead."
            },
            {
              "type": "text",
              "value": "<b>Marginal Analysis:</b> Compare additional (marginal) benefits against additional costs. Should you study one more hour? Compare marginal benefit (higher score) against marginal cost (lost sleep). Decision rule: do it if marginal benefit ≥ marginal cost."
            },
            {
              "type": "text",
              "value": "<b>Production Possibility Frontier (PPF):</b> A graph showing the maximum combinations of two goods an economy can produce. Points ON the curve = efficient (all resources used). Points INSIDE = inefficient (unused resources). Points OUTSIDE = unattainable (current resources). The PPF illustrates opportunity cost — producing more of one good means producing less of the other."
            },
            {
              "type": "mermaid",
              "value": "flowchart TD\n  A[Scarcity] --> B[Choice is necessary]\n  B --> C[Opportunity Cost]\n  B --> D[Resource Allocation]\n  A --> E[PPF Model]"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Opportunity cost is the foundation of economics — be ready to calculate it in any scenario",
            "Marginal analysis: compare additional (not average) benefits vs additional costs",
            "A PPF shifts outward when resources increase or technology improves"
          ]
        },
        {
          "id": "supply-demand",
          "title": "Supply & Demand",
          "content": [
            {
              "type": "text",
              "value": "Supply and demand are the forces that determine prices and quantities in a market economy. Demand pushes prices up (more people want something), while supply pushes prices down (more of something is available)."
            },
            {
              "type": "text",
              "value": "<b>Law of Demand:</b> As price increases, quantity demanded decreases (ceteris paribus — all other things equal). Two reasons: substitution effect (switch to alternatives when price rises) and income effect (higher prices mean your money buys less)."
            },
            {
              "type": "text",
              "value": "<b>What shifts the demand curve?</b> Income changes, tastes/preferences, prices of substitutes and complements, expectations, population. A price change causes movement ALONG the curve; other factors shift the ENTIRE curve."
            },
            {
              "type": "text",
              "value": "<b>Law of Supply:</b> As price increases, quantity supplied increases. Businesses are motivated by profit — higher prices = higher potential profits = more production."
            },
            {
              "type": "text",
              "value": "<b>What shifts the supply curve?</b> Technology, input prices, number of sellers, taxes/subsidies, expectations."
            },
            {
              "type": "text",
              "value": "<b>Market Equilibrium:</b> Where supply = demand. At this price, quantity consumers want = quantity producers want to sell. Price above equilibrium = surplus (prices fall). Price below equilibrium = shortage (prices rise)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation",
                  "section": "Economics",
                  "qid": "Q5"
                },
                {
                  "year": "2020",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Be able to draw supply and demand curves and show equilibrium, surplus, and shortage",
            "Distinguish between movement ALONG a curve (price change) and SHIFT of the curve (other factors)",
            "Ceteris paribus = 'all other things being equal'"
          ]
        },
        {
          "id": "market-structures",
          "title": "Market Structures",
          "content": [
            {
              "type": "text",
              "value": "Market structure describes the characteristics of a market. The four main types differ by: number of firms, product type, ease of entry, and market power (ability to set prices)."
            },
            {
              "type": "text",
              "value": "<b>Perfect Competition:</b> Many small firms, identical products, no barriers to entry. Firms are \"price takers\" — cannot influence price. Examples: agriculture, foreign exchange. In the long run, firms earn only normal profit."
            },
            {
              "type": "text",
              "value": "<b>Monopoly:</b> One firm, unique product, blocked entry. The firm is a \"price maker.\" Examples: local water utility, patented drugs. Monopolies can charge high prices, which is why governments often regulate them."
            },
            {
              "type": "text",
              "value": "<b>Oligopoly:</b> A few large firms dominate. Each firm's decisions affect competitors (strategic interdependence). High barriers to entry. Examples: telecom companies (MTN, Orange), airlines, banking."
            },
            {
              "type": "text",
              "value": "<b>Monopolistic Competition:</b> Many firms, differentiated products, easy entry. Each firm has some market power because its product is slightly different. Examples: restaurants, clothing brands, hair salons. This is the most common market structure."
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Perfect Competition",
                "Monopolistic",
                "Oligopoly",
                "Monopoly"
              ],
              "rows": [
                [
                  "Number of firms",
                  "Very many",
                  "Many",
                  "Few (2-10)",
                  "One"
                ],
                [
                  "Product type",
                  "Identical",
                  "Differentiated",
                  "Differentiated",
                  "Unique"
                ],
                [
                  "Entry barriers",
                  "None",
                  "Low",
                  "High",
                  "Very high"
                ],
                [
                  "Price control",
                  "None",
                  "Some",
                  "Significant",
                  "Full"
                ]
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "General Economics",
                  "section": "Section B",
                  "qid": "Q2"
                },
                {
                  "year": "2022",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "The key distinguishing factors: number of firms, product differentiation, and entry barriers",
            "Monopoly has maximum market power (price maker); perfect competition has zero (price taker)"
          ]
        },
        {
          "id": "macroeconomics",
          "title": "Macroeconomics Basics",
          "content": [
            {
              "type": "text",
              "value": "Macroeconomics studies the economy as a whole: total output, unemployment, inflation, and government policy."
            },
            {
              "type": "text",
              "value": "<b>Gross Domestic Product (GDP):</b> Total market value of all final goods and services produced in a country. The most common measure of economic output. Calculated as: Consumption + Investment + Government Spending + Net Exports."
            },
            {
              "type": "text",
              "value": "<b>Inflation:</b> General increase in prices. Measured by the Consumer Price Index (CPI). Moderate inflation (2-3%) is normal. High inflation erodes savings. Hyperinflation (>50% per month) destroys the economy."
            },
            {
              "type": "text",
              "value": "<b>Unemployment:</b> Percentage of the labor force actively seeking work but unable to find jobs. Types: frictional (between jobs, normal), structural (skill mismatch), cyclical (caused by recessions), seasonal (predictable patterns)."
            },
            {
              "type": "text",
              "value": "<b>Fiscal Policy:</b> Government decisions about spending and taxation. Stimulate economy: increase spending, cut taxes. Cool economy (fight inflation): reduce spending, raise taxes."
            },
            {
              "type": "text",
              "value": "<b>Monetary Policy:</b> Central bank actions controlling money supply and interest rates. Stimulate: lower interest rates. Fight inflation: raise interest rates."
            },
            {
              "type": "text",
              "value": "<b>The Business Cycle:</b> Expansion (growth) → Peak (top) → Contraction/Recession (decline) → Trough (bottom) → Expansion again."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q3"
                },
                {
                  "year": "2022",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "General Economics",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Fiscal policy = government taxes + spending; Monetary policy = central bank interest rates + money supply",
            "The business cycle has four phases: expansion, peak, contraction/recession, trough"
          ]
        }
      ]
    },
    {
      "id": "company-law",
      "title": "Company Law",
      "icon": "⚖️",
      "chapters": [
        {
          "id": "company-formation",
          "title": "Company Formation & Types",
          "content": [
            {
              "type": "text",
              "value": "Company law governs how businesses are formed, operate, and are dissolved. A company is a legal entity separate from its owners — it can own property, sue and be sued, and enter into contracts in its own name."
            },
            {
              "type": "text",
              "value": "<b>Private Limited Company (Ltd):</b> Restricts share transfer, max 50 members, cannot sell shares to the public. Most small and medium businesses register as private companies. Advantages: limited liability, easier to raise capital than sole trader. Disadvantages: cannot sell shares to public, more regulation."
            },
            {
              "type": "text",
              "value": "<b>Public Limited Company (PLC):</b> Can sell shares to the public on a stock exchange. Minimum 7 members, must publish annual accounts, minimum share capital. Advantages: access to large capital, shares are transferable. Disadvantages: heavy regulation, must disclose financial information."
            },
            {
              "type": "text",
              "value": "<b>Steps to form a company:</b> (1) Reserve name, (2) Prepare Memorandum and Articles, (3) Register with Registrar, (4) Pay fees, (5) Receive Certificate of Incorporation (company legally exists), (6) PLC needs Trading Certificate to start business."
            },
            {
              "type": "text",
              "value": "<b>Memorandum of Association:</b> The \"birth certificate\" — contains: name, registered office, objectives, liability clause, share capital."
            },
            {
              "type": "text",
              "value": "<b>Articles of Association:</b> The \"rule book\" — internal management rules: director appointments, meetings, voting, dividends."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Enterprise Creation",
                  "section": "Company Law",
                  "qid": "Q8"
                },
                {
                  "year": "2020",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Enterprise Creation",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Enterprise Creation and Entrepreneurship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Private vs Public: private cannot sell shares to the public, public can",
            "Memorandum deals with external matters (name, objectives); Articles deal with internal management (rules)"
          ]
        },
        {
          "id": "directors-duties",
          "title": "Directors & Their Duties",
          "content": [
            {
              "type": "text",
              "value": "Directors manage the company's affairs. They are appointed and can be removed by shareholders. Directors owe various duties to the company — these are taken very seriously by courts."
            },
            {
              "type": "text",
              "value": "<b>Types:</b> Executive (full-time, day-to-day management), Non-executive (part-time, oversight), Shadow (informally directs the board)."
            },
            {
              "type": "text",
              "value": "<b>Fiduciary Duty (most important):</b> Directors must act in GOOD FAITH and in the best interests of the company. They must not put personal interests ahead of the company's."
            },
            {
              "type": "text",
              "value": "<b>Duty of Care and Skill:</b> Directors must exercise reasonable care — attend meetings, read reports, ask questions, make informed decisions."
            },
            {
              "type": "text",
              "value": "<b>Duty to Avoid Conflicts:</b> Directors must not put themselves in positions where personal interests conflict with company interests. Must declare any interest in contracts and not vote on them."
            },
            {
              "type": "text",
              "value": "<b>Duty Not to Make Secret Profits:</b> Cannot use position to make personal profits at company expense. Business opportunities learned through position must first be offered to the company."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section B",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Directors owe duties to the COMPANY, not to shareholders individually",
            "Fiduciary duty is the most important — act in good faith and in the company's best interest"
          ]
        },
        {
          "id": "shareholders",
          "title": "Shareholders & Meetings",
          "content": [
            {
              "type": "text",
              "value": "Shareholders are the owners of the company. They invest money in exchange for shares and have certain rights, including the right to vote on important matters."
            },
            {
              "type": "text",
              "value": "<b>Shareholder Rights:</b> Vote at meetings, receive dividends, transfer shares, inspect accounts, appoint/remove directors, receive surplus assets on winding up."
            },
            {
              "type": "text",
              "value": "<b>Ordinary Shares:</b> Most common — one vote per share, dividends vary with profits."
            },
            {
              "type": "text",
              "value": "<b>Preference Shares:</b> Fixed dividend rate, paid before ordinary shareholders, usually no voting rights."
            },
            {
              "type": "text",
              "value": "<b>Annual General Meeting (AGM):</b> Held once per year. Shareholders receive annual accounts, appoint auditors, elect directors, declare dividends."
            },
            {
              "type": "text",
              "value": "<b>Extraordinary General Meeting (EGM):</b> Called for urgent matters between AGMs: changing company name, approving major acquisition, removing a director."
            },
            {
              "type": "text",
              "value": "<b>Board Meetings:</b> Directors meet regularly (monthly/quarterly) to manage affairs. Shareholders do not attend board meetings."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section B",
                  "qid": "Q2"
                },
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Shareholders OWN the company; directors MANAGE the company",
            "AGM is held once per year; EGM is for urgent matters between AGMs"
          ]
        },
        {
          "id": "winding-up",
          "title": "Winding Up / Liquidation",
          "content": [
            {
              "type": "text",
              "value": "Winding up (liquidation) is ending a company's existence. Assets are sold, debts paid, and any surplus distributed to shareholders. The company is then dissolved."
            },
            {
              "type": "text",
              "value": "<b>Compulsory Winding Up:</b> Court orders winding up because: company cannot pay debts (most common), failed to file documents, illegal business, or \"just and equitable\" ground."
            },
            {
              "type": "text",
              "value": "<b>Members' Voluntary Winding Up:</b> Company is solvent (can pay debts). Shareholders pass a resolution. Common when business has achieved its purpose or owners want to retire."
            },
            {
              "type": "text",
              "value": "<b>Creditors' Voluntary Winding Up:</b> Company is insolvent (cannot pay debts). Liquidator appointed to sell assets and pay creditors in a specific order."
            },
            {
              "type": "text",
              "value": "<b>Order of Payment:</b> (1) Secured creditors (banks with charges), (2) Preferential creditors (employees' wages, taxes), (3) Floating charge holders, (4) Unsecured creditors (suppliers), (5) Shareholders (preference, then ordinary)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Company Law",
                  "section": "Section B",
                  "qid": "Q2"
                },
                {
                  "year": "2020",
                  "paper": "Company Law",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the order of payment in liquidation — this is frequently tested",
            "The priority: secured creditors → preferential → floating charge → unsecured → shareholders"
          ]
        }
      ]
    },
    {
      "id": "law-citizenship",
      "title": "Law and Citizenship",
      "icon": "🏛️",
      "chapters": [
        {
          "id": "sources-cameroon-law",
          "title": "Sources of Cameroonian Law",
          "content": [
            {
              "type": "text",
              "value": "Cameroon has a <b>bijural</b> (dual) legal system — two legal traditions side by side: English Common Law in NW/SW regions, and French Civil Law in the other eight regions. This is a legacy of Cameroon's colonial history."
            },
            {
              "type": "text",
              "value": "<b>Written Law (Legislation):</b> The primary source. Includes: Constitution (supreme law), Acts of Parliament, subsidiary legislation (regulations). Written law overrides all other sources in case of conflict."
            },
            {
              "type": "text",
              "value": "<b>Customary Law:</b> Traditional rules accepted by communities over time. Recognized for personal matters (marriage, inheritance, land). Cannot conflict with written law or public policy."
            },
            {
              "type": "text",
              "value": "<b>Case Law (Precedent):</b> In Common Law regions, higher court decisions bind lower courts on similar facts (doctrine of precedent). Less emphasized in Civil Law tradition."
            },
            {
              "type": "text",
              "value": "<b>Doctrine:</b> Opinions of legal scholars — persuasive but not binding."
            },
            {
              "type": "text",
              "value": "<b>International Law:</b> Treaties ratified by Cameroon become part of domestic law (e.g., UDHR, African Charter)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Law and Citizenship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Law and Citizenship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Cameroon's bijural system (English Common Law + French Civil Law) is a unique feature",
            "The hierarchy: Written law → Customary law → Case law → Doctrine"
          ]
        },
        {
          "id": "citizenship",
          "title": "Citizenship",
          "content": [
            {
              "type": "text",
              "value": "Citizenship is the legal status giving a person rights and obligations in a country. Citizens can vote, hold public office, and receive government protection. In return, they pay taxes and obey laws."
            },
            {
              "type": "text",
              "value": "<b>Jus Sanguinis (Right of Blood):</b> Citizenship through descent from citizen parents. If your parents are Cameroonian, you are Cameroonian regardless of birthplace."
            },
            {
              "type": "text",
              "value": "<b>Jus Soli (Right of Soil):</b> Citizenship by being born in the country's territory. Common in the Americas. In Cameroon, this is limited."
            },
            {
              "type": "text",
              "value": "<b>Naturalization:</b> Foreign national applies after meeting requirements: residency period (e.g., 5+ years), good character, language knowledge, renunciation of previous citizenship."
            },
            {
              "type": "text",
              "value": "<b>Registration:</b> Citizenship through special circumstances: marriage to a citizen, adoption."
            },
            {
              "type": "text",
              "value": "<b>Loss of Citizenship:</b> Renunciation (voluntary), deprivation (fraud, disloyalty, treason), acquiring another citizenship (if dual not allowed)."
            },
            {
              "type": "text",
              "value": "<b>Rights of Citizens vs Non-Citizens:</b> Citizens have full political rights (vote, hold office). Non-citizens have basic human rights but cannot vote or hold public office."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Law and Citizenship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Jus sanguinis (blood/parentage) vs Jus soli (birthplace) — the most tested distinction",
            "Know how citizenship can be acquired AND lost"
          ]
        },
        {
          "id": "human-rights",
          "title": "Human Rights & Fundamental Freedoms",
          "content": [
            {
              "type": "text",
              "value": "Human rights are basic rights every person has simply because they are human. They are universal (apply to everyone), inalienable (cannot be taken away), indivisible (all equally important), and interdependent."
            },
            {
              "type": "text",
              "value": "<b>The Universal Declaration of Human Rights (UDHR, 1948):</b> The foundational document of international human rights law. 30 articles covering civil, political, economic, social, and cultural rights. Not legally binding itself, but has inspired binding treaties and constitutions worldwide."
            },
            {
              "type": "text",
              "value": "<b>First Generation (Civil & Political):</b> \"Negative\" rights — protect from government interference. Right to life, speech, religion, fair trial, vote, assembly. Requires government to NOT interfere."
            },
            {
              "type": "text",
              "value": "<b>Second Generation (Economic & Social):</b> \"Positive\" rights — require government to provide services. Right to work, education, healthcare, adequate housing, food, water."
            },
            {
              "type": "text",
              "value": "<b>Third Generation (Environmental):</b> Collective rights — clean environment, sustainable development, peace, security."
            },
            {
              "type": "text",
              "value": "<b>Limitations:</b> No right is absolute. Rights can be limited for national security, public order, public health, or protecting others' rights. Any limitation must be prescribed by law and necessary in a democratic society."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Law and Citizenship",
                  "section": "Section B",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Law and Citizenship Education",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Law and Citizenship",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the three generations: Civil/Political (freedom from interference), Economic/Social (right to services), Environmental (collective rights)",
            "Rights are not absolute — they can be limited for public good"
          ]
        }
      ]
    },
    {
      "id": "french",
      "title": "French Language",
      "icon": "🇫🇷",
      "chapters": [
        {
          "id": "french-grammar",
          "title": "Basic French Grammar",
          "content": [
            {
              "type": "text",
              "value": "French is one of Cameroon's official languages (alongside English). For HND exams, focus on the fundamentals: verb conjugation, articles, and basic sentence structure."
            },
            {
              "type": "text",
              "value": "<b>Articles:</b> Definite (the): le (masculine), la (feminine), l' (before vowel), les (plural). Indefinite: un (masc), une (fem), des (plural). Partitive (some): du (masc), de la (fem)."
            },
            {
              "type": "text",
              "value": "<b>Subject Pronouns:</b> je (I), tu (you, informal), il/elle (he/she), nous (we), vous (you, formal/plural), ils/elles (they)."
            },
            {
              "type": "text",
              "value": "<b>Key Verbs (Présent):</b>"
            },
            {
              "type": "text",
              "value": "<b>Être (to be):</b> je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont."
            },
            {
              "type": "text",
              "value": "<b>Avoir (to have):</b> j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont."
            },
            {
              "type": "text",
              "value": "<b>Aller (to go):</b> je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
            },
            {
              "type": "text",
              "value": "<b>Faire (to do/make):</b> je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font."
            },
            {
              "type": "text",
              "value": "<b>Negation:</b> ne + verb + pas. Example: Je ne suis pas (I am not). ne becomes n' before a vowel."
            },
            {
              "type": "text",
              "value": "<b>Sentence Structure:</b> Subject + Verb + Object: Je mange une pomme (I eat an apple)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Learn present tense of four essential verbs: être, avoir, aller, faire",
            "Negation: ne ... pas around the verb"
          ]
        },
        {
          "id": "french-vocab",
          "title": "Essential Vocabulary & Expressions",
          "content": [
            {
              "type": "text",
              "value": "<b>Greetings:</b> Bonjour (Hello), Bonsoir (Good evening), Salut (Hi), Comment allez-vous? (How are you?), Ça va? (How's it going?), Je m'appelle... (My name is...), Enchanté(e) (Nice to meet you), Au revoir (Goodbye), À bientôt (See you soon)."
            },
            {
              "type": "text",
              "value": "<b>Numbers 1-20:</b> un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt."
            },
            {
              "type": "text",
              "value": "<b>Tens:</b> trente (30), quarante (40), cinquante (50), soixante (60), soixante-dix (70), quatre-vingts (80), quatre-vingt-dix (90), cent (100), mille (1000)."
            },
            {
              "type": "text",
              "value": "<b>Days:</b> lundi (Mon), mardi (Tue), mercredi (Wed), jeudi (Thu), vendredi (Fri), samedi (Sat), dimanche (Sun)."
            },
            {
              "type": "text",
              "value": "<b>Classroom:</b> Je ne comprends pas (I don't understand), Répétez s'il vous plaît (Repeat please), Parlez-vous anglais? (Do you speak English?)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2021",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "French Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Practice writing short paragraphs about yourself (name, age, nationality, occupation, family)",
            "Know numbers 1-100 thoroughly"
          ]
        }
      ]
    },
    {
      "id": "english",
      "title": "English Language",
      "icon": "📝",
      "chapters": [
        {
          "id": "english-grammar",
          "title": "Grammar & Usage",
          "content": [
            {
              "type": "text",
              "value": "English grammar is the system of rules governing how we structure sentences. For HND exams, you need to understand the parts of speech and apply common grammar rules correctly."
            },
            {
              "type": "text",
              "value": "<b>Parts of Speech:</b> Nouns (person, place, thing, idea), Pronouns (replace nouns: I, you, he, she, it), Verbs (action or state: run, is, have), Adjectives (describe nouns: beautiful, red), Adverbs (describe verbs: quickly, very), Prepositions (show relationships: in, on, at, by), Conjunctions (connect: and, but, because)."
            },
            {
              "type": "text",
              "value": "<b>Subject-Verb Agreement:</b> Singular subject takes singular verb: He runs (NOT He run). Plural subject takes plural verb: They run."
            },
            {
              "type": "text",
              "value": "<b>Tense Consistency:</b> Do not shift tenses without reason. If you start in past tense, stay in past tense throughout."
            },
            {
              "type": "text",
              "value": "<b>Articles:</b> 'a' before consonant SOUNDS (a university — starts with 'y' sound), 'an' before vowel SOUNDS (an hour — 'h' is silent, starts with 'ow' sound)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "English",
                  "section": "Grammar & Vocabulary",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "English",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Subject-verb agreement is the most frequently tested grammar rule",
            "Know the difference between: your/you're, its/it's, their/there/they're, affect/effect"
          ]
        },
        {
          "id": "english-comprehension",
          "title": "Comprehension & Summary Writing",
          "content": [
            {
              "type": "text",
              "value": "Reading comprehension and summary writing test your ability to understand a passage and extract the most important information."
            },
            {
              "type": "text",
              "value": "<b>Comprehension Strategy:</b> (1) Skim the passage (first/last paragraphs, first sentence of each paragraph) for main idea. (2) Read the questions to know what to look for. (3) Scan for keywords from questions in the passage. (4) Answer in your own words, supporting answers with evidence from the passage."
            },
            {
              "type": "text",
              "value": "<b>Summary Tips:</b> Identify main points, omit examples and repetition, paraphrase in your own words, stay within word limit, maintain logical flow with connecting words (however, therefore, consequently), write in complete sentences."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "English",
                  "section": "Reading Comprehension",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "For summaries: identify main points, omit examples, use your own words, stay within word limit",
            "Read the questions BEFORE re-reading the passage in detail"
          ]
        },
        {
          "id": "essay-writing",
          "title": "Essay & Letter Writing",
          "content": [
            {
              "type": "text",
              "value": "<b>Essay Structure:</b> Introduction (hook + context + thesis statement), Body paragraphs (one idea each: topic sentence, evidence, explanation, link), Conclusion (restate thesis, summarize, final thought)."
            },
            {
              "type": "text",
              "value": "<b>Formal Letter:</b> Sender's address (top right), Date, Recipient's address (left), Salutation (Dear Sir/Madam or Dear Mr. Name), Subject line, Body (intro, details, action requested), Closing (Yours faithfully for Dear Sir; Yours sincerely for Dear Mr. Name), Signature."
            },
            {
              "type": "text",
              "value": "<b>Informal Letter:</b> Address only top right. Salutation: Dear John. Conversational tone with contractions. Closing: Best wishes, Love, Yours."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "English Language",
                  "section": "Section B",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "English",
                  "section": "Composition",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "English Language",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Every essay needs: introduction (with thesis), body paragraphs (one idea each), conclusion",
            "Formal letter: Yours faithfully for Dear Sir; Yours sincerely for Dear Mr. Name"
          ]
        }
      ]
    }
  ]
};
