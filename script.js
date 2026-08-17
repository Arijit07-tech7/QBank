/* =========================================================
   QBANK — ACADEMIC ARCHIVE
   PURE FRONTEND PDF ARCHIVE

   NO LOGIN
   NO SIGNUP
   NO SUPABASE
   NO AUTHENTICATION
   NO BACKEND

   FLOW:

   Department
        ↓
   Year
        ↓
   Semester
        ↓
   Subject
        ↓
   PDF
        ↓
   View / Download

   DEPARTMENTS:
   IT
   CSE

   IMPORTANT:
   IT DATA IS PRESERVED.
   CSE IS ADDED SEPARATELY.
========================================================= */


/* =========================================================
   IT CURRICULUM
   =========================================================
   EXISTING IT CURRICULUM
   KEPT AS PROVIDED
========================================================= */

const IT_CURRICULUM = {

    "1st Year": {

        "Semester 1": [

            {
                code: "CS101",
                name: "Introduction to Programming and Problem Solving",
                type: "Theory"
            },

            {
                code: "CS102",
                name: "Introduction to Artificial Intelligence",
                type: "Theory"
            },

            {
                code: "CH101",
                name: "Engineering Chemistry",
                type: "Theory"
            },

            {
                code: "M101",
                name: "Engineering Mathematics-I",
                type: "Theory"
            },

            {
                code: "HU105",
                name: "Constitution of India & Professional Ethics",
                type: "Theory"
            },

            {
                code: "HU103",
                name: "Design Thinking & Innovation",
                type: "Theory"
            },

            {
                code: "CS191",
                name: "Introduction to Programming and Problem Solving",
                type: "Practical"
            },

            {
                code: "CS192",
                name: "Artificial Intelligence Lab",
                type: "Practical"
            },

            {
                code: "CH191",
                name: "Engineering Chemistry Lab",
                type: "Practical"
            },

            {
                code: "ME193",
                name: "IDEA LAB Workshop",
                type: "Practical"
            },


        ],


        "Semester 2": [

            {
                code: "CS201",
                name: "Data Structure and Algorithms",
                type: "Theory"
            },

            {
                code: "IT202",
                name: "Artificial Intelligence with Python",
                type: "Theory"
            },

            {
                code: "PH201",
                name: "Engineering Physics",
                type: "Theory"
            },

            {
                code: "M201",
                name: "Engineering Mathematics II",
                type: "Theory"
            },

            {
                code: "HU201",
                name: "Environmental Science",
                type: "Theory"
            },

            {
                code: "HU202",
                name: "Indian Knowledge System",
                type: "Theory"
            },

            {
                code: "CS291",
                name: "Data Structure and Algorithms Lab",
                type: "Practical"
            },

            {
                code: "IT292",
                name: "Artificial Intelligence with Python Lab",
                type: "Practical"
            },

            {
                code: "PH291",
                name: "Engineering Physics Lab",
                type: "Practical"
            },

            {
                code: "ME294",
                name: "Engineering Graphics & Computer Aided Design Lab",
                type: "Practical"
            },

            {
                code: "HU291",
                name: "Communication & Presentation Skill",
                type: "Practical"
            },

            {
                code: "MC281",
                name: "NSS / Physical Activities / Meditation & Yoga / Photography / Nature Club",
                type: "Mandatory"
            }

        ]

    },


    "2nd Year": {

        "Semester 3": [

            {
                code: "IT301",
                name: "Computer Organization and Architecture",
                type: "Theory"
            },

            {
                code: "IT302",
                name: "Formal Language and Automata Theory",
                type: "Theory"
            },

            {
                code: "IT303",
                name: "Software Engineering",
                type: "Theory"
            },

            {
                code: "EC(IT)301",
                name: "Analog and Digital Electronics",
                type: "Theory"
            },

            {
                code: "M(IT)301",
                name: "Discrete Mathematics",
                type: "Theory"
            },

            {
                code: "IT391",
                name: "Computer Organization and Architecture",
                type: "Practical"
            },

            {
                code: "IT392",
                name: "Python Programming Lab",
                type: "Practical"
            },

            {
                code: "IT393",
                name: "Software Engineering",
                type: "Practical"
            },

            {
                code: "EC(IT)391",
                name: "Analog and Digital Electronics",
                type: "Practical"
            },

            {
                code: "HU(IT)391",
                name: "Soft Skill and Aptitude",
                type: "Practical"
            }

        ],


        "Semester 4": [

            {
                code: "IT401",
                name: "Operating System",
                type: "Theory"
            },

            {
                code: "IT402",
                name: "Advanced Artificial Intelligence",
                type: "Theory"
            },

            {
                code: "IT403",
                name: "Design Analysis & Algorithm",
                type: "Theory"
            },

            {
                code: "M(IT)401",
                name: "Probability & Statistics",
                type: "Theory"
            },

            {
                code: "EC(IT)401",
                name: "Microprocessor & Microcontroller",
                type: "Theory"
            },

            {
                code: "IT491",
                name: "Operating System Lab",
                type: "Practical"
            },

            {
                code: "IT492",
                name: "Advanced Artificial Intelligence Lab",
                type: "Practical"
            },

            {
                code: "IT493",
                name: "Design Analysis & Algorithm Lab",
                type: "Practical"
            },

            {
                code: "IT494",
                name: "R-Programming Lab",
                type: "Practical"
            },

            {
                code: "EC(IT)491",
                name: "Microprocessor & Microcontroller Lab",
                type: "Practical"
            },

            {
                code: "HU(IT)491",
                name: "IT Workshop Lab (SciLab / MATLAB / C++)",
                type: "Practical"
            }

        ]

    },


    "3rd Year": {

        "Semester 5": [

            {
                code: "IT501",
                name: "Database Management System",
                type: "Theory"
            },

            {
                code: "IT502",
                name: "Computer Networking",
                type: "Theory"
            },

            {
                code: "IT503",
                name: "Machine Learning",
                type: "Theory"
            },

            {
                code: "IT504",
                name: "Full Stack Web Development",
                type: "Theory"
            },

            {
                code: "IT501A",
                name: "Operation Research & Optimization Technique",
                type: "Elective"
            },

            {
                code: "IT501B",
                name: "Ecommerce & ERP",
                type: "Elective"
            },

            {
                code: "IT501C",
                name: "Compiler Design",
                type: "Elective"
            },

            {
                code: "IT501D",
                name: "Distributed System",
                type: "Elective"
            },

            {
                code: "HU(IT)501",
                name: "Economics for Engineers",
                type: "Theory"
            },

            {
                code: "IT591",
                name: "Database Management System Lab",
                type: "Practical"
            },

            {
                code: "IT592",
                name: "Computer Networking Lab",
                type: "Practical"
            },

            {
                code: "IT593",
                name: "Machine Learning Lab",
                type: "Practical"
            },

            {
                code: "IT594",
                name: "Full Stack Web Development Lab",
                type: "Practical"
            },

            {
                code: "IT581",
                name: "Project-1",
                type: "Project"
            }

        ],


        "Semester 6": [

            {
                code: "IT601",
                name: "Cloud Computing",
                type: "Theory"
            },

            {
                code: "IT602",
                name: "Internet of Things",
                type: "Theory"
            },

            {
                code: "IT603",
                name: "Cryptography and Network Security",
                type: "Theory"
            },

            {
                code: "IT604",
                name: "Data Warehousing and Data Mining",
                type: "Theory"
            },

            {
                code: "HU(IT)601",
                name: "Principles of Management",
                type: "Theory"
            },

            {
                code: "IT605A",
                name: "Digital Image Processing",
                type: "Elective"
            },

            {
                code: "IT605B",
                name: "Mobile Communication",
                type: "Elective"
            },

            {
                code: "IT605C",
                name: "Internet Technology",
                type: "Elective"
            },

            {
                code: "IT605D",
                name: "Computer Graphics and Multimedia",
                type: "Elective"
            },

            {
                code: "IT691",
                name: "Cloud Computing Lab",
                type: "Practical"
            },

            {
                code: "IT692",
                name: "Internet of Things Lab",
                type: "Practical"
            },

            {
                code: "IT693",
                name: "Cryptography and Network Security Lab",
                type: "Practical"
            },

            {
                code: "IT681",
                name: "Industrial Training and Project",
                type: "Internship"
            }

        ]

    },


    "4th Year": {

        "Semester 7": [

            {
                code: "IT701",
                name: "Deep Learning",
                type: "Theory"
            },

            {
                code: "IT702A",
                name: "Block Chain Technology",
                type: "Elective"
            },

            {
                code: "IT702B",
                name: "BigData Analytics",
                type: "Elective"
            },

            {
                code: "IT702C",
                name: "Digital Forensics",
                type: "Elective"
            },

            {
                code: "IT702D",
                name: "Soft Computing",
                type: "Elective"
            },

            {
                code: "IT703A",
                name: "Quantum Computing",
                type: "Elective"
            },

            {
                code: "IT703B",
                name: "Pattern Recognition",
                type: "Elective"
            },

            {
                code: "IT703C",
                name: "Bioinformatics",
                type: "Elective"
            },

            {
                code: "IT703D",
                name: "Cyber Law and IPR",
                type: "Elective"
            },

            {
                code: "IT791",
                name: "Deep Learning",
                type: "Practical"
            },

            {
                code: "IT781",
                name: "Internship (Min. 1 Month)",
                type: "Internship"
            },

            {
                code: "PR792",
                name: "Rapid Prototyping Lab",
                type: "Practical"
            },

            {
                code: "IT782",
                name: "Minor Project",
                type: "Project"
            }

        ],


        "Semester 8": [

            {
                code: "IT881",
                name: "Internship (Min. 1 Month)",
                type: "Internship"
            },

            {
                code: "IT882",
                name: "Major Project",
                type: "Project"
            }

        ]

    }

};


