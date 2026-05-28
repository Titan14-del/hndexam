const _notesYear2 = {
  "title": "Year 2 - SWE Specialization",
  "subjects": [
    {
      "id": "c-programming",
      "title": "C Programming",
      "icon": "📟",
      "chapters": [
        {
          "id": "c-basics",
          "title": "C Language Basics",
          "content": [
            {
              "type": "text",
              "value": "C is a powerful, general-purpose programming language developed by Dennis Ritchie at Bell Labs in 1972. It is a <b>structured</b> language (uses functions and blocks of code) and a <b>procedural</b> language (executes instructions step by step). C is the foundation of many modern languages including C++, Java, and C#."
            },
            {
              "type": "text",
              "value": "<b>Why learn C?</b> C gives you direct control over computer memory (through pointers), runs extremely fast, and is used in operating systems (Linux is written in C), embedded systems (microcontrollers), and game engines."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "#include <stdio.h>  // includes input/output library\n\nint main() {       // entry point — program starts here\n    printf(\"Hello, World!\\n\");  // prints to screen\n    return 0;       // signals success to the OS\n}"
            },
            {
              "type": "text",
              "value": "<b>Line-by-line:</b> #include &lt;stdio.h&gt; tells the compiler to include the standard I/O library (gives us printf()). main() is where execution begins. printf() outputs text. \\n moves cursor to next line. return 0 signals the program ran successfully."
            },
            {
              "type": "text",
              "value": "<b>Compilation:</b> C is a compiled language — you write .c source code, a compiler translates it into machine code. Unlike interpreted languages (Python), compilation happens in one step producing an executable file."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "C Prog",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Every C program MUST have a main() function — execution starts here",
            "printf() is standard output; scanf() is standard input",
            "Always match opening braces { with closing braces }"
          ]
        },
        {
          "id": "c-datatypes",
          "title": "Data Types, Variables & Operators",
          "content": [
            {
              "type": "text",
              "value": "In C, you must declare the type of every variable before using it. The type tells the compiler how much memory to reserve and what kind of data the variable can hold."
            },
            {
              "type": "text",
              "value": "<b>int:</b> whole numbers (integers), 4 bytes, range -2.1B to +2.1B. Format: %d. Example: int age = 20;"
            },
            {
              "type": "text",
              "value": "<b>float:</b> decimal numbers, 4 bytes, ~6-7 digits precision. Format: %f. Example: float price = 19.99;"
            },
            {
              "type": "text",
              "value": "<b>double:</b> decimal numbers with double precision, 8 bytes, ~15-16 digits. Format: %lf. Example: double pi = 3.14159;"
            },
            {
              "type": "text",
              "value": "<b>char:</b> single character, 1 byte. Format: %c. Example: char grade = 'A'; Stored as ASCII codes (A=65)."
            },
            {
              "type": "text",
              "value": "<b>Operators:</b> Arithmetic: +, -, *, /, % (modulo = remainder). 5%2 = 1. Relational: ==, !=, &lt;, &gt;, &lt;=, &gt;=. Logical: && (AND), || (OR), ! (NOT)."
            },
            {
              "type": "text",
              "value": "<b>Important:</b> Integer division truncates: 5/2 = 2 (not 2.5). Use 5.0/2 for decimal result. Modulo % gives remainder: 5%2 = 1."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "C Prog",
                  "qid": "Q2"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know size and range: int=4B, float=4B, double=8B, char=1B",
            "Integer division truncates: 5/2 = 2, not 2.5",
            "Format specifiers: %d=int, %f=float, %lf=double, %c=char"
          ]
        },
        {
          "id": "c-control",
          "title": "Control Structures",
          "content": [
            {
              "type": "text",
              "value": "Control structures determine the flow of execution — which statements run and in what order. They allow programs to make decisions (selection) and repeat actions (iteration)."
            },
            {
              "type": "text",
              "value": "<b>if-else:</b> Executes code only if a condition is true (condition evaluates to non-zero)."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "int score = 75;\nif (score >= 50) {\n    printf(\"Passed\\n\");\n} else {\n    printf(\"Failed\\n\");\n}"
            },
            {
              "type": "text",
              "value": "<b>switch:</b> Alternative to multiple if-else when comparing one variable against constants. Each case needs break (otherwise execution falls through). Works only with integers/chars."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "switch (day) {\n    case 1: printf(\"Mon\"); break;\n    case 2: printf(\"Tue\"); break;\n    default: printf(\"Invalid\");\n}"
            },
            {
              "type": "text",
              "value": "<b>for loop:</b> Use when you know the count. Syntax: for(initialization; condition; increment)"
            },
            {
              "type": "text",
              "value": "<b>while loop:</b> Repeats while condition is true. Checked BEFORE each iteration — may never run if condition is false initially."
            },
            {
              "type": "text",
              "value": "<b>do-while loop:</b> Like while, but checked AFTER — guarantees at least one execution."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "for (int i = 0; i < 5; i++) { }    // known count\nwhile (condition) { }                 // condition checked first\ndo { } while (condition);             // runs at least once"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Practice of Computer",
                  "section": "C Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "switch works only with integer/char expressions (not floats/strings)",
            "for = known count; while = condition matters; do-while = must run at least once",
            "Don't forget break in switch cases"
          ]
        },
        {
          "id": "c-functions",
          "title": "Functions",
          "content": [
            {
              "type": "text",
              "value": "A function is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, write it once in a function and call it whenever needed."
            },
            {
              "type": "text",
              "value": "<b>Structure:</b> return_type function_name(parameters) { body }. void means nothing returned."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "// Function declaration (prototype)\nint add(int a, int b);\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);  // call\n    printf(\"%d\", result);\n}"
            },
            {
              "type": "text",
              "value": "<b>Pass by Value:</b> C passes arguments by value by default — the function receives a COPY. Changes inside the function do NOT affect the original variable."
            },
            {
              "type": "text",
              "value": "<b>Pass by Reference (using pointers):</b> To modify the original, pass its address using &amp; operator and receive it with a pointer parameter (*)."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "void change(int *x) { *x = 100; }  // modifies original\nint num = 10;\nchange(&num);  // pass address\n// num is now 100"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "C Prog",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "C uses pass by value by default — the function gets a copy",
            "To modify the original variable, use pointers (pass by reference)",
            "A function prototype tells the compiler about the function before it's defined"
          ]
        },
        {
          "id": "c-arrays",
          "title": "Arrays & Strings",
          "content": [
            {
              "type": "text",
              "value": "An array is a collection of variables of the SAME type in consecutive memory locations. Instead of 10 separate variables (score1, score2...), declare one array with 10 elements."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "int scores[5] = {85, 90, 78, 92, 88};\n// Index:         0   1   2   3   4\nscores[0] = 95;  // change first element\n\nfor (int i = 0; i < 5; i++) {\n    printf(\"%d \", scores[i]);\n}"
            },
            {
              "type": "text",
              "value": "<b>Critical:</b> Array indices START AT 0! scores[0] is the first element. scores[5] would be out-of-bounds (undefined behavior). C does NOT check array bounds."
            },
            {
              "type": "text",
              "value": "<b>Strings:</b> Arrays of characters ending with null '\\0'. char name[] = \"Alice\"; is actually 6 elements: A,l,i,c,e,\\0."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "#include <string.h>\nchar name[20];\nstrcpy(name, \"Bob\");     // copy string\nint len = strlen(name);   // length without null\nstrcat(name, \" Smith\");   // concatenate"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "C Prog",
                  "qid": "Q4"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Array indices start at 0 — always remember!",
            "C does NOT check array bounds — accessing outside is dangerous",
            "Strings are null-terminated ('\\0') char arrays"
          ]
        },
        {
          "id": "c-pointers",
          "title": "Pointers & Dynamic Memory",
          "content": [
            {
              "type": "text",
              "value": "A pointer is a variable that stores a memory address — it \"points to\" another variable. Pointers are essential for dynamic memory allocation, efficient array processing, and data structures like linked lists."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "int x = 10;\nint *ptr = &x;   // ptr holds the ADDRESS of x\n\nprintf(\"%d\", x);     // 10\nprintf(\"%p\", &x);    // address (e.g., 0x7fff)\nprintf(\"%p\", ptr);   // same address\nprintf(\"%d\", *ptr);  // 10 (dereference to get value)\n\n*ptr = 20;  // changes x to 20 through the pointer"
            },
            {
              "type": "text",
              "value": "<b>Dynamic Memory Allocation:</b> Request memory at runtime from the heap (not the stack). Useful when you don't know the size in advance."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "#include <stdlib.h>\n\nint *arr = (int*)malloc(5 * sizeof(int));\nif (arr == NULL) {  // always check!\n    printf(\"Allocation failed\");\n    return 1;\n}\narr[0] = 10;\nfree(arr);  // always free when done!"
            },
            {
              "type": "text",
              "value": "<b>Functions:</b> malloc() allocates uninitialized memory. calloc() allocates and zero-initializes. realloc() resizes. free() releases. Forgetting free() = memory leaks."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Practice of Computer",
                  "section": "C Programming",
                  "qid": "Q2"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "& gives address; * gives value at address (dereference)",
            "Always check if malloc() returned NULL (allocation failed)",
            "Every malloc() must have a corresponding free()"
          ]
        },
        {
          "id": "c-structures",
          "title": "Structures & File I/O",
          "content": [
            {
              "type": "text",
              "value": "Structures (structs) group related data of different types into a single unit. Example: a Student has an id (int), name (string), and gpa (float)."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "struct Student {\n    int id;\n    char name[50];\n    float gpa;\n};\n\nstruct Student s1 = {101, \"John\", 3.8};\ns1.gpa = 3.9;  // access with dot\nprintf(\"%s\", s1.name);"
            },
            {
              "type": "text",
              "value": "<b>typedef</b> creates an alias so you don't write 'struct' every time:"
            },
            {
              "type": "code",
              "lang": "c",
              "value": "typedef struct { int id; char name[50]; } Student;\nStudent s1;  // no need for 'struct' keyword"
            },
            {
              "type": "text",
              "value": "<b>File I/O:</b> Use FILE pointers to read/write files. Always close the file when done."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "FILE *fp = fopen(\"data.txt\", \"r\");\nif (fp == NULL) { printf(\"Error!\"); return 1; }\n\nchar buf[256];\nwhile (fgets(buf, 256, fp) != NULL) {\n    printf(\"%s\", buf);\n}\nfclose(fp);  // always close!"
            },
            {
              "type": "text",
              "value": "<b>File modes:</b> \"r\" = read (must exist), \"w\" = write (creates/overwrites), \"a\" = append (creates if not exists), \"r+\" = read/write."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Practice of Computer",
                  "section": "C Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Practice of Computer",
                  "section": "Section A: Programming — I. Structured Programming (C)",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: A. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: I. Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section B: Programming",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Always close files after use (fclose)",
            "fgets() is safer than gets() — prevents buffer overflow",
            "Check if fopen() returned NULL (file couldn't be opened)"
          ]
        }
      ]
    },
    {
      "id": "oop",
      "title": "Object-Oriented Programming (C++/Java)",
      "icon": "📗",
      "chapters": [
        {
          "id": "oop-basics",
          "title": "OOP Core Concepts",
          "content": [
            {
              "type": "text",
              "value": "Object-Oriented Programming (OOP) is a programming paradigm that organizes code around <b>objects</b> rather than functions and logic. An object is a bundle of data (attributes) and behaviors (methods). Think of a Car object: it has attributes (color, speed, fuel level) and methods (accelerate(), brake(), refuel())."
            },
            {
              "type": "text",
              "value": "<b>The Four Pillars of OOP (guaranteed exam topic):</b>"
            },
            {
              "type": "text",
              "value": "<b>Encapsulation:</b> Bundling data and methods together, and hiding internal details from outside. In a class, private data can only be accessed through public methods (getters/setters). This protects data from accidental corruption. Example: a BankAccount class keeps balance private; you deposit/withdraw through methods that enforce rules (no negative balance)."
            },
            {
              "type": "text",
              "value": "<b>Inheritance:</b> A class (child/derived) inherits properties and methods from another class (parent/base). This promotes code reuse. Example: Dog and Cat both inherit from Animal — they share common attributes (name, age) and methods (eat(), sleep()) but add their own (bark(), meow())."
            },
            {
              "type": "text",
              "value": "<b>Polymorphism:</b> \"Many forms\" — the same method name can behave differently in different classes. Dog makes a \"Woof\" sound; Cat makes a \"Meow\" sound. Both have makeSound(), but each implements it differently. Achieved through method overriding and overloading."
            },
            {
              "type": "text",
              "value": "<b>Abstraction:</b> Hiding complex implementation details and showing only essential features. When you drive a car, you use the steering wheel and pedals — you don't need to understand the engine. Similarly, an abstract class defines what methods a class must have without specifying how they work."
            },
            {
              "type": "mermaid",
              "value": "classDiagram\n  class Animal {\n    +String name\n    +makeSound()\n  }\n  class Dog {\n    +makeSound()\n  }\n  class Cat {\n    +makeSound()\n  }\n  Animal <|-- Dog\n  Animal <|-- Cat"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "OOP",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q3"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the 4 pillars with definitions and examples — this is a guaranteed question",
            "Be able to read and draw UML class diagrams representing OOP design"
          ]
        },
        {
          "id": "cpp-classes",
          "title": "C++ Classes & Objects",
          "content": [
            {
              "type": "text",
              "value": "A <b>class</b> is a blueprint for creating objects. It defines what data the object holds and what operations it can perform."
            },
            {
              "type": "code",
              "lang": "cpp",
              "value": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:  // accessible only within this class\n    int id;\n    string name;\n\npublic:   // accessible from outside\n    // Constructor — called when object is created\n    Student(int i, string n) : id(i), name(n) {}\n\n    void display() {\n        cout << \"ID: \" << id << \", Name: \" << name << endl;\n    }\n};\n\nint main() {\n    Student s1(101, \"Alice\");  // object created, constructor runs\n    s1.display();               // call method\n    return 0;\n}"
            },
            {
              "type": "text",
              "value": "<b>Access Specifiers:</b> private (only within the class), protected (within class and derived classes), public (from anywhere). Default in C++ is private."
            },
            {
              "type": "text",
              "value": "<b>Constructor:</b> Special method with the same name as the class, no return type. Called automatically when an object is created. Used to initialize data members."
            },
            {
              "type": "text",
              "value": "<b>Destructor (~ClassName):</b> Called automatically when an object is destroyed. Used to release resources (close files, free memory)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "OOP",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q3"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Constructor has same name as class and no return type — called when object is created",
            "Destructor (~ClassName) is called when object is destroyed"
          ]
        },
        {
          "id": "cpp-inheritance",
          "title": "C++ Inheritance & Polymorphism",
          "content": [
            {
              "type": "text",
              "value": "<b>Inheritance types:</b> Single (one base, one derived), Multiple (C++ allows multiple bases), Multilevel (A→B→C), Hierarchical (one base, many derived). Java uses interfaces instead of multiple inheritance."
            },
            {
              "type": "code",
              "lang": "cpp",
              "value": "class Shape {\nprotected:\n    double area;\npublic:\n    virtual double calculateArea() = 0;  // pure virtual = abstract\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double calculateArea() override {\n        return 3.14159 * radius * radius;\n    }\n};\n\n// Polymorphism: calls the right method based on actual object type\nShape* shapes[2];\nshapes[0] = new Circle(5.0);\ncout << shapes[0]->calculateArea();  // calls Circle's version"
            },
            {
              "type": "text",
              "value": "<b>Virtual keyword:</b> Enables runtime polymorphism. The correct method is determined at runtime based on the actual object type, not the pointer type."
            },
            {
              "type": "text",
              "value": "<b>Pure virtual function (=0):</b> Makes the class abstract — cannot create objects directly. Derived classes MUST override it."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "OOP",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "virtual keyword enables runtime polymorphism in C++",
            "Pure virtual function (=0) makes a class abstract — cannot instantiate"
          ]
        },
        {
          "id": "java-oop",
          "title": "Java OOP Specifics",
          "content": [
            {
              "type": "text",
              "value": "Java is similar to C++ but with important differences. Java does not support multiple class inheritance — it uses <b>interfaces</b> instead. Java has automatic garbage collection (no manual memory management like C++ delete)."
            },
            {
              "type": "code",
              "lang": "java",
              "value": "public class BankAccount {\n    private double balance;\n\n    public BankAccount(double initial) {\n        this.balance = initial;  // 'this' refers to current instance\n    }\n\n    public void deposit(double amount) {\n        balance += amount;\n    }\n\n    public double getBalance() {\n        return balance;\n    }\n}\n\n// Interface — like a contract of what methods a class must have\ninterface Drawable {\n    void draw();  // implicitly abstract\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}"
            },
            {
              "type": "text",
              "value": "<b>Java Features:</b> No pointers (all objects are references), Garbage collection (automatic memory management), final keyword (prevents inheritance for classes, overriding for methods, reassignment for variables), static keyword (belongs to class, not instance), this keyword (refers to current object)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Practice of Computer",
                  "section": "OOP",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "OOP",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Java does NOT support multiple class inheritance — only multiple interface implementation",
            "this keyword refers to the current instance",
            "Garbage collection = automatic memory management (no delete keyword)"
          ]
        }
      ]
    },
    {
      "id": "algorithms-ds",
      "title": "Algorithms & Data Structures",
      "icon": "📊",
      "chapters": [
        {
          "id": "algo-analysis",
          "title": "Algorithm Analysis & Complexity",
          "content": [
            {
              "type": "text",
              "value": "Algorithm analysis measures how time and memory requirements grow as input size (n) increases. The standard notation is <b>Big-O</b>, which describes the worst-case upper bound."
            },
            {
              "type": "text",
              "value": "<b>Common complexities from fastest to slowest:</b>"
            },
            {
              "type": "text",
              "value": "<b>O(1) — Constant:</b> Takes the same time regardless of input size. Example: accessing an array element by index arr[5]."
            },
            {
              "type": "text",
              "value": "<b>O(log n) — Logarithmic:</b> Grows slowly as n increases. Example: binary search on a sorted array. Doubling n adds only one extra step."
            },
            {
              "type": "text",
              "value": "<b>O(n) — Linear:</b> Time grows proportionally to input size. Example: linear search — checking each element once."
            },
            {
              "type": "text",
              "value": "<b>O(n log n) — Linearithmic:</b> Common for efficient sorting. Example: merge sort, quick sort (average case)."
            },
            {
              "type": "text",
              "value": "<b>O(n²) — Quadratic:</b> Time grows with the square of input size. Example: nested loops (bubble sort, checking all pairs)."
            },
            {
              "type": "text",
              "value": "<b>O(2ⁿ) — Exponential:</b> Time doubles with each added input. Example: recursive Fibonacci, brute-force subset generation."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Big-O describes growth rate as n→∞, ignoring constants and lower terms",
            "Know best, average, and worst case for common algorithms",
            "O(log n) is the fastest for searching; O(1) is the fastest overall"
          ]
        },
        {
          "id": "sorting-algos",
          "title": "Sorting Algorithms",
          "content": [
            {
              "type": "text",
              "value": "Sorting arranges data in a particular order (usually ascending). Different algorithms have different trade-offs between speed, memory usage, and stability."
            },
            {
              "type": "text",
              "value": "<b>Bubble Sort:</b> Repeatedly steps through the list, compares adjacent elements, and swaps them if in wrong order. Simple but slow: O(n²). Named because larger elements \"bubble\" to the top."
            },
            {
              "type": "text",
              "value": "<b>Selection Sort:</b> Finds the smallest element and swaps it with the first position, then finds the next smallest and swaps with the second, etc. O(n²). Simple but not stable."
            },
            {
              "type": "text",
              "value": "<b>Insertion Sort:</b> Builds the sorted array one element at a time by inserting each element into its correct position. O(n²) worst case but O(n) if nearly sorted. Good for small datasets."
            },
            {
              "type": "text",
              "value": "<b>Merge Sort:</b> Divide-and-conquer: split the array in half recursively until single elements, then merge sorted halves back together. O(n log n) guaranteed. Uses O(n) extra space. Stable."
            },
            {
              "type": "text",
              "value": "<b>Quick Sort:</b> Picks a pivot, partitions the array so elements smaller than pivot go left and larger go right, then recursively sorts both partitions. Average O(n log n), worst O(n²). No extra space needed."
            },
            {
              "type": "table",
              "headers": [
                "Algorithm",
                "Best",
                "Average",
                "Worst",
                "Space",
                "Stable"
              ],
              "rows": [
                [
                  "Bubble Sort",
                  "O(n)",
                  "O(n²)",
                  "O(n²)",
                  "O(1)",
                  "Yes"
                ],
                [
                  "Selection Sort",
                  "O(n²)",
                  "O(n²)",
                  "O(n²)",
                  "O(1)",
                  "No"
                ],
                [
                  "Insertion Sort",
                  "O(n)",
                  "O(n²)",
                  "O(n²)",
                  "O(1)",
                  "Yes"
                ],
                [
                  "Merge Sort",
                  "O(n log n)",
                  "O(n log n)",
                  "O(n log n)",
                  "O(n)",
                  "Yes"
                ],
                [
                  "Quick Sort",
                  "O(n log n)",
                  "O(n log n)",
                  "O(n²)",
                  "O(log n)",
                  "No"
                ]
              ]
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Case Study - SWE",
                  "section": "Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Quick sort uses divide-and-conquer with a pivot; worst case occurs when pivot is smallest/largest",
            "Merge sort is stable, O(n log n) guaranteed, but needs O(n) extra space"
          ]
        },
        {
          "id": "searching-algos",
          "title": "Searching Algorithms",
          "content": [
            {
              "type": "text",
              "value": "<b>Linear Search:</b> Checks each element one by one. O(n). Works on any array (sorted or unsorted). Simple but slow for large datasets."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "int linearSearch(int arr[], int n, int key) {\n    for (int i = 0; i < n; i++)\n        if (arr[i] == key) return i;\n    return -1;\n}"
            },
            {
              "type": "text",
              "value": "<b>Binary Search:</b> Repeatedly divides the search interval in half. O(log n) — very fast. <b>Requires a sorted array.</b>"
            },
            {
              "type": "code",
              "lang": "c",
              "value": "int binarySearch(int arr[], int l, int r, int key) {\n    while (l <= r) {\n        int mid = l + (r - l) / 2;  // avoid overflow\n        if (arr[mid] == key) return mid;\n        if (arr[mid] < key) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Case Study - SWE",
                  "section": "Algorithms",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Binary search only works on SORTED arrays",
            "Calculate mid as l + (r-l)/2 to avoid integer overflow"
          ]
        },
        {
          "id": "linked-lists",
          "title": "Linked Lists",
          "content": [
            {
              "type": "text",
              "value": "A linked list is a linear data structure where elements (nodes) are connected by pointers. Each node contains data and a pointer to the next node."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "struct Node {\n    int data;\n    struct Node* next;\n};\n\n// Insert at beginning\nstruct Node* insertFirst(struct Node* head, int data) {\n    struct Node* newNode = malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = head;\n    return newNode;\n}"
            },
            {
              "type": "text",
              "value": "<b>Singly Linked List:</b> Each node has data + next pointer. Forward traversal only. Insertion/deletion at beginning = O(1), at end = O(n)."
            },
            {
              "type": "text",
              "value": "<b>Doubly Linked List:</b> Each node has prev + next pointers. Two-way traversal. Uses more memory but deletion at both ends is O(1)."
            },
            {
              "type": "text",
              "value": "<b>Circular Linked List:</b> Last node points back to first. No NULL pointers. Useful for round-robin scheduling."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Linked lists use dynamic memory allocation (no fixed size like arrays)",
            "Insertion/deletion at beginning is O(1); at end is O(n) for singly linked"
          ]
        },
        {
          "id": "stacks-queues",
          "title": "Stacks & Queues",
          "content": [
            {
              "type": "text",
              "value": "<b>Stack (LIFO — Last In, First Out):</b> Like a pile of plates — you add to the top and remove from the top. Operations: push (add), pop (remove), peek/top (view top without removing). Used in: function call management, expression evaluation, undo operations."
            },
            {
              "type": "code",
              "lang": "c",
              "value": "#define MAX 100\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if (top == MAX-1) { printf(\"Overflow\"); return; }\n    stack[++top] = val;\n}\n\nint pop() {\n    if (top == -1) { printf(\"Underflow\"); return -1; }\n    return stack[top--];\n}"
            },
            {
              "type": "text",
              "value": "<b>Queue (FIFO — First In, First Out):</b> Like a line at a bank — first person in line is first served. Operations: enqueue (add to rear), dequeue (remove from front), front (view front without removing). Used in: scheduling, BFS, print spooling."
            },
            {
              "type": "text",
              "value": "<b>Circular Queue:</b> Uses an array efficiently by wrapping around. When the rear reaches the end, it goes back to index 0 if the front has moved forward."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Stack overflow = push when full; Stack underflow = pop when empty",
            "Know how to implement stack/queue using both arrays and linked lists"
          ]
        },
        {
          "id": "trees-graphs",
          "title": "Trees & Graphs",
          "content": [
            {
              "type": "text",
              "value": "<b>Binary Tree:</b> Each node has at most two children: left and right. Binary Search Tree (BST): left child < parent < right child for all nodes. Inorder traversal of BST gives sorted order."
            },
            {
              "type": "text",
              "value": "<b>Tree Traversals:</b> Inorder (left, root, right) — gives sorted order. Preorder (root, left, right) — copies the tree structure. Postorder (left, right, root) — deletes the tree."
            },
            {
              "type": "text",
              "value": "<b>Graph:</b> Collection of vertices (nodes) connected by edges. Can be directed or undirected, weighted or unweighted."
            },
            {
              "type": "text",
              "value": "<b>BFS (Breadth-First Search):</b> Uses a queue. Visits nodes level by level. Finds shortest path in unweighted graphs."
            },
            {
              "type": "text",
              "value": "<b>DFS (Depth-First Search):</b> Uses a stack (or recursion). Goes deep before backtracking. Uses less memory than BFS for deep graphs."
            },
            {
              "type": "mermaid",
              "value": "graph TD\n  A[Root] --> B[Left]\n  A --> C[Right]\n  B --> D[Left-Left]\n  B --> E[Left-Right]"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Case Study - SWE",
                  "section": "Algorithms",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: D. Algorithm and data structure",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: IV. Data Structure and Algorithm",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section E: Data Structure and Algorithm",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Inorder traversal of BST gives sorted order",
            "BST worst case O(n) when tree is skewed — AVL trees fix this (self-balancing)",
            "BFS uses queue, DFS uses stack"
          ]
        }
      ]
    },
    {
      "id": "system-analysis",
      "title": "System Analysis & Design / UML",
      "icon": "🛠️",
      "chapters": [
        {
          "id": "sdLC",
          "title": "System Development Life Cycle (SDLC)",
          "content": [
            {
              "type": "text",
              "value": "The SDLC is a structured process for planning, creating, testing, and deploying an information system. Think of it like building a house — you would not start construction without blueprints and a plan."
            },
            {
              "type": "text",
              "value": "<b>Phases:</b>"
            },
            {
              "type": "text",
              "value": "<b>Planning:</b> Feasibility study (is it technically possible? financially viable?), resource estimation, project schedule. Decide whether to proceed."
            },
            {
              "type": "text",
              "value": "<b>Analysis:</b> Gather requirements from users through interviews, questionnaires, observation, and document analysis. Define what the system should do (not how — that's design)."
            },
            {
              "type": "text",
              "value": "<b>Design:</b> Create the architecture: database design, user interface, system components, DFDs, ERDs. This is the blueprint."
            },
            {
              "type": "text",
              "value": "<b>Implementation:</b> Write the code, build the database, create the user interface. Unit testing — test individual components."
            },
            {
              "type": "text",
              "value": "<b>Testing:</b> Integration testing (do components work together?), System testing (does the whole system work?), User Acceptance Testing (UAT — do users approve?)."
            },
            {
              "type": "text",
              "value": "<b>Deployment:</b> Install the system, train users, convert data. Conversion strategies: direct cutover (switch immediately), parallel (run old and new together), phased (roll out gradually)."
            },
            {
              "type": "text",
              "value": "<b>Maintenance:</b> Corrective (fix bugs), Adaptive (adapt to new environments), Perfective (add features), Preventive (prevent future problems)."
            },
            {
              "type": "mermaid",
              "value": "flowchart LR\n  A[Planning] --> B[Analysis]\n  B --> C[Design]\n  C --> D[Implementation]\n  D --> E[Testing]\n  E --> F[Deployment]\n  F --> G[Maintenance]"
            },
            {
              "type": "text",
              "value": "<b>Models:</b> Waterfall (sequential, rigid), Agile (iterative, flexible), Spiral (risk-driven with prototyping), V-Model (verification at each phase)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2022",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information System and Database — I. Object Modeling",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information Systems and Database - Part I: Object Modeling MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Waterfall vs Agile differences are frequently tested",
            "Know which fact-finding method (interview, questionnaire, observation) is best for each scenario"
          ]
        },
        {
          "id": "uml-diagrams",
          "title": "UML Diagrams",
          "content": [
            {
              "type": "text",
              "value": "UML (Unified Modeling Language) is a standard visual language for modeling software systems. There are 14 diagram types divided into two categories: <b>structural</b> (showing the static structure) and <b>behavioral</b> (showing dynamic behavior). Below are the most commonly tested diagrams."
            },
            {
              "type": "text",
              "value": "<hr><h3>Structural (Static) Diagrams</h3>"
            },
            {
              "type": "text",
              "value": "<b>1. Class Diagram</b> — The most important UML diagram for exams. It shows classes (rectangles), their attributes (middle section), their methods (bottom section), and relationships between classes. Key relationships: <b>Inheritance</b> (hollow triangle arrow pointing to parent), <b>Association</b> (simple line with multiplicity like \"1\" or \"*\"), <b>Aggregation</b> (hollow diamond at the whole end — the parts can exist without the whole, e.g., a Department has Teachers, but Teachers can exist without the Department), <b>Composition</b> (filled diamond — the parts cannot exist without the whole, e.g., a House has Rooms, and Rooms are destroyed when the House is destroyed)."
            },
            {
              "type": "mermaid",
              "value": "classDiagram\n  class User {\n    -String userId\n    -String name\n    +login()\n    +logout()\n  }\n  class Account {\n    -String accountNo\n    -double balance\n    +deposit(amount)\n    +withdraw(amount)\n    +getBalance()\n  }\n  class Transaction {\n    -String transactionId\n    -double amount\n    -Date date\n    +getDetails()\n  }\n  User \"1\" --> \"*\" Account : owns\n  Account \"1\" --> \"*\" Transaction : has"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> One User can own many Accounts (the \"1\" and \"*\" show this). Each Account has many Transactions. Private attributes start with -, public methods start with +."
            },
            {
              "type": "text",
              "value": "<hr>"
            },
            {
              "type": "text",
              "value": "<b>2. Component Diagram</b> — Shows how the software is physically packaged into components (files, libraries, executables, modules) and the dependencies between them. Each component is drawn as a rectangle with two small rectangles sticking out from the left side (like a UML component stereotype). Components are connected by dashed arrows showing dependencies."
            },
            {
              "type": "mermaid",
              "value": "flowchart LR\n  subgraph Client_Tier\n    UI[\"Admin Web UI\n(HTML/CSS/JS)\"]\n  end\n  subgraph Application_Tier\n    API[\"REST API\n(Node.js)\"]\n    Auth[\"Auth Module\n(JWT)\"]\n    API --- Auth\n  end\n  subgraph Data_Tier\n    DB[\"Database\n(MySQL)\"]\n    Cache[\"Cache\n(Redis)\"]\n  end\n  UI --> API\n  API --> DB\n  API --> Cache"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> The system is split into three tiers: the Client Tier (UI), the Application Tier (API logic and authentication), and the Data Tier (database and cache). The UI depends on the API, and the API depends on the database and cache."
            },
            {
              "type": "text",
              "value": "<hr>"
            },
            {
              "type": "text",
              "value": "<b>3. Deployment Diagram</b> — Shows the physical hardware (nodes) and which software components run on each node. Nodes are drawn as 3D boxes. This diagram answers: where does each piece of software physically run?"
            },
            {
              "type": "mermaid",
              "value": "flowchart TB\n  subgraph Client_Node[\"Client Machine\n(Web Browser)\"]\n    Browser[\"Browser App\nAngular SPA\"]\n  end\n  subgraph Server_Node[\"Application Server\nUbuntu 22.04\"]\n    WebServer[\"Web Server\nNginx\"]\n    AppServer[\"App Server\nNode.js\"]\n  end\n  subgraph DB_Node[\"Database Server\nWindows Server 2022\"]\n    MySQL[\"MySQL\nDatabase\"]\n    Backup[\"Backup\nService\"]\n  end\n  Client_Node --> Server_Node\n  Server_Node --> DB_Node"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> Three physical machines exist: a Client Machine (runs the browser app), an Application Server (runs Nginx and Node.js), and a Database Server (runs MySQL and backup service). Arrows show network communication between machines."
            },
            {
              "type": "text",
              "value": "<hr><h3>Behavioral (Dynamic) Diagrams</h3>"
            },
            {
              "type": "text",
              "value": "<b>4. Use Case Diagram</b> — Shows the interactions between <b>actors</b> (external users or systems, drawn as stick figures) and <b>use cases</b> (functions the system performs, drawn as ovals). A system boundary box surrounds the use cases. Actors are connected to use cases by lines. This is one of the most frequently tested UML diagrams in HND exams."
            },
            {
              "type": "mermaid",
              "value": "flowchart LR\n  %% Actors\n  Student([\"Student\"])\n  Admin([\"Administrator\"])\n  \n  subgraph System[\"Library Management System\"]\n    UC1[\"( Search Books )\"]\n    UC2[\"( Borrow Book )\"]\n    UC3[\"( Return Book )\"]\n    UC4[\"( Add New Book )\"]\n    UC5[\"( Manage Members )\"]\n  end\n  \n  Student --> UC1\n  Student --> UC2\n  Student --> UC3\n  Admin --> UC3\n  Admin --> UC4\n  Admin --> UC5\n  Admin --> UC1"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> Two actors interact with the Library System. Student can Search, Borrow, and Return books. Administrator can Search, Return, Add New Book, and Manage Members. Notice both Student and Administrator can Return books."
            },
            {
              "type": "text",
              "value": "<hr>"
            },
            {
              "type": "text",
              "value": "<b>5. Sequence Diagram</b> — Shows HOW objects interact over TIME. Each object has a vertical <b>lifeline</b> (dashed line). Messages are horizontal arrows between lifelines, read from top to bottom (time flows downward). Sequence diagrams are excellent for showing the order of operations in a single scenario."
            },
            {
              "type": "mermaid",
              "value": "sequenceDiagram\n  participant Student\n  participant System as Library System\n  participant DB as Database\n  \n  Student->>System: searchBook(\"title\")\n  System->>DB: SELECT * FROM books\n  DB-->>System: result set\n  System-->>Student: display book list\n  \n  Student->>System: borrowBook(bookId)\n  System->>DB: check availability\n  DB-->>System: available=true\n  System->>DB: UPDATE books SET status='borrowed'\n  DB-->>System: success\n  System-->>Student: confirmBorrow(receipt)"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> Time flows downward. The Student sends a searchBook message to the System. The System queries the Database and returns results. Then the Student borrows a book — the System checks availability, updates the database, and confirms. Solid arrows are synchronous calls; dashed arrows are return messages."
            },
            {
              "type": "text",
              "value": "<hr>"
            },
            {
              "type": "text",
              "value": "<b>6. Activity Diagram</b> — Like a flowchart for business processes. It shows the flow from one activity to another, including <b>decision points</b> (diamonds), <b>parallel forks</b> (thick bars splitting into multiple flows), and <b>joins</b> (thick bars merging flows back). The solid circle is the start, the bullseye circle is the end."
            },
            {
              "type": "mermaid",
              "value": "flowchart TD\n  Start([Start]) --> Login[\"Enter Username\nand Password\"]\n  Login --> Validate{Validate\nCredentials}\n  Validate -- Valid --> Dashboard[\"Show\nDashboard\"]\n  Validate -- Invalid --> Error[\"Show Error\nMessage\"]\n  Error --> Retry{Retries\n< 3?}\n  Retry -- Yes --> Login\n  Retry -- No --> Lock[\"Lock Account\"]\n  Dashboard --> End([End])\n  Lock --> End"
            },
            {
              "type": "text",
              "value": "<b>How to read:</b> The process starts at the solid circle. The user enters credentials, then the system validates them. If valid, the dashboard is shown. If invalid, an error appears, and the user can retry up to 3 times before the account is locked. Parallel forks (not shown here) would allow two activities to happen simultaneously — like saving an order AND sending a confirmation email at the same time."
            }
          ],
          "examTips": [
            "Know the difference between aggregation (weak whole-part, hollow diamond) and composition (strong lifetime-tied, filled diamond)",
            "Use Case diagrams are the most common in exams — be able to identify actors and use cases from a scenario",
            "Sequence diagrams show time order — read from top to bottom",
            "Activity diagrams use fork bars for parallel activities"
          ]
        },
        {
          "id": "dfd-erd",
          "title": "DFD & ERD",
          "content": [
            {
              "type": "text",
              "value": "<b>Data Flow Diagram (DFD):</b> Shows how data moves through a system. Symbols: External Entity (rectangle), Process (circle/rounded rect), Data Store (open rectangle), Data Flow (arrow). Level 0 = context diagram (entire system as one process), Level 1 breaks it down, Level 2 adds more detail."
            },
            {
              "type": "text",
              "value": "<b>Entity Relationship Diagram (ERD):</b> Shows data entities and their relationships. Used for database design. Entity = rectangle (Student, Course), Attribute = oval (name, age), Relationship = diamond (enrolls in). Cardinality: 1:1 (one-to-one), 1:M (one-to-many), M:N (many-to-many)."
            },
            {
              "type": "mermaid",
              "value": "erDiagram\n  STUDENT ||--o{ ENROLLMENT : has\n  COURSE ||--o{ ENROLLMENT : includes\n  STUDENT {\n    int studentId PK\n    string name\n  }\n  COURSE {\n    string courseCode PK\n    string title\n  }\n  ENROLLMENT {\n    int studentId FK\n    string courseCode FK\n  }"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2022",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information System and Database — I. Object Modeling",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information Systems and Database - Part I: Object Modeling MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "DFD shows data flow — NOT control flow (that's a flowchart)",
            "ERD cardinalities: || = exactly one, o{ = zero or many, |{ = one or many"
          ]
        },
        {
          "id": "requirements",
          "title": "Requirements Engineering",
          "content": [
            {
              "type": "text",
              "value": "<b>Functional Requirements:</b> What the system should DO. Example: \"User shall be able to search for products by name.\" These describe features and functions."
            },
            {
              "type": "text",
              "value": "<b>Non-Functional Requirements:</b> HOW the system should perform. Categories: performance (response time < 2 seconds), security (must use encryption), usability (must be usable by blind users), reliability (99.9% uptime), scalability (must handle 10,000 users)."
            },
            {
              "type": "text",
              "value": "<b>Fact-Finding Techniques:</b> Interview (in-depth, can probe), Questionnaire (large groups, standardized), Observation (watch current processes), Document Analysis (review existing forms and reports). Choose based on: time, budget, access to people, type of information needed."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2022",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information System and Database — I. Object Modeling",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "System Analysis and Design",
                  "section": "Section A: Information Systems and Database - Part I: Object Modeling MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Functional describes features; non-functional describes quality attributes",
            "Select the BEST fact-finding technique based on scenario (interviews for depth, questionnaires for breadth)"
          ]
        }
      ]
    },
    {
      "id": "database-sql",
      "title": "Database & SQL",
      "icon": "🗄️",
      "chapters": [
        {
          "id": "db-concepts",
          "title": "Database Concepts & Architecture",
          "content": [
            {
              "type": "text",
              "value": "A <b>database</b> is an organized collection of structured data. A <b>DBMS</b> (Database Management System) is software that manages databases — MySQL, Oracle, SQL Server, PostgreSQL."
            },
            {
              "type": "text",
              "value": "<b>Key Concepts:</b>"
            },
            {
              "type": "text",
              "value": "<b>Primary Key (PK):</b> Uniquely identifies each row in a table. No two rows can have the same PK value. Example: student_id in a Students table."
            },
            {
              "type": "text",
              "value": "<b>Foreign Key (FK):</b> References the primary key in another table. Creates relationships between tables. Example: student_id in an Enrollments table references student_id in Students."
            },
            {
              "type": "text",
              "value": "<b>Schema:</b> The logical structure of the database — what tables exist, their columns, and relationships."
            },
            {
              "type": "text",
              "value": "<b>Three-Level Architecture (ANSI-SPARC):</b> External level (user views — different users see different data), Conceptual level (logical structure of entire database), Internal level (physical storage on disk). This separation provides data independence."
            },
            {
              "type": "text",
              "value": "<b>Data Independence:</b> Logical independence = change conceptual level without affecting external views (add a column without breaking user queries). Physical independence = change storage structure without affecting conceptual level (move data to SSD without changing queries)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: II. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section C: Database",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Data independence: logical (change conceptual without affecting external) and physical (change storage without affecting conceptual)",
            "PK uniquely identifies rows; FK links tables together"
          ]
        },
        {
          "id": "sql-queries",
          "title": "SQL Queries (DML)",
          "content": [
            {
              "type": "text",
              "value": "SQL (Structured Query Language) is the standard language for working with relational databases."
            },
            {
              "type": "code",
              "lang": "sql",
              "value": "-- SELECT with conditions\nSELECT name, age FROM students WHERE age > 18 ORDER BY name ASC;\n\n-- JOIN (combine tables)\nSELECT s.name, c.title\nFROM students s\nJOIN enrollments e ON s.id = e.student_id\nJOIN courses c ON e.course_id = c.id;\n\n-- Aggregate functions\nSELECT department, COUNT(*) AS count, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5;\n\n-- Subquery (query within query)\nSELECT name FROM students\nWHERE id IN (SELECT student_id FROM enrollments WHERE course_id = 101);"
            },
            {
              "type": "table",
              "headers": [
                "Command",
                "Category",
                "Purpose"
              ],
              "rows": [
                [
                  "SELECT",
                  "DML",
                  "Retrieve data"
                ],
                [
                  "INSERT",
                  "DML",
                  "Add new rows"
                ],
                [
                  "UPDATE",
                  "DML",
                  "Modify existing rows"
                ],
                [
                  "DELETE",
                  "DML",
                  "Remove rows"
                ],
                [
                  "CREATE TABLE",
                  "DDL",
                  "Create new table"
                ],
                [
                  "ALTER TABLE",
                  "DDL",
                  "Modify table structure"
                ],
                [
                  "DROP TABLE",
                  "DDL",
                  "Delete table"
                ],
                [
                  "GRANT",
                  "DCL",
                  "Give permissions"
                ],
                [
                  "REVOKE",
                  "DCL",
                  "Remove permissions"
                ],
                [
                  "COMMIT",
                  "TCL",
                  "Save transaction"
                ],
                [
                  "ROLLBACK",
                  "TCL",
                  "Undo transaction"
                ]
              ]
            },
            {
              "type": "text",
              "value": "<b>Important:</b> WHERE filters rows BEFORE grouping. HAVING filters groups AFTER GROUP BY. JOINs combine data from multiple tables based on related columns."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section B: Database Development and Administration",
                  "qid": "Q4"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: II. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section C: Database",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "SQL keywords are case-insensitive but conventionally UPPERCASE",
            "HAVING filters groups (after GROUP BY); WHERE filters rows (before GROUP BY)",
            "Learn JOIN syntax: INNER JOIN, LEFT JOIN, RIGHT JOIN"
          ]
        },
        {
          "id": "normalization",
          "title": "Normalization",
          "content": [
            {
              "type": "text",
              "value": "Normalization organizes a database to reduce redundancy and prevent anomalies (problems when inserting, updating, or deleting data)."
            },
            {
              "type": "text",
              "value": "<b>1NF (First Normal Form):</b> Each cell contains a single value (no lists in one cell). Each column has a unique name. No duplicate rows. Example: instead of storing \"Math, English\" in one cell, create separate rows or a related table."
            },
            {
              "type": "text",
              "value": "<b>2NF (Second Normal Form):</b> Must be in 1NF AND every non-key attribute must depend on the ENTIRE primary key (no partial dependency). Only relevant for tables with composite primary keys. Example: a table with (StudentID, CourseID, StudentName, Instructor) violates 2NF because StudentName depends only on StudentID (part of the key). Fix: split into Students and Enrollments tables."
            },
            {
              "type": "text",
              "value": "<b>3NF (Third Normal Form):</b> Must be in 2NF AND no transitive dependency (non-key attribute depends only on the primary key, not on another non-key attribute). Example: a table with (StudentID, Major, Advisor) — if Advisor depends on Major (not on StudentID directly), this violates 3NF. Fix: create a separate Majors table with the Advisor."
            },
            {
              "type": "text",
              "value": "<b>Why normalize?</b> Reduces data duplication, prevents update anomalies (change in one place only), prevents insertion anomalies (cannot add data without other data), prevents deletion anomalies (deleting one fact deletes unrelated facts)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Case Study - SWE",
                  "section": "Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: II. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section C: Database",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Functional dependency: X→Y means X determines Y (if you know X, you can find Y)",
            "Normalization reduces redundancy and prevents anomalies (insert, update, delete)"
          ]
        },
        {
          "id": "er-to-relational",
          "title": "ER to Relational Mapping",
          "content": [
            {
              "type": "text",
              "value": "Converting an ER diagram to relational tables follows a systematic approach:"
            },
            {
              "type": "text",
              "value": "(1) Each strong entity becomes a table (attributes become columns, PK maps to PK). (2) Each weak entity becomes a table with FK to owner's PK as part of composite key. (3) For relationships: 1:M = add FK to the many-side table. 1:1 = add FK to either side (preferably the one with total participation). M:N = create a new table with composite PK from both related entities' PKs. (4) Multivalued attributes become a new table with FK back to owning entity."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Database",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: II. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section C: Database",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "M:N relationships always produce a new intersection/cross-reference table",
            "For 1:M, put the FK in the table on the M (many) side"
          ]
        },
        {
          "id": "transactions",
          "title": "Transactions & ACID Properties",
          "content": [
            {
              "type": "text",
              "value": "A <b>transaction</b> is a group of database operations that must all succeed or all fail together. Example: transferring money from Account A to Account B — both the debit and credit must happen, or neither should."
            },
            {
              "type": "text",
              "value": "<b>ACID Properties:</b>"
            },
            {
              "type": "text",
              "value": "<b>Atomicity:</b> All-or-nothing. If any part of the transaction fails, the entire transaction is rolled back (undone)."
            },
            {
              "type": "text",
              "value": "<b>Consistency:</b> The database is in a valid state before and after the transaction. Constraints and rules are maintained."
            },
            {
              "type": "text",
              "value": "<b>Isolation:</b> Concurrent transactions do not interfere with each other. Each transaction appears to run alone."
            },
            {
              "type": "text",
              "value": "<b>Durability:</b> Once committed, changes survive system failures (power loss, crashes). The data is permanently saved."
            },
            {
              "type": "text",
              "value": "<b>Transaction control:</b> COMMIT = save changes permanently. ROLLBACK = undo all changes. SAVEPOINT = set a point to roll back to (partial rollback)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: B. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: II. Database",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section C: Database",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "COMMIT makes changes permanent; ROLLBACK undoes changes",
            "Isolation levels: Read Uncommitted (lowest) to Serializable (highest)"
          ]
        }
      ]
    },
    {
      "id": "web-programming",
      "title": "Web Programming",
      "icon": "🌐",
      "chapters": [
        {
          "id": "html-css",
          "title": "HTML & CSS",
          "content": [
            {
              "type": "text",
              "value": "<b>HTML (HyperText Markup Language)</b> is the language used to create web pages. It uses <b>tags</b> (elements) to structure content: headings, paragraphs, links, images, tables, forms."
            },
            {
              "type": "code",
              "lang": "markup",
              "value": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Page Title</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <header><h1>Welcome</h1></header>\n    <nav><a href=\"index.html\">Home</a></nav>\n    <main><p>Hello, world!</p></main>\n    <footer>&copy; 2025</footer>\n</body>\n</html>"
            },
            {
              "type": "text",
              "value": "<b>Block vs Inline:</b> Block elements (div, p, h1, ul) take full width and start on new lines. Inline elements (span, a, img, strong) flow within text."
            },
            {
              "type": "text",
              "value": "<b>Semantic HTML:</b> Using tags that describe their meaning: header, nav, main, section, article, footer, aside. This improves accessibility and SEO."
            },
            {
              "type": "code",
              "lang": "css",
              "value": "/* Selectors: element, class, id */\np { color: blue; }           // element selector\n.container { max-width: 960px; }  // class selector\n#main-title { font-size: 2em; }  // id selector\n\n/* Flexbox — one-dimensional layout */\n.flex { display: flex; justify-content: space-between; }\n\n/* Grid — two-dimensional layout */\n.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Web",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section C: Web Design",
                  "qid": "Q5"
                },
                {
                  "year": "2025",
                  "paper": "Case Study",
                  "section": "Section A: Algorithm and Programming - I. Algorithms",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Semantic HTML improves accessibility and SEO",
            "CSS specificity: inline > id > class > element. !important overrides everything"
          ]
        },
        {
          "id": "javascript",
          "title": "JavaScript Basics",
          "content": [
            {
              "type": "text",
              "value": "JavaScript is a programming language that runs in the browser. It makes web pages interactive — responding to clicks, validating forms, updating content without reloading."
            },
            {
              "type": "code",
              "lang": "javascript",
              "value": "// Variables\nlet name = \"Alice\";\nconst PI = 3.14;\n\n// Function\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;\n\n// DOM manipulation\ndocument.getElementById(\"btn\").addEventListener(\"click\", function() {\n    document.querySelector(\".message\").textContent = \"Clicked!\";\n});\n\n// Array methods\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconst even = numbers.filter(n => n % 2 === 0);\nconst sum = numbers.reduce((acc, n) => acc + n, 0);"
            },
            {
              "type": "text",
              "value": "<b>DOM (Document Object Model):</b> The browser's tree representation of HTML elements. JavaScript can traverse and modify the DOM to change what the user sees."
            },
            {
              "type": "text",
              "value": "<b>Events:</b> click, submit, keydown, mouseover, load. Use addEventListener() to respond to events."
            },
            {
              "type": "text",
              "value": "<b>Important:</b> == compares with type coercion (5 == \"5\" is true). === compares strictly (5 === \"5\" is false). Always prefer ===."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "== vs ===: always prefer === (strict comparison, no type coercion)",
            "let and const are block-scoped; var is function-scoped",
            "DOM = browser's tree representation of HTML"
          ]
        },
        {
          "id": "php-mysql",
          "title": "PHP & MySQL Integration",
          "content": [
            {
              "type": "text",
              "value": "PHP is a server-side scripting language. Unlike JavaScript (which runs in the browser), PHP runs on the server and generates HTML that is sent to the browser. PHP can connect to MySQL databases to store and retrieve data."
            },
            {
              "type": "code",
              "lang": "php",
              "value": "<?php\n// Connect to database\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"university\");\n\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\n\n// Prepared statement (prevents SQL injection!)\n$stmt = $conn->prepare(\"INSERT INTO students (name, email) VALUES (?, ?)\");\n$stmt->bind_param(\"ss\", $name, $email);\n\n$name = \"Alice\";\n$email = \"alice@example.com\";\n$stmt->execute();\n\n// Fetch results\n$result = $conn->query(\"SELECT * FROM students\");\nwhile ($row = $result->fetch_assoc()) {\n    echo $row[\"name\"] . \"<br>\";\n}\n\n$stmt->close();\n$conn->close();\n?>"
            },
            {
              "type": "text",
              "value": "<b>Key Concepts:</b> $_GET and $_POST collect form data. Sessions (session_start(), $_SESSION) persist data across pages. Cookies (setcookie(), $_COOKIE) store data client-side. Prepared statements prevent SQL injection — never use string concatenation for SQL queries with user input."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Web",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Case Study - SWE",
                  "section": "Section A: Algorithm and Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Always use prepared statements to prevent SQL injection — NEVER use string concatenation for queries with user input",
            "$_GET shows data in URL; $_POST hides data in request body"
          ]
        }
      ]
    },
    {
      "id": "networking",
      "title": "Networking",
      "icon": "🌐",
      "chapters": [
        {
          "id": "network-basics",
          "title": "Network Basics & Topologies",
          "content": [
            {
              "type": "text",
              "value": "A computer network connects two or more computers so they can share resources (files, printers, internet access) and communicate. Networks are classified by size."
            },
            {
              "type": "text",
              "value": "<b>PAN</b> (Personal Area Network) — ~10m, Bluetooth, USB. Connects personal devices (phone to laptop)."
            },
            {
              "type": "text",
              "value": "<b>LAN</b> (Local Area Network) — Building or campus. Ethernet or Wi-Fi. Most common type."
            },
            {
              "type": "text",
              "value": "<b>MAN</b> (Metropolitan Area Network) — City-wide. Connects multiple LANs across a city."
            },
            {
              "type": "text",
              "value": "<b>WAN</b> (Wide Area Network) — Country or continent. The Internet is the largest WAN."
            },
            {
              "type": "text",
              "value": "<b>Topologies — how devices are arranged:</b> Star (all connected to central switch — easy to manage but switch failure stops everything), Bus (all on a single cable — simple but cable break stops whole network), Ring (each connected to next — orderly but one break stops ring), Mesh (everyone connected to everyone — very reliable but expensive)."
            },
            {
              "type": "mermaid",
              "value": "flowchart TD\n  subgraph Star\n    S1[Switch] --- C1[Computer 1]\n    S1 --- C2[Computer 2]\n    S1 --- C3[Computer 3]\n  end\n  subgraph Bus\n    B1[Cable] --- B2[Computer A]\n    B1 --- B3[Computer B]\n    B1 --- B4[Computer C]\n  end"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: III. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section D: Networking",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Star topology is most common in modern LANs (Ethernet switches)",
            "Mesh is used in WANs and critical systems where reliability is paramount"
          ]
        },
        {
          "id": "osi-model",
          "title": "OSI Model & TCP/IP",
          "content": [
            {
              "type": "text",
              "value": "The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes network communication into 7 layers. Each layer has a specific function and communicates with the layer above and below."
            },
            {
              "type": "text",
              "value": "<b>Layer 7 — Application:</b> User-facing protocols: HTTP (web), FTP (file transfer), SMTP (email), DNS (domain names)."
            },
            {
              "type": "text",
              "value": "<b>Layer 6 — Presentation:</b> Data formatting, encryption, compression. Translates between application and network formats."
            },
            {
              "type": "text",
              "value": "<b>Layer 5 — Session:</b> Establishes, manages, and terminates connections between applications."
            },
            {
              "type": "text",
              "value": "<b>Layer 4 — Transport:</b> Reliable delivery. TCP (reliable, ordered) and UDP (fast, no guarantee). Segment is the PDU (Protocol Data Unit)."
            },
            {
              "type": "text",
              "value": "<b>Layer 3 — Network:</b> Routing and addressing. IP (Internet Protocol) — determines best path. Packet is the PDU."
            },
            {
              "type": "text",
              "value": "<b>Layer 2 — Data Link:</b> Framing, MAC addresses, error detection. Ethernet, Wi-Fi. Frame is the PDU."
            },
            {
              "type": "text",
              "value": "<b>Layer 1 — Physical:</b> Raw bit transmission over physical medium (cables, radio waves, fiber optics). Bit is the PDU."
            },
            {
              "type": "text",
              "value": "<b>TCP vs UDP:</b> TCP (connection-oriented, reliable, ordered — for web, email, file transfer). UDP (connectionless, fast, no guarantees — for streaming, VoIP, DNS)."
            },
            {
              "type": "mermaid",
              "value": "flowchart TB\n  L7[7. Application\\nHTTP, FTP, SMTP, DNS]\n  L6[6. Presentation\\nSSL, TLS, JPEG, MPEG]\n  L5[5. Session\\nNetBIOS, RPC]\n  L4[4. Transport\\nTCP, UDP]\n  L3[3. Network\\nIP, ICMP]\n  L2[2. Data Link\\nEthernet, MAC]\n  L1[1. Physical\\nBits on wire]\n  L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1"
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: III. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section D: Networking",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Mnemonic: Please Do Not Throw Sausage Pizza Away (Physical to Application)",
            "TCP/IP model has 4 layers vs OSI's 7 layers — TCP/IP merges upper 3 into Application"
          ]
        },
        {
          "id": "ip-addressing",
          "title": "IP Addressing & Subnetting",
          "content": [
            {
              "type": "text",
              "value": "Every device on a network needs an IP address — like a street address for your house. IPv4 addresses are 32 bits, written as four decimal numbers separated by dots: 192.168.1.1."
            },
            {
              "type": "text",
              "value": "<b>Address Classes:</b> Class A (1.0.0.0-126.255.255.255) — large networks (16M hosts). Class B (128-191) — medium networks (65K hosts). Class C (192-223) — small networks (254 hosts). Class D (224-239) — multicast. Class E (240-255) — reserved."
            },
            {
              "type": "text",
              "value": "<b>Private IP Ranges</b> (not routable on the Internet): 10.x.x.x, 172.16-31.x.x, 192.168.x.x. Used in home and business networks."
            },
            {
              "type": "text",
              "value": "<b>Subnetting:</b> Borrow bits from the host portion to create smaller networks (subnets). Each subnet has its own network address and broadcast address. Number of subnets = 2^n (n = borrowed bits). Number of usable hosts per subnet = 2^h - 2 (h = remaining host bits, subtract 2 for network and broadcast addresses)."
            },
            {
              "type": "text",
              "value": "<b>Example:</b> 192.168.1.0/24 (default mask 255.255.255.0). To create 4 subnets, borrow 2 bits: /26 (255.255.255.192). Each subnet has 62 usable hosts."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: III. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section D: Networking",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Private IP ranges: 10.x.x.x, 172.16-31.x.x, 192.168.x.x",
            "CIDR notation: /n means first n bits are network portion"
          ]
        },
        {
          "id": "protocols-services",
          "title": "Network Services & Protocols",
          "content": [
            {
              "type": "table",
              "headers": [
                "Protocol",
                "Port",
                "Use"
              ],
              "rows": [
                [
                  "HTTP",
                  "80",
                  "Web pages (unencrypted)"
                ],
                [
                  "HTTPS",
                  "443",
                  "Web pages (encrypted with TLS)"
                ],
                [
                  "FTP",
                  "20,21",
                  "File transfer"
                ],
                [
                  "SMTP",
                  "25",
                  "Sending email"
                ],
                [
                  "POP3",
                  "110",
                  "Receiving email (download)"
                ],
                [
                  "IMAP",
                  "143",
                  "Receiving email (server-based)"
                ],
                [
                  "DNS",
                  "53",
                  "Domain name to IP conversion"
                ],
                [
                  "DHCP",
                  "67,68",
                  "Automatic IP address assignment"
                ],
                [
                  "SSH",
                  "22",
                  "Secure remote access"
                ]
              ]
            },
            {
              "type": "text",
              "value": "DNS converts human-readable domain names (google.com) to IP addresses (142.250.190.46). DHCP automatically assigns IP addresses, subnet masks, and default gateways to devices when they connect to the network."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Case Study - SWE",
                  "section": "Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Practice of Computer",
                  "section": "Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section B: C. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section B: III. Networking",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Computer Technology",
                  "section": "Section D: Networking",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know common port numbers: HTTP(80), HTTPS(443), FTP(21), SMTP(25), DNS(53), SSH(22)",
            "DNS converts domain names to IP addresses — the \"phonebook of the Internet\""
          ]
        }
      ]
    },
    {
      "id": "operating-systems",
      "title": "Operating Systems",
      "icon": "🖥️",
      "chapters": [
        {
          "id": "os-basics",
          "title": "OS Concepts & Types",
          "content": [
            {
              "type": "text",
              "value": "An Operating System (OS) is system software that manages computer hardware and provides services to applications. It acts as a bridge between you and the hardware."
            },
            {
              "type": "text",
              "value": "<b>Functions:</b> Process management (create, schedule, synchronize processes), Memory management (allocate, deallocate, virtual memory), File system management (organize, store, secure files), I/O management (device drivers, buffering), Security (authentication, access control), User interface (CLI or GUI)."
            },
            {
              "type": "text",
              "value": "<b>Types:</b> Batch (jobs collected and processed without user interaction), Time-sharing/multitasking (CPU switches rapidly between programs — feels like they run simultaneously), Real-time (guaranteed response within deadlines — used in aircraft, medical devices), Distributed (multiple computers appear as one system), Embedded (dedicated to a specific device — smartphone, router, IoT)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Operating Systems",
                  "section": "Section A: Operating Systems",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Multitasking = one CPU, rapid switching; Multiprocessing = multiple CPUs",
            "Real-time OS must guarantee deadlines (hard RT vs soft RT)"
          ]
        },
        {
          "id": "process-scheduling",
          "title": "Process Scheduling",
          "content": [
            {
              "type": "text",
              "value": "A <b>process</b> is a program in execution. The OS scheduler decides which process gets the CPU and for how long."
            },
            {
              "type": "text",
              "value": "<b>Process States:</b> New → Ready (waiting for CPU) → Running (CPU executing) → Waiting (for I/O) → Terminated."
            },
            {
              "type": "text",
              "value": "<b>FCFS (First Come, First Served):</b> Non-preemptive. Simple but suffers from \"convoy effect\" (short jobs wait behind long ones)."
            },
            {
              "type": "text",
              "value": "<b>SJF (Shortest Job First):</b> Non-preemptive or preemptive (SRTF = Shortest Remaining Time First). Optimal average waiting time but can cause starvation of long jobs."
            },
            {
              "type": "text",
              "value": "<b>Round Robin:</b> Preemptive. Each process gets a fixed time quantum. Good for time-sharing systems. Quantum too large = FCFS; too small = too many context switches."
            },
            {
              "type": "text",
              "value": "<b>Priority Scheduling:</b> Higher priority processes run first. Starvation risk for low-priority processes (solved by aging — gradually increasing priority of waiting processes)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Operating Systems",
                  "section": "Section A: Operating Systems",
                  "qid": "Q2"
                },
                {
                  "year": "2021",
                  "paper": "Information System",
                  "section": "Operating Systems",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Preemptive = CPU can be taken away; Non-preemptive = process keeps CPU until it yields",
            "Round Robin: quantum size is critical — too large = FCFS, too small = too many context switches"
          ]
        },
        {
          "id": "memory-management",
          "title": "Memory Management",
          "content": [
            {
              "type": "text",
              "value": "The OS manages memory to allow multiple processes to share RAM efficiently and safely."
            },
            {
              "type": "text",
              "value": "<b>Contiguous Allocation:</b> Each process occupies one continuous block of memory. Simple but causes external fragmentation (small gaps between blocks that can't be used)."
            },
            {
              "type": "text",
              "value": "<b>Paging:</b> Memory divided into fixed-size frames. Processes divided into pages of the same size. Eliminates external fragmentation. Uses a page table to map virtual pages to physical frames."
            },
            {
              "type": "text",
              "value": "<b>Segmentation:</b> Logical divisions based on program structure (code, data, stack). Each segment can be of different size and can grow independently."
            },
            {
              "type": "text",
              "value": "<b>Virtual Memory:</b> Uses disk space as an extension of RAM. Allows running programs larger than physical memory. Pages are swapped between RAM and disk. <b>Thrashing</b> = excessive page swapping, causing severe slowdown."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Information System",
                  "section": "Operating Systems",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Operating Systems",
                  "section": "Section A: Operating Systems",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Thrashing = excessive paging due to too many active processes",
            "Paging eliminates external fragmentation; segmentation allows logical divisions"
          ]
        },
        {
          "id": "file-systems",
          "title": "File Systems & Storage",
          "content": [
            {
              "type": "text",
              "value": "A <b>file system</b> organizes how data is stored and retrieved on a storage device. Common file systems: FAT (older Windows), NTFS (modern Windows), ext4 (Linux)."
            },
            {
              "type": "text",
              "value": "<b>File Allocation Methods:</b> Contiguous (fast sequential access but external fragmentation), Linked (each block points to next, no fragmentation but slow random access), Indexed (index block contains pointers to all data blocks — supports direct access)."
            },
            {
              "type": "text",
              "value": "<b>Disk Scheduling:</b> FCFS (fair but slow), SSTF (shortest seek first — good throughput, may starve far requests), SCAN/Elevator (move in one direction servicing requests, reverse at end — fair), C-SCAN (service only in one direction, then jump back — more uniform wait times)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Information System",
                  "section": "Operating Systems",
                  "qid": "Q2"
                },
                {
                  "year": "2020",
                  "paper": "Operating Systems",
                  "section": "Section A: Operating Systems",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "SCAN algorithm behaves like an elevator — fair and avoids starvation",
            "Know the difference between FAT, NTFS, ext4"
          ]
        }
      ]
    },
    {
      "id": "information-systems",
      "title": "Information Systems",
      "icon": "ℹ️",
      "chapters": [
        {
          "id": "is-basics",
          "title": "Information Systems Overview",
          "content": [
            {
              "type": "text",
              "value": "An <b>Information System (IS)</b> is a set of components that collect, process, store, and distribute information to support decision-making in an organization."
            },
            {
              "type": "text",
              "value": "<b>Components:</b> Hardware (computers, servers, network equipment), Software (programs, databases, middleware), Data (raw facts), Procedures (rules for operation), People (users, operators, developers, managers)."
            },
            {
              "type": "text",
              "value": "<b>Data vs Information:</b> Data is raw, unprocessed facts (\"25\", \"Male\", \"Buea\"). Information is processed data with meaning and context (\"The average age of patients in Buea is 25\")."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Information Systems",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Information Systems",
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
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Information ≠ Data. Data is raw; information is processed data with meaning",
            "Know the 5 components of an IS: Hardware, Software, Data, Procedures, People"
          ]
        },
        {
          "id": "is-types",
          "title": "Types of Information Systems",
          "content": [
            {
              "type": "text",
              "value": "Different levels of an organization need different types of information systems:"
            },
            {
              "type": "text",
              "value": "<b>TPS (Transaction Processing System):</b> Handles daily business transactions — sales, payments, inventory updates. Used by operational staff. Examples: POS systems, billing systems, order processing."
            },
            {
              "type": "text",
              "value": "<b>MIS (Management Information System):</b> Produces summarized reports for middle management. Answers: \"What happened?\" Example: monthly sales summary showing which products sold best."
            },
            {
              "type": "text",
              "value": "<b>DSS (Decision Support System):</b> Supports semi-structured decisions using analytical models. Answers: \"What if?\" Example: simulation showing how changing prices would affect profit."
            },
            {
              "type": "text",
              "value": "<b>EIS (Executive Information System):</b> Provides strategic data to top executives. Answers: \"Where are we heading?\" Example: dashboard showing market share trends, competitor analysis."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q2"
                },
                {
                  "year": "2022",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Information Systems",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Information Systems",
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
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "TPS processes structured data about daily operations; EIS provides strategic data for top-level decisions",
            "Know which system supports which management level: TPS=operational, MIS/DSS=tactical, EIS=strategic"
          ]
        },
        {
          "id": "e-commerce",
          "title": "E-Commerce & Digital Business",
          "content": [
            {
              "type": "text",
              "value": "<b>E-Commerce</b> is buying and selling goods/services over the Internet. Major models:"
            },
            {
              "type": "text",
              "value": "<b>B2C (Business to Consumer):</b> Businesses selling to individual consumers. Example: Amazon.com, Jumia. The most familiar e-commerce model."
            },
            {
              "type": "text",
              "value": "<b>B2B (Business to Business):</b> Businesses selling to other businesses. Example: Alibaba, bulk suppliers. Larger transaction values than B2C."
            },
            {
              "type": "text",
              "value": "<b>C2C (Consumer to Consumer):</b> Consumers selling to other consumers. Example: eBay, Etsy, Facebook Marketplace."
            },
            {
              "type": "text",
              "value": "<b>G2C (Government to Citizen):</b> Government services online. Example: tax filing, license renewal, passport applications."
            },
            {
              "type": "text",
              "value": "<b>Benefits:</b> 24/7 availability, global reach, lower costs, personalization, faster transactions. <b>Challenges:</b> Security (hacking, fraud), trust, logistics (delivery), legal issues (regulations across countries)."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Information System",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Information Systems",
                  "section": "Section A: System Architecture",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Information Systems",
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
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Know the difference between B2B, B2C, C2C, G2C",
            "E-commerce challenges: security, trust, logistics, legal issues"
          ]
        }
      ]
    },
    {
      "id": "mobile-programming",
      "title": "Mobile Programming",
      "icon": "📱",
      "chapters": [
        {
          "id": "mobile-basics",
          "title": "Mobile App Development Basics",
          "content": [
            {
              "type": "text",
              "value": "Mobile apps can be built using three main approaches:"
            },
            {
              "type": "text",
              "value": "<b>Native:</b> Platform-specific languages — Android uses Java/Kotlin, iOS uses Swift/Objective-C. Best performance, full access to device features (camera, GPS, sensors)."
            },
            {
              "type": "text",
              "value": "<b>Hybrid:</b> Web technologies (HTML, CSS, JS) wrapped in a native container. Cross-platform but may lack native performance. Examples: Cordova, PhoneGap."
            },
            {
              "type": "text",
              "value": "<b>Cross-platform:</b> Single codebase compiled to native code. Examples: React Native (JavaScript), Flutter (Dart), Xamarin (C#). Near-native performance."
            },
            {
              "type": "text",
              "value": "<b>Android App Components:</b> Activity (a screen with UI), Service (background task), Broadcast Receiver (responds to system events like incoming SMS), Content Provider (shares data between apps), Intent (message for communication between components)."
            },
            {
              "type": "text",
              "value": "<b>Activity Lifecycle:</b> onCreate() → onStart() → onResume() → onPause() → onStop() → onDestroy(). Understanding which methods are called when the user rotates the phone or receives a call is important."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "System Analysis & Design",
                  "section": "Mobile Programming",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "Activity lifecycle is frequently tested — memorize the callback order",
            "Intents are used for navigation between activities and passing data"
          ]
        },
        {
          "id": "android-ui",
          "title": "Android UI & Layouts",
          "content": [
            {
              "type": "text",
              "value": "Android UIs are defined in XML layout files. The UI is built from View objects (buttons, text fields, images) arranged inside ViewGroups (layouts)."
            },
            {
              "type": "code",
              "lang": "markup",
              "value": "<!-- LinearLayout: arranges children in a single direction -->\n<LinearLayout\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\"\n    android:orientation=\"vertical\"\n    android:padding=\"16dp\">\n\n    <TextView\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Welcome\"\n        android:textSize=\"24sp\" />\n\n    <Button\n        android:id=\"@+id/btnSubmit\"\n        android:layout_width=\"wrap_content\"\n        android:layout_height=\"wrap_content\"\n        android:text=\"Submit\" />\n</LinearLayout>"
            },
            {
              "type": "text",
              "value": "<b>Layout Types:</b> LinearLayout (row or column), RelativeLayout (positions relative to each other), ConstraintLayout (flexible, flat hierarchy — recommended for complex UIs), FrameLayout (stacks views), TableLayout (grid of rows and columns)."
            },
            {
              "type": "text",
              "value": "<b>Units:</b> dp (density-independent pixels) for sizes, sp (scale-independent pixels) for fonts. match_parent fills the container; wrap_content fits the content."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "System Analysis & Design",
                  "section": "Mobile Programming",
                  "qid": "Q2"
                },
                {
                  "year": "2024",
                  "paper": "Computer Technology",
                  "section": "Section A: I. MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "dp for sizes, sp for fonts (both scale with screen density)",
            "match_parent = fill container; wrap_content = fit content size"
          ]
        }
      ]
    },
    {
      "id": "discrete-mathematics",
      "title": "Discrete Mathematics",
      "icon": "⨀",
      "chapters": [
        {
          "id": "sets-logic",
          "title": "Set Theory & Logic",
          "content": [
            {
              "type": "text",
              "value": "A <b>set</b> is a collection of distinct objects (elements). Set theory is the foundation of many areas of computer science."
            },
            {
              "type": "text",
              "value": "<b>Set Operations:</b> Union (A ∪ B = all elements in A OR B), Intersection (A ∩ B = elements in both A AND B), Difference (A - B = elements in A but not B), Complement (A' = everything not in A), Cartesian Product (A × B = all ordered pairs (a,b))."
            },
            {
              "type": "text",
              "value": "<b>De Morgan's Laws for Sets:</b> (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'. Same pattern as in logic."
            },
            {
              "type": "text",
              "value": "<b>Logical Connectives:</b> ¬p (negation = not p), p ∧ q (conjunction = p AND q), p ∨ q (disjunction = p OR q), p → q (implication = if p then q), p ↔ q (biconditional = p if and only if q). Truth tables evaluate expressions for all possible combinations."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A: Statistics",
                  "qid": "Q1"
                },
                {
                  "year": "2021",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Discrete Mathematics",
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
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "De Morgan's laws: complement of union = intersection of complements, complement of intersection = union of complements",
            "Truth tables are the standard way to evaluate logical expressions"
          ]
        },
        {
          "id": "relations-graphs",
          "title": "Relations & Graph Theory",
          "content": [
            {
              "type": "text",
              "value": "A <b>relation</b> links elements of one set to another. Properties: Reflexive (aRa for all a — every element relates to itself), Symmetric (aRb implies bRa — if A relates to B, B relates to A), Transitive (aRb and bRc implies aRc — chain of relations implies direct relation). An <b>equivalence relation</b> has all three properties."
            },
            {
              "type": "text",
              "value": "<b>Graph Theory:</b> A graph has vertices (nodes) connected by edges. Types: Directed (edges have direction), Undirected (edges are bidirectional), Weighted (edges have costs)."
            },
            {
              "type": "text",
              "value": "<b>Tree:</b> A connected graph with no cycles. A tree with n vertices has exactly n-1 edges."
            },
            {
              "type": "text",
              "value": "<b>Complete Graph (K_n):</b> Every vertex connects to every other vertex. K_n has n(n-1)/2 edges."
            },
            {
              "type": "text",
              "value": "<b>Eulerian Circuit:</b> A path that visits every edge exactly once and returns to the start. Exists iff all vertices have even degree. This is the original \"Seven Bridges of Königsberg\" problem solved by Euler."
            },
            {
              "type": "related",
              "value": [
                {
                  "year": "2021",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2020",
                  "paper": "Mathematics",
                  "section": "Section A: Statistics",
                  "qid": "Q1"
                },
                {
                  "year": "2022",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2024",
                  "paper": "Discrete Mathematics",
                  "section": "Section A: MCQs",
                  "qid": "Q1"
                },
                {
                  "year": "2025",
                  "paper": "Discrete Mathematics",
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
                  "year": "2023",
                  "paper": "Computer Technology",
                  "section": "Section A: Multiple Choice Questions",
                  "qid": "Q1"
                }
              ]
            }
          ],
          "examTips": [
            "A graph has an Eulerian circuit iff all vertices have even degree",
            "In a tree, number of edges = vertices - 1",
            "Equivalence relation = reflexive + symmetric + transitive"
          ]
        }
      ]
    }
  ]
};
