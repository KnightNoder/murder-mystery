export default  {
    id: 5,
    title: "The Neighborhood WhatsApp Admin Murder",
    description:
      "Mrs. Kavita Sharma, admin of 'Green Park Society' WhatsApp group and local busybody, was found dead from pesticide poisoning in her kitchen garden. She was known for exposing everyone's secrets through the neighborhood group. The poison was mixed in her morning gardening water bottle during her daily 6 AM gardening routine.",
    clues: [
      "Kavita died from organophosphate pesticide poisoning around 6:30 AM while gardening",
      "Her water bottle contained concentrated pesticide mixed with regular drinking water",
      "Her phone shows she was preparing to expose someone's 'big secret' in the group that morning",
      "Recent WhatsApp messages reveal she was blackmailing neighbors with compromising information",
      "Garden shed shows signs of recent break-in with pesticide bottles rearranged",
    ],
    suspects: [
      {
        id: 1,
        name: "Ramesh Uncle",
        age: 58,
        role: "Retired Teacher & Respected Neighbor",
        details:
          "Respected colony elder whose son's drug addiction was recently discovered by Kavita. She threatened to expose this in the society group, destroying his family's reputation.",
        motive:
          "Kavita's exposure would destroy his family honor and his son's marriage prospects",
        alibi: "Claims he was doing morning yoga on his terrace",
        evidence:
          "Terrace showed no yoga mat or signs of recent use during morning time",
      },
      {
        id: 2,
        name: "Preeti Malhotra",
        age: 34,
        role: "Homemaker & Secret Affair Partner",
        details:
          "Married woman having affair with delivery boy which Kavita discovered and photographed. Recently blackmailed by Kavita for ₹2 lakh to keep quiet about the relationship.",
        motive: "Exposure would destroy her marriage and family life",
        alibi:
          "Says she was preparing breakfast and getting kids ready for school",
        evidence:
          "Kids confirm mother was unusually absent from kitchen during morning routine",
      },
      {
        id: 3,
        name: "Rohit Sharma",
        age: 31,
        role: "Software Engineer & Kavita's Husband",
        details:
          "Kavita's husband who recently discovered she was blackmailing neighbors and making enemies. Feared for family safety due to her dangerous gossip activities.",
        motive:
          "Kavita's blackmail activities were putting their family in danger from angry neighbors",
        alibi: "Claims he was getting ready for office and didn't go to garden",
        evidence:
          "Neighbors saw him near garden shed early morning before Kavita's gardening time",
      },
      {
        id: 4,
        name: "Dr. Anjali Gupta",
        age: 42,
        role: "Dentist & Illegal Practice Runner",
        details:
          "Runs unlicensed dental practice from home which Kavita discovered. Recently threatened by Kavita with medical board complaint unless she paid monthly 'silence fees'.",
        motive:
          "Exposure would end her illegal practice and result in license cancellation",
        alibi: "Says she was preparing for morning patient appointments",
        evidence:
          "No patients were scheduled for early morning according to her appointment book",
      },
      {
        id: 5,
        name: "Karan Verma",
        age: 28,
        role: "Delivery Executive & Affair Partner",
        details:
          "Food delivery worker having affair with Preeti, which Kavita was planning to expose with photos. Recently threatened by Kavita to stop the relationship or face public shame.",
        motive:
          "Exposure would destroy his relationship and reputation in the neighborhood",
        alibi:
          "Claims he was starting morning delivery rounds in different area",
        evidence:
          "GPS tracking shows he was in Green Park area during murder time, not at assigned delivery zone",
      },
      {
        id: 6,
        name: "Sunita Auntie",
        age: 51,
        role: "Housewife & Financial Fraudster",
        details:
          "Runs illegal chit fund scheme in the colony which Kavita discovered after several neighbors lost money. Recently exposed by Kavita's investigation into missing payments.",
        motive:
          "Kavita's exposure would lead to criminal charges for financial fraud",
        alibi: "Says she was attending morning temple prayers",
        evidence:
          "Temple priest confirms no early morning prayers were conducted that day",
      },
    ],
    killer: 2,
    solution:
      "Preeti Malhotra killed Kavita. She had the strongest motive as exposure of her affair would destroy her marriage, was missing from kitchen during critical time when kids needed breakfast preparation, and had access to pesticides from her own garden maintenance.",
  }