/* =========================================================
   CSE CURRICULUM
   R-25 CURRICULUM
   B.TECH COMPUTER SCIENCE & ENGINEERING
   Narula Institute of Technology
   Effective from 2025-26 Admission Batch

   SOURCE DATA PROVIDED BY USER
========================================================= */

const CSE_CURRICULUM = {

    "1st Year": {

        "Semester 1": [

            {
                code: "CS101",
                name: "Introduction to Programming and Problem Solving (CSE & Allied)",
                type: "Theory"
            },

            {
                code: "PH101",
                name: "Engineering Physics",
                type: "Theory"
            },

            {
                code: "M101",
                name: "Engineering Mathematics-I",
                type: "Theory"
            },

            {
                code: "HU101",
                name: "Environmental Science",
                type: "Theory"
            },

            {
                code: "HU102",
                name: "Indian Knowledge System",
                type: "Theory"
            },

            {
                code: "CS191",
                name: "Introduction to Programming and Problem-Solving Lab (CSE & Allied)",
                type: "Practical"
            },

            {
                code: "PH191",
                name: "Engineering Physics Lab",
                type: "Practical"
            },

            {
                code: "ME194",
                name: "Engineering Graphics & Computer Aided Design Lab",
                type: "Practical"
            },

            {
                code: "HU191",
                name: "Communication & Presentation Skill",
                type: "Practical"
            },


        ],


        "Semester 2": [

            {
                code: "CS201",
                name: "Data Structure & Algorithms",
                type: "Theory"
            },

            {
                code: "CS202",
                name: "Introduction to Artificial Intelligence",
                type: "Theory"
            },

            {
                code: "CS203",
                name: "Digital Logic and Computer Organization",
                type: "Theory"
            },

            {
                code: "CH201",
                name: "Engineering Chemistry",
                type: "Theory"
            },

            {
                code: "M201",
                name: "Engineering Mathematics–II",
                type: "Theory"
            },

            {
                code: "HU202",
                name: "Constitution of India & Professional Ethics",
                type: "Theory"
            },

            {
                code: "HU203",
                name: "Design Thinking & Innovation",
                type: "Theory"
            },

            {
                code: "CS291",
                name: "Data Structure & Algorithms Lab",
                type: "Practical"
            },

            {
                code: "CS292",
                name: "Artificial Intelligence Lab",
                type: "Practical"
            },

            {
                code: "CS293",
                name: "Digital Logic and Computer Organization Lab",
                type: "Practical"
            },

            {
                code: "CH291",
                name: "Engineering Chemistry Lab",
                type: "Practical"
            },

            {
                code: "ME293",
                name: "IDEA LAB Workshop",
                type: "Practical"
            },

            {
                code: "MC281",
                name: "NSS / Physical Activities / Meditation & Yoga / Photography / Nature Club",
                type: "Mandatory"
            }

        ]

    },


    "2nd Year": {

        "Semester 3": [

            {
                code: "CS301",
                name: "Computer Architecture",
                type: "Theory"
            },

            {
                code: "CS302",
                name: "Design and Analysis of Algorithms",
                type: "Theory"
            },

            {
                code: "CS303",
                name: "Operating Systems",
                type: "Theory"
            },

            {
                code: "CS304",
                name: "Advanced Artificial Intelligence",
                type: "Theory"
            },

            {
                code: "EC(CS)301",
                name: "Internet of Things",
                type: "Theory"
            },

            {
                code: "M(CS)301",
                name: "Discrete Mathematics",
                type: "Theory"
            },

            {
                code: "CS391",
                name: "Computer Architecture Lab",
                type: "Practical"
            },

            {
                code: "CS392",
                name: "Design and Analysis of Algorithms Lab",
                type: "Practical"
            },

            {
                code: "CS393",
                name: "Operating Systems Lab",
                type: "Practical"
            },

            {
                code: "CS394",
                name: "Advanced Artificial Intelligence Lab",
                type: "Practical"
            },

            {
                code: "CS395",
                name: "Python Programming Lab",
                type: "Practical"
            },

            {
                code: "EC(CS)391",
                name: "Internet of Things Lab",
                type: "Practical"
            }

        ],


        "Semester 4": [

            {
                code: "CS401",
                name: "Database Management Systems",
                type: "Theory"
            },

            {
                code: "CS402",
                name: "Computer Networks",
                type: "Theory"
            },

            {
                code: "CS403",
                name: "Machine Learning",
                type: "Theory"
            },

            {
                code: "CS404",
                name: "Formal Language and Automata Theory",
                type: "Theory"
            },

            {
                code: "M(CS)401",
                name: "Probability and Statistics",
                type: "Theory"
            },

            {
                code: "CS491",
                name: "Database Management Systems Lab",
                type: "Practical"
            },

            {
                code: "CS492",
                name: "Computer Networks Lab",
                type: "Practical"
            },

            {
                code: "CS493",
                name: "Machine Learning Lab",
                type: "Practical"
            },

            {
                code: "M(CS)491",
                name: "Introduction to R Programming",
                type: "Practical"
            },

            {
                code: "HU(CS)491",
                name: "Soft Skill & Aptitude",
                type: "Practical"
            }

        ]

    },


    "3rd Year": {

        "Semester 5": [

            {
                code: "CS501",
                name: "Software Engineering",
                type: "Theory"
            },

            {
                code: "CS502",
                name: "Object Oriented Programming using Java",
                type: "Theory"
            },

            {
                code: "CS503A",
                name: "Compiler Design",
                type: "Elective"
            },

            {
                code: "CS503B",
                name: "Cryptography and Network Security",
                type: "Elective"
            },

            {
                code: "CS503C",
                name: "Computer Graphics",
                type: "Elective"
            },

            {
                code: "CS503D",
                name: "Data Handling and Visualization",
                type: "Elective"
            },

            {
                code: "CS504",
                name: "Soft Computing",
                type: "Theory"
            },

            {
                code: "HU(CS)501",
                name: "Project Management & Finance",
                type: "Theory"
            },

            {
                code: "CS591",
                name: "Software Engineering Lab",
                type: "Practical"
            },

            {
                code: "CS592",
                name: "Object Oriented Programming using Java Lab",
                type: "Practical"
            },

            {
                code: "CS593A",
                name: "Compiler Design Lab",
                type: "Elective"
            },

            {
                code: "CS593B",
                name: "Cryptography and Network Security Lab",
                type: "Elective"
            },

            {
                code: "CS593C",
                name: "Computer Graphics Lab",
                type: "Elective"
            },

            {
                code: "CS593D",
                name: "Data Handling and Visualization Lab",
                type: "Elective"
            },

            {
                code: "CS594",
                name: "Soft Computing Lab",
                type: "Practical"
            },

            {
                code: "CS582",
                name: "Project-I",
                type: "Project"
            }

        ],


        "Semester 6": [

            {
                code: "CS601",
                name: "Web and Internet Technology",
                type: "Theory"
            },

            {
                code: "CS602",
                name: "Deep Learning",
                type: "Theory"
            },

            {
                code: "CS603A",
                name: "Image Processing",
                type: "Elective"
            },

            {
                code: "CS603B",
                name: "Cloud Computing",
                type: "Elective"
            },

            {
                code: "CS603C",
                name: "Big Data and Data Analytics",
                type: "Elective"
            },

            {
                code: "CS603D",
                name: "Natural Language Processing",
                type: "Elective"
            },

            {
                code: "CS604A",
                name: "Mobile Computing",
                type: "Elective"
            },

            {
                code: "CS604B",
                name: "Human Computer Interaction",
                type: "Elective"
            },

            {
                code: "CS604C",
                name: "E-Commerce and Digital Business Model",
                type: "Elective"
            },

            {
                code: "CS604D",
                name: "Quantum Computing",
                type: "Elective"
            },

            {
                code: "CS605",
                name: "Cyber Law and Ethics",
                type: "Theory"
            },

            {
                code: "CS691",
                name: "Web and Internet Technology Lab",
                type: "Practical"
            },

            {
                code: "CS692",
                name: "Deep Learning Lab",
                type: "Practical"
            },

            {
                code: "CS693A",
                name: "Image Processing Lab",
                type: "Elective"
            },

            {
                code: "CS693B",
                name: "Cloud Computing Lab",
                type: "Elective"
            },

            {
                code: "CS693C",
                name: "Data Analytics Lab",
                type: "Elective"
            },

            {
                code: "CS693D",
                name: "Natural Language Processing Lab",
                type: "Elective"
            },

            {
                code: "CS681",
                name: "Project-II",
                type: "Project"
            }

        ]

    },


    "4th Year": {

        "Semester 7": [

            {
                code: "CS701A",
                name: "Blockchain Technology",
                type: "Elective"
            },

            {
                code: "CS701B",
                name: "Optimization Technique",
                type: "Elective"
            },

            {
                code: "CS701C",
                name: "Bio-informatics",
                type: "Elective"
            },

            {
                code: "CS701D",
                name: "Robotics",
                type: "Elective"
            },

            {
                code: "HU(CS)701",
                name: "Human Resource Development and Organizational Behavior",
                type: "Theory"
            },

            {
                code: "HU702",
                name: "Research Methodology & IPR",
                type: "Theory"
            },

            {
                code: "CS793",
                name: "Project-III",
                type: "Project"
            },

            {
                code: "CS781",
                name: "Internship (Minimum 1 Month)",
                type: "Internship"
            },

            {
                code: "PR792",
                name: "Rapid Prototyping Lab",
                type: "Practical"
            }

        ],


        "Semester 8": [

            {
                code: "CS881",
                name: "Grand Viva",
                type: "Grand Viva"
            },

            {
                code: "CS882",
                name: "Internship / Entrepreneurship",
                type: "Internship"
            }

        ]

    }

};


