export default {
    id: 4,
    title: "The Corporate Office Elevator Death",
    description:
      "Amit Kapoor, HR Director of TechnoSoft Solutions in Bangalore, was found dead in the office elevator shaft after the cable was deliberately cut. The elevator plunged from the 12th floor during late evening overtime work. Security cameras captured multiple people working late, but the elevator's internal camera was mysteriously disabled.",
    clues: [
      "Amit died in elevator fall around 9:45 PM during overtime work session",
      "Elevator cables were professionally cut with industrial tools from maintenance room",
      "His laptop contained resignation letters he was preparing to fire multiple employees",
      "Recent sexual harassment complaints were filed against him by female employees",
      "Elevator maintenance records show fake service entry logged for that evening",
    ],
    suspects: [
      {
        id: 1,
        name: "Priyanka Das",
        age: 29,
        role: "Senior Software Engineer & Harassment Victim",
        details:
          "Team lead who filed sexual harassment complaint against Amit but was being pressured to withdraw it. Recently discovered Amit was planning to terminate her for 'performance issues' in retaliation.",
        motive:
          "Amit was destroying her career and mental health through harassment and retaliation",
        alibi:
          "Claims she was debugging code in her workstation on the 8th floor",
        evidence:
          "Code commits show no activity during murder time, and she has access to maintenance areas",
      },
      {
        id: 2,
        name: "Suresh Kumar",
        age: 44,
        role: "Facilities Manager & Technical Expert",
        details:
          "Manages building maintenance and elevator systems. Recently threatened by Amit with termination for 'cost-cutting' after 15 years of service to reduce operational expenses.",
        motive:
          "Termination at his age would make finding new job nearly impossible",
        alibi: "Says he was checking HVAC systems on different floors",
        evidence:
          "HVAC logs show no maintenance work, and he has expert knowledge of elevator mechanics",
      },
      {
        id: 3,
        name: "Rajesh Malhotra",
        age: 36,
        role: "Finance Manager & Whistleblower",
        details:
          "Discovered Amit was embezzling company funds through fake vendor payments. Recently threatened by Amit with false accusations of financial fraud if he reported the embezzlement.",
        motive:
          "Amit planned to frame him for the embezzlement and destroy his career",
        alibi:
          "Claims he was preparing month-end financial reports in accounts section",
        evidence:
          "Financial system shows no report generation during murder time",
      },
      {
        id: 4,
        name: "Kavya Singh",
        age: 26,
        role: "Security Supervisor & Night Shift Worker",
        details:
          "Head of night security who discovered Amit was manipulating CCTV footage to cover up his inappropriate behavior. Recently blackmailed by Amit to provide false security reports.",
        motive:
          "Amit was forcing her to be complicit in covering up harassment cases",
        alibi: "Says she was conducting security rounds on various floors",
        evidence:
          "Security logs show no recorded rounds during murder time, and she could disable elevator camera",
      },
      {
        id: 5,
        name: "Dr. Anita Verma",
        age: 32,
        role: "Company Doctor & Medical Officer",
        details:
          "On-site medical officer who was pressured by Amit to declare harassment victims as 'mentally unstable' in medical reports. Recently threatened with license cancellation for refusing to cooperate.",
        motive:
          "Amit was trying to destroy her medical career for not supporting his harassment cover-up",
        alibi: "Claims she was organizing medical records in the clinic",
        evidence:
          "Medical clinic was locked during overtime hours according to building security",
      },
    ],
    killer: 2,
    solution:
      "Suresh Kumar killed Amit. As facilities manager, he had expert knowledge of elevator mechanics and access to industrial cutting tools, faced job termination after 15 years of service, and his HVAC maintenance alibi was false as no work was logged.",
  }