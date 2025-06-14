export default {
    id: 6,
    title: "The Zomato Driver's Last Delivery",
    description:
      "Vikash Kumar, a popular Zomato delivery executive in Mumbai, was found dead from anaphylactic shock in his delivery bike's storage box. Someone had planted peanuts (to which he was severely allergic) in a fake food order. His phone showed he was about to expose a major food delivery scam involving fake restaurants and inflated bills.",
    clues: [
      "Vikash died from severe allergic reaction to peanuts around 8:30 PM during dinner rush",
      "Fake food order was placed from 'Royal Kitchen' - a restaurant that doesn't exist",
      "His phone contains evidence of 'ghost kitchen' scam involving inflated delivery charges",
      "₹45,000 in cash was found hidden in his bike's secret compartment",
      "GPS tracking shows he deviated from normal delivery route to meet someone",
      "His EpiPen was deliberately removed from his emergency medical kit",
    ],
    suspects: [
      {
        id: 1,
        name: "Rajesh Pandey",
        age: 33,
        role: "Zomato Area Manager & Corrupt Official",
        details:
          "Regional manager who was running fake restaurant scam with inflated delivery fees. Recently discovered by Vikash who was collecting evidence to report to company headquarters.",
        motive:
          "Vikash's evidence would expose his ₹15 lakh ghost kitchen fraud and end his career",
        alibi:
          "Claims he was conducting quality audits at registered restaurants",
        evidence:
          "No audit reports were filed, and he knew about Vikash's peanut allergy from medical records",
      },
      {
        id: 2,
        name: "Priya Sharma",
        age: 28,
        role: "Restaurant Owner & Fraud Participant",
        details:
          "Owns 'Spice Junction' restaurant participating in the fake kitchen network. Recently threatened by Vikash with exposure unless she paid him ₹50,000 for silence.",
        motive:
          "Vikash was blackmailing her about fake restaurant operations, threatening business closure",
        alibi: "Says she was managing dinner rush at her restaurant",
        evidence:
          "Restaurant staff confirm she was absent for 45 minutes during peak hours",
      },
      {
        id: 3,
        name: "Arjun Gupta",
        age: 26,
        role: "Competing Delivery Executive & Rival",
        details:
          "Senior delivery partner whose earnings dropped due to Vikash's popularity with customers. Recently discovered Vikash was earning extra through insider tips about high-value orders.",
        motive:
          "Jealous of Vikash's success and wanted to eliminate competition for premium deliveries",
        alibi: "Claims he was making deliveries in different area of the city",
        evidence:
          "GPS data shows he was near Vikash's location during murder time",
      },
      {
        id: 4,
        name: "Deepika Verma",
        age: 31,
        role: "Customer Service Manager & Inside Accomplice",
        details:
          "Handles customer complaints and refunds, recently caught by Vikash manipulating delivery charges and keeping refund money. Faces criminal charges for financial fraud.",
        motive:
          "Vikash was reporting her embezzlement of customer refunds to management",
        alibi: "Says she was handling customer complaint calls from office",
        evidence:
          "Call logs show no customer interactions during murder time window",
      },
      {
        id: 5,
        name: "Rohit Malhotra",
        age: 37,
        role: "Tech Support Engineer & System Hacker",
        details:
          "IT specialist who was helping create fake restaurant profiles in the app system. Recently discovered by Vikash who threatened to expose the technical fraud to cyber crime department.",
        motive:
          "Technical fraud exposure would result in arrest and destruction of IT career",
        alibi: "Claims he was fixing server issues from home office",
        evidence:
          "Server logs show no maintenance work was performed during murder time",
      },
      {
        id: 6,
        name: "Sunita Devi",
        age: 42,
        role: "Vikash's Landlady & Financial Disputant",
        details:
          "Vikash's house owner who recently discovered he was subletting rooms without permission and keeping rental income. Recently threatened with eviction and legal action by Vikash.",
        motive:
          "Vikash was planning to file case against her for illegal rent collection",
        alibi: "Says she was collecting rent from other tenants in building",
        evidence:
          "Other tenants confirm no rent collection happened that evening",
      },
      {
        id: 7,
        name: "Kiran Das",
        age: 24,
        role: "Medical Student & Peanut Allergy Expert",
        details:
          "Part-time medical consultant for food delivery platforms, helping create allergy-safe delivery protocols. Recently fired by Vikash's complaint about her slow response to allergy incidents.",
        motive:
          "Vikash's complaint destroyed her part-time medical consulting career prospects",
        alibi: "Claims she was studying for medical exams at library",
        evidence: "Library records show no entry logged for her that evening",
      },
    ],
    killer: 1,
    solution:
      "Rajesh Pandey killed Vikash. As area manager, he had access to Vikash's medical records knowing about the peanut allergy, could create fake orders in the system, and faced exposure of his ₹15 lakh ghost kitchen fraud scheme that would end his career and lead to criminal charges.",
  }