/* =========================================================
   DEPARTMENT-WISE CURRICULUM
========================================================= */

const CURRICULUM = {

    IT: IT_CURRICULUM,

    CSE: CSE_CURRICULUM

};


/* =========================================================
   IT PDF DATABASE
   EXISTING IT PDF DATA
   KEPT SEPARATE FROM CSE
========================================================= */

const IT_PDF_DATABASE = {

    "M101": [
        {
            year: "2025",
            title: "Engineering Mathematics-I — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/M(IT)101.pdf"
        },
        {
            year: "2024",
            title: "Engineering Mathematics-I — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R23_M(IT)101_188.pdf"
        },
        {
            year: "2023",
            title: "Engineering Mathematics-I — 2023 (1)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/M101.pdf"
        },
        {
            year: "2023",
            title: "Engineering Mathematics-I — 2023 (2)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/M(IT)101_189.pdf"
        },
        {
            year: "2023",
            title: "Engineering Mathematics-I — 2023 (3)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/M(IT)101_IT_SET-2.pdf"
        },
        {
            year: "2022",
            title: "Engineering Mathematics-I — 2022",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/21_ M101.pdf"
        }
    ],

    "CH101": [
        {
            year: "2025",
            title: "Engineering Chemistry — 2025 (1)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/r25_CH101.pdf"
        },
        {
            year: "2025",
            title: "Engineering Chemistry — 2025 (2)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R23_CH(IT)201.pdf"
        },
        {
            year: "2023",
            title: "Engineering Chemistry — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/CH101.pdf"
        },
        {
            year: "2022",
            title: "Engineering Chemistry — 2022",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/21_CH101.pdf"
        }
    ],

    "CS101": [
        {
            year: "2025",
            title: "Introduction to Pogramming and Problem Solving — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R25_CS101.pdf"
        },
        {
            year: "2024",
            title: "Introduction to Pogramming and Problem Solving — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R23_IT101_186.pdf"
        },
        {
            year: "2023",
            title: "Introduction to Pogramming and Problem Solving — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/IT101_189.pdf"
        },
        {
            year: "2018",
            title: "Introduction to Pogramming and Problem Solving — 2018",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/18_CS201.pdf"
        }
    ],

    "CS102": [
        {
            year: "2025",
            title: "Introduction to Artificial Intelligence — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R25_CS102.pdf"
        }
    ],

    "HU103": [
        {
            year: "2025",
            title: "Design Thinking & Innovation — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R25_HU103.pdf"
        }
    ],

    "HU105": [
        {
            year: "2025",
            title: "Constitution of India & Professional Ethics — 2025 (1)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R25_HU105.pdf"
        },
        {
            year: "2025",
            title: "Constitution of India & Professional Ethics — 2025 (2)",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/R23_HU203.pdf"
        },
        {
            year: "2024",
            title: "Constitution of India & Professional Ethics — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-1/HU203.pdf"
        }
    ],

    "CS201": [
        {
            year: "2026",
            title: "Data Structure and Algorithms — 2026",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R25_IT201.pdf"
        },
        {
            year: "2025",
            title: "Data Structure and Algorithms — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R23_IT201.pdf"
        },
        {
            year: "2023",
            title: "Data Structure and Algorithms — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/IT304_14.pdf"
        }
    ],

    "PH201": [
        {
            year: "2026",
            title: "Engineering Physics — 2026",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R25_PH201.pdf"
        },
        {
            year: "2024",
            title: "Engineering Physics — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R23_PH(IT)201.pdf"
        },
        {
            year: "2023",
            title: "Engineering Physics — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/P(IT)101_189.pdf"
        }
    ],

    "M201": [
        {
            year: "2026",
            title: "Engineering Mathematics II — 2026",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R25_M201.pdf"
        },
        {
            year: "2025",
            title: "Engineering Mathematics II — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R23_M(IT)201.pdf"
        },
        {
            year: "2023",
            title: "Engineering Mathematics II — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/M201.pdf"
        }
    ],

    "HU201": [
        {
            year: "2026",
            title: "Environmental Science — 2026",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R25_HU201.pdf"
        },
        {
            year: "2024",
            title: "Environmental Science — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R23_HU104.pdf"
        },
        {
            year: "2023",
            title: "Environmental Science — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/HU104_479.pdf"
        }
    ],

    "HU202": [
        {
            year: "2026",
            title: "Indian Knowledge System — 2026",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/IKS_2026.pdf"
        },
        {
            year: "2024",
            title: "Indian Knowledge System — 2024",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/R23_HU105.pdf"
        },
        {
            year: "2023",
            title: "Indian Knowledge System — 2023",
            examType: "Previous Year Question Paper",
            file: "pdfs/IT/semester-2/HU105_479.pdf"
        }
    ]

};


