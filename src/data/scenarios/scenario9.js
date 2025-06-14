export default {
    id: 9,
    title: "The Swiggy Cloud Kitchen Conspiracy",
    description:
      "Vikram Reddy, owner of 'Taste Heaven' cloud kitchen in Hyderabad, was found dead from carbon monoxide poisoning in his kitchen's cold storage room. The ventilation system was deliberately blocked and a portable gas stove was left running to create deadly fumes. The murder occurred during lunch prep when the kitchen was busy with multiple orders.",
    clues: [
      "Vikram died from carbon monoxide poisoning around 12:30 PM during lunch rush preparation",
      "Cold storage room's ventilation was blocked with kitchen towels and sealed with tape",
      "Portable gas stove was left running inside the sealed room to create lethal gas buildup",
      "His phone revealed he was planning to expose 'fake hygiene certificates' and food safety violations",
      "Recent health inspector raids found multiple violations that someone was covering up",
      "₹8 lakh in bribe money was found hidden in spice storage containers",
      "Kitchen's main CCTV camera was disabled during murder time",
    ],
    suspects: [
      {
        id: 1,
        name: "Rajesh Kumar",
        age: 34,
        role: "Head Chef & Kitchen Manager",
        details:
          "Manages daily kitchen operations and food preparation. Recently caught by Vikram reusing expired ingredients and serving contaminated food to cut costs and increase profits.",
        motive:
          "Vikram was reporting him to food safety board for health violations, ending his culinary career",
        alibi:
          "Claims he was supervising lunch preparation in main kitchen area",
        evidence:
          "Kitchen staff confirm he was missing for 20 minutes during critical lunch prep time",
      },
      {
        id: 2,
        name: "Sunita Rao",
        age: 29,
        role: "Food Safety Inspector & Corrupt Official",
        details:
          "Government food inspector who was taking bribes from Vikram to overlook hygiene violations. Recently threatened by Vikram with exposure unless she stopped demanding increased bribe money.",
        motive:
          "Vikram's exposure would end her government career and lead to criminal charges for corruption",
        alibi:
          "Says she was conducting inspection at different cloud kitchen across the city",
        evidence:
          "No inspection reports were filed for other locations during murder time",
      },
      {
        id: 3,
        name: "Arjun Gupta",
        age: 26,
        role: "Delivery Coordinator & Inside Accomplice",
        details:
          "Coordinates with delivery platforms and manages order logistics. Recently discovered by Vikram to be manipulating delivery charges and keeping extra money from fake orders.",
        motive:
          "Vikram was filing fraud charges for delivery manipulation, leading to arrest",
        alibi:
          "Claims he was coordinating with Swiggy delivery partners outside kitchen",
        evidence:
          "Delivery partners confirm no coordination meeting happened during lunch rush",
      },
      {
        id: 4,
        name: "Dr. Meera Sharma",
        age: 37,
        role: "Hygiene Consultant & Certificate Forger",
        details:
          "Provides hygiene consulting and creates food safety certificates. Recently caught by Vikram selling fake FSSAI certificates to multiple cloud kitchens without proper inspections.",
        motive:
          "Vikram was exposing her fake certificate business to authorities, destroying her consulting career",
        alibi:
          "Says she was consulting with other cloud kitchen owners about compliance",
        evidence:
          "No consultation appointments were scheduled during murder time window",
      },
      {
        id: 5,
        name: "Priya Reddy",
        age: 31,
        role: "Vikram's Wife & Business Co-owner",
        details:
          "Co-manages business finances and supplier relationships. Recently discovered Vikram was planning to sell cloud kitchen to corporate chain and start fresh business without her involvement.",
        motive:
          "Vikram's secret sale would leave her with nothing after years of building the business together",
        alibi:
          "Claims she was negotiating with ingredient suppliers via phone calls",
        evidence:
          "Phone records show no supplier calls during murder time period",
      },
      {
        id: 6,
        name: "Kiran Verma",
        age: 33,
        role: "Competitor & Rival Kitchen Owner",
        details:
          "Owns competing cloud kitchen 'Royal Feast' in same area. Recently threatened by Vikram with business sabotage exposure after discovering he was paying delivery executives to delay Taste Heaven orders.",
        motive:
          "Vikram's evidence would destroy his business reputation and face legal action for sabotage",
        alibi: "Says he was managing lunch rush at his own kitchen facility",
        evidence:
          "His kitchen staff confirm he was absent during their busiest lunch hour",
      },
      {
        id: 7,
        name: "Rohit Malhotra",
        age: 28,
        role: "Kitchen Maintenance & Gas System Expert",
        details:
          "Handles kitchen equipment maintenance and gas safety systems. Recently caught by Vikram stealing expensive kitchen equipment and selling to other cloud kitchens.",
        motive:
          "Vikram was filing theft charges and threatening to destroy his maintenance contractor business",
        alibi:
          "Claims he was checking gas safety systems in different section of kitchen",
        evidence:
          "Gas safety logs show no maintenance checks were performed during murder time",
      },
      {
        id: 8,
        name: "Anita Singh",
        age: 24,
        role: "Social Media Manager & Review Manipulator",
        details:
          "Manages online reviews and social media presence for cloud kitchen. Recently caught by Vikram paying for fake positive reviews and bribing customers to remove negative feedback.",
        motive:
          "Vikram was exposing her review manipulation to platforms, destroying her digital marketing career",
        alibi:
          "Claims she was responding to customer reviews and managing social media from office area",
        evidence:
          "No social media activity or review responses posted during murder time window",
      },
    ],
    killer: 2,
    solution:
      "Sunita Rao killed Vikram. As a food safety inspector, she knew about ventilation systems and gas safety protocols, could manipulate safety equipment, faced criminal corruption charges that would end her government career, and her inspection alibi was false as no reports were filed.",
  }