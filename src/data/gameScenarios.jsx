export const gameScenarios = [
  {
    id: 1,
    title: "The IT Park Murder",
    description: "Priya Sharma, a 42-year-old software project manager, was found dead in her cabin at Tech Tower, Gurgaon at 11:30 PM. She was working late to meet a client deadline when someone entered her cabin and stabbed her with a paper knife. The security system showed three people had access to the building that evening.",
    clues: [
      "Priya was killed between 10:30-11:30 PM with a paper knife from her own desk",
      "The killer left muddy footprints size 9 leading towards the fire exit",
      "Priya's laptop shows she discovered ₹15 lakh missing from project funds",
      "Her cabin door was locked from inside, suggesting she trusted her killer",
      "A tea cup with sindoor marks was found on her desk - but Priya was unmarried"
    ],
    suspects: [
      {
        id: 1,
        name: "Rajesh Kumar",
        age: 35,
        role: "Senior Developer",
        details: "Had admin access to all financial systems. Recently facing family pressure for dowry money. Shoe size 9. Security footage shows him leaving at 11:10 PM. Claims he was debugging code in the server room.",
        motive: "Desperately needed money for sister's wedding and had technical access to project accounts",
        alibi: "Says he was in the server room fixing a critical bug until 11:10 PM",
        evidence: "CCTV shows him near Priya's cabin at 10:40 PM, and his access card was used multiple times"
      },
      {
        id: 2,
        name: "Neha Gupta",
        age: 28,
        role: "Team Lead",
        details: "Priya's junior who was recently denied a promotion to senior manager. Wears bright red sindoor daily. Shoe size 6. Her access card shows exit at 10:15 PM according to security logs.",
        motive: "Angry about being overlooked for promotion that went to an external candidate instead",
        alibi: "Claims she left office at 10:15 PM and took auto-rickshaw home to Noida",
        evidence: "Her keycard shows exit at 10:15 PM, but the back gate has faulty camera that night"
      },
      {
        id: 3,
        name: "Vikram Singh",
        age: 48,
        role: "Finance Head",
        details: "Priya's reporting manager and project budget controller. Under internal audit for fund misappropriation. Shoe size 9. Security shows him leaving at 11:20 PM. Known for heated arguments with Priya over budget approvals.",
        motive: "Priya discovered his systematic fund diversion and was planning to report to MD",
        alibi: "Claims he was in his office preparing audit documents until 11:20 PM",
        evidence: "Priya's notes mention 'V.S. - suspicious transfers' with today's date and time"
      }
    ],
    killer: 3,
    solution: "Vikram Singh killed Priya because she uncovered his fund embezzlement scheme. The evidence clearly points to him: his shoe size matches the muddy prints, Priya's notes directly implicated him (V.S.), and he had the strongest motive to silence her before she could expose his financial fraud to the management."
  },
  {
    id: 2,
    title: "The Wedding Poison Case",
    description: "Arjun Agarwal, a wealthy textile businessman from Jaipur, was found dead in his haveli's prayer room during his nephew's pre-wedding ceremony. He had been poisoned with potassium cyanide mixed into his special kesari halwa. Three family members had access to the sweet preparation area throughout the evening.",
    clues: [
      "Arjun died from cyanide poisoning between 8:30-9:00 PM during aarti time",
      "The poison was specifically in the kesari halwa bowl that Arjun always ate first as prasad",
      "A small chemical vial was found hidden behind the Ganesha murti in the prayer room",
      "Arjun recently changed his will, leaving the entire textile business to a trust instead of family",
      "Only three people knew about his habit of eating kesari halwa first during evening prayers"
    ],
    suspects: [
      {
        id: 1,
        name: "Kavya Agarwal",
        age: 32,
        role: "Estranged Daughter-in-law",
        details: "Arjun's son's widow who he recently cut from the business inheritance. She has a B.Sc in Chemistry and works at a pharmaceutical company. Arrived late to the ceremony at 8:10 PM claiming traffic from Delhi.",
        motive: "Cut out of textile business worth ₹50 crore inheritance in favor of charitable trust",
        alibi: "Claims she was in the women's section attending mehendi ceremony until 9:15 PM",
        evidence: "Her purse contained lab equipment and multiple people saw her near the kitchen around 8:40 PM"
      },
      {
        id: 2,
        name: "Dr. Mahesh Sharma",
        age: 58,
        role: "Family Doctor & Friend",
        details: "Arjun's childhood friend and personal physician for 20 years. Recently lost his clinic due to a medical negligence case. Has access to various chemicals through medical practice.",
        motive: "Desperately needed money after losing his clinic and facing multiple lawsuits",
        alibi: "Says he was in the bathroom when Arjun went for evening prayers",
        evidence: "Had borrowed ₹25 lakh from Arjun last year and was being pressured for repayment"
      },
      {
        id: 3,
        name: "Kamala Devi",
        age: 52,
        role: "Head Cook & Caretaker",
        details: "Arjun's trusted head cook and house manager for 18 years. Recently discovered she was removed from the will despite promises. She personally prepared all sweets including the kesari halwa and arranged the prayer room.",
        motive: "Arjun had promised her ₹10 lakh and a house but removed her from will last month",
        alibi: "Claims she was serving dinner to guests when Arjun died",
        evidence: "She had complete access to the kitchen and prayer room, and prepared the exact bowl of halwa"
      }
    ],
    killer: 3,
    solution: "Kamala Devi killed Arjun. As the head cook, she had perfect access to poison the kesari halwa, she knew his prayer routine intimately, and she was betrayed after 18 years of loyal service when Arjun broke his promise and removed her from his will despite her years of dedicated service to the family."
  },
  {
    id: 3,
    title: "The Film Studio Stabbing",
    description: "Rohit Kapoor, a famous Bollywood director, was found stabbed in his vanity van at Film City, Mumbai during the shooting of his latest blockbuster. The murder weapon was a prop knife from the film set. Three people were on set during the lunch break when the murder occurred.",
    clues: [
      "Rohit was killed between 1:30-2:00 PM with a prop knife during lunch break",
      "The van door was locked from inside, and the air conditioning was turned to maximum",
      "His phone shows threatening messages about exposing someone's 'secret affair'",
      "A bottle of expensive whiskey was found half-empty in the van - unusual for Rohit who was teetotaler",
      "Someone had tampered with the van's security camera, covering it with makeup powder"
    ],
    suspects: [
      {
        id: 1,
        name: "Sonia Malhotra",
        age: 29,
        role: "Lead Actress",
        details: "The film's heroine and Rohit's rumored girlfriend. Recently discovered Rohit was planning to replace her with a younger actress. Has access to all prop weapons and makeup supplies.",
        motive: "Facing career destruction and public humiliation due to replacement and affair exposure",
        alibi: "Claims she was in her makeup room getting touch-ups for afternoon shot",
        evidence: "Makeup powder found on camera matches her personal kit, and prop master confirms missing knife"
      },
      {
        id: 2,
        name: "Karan Mehra",
        age: 34,
        role: "Producer & Financier",
        details: "Film's producer who invested ₹80 crore in the project. Recently discovered Rohit was planning to sell the film rights to another studio. Known to carry expensive whiskey as gifts.",
        motive: "Rohit's betrayal would cause massive financial loss and ruin his production house",
        alibi: "Says he was on phone with distributors in his office during lunch time",
        evidence: "The whiskey bottle is his preferred brand, and he had keys to Rohit's van"
      },
      {
        id: 3,
        name: "Madhav Joshi",
        age: 45,
        role: "Assistant Director",
        details: "Rohit's longtime associate and assistant director for 12 films. Recently learned Rohit was planning to expose his gambling debts to financiers. Has intimate knowledge of film sets and security systems.",
        motive: "Rohit threatened to expose his ₹50 lakh gambling debts, destroying his career",
        alibi: "Claims he was coordinating with technical crew for afternoon shoot setup",
        evidence: "He knew exactly how to disable the security camera and had access during setup"
      }
    ],
    killer: 1,
    solution: "Sonia Malhotra killed Rohit. The evidence points to her: the makeup powder covering the camera came from her kit, she had access to prop weapons, and she faced both career destruction and public humiliation from Rohit's plans to replace her and expose their affair."
  },
  {
    id: 4,
    title: "The Hospital Drug Murder",
    description: "Dr. Sandeep Nair, Chief Medical Officer at Apollo Hospital, Chennai, was found dead in his office from insulin overdose. He was diabetic but the dosage was lethal. Three medical staff had access to his office and insulin supplies that evening.",
    clues: [
      "Dr. Nair died from massive insulin overdose between 9:00-10:00 PM",
      "His insulin pen was replaced with a concentrated veterinary grade insulin",
      "Security footage shows his office lights going off at 9:45 PM - unusual timing",
      "A medical file about 'organ trafficking investigation' was found hidden in his desk",
      "The insulin vial found in trash had fingerprints wiped clean but residue DNA remained"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Meera Reddy",
        age: 36,
        role: "Senior Surgeon",
        details: "Cardiac surgeon and Dr. Nair's former protégé. Recently demoted after Dr. Nair discovered her involvement in private organ trading. Has access to all medical supplies including veterinary drugs.",
        motive: "Dr. Nair was about to expose her illegal organ trafficking to medical board",
        alibi: "Claims she was performing emergency surgery until 10:30 PM",
        evidence: "Surgery records show operation ended at 9:30 PM, and she had access to veterinary insulin"
      },
      {
        id: 2,
        name: "Ravi Pillai",
        age: 41,
        role: "Head Pharmacist",
        details: "Hospital's chief pharmacist for 8 years. Controls all drug inventory including insulin. Recently caught selling expired medicines to private clinics by Dr. Nair.",
        motive: "Dr. Nair threatened to file criminal charges for drug theft and black market sales",
        alibi: "Says he was doing inventory check in pharmacy until 10:15 PM",
        evidence: "Has master access to all insulin supplies and could easily obtain veterinary grade drugs"
      },
      {
        id: 3,
        name: "Nurse Priya Das",
        age: 28,
        role: "ICU Head Nurse",
        details: "Senior ICU nurse who managed Dr. Nair's diabetes care. Recently discovered by Dr. Nair to be stealing patient medications. Has intimate knowledge of insulin administration.",
        motive: "Dr. Nair was planning to terminate her and file police complaint for drug theft",
        alibi: "Claims she was attending to ICU patients during evening shift",
        evidence: "ICU records show she left her station for 45 minutes around 9:30 PM"
      }
    ],
    killer: 1,
    solution: "Dr. Meera Reddy killed Dr. Nair. As a surgeon, she had access to veterinary grade insulin through her network, she was the primary target of his organ trafficking investigation, and surgery records prove she was free during the murder time window, contradicting her alibi."
  },
  {
    id: 5,
    title: "The Temple Festival Drowning",
    description: "Pandit Ramesh Shastri, head priest of Jagannath Temple, Puri, was found drowned in the temple's sacred pond during Rath Yatra festival. Despite being an excellent swimmer, he mysteriously drowned in shallow water. Three temple committee members were present during the incident.",
    clues: [
      "Pandit Shastri drowned in 4-feet deep water despite being a strong swimmer",
      "Autopsy revealed sedative drugs in his bloodstream - unusual for a religious priest",
      "His sacred thread (janeu) was found torn and floating separately from his body",
      "Temple donation records show ₹25 lakh missing from festival collection funds",
      "Witnesses heard an argument near the pond around 8:00 PM but couldn't identify voices"
    ],
    suspects: [
      {
        id: 1,
        name: "Govind Mishra",
        age: 54,
        role: "Temple Committee Chairman",
        details: "Temple's managing committee head for 6 years. Controls all financial decisions and donations. Recently confronted by Pandit Shastri about missing festival funds. Has keys to donation vault.",
        motive: "Pandit Shastri discovered his systematic embezzlement of temple donations over years",
        alibi: "Claims he was supervising evening aarti preparations in main temple hall",
        evidence: "Temple accounts show irregular withdrawals matching his personal bank deposits"
      },
      {
        id: 2,
        name: "Satish Panda",
        age: 43,
        role: "Junior Priest",
        details: "Assistant priest waiting for promotion to head priest position for 8 years. Recently passed over again in favor of continuing Pandit Shastri's tenure. Has access to temple medicinal herbs and sedatives.",
        motive: "Frustrated by repeated rejection for head priest position despite years of service",
        alibi: "Says he was preparing prasad in temple kitchen during evening hours",
        evidence: "Kitchen staff confirm he left for 'personal work' from 7:45-8:30 PM"
      },
      {
        id: 3,
        name: "Bimal Rath",
        age: 39,
        role: "Festival Coordinator",
        details: "Organizes all temple festivals and manages vendor contracts. Recently accused by Pandit Shastri of taking bribes from vendors. Has access to various festival supplies including cleaning chemicals.",
        motive: "Pandit Shastri threatened to expose his vendor bribery scandal to devotee community",
        alibi: "Claims he was coordinating with security for crowd control near main gate",
        evidence: "Security footage shows him near pond area at 8:10 PM, contrary to his alibi"
      }
    ],
    killer: 3,
    solution: "Bimal Rath killed Pandit Shastri. Security footage places him near the pond during the murder time, he had access to sedatives through festival supplies, and he faced public disgrace and criminal charges if his vendor bribery scandal was exposed by the priest."
  },
  {
    id: 6,
    title: "The Cricket Academy Poisoning",
    description: "Coach Suresh Tendulkar, former Ranji player and cricket academy owner in Pune, was found dead in his office from aconitine poisoning after the evening practice session. The poison was mixed in his daily protein shake. Three academy staff had access to his office and nutrition supplies.",
    clues: [
      "Coach Tendulkar died from aconitine (wolfsbane) poisoning between 7:30-8:00 PM",
      "The poison was mixed in his post-workout protein shake kept in office refrigerator",
      "His laptop showed threatening emails about 'exposing match-fixing in youth cricket'",
      "Academy's scholarship fund account shows ₹12 lakh unauthorized withdrawals",
      "A small vial containing wolfsbane extract was found in the parking lot trash bin"
    ],
    suspects: [
      {
        id: 1,
        name: "Ajay Patil",
        age: 31,
        role: "Assistant Coach",
        details: "Former Mumbai Ranji player who assists with batting coaching. Recently discovered selling academy selection spots to wealthy parents for ₹5 lakh each. Has botany degree and knowledge of poisonous plants.",
        motive: "Coach Tendulkar was about to expose his selection spot selling scam to cricket board",
        alibi: "Claims he was conducting fielding practice with junior batch until 8:15 PM",
        evidence: "His botany background gives him access to wolfsbane, and bank records show suspicious deposits"
      },
      {
        id: 2,
        name: "Prashant Kulkarni",
        age: 46,
        role: "Academy Manager",
        details: "Handles all academy finances and student admissions. Recently caught by Coach Tendulkar misappropriating scholarship funds meant for underprivileged students. Has access to all office areas.",
        motive: "Coach threatened to file police complaint for scholarship fund embezzlement",
        alibi: "Says he was in accounts office preparing fee collection reports until 8:30 PM",
        evidence: "Has master keys to all areas including coach's office and refrigerator"
      },
      {
        id: 3,
        name: "Deepak Sharma",
        age: 27,
        role: "Fitness Trainer",
        details: "Academy's fitness and nutrition expert. Prepares all protein shakes and supplements for players and staff. Recently accused by Coach Tendulkar of providing performance-enhancing drugs to players.",
        motive: "Coach was planning to report his illegal drug supply to anti-doping authorities",
        alibi: "Claims he was cleaning equipment in gymnasium until 8:00 PM",
        evidence: "He prepared the coach's daily protein shake and has access to various supplements"
      }
    ],
    killer: 2,
    solution: "Prashant Kulkarni killed Coach Tendulkar. He had master access to the coach's office and refrigerator, faced criminal charges for embezzling scholarship funds, and the ₹12 lakh missing from academy accounts directly pointed to his financial fraud that the coach was about to expose."
  },
  {
    id: 7,
    title: "The Tea Estate Murder",
    description: "Mr. Jagmohan Singh, owner of Green Valley Tea Estate in Darjeeling, was found dead in his bungalow study from cyanide poisoning. The poison was in his evening tea - ironic for a tea estate owner. Three estate managers were present during his daily evening tea routine.",
    clues: [
      "Mr. Singh died from cyanide poisoning in his special Earl Grey tea at 6:30 PM",
      "Only his teacup contained poison - the teapot and other cups were clean",
      "Estate records show he was planning to sell the property to a corporate buyer",
      "A suicide note was found but handwriting experts deemed it forged",
      "His safe was found open with important property documents missing"
    ],
    suspects: [
      {
        id: 1,
        name: "Raman Pradhan",
        age: 49,
        role: "Estate Manager",
        details: "Has managed the tea estate for 15 years and lives on the property with his family. Recently learned that Mr. Singh was selling to a corporation that would terminate all local staff. Has been forging signatures for daily operations.",
        motive: "Sale to corporation would destroy his livelihood and displace his family from estate housing",
        alibi: "Claims he was supervising evening tea plucking in the upper gardens",
        evidence: "Workers confirm he was absent from gardens between 6:00-6:45 PM, and he has signature forgery skills"
      },
      {
        id: 2,
        name: "Dr. Anita Ghosh",
        age: 38,
        role: "Quality Control Manager",
        details: "Tea tasting expert and quality controller for the estate. Recently discovered Mr. Singh was planning to blame poor quality reports on her to justify selling. Has chemistry background and access to lab chemicals.",
        motive: "Mr. Singh was planning to destroy her reputation in the tea industry as scapegoat",
        alibi: "Says she was testing evening batch samples in the quality lab",
        evidence: "Lab records show no samples were tested during murder time, and she has access to cyanide compounds"
      },
      {
        id: 3,
        name: "Kailash Rai",
        age: 52,
        role: "Head Accountant",
        details: "Estate's financial manager for 12 years. Recently discovered by Mr. Singh to be embezzling funds through fake worker payroll entries. Handles all estate documentation and has access to Mr. Singh's study.",
        motive: "Mr. Singh was about to file criminal charges for embezzlement before the sale",
        alibi: "Claims he was preparing financial documents for the potential buyers",
        evidence: "Had access to study and safe, could forge suicide note, and faced immediate arrest"
      }
    ],
    killer: 3,
    solution: "Kailash Rai killed Mr. Singh. He had access to the study and safe, could forge the suicide note with his document handling skills, stole property papers to cover his embezzlement, and faced immediate criminal prosecution that would destroy his life and family."
  },
  {
    id: 8,
    title: "The University Professor Murder",
    description: "Dr. Meera Krishnan, Head of Chemistry Department at Delhi University, was found dead in her laboratory from hydrogen sulfide gas poisoning. The lab's ventilation system had been tampered with. Three faculty members had access to the chemistry lab after hours.",
    clues: [
      "Dr. Krishnan died from hydrogen sulfide poisoning around 9:30 PM in her private lab",
      "The lab's safety ventilation system was deliberately disabled from the main control panel",
      "Her research files on 'academic plagiarism investigation' were found scattered and torn",
      "Security card logs show three people accessed the chemistry building after 9:00 PM",
      "A fake gas leak emergency was reported to delay security response by 20 minutes"
    ],
    suspects: [
      {
        id: 1,
        name: "Prof. Rajesh Verma",
        age: 44,
        role: "Associate Professor",
        details: "Senior chemistry professor competing for department head position. Recently accused by Dr. Krishnan of plagiarizing research papers from international journals. Has expertise in gas chemistry and safety systems.",
        motive: "Dr. Krishnan was about to present plagiarism evidence to university committee, ending his career",
        alibi: "Claims he was grading papers in his office until 10:00 PM",
        evidence: "His office was empty when security checked, and he has detailed knowledge of ventilation systems"
      },
      {
        id: 2,
        name: "Dr. Sunita Agarwal",
        age: 36,
        role: "Assistant Professor",
        details: "Junior faculty member whose PhD thesis was recently questioned by Dr. Krishnan for data fabrication. Facing potential PhD revocation and career termination. Has access to all lab equipment and safety controls.",
        motive: "Dr. Krishnan's investigation would revoke her PhD and destroy her academic career",
        alibi: "Says she was conducting late evening experiments in organic chemistry lab",
        evidence: "Organic lab shows no signs of recent use, and she knew how to disable safety systems"
      },
      {
        id: 3,
        name: "Arun Kumar",
        age: 29,
        role: "Lab Technician",
        details: "Senior lab technician responsible for chemical storage and safety systems. Recently caught by Dr. Krishnan stealing expensive laboratory chemicals to sell to private coaching centers. Has master access to all controls.",
        motive: "Dr. Krishnan was filing police complaint for chemical theft, facing immediate termination and arrest",
        alibi: "Claims he was doing inventory check in chemical storage room",
        evidence: "Storage records show no inventory was done, and he has access to gas cylinders and ventilation controls"
      }
    ],
    killer: 3,
    solution: "Arun Kumar killed Dr. Krishnan. As lab technician, he had master access to safety systems and gas supplies, faced immediate criminal charges for chemical theft, and could easily disable ventilation while creating the fake emergency call to delay rescue response."
  }
]