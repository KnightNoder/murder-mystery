export default  {
    id: 10,
    title: "The Co-working Space Startup Murder",
    description:
      "Arjun Kapoor, founder of 'WorkHub' co-working space in Bangalore, was found dead from electric shock in the building's server room during a late-night investor meeting preparation. The electrical panel was rigged to electrocute anyone who touched the main switch. Multiple startup founders and employees were working late in the building.",
    clues: [
      "Arjun died from electrocution around 11:15 PM while checking server issues before investor presentation",
      "Main electrical panel was professionally rigged with live wires to create lethal trap",
      "His laptop revealed evidence of 'investment fraud' and fake startup valuations",
      "Recent discovery of ₹25 lakh missing from co-working space member deposits",
      "Server room access logs show 5 people entered that evening using different keycards",
      "Building's backup power system was manually disabled from basement control room",
      "Security cameras were hacked and showed loop footage during murder time",
    ],
    suspects: [
      {
        id: 1,
        name: "Priya Sharma",
        age: 32,
        role: "Tech Startup Founder & Server Expert",
        details:
          "Runs AI startup from the co-working space and has technical knowledge of electrical systems. Recently discovered by Arjun to be using WorkHub's servers for cryptocurrency mining without permission.",
        motive:
          "Arjun was terminating her membership and filing charges for unauthorized server usage",
        alibi:
          "Claims she was coding late night project in her dedicated workspace",
        evidence:
          "Code repository shows no commits during murder time, and she has electrical engineering background",
      },
      {
        id: 2,
        name: "Rohit Verma",
        age: 35,
        role: "Facilities Manager & Electrical Supervisor",
        details:
          "Manages building infrastructure and electrical systems. Recently caught by Arjun embezzling maintenance funds and overcharging for electrical repair work.",
        motive:
          "Arjun was filing embezzlement charges and threatening to destroy his facilities management career",
        alibi:
          "Says he was conducting routine electrical maintenance in different floors",
        evidence:
          "Maintenance logs show no scheduled work, and he has expert knowledge of electrical panel rigging",
      },
      {
        id: 3,
        name: "Dr. Anjali Gupta",
        age: 28,
        role: "FinTech Startup Founder & Investment Fraudster",
        details:
          "Runs financial technology startup and recently discovered by Arjun to be running fake investment schemes using WorkHub's prestigious address to fool investors.",
        motive:
          "Arjun was exposing her investment fraud to authorities, leading to arrest and startup closure",
        alibi:
          "Claims she was preparing pitch deck for next day's investor meeting",
        evidence:
          "No presentation files were created during murder time period",
      },
      {
        id: 4,
        name: "Kiran Kumar",
        age: 29,
        role: "IT Support Manager & System Hacker",
        details:
          "Manages IT infrastructure and has access to all building systems. Recently caught by Arjun selling member data and confidential startup information to competing companies.",
        motive:
          "Arjun was filing cyber crime case for data theft, destroying his IT career",
        alibi:
          "Claims he was fixing network issues reported by multiple startups",
        evidence:
          "Network logs show no reported issues, and he could hack security cameras to create loop footage",
      },
      {
        id: 5,
        name: "Sunita Malhotra",
        age: 33,
        role: "Business Consultant & Member Deposit Thief",
        details:
          "Provides business consulting to startups and handles member onboarding. Recently discovered by Arjun to be stealing security deposits from new members and creating fake receipt records.",
        motive:
          "Arjun was exposing her theft of ₹25 lakh in member deposits, leading to criminal charges",
        alibi:
          "Says she was consulting with late-working startup founders about business strategy",
        evidence:
          "No consultation sessions were logged in her appointment system",
      },
      {
        id: 6,
        name: "Vikash Singh",
        age: 27,
        role: "Food Delivery Startup Founder & Competitor",
        details:
          "Runs food delivery startup and recently lost major investor funding when Arjun exposed his fake user growth numbers and inflated revenue reports.",
        motive:
          "Arjun's exposure destroyed his startup funding and reputation in investor community",
        alibi:
          "Claims he was analyzing competitor data and preparing growth strategy",
        evidence:
          "No analysis files were created, and his computer was not used during murder time",
      },
      {
        id: 7,
        name: "Kavya Reddy",
        age: 26,
        role: "EdTech Startup Founder & Intellectual Property Thief",
        details:
          "Runs educational technology startup and recently caught by Arjun stealing code and business ideas from other startups in the co-working space.",
        motive:
          "Arjun was filing intellectual property theft case, destroying her startup and career",
        alibi:
          "Claims she was developing new features for her education platform",
        evidence:
          "Development environment shows no coding activity during murder time window",
      },
      {
        id: 8,
        name: "Rajesh Agarwal",
        age: 38,
        role: "Venture Capitalist & Fraudulent Investor",
        details:
          "Represents investment firm and recently discovered by Arjun to be running fake due diligence reports and stealing startup intellectual property for his own ventures.",
        motive:
          "Arjun was exposing his investment fraud to other VCs and startup community",
        alibi:
          "Says he was reviewing investment portfolios and startup evaluations",
        evidence: "No portfolio reviews were documented during murder time",
      },
      {
        id: 9,
        name: "Deepika Joshi",
        age: 30,
        role: "Accountant & Financial Fraudster",
        details:
          "Handles accounting for multiple startups in WorkHub and recently caught by Arjun manipulating financial records to help startups show fake profitability to investors.",
        motive:
          "Arjun was reporting her financial fraud to chartered accountancy board, ending her career",
        alibi:
          "Claims she was preparing financial statements for multiple startup clients",
        evidence:
          "No financial documents were created during murder time period",
      },
    ],
    killer: 2,
    solution:
      "Rohit Verma killed Arjun. As facilities manager, he had expert knowledge to rig the electrical panel, could disable backup power systems, faced embezzlement charges that would destroy his career, and his maintenance alibi was false as no work was scheduled.",
  }