/* =========================================================
   CSE PDF DATABASE
   =========================================================
   ONLY PDF PROVIDED BY USER IS ADDED.

   More CSE PDFs can be added later without touching IT.
========================================================= */

const CSE_PDF_DATABASE = {

    "CS101": [
        {
            year: "2025",
            title: "Introduction to Programming and Problem Solving — 2025",
            examType: "Previous Year Question Paper",
            file: "pdfs/CSE/semester-1/CS101.pdf"
        }
    ]

};


/* =========================================================
   DEPARTMENT-WISE PDF DATABASE
========================================================= */

const PDF_DATABASE = {

    IT: IT_PDF_DATABASE,

    CSE: CSE_PDF_DATABASE

};


/* =========================================================
   CURRENT SELECTION
========================================================= */

let selectedDepartment = "IT";

let selectedYear = "";

let selectedSemester = "";

let selectedSubject = "";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const splashScreen =
    document.getElementById("splashScreen");

const mainSite =
    document.getElementById("mainSite");

const loadingBar =
    document.getElementById("loadingBar");

const loadingPercent =
    document.getElementById("loadingPercent");

const loadingStatus =
    document.getElementById("loadingStatus");

const explorer =
    document.getElementById("qbankExplorer");

const closeExplorer =
    document.getElementById("closeExplorer");

const semesterStep =
    document.getElementById("semesterStep");

const subjectStep =
    document.getElementById("subjectStep");

const semesterOptions =
    document.getElementById("semesterOptions");

const subjectOptions =
    document.getElementById("subjectOptions");

const paperResults =
    document.getElementById("paperResults");

const resultCount =
    document.getElementById("resultCount");


/* =========================================================
   SAFE DOM CHECK
========================================================= */

function elementExists(element) {

    return element !== null &&
        element !== undefined;

}


/* =========================================================
   SPLASH SCREEN
========================================================= */

let loading = 0;

const loadingInterval = setInterval(() => {

    loading +=
        Math.floor(Math.random() * 8) + 4;


    if (loading >= 100) {

        loading = 100;

        clearInterval(loadingInterval);


        if (elementExists(loadingPercent)) {

            loadingPercent.textContent =
                "100%";

        }


        if (elementExists(loadingBar)) {

            loadingBar.style.width =
                "100%";

        }


        if (elementExists(loadingStatus)) {

            loadingStatus.textContent =
                "Academic archive ready.";

        }


        setTimeout(() => {

            if (elementExists(splashScreen)) {

                splashScreen.classList.add(
                    "hidden"
                );

            }


            if (elementExists(mainSite)) {

                mainSite.classList.add(
                    "visible"
                );

            }

        }, 500);


        return;

    }


    if (elementExists(loadingPercent)) {

        loadingPercent.textContent =
            `${loading}%`;

    }


    if (elementExists(loadingBar)) {

        loadingBar.style.width =
            `${loading}%`;

    }


    if (elementExists(loadingStatus)) {

        if (loading > 75) {

            loadingStatus.textContent =
                "Preparing academic archive...";

        }

        else if (loading > 45) {

            loadingStatus.textContent =
                "Loading departments...";

        }

        else {

            loadingStatus.textContent =
                "Organising question bank...";

        }

    }

}, 100);


/* =========================================================
   DEPARTMENT BUTTONS
========================================================= */

document
    .querySelectorAll(".department-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const department =
                    card.dataset.department ||
                    card.querySelector(
                        ".department-code"
                    )?.textContent.trim();


                /*
                   IT and CSE are active.
                   Other departments remain coming soon.
                */

                if (
                    department !== "IT" &&
                    department !== "CSE"
                ) {

                    showToast(
                        `${department} question bank is coming soon.`
                    );

                    return;

                }


                /*
                   IMPORTANT:
                   DO NOT force department to IT.
                   This fixes the previous CSE → IT bug.
                */

                selectedDepartment =
                    department;


                openExplorer();

            }
        );

    });


/* =========================================================
   OPEN EXPLORER
========================================================= */

function openExplorer() {

    if (!elementExists(explorer)) {

        showToast(
            "Question bank explorer is not available."
        );

        return;

    }


    explorer.classList.add("active");


    selectedYear = "";

    selectedSemester = "";

    selectedSubject = "";


    if (elementExists(semesterStep)) {

        semesterStep.classList.add(
            "disabled-step"
        );

    }


    if (elementExists(subjectStep)) {

        subjectStep.classList.add(
            "disabled-step"
        );

    }


    if (elementExists(semesterOptions)) {

        semesterOptions.innerHTML = "";

    }


    if (elementExists(subjectOptions)) {

        subjectOptions.innerHTML = "";

    }


    if (elementExists(paperResults)) {

        paperResults.innerHTML = `

            <div class="empty-results">

                <div class="empty-icon">
                    PDF
                </div>

                <h3>
                    Choose a subject
                </h3>

                <p>
                    Select Year, Semester and Subject
                    to view available question papers.
                </p>

            </div>

        `;

    }


    if (elementExists(resultCount)) {

        resultCount.textContent =
            "0 Papers";

    }


    setTimeout(() => {

        explorer.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 100);

}


/* =========================================================
   CLOSE EXPLORER
========================================================= */

if (elementExists(closeExplorer)) {

    closeExplorer.addEventListener(
        "click",
        () => {

            explorer.classList.remove(
                "active"
            );


            const departments =
                document.getElementById(
                    "departments"
                );


            if (elementExists(departments)) {

                departments.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}


/* =========================================================
   YEAR SELECTION
========================================================= */

document
    .querySelectorAll("[data-year]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedYear =
                    button.dataset.year;


                document
                    .querySelectorAll(
                        "[data-year]"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    });


                button.classList.add(
                    "selected"
                );


                loadSemesters();

            }
        );

    });


/* =========================================================
   LOAD SEMESTERS
   DEPARTMENT AWARE
========================================================= */

function loadSemesters() {

    selectedSemester = "";

    selectedSubject = "";


    if (elementExists(subjectOptions)) {

        subjectOptions.innerHTML = "";

    }


    if (elementExists(subjectStep)) {

        subjectStep.classList.add(
            "disabled-step"
        );

    }


    if (elementExists(semesterStep)) {

        semesterStep.classList.remove(
            "disabled-step"
        );

    }


    /*
       Get the correct curriculum based on
       selected department.
    */

    const departmentCurriculum =
        CURRICULUM[selectedDepartment];


    if (
        !departmentCurriculum ||
        !departmentCurriculum[selectedYear]
    ) {

        showToast(
            `No academic data available for ${selectedDepartment} in ${selectedYear}.`
        );

        return;

    }


    const semesters =
        Object.keys(
            departmentCurriculum[selectedYear]
        );


    if (elementExists(semesterOptions)) {

        semesterOptions.innerHTML = "";

    }


    semesters.forEach(
        semester => {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.className =
                "filter-option semester-option";


            button.dataset.semester =
                semester;


            const subjectCount =
                departmentCurriculum[selectedYear]
                [semester]
                    .length;


            button.innerHTML = `

                <strong>
                    ${escapeHTML(semester)}
                </strong>

                <small>
                    ${subjectCount} subjects
                </small>

            `;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".semester-option"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    selectedSemester =
                        semester;


                    loadSubjects();

                }
            );


            /*
               Keyboard accessibility for
               dynamically created buttons.
            */

            button.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        button.click();

                    }

                }
            );


            semesterOptions.appendChild(
                button
            );

        }
    );


    semesterStep.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   LOAD SUBJECTS
   DEPARTMENT AWARE
========================================================= */

function loadSubjects() {

    selectedSubject = "";


    if (elementExists(subjectStep)) {

        subjectStep.classList.remove(
            "disabled-step"
        );

    }


    if (elementExists(subjectOptions)) {

        subjectOptions.innerHTML = "";

    }


    /*
       Get selected department curriculum.
    */

    const departmentCurriculum =
        CURRICULUM[selectedDepartment];


    const subjects =
        departmentCurriculum
            ?. [selectedYear]
            ?. [selectedSemester];


    if (!subjects) {

        showToast(
            "No subjects found."
        );

        return;

    }


    subjects.forEach(
        subject => {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.className =
                "subject-selector";


            button.dataset.code =
                subject.code;


            button.innerHTML = `

                <div class="subject-code">
                    ${escapeHTML(subject.code)}
                </div>

                <div class="subject-selector-info">

                    <strong>
                        ${escapeHTML(subject.name)}
                    </strong>

                    <span>
                        ${escapeHTML(subject.type)}
                    </span>

                </div>

                <div class="subject-arrow">
                    →
                </div>

            `;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".subject-selector"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    selectedSubject =
                        subject.code;


                    showPapers(subject);

                }
            );


            /*
               Keyboard accessibility.
            */

            button.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        button.click();

                    }

                }
            );


            subjectOptions.appendChild(
                button
            );

        }
    );


    subjectStep.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   SHOW PAPERS
   DEPARTMENT + SUBJECT CODE AWARE
========================================================= */

function showPapers(subject) {

    /*
       IMPORTANT:
       IT → IT_PDF_DATABASE
       CSE → CSE_PDF_DATABASE

       Therefore IT CS101 and CSE CS101
       can coexist safely.
    */

    const departmentPDFDatabase =
        PDF_DATABASE[selectedDepartment] || {};


    const papers =
        departmentPDFDatabase[
            subject.code
        ] || [];


    if (elementExists(resultCount)) {

        resultCount.textContent =
            `${papers.length} ${papers.length === 1
                ? "Paper"
                : "Papers"
            }`;

    }


    /* -----------------------------------------------------
       NO PDF
    ----------------------------------------------------- */

    if (!papers.length) {

        if (elementExists(paperResults)) {

            paperResults.innerHTML = `

                <div class="no-papers">

                    <div class="no-papers-icon">
                        PDF
                    </div>

                    <h3>
                        No question paper uploaded yet
                    </h3>

                    <p>

                        No PDF is currently available
                        for

                        <strong>
                            ${escapeHTML(
                subject.name
            )}
                        </strong>.

                    </p>

                    <div class="paper-path">

                        ${escapeHTML(
                selectedDepartment
            )}

                        <span>→</span>

                        ${escapeHTML(
                selectedYear
            )}

                        <span>→</span>

                        ${escapeHTML(
                selectedSemester
            )}

                        <span>→</span>

                        ${escapeHTML(
                subject.code
            )}

                    </div>

                </div>

            `;

        }


        scrollToResults();

        return;

    }


    /* -----------------------------------------------------
       PDF EXISTS
    ----------------------------------------------------- */

    if (elementExists(paperResults)) {

        paperResults.innerHTML = "";

    }


    papers.forEach(
        paper => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "paper-card";


            /*
               encodeURI preserves the PDF path
               while safely handling spaces etc.
            */

            const safeFile =
                encodeURI(
                    paper.file
                );


            card.innerHTML = `

                <div class="paper-icon">
                    PDF
                </div>


                <div class="paper-info">

                    <div class="paper-meta">

                        <span>
                            ${escapeHTML(
                paper.year
            )}
                        </span>

                        <span>
                            ${escapeHTML(
                paper.examType ||
                "PYQ"
            )}
                        </span>

                    </div>


                    <h3>
                        ${escapeHTML(
                paper.title
            )}
                    </h3>


                    <p>

                        ${escapeHTML(
                selectedDepartment
            )}

                        •

                        ${escapeHTML(
                subject.code
            )}

                        •

                        ${escapeHTML(
                subject.name
            )}

                    </p>

                </div>


                <div class="paper-actions">

                    <a
                        href="${safeFile}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="view-pdf-button">

                        View PDF
                        ↗

                    </a>


                    <a
                        href="${safeFile}"
                        download
                        class="download-pdf-button">

                        Download
                        ↓

                    </a>

                </div>

            `;


            paperResults.appendChild(
                card
            );

        }
    );


    scrollToResults();

}


/* =========================================================
   SCROLL TO RESULTS
========================================================= */

function scrollToResults() {

    const resultsSection =
        document.getElementById(
            "resultsSection"
        );


    if (
        elementExists(resultsSection)
    ) {

        setTimeout(() => {

            resultsSection.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 100);

    }

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const existing =
        document.querySelector(
            ".qbank-toast"
        );


    if (existing) {

        existing.remove();

    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "qbank-toast";


    toast.innerHTML = `

        <span>!</span>

        ${escapeHTML(message)}

    `;


    document.body.appendChild(
        toast
    );


    setTimeout(() => {

        toast.classList.add(
            "show"
        );

    }, 20);


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );


        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}


/* =========================================================
   NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }
            );

        }
    );


/* =========================================================
   KEYBOARD ACCESSIBILITY
   FOR EXISTING STATIC ELEMENTS
========================================================= */

document
    .querySelectorAll(
        ".filter-option, .subject-selector"
    )
    .forEach(
        option => {

            option.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        option.click();

                    }

                }
            );

        }
    );


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (
                elementExists(explorer) &&
                explorer.classList.contains(
                    "active"
                )
            ) {

                explorer.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* =========================================================
   DEBUG INFORMATION
========================================================= */

console.log(
    "%cQBANK Academic Archive",
    "font-size:18px;font-weight:bold;"
);

console.log(
    "Available Departments:",
    Object.keys(CURRICULUM)
);

console.log(
    "Current Department:",
    selectedDepartment
);

console.log(
    "IT Curriculum:",
    IT_CURRICULUM
);

console.log(
    "CSE Curriculum:",
    CSE_CURRICULUM
);

console.log(
    "PDF Database:",
    PDF_DATABASE
);


/* =========================================================
   END
========================================================= */