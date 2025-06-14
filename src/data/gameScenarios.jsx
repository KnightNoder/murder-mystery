export const gameScenarios = [
  {
    id: 1,
    title: "The IT Park Murder",
    description:
      "Priya Sharma, a 42-year-old software project manager, was found dead in her cabin at Tech Tower, Gurgaon at 11:30 PM. She was working late to meet a client deadline when someone entered her cabin and stabbed her with a paper knife. The security system showed three people had access to the building that evening.",
    clues: [
      "Priya was killed between 10:30-11:30 PM with a paper knife from her own desk",
      "The killer left muddy footprints size 9 leading towards the fire exit",
      "Priya's laptop shows she discovered ₹15 lakh missing from project funds",
      "Her cabin door was locked from inside, suggesting she trusted her killer",
      "A tea cup with sindoor marks was found on her desk - but Priya was unmarried",
    ],
    suspects: [
      {
        id: 1,
        name: "Rajesh Kumar",
        age: 35,
        role: "Senior Developer",
        details:
          "Had admin access to all financial systems. Recently facing family pressure for dowry money. Shoe size 9. Security footage shows him leaving at 11:10 PM. Claims he was debugging code in the server room.",
        motive:
          "Desperately needed money for sister's wedding and had technical access to project accounts",
        alibi:
          "Says he was in the server room fixing a critical bug until 11:10 PM",
        evidence:
          "CCTV shows him near Priya's cabin at 10:40 PM, and his access card was used multiple times",
      },
      {
        id: 2,
        name: "Neha Gupta",
        age: 28,
        role: "Team Lead",
        details:
          "Priya's junior who was recently denied a promotion to senior manager. Wears bright red sindoor daily. Shoe size 6. Her access card shows exit at 10:15 PM according to security logs.",
        motive:
          "Angry about being overlooked for promotion that went to an external candidate instead",
        alibi:
          "Claims she left office at 10:15 PM and took auto-rickshaw home to Noida",
        evidence:
          "Her keycard shows exit at 10:15 PM, but the back gate has faulty camera that night",
      },
      {
        id: 3,
        name: "Vikram Singh",
        age: 48,
        role: "Finance Head",
        details:
          "Priya's reporting manager and project budget controller. Under internal audit for fund misappropriation. Shoe size 9. Security shows him leaving at 11:20 PM. Known for heated arguments with Priya over budget approvals.",
        motive:
          "Priya discovered his systematic fund diversion and was planning to report to MD",
        alibi:
          "Claims he was in his office preparing audit documents until 11:20 PM",
        evidence:
          "Priya's notes mention 'V.S. - suspicious transfers' with today's date and time",
      },
    ],
    killer: 3,
    solution:
      "Vikram Singh killed Priya because she uncovered his fund embezzlement scheme. The evidence clearly points to him: his shoe size matches the muddy prints, Priya's notes directly implicated him (V.S.), and he had the strongest motive to silence her before she could expose his financial fraud to the management.",
  },
  {
    id: 2,
    title: "The Wedding Poison Case",
    description:
      "Arjun Agarwal, a wealthy textile businessman from Jaipur, was found dead in his haveli's prayer room during his nephew's pre-wedding ceremony. He had been poisoned with potassium cyanide mixed into his special kesari halwa. Three family members had access to the sweet preparation area throughout the evening.",
    clues: [
      "Arjun died from cyanide poisoning between 8:30-9:00 PM during aarti time",
      "The poison was specifically in the kesari halwa bowl that Arjun always ate first as prasad",
      "A small chemical vial was found hidden behind the Ganesha murti in the prayer room",
      "Arjun recently changed his will, leaving the entire textile business to a trust instead of family",
      "Only three people knew about his habit of eating kesari halwa first during evening prayers",
    ],
    suspects: [
      {
        id: 1,
        name: "Kavya Agarwal",
        age: 32,
        role: "Estranged Daughter-in-law",
        details:
          "Arjun's son's widow who he recently cut from the business inheritance. She has a B.Sc in Chemistry and works at a pharmaceutical company. Arrived late to the ceremony at 8:10 PM claiming traffic from Delhi.",
        motive:
          "Cut out of textile business worth ₹50 crore inheritance in favor of charitable trust",
        alibi:
          "Claims she was in the women's section attending mehendi ceremony until 9:15 PM",
        evidence:
          "Her purse contained lab equipment and multiple people saw her near the kitchen around 8:40 PM",
      },
      {
        id: 2,
        name: "Dr. Mahesh Sharma",
        age: 58,
        role: "Family Doctor & Friend",
        details:
          "Arjun's childhood friend and personal physician for 20 years. Recently lost his clinic due to a medical negligence case. Has access to various chemicals through medical practice.",
        motive:
          "Desperately needed money after losing his clinic and facing multiple lawsuits",
        alibi:
          "Says he was in the bathroom when Arjun went for evening prayers",
        evidence:
          "Had borrowed ₹25 lakh from Arjun last year and was being pressured for repayment",
      },
      {
        id: 3,
        name: "Kamala Devi",
        age: 52,
        role: "Head Cook & Caretaker",
        details:
          "Arjun's trusted head cook and house manager for 18 years. Recently discovered she was removed from the will despite promises. She personally prepared all sweets including the kesari halwa and arranged the prayer room.",
        motive:
          "Arjun had promised her ₹10 lakh and a house but removed her from will last month",
        alibi: "Claims she was serving dinner to guests when Arjun died",
        evidence:
          "She had complete access to the kitchen and prayer room, and prepared the exact bowl of halwa",
      },
    ],
    killer: 3,
    solution:
      "Kamala Devi killed Arjun. As the head cook, she had perfect access to poison the kesari halwa, she knew his prayer routine intimately, and she was betrayed after 18 years of loyal service when Arjun broke his promise and removed her from his will despite her years of dedicated service to the family.",
  },
  {
    id: 3,
    title: "The Film Studio Stabbing",
    description:
      "Rohit Kapoor, a famous Bollywood director, was found stabbed in his vanity van at Film City, Mumbai during the shooting of his latest blockbuster. The murder weapon was a prop knife from the film set. Three people were on set during the lunch break when the murder occurred.",
    clues: [
      "Rohit was killed between 1:30-2:00 PM with a prop knife during lunch break",
      "The van door was locked from inside, and the air conditioning was turned to maximum",
      "His phone shows threatening messages about exposing someone's 'secret affair'",
      "A bottle of expensive whiskey was found half-empty in the van - unusual for Rohit who was teetotaler",
      "Someone had tampered with the van's security camera, covering it with makeup powder",
    ],
    suspects: [
      {
        id: 1,
        name: "Sonia Malhotra",
        age: 29,
        role: "Lead Actress",
        details:
          "The film's heroine and Rohit's rumored girlfriend. Recently discovered Rohit was planning to replace her with a younger actress. Has access to all prop weapons and makeup supplies.",
        motive:
          "Facing career destruction and public humiliation due to replacement and affair exposure",
        alibi:
          "Claims she was in her makeup room getting touch-ups for afternoon shot",
        evidence:
          "Makeup powder found on camera matches her personal kit, and prop master confirms missing knife",
      },
      {
        id: 2,
        name: "Karan Mehra",
        age: 34,
        role: "Producer & Financier",
        details:
          "Film's producer who invested ₹80 crore in the project. Recently discovered Rohit was planning to sell the film rights to another studio. Known to carry expensive whiskey as gifts.",
        motive:
          "Rohit's betrayal would cause massive financial loss and ruin his production house",
        alibi:
          "Says he was on phone with distributors in his office during lunch time",
        evidence:
          "The whiskey bottle is his preferred brand, and he had keys to Rohit's van",
      },
      {
        id: 3,
        name: "Madhav Joshi",
        age: 45,
        role: "Assistant Director",
        details:
          "Rohit's longtime associate and assistant director for 12 films. Recently learned Rohit was planning to expose his gambling debts to financiers. Has intimate knowledge of film sets and security systems.",
        motive:
          "Rohit threatened to expose his ₹50 lakh gambling debts, destroying his career",
        alibi:
          "Claims he was coordinating with technical crew for afternoon shoot setup",
        evidence:
          "He knew exactly how to disable the security camera and had access during setup",
      },
    ],
    killer: 1,
    solution:
      "Sonia Malhotra killed Rohit. The evidence points to her: the makeup powder covering the camera came from her kit, she had access to prop weapons, and she faced both career destruction and public humiliation from Rohit's plans to replace her and expose their affair.",
  },
  {
    id: 4,
    title: "The Hospital Drug Murder",
    description:
      "Dr. Sandeep Nair, Chief Medical Officer at Apollo Hospital, Chennai, was found dead in his office from insulin overdose. He was diabetic but the dosage was lethal. Three medical staff had access to his office and insulin supplies that evening.",
    clues: [
      "Dr. Nair died from massive insulin overdose between 9:00-10:00 PM",
      "His insulin pen was replaced with a concentrated veterinary grade insulin",
      "Security footage shows his office lights going off at 9:45 PM - unusual timing",
      "A medical file about 'organ trafficking investigation' was found hidden in his desk",
      "The insulin vial found in trash had fingerprints wiped clean but residue DNA remained",
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Meera Reddy",
        age: 36,
        role: "Senior Surgeon",
        details:
          "Cardiac surgeon and Dr. Nair's former protégé. Recently demoted after Dr. Nair discovered her involvement in private organ trading. Has access to all medical supplies including veterinary drugs.",
        motive:
          "Dr. Nair was about to expose her illegal organ trafficking to medical board",
        alibi: "Claims she was performing emergency surgery until 10:30 PM",
        evidence:
          "Surgery records show operation ended at 9:30 PM, and she had access to veterinary insulin",
      },
      {
        id: 2,
        name: "Ravi Pillai",
        age: 41,
        role: "Head Pharmacist",
        details:
          "Hospital's chief pharmacist for 8 years. Controls all drug inventory including insulin. Recently caught selling expired medicines to private clinics by Dr. Nair.",
        motive:
          "Dr. Nair threatened to file criminal charges for drug theft and black market sales",
        alibi: "Says he was doing inventory check in pharmacy until 10:15 PM",
        evidence:
          "Has master access to all insulin supplies and could easily obtain veterinary grade drugs",
      },
      {
        id: 3,
        name: "Nurse Priya Das",
        age: 28,
        role: "ICU Head Nurse",
        details:
          "Senior ICU nurse who managed Dr. Nair's diabetes care. Recently discovered by Dr. Nair to be stealing patient medications. Has intimate knowledge of insulin administration.",
        motive:
          "Dr. Nair was planning to terminate her and file police complaint for drug theft",
        alibi: "Claims she was attending to ICU patients during evening shift",
        evidence:
          "ICU records show she left her station for 45 minutes around 9:30 PM",
      },
    ],
    killer: 1,
    solution:
      "Dr. Meera Reddy killed Dr. Nair. As a surgeon, she had access to veterinary grade insulin through her network, she was the primary target of his organ trafficking investigation, and surgery records prove she was free during the murder time window, contradicting her alibi.",
  },
  {
    id: 5,
    title: "The Temple Festival Drowning",
    description:
      "Pandit Ramesh Shastri, head priest of Jagannath Temple, Puri, was found drowned in the temple's sacred pond during Rath Yatra festival. Despite being an excellent swimmer, he mysteriously drowned in shallow water. Three temple committee members were present during the incident.",
    clues: [
      "Pandit Shastri drowned in 4-feet deep water despite being a strong swimmer",
      "Autopsy revealed sedative drugs in his bloodstream - unusual for a religious priest",
      "His sacred thread (janeu) was found torn and floating separately from his body",
      "Temple donation records show ₹25 lakh missing from festival collection funds",
      "Witnesses heard an argument near the pond around 8:00 PM but couldn't identify voices",
    ],
    suspects: [
      {
        id: 1,
        name: "Govind Mishra",
        age: 54,
        role: "Temple Committee Chairman",
        details:
          "Temple's managing committee head for 6 years. Controls all financial decisions and donations. Recently confronted by Pandit Shastri about missing festival funds. Has keys to donation vault.",
        motive:
          "Pandit Shastri discovered his systematic embezzlement of temple donations over years",
        alibi:
          "Claims he was supervising evening aarti preparations in main temple hall",
        evidence:
          "Temple accounts show irregular withdrawals matching his personal bank deposits",
      },
      {
        id: 2,
        name: "Satish Panda",
        age: 43,
        role: "Junior Priest",
        details:
          "Assistant priest waiting for promotion to head priest position for 8 years. Recently passed over again in favor of continuing Pandit Shastri's tenure. Has access to temple medicinal herbs and sedatives.",
        motive:
          "Frustrated by repeated rejection for head priest position despite years of service",
        alibi:
          "Says he was preparing prasad in temple kitchen during evening hours",
        evidence:
          "Kitchen staff confirm he left for 'personal work' from 7:45-8:30 PM",
      },
      {
        id: 3,
        name: "Bimal Rath",
        age: 39,
        role: "Festival Coordinator",
        details:
          "Organizes all temple festivals and manages vendor contracts. Recently accused by Pandit Shastri of taking bribes from vendors. Has access to various festival supplies including cleaning chemicals.",
        motive:
          "Pandit Shastri threatened to expose his vendor bribery scandal to devotee community",
        alibi:
          "Claims he was coordinating with security for crowd control near main gate",
        evidence:
          "Security footage shows him near pond area at 8:10 PM, contrary to his alibi",
      },
    ],
    killer: 3,
    solution:
      "Bimal Rath killed Pandit Shastri. Security footage places him near the pond during the murder time, he had access to sedatives through festival supplies, and he faced public disgrace and criminal charges if his vendor bribery scandal was exposed by the priest.",
  },
  {
    id: 6,
    title: "The Cricket Academy Poisoning",
    description:
      "Coach Suresh Tendulkar, former Ranji player and cricket academy owner in Pune, was found dead in his office from aconitine poisoning after the evening practice session. The poison was mixed in his daily protein shake. Three academy staff had access to his office and nutrition supplies.",
    clues: [
      "Coach Tendulkar died from aconitine (wolfsbane) poisoning between 7:30-8:00 PM",
      "The poison was mixed in his post-workout protein shake kept in office refrigerator",
      "His laptop showed threatening emails about 'exposing match-fixing in youth cricket'",
      "Academy's scholarship fund account shows ₹12 lakh unauthorized withdrawals",
      "A small vial containing wolfsbane extract was found in the parking lot trash bin",
    ],
    suspects: [
      {
        id: 1,
        name: "Ajay Patil",
        age: 31,
        role: "Assistant Coach",
        details:
          "Former Mumbai Ranji player who assists with batting coaching. Recently discovered selling academy selection spots to wealthy parents for ₹5 lakh each. Has botany degree and knowledge of poisonous plants.",
        motive:
          "Coach Tendulkar was about to expose his selection spot selling scam to cricket board",
        alibi:
          "Claims he was conducting fielding practice with junior batch until 8:15 PM",
        evidence:
          "His botany background gives him access to wolfsbane, and bank records show suspicious deposits",
      },
      {
        id: 2,
        name: "Prashant Kulkarni",
        age: 46,
        role: "Academy Manager",
        details:
          "Handles all academy finances and student admissions. Recently caught by Coach Tendulkar misappropriating scholarship funds meant for underprivileged students. Has access to all office areas.",
        motive:
          "Coach threatened to file police complaint for scholarship fund embezzlement",
        alibi:
          "Says he was in accounts office preparing fee collection reports until 8:30 PM",
        evidence:
          "Has master keys to all areas including coach's office and refrigerator",
      },
      {
        id: 3,
        name: "Deepak Sharma",
        age: 27,
        role: "Fitness Trainer",
        details:
          "Academy's fitness and nutrition expert. Prepares all protein shakes and supplements for players and staff. Recently accused by Coach Tendulkar of providing performance-enhancing drugs to players.",
        motive:
          "Coach was planning to report his illegal drug supply to anti-doping authorities",
        alibi: "Claims he was cleaning equipment in gymnasium until 8:00 PM",
        evidence:
          "He prepared the coach's daily protein shake and has access to various supplements",
      },
    ],
    killer: 2,
    solution:
      "Prashant Kulkarni killed Coach Tendulkar. He had master access to the coach's office and refrigerator, faced criminal charges for embezzling scholarship funds, and the ₹12 lakh missing from academy accounts directly pointed to his financial fraud that the coach was about to expose.",
  },
  {
    id: 7,
    title: "The Tea Estate Murder",
    description:
      "Mr. Jagmohan Singh, owner of Green Valley Tea Estate in Darjeeling, was found dead in his bungalow study from cyanide poisoning. The poison was in his evening tea - ironic for a tea estate owner. Three estate managers were present during his daily evening tea routine.",
    clues: [
      "Mr. Singh died from cyanide poisoning in his special Earl Grey tea at 6:30 PM",
      "Only his teacup contained poison - the teapot and other cups were clean",
      "Estate records show he was planning to sell the property to a corporate buyer",
      "A suicide note was found but handwriting experts deemed it forged",
      "His safe was found open with important property documents missing",
    ],
    suspects: [
      {
        id: 1,
        name: "Raman Pradhan",
        age: 49,
        role: "Estate Manager",
        details:
          "Has managed the tea estate for 15 years and lives on the property with his family. Recently learned that Mr. Singh was selling to a corporation that would terminate all local staff. Has been forging signatures for daily operations.",
        motive:
          "Sale to corporation would destroy his livelihood and displace his family from estate housing",
        alibi:
          "Claims he was supervising evening tea plucking in the upper gardens",
        evidence:
          "Workers confirm he was absent from gardens between 6:00-6:45 PM, and he has signature forgery skills",
      },
      {
        id: 2,
        name: "Dr. Anita Ghosh",
        age: 38,
        role: "Quality Control Manager",
        details:
          "Tea tasting expert and quality controller for the estate. Recently discovered Mr. Singh was planning to blame poor quality reports on her to justify selling. Has chemistry background and access to lab chemicals.",
        motive:
          "Mr. Singh was planning to destroy her reputation in the tea industry as scapegoat",
        alibi: "Says she was testing evening batch samples in the quality lab",
        evidence:
          "Lab records show no samples were tested during murder time, and she has access to cyanide compounds",
      },
      {
        id: 3,
        name: "Kailash Rai",
        age: 52,
        role: "Head Accountant",
        details:
          "Estate's financial manager for 12 years. Recently discovered by Mr. Singh to be embezzling funds through fake worker payroll entries. Handles all estate documentation and has access to Mr. Singh's study.",
        motive:
          "Mr. Singh was about to file criminal charges for embezzlement before the sale",
        alibi:
          "Claims he was preparing financial documents for the potential buyers",
        evidence:
          "Had access to study and safe, could forge suicide note, and faced immediate arrest",
      },
    ],
    killer: 3,
    solution:
      "Kailash Rai killed Mr. Singh. He had access to the study and safe, could forge the suicide note with his document handling skills, stole property papers to cover his embezzlement, and faced immediate criminal prosecution that would destroy his life and family.",
  },
  {
    id: 8,
    title: "The University Professor Murder",
    description:
      "Dr. Meera Krishnan, Head of Chemistry Department at Delhi University, was found dead in her laboratory from hydrogen sulfide gas poisoning. The lab's ventilation system had been tampered with. Three faculty members had access to the chemistry lab after hours.",
    clues: [
      "Dr. Krishnan died from hydrogen sulfide poisoning around 9:30 PM in her private lab",
      "The lab's safety ventilation system was deliberately disabled from the main control panel",
      "Her research files on 'academic plagiarism investigation' were found scattered and torn",
      "Security card logs show three people accessed the chemistry building after 9:00 PM",
      "A fake gas leak emergency was reported to delay security response by 20 minutes",
    ],
    suspects: [
      {
        id: 1,
        name: "Prof. Rajesh Verma",
        age: 44,
        role: "Associate Professor",
        details:
          "Senior chemistry professor competing for department head position. Recently accused by Dr. Krishnan of plagiarizing research papers from international journals. Has expertise in gas chemistry and safety systems.",
        motive:
          "Dr. Krishnan was about to present plagiarism evidence to university committee, ending his career",
        alibi: "Claims he was grading papers in his office until 10:00 PM",
        evidence:
          "His office was empty when security checked, and he has detailed knowledge of ventilation systems",
      },
      {
        id: 2,
        name: "Dr. Sunita Agarwal",
        age: 36,
        role: "Assistant Professor",
        details:
          "Junior faculty member whose PhD thesis was recently questioned by Dr. Krishnan for data fabrication. Facing potential PhD revocation and career termination. Has access to all lab equipment and safety controls.",
        motive:
          "Dr. Krishnan's investigation would revoke her PhD and destroy her academic career",
        alibi:
          "Says she was conducting late evening experiments in organic chemistry lab",
        evidence:
          "Organic lab shows no signs of recent use, and she knew how to disable safety systems",
      },
      {
        id: 3,
        name: "Arun Kumar",
        age: 29,
        role: "Lab Technician",
        details:
          "Senior lab technician responsible for chemical storage and safety systems. Recently caught by Dr. Krishnan stealing expensive laboratory chemicals to sell to private coaching centers. Has master access to all controls.",
        motive:
          "Dr. Krishnan was filing police complaint for chemical theft, facing immediate termination and arrest",
        alibi: "Claims he was doing inventory check in chemical storage room",
        evidence:
          "Storage records show no inventory was done, and he has access to gas cylinders and ventilation controls",
      },
    ],
    killer: 3,
    solution:
      "Arun Kumar killed Dr. Krishnan. As lab technician, he had master access to safety systems and gas supplies, faced immediate criminal charges for chemical theft, and could easily disable ventilation while creating the fake emergency call to delay rescue response.",
  },
  // Additional 22 cases to concatenate with existing gameScenarios array

  {
    id: 9,
    title: "The Jewelry Store Heist Murder",
    description:
      "Mohan Jewelers owner Ravi Mohan was found shot dead in his jewelry store vault during Diwali shopping season. The murder occurred during a staged robbery, but no jewelry was actually stolen. Three people had access to the store that evening.",
    clues: [
      "Ravi was shot execution-style with his own licensed revolver kept in the store",
      "The vault was opened with correct combination - no signs of forced entry",
      "₹8 lakh cash was left untouched while fake jewelry worth ₹2 lakh was scattered around",
      "Store's CCTV was professionally disabled 10 minutes before the murder",
      "Insurance claim forms for ₹50 lakh were found pre-filled and dated for next day",
    ],
    suspects: [
      {
        id: 1,
        name: "Suresh Mohan",
        age: 38,
        role: "Younger Brother & Partner",
        details:
          "Co-owner of the jewelry business with mounting gambling debts. Recently discovered that Ravi was planning to buy out his share. Has access to vault combination and store weapons.",
        motive:
          "Desperately needed insurance money for gambling debts and faced buyout by his brother",
        alibi:
          "Claims he was at card game in friend's house during murder time",
        evidence:
          "Gambling friends confirm he left the game for 2 hours during murder window",
      },
      {
        id: 2,
        name: "Deepika Mohan",
        age: 35,
        role: "Store Manager & Ravi's Wife",
        details:
          "Manages daily operations and has full access to store systems. Recently discovered Ravi's affair with assistant. Knows all security protocols and insurance procedures.",
        motive:
          "Ravi was planning to divorce her for his assistant and leave her with nothing",
        alibi: "Says she was at her mother's house for Diwali preparations",
        evidence:
          "Mother confirms she left early claiming 'emergency at store' around murder time",
      },
      {
        id: 3,
        name: "Vikram Shetty",
        age: 42,
        role: "Security Consultant",
        details:
          "Former police officer who installed and maintains store security systems. Recently terminated by Ravi after being caught selling security schedules to local thieves.",
        motive:
          "Revenge against Ravi for destroying his security business reputation",
        alibi: "Claims he was drinking alone at home after losing his contract",
        evidence:
          "Has detailed knowledge of security systems and was seen near the store at 8 PM",
      },
    ],
    killer: 1,
    solution:
      "Suresh Mohan killed his brother Ravi. He had access to the vault combination, knew about the weapon, left his alibi for 2 hours during the murder, and desperately needed the insurance money to pay his gambling debts while preventing his buyout.",
  },

  {
    id: 10,
    title: "The Beauty Parlor Acid Attack",
    description:
      "Sunita Kapoor, owner of 'Glamour Beauty Parlor' in Chandigarh, was found dead from sulfuric acid burns in her treatment room. The acid was thrown while she was giving a facial treatment to a client. Three staff members were present during the evening shift.",
    clues: [
      "Sunita died from severe acid burns between 7:00-7:30 PM during peak hours",
      "The acid was industrial grade sulfuric acid, not cosmetic grade",
      "Her appointment book shows a 'VIP client' booking that doesn't exist in records",
      "Recent harassment complaints were filed against a former employee",
      "The parlor's chemical storage room was found with broken lock",
    ],
    suspects: [
      {
        id: 1,
        name: "Pooja Sharma",
        age: 26,
        role: "Senior Beautician",
        details:
          "Lead beautician recently fired by Sunita for stealing expensive cosmetics. Has chemistry background and knows all chemical storage locations. Recently threatened Sunita publicly.",
        motive:
          "Fired for theft and blacklisted from other parlors, destroying her career prospects",
        alibi: "Claims she was at home applying for jobs online",
        evidence:
          "Neighbors confirm she left house at 6:30 PM, and she has chemistry knowledge for acid handling",
      },
      {
        id: 2,
        name: "Neelam Devi",
        age: 34,
        role: "Facial Specialist",
        details:
          "Experienced facial treatment expert who discovered Sunita was planning to replace her with a younger, cheaper beautician. Has access to all treatment rooms and chemical supplies.",
        motive:
          "About to lose job and clientele to younger replacement after 8 years of service",
        alibi: "Says she was preparing treatment room for next client",
        evidence:
          "No next client was scheduled, and she was alone in chemical storage area at 6:45 PM",
      },
      {
        id: 3,
        name: "Rakesh Kumar",
        age: 41,
        role: "Maintenance & Cleaner",
        details:
          "Handles cleaning and maintenance of parlor equipment. Recently caught by Sunita taking photos of female clients during treatments. Faces criminal charges and job termination.",
        motive:
          "Sunita was filing police complaint for voyeurism, leading to arrest and social disgrace",
        alibi:
          "Claims he was cleaning the reception area during treatment time",
        evidence:
          "Reception was already clean, and he had master keys to chemical storage",
      },
    ],
    killer: 3,
    solution:
      "Rakesh Kumar killed Sunita. He faced criminal charges for voyeurism, had access to industrial chemicals through maintenance work, and created the fake VIP appointment to ensure Sunita would be alone and vulnerable during the attack.",
  },

  {
    id: 11,
    title: "The Textile Mill Owner Murder",
    description:
      "Ramesh Agarwal, owner of Agarwal Textiles in Coimbatore, was found electrocuted in his office during night shift operations. The electrical panel had been tampered with to create a lethal trap. Three factory supervisors were working the night shift.",
    clues: [
      "Ramesh was electrocuted by a rigged electrical switch in his office around 11 PM",
      "The electrical panel was professionally modified to bypass safety circuits",
      "Factory union strike notices were found hidden in his desk drawer",
      "Recent worker safety complaints were filed against the factory with labor department",
      "His life insurance policy was recently increased to ₹2 crore",
    ],
    suspects: [
      {
        id: 1,
        name: "Krishnan Pillai",
        age: 47,
        role: "Electrical Supervisor",
        details:
          "Chief electrician managing all factory electrical systems. Recently demoted by Ramesh after workers complained about unsafe electrical conditions. Has complete knowledge of electrical panels.",
        motive:
          "Blamed by Ramesh for safety violations and faced termination before retirement",
        alibi:
          "Claims he was checking machinery on factory floor during night rounds",
        evidence:
          "No workers saw him on rounds, and electrical modifications required expert knowledge",
      },
      {
        id: 2,
        name: "Mala Agarwal",
        age: 43,
        role: "Factory Manager & Ramesh's Wife",
        details:
          "Co-manages factory operations and recently increased Ramesh's life insurance. Discovered Ramesh was planning to sell factory to foreign company, eliminating local jobs.",
        motive:
          "Ramesh's factory sale would destroy local community and her social standing",
        alibi:
          "Says she was in quality control section checking fabric batches",
        evidence:
          "Quality logs show no inspections that night, and she knew Ramesh's office routine",
      },
      {
        id: 3,
        name: "Murugan Selvan",
        age: 39,
        role: "Production Supervisor",
        details:
          "Supervises night shift production and worker relations. Recently caught by Ramesh selling factory products illegally to competitors. Faces criminal charges and job loss.",
        motive:
          "Ramesh was filing police complaint for theft and industrial espionage",
        alibi: "Claims he was monitoring production line throughout the night",
        evidence:
          "Production records show line was stopped for 45 minutes during murder time",
      },
    ],
    killer: 1,
    solution:
      "Krishnan Pillai killed Ramesh. As electrical supervisor, he had expert knowledge to rig the deadly trap, faced termination for safety violations, and no workers could verify his alibi during the critical time period.",
  },

  {
    id: 12,
    title: "The Call Center Night Shift Murder",
    description:
      "Pradeep Singh, night shift manager at TechServe Call Center in Bangalore, was found strangled with a phone cable in his cabin. The murder occurred during a power outage when backup generators failed. Three team leads were on duty during the night shift.",
    clues: [
      "Pradeep was strangled with a phone cable during 20-minute power outage at 2:30 AM",
      "His computer showed emails about 'employee data theft investigation'",
      "The backup generator was manually switched off from the basement",
      "CCTV system failed exactly when power went out - too convenient to be accidental",
      "Employee salary account access logs show unauthorized login attempts",
    ],
    suspects: [
      {
        id: 1,
        name: "Rohit Jain",
        age: 31,
        role: "Technical Team Lead",
        details:
          "Manages IT systems and has access to all technical areas including basement. Recently caught by Pradeep hacking into employee salary accounts to steal personal information.",
        motive:
          "Pradeep was about to report him for identity theft and financial fraud",
        alibi: "Claims he was troubleshooting system issues at his workstation",
        evidence:
          "His workstation shows no activity during power outage, and he has basement access",
      },
      {
        id: 2,
        name: "Anjali Nair",
        age: 28,
        role: "Customer Service Lead",
        details:
          "Senior customer service representative recently promoted to team lead. Discovered by Pradeep to be selling customer data to marketing companies for extra income.",
        motive:
          "Faced criminal charges for data privacy violations and immediate termination",
        alibi:
          "Says she was handling escalated customer calls during power outage",
        evidence: "Call logs show no escalated calls during outage period",
      },
      {
        id: 3,
        name: "Vikash Kumar",
        age: 26,
        role: "Quality Assurance Lead",
        details:
          "Monitors call quality and employee performance. Recently discovered by Pradeep selling positive performance reviews to underperforming employees for money.",
        motive:
          "Pradeep was planning to file corruption charges, destroying his career",
        alibi: "Claims he was reviewing call recordings in the quality room",
        evidence:
          "Quality room computers were offline during power outage, making work impossible",
      },
    ],
    killer: 1,
    solution:
      "Rohit Jain killed Pradeep. He had technical knowledge to disable the generator and CCTV, faced serious charges for hacking salary accounts, and his alibi of working during a power outage was impossible to verify.",
  },

  {
    id: 13,
    title: "The Restaurant Poisoning Case",
    description:
      "Chef Arjun Reddy, owner of 'Spice Garden' restaurant in Hyderabad, was found dead from oleander poisoning in his kitchen after the dinner service. The poison was in his tasting spoon used for quality checking. Three kitchen staff were present during evening service.",
    clues: [
      "Chef Arjun died from oleander poisoning around 10:30 PM after tasting a curry",
      "Oleander leaves were found chopped and mixed in the curry base stock",
      "Restaurant's herb garden shows freshly cut oleander bush behind the building",
      "Food safety inspection reports show recent violations and threat of closure",
      "His recipe notebook contained threatening notes about 'exposing kitchen secrets'",
    ],
    suspects: [
      {
        id: 1,
        name: "Sunil Varma",
        age: 34,
        role: "Sous Chef",
        details:
          "Assistant chef and Arjun's cooking partner for 5 years. Recently discovered that Arjun was selling their joint recipes to competitor restaurants without sharing profits.",
        motive:
          "Arjun was stealing and selling their collaborative recipes, cheating him of rightful earnings",
        alibi: "Claims he was preparing desserts in the pastry section",
        evidence:
          "Pastry section was empty during murder time, and he knew Arjun's tasting routine",
      },
      {
        id: 2,
        name: "Lakshmi Devi",
        age: 41,
        role: "Head Cook",
        details:
          "Senior cook who prepares all curry bases and stocks. Recently threatened by Arjun with termination for using expired ingredients to save costs and increase her profit margins.",
        motive:
          "Faced job loss and criminal charges for food safety violations",
        alibi: "Says she was cleaning cooking stations after dinner service",
        evidence:
          "She prepared the curry base and had access to oleander from herb garden",
      },
      {
        id: 3,
        name: "Raman Rao",
        age: 29,
        role: "Kitchen Helper",
        details:
          "Junior kitchen staff who handles ingredient preparation and herb cutting. Recently caught by Arjun stealing expensive spices and selling them in local market.",
        motive:
          "Arjun was filing police complaint for theft, leading to arrest and job loss",
        alibi: "Claims he was washing dishes in the back area",
        evidence:
          "Dishwashing area shows no recent activity, and he cut all herbs including oleander",
      },
    ],
    killer: 2,
    solution:
      "Lakshmi Devi killed Chef Arjun. She prepared the curry base where oleander was mixed, faced termination and criminal charges for food safety violations, and had easy access to the herb garden to obtain the poison.",
  },

  {
    id: 14,
    title: "The Motorcycle Showroom Murder",
    description:
      "Suresh Patil, owner of Patil Motors motorcycle showroom in Pune, was found crushed under a falling motorcycle during inventory check. The bike rack had been tampered with to create a deadly trap. Three employees were working late for month-end inventory.",
    clues: [
      "Suresh was crushed by falling motorcycles when rack support was deliberately weakened",
      "Metal bolts holding the rack were partially unscrewed to create delayed collapse",
      "Showroom insurance policy had recent ₹25 lakh increase for 'accidental death'",
      "Sales records show ₹8 lakh missing from customer advance payments",
      "His phone contained threatening messages about loan recovery from finance companies",
    ],
    suspects: [
      {
        id: 1,
        name: "Ganesh Kulkarni",
        age: 36,
        role: "Showroom Manager",
        details:
          "Manages daily operations and customer finances. Recently discovered by Suresh to be diverting customer advance payments to his personal account. Has access to all showroom areas.",
        motive:
          "Suresh was about to file embezzlement charges, leading to arrest and financial ruin",
        alibi: "Claims he was updating inventory records in the office",
        evidence:
          "Office computer shows no activity during murder time, and he had tools to tamper with rack",
      },
      {
        id: 2,
        name: "Priya Patil",
        age: 32,
        role: "Accounts Manager & Suresh's Wife",
        details:
          "Handles showroom accounts and recently increased Suresh's insurance policy. Discovered Suresh was planning to sell showroom to pay debts without consulting her.",
        motive:
          "Suresh's business failure would destroy their family's financial security",
        alibi:
          "Says she was reconciling daily cash collections in accounts room",
        evidence:
          "Cash register shows no reconciliation that evening, and she knew inventory timing",
      },
      {
        id: 3,
        name: "Mahesh Jadhav",
        age: 28,
        role: "Senior Mechanic",
        details:
          "Chief mechanic responsible for showroom maintenance and bike setup. Recently terminated by Suresh for selling showroom parts to unauthorized dealers.",
        motive:
          "Suresh was filing criminal charges for theft, destroying his career and reputation",
        alibi: "Claims he was organizing tools in the service bay",
        evidence:
          "Service bay was already organized, and he had mechanical knowledge to sabotage rack",
      },
    ],
    killer: 1,
    solution:
      "Ganesh Kulkarni killed Suresh. He had mechanical access to tamper with the rack bolts, faced immediate arrest for embezzlement of ₹8 lakh, and his computer alibi was false as no work was done during murder time.",
  },

  {
    id: 15,
    title: "The Wedding Hall Gas Leak Murder",
    description:
      "Mohan Sharma, owner of 'Royal Wedding Palace' in Jaipur, was found dead from gas poisoning in the kitchen during a wedding preparation. The LPG cylinder valve had been tampered with. Three catering staff were preparing for the next day's wedding.",
    clues: [
      "Mohan died from LPG gas poisoning around 11 PM during wedding prep",
      "The gas cylinder valve was deliberately loosened to cause maximum leakage",
      "Kitchen's ventilation fan was switched off from the main electrical panel",
      "Wedding contract files show dispute over ₹5 lakh advance payment",
      "His phone revealed threatening calls from money lenders about loan repayment",
    ],
    suspects: [
      {
        id: 1,
        name: "Kailash Agarwal",
        age: 44,
        role: "Head Caterer",
        details:
          "Chief catering contractor for the wedding hall. Recently cheated by Mohan who took advance payment but hired a cheaper caterer for the next day's wedding, breaking their agreement.",
        motive:
          "Mohan's betrayal cost him ₹5 lakh in advance payments and damaged his catering reputation",
        alibi: "Claims he was checking food preparations in the main kitchen",
        evidence:
          "Kitchen staff confirm he went to gas cylinder area alone for 'safety check'",
      },
      {
        id: 2,
        name: "Sunita Sharma",
        age: 39,
        role: "Hall Manager & Mohan's Wife",
        details:
          "Co-manages wedding hall operations and recently increased Mohan's life insurance. Discovered Mohan was secretly selling the property to pay gambling debts.",
        motive:
          "Mohan's property sale would leave her homeless and financially ruined",
        alibi: "Says she was coordinating with decorators in the main hall",
        evidence:
          "Decorators confirm she left for 'kitchen inspection' during murder time",
      },
      {
        id: 3,
        name: "Raju Meena",
        age: 31,
        role: "Kitchen Supervisor",
        details:
          "Supervises kitchen operations and gas safety. Recently caught by Mohan selling wedding hall's expensive utensils and equipment to other caterers.",
        motive:
          "Mohan was filing theft charges, leading to arrest and job termination",
        alibi: "Claims he was supervising food preparation in cooking area",
        evidence:
          "Cooking area was unattended during murder time, and he has gas system knowledge",
      },
    ],
    killer: 1,
    solution:
      "Kailash Agarwal killed Mohan. He lost ₹5 lakh due to Mohan's betrayal, had direct access to the gas cylinder area during his 'safety check,' and faced complete financial ruin and reputation damage in the catering business.",
  },

  {
    id: 16,
    title: "The Gym Trainer Steroid Murder",
    description:
      "Rohit Khanna, popular fitness trainer at 'Power Gym' in Delhi, was found dead from insulin overdose in the gym's supplement room. He was diabetic but the dose was lethal. Three gym staff had access to the supplement storage and his medical supplies.",
    clues: [
      "Rohit died from massive insulin overdose around 9 PM after evening workout session",
      "His insulin pen was replaced with concentrated veterinary insulin",
      "Gym's supplement room shows signs of recent break-in but nothing was stolen",
      "His phone contained evidence of illegal steroid dealing to gym members",
      "Bank records show large cash deposits inconsistent with trainer salary",
    ],
    suspects: [
      {
        id: 1,
        name: "Vikram Singh",
        age: 35,
        role: "Gym Owner",
        details:
          "Gym owner who recently discovered Rohit was selling illegal steroids to members from the gym premises. Faces license cancellation and legal troubles if exposed.",
        motive:
          "Rohit's steroid dealing threatened to destroy his gym business and land him in legal trouble",
        alibi: "Claims he was meeting with potential investors in his office",
        evidence:
          "No investors visited that evening, and he had access to supplement room and medical supplies",
      },
      {
        id: 2,
        name: "Dr. Anjali Gupta",
        age: 41,
        role: "Gym Nutritionist",
        details:
          "In-house nutritionist who manages member health supplements. Recently threatened by Rohit with exposure for prescribing steroids without proper medical examination.",
        motive:
          "Rohit was blackmailing her about illegal steroid prescriptions, threatening her medical license",
        alibi:
          "Says she was consulting with evening batch members about their diet plans",
        evidence:
          "No diet consultations were scheduled, and she has access to medical-grade insulin",
      },
      {
        id: 3,
        name: "Sanjay Kumar",
        age: 28,
        role: "Assistant Trainer",
        details:
          "Junior trainer working under Rohit's supervision. Recently cut out of steroid dealing profits by Rohit despite helping with distribution to gym members.",
        motive:
          "Rohit cheated him out of steroid money and threatened to blame everything on him if caught",
        alibi:
          "Claims he was conducting personal training session with a member",
        evidence:
          "Member confirms session ended early, and he knew Rohit's insulin routine and storage location",
      },
    ],
    killer: 2,
    solution:
      "Dr. Anjali Gupta killed Rohit. As a medical professional, she had access to veterinary insulin, faced loss of medical license due to Rohit's blackmail, and had no scheduled consultations to support her alibi.",
  },

  {
    id: 17,
    title: "The Auto Rickshaw Driver Union Murder",
    description:
      "Raman Das, president of Auto Rickshaw Drivers Union in Kolkata, was found dead in his auto from carbon monoxide poisoning. The exhaust pipe had been redirected into the passenger compartment. Three union members were present during the evening meeting.",
    clues: [
      "Raman died from carbon monoxide poisoning while sitting in his auto around 8 PM",
      "Exhaust pipe was professionally redirected with rubber tubing into passenger area",
      "Union fund records show ₹3 lakh missing from member contributions",
      "His notebook contained evidence of corruption in auto stand allocation bribes",
      "Recent threats were made against him for exposing illegal meter tampering racket",
    ],
    suspects: [
      {
        id: 1,
        name: "Subhash Mandal",
        age: 46,
        role: "Union Secretary",
        details:
          "Union's financial secretary who controls member contributions and fund distribution. Recently discovered by Raman to be embezzling union funds for personal use.",
        motive:
          "Raman was about to expose his embezzlement of ₹3 lakh union funds to members",
        alibi: "Claims he was distributing union meeting notices to drivers",
        evidence:
          "No meeting notices were distributed, and he has mechanical knowledge for exhaust modification",
      },
      {
        id: 2,
        name: "Gopal Biswas",
        age: 38,
        role: "Union Vice President",
        details:
          "Ambitious union leader who wanted Raman's president position. Recently opposed by Raman for trying to increase corruption in auto stand allocations.",
        motive:
          "Raman blocked his corruption schemes and stood in way of his presidential ambitions",
        alibi: "Says he was meeting with new auto drivers for union membership",
        evidence: "No new memberships were processed that evening",
      },
      {
        id: 3,
        name: "Karim Sheikh",
        age: 52,
        role: "Senior Union Member",
        details:
          "Veteran auto driver and union member for 15 years. Recently exposed by Raman for running illegal meter tampering service charging ₹500 per auto modification.",
        motive:
          "Raman was reporting his meter tampering racket to transport authorities, facing arrest",
        alibi: "Claims he was repairing his auto in the garage area",
        evidence:
          "His auto showed no signs of recent repair, and he has mechanical skills for exhaust work",
      },
    ],
    killer: 3,
    solution:
      "Karim Sheikh killed Raman. He had the mechanical skills to redirect the exhaust pipe, faced criminal charges for the meter tampering racket, and his repair alibi was false as his auto showed no maintenance work.",
  },

  {
    id: 18,
    title: "The Pharmacy Drug Overdose Murder",
    description:
      "Ashok Mishra, owner of Mishra Medical Store in Varanasi, was found dead from morphine overdose in his pharmacy. The controlled drug register showed unauthorized access. Three pharmacy staff had access to the controlled substances vault.",
    clues: [
      "Ashok died from morphine overdose around 10 PM after closing time",
      "Controlled substances vault was opened with correct combination",
      "Drug register shows missing morphine vials worth ₹50,000",
      "His computer revealed investigation into illegal prescription drug sales",
      "Recent complaints filed against pharmacy for selling drugs without prescription",
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Ramesh Tiwari",
        age: 49,
        role: "Consulting Pharmacist",
        details:
          "Licensed pharmacist who manages controlled substances and prescriptions. Recently caught by Ashok selling morphine and other controlled drugs to addicts without prescriptions.",
        motive:
          "Ashok was reporting him to pharmacy board for illegal drug sales, ending his career",
        alibi: "Claims he was at home reviewing patient prescriptions",
        evidence:
          "No prescription reviews were documented, and he knew vault combination and morphine handling",
      },
      {
        id: 2,
        name: "Sunita Mishra",
        age: 44,
        role: "Store Manager & Ashok's Wife",
        details:
          "Co-manages pharmacy operations and has access to all areas. Recently discovered Ashok was planning to sell pharmacy to chain store, eliminating family business.",
        motive:
          "Ashok's sale to corporate chain would destroy their family legacy and her livelihood",
        alibi: "Says she was doing monthly inventory in storage room",
        evidence:
          "Inventory sheets show no work was done, and she had vault access",
      },
      {
        id: 3,
        name: "Raj Kumar Yadav",
        age: 31,
        role: "Pharmacy Assistant",
        details:
          "Senior assistant who handles drug storage and customer service. Recently threatened by Ashok with police complaint for stealing expensive medicines and selling them privately.",
        motive:
          "Ashok was filing theft charges, leading to arrest and career destruction",
        alibi: "Claims he was organizing medicine shelves in main store area",
        evidence:
          "Shelves were already organized, and he had access to controlled substances area",
      },
    ],
    killer: 1,
    solution:
      "Dr. Ramesh Tiwari killed Ashok. As a licensed pharmacist, he had expertise in morphine dosage and administration, faced loss of pharmacy license for illegal drug sales, and had legitimate access to the controlled substances vault.",
  },

  {
    id: 19,
    title: "The Fish Market Vendor Murder",
    description:
      "Shankar Rao, wholesale fish vendor at Crawford Market, Mumbai, was found dead from tetrodotoxin poisoning in his shop. The poison came from improperly handled pufferfish. Three market vendors were working in adjacent stalls during evening hours.",
    clues: [
      "Shankar died from tetrodotoxin (pufferfish poison) around 7 PM during market closing",
      "Pufferfish organs were found mixed in his evening meal box",
      "Market ledger shows dispute over ₹2 lakh fish supply contract with hotel chain",
      "His shop's ice storage showed signs of temperature tampering to spoil fish stock",
      "Recent complaints filed about his practice of selling day-old fish as fresh catch",
    ],
    suspects: [
      {
        id: 1,
        name: "Mohan Patil",
        age: 42,
        role: "Competing Fish Vendor",
        details:
          "Rival fish vendor whose business was suffering due to Shankar's unfair practices. Recently lost major hotel contract to Shankar who undercut prices by selling old fish as fresh.",
        motive:
          "Shankar's unfair competition destroyed his business and livelihood prospects",
        alibi:
          "Claims he was cleaning his stall and preparing for next day's stock",
        evidence:
          "His stall was already clean, and he had access to pufferfish and knowledge of toxin danger",
      },
      {
        id: 2,
        name: "Lata Rao",
        age: 38,
        role: "Fish Cleaner & Shankar's Wife",
        details:
          "Cleans and prepares fish for sale, knows about fish toxins and proper handling. Recently discovered Shankar was planning to abandon family and move to Goa with younger woman.",
        motive:
          "Shankar's abandonment would leave her penniless with children to support",
        alibi: "Says she was preparing evening meal for Shankar in back room",
        evidence:
          "She prepared his meal and had expert knowledge of pufferfish toxin preparation",
      },
      {
        id: 3,
        name: "Ravi Nair",
        age: 35,
        role: "Market Supervisor",
        details:
          "Market area supervisor who monitors vendor activities and resolves disputes. Recently bribed by Shankar to ignore health violations but threatened with exposure when demanding more money.",
        motive:
          "Shankar was threatening to expose their bribery arrangement to market authorities",
        alibi:
          "Claims he was inspecting other vendor stalls for closing time violations",
        evidence:
          "No inspection reports were filed, and he knew about pufferfish shipments",
      },
    ],
    killer: 2,
    solution:
      "Lata Rao killed Shankar. She prepared his evening meal, had expert knowledge of pufferfish toxin preparation from years of fish cleaning, and faced abandonment and poverty when Shankar planned to leave for Goa with another woman.",
  },
];