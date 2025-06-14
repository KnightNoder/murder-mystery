export const gameScenarios = [
  {
    id: 1,
    title: "The Society Secretary's Fall",
    description:
      "Rajesh Malhotra, secretary of Shanti Apartments housing society in Gurgaon, was found dead at the bottom of the building's staircase during the monthly society meeting. What appeared to be an accidental fall was actually murder - someone pushed him down the stairs after hitting him with a cricket bat from the building's sports room.",
    clues: [
      "Rajesh died between 8:30-9:00 PM during the society meeting break",
      "A cricket bat with blood stains was found hidden in the electrical room",
      "The staircase railing was recently oiled, making it extra slippery",
      "Society maintenance fund records show ₹8 lakh missing from recent collections",
      "Rajesh's phone contains voice recordings of heated arguments about fund misuse",
    ],
    suspects: [
      {
        id: 1,
        name: "Priya Sharma",
        age: 34,
        role: "Treasurer & Working Mom",
        details:
          "Society treasurer and software engineer who discovered Rajesh was embezzling maintenance funds for his son's abroad education. Recently had public argument with Rajesh about financial transparency.",
        motive:
          "Rajesh was stealing society money and threatening to blame the missing funds on her",
        alibi:
          "Claims she was in the meeting room discussing water supply issues with other residents",
        evidence:
          "Meeting attendees confirm she stepped out for 'personal call' during break time",
      },
      {
        id: 2,
        name: "Suresh Uncle",
        age: 61,
        role: "Retired Bank Manager & Society Elder",
        details:
          "Retired resident who wanted to become society secretary but was defeated by Rajesh in recent elections. Known for his morning walks and evening cricket sessions with building kids.",
        motive:
          "Felt humiliated by election loss and believed Rajesh was too young and irresponsible for the role",
        alibi: "Says he was smoking on the terrace and enjoying evening breeze",
        evidence:
          "Terrace door was locked during meeting time, and he had access to sports room cricket bats",
      },
      {
        id: 3,
        name: "Karan Gupta",
        age: 29,
        role: "Gym Trainer & Rajesh's Tenant",
        details:
          "Fitness trainer who rents Rajesh's parking space for his gym equipment storage. Recently served eviction notice by Rajesh for unauthorized commercial use of residential premises.",
        motive:
          "Eviction would destroy his home gym business and force him to find expensive commercial space",
        alibi: "Claims he was working out in the building's common gym area",
        evidence:
          "Gym area was empty during break time, and he's physically strong enough to overpower Rajesh",
      },
    ],
    killer: 1,
    solution:
      "Priya Sharma killed Rajesh. As treasurer, she discovered his embezzlement, stepped out during the meeting break when she had opportunity, and faced being framed for the missing ₹8 lakh if Rajesh's theft was exposed.",
  },

  {
    id: 2,
    title: "The Coaching Class Poisoning",
    description:
      "Mr. Anil Verma, owner of 'Success IIT Coaching' in Kota, was found dead in his office from cyanide poisoning mixed in his evening chai. The murder happened during the dinner break between evening batches when the building was mostly empty except for a few staff members and students.",
    clues: [
      "Anil died from cyanide poisoning around 8:15 PM during dinner break",
      "The poison was specifically in his special 'extra strong' chai that he drank daily",
      "His computer showed emails about 'fake placement statistics' investigation",
      "Recent student suicide note mentioned 'false promises and mental torture'",
      "Chemistry lab storage room was found unlocked with potassium cyanide missing",
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Meera Joshi",
        age: 43,
        role: "Chemistry Faculty & Single Mother",
        details:
          "Senior chemistry teacher who discovered Anil was inflating placement statistics and pressuring her to give passing marks to weak students who paid extra fees. Has access to chemistry lab and knows about cyanide preparation.",
        motive:
          "Anil threatened to fire her if she didn't cooperate with grade manipulation, destroying her only source of income",
        alibi:
          "Claims she was preparing chemistry practicals for next day's class",
        evidence:
          "Lab preparation records show no work scheduled, and she has expert knowledge of cyanide",
      },
      {
        id: 2,
        name: "Rohit Malhotra",
        age: 28,
        role: "Admin Manager & Frustrated Employee",
        details:
          "Handles admissions and student records, recently forced by Anil to create fake placement certificates for marketing purposes. Engineering graduate who couldn't clear JEE and ended up in administrative job.",
        motive:
          "Anil was making him forge documents for fake placements, risking criminal charges",
        alibi: "Says he was updating student attendance records in his office",
        evidence: "Computer logs show no attendance updates during murder time",
      },
      {
        id: 3,
        name: "Kavya Sharma",
        age: 17,
        role: "Dropper Student & Coaching Victim",
        details:
          "Second-time JEE aspirant whose previous year's failure led to severe depression. Recently discovered Anil was giving her false hope about admission chances while knowing her preparation was inadequate.",
        motive:
          "Anil's false promises destroyed her mental health and academic future",
        alibi: "Claims she was studying in the library during dinner break",
        evidence:
          "Library was closed during dinner break, and she attended chemistry classes with access to lab",
      },
      {
        id: 4,
        name: "Rajesh Verma",
        age: 51,
        role: "Anil's Business Partner & Co-owner",
        details:
          "Co-founded the coaching institute but recently discovered Anil was planning to sell his share to a corporate chain without his consent. Handles finance and tea/snack supplies for staff.",
        motive:
          "Anil's secret deal would cheat him out of his rightful share of the business",
        alibi:
          "Says he was meeting with a potential corporate buyer in a nearby café",
        evidence:
          "No meeting was scheduled according to café staff, and he supplied Anil's daily chai",
      },
    ],
    killer: 1,
    solution:
      "Dr. Meera Joshi killed Anil. She had access to potassium cyanide from the chemistry lab, faced job loss for refusing to manipulate grades, and her lab preparation alibi was false as no work was scheduled.",
  },

  {
    id: 3,
    title: "The Marriage Bureau Murder",
    description:
      "Mrs. Sunita Agarwal, owner of 'Perfect Match Marriage Bureau' in Delhi, was found strangled with a dupatta in her office during evening consultation hours. The murder weapon was taken from her own collection of sample wedding outfits. Three clients and two staff members were present in the building.",
    clues: [
      "Sunita was strangled with a red silk dupatta between 7:00-7:30 PM",
      "Her computer showed threatening emails about 'fake profiles and cheating'",
      "Client files reveal she was blackmailing married men who used fake profiles",
      "₹15 lakh in cash was found hidden in her office safe - unusual for a small business",
      "CCTV footage shows someone entering her office wearing a ghunghat to hide identity",
    ],
    suspects: [
      {
        id: 1,
        name: "Rakesh Singh",
        age: 35,
        role: "Married IT Professional & Secret Client",
        details:
          "Software engineer who created fake profile claiming to be divorced while still married. Recently caught by Sunita who demanded ₹5 lakh to keep quiet about his deception.",
        motive:
          "Sunita's blackmail threatened to destroy his marriage and career if his wife discovered the truth",
        alibi:
          "Claims he was in official consultation about 'his sister's marriage'",
        evidence:
          "No sister exists according to family records he provided earlier",
      },
      {
        id: 2,
        name: "Pooja Malhotra",
        age: 28,
        role: "Rejected Bride & Vengeful Client",
        details:
          "Dentist whose marriage was cancelled when Sunita revealed false information about her family background to extract more commission from the groom's family.",
        motive:
          "Sunita's greed and manipulation destroyed her marriage prospects and social reputation",
        alibi: "Says she was consulting about new matrimonial requirements",
        evidence: "She was seen wearing a ghunghat similar to the CCTV footage",
      },
      {
        id: 3,
        name: "Neha Gupta",
        age: 24,
        role: "Junior Counselor & Underpaid Employee",
        details:
          "Marriage counselor who discovered Sunita was running fake profile scams and keeping all blackmail money. Recently threatened with termination for questioning unethical practices.",
        motive:
          "Sunita was involving her in illegal activities and threatening to frame her if exposed",
        alibi: "Claims she was organizing client files in the records room",
        evidence:
          "Records room was locked during murder time according to security",
      },
      {
        id: 4,
        name: "Dr. Rajesh Verma",
        age: 42,
        role: "Divorced Doctor & Premium Client",
        details:
          "Successful surgeon paying premium fees for 'guaranteed match' service. Recently discovered Sunita was showing his profile to multiple families simultaneously and collecting fees from all.",
        motive:
          "Sunita was cheating him out of lakhs while destroying his reputation with multiple rejections",
        alibi: "Says he was waiting in consultation room for his appointment",
        evidence: "Appointment book shows no meeting scheduled for that time",
      },
      {
        id: 5,
        name: "Anita Shah",
        age: 39,
        role: "Receptionist & Financial Handler",
        details:
          "Handles client payments and appointments, recently discovered by Sunita to be skimming cash from client fees. Single mother desperately needing job to support two children.",
        motive:
          "Sunita was filing police complaint for theft, leading to arrest and loss of children's support",
        alibi: "Claims she was managing reception and client appointments",
        evidence:
          "Reception desk was unattended during murder time according to other clients",
      },
    ],
    killer: 1,
    solution:
      "Rakesh Singh killed Sunita. He had the strongest motive to stop her blackmail that threatened his marriage, his 'sister's marriage' consultation was fake, and he used the ghunghat disguise to hide his identity while entering her office.",
  },

  {
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
  },

  {
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
  },

  {
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
      "His EpiPen was deliberately removed from his emergency medical kit"
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
        alibi:
          "Says she was managing dinner rush at her restaurant",
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
        alibi:
          "Claims he was making deliveries in different area of the city",
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
        alibi:
          "Says she was handling customer complaint calls from office",
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
        alibi:
          "Claims he was fixing server issues from home office",
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
        alibi:
          "Says she was collecting rent from other tenants in building",
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
        alibi:
          "Claims she was studying for medical exams at library",
        evidence:
          "Library records show no entry logged for her that evening",
      },
    ],
    killer: 1,
    solution:
      "Rajesh Pandey killed Vikash. As area manager, he had access to Vikash's medical records knowing about the peanut allergy, could create fake orders in the system, and faced exposure of his ₹15 lakh ghost kitchen fraud scheme that would end his career and lead to criminal charges.",
  },

  {
    id: 7,
    title: "The Online Tuition Class Murder",
    description:
      "Professor Mahesh Agarwal, owner of 'EduSmart Online Academy', was found dead from electrical shock in his home studio during a live physics class with 200+ students watching. The electrocution was caused by deliberately tampered equipment. The murder happened during peak online class hours when multiple people had access to his home setup.",
    clues: [
      "Mahesh was electrocuted by rigged microphone equipment at 4:15 PM during live class",
      "200+ students witnessed the incident through online video, creating perfect cover",
      "His computer revealed plans to expose someone's 'question paper leak' operation",
      "Recent complaints about fake certificates and inflated student success rates",
      "Home security system was disabled 30 minutes before the class started",
      "Electrical tampering required professional knowledge of audio equipment"
    ],
    suspects: [
      {
        id: 1,
        name: "Anita Sharma",
        age: 29,
        role: "Technical Assistant & Equipment Manager",
        details:
          "Manages all online teaching equipment and technical setup. Recently caught by Mahesh selling recorded classes to competing platforms and leaking question papers for JEE preparation.",
        motive:
          "Mahesh was filing copyright violation case and threatening to expose question paper leaking business",
        alibi:
          "Claims she was monitoring class from technical control room",
        evidence:
          "Control room was empty during class time, and she has expert knowledge of audio equipment",
      },
      {
        id: 2,
        name: "Dr. Rajesh Verma",
        age: 46,
        role: "Physics Co-teacher & Business Partner",
        details:
          "Co-founder of the academy who recently discovered Mahesh was planning to sell the platform to a corporate company without sharing profits. Handles curriculum development and student assessment.",
        motive:
          "Mahesh's secret corporate deal would cheat him out of his rightful business share",
        alibi:
          "Says he was preparing next lesson in his separate home office",
        evidence:
          "No lesson preparation files were created during murder time",
      },
      {
        id: 3,
        name: "Priyanka Malhotra",
        age: 24,
        role: "Student Coordinator & Fake Certificate Creator",
        details:
          "Manages student enrollments and creates completion certificates. Recently discovered by Mahesh to be selling fake JEE qualification certificates to students who failed exams.",
        motive:
          "Mahesh was reporting her certificate fraud to education board and police",
        alibi:
          "Claims she was coordinating with students in online chat during class",
        evidence:
          "Chat logs show no coordination messages during murder time window",
      },
      {
        id: 4,
        name: "Suresh Kumar",
        age: 38,
        role: "Electrician & Home Maintenance Worker",
        details:
          "Regular electrician who maintains Mahesh's home studio equipment. Recently blackmailed by Mahesh after being caught stealing expensive electronic equipment from the setup.",
        motive:
          "Mahesh was filing theft charges, leading to arrest and loss of electrical contractor license",
        alibi:
          "Says he was working on electrical repairs in different part of the house",
        evidence:
          "No electrical work was scheduled, and he has expert knowledge of equipment tampering",
      },
      {
        id: 5,
        name: "Kavya Singh",
        age: 22,
        role: "Content Creator & Plagiarism Accused",
        details:
          "Creates educational content and study materials for the platform. Recently accused by Mahesh of plagiarizing content from international education platforms and selling as original work.",
        motive:
          "Mahesh was planning to expose her plagiarism, destroying her educational content career",
        alibi:
          "Claims she was creating new study materials in her workspace",
        evidence:
          "No new content files were created during the murder time period",
      },
      {
        id: 6,
        name: "Rohit Agarwal",
        age: 31,
        role: "Mahesh's Son & Gambling Addict",
        details:
          "Mahesh's son who has been stealing money from business accounts to fund gambling addiction. Recently caught by Mahesh and threatened with police complaint and disinheritance.",
        motive:
          "Mahesh was planning to file embezzlement charges and cut him from inheritance",
        alibi:
          "Claims he was attending online gambling session during father's class",
        evidence:
          "Gambling site logs show no activity during murder time",
      },
      {
        id: 7,
        name: "Dr. Meera Joshi",
        age: 34,
        role: "Educational Consultant & Rival Platform Owner",
        details:
          "Owns competing online academy and recently lost major corporate contract to Mahesh's platform. Recently discovered by Mahesh to be poaching his premium students with discounted offers.",
        motive:
          "Mahesh was planning legal action for student poaching and corporate interference",
        alibi:
          "Says she was conducting her own online class during murder time",
        evidence:
          "Her platform shows no scheduled classes during that time slot",
      },
    ],
    killer: 1,
    solution:
      "Anita Sharma killed Mahesh. She had expert technical knowledge to tamper with the microphone equipment, was absent from the control room during the live class, and faced criminal charges for question paper leaking and copyright violations that would destroy her career.",
  },

  {
    id: 8,
    title: "The Influencer's Final Post",
    description:
      "Riya Malhotra, a popular lifestyle influencer with 2 million followers, was found dead from cyanide poisoning in her home studio while filming a 'healthy morning routine' video. The poison was in her signature green smoothie that she drank live on camera. Multiple people had access to her home studio setup and smoothie preparation area.",
    clues: [
      "Riya died from cyanide poisoning at 8:45 AM while recording her morning routine video",
      "The poison was specifically in her green smoothie - her daily signature drink",
      "Her phone shows threatening DMs about 'exposing fake brand partnerships' and tax evasion",
      "Recent investigation revealed she was promoting harmful diet products without disclosure",
      "Studio's live stream setup captured everything except 15 minutes of 'technical difficulties'",
      "₹12 lakh in undeclared brand payment cash found hidden in home safe"
    ],
    suspects: [
      {
        id: 1,
        name: "Aakash Verma",
        age: 27,
        role: "Content Manager & Creative Partner",
        details:
          "Manages Riya's content creation and brand partnerships. Recently discovered by Riya selling her personal data and follower information to competing brands for extra income.",
        motive:
          "Riya was terminating their partnership and threatening legal action for data theft",
        alibi:
          "Claims he was editing previous day's content in his home office",
        evidence:
          "No editing activity logged on software during murder time",
      },
      {
        id: 2,
        name: "Prachi Sharma",
        age: 25,
        role: "Personal Assistant & Smoothie Preparer",
        details:
          "Handles Riya's daily schedule and prepares her signature smoothies. Recently caught by Riya stealing expensive products sent by brands for reviews and selling them online.",
        motive:
          "Riya was filing theft charges and planning to destroy her career in influencer industry",
        alibi:
          "Says she was preparing smoothie ingredients in the kitchen",
        evidence:
          "She prepared the poisoned smoothie and had opportunity to add cyanide",
      },
      {
        id: 3,
        name: "Dr. Neha Gupta",
        age: 35,
        role: "Nutritionist & Professional Consultant",
        details:
          "Provides nutrition advice for Riya's health content. Recently threatened by Riya with medical board complaint for endorsing harmful diet products without proper research.",
        motive:
          "Riya's complaint would destroy her medical practice and professional reputation",
        alibi:
          "Claims she was conducting online nutrition consultation with other clients",
        evidence:
          "Client appointment calendar shows no scheduled consultations during murder time",
      },
      {
        id: 4,
        name: "Rohit Malhotra",
        age: 32,
        role: "Riya's Husband & Financial Manager",
        details:
          "Manages Riya's finances and tax planning. Recently discovered by Riya to be hiding income to evade taxes and keeping money in offshore accounts without her knowledge.",
        motive:
          "Riya was planning to expose his tax evasion to authorities, leading to criminal charges",
        alibi:
          "Says he was handling morning business calls with international brands",
        evidence:
          "Phone records show no international calls during murder time window",
      },
      {
        id: 5,
        name: "Kavya Singh",
        age: 23,
        role: "Rival Influencer & Competitor",
        details:
          "Competing lifestyle influencer who recently lost major brand deals to Riya. Recently exposed by Riya for buying fake followers and using plagiarized content.",
        motive:
          "Riya's exposures destroyed her influencer career and brand partnerships",
        alibi:
          "Claims she was creating her own morning routine content at same time",
        evidence:
          "Her social media shows no content posted during murder time period",
      },
      {
        id: 6,
        name: "Suresh Agarwal",
        age: 41,
        role: "Brand Manager & Corporate Representative",
        details:
          "Represents major health supplement brand that Riya was promoting. Recently discovered by Riya that the supplements contained harmful ingredients not disclosed to consumers.",
        motive:
          "Riya was planning to expose supplement dangers, destroying company reputation and causing lawsuits",
        alibi:
          "Says he was attending morning corporate meeting via video call",
        evidence:
          "Corporate calendar shows no meetings scheduled during that time",
      },
      {
        id: 7,
        name: "Anita Verma",
        age: 38,
        role: "Tax Consultant & Financial Advisor",
        details:
          "Handles Riya's tax planning and financial compliance. Recently caught by Riya creating fake expense receipts to reduce tax liability and keeping portion of saved money.",
        motive:
          "Riya was reporting her tax fraud to authorities, leading to license cancellation and arrest",
        alibi:
          "Claims she was preparing tax documents for other clients",
        evidence:
          "No tax preparation work was logged in her system during murder time",
      },
      {
        id: 8,
        name: "Kiran Das",
        age: 29,
        role: "Camera Operator & Technical Crew",
        details:
          "Operates cameras and manages live streaming setup. Recently fired by Riya after being caught recording private moments and selling footage to gossip channels.",
        motive:
          "Riya was filing privacy violation case and threatening to destroy his career in media industry",
        alibi:
          "Claims he was setting up camera equipment for morning shoot",
        evidence:
          "Camera setup was already completed before murder time, and he caused the 15-minute 'technical difficulties'",
      },
    ],
    killer: 2,
    solution:
      "Prachi Sharma killed Riya. She prepared the signature green smoothie daily, had direct access to add cyanide, faced theft charges that would destroy her career in the influencer industry, and her kitchen preparation alibi gave her perfect opportunity to poison the drink.",
  },

  {
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
      "Kitchen's main CCTV camera was disabled during murder time"
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
        alibi:
          "Says he was managing lunch rush at his own kitchen facility",
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
  },

  {
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
      "Security cameras were hacked and showed loop footage during murder time"
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
        evidence:
          "No portfolio reviews were documented during murder time",
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
  },

  {
    id: 11,
    title: "The IPL Fantasy League Murder",
    description:
      "Sachin Malhotra, admin of India's largest IPL fantasy cricket league with 50,000+ members, was found dead from insulin overdose in his gaming setup room during live match commentary. He was diabetic, but someone replaced his insulin with a concentrated lethal dose during the high-stakes playoff match streaming session when lakhs of rupees were at stake.",
    clues: [
      "Sachin died from insulin overdose at 9:30 PM during CSK vs MI playoff match commentary",
      "His insulin pen was switched with veterinary-grade concentrated insulin",
      "Fantasy league platform shows ₹2.5 crore in suspicious betting transactions",
      "Live stream captured 15,000 viewers when technical difficulties started",
      "His phone revealed evidence of 'match-fixing' and 'insider betting' operations",
      "₹45 lakh in cryptocurrency wallets found linked to illegal betting syndicates",
      "Gaming room's biometric lock was bypassed using cloned fingerprints",
      "Match prediction algorithms were manipulated to favor specific betting outcomes"
    ],
    suspects: [
      {
        id: 1,
        name: "Rohit Sharma",
        age: 31,
        role: "Tech Developer & Platform Coder",
        details:
          "Develops fantasy league algorithms and betting systems. Recently caught by Sachin manipulating match prediction codes to favor his own fantasy teams and win prize money consistently.",
        motive:
          "Sachin was planning to expose his algorithm manipulation and file criminal charges for fraud",
        alibi:
          "Claims he was monitoring live platform performance during high-traffic match",
        evidence:
          "Server logs show no monitoring activity, and he has access to biometric security systems",
      },
      {
        id: 2,
        name: "Priya Agarwal",
        age: 28,
        role: "Customer Support Lead & Insider Trading Expert",
        details:
          "Handles customer complaints and payment disputes. Recently discovered by Sachin to be selling team composition and insider information to professional betting syndicates for huge profits.",
        motive:
          "Sachin was reporting her insider trading to cyber crime department, facing arrest",
        alibi:
          "Says she was managing customer complaints during live match issues",
        evidence:
          "Support ticket system shows no activity during murder time window",
      },
      {
        id: 3,
        name: "Dr. Anjali Verma",
        age: 35,
        role: "Medical Advisor & Insulin Expert",
        details:
          "Provides medical consultation for gaming addiction and manages Sachin's diabetes care. Recently threatened by Sachin with medical board complaint for prescribing performance drugs to gaming addicts.",
        motive:
          "Medical license cancellation would destroy her specialized gaming addiction practice",
        alibi:
          "Claims she was attending virtual medical conference during match time",
        evidence:
          "Conference registration shows no login activity, and she has access to veterinary insulin",
      },
      {
        id: 4,
        name: "Kiran Kumar",
        age: 33,
        role: "Payment Gateway Manager & Money Launderer",
        details:
          "Manages financial transactions and payment processing. Recently caught by Sachin laundering illegal betting money through fake fantasy league transactions and cryptocurrency conversions.",
        motive:
          "Sachin was exposing his money laundering operation to financial crime authorities",
        alibi:
          "Says he was processing high-volume match payments and cryptocurrency transfers",
        evidence:
          "Payment gateway logs show automated processing, no manual intervention required",
      },
      {
        id: 5,
        name: "Vikash Singh",
        age: 29,
        role: "Live Streaming Manager & View Manipulation Expert",
        details:
          "Handles live commentary streaming and audience engagement. Recently discovered by Sachin to be inflating viewer numbers using bot farms and selling fake engagement to advertisers.",
        motive:
          "Sachin was terminating advertising contracts and filing fraud charges for fake viewership",
        alibi:
          "Claims he was managing live stream technical issues during match broadcast",
        evidence:
          "Stream technical logs show issues were pre-programmed, and he created the 'technical difficulties'",
      },
      {
        id: 6,
        name: "Sunita Malhotra",
        age: 36,
        role: "Sachin's Wife & Business Co-owner",
        details:
          "Co-manages business operations and recently discovered Sachin was planning to shut down the platform after authorities started investigating illegal betting connections.",
        motive:
          "Platform shutdown would destroy their family business and livelihood",
        alibi:
          "Says she was managing household work and not involved in match commentary",
        evidence:
          "Neighbors confirm she was absent from home during match time",
      },
      {
        id: 7,
        name: "Rajesh Gupta",
        age: 42,
        role: "Betting Syndicate Representative & Criminal Associate",
        details:
          "Represents illegal betting syndicate that was using fantasy league for money laundering. Recently threatened by Sachin with police exposure unless they stopped using his platform.",
        motive:
          "Sachin's police cooperation would destroy entire betting syndicate operation",
        alibi:
          "Claims he was managing betting operations for other cricket matches",
        evidence:
          "Betting records show no other match activity during murder time",
      },
      {
        id: 8,
        name: "Kavya Reddy",
        age: 26,
        role: "Data Analyst & Match Fixing Coordinator",
        details:
          "Analyzes player performance data and creates match predictions. Recently caught by Sachin coordinating with players' associates to fix specific match outcomes for betting profits.",
        motive:
          "Sachin was reporting match-fixing evidence to BCCI and police, leading to criminal charges",
        alibi:
          "Claims she was analyzing real-time match data and updating predictions",
        evidence:
          "Data analysis tools show no active work during murder time period",
      },
      {
        id: 9,
        name: "Arjun Joshi",
        age: 34,
        role: "Security Expert & Biometric System Hacker",
        details:
          "Manages platform security and gaming room access controls. Recently caught by Sachin selling user data and creating backdoors for external hackers to manipulate betting outcomes.",
        motive:
          "Sachin was filing cyber crime case for data theft and security breaches",
        alibi:
          "Says he was monitoring security systems during high-traffic match period",
        evidence:
          "Security monitoring logs show automated systems, and he created the biometric bypass",
      },
      {
        id: 10,
        name: "Deepika Sharma",
        age: 30,
        role: "Cryptocurrency Consultant & Illegal Exchange Operator",
        details:
          "Manages cryptocurrency transactions and digital payment systems. Recently discovered by Sachin to be operating illegal crypto exchange using fantasy league platform as front.",
        motive:
          "Sachin was reporting illegal crypto operations to financial intelligence unit",
        alibi:
          "Claims she was processing cryptocurrency transactions for international betting clients",
        evidence:
          "Crypto transaction logs show automated processing during murder time",
      },
    ],
    killer: 3,
    solution:
      "Dr. Anjali Verma killed Sachin. As his medical advisor, she had access to his diabetes medication and could obtain veterinary insulin, faced medical license cancellation for prescribing illegal performance drugs, and her virtual conference alibi was false as no login activity was recorded.",
  },

  {
    id: 12,
    title: "The YouTube Channel Empire Murder",
    description:
      "Rahul Kapoor, owner of 'TechGuru India' YouTube channel with 5 million subscribers, was found dead from hydrogen sulfide poisoning in his home studio during a live product review stream. The poison gas was released through the studio's ventilation system during peak viewership hours when 200,000+ people were watching live.",
    clues: [
      "Rahul died from hydrogen sulfide gas poisoning at 8:45 PM during live iPhone review stream",
      "Gas was released through studio's HVAC system using remote-controlled valves",
      "Live stream captured his death with 200,000+ viewers witnessing the incident",
      "His phone revealed evidence of 'fake product reviews' and 'paid promotional fraud'",
      "Recent investigation showed ₹1.2 crore in undisclosed brand partnerships",
      "Studio's air filtration system was professionally modified to distribute poison gas",
      "Multiple fake YouTube channels were found copying his content with monetization theft",
      "Brand partnership contracts contained illegal exclusivity clauses worth crores",
      "Advanced deepfake technology was being used to create fake celebrity endorsements"
    ],
    suspects: [
      {
        id: 1,
        name: "Anita Sharma",
        age: 29,
        role: "Video Editor & Content Theft Mastermind",
        details:
          "Edits all videos and manages content production. Recently caught by Rahul stealing original content ideas and selling them to competing tech channels for huge profits.",
        motive:
          "Rahul was filing copyright violation case and threatening to destroy her editing career",
        alibi:
          "Claims she was editing next day's video content in separate editing room",
        evidence:
          "Video editing software shows no activity, and she has access to studio HVAC controls",
      },
      {
        id: 2,
        name: "Dr. Vikash Verma",
        age: 36,
        role: "Chemical Engineer & HVAC System Expert",
        details:
          "Manages studio's technical equipment and air quality systems. Recently discovered by Rahul to be selling technical specifications of reviewed products to competing manufacturers.",
        motive:
          "Rahul was reporting industrial espionage to tech companies, leading to criminal charges",
        alibi:
          "Says he was monitoring air quality and ventilation during live stream",
        evidence:
          "Air quality monitoring was automated, and he has expert knowledge of gas distribution systems",
      },
      {
        id: 3,
        name: "Priya Malhotra",
        age: 27,
        role: "Brand Partnership Manager & Fraud Coordinator",
        details:
          "Negotiates brand deals and manages sponsored content. Recently caught by Rahul creating fake engagement metrics and selling inflated sponsorship packages to brands.",
        motive:
          "Rahul was exposing her sponsorship fraud to brand partners, destroying her marketing career",
        alibi:
          "Claims she was negotiating with international brands during live stream",
        evidence:
          "No international calls logged, and she knew about Rahul's streaming schedule",
      },
      {
        id: 4,
        name: "Rohit Gupta",
        age: 33,
        role: "Tech Consultant & Product Information Seller",
        details:
          "Provides technical insights for product reviews and has early access to unreleased products. Recently caught by Rahul selling confidential product information to tech blogs before official reviews.",
        motive:
          "Rahul was reporting him to tech companies for NDA violations, ending consulting career",
        alibi:
          "Says he was researching technical specifications for upcoming reviews",
        evidence:
          "No research activity logged in his systems during murder time",
      },
      {
        id: 5,
        name: "Kavya Singh",
        age: 25,
        role: "Social Media Manager & Fake Engagement Creator",
        details:
          "Manages social media promotion and audience engagement. Recently discovered by Rahul to be running bot farms creating fake views, likes, and comments for monetary gain.",
        motive:
          "Rahul was reporting bot farm operations to YouTube, leading to channel termination and legal action",
        alibi:
          "Claims she was managing live chat moderation during stream",
        evidence:
          "Chat moderation was automated with AI tools during live streams",
      },
      {
        id: 6,
        name: "Sunita Kapoor",
        age: 34,
        role: "Rahul's Wife & Financial Manager",
        details:
          "Manages channel finances and tax planning. Recently discovered Rahul was planning to sell the channel to corporate media house without sharing profits with family.",
        motive:
          "Channel sale would leave her with nothing after years of supporting his career",
        alibi:
          "Says she was managing household affairs and avoiding live stream area",
        evidence:
          "Phone location data shows she was near studio during murder time",
      },
      {
        id: 7,
        name: "Kiran Agarwal",
        age: 31,
        role: "Competing YouTuber & Content Saboteur",
        details:
          "Runs competing tech channel 'TechMaster Pro' and recently lost major sponsorships when Rahul exposed his fake product testing and plagiarized reviews.",
        motive:
          "Rahul's exposures destroyed his channel growth and brand partnerships",
        alibi:
          "Claims he was creating his own live stream competing with Rahul's timing",
        evidence:
          "No live stream was conducted, and his channel shows no activity",
      },
      {
        id: 8,
        name: "Rajesh Joshi",
        age: 38,
        role: "MCN Representative & Revenue Manipulator",
        details:
          "Represents Multi-Channel Network that manages Rahul's monetization. Recently caught by Rahul manipulating ad revenue reports and keeping larger percentage than contracted.",
        motive:
          "Rahul was terminating MCN contract and filing fraud charges for revenue theft",
        alibi:
          "Says he was analyzing revenue reports for multiple channels during stream",
        evidence:
          "Revenue analysis tools show no active work during murder time",
      },
      {
        id: 9,
        name: "Deepika Reddy",
        age: 28,
        role: "Deepfake Technology Expert & Illegal Content Creator",
        details:
          "Creates AI-generated content and manages advanced video technology. Recently caught by Rahul using deepfake technology to create fake celebrity endorsements for fraudulent products.",
        motive:
          "Rahul was reporting deepfake fraud to cyber crime authorities, leading to arrest",
        alibi:
          "Claims she was rendering AI-generated content for other projects",
        evidence:
          "Rendering processes were automated and didn't require manual intervention",
      },
      {
        id: 10,
        name: "Arjun Malhotra",
        age: 32,
        role: "Product Manufacturer Representative & Bribery Coordinator",
        details:
          "Represents tech manufacturing company that was bribing Rahul for positive reviews. Recently threatened by Rahul with exposure unless they stopped demanding fake positive reviews for defective products.",
        motive:
          "Rahul's exposure would destroy company reputation and lead to product liability lawsuits",
        alibi:
          "Says he was attending company board meeting during live stream",
        evidence:
          "Board meeting was cancelled, and company calendar shows no scheduled meetings",
      },
    ],
    killer: 2,
    solution:
      "Dr. Vikash Verma killed Rahul. As a chemical engineer managing the HVAC system, he had expert knowledge to modify the ventilation for gas distribution, faced criminal charges for industrial espionage, and his air quality monitoring alibi was false as the system was automated.",
  },

  {
    id: 13,
    title: "The EdTech Startup Boardroom Poisoning",
    description:
      "Arjun Agarwal, CEO of 'LearnSmart EdTech' valued at ₹500 crore, was found dead from ricin poisoning during a crucial board meeting with international investors. The poison was in his coffee served during the presentation about company's IPO plans. Multiple co-founders, investors, and employees were present in the boardroom.",
    clues: [
      "Arjun died from ricin poisoning at 3:30 PM during live investor presentation via video call",
      "Poison was specifically in his personalized coffee mug that only he used",
      "Board meeting was discussing ₹2000 crore IPO with international investment firms",
      "His laptop revealed evidence of 'fake student enrollment' and 'inflated course completion rates'",
      "Recent audit discovered ₹150 crore in fictitious revenue from non-existent students",
      "Company's AI teaching algorithms were stealing content from premium international platforms",
      "Multiple fake company certifications were being sold to students who never took courses",
      "Boardroom's coffee machine was tampered with to deliver poison to specific mug",
      "International investors were planning due diligence that would expose all frauds",
      "Ricin was extracted from castor beans grown in company's 'wellness garden'"
    ],
    suspects: [
      {
        id: 1,
        name: "Priya Sharma",
        age: 32,
        role: "Co-founder & CTO",
        details:
          "Technical co-founder who built the learning platform. Recently discovered by Arjun to be stealing AI algorithms from international EdTech companies and faces criminal charges for intellectual property theft.",
        motive:
          "Arjun was planning to expose her algorithm theft to international partners during IPO process",
        alibi:
          "Claims she was demonstrating technical features to investors via video call",
        evidence:
          "Technical demonstration was pre-recorded, and she prepared Arjun's personalized coffee",
      },
      {
        id: 2,
        name: "Dr. Rajesh Verma",
        age: 45,
        role: "Chief Academic Officer & Content Fraudster",
        details:
          "Manages curriculum development and academic partnerships. Recently caught by Arjun selling fake degree certificates and creating non-existent university partnerships for credibility.",
        motive:
          "Arjun was reporting academic fraud to education ministry, ending his career in education sector",
        alibi:
          "Says he was presenting academic partnerships and course statistics to investors",
        evidence:
          "Academic presentation contained fabricated data that he couldn't defend under questioning",
      },
      {
        id: 3,
        name: "Kavya Singh",
        age: 28,
        role: "CFO & Financial Fraudster",
        details:
          "Manages company finances and investor relations. Recently discovered by Arjun to be creating fake student enrollments and inflating revenue numbers for investor presentations.",
        motive:
          "Arjun was planning to expose her financial fraud during IPO due diligence process",
        alibi:
          "Claims she was presenting financial projections and revenue models to investors",
        evidence:
          "Financial models were automated presentations, and she had access to coffee preparation area",
      },
      {
        id: 4,
        name: "Rohit Malhotra",
        age: 34,
        role: "VP Sales & Fake Certification Seller",
        details:
          "Handles corporate sales and enterprise partnerships. Recently caught by Arjun selling fake professional certifications to working professionals without them completing courses.",
        motive:
          "Arjun was filing criminal charges for certificate fraud and educational scam",
        alibi:
          "Says he was discussing enterprise client testimonials and case studies",
        evidence:
          "Client testimonials were fabricated, and he knew about Arjun's coffee preferences",
      },
      {
        id: 5,
        name: "Sunita Agarwal",
        age: 36,
        role: "Arjun's Wife & HR Head",
        details:
          "Manages human resources and internal operations. Recently discovered Arjun was planning to remove her from company leadership before IPO and divorce her for a younger employee.",
        motive:
          "Arjun's IPO plans would leave her with minimal shares and destroy her personal and professional life",
        alibi:
          "Claims she was managing boardroom logistics and serving refreshments to attendees",
        evidence:
          "She served Arjun's coffee and had intimate knowledge of his daily routines",
      },
      {
        id: 6,
        name: "Kiran Kumar",
        age: 30,
        role: "VP Technology & Data Theft Coordinator",
        details:
          "Manages platform technology and student data systems. Recently caught by Arjun selling student personal data to marketing companies and educational loan sharks.",
        motive:
          "Arjun was reporting data privacy violations to cyber crime authorities",
        alibi:
          "Says he was managing technical aspects of video call with international investors",
        evidence:
          "Video call technology was managed by external AV team during meeting",
      },
      {
        id: 7,
        name: "Dr. Anjali Gupta",
        age: 37,
        role: "International Relations Head & Partnership Fraudster",
        details:
          "Manages global partnerships and accreditation claims. Recently discovered by Arjun to be creating fake international university partnerships and selling admission guarantees.",
        motive:
          "Arjun was exposing her fake partnerships to international investors, destroying global expansion plans",
        alibi:
          "Claims she was coordinating with international partners via video conference",
        evidence:
          "No international partners were actually connected during the call",
      },
      {
        id: 8,
        name: "Vikash Reddy",
        age: 33,
        role: "Venture Capitalist & Insider Trading Expert",
        details:
          "Represents major VC firm investing in the company. Recently caught by Arjun using insider information to manipulate EdTech sector stocks and profit from market movements.",
        motive:
          "Arjun was reporting insider trading to SEBI, leading to massive financial penalties and career destruction",
        alibi:
          "Says he was evaluating investment terms and IPO valuation models",
        evidence:
          "Investment evaluation was completed before meeting, and he had access to refreshment area",
      },
      {
        id: 9,
        name: "Deepika Joshi",
        age: 29,
        role: "Marketing Head & Student Exploitation Coordinator",
        details:
          "Manages marketing campaigns and student acquisition. Recently caught by Arjun running predatory loan schemes targeting desperate students with false job placement guarantees.",
        motive:
          "Arjun was exposing her predatory practices to consumer protection authorities",
        alibi:
          "Claims she was presenting marketing success metrics and student testimonials",
        evidence:
          "Student testimonials were fake, created using AI voice synthesis technology",
      },
      {
        id: 10,
        name: "Arjuna Verma",
        age: 31,
        role: "Quality Assurance Head & Content Piracy Coordinator",
        details:
          "Manages course quality and content standards. Recently caught by Arjun systematically pirating premium courses from international platforms and selling them as original content.",
        motive:
          "Arjun was filing international copyright violation case, leading to massive legal liability",
        alibi:
          "Says he was ensuring technical quality of presentation and managing AV equipment",
        evidence:
          "AV equipment was managed by external team, and he had botany knowledge for ricin extraction",
      },
      {
        id: 11,
        name: "Ravi Agarwal",
        age: 39,
        role: "Board Member & Regulatory Compliance Fraudster",
        details:
          "Independent board member responsible for compliance and governance. Recently discovered by Arjun to be taking bribes from regulatory authorities to overlook compliance violations.",
        motive:
          "Arjun was exposing his regulatory bribery to board of directors and authorities",
        alibi:
          "Claims he was reviewing governance policies and compliance frameworks during meeting",
        evidence:
          "Governance review was scheduled for after the investor presentation",
      },
    ],
    killer: 1,
    solution:
      "Priya Sharma killed Arjun. As co-founder and CTO, she had intimate access to prepare his personalized coffee, faced exposure of massive intellectual property theft during the IPO due diligence, and her technical demonstration alibi was false as it was pre-recorded content.",
  },

  {
    id: 14,
    title: "The Cryptocurrency Exchange Scandal Murder",
    description:
      "Vikram Singh, founder of 'CoinTradeIndia' cryptocurrency exchange, was found dead from polonium-210 poisoning in his secure trading floor office. The radioactive poison was placed in his daily protein shake. The murder occurred during a live trading session when the exchange was processing ₹100 crore+ in daily transactions.",
    clues: [
      "Vikram died from polonium-210 poisoning at 11:30 AM during peak trading hours",
      "Radioactive poison was mixed in his post-workout protein shake kept in office refrigerator",
      "Live trading floor cameras captured his collapse during active cryptocurrency transactions",
      "His encrypted phone revealed evidence of 'fake cryptocurrency creation' and 'pump-and-dump schemes'",
      "Recent investigation showed ₹500 crore in missing customer funds from exchange wallets",
      "Multiple fake cryptocurrency tokens were being created and sold to unsuspecting investors",
      "Exchange's cold storage wallets were found to be empty despite showing customer balances",
      "Polonium-210 source traced to medical equipment supplier with inside connections",
      "International money laundering investigation was closing in on exchange operations",
      "Advanced blockchain forensics revealed systematic customer fund diversion to personal accounts",
      "Government cryptocurrency ban was imminent, threatening to shut down entire operation"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Priya Malhotra",
        age: 33,
        role: "Chief Security Officer & Blockchain Expert",
        details:
          "Manages exchange security and blockchain technology. Recently caught by Vikram manipulating blockchain transactions and stealing customer cryptocurrency for personal trading profits.",
        motive:
          "Vikram was filing criminal charges for cryptocurrency theft and blockchain manipulation",
        alibi:
          "Claims she was monitoring security systems during active trading session",
        evidence:
          "Security monitoring was automated, and she had access to medical suppliers through her PhD in nuclear chemistry",
      },
      {
        id: 2,
        name: "Rohit Verma",
        age: 35,
        role: "CTO & Smart Contract Fraudster",
        details:
          "Develops exchange technology and smart contract systems. Recently discovered by Vikram to be creating backdoors in smart contracts that automatically steal percentage of transactions.",
        motive:
          "Vikram was exposing his smart contract fraud to international blockchain community",
        alibi:
          "Says he was debugging critical trading algorithms during market volatility",
        evidence:
          "Trading algorithms were running automatically without manual intervention required",
      },
      {
        id: 3,
        name: "Kavya Sharma",
        age: 29,
        role: "CFO & Customer Fund Embezzler",
        details:
          "Manages exchange finances and customer fund custody. Recently caught by Vikram systematically transferring customer funds to offshore accounts and creating fake balance sheets.",
        motive:
          "Vikram was reporting massive embezzlement to financial intelligence unit and international authorities",
        alibi:
          "Claims she was reconciling customer deposits and withdrawal requests",
        evidence:
          "Financial reconciliation was automated with AI tools, and she prepared Vikram's daily protein shake",
      },
      {
        id: 4,
        name: "Kiran Kumar",
        age: 31,
        role: "Head of Trading & Market Manipulator",
        details:
          "Manages institutional trading and market making operations. Recently discovered by Vikram to be coordinating pump-and-dump schemes with external criminal syndicates.",
        motive:
          "Vikram was exposing market manipulation to SEBI and international financial crime authorities",
        alibi:
          "Says he was executing high-volume trades during peak market activity",
        evidence:
          "Trading execution was managed by algorithmic systems during peak hours",
      },
      {
        id: 5,
        name: "Dr. Anjali Gupta",
        age: 36,
        role: "Compliance Officer & Regulatory Fraud Coordinator",
        details:
          "Handles regulatory compliance and government relations. Recently caught by Vikram bribing regulatory officials and creating fake compliance reports to avoid exchange shutdowns.",
        motive:
          "Vikram was reporting regulatory bribery to anti-corruption authorities, ending her legal career",
        alibi:
          "Claims she was preparing compliance reports for regulatory submission",
        evidence:
          "Compliance reports were template-based and already completed before murder time",
      },
      {
        id: 6,
        name: "Sunita Singh",
        age: 34,
        role: "Vikram's Wife & Business Partner",
        details:
          "Co-owns exchange and manages external partnerships. Recently discovered Vikram was planning to flee country with remaining customer funds and abandon the family business.",
        motive:
          "Vikram's escape plan would leave her to face criminal charges and financial ruin",
        alibi:
          "Says she was managing business partnerships and external meetings",
        evidence:
          "No external meetings were scheduled, and she had access to office refrigerator",
      },
      {
        id: 7,
        name: "Rajesh Agarwal",
        age: 38,
        role: "International Relations Manager & Money Launderer",
        details:
          "Manages global partnerships and international fund transfers. Recently caught by Vikram coordinating with international criminal organizations for cryptocurrency money laundering.",
        motive:
          "Vikram was cooperating with international law enforcement to expose money laundering network",
        alibi:
          "Claims he was coordinating with international exchanges during Asian trading hours",
        evidence:
          "International coordination was managed through automated systems",
      },
      {
        id: 8,
        name: "Deepika Reddy",
        age: 27,
        role: "Customer Support Manager & Identity Theft Coordinator",
        details:
          "Handles customer service and account management. Recently discovered by Vikram to be stealing customer identity documents and selling them to criminal networks.",
        motive:
          "Vikram was filing identity theft charges and exposing document forgery operation",
        alibi:
          "Says she was handling customer complaints during trading hours",
        evidence:
          "Customer support was managed by AI chatbots during peak trading sessions",
      },
      {
        id: 9,
        name: "Arjun Malhotra",
        age: 32,
        role: "Risk Management Head & Insider Trading Coordinator",
        details:
          "Manages trading risks and algorithmic safeguards. Recently caught by Vikram using advance knowledge of market movements to profit from insider trading schemes.",
        motive:
          "Vikram was reporting insider trading to market regulators and criminal authorities",
        alibi:
          "Claims he was monitoring market risks during volatile trading session",
        evidence:
          "Risk monitoring was automated with machine learning algorithms",
      },
      {
        id: 10,
        name: "Dr. Vikash Kumar",
        age: 40,
        role: "Medical Equipment Supplier & Polonium Source",
        details:
          "Supplies medical equipment to exchange wellness center and has access to radioactive materials for medical imaging. Recently blackmailed by Vikram for providing illegal medical services.",
        motive:
          "Vikram was exposing his illegal medical practice and radioactive material handling violations",
        alibi:
          "Says he was conducting medical equipment maintenance in wellness center",
        evidence:
          "No maintenance was scheduled, and he had direct access to polonium-210 through medical supplies",
      },
      {
        id: 11,
        name: "Neha Verma",
        age: 28,
        role: "Blockchain Analyst & Token Creation Fraudster",
        details:
          "Analyzes blockchain transactions and creates new cryptocurrency tokens. Recently caught by Vikram creating fake tokens and conducting ICO scams worth ₹200 crore.",
        motive:
          "Vikram was exposing her ICO fraud to international blockchain authorities and investors",
        alibi:
          "Claims she was analyzing blockchain transactions for suspicious activity",
        evidence:
          "Blockchain analysis was conducted by automated monitoring systems",
      },
      {
        id: 12,
        name: "Ravi Joshi",
        age: 34,
        role: "Government Liaison & Bribery Coordinator",
        details:
          "Manages government relations and regulatory negotiations. Recently caught by Vikram systematically bribing government officials to delay cryptocurrency regulation implementation.",
        motive:
          "Vikram was exposing government bribery to anti-corruption authorities, leading to criminal charges",
        alibi:
          "Says he was negotiating with government officials about regulatory compliance",
        evidence:
          "No government meetings were scheduled during trading hours",
      },
    ],
    killer: 3,
    solution:
      "Kavya Sharma killed Vikram. As CFO, she had embezzled ₹500 crore in customer funds, prepared his daily protein shake giving her opportunity to add polonium-210, and faced massive international criminal charges that would destroy her life and lead to decades in prison.",
  },

  {
    id: 15,
    title: "The Smart City IoT Infrastructure Murder",
    description:
      "Dr. Rajesh Agarwal, Chief Technology Officer of 'SmartCityIndia' government project, was found dead from targeted electromagnetic pulse exposure in his IoT control center. The murder was executed through the city's own smart infrastructure - traffic lights, surveillance cameras, and 5G towers were weaponized to create a focused electromagnetic attack during a live demonstration to international delegates.",
    clues: [
      "Rajesh died from targeted EMP exposure at 2:15 PM during live smart city demonstration",
      "City's IoT infrastructure was hacked to focus electromagnetic radiation on his exact location",
      "International delegates were witnessing smart traffic, surveillance, and utility management systems",
      "His secured laptop revealed 'smart city surveillance state' and 'citizen privacy violation' evidence",
      "Recent investigation discovered ₹2000 crore in inflated infrastructure costs and fake vendor payments",
      "Advanced AI algorithms were illegally profiling citizens using facial recognition and behavior tracking",
      "5G tower network was modified to create directed energy weapon targeting specific coordinates",
      "City's emergency response systems were disabled during the attack to prevent medical assistance",
      "Quantum encryption keys were stolen and sold to foreign intelligence agencies",
      "Smart city sensors were collecting illegal biometric data and selling to private companies",
      "International cybersecurity audit was scheduled to expose all security vulnerabilities next week"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Priya Verma",
        age: 34,
        role: "IoT Security Architect & System Backdoor Creator",
        details:
          "Designs security protocols for smart city infrastructure. Recently caught by Rajesh installing backdoors in IoT devices for foreign intelligence agencies and criminal hackers.",
        motive:
          "Rajesh was exposing her espionage activities to national security agencies, leading to treason charges",
        alibi:
          "Claims she was monitoring security protocols during international demonstration",
        evidence:
          "Security monitoring was automated, and she had expert knowledge to weaponize IoT infrastructure",
      },
      {
        id: 2,
        name: "Rohit Malhotra",
        age: 37,
        role: "5G Network Engineer & Directed Energy Specialist",
        details:
          "Manages 5G infrastructure and electromagnetic systems. Recently discovered by Rajesh to be selling network access to criminal organizations for illegal surveillance and tracking.",
        motive:
          "Rajesh was filing criminal charges for network security violations and terrorist facilitation",
        alibi:
          "Says he was optimizing 5G performance during high-bandwidth demonstration",
        evidence:
          "5G optimization was managed by AI systems, and he has expertise in electromagnetic weapon creation",
      },
      {
        id: 3,
        name: "Kavya Singh",
        age: 30,
        role: "AI Ethics Officer & Citizen Surveillance Coordinator",
        details:
          "Manages AI algorithms and citizen data ethics. Recently caught by Rajesh using AI to create illegal citizen social credit scores and selling data to authoritarian regimes.",
        motive:
          "Rajesh was exposing her surveillance state operations to human rights organizations and media",
        alibi:
          "Claims she was demonstrating ethical AI applications to international delegates",
        evidence:
          "AI demonstration was pre-programmed, and she had access to citizen tracking algorithms",
      },
      {
        id: 4,
        name: "Kiran Kumar",
        age: 32,
        role: "Cybersecurity Head & Quantum Encryption Thief",
        details:
          "Manages cybersecurity infrastructure and quantum communication systems. Recently caught by Rajesh stealing quantum encryption keys and selling them to foreign intelligence services.",
        motive:
          "Rajesh was reporting quantum espionage to national security agencies, leading to life imprisonment for treason",
        alibi:
          "Says he was ensuring cybersecurity during live demonstration with international audience",
        evidence:
          "Cybersecurity was managed by automated threat detection systems during demonstration",
      },
      {
        id: 5,
        name: "Dr. Anjali Gupta",
        age: 35,
        role: "Smart Healthcare Director & Biometric Data Seller",
        details:
          "Manages smart healthcare systems and medical IoT devices. Recently discovered by Rajesh to be illegally collecting citizen biometric data and selling to insurance and pharmaceutical companies.",
        motive:
          "Rajesh was exposing her medical data theft to health ministry and privacy authorities",
        alibi:
          "Claims she was showcasing smart healthcare innovations to international health delegates",
        evidence:
          "Healthcare showcase was automated with pre-recorded demonstrations",
      },
      {
        id: 6,
        name: "Sunita Agarwal",
        age: 36,
        role: "Rajesh's Wife & Project Coordinator",
        details:
          "Coordinates smart city project implementation and government relations. Recently discovered Rajesh was planning to expose entire project as surveillance state experiment and flee to foreign country.",
        motive:
          "Rajesh's whistleblowing would destroy their family reputation and result in her arrest as co-conspirator",
        alibi:
          "Says she was coordinating demonstration logistics and managing international delegate relations",
        evidence:
          "Demonstration logistics were managed by event management company, not internally",
      },
      {
        id: 7,
        name: "Vikash Reddy",
        age: 33,
        role: "Data Analytics Head & Citizen Profiling Expert",
        details:
          "Manages big data analytics and citizen behavior prediction systems. Recently caught by Rajesh using smart city data to create illegal citizen profiling for political manipulation.",
        motive:
          "Rajesh was exposing political manipulation algorithms to election commission and media",
        alibi:
          "Claims he was analyzing real-time city data during demonstration to showcase analytics capabilities",
        evidence:
          "Data analytics demonstration used pre-processed data sets, not real-time analysis",
      },
      {
        id: 8,
        name: "Rajesh Joshi",
        age: 39,
        role: "Government Liaison & Corruption Coordinator",
        details:
          "Manages government relations and project funding. Recently caught by Rajesh systematically inflating infrastructure costs and distributing bribes to government officials for project approvals.",
        motive:
          "Rajesh was exposing ₹2000 crore corruption to anti-corruption authorities and audit agencies",
        alibi:
          "Says he was briefing government officials and international delegates about project success metrics",
        evidence:
          "Project briefings were conducted by technical teams, not administrative staff",
      },
      {
        id: 9,
        name: "Deepika Sharma",
        age: 28,
        role: "Emergency Response Manager & System Saboteur",
        details:
          "Manages smart city emergency response systems and crisis coordination. Recently discovered by Rajesh to be selling emergency response data to criminal organizations for planning attacks.",
        motive:
          "Rajesh was reporting her terrorist facilitation to national security and anti-terrorism agencies",
        alibi:
          "Claims she was monitoring emergency response systems during demonstration for safety protocols",
        evidence:
          "Emergency systems were disabled during murder time, and she has access to disable medical response",
      },
      {
        id: 10,
        name: "Arjun Verma",
        age: 31,
        role: "International Relations Manager & Technology Transfer Criminal",
        details:
          "Manages international partnerships and technology sharing agreements. Recently caught by Rajesh illegally transferring smart city technology to hostile foreign governments.",
        motive:
          "Rajesh was exposing technology transfer violations to foreign ministry and intelligence agencies",
        alibi:
          "Says he was facilitating international delegate technical discussions and partnership negotiations",
        evidence:
          "International discussions were managed by technical demonstration teams",
      },
      {
        id: 11,
        name: "Dr. Neha Malhotra",
        age: 29,
        role: "Research Director & Intellectual Property Thief",
        details:
          "Manages smart city research and development programs. Recently caught by Rajesh stealing research data and selling proprietary algorithms to competing international smart city projects.",
        motive:
          "Rajesh was filing intellectual property theft charges and exposing research espionage",
        alibi:
          "Claims she was presenting research innovations and development roadmap to international research community",
        evidence:
          "Research presentations were pre-recorded and didn't require live management",
      },
      {
        id: 12,
        name: "Ravi Kumar",
        age: 34,
        role: "Infrastructure Vendor & Fake Equipment Supplier",
        details:
          "Represents major infrastructure vendor supplying IoT devices and smart systems. Recently caught by Rajesh supplying substandard equipment and inflating costs through fake vendor networks.",
        motive:
          "Rajesh was exposing vendor fraud to procurement authorities and project auditors",
        alibi:
          "Says he was showcasing vendor equipment capabilities and technical specifications to international buyers",
        evidence:
          "Equipment showcase was managed by technical demonstration teams, not vendor representatives",
      },
      {
        id: 13,
        name: "Kavita Joshi",
        age: 32,
        role: "Public Relations Manager & Media Manipulation Expert",
        details:
          "Manages public communications and media relations for smart city project. Recently caught by Rajesh creating fake positive news coverage and suppressing citizen privacy concerns through paid media campaigns.",
        motive:
          "Rajesh was exposing media manipulation to press council and transparency activists",
        alibi:
          "Claims she was managing media coverage and international press relations during demonstration",
        evidence:
          "Media coverage was managed by external PR agency during international events",
      },
    ],
    killer: 2,
    solution:
      "Rohit Malhotra killed Rajesh. As the 5G network engineer, he had the technical expertise to weaponize the electromagnetic infrastructure into a directed energy weapon, faced criminal charges for selling network access to terrorist organizations, and his 5G optimization alibi was false as the systems were automated during demonstrations.",
  },

  {
    id: 16,
    title: "The Metaverse Real Estate Empire Murder",
    description:
      "Arjun Mehta, founder of 'VirtualLandIndia' - India's largest metaverse real estate platform, was found dead from targeted neurotoxin exposure delivered through his VR headset during a live virtual property auction. The poison was aerosolized and released through the headset's ventilation system while he was conducting a ₹500 crore virtual land sale to international buyers in the metaverse.",
    clues: [
      "Arjun died from aerosolized tetrodotoxin at 4:45 PM during live VR auction with 50,000+ attendees",
      "VR headset's ventilation system was modified to deliver concentrated neurotoxin through air circulation",
      "Virtual auction was selling prime metaverse land parcels worth ₹500 crore to international crypto investors",
      "His encrypted brain-computer interface revealed 'virtual property fraud' and 'NFT money laundering' operations",
      "Recent investigation discovered ₹1500 crore in fake virtual property sales and non-existent metaverse developments",
      "Advanced AI avatars were being used to impersonate celebrities and sell fraudulent virtual real estate",
      "Blockchain records show systematic manipulation of virtual land ownership and fake transaction histories",
      "Neurotoxin delivery required expertise in aerosol engineering and VR hardware modification",
      "International regulatory investigation was closing in on cross-border virtual asset fraud",
      "Deep learning algorithms were creating fake virtual worlds that didn't actually exist in the metaverse",
      "Quantum computing systems were being used to forge blockchain transactions and virtual property deeds",
      "Virtual reality gambling dens were operating illegally within the metaverse real estate developments"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Priya Sharma",
        age: 32,
        role: "VR Technology Director & Hardware Sabotage Expert",
        details:
          "Manages VR hardware systems and metaverse infrastructure. Recently caught by Arjun installing backdoors in VR headsets to steal user biometric data and sell to surveillance companies.",
        motive:
          "Arjun was exposing her biometric theft to privacy authorities and technology regulators",
        alibi:
          "Claims she was monitoring VR system performance during high-traffic virtual auction",
        evidence:
          "VR monitoring was automated with AI systems, and she has expertise in aerosol delivery through VR hardware",
      },
      {
        id: 2,
        name: "Rohit Agarwal",
        age: 35,
        role: "Blockchain Engineer & Transaction Manipulator",
        details:
          "Develops blockchain infrastructure for virtual property ownership. Recently discovered by Arjun to be creating fake transaction histories and manipulating ownership records for massive fraud.",
        motive:
          "Arjun was filing criminal charges for blockchain fraud and virtual property theft worth ₹1500 crore",
        alibi:
          "Says he was managing blockchain validation during high-volume property transactions",
        evidence:
          "Blockchain validation was handled by distributed mining networks, not manual management",
      },
      {
        id: 3,
        name: "Kavya Singh",
        age: 29,
        role: "AI Avatar Designer & Celebrity Impersonation Fraudster",
        details:
          "Creates AI avatars and virtual personalities for metaverse marketing. Recently caught by Arjun using deepfake technology to impersonate celebrities and sell fake endorsed virtual properties.",
        motive:
          "Arjun was exposing celebrity impersonation fraud to entertainment industry and legal authorities",
        alibi:
          "Claims she was managing AI avatar interactions during live virtual auction",
        evidence:
          "AI avatar management was automated during large events, and she had access to neurotoxin through AI research labs",
      },
      {
        id: 4,
        name: "Dr. Kiran Kumar",
        age: 33,
        role: "Neuroscience Consultant & Brain-Computer Interface Hacker",
        details:
          "Manages brain-computer interface technology for enhanced VR experiences. Recently caught by Arjun stealing user neural patterns and selling cognitive data to manipulation research companies.",
        motive:
          "Arjun was reporting neural data theft to bioethics authorities and neuroscience regulatory boards",
        alibi:
          "Says he was monitoring user neural responses during immersive virtual auction experience",
        evidence:
          "Neural monitoring was managed by automated EEG systems, and he has expertise in neurotoxin delivery",
      },
      {
        id: 5,
        name: "Anjali Verma",
        age: 31,
        role: "Quantum Computing Specialist & Blockchain Forger",
        details:
          "Manages quantum computing systems for complex metaverse calculations. Recently discovered by Arjun using quantum computers to forge blockchain transactions and create fake virtual property ownership.",
        motive:
          "Arjun was exposing quantum fraud to international cybersecurity agencies and blockchain authorities",
        alibi:
          "Claims she was running quantum calculations for virtual world rendering during auction",
        evidence:
          "Quantum calculations were automated and didn't require manual intervention during auction",
      },
      {
        id: 6,
        name: "Sunita Mehta",
        age: 34,
        role: "Arjun's Wife & International Money Laundering Coordinator",
        details:
          "Manages international business relationships and cross-border transactions. Recently discovered Arjun was planning to cooperate with international law enforcement to expose money laundering network.",
        motive:
          "Arjun's cooperation would expose her international money laundering operations and result in extradition",
        alibi:
          "Says she was coordinating with international buyers and managing currency conversions",
        evidence:
          "International coordination was managed by automated trading systems during auction",
      },
      {
        id: 7,
        name: "Vikash Reddy",
        age: 36,
        role: "Virtual World Architect & Non-existent Development Creator",
        details:
          "Designs virtual worlds and metaverse environments. Recently caught by Arjun creating fake virtual developments that don't actually exist but are being sold to investors for billions.",
        motive:
          "Arjun was exposing his fake development fraud to international investors and regulatory authorities",
        alibi:
          "Claims he was managing virtual world infrastructure during live property showcasing",
        evidence:
          "Virtual world management was automated with procedural generation algorithms",
      },
      {
        id: 8,
        name: "Rajesh Malhotra",
        age: 38,
        role: "Cryptocurrency Exchange Representative & Pump-and-Dump Coordinator",
        details:
          "Represents crypto exchange facilitating virtual property transactions. Recently caught by Arjun coordinating pump-and-dump schemes using virtual real estate to manipulate cryptocurrency prices.",
        motive:
          "Arjun was exposing market manipulation to financial crime authorities and international regulators",
        alibi:
          "Says he was managing cryptocurrency liquidity during high-volume virtual property purchases",
        evidence:
          "Cryptocurrency liquidity was managed by automated market makers during large transactions",
      },
      {
        id: 9,
        name: "Deepika Joshi",
        age: 27,
        role: "Virtual Gaming Director & Illegal Gambling Operator",
        details:
          "Manages virtual gaming experiences within metaverse properties. Recently discovered by Arjun operating illegal gambling dens within virtual real estate developments.",
        motive:
          "Arjun was exposing illegal virtual gambling to gaming authorities and law enforcement",
        alibi:
          "Claims she was managing virtual gaming experiences for auction attendees",
        evidence:
          "Virtual gaming was automated with AI game masters during auction events",
      },
      {
        id: 10,
        name: "Dr. Arjun Gupta",
        age: 34,
        role: "Aerosol Engineering Consultant & Chemical Weapons Expert",
        details:
          "Provides aerosol delivery consulting for VR scent systems and atmospheric effects. Recently caught by Arjun developing chemical weapon delivery systems disguised as VR enhancement technology.",
        motive:
          "Arjun was reporting chemical weapons development to defense authorities and international weapons control agencies",
        alibi:
          "Says he was managing atmospheric effects and scent delivery during immersive auction experience",
        evidence:
          "Atmospheric effects were pre-programmed and automated during auction, and he has direct access to neurotoxin aerosol delivery",
      },
      {
        id: 11,
        name: "Neha Agarwal",
        age: 30,
        role: "International Regulatory Liaison & Government Bribery Coordinator",
        details:
          "Manages international regulatory compliance and government relations. Recently caught by Arjun systematically bribing international regulators to avoid virtual asset fraud investigations.",
        motive:
          "Arjun was exposing international bribery to anti-corruption agencies across multiple countries",
        alibi:
          "Claims she was managing regulatory compliance during international virtual property sales",
        evidence:
          "Regulatory compliance was managed by legal automation systems during international transactions",
      },
      {
        id: 12,
        name: "Ravi Verma",
        age: 33,
        role: "Virtual Identity Theft Coordinator & Avatar Hijacking Expert",
        details:
          "Manages virtual identity systems and avatar authentication. Recently caught by Arjun stealing user virtual identities and selling hijacked avatars to criminal organizations.",
        motive:
          "Arjun was filing virtual identity theft charges with cyber crime authorities",
        alibi:
          "Says he was managing avatar authentication during high-security virtual auction",
        evidence:
          "Avatar authentication was managed by biometric AI systems during auction",
      },
      {
        id: 13,
        name: "Kavita Singh",
        age: 28,
        role: "NFT Fraud Specialist & Digital Art Money Launderer",
        details:
          "Manages NFT creation and digital asset authentication. Recently discovered by Arjun creating fake NFTs and using digital art sales for massive money laundering operations.",
        motive:
          "Arjun was exposing NFT fraud to art authentication authorities and financial crime units",
        alibi:
          "Claims she was managing NFT authentication during virtual property and digital asset auction",
        evidence:
          "NFT authentication was automated with blockchain verification systems",
      },
      {
        id: 14,
        name: "Dr. Sanjay Kumar",
        role: "Biotechnology Consultant & Neurotoxin Synthesizer",
        age: 39,
        details:
          "Provides biotechnology consulting for VR health monitoring systems. Recently caught by Arjun synthesizing illegal neurotoxins and selling them to assassination networks through dark web.",
        motive:
          "Arjun was exposing neurotoxin synthesis to bioweapons authorities and international security agencies",
        alibi:
          "Says he was monitoring user health metrics during extended VR auction session",
        evidence:
          "Health monitoring was automated with wearable sensors, and he has direct access to tetrodotoxin synthesis",
      },
    ],
    killer: 10,
    solution:
      "Dr. Arjun Gupta killed Arjun Mehta. As an aerosol engineering consultant, he had the specific expertise to modify VR headset ventilation systems for neurotoxin delivery, faced exposure for developing chemical weapons disguised as VR technology, and his atmospheric effects alibi was false as the systems were pre-programmed and automated.",
  },

  {
    id: 17,
    title: "The Quantum Computing Startup Assassination",
    description:
      "Dr. Kavya Malhotra, CEO of 'QuantumLeapIndia' - the nation's first quantum computing startup, was found dead from precisely targeted gamma radiation exposure in her quantum lab during a live demonstration to defense ministry officials. The quantum computer itself was weaponized to focus gamma rays with mathematical precision while she was showcasing breakthrough quantum encryption algorithms.",
    clues: [
      "Kavya died from targeted gamma radiation at 11:30 AM during classified defense ministry quantum demonstration",
      "Quantum computer's particle accelerator was modified to focus gamma rays on her exact coordinates",
      "Defense demonstration was showcasing quantum encryption for national security applications worth ₹5000 crore",
      "Her quantum-encrypted files revealed 'quantum supremacy fraud' and 'fake breakthrough claims'",
      "Recent investigation discovered quantum computer was actually classical computer with fake quantum claims",
      "Advanced quantum algorithms were being sold to foreign intelligence agencies for code-breaking",
      "Quantum entanglement experiments were cover for developing quantum communication weapons",
      "Gamma radiation required precise quantum mechanical calculations for targeted delivery",
      "International quantum physics community was about to expose the fake quantum computer fraud",
      "Quantum encryption keys were being sold to terrorist organizations for unbreakable communications",
      "China's quantum computing espionage network had infiltrated the startup through multiple agents",
      "Nuclear regulatory audit was scheduled to discover unauthorized radioactive material handling",
      "Quantum computer's cooling system contained illegal nuclear materials for weapons development"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Rohit Sharma",
        age: 36,
        role: "Quantum Physicist & Fake Science Coordinator",
        details:
          "Lead quantum physicist responsible for quantum algorithm development. Recently caught by Kavya publishing fake quantum breakthrough papers and selling false research to international quantum community.",
        motive:
          "Kavya was exposing his fake quantum physics research to international scientific community and regulatory authorities",
        alibi:
          "Claims he was monitoring quantum entanglement experiments during defense demonstration",
        evidence:
          "Quantum experiments were automated with AI monitoring, and he has expertise in gamma radiation targeting",
      },
      {
        id: 2,
        name: "Priya Agarwal",
        age: 33,
        role: "Quantum Security Director & Encryption Key Seller",
        details:
          "Manages quantum security protocols and encryption systems. Recently discovered by Kavya selling quantum encryption keys to foreign intelligence agencies and terrorist networks.",
        motive:
          "Kavya was reporting encryption key theft to national security agencies and international counter-terrorism units",
        alibi:
          "Says she was demonstrating quantum encryption capabilities to defense ministry officials",
        evidence:
          "Quantum encryption demonstration was pre-programmed and didn't require live management",
      },
      {
        id: 3,
        name: "Dr. Kiran Verma",
        age: 34,
        role: "Particle Physics Engineer & Gamma Ray Weapons Expert",
        details:
          "Manages particle accelerator and radiation systems within quantum computer. Recently caught by Kavya developing gamma ray weapons disguised as quantum computing research.",
        motive:
          "Kavya was exposing weapons development to defense authorities and international atomic energy agencies",
        alibi:
          "Claims he was calibrating particle accelerator systems during quantum demonstration",
        evidence:
          "Particle accelerator calibration was automated during demonstrations, and he modified the system for targeted radiation",
      },
      {
        id: 4,
        name: "Anjali Singh",
        age: 31,
        role: "Quantum Algorithm Designer & Chinese Espionage Agent",
        details:
          "Develops quantum algorithms and computational models. Recently discovered by Kavya to be Chinese intelligence agent stealing quantum computing secrets for foreign military applications.",
        motive:
          "Kavya was exposing her espionage activities to counter-intelligence agencies and national security authorities",
        alibi:
          "Says she was running quantum algorithm demonstrations for defense ministry evaluation",
        evidence:
          "Algorithm demonstrations were automated with pre-computed results during official presentations",
      },
      {
        id: 5,
        name: "Vikash Kumar",
        age: 35,
        role: "Quantum Materials Scientist & Nuclear Weapons Developer",
        details:
          "Manages quantum computer materials and cooling systems. Recently caught by Kavya using quantum lab facilities to develop nuclear weapons materials for international arms dealers.",
        motive:
          "Kavya was reporting nuclear weapons development to atomic energy authorities and international weapons inspectors",
        alibi:
          "Claims he was monitoring quantum computer cooling systems and material stability",
        evidence:
          "Cooling system monitoring was automated, and he had access to radioactive materials for weapons development",
      },
      {
        id: 6,
        name: "Sunita Malhotra",
        age: 35,
        role: "Kavya's Wife & International Arms Dealer",
        details:
          "Manages international business development and quantum technology partnerships. Recently discovered by Kavya to be selling quantum weapons technology to international terrorist organizations.",
        motive:
          "Kavya's exposure would destroy international arms dealing network and result in terrorism charges",
        alibi:
          "Says she was coordinating with international defense contractors during demonstration",
        evidence:
          "International coordination was managed by automated communication systems",
      },
      {
        id: 7,
        name: "Rajesh Gupta",
        age: 37,
        role: "Defense Ministry Liaison & Classified Information Seller",
        details:
          "Manages government relations and defense contracts. Recently caught by Kavya selling classified quantum computing research to hostile foreign governments.",
        motive:
          "Kavya was exposing classified information theft to military intelligence and counter-espionage agencies",
        alibi:
          "Claims he was briefing defense ministry officials about quantum computing applications",
        evidence:
          "Defense briefings were conducted by technical demonstration teams, not liaison staff",
      },
      {
        id: 8,
        name: "Dr. Deepika Reddy",
        age: 29,
        role: "Quantum Communication Expert & Terrorist Network Facilitator",
        details:
          "Develops quantum communication protocols and secure messaging systems. Recently discovered by Kavya providing unbreakable quantum communication systems to international terrorist networks.",
        motive:
          "Kavya was exposing terrorist facilitation to counter-terrorism agencies and international security organizations",
        alibi:
          "Says she was demonstrating quantum communication security to defense ministry officials",
        evidence:
          "Communication demonstrations were pre-recorded and automated during official presentations",
      },
      {
        id: 9,
        name: "Arjun Joshi",
        age: 32,
        role: "Quantum Computing Fraud Coordinator & Investment Scammer",
        details:
          "Manages quantum computing claims and investor relations. Recently caught by Kavya coordinating massive investment fraud using fake quantum computing breakthroughs.",
        motive:
          "Kavya was exposing ₹5000 crore investment fraud to financial crime authorities and international investors",
        alibi:
          "Claims he was managing investor communications during defense ministry demonstration",
        evidence:
          "Investor communications were managed by automated PR systems during official demonstrations",
      },
      {
        id: 10,
        name: "Neha Verma",
        age: 28,
        role: "Nuclear Safety Officer & Radioactive Material Smuggler",
        details:
          "Manages nuclear safety protocols and radioactive material handling. Recently caught by Kavya smuggling radioactive materials to international weapons developers.",
        motive:
          "Kavya was exposing radioactive smuggling to nuclear regulatory authorities and international atomic energy agencies",
        alibi:
          "Says she was monitoring radiation safety during quantum computer operation",
        evidence:
          "Radiation monitoring was automated with sensor networks during demonstrations",
      },
      {
        id: 11,
        name: "Dr. Ravi Agarwal",
        age: 38,
        role: "International Quantum Research Director & Scientific Fraud Coordinator",
        details:
          "Manages international quantum research collaborations and scientific publications. Recently caught by Kavya coordinating international scientific fraud and fake quantum breakthrough claims.",
        motive:
          "Kavya was exposing scientific fraud to international quantum physics community and research authorities",
        alibi:
          "Claims he was coordinating with international quantum research institutions during demonstration",
        evidence:
          "International research coordination was managed by automated collaboration platforms",
      },
      {
        id: 12,
        name: "Kavita Kumar",
        age: 30,
        role: "Quantum Startup Competitor & Industrial Saboteur",
        details:
          "Represents competing quantum computing startup and industrial espionage network. Recently caught by Kavya conducting industrial sabotage and stealing quantum computing intellectual property.",
        motive:
          "Kavya was exposing industrial espionage to intellectual property authorities and competitive intelligence agencies",
        alibi:
          "Says she was observing demonstration as potential quantum computing collaboration partner",
        evidence:
          "Collaboration discussions were managed by business development teams, not competitive representatives",
      },
      {
        id: 13,
        name: "Dr. Sanjay Malhotra",
        age: 39,
        role: "Quantum Weapons Consultant & Military Technology Developer",
        details:
          "Provides quantum technology consulting for military applications. Recently caught by Kavya developing quantum weapons systems for international military contractors.",
        motive:
          "Kavya was exposing quantum weapons development to international weapons control authorities",
        alibi:
          "Says he was evaluating military applications of quantum technology during defense demonstration",
        evidence:
          "Military evaluation was conducted by defense ministry technical teams, not external consultants",
      },
      {
        id: 14,
        name: "Dr. Meera Singh",
        age: 33,
        role: "Quantum Ethics Violator & Human Experimentation Coordinator",
        details:
          "Manages quantum technology ethics and human subject research. Recently caught by Kavya conducting illegal human experiments using quantum radiation exposure.",
        motive:
          "Kavya was exposing human experimentation to bioethics authorities and human rights organizations",
        alibi:
          "Claims she was monitoring ethical compliance during quantum technology demonstration",
        evidence:
          "Ethical monitoring was managed by automated compliance systems during demonstrations",
      },
      {
        id: 15,
        name: "Dr. Rohit Kumar",
        age: 35,
        role: "Quantum Computer Saboteur & Classical Computing Fraudster",
        details:
          "Technical director responsible for quantum computer hardware. Recently caught by Kavya running classical computer disguised as quantum system and defrauding entire quantum computing industry.",
        motive:
          "Kavya was exposing the fake quantum computer to international quantum community, destroying multi-billion dollar fraud",
        alibi:
          "Says he was managing quantum computer operations during critical defense ministry demonstration",
        evidence:
          "Quantum operations were automated and the computer was actually classical, and he had access to particle accelerator controls",
      },
    ],
    killer: 3,
    solution:
      "Dr. Kiran Verma killed Dr. Kavya Malhotra. As particle physics engineer managing the quantum computer's particle accelerator, he had the expertise to weaponize the gamma radiation system for targeted killing, faced exposure for developing weapons disguised as research, and his calibration alibi was false as the system was automated during demonstrations.",
  },

  {
    id: 18,
    title: "The Space Tech Startup Orbital Murder",
    description:
      "Rajesh Singh, founder of 'CosmosLaunchIndia' space technology startup, was found dead from targeted microwave radiation exposure in his satellite control center during a live rocket launch watched by 10 million viewers. The attack was coordinated through weaponized satellite communication arrays while he was commanding India's first private space mission to deploy commercial satellites.",
    clues: [
      "Rajesh died from focused microwave radiation at 2:30 PM during live rocket launch with 10 million viewers",
      "Satellite communication arrays were hacked to focus microwave beams on control center coordinates",
      "Live rocket launch was deploying commercial satellites worth ₹2000 crore for international clients",
      "His space-encrypted communication system revealed 'fake satellite deployment' and 'orbital debris creation' schemes",
      "Recent investigation discovered rocket launches were fake CGI shows while real satellites were used for espionage",
      "Advanced AI was controlling fake space missions while real satellites conducted illegal surveillance",
      "Microwave weapon attack required precise orbital mechanics calculations and satellite network control",
      "International space agencies were investigating unauthorized satellite deployments and space debris",
      "Military satellite networks were being hijacked for conducting space-based attacks on Earth targets",
      "Commercial satellite customers were unknowingly funding space weapons development program",
      "Foreign intelligence agencies had compromised the satellite network for conducting space warfare",
      "Nuclear-powered satellites were being developed illegally for space-based weapons platforms",
      "Space debris was being created intentionally to destroy competing nations' satellite networks"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Priya Verma",
        age: 34,
        role: "Satellite Communication Director & Microwave Weapons Expert",
        details:
          "Manages satellite communication systems and orbital coordination. Recently caught by Rajesh developing space-based microwave weapons disguised as commercial communication satellites.",
        motive:
          "Rajesh was exposing space weapons development to international space authorities and military intelligence agencies",
        alibi:
          "Claims she was managing satellite communication during live rocket launch coordination",
        evidence:
          "Satellite communication was automated during launch sequences, and she has expertise in focused microwave weapon systems",
      },
      {
        id: 2,
        name: "Rohit Agarwal",
        age: 36,
        role: "Rocket Engineer & Fake Launch Coordinator",
        details:
          "Designs rocket systems and launch procedures. Recently discovered by Rajesh creating fake rocket launches using CGI while conducting real unauthorized satellite deployments.",
        motive:
          "Rajesh was exposing fake launch fraud to space regulatory authorities and international clients",
        alibi:
          "Says he was monitoring rocket performance during critical launch phase",
        evidence:
          "Rocket monitoring was managed by automated telemetry systems during live launches",
      },
      {
        id: 3,
        name: "Kavya Singh",
        age: 31,
        role: "Orbital Mechanics Expert & Space Debris Creator",
        details:
          "Calculates satellite orbits and space mission trajectories. Recently caught by Rajesh intentionally creating space debris to destroy competing nations' satellite networks.",
        motive:
          "Rajesh was reporting space debris warfare to international space law authorities and United Nations",
        alibi:
          "Claims she was calculating orbital trajectories during satellite deployment phase",
        evidence:
          "Orbital calculations were automated with AI systems during launch operations",
      },
      {
        id: 4,
        name: "Dr. Kiran Kumar",
        age: 35,
        role: "Space Surveillance Director & Military Satellite Hijacker",
        details:
          "Manages space surveillance and satellite tracking systems. Recently discovered by Rajesh hijacking military satellites for conducting unauthorized space-based attacks.",
        motive:
          "Rajesh was exposing military satellite hijacking to defense authorities and international space security agencies",
        alibi:
          "Says he was monitoring space traffic during commercial satellite deployment",
        evidence:
          "Space traffic monitoring was automated with radar tracking systems during launches",
      },
      {
        id: 5,
        name: "Anjali Verma",
        age: 32,
        role: "Satellite Technology Expert & Foreign Espionage Agent",
        details:
          "Develops satellite technology and space communication protocols. Recently caught by Rajesh selling satellite control systems to foreign intelligence agencies for espionage operations.",
        motive:
          "Rajesh was exposing satellite espionage to counter-intelligence agencies and national security authorities",
        alibi:
          "Claims she was managing satellite technology systems during deployment sequence",
        evidence:
          "Satellite technology management was automated during deployment phases",
      },
      {
        id: 6,
        name: "Sunita Singh",
        age: 35,
        role: "Rajesh's Wife & International Arms Dealer",
        details:
          "Manages international space technology partnerships and commercial relationships. Recently discovered by Rajesh selling space weapons technology to international terrorist organizations.",
        motive:
          "Rajesh's exposure would destroy international space weapons dealing and result in terrorism charges",
        alibi:
          "Says she was coordinating with international clients during live satellite deployment",
        evidence:
          "International coordination was managed by automated communication systems during launches",
      },
      {
        id: 7,
        name: "Vikash Reddy",
        age: 33,
        role: "Space Mission Director & CGI Fraud Coordinator",
        details:
          "Oversees space missions and public communications. Recently caught by Rajesh coordinating fake space missions using advanced CGI while conducting real illegal space operations.",
        motive:
          "Rajesh was exposing CGI fraud to space industry authorities and international clients",
        alibi:
          "Claims he was managing mission control operations during live rocket launch",
        evidence:
          "Mission control operations were automated during live broadcasts to public",
      },
      {
        id: 8,
        name: "Dr. Rajesh Malhotra",
        age: 38,
        role: "Nuclear Space Power Expert & Weapons Developer",
        details:
          "Manages nuclear power systems for satellites and space operations. Recently caught by Rajesh developing nuclear-powered space weapons platforms disguised as commercial satellites.",
        motive:
          "Rajesh was exposing nuclear space weapons to international atomic energy agencies and space authorities",
        alibi:
          "Says he was monitoring nuclear power systems during satellite deployment operations",
        evidence:
          "Nuclear power monitoring was automated with safety systems during space operations",
      },
      {
        id: 9,
        name: "Deepika Joshi",
        age: 29,
        role: "Ground Control Coordinator & Satellite Network Hijacker",
        details:
          "Manages ground control systems and satellite network operations. Recently discovered by Rajesh hijacking commercial satellite networks for conducting illegal surveillance operations.",
        motive:
          "Rajesh was exposing satellite hijacking to telecommunications authorities and privacy protection agencies",
        alibi:
          "Claims she was managing ground control communications during satellite deployment",
        evidence:
          "Ground control communications were automated during deployment sequences",
      },
      {
        id: 10,
        name: "Arjun Gupta",
        age: 34,
        role: "Space Security Expert & Network Infiltrator",
        details:
          "Manages space mission security and cyber protection systems. Recently caught by Rajesh infiltrating international space networks for conducting cyber warfare operations.",
        motive:
          "Rajesh was exposing cyber warfare operations to international cybersecurity agencies and space authorities",
        alibi:
          "Says he was monitoring security systems during high-profile international satellite deployment",
        evidence:
          "Security monitoring was automated with AI threat detection during international missions",
      },
      {
        id: 11,
        name: "Neha Agarwal",
        age: 30,
        role: "International Space Law Violator & Treaty Breaker",
        details:
          "Manages international space law compliance and treaty obligations. Recently caught by Rajesh systematically violating international space treaties for military advantage.",
        motive:
          "Rajesh was exposing treaty violations to international space law authorities and United Nations",
        alibi:
          "Claims she was ensuring legal compliance during international commercial satellite deployment",
        evidence:
          "Legal compliance was managed by automated treaty monitoring systems",
      },
      {
        id: 12,
        name: "Dr. Ravi Verma",
        age: 37,
        role: "Competing Space Startup Founder & Industrial Saboteur",
        details:
          "Represents competing space technology startup and industrial espionage network. Recently caught by Rajesh conducting space mission sabotage and stealing proprietary rocket technology.",
        motive:
          "Rajesh was exposing industrial sabotage to space industry authorities and intellectual property protection agencies",
        alibi:
          "Says he was observing launch as potential space technology collaboration partner",
        evidence:
          "Collaboration discussions were managed by business development teams during launch events",
      },
      {
        id: 13,
        name: "Kavita Singh",
        age: 28,
        role: "Space Technology Fraudster & Investment Scammer",
        details:
          "Manages space technology investments and funding operations. Recently caught by Rajesh conducting massive investment fraud using fake space technology breakthroughs.",
        motive:
          "Rajesh was exposing ₹2000 crore space investment fraud to financial crime authorities",
        alibi:
          "Claims she was managing investor communications during high-profile satellite deployment",
        evidence:
          "Investor communications were automated during live space missions",
      },
      {
        id: 14,
        name: "Dr. Sanjay Kumar",
        age: 39,
        role: "Military Space Consultant & Weapons Platform Developer",
        details:
          "Provides military space technology consulting and weapons development. Recently caught by Rajesh developing space-based weapons platforms for international military contractors.",
        motive:
          "Rajesh was exposing space weapons development to international weapons control authorities",
        alibi:
          "Says he was evaluating military applications during commercial satellite deployment demonstration",
        evidence:
          "Military evaluation was conducted by defense ministry technical teams during launch",
      },
      {
        id: 15,
        name: "Dr. Meera Singh",
        age: 33,
        role: "Space Environmental Destroyer & Orbital Pollution Coordinator",
        details:
          "Manages space environmental impact and orbital debris management. Recently caught by Rajesh intentionally polluting space environment and destroying orbital ecosystems for military advantage.",
        motive:
          "Rajesh was exposing space environmental destruction to international environmental protection agencies",
        alibi:
          "Claims she was monitoring environmental impact during satellite deployment operations",
        evidence:
          "Environmental monitoring was automated with sensor networks during space operations",
      },
      {
        id: 16,
        name: "Dr. Rohit Malhotra",
        age: 35,
        role: "Satellite Control Systems Expert & Remote Assassination Coordinator",
        details:
          "Manages satellite control systems and remote operation protocols. Recently caught by Rajesh coordinating remote assassinations using weaponized satellite networks.",
        motive:
          "Rajesh was exposing satellite assassination network to international crime authorities and counter-terrorism agencies",
        alibi:
          "Says he was managing satellite control systems during critical deployment phase",
        evidence:
          "Satellite control was automated during deployment, and he coordinated the microwave attack using compromised satellite arrays",
      },
    ],
    killer: 1,
    solution:
      "Dr. Priya Verma killed Rajesh Singh. As satellite communication director, she had the expertise to weaponize communication arrays into focused microwave weapons, faced exposure for developing space-based weapons disguised as commercial satellites, and her communication management alibi was false as the systems were automated during launch sequences.",
  },

  {
    id: 19,
    title: "The AI Healthcare Empire Murder",
    description:
      "Dr. Meera Agarwal, founder of 'MedAI Solutions' - India's largest AI healthcare diagnosis platform, was found dead from targeted nanobotic poisoning in her AI research lab during a live medical diagnosis demonstration to WHO officials. Microscopic medical nanobots were programmed to attack her specific genetic markers while she was showcasing AI systems that could diagnose diseases with 99.9% accuracy.",
    clues: [
      "Meera died from genetically-targeted nanobot poisoning at 3:45 PM during live WHO medical AI demonstration",
      "Medical nanobots were programmed to attack her specific DNA sequence and destroy vital organs",
      "WHO demonstration showcased AI diagnosis systems worth ₹3000 crore for global healthcare deployment",
      "Her quantum-encrypted medical database revealed 'fake AI diagnosis' and 'patient data manipulation' operations",
      "Recent investigation discovered AI systems were actually human doctors in hidden call centers providing diagnoses",
      "Advanced deepfake technology was creating fake medical research and fraudulent clinical trial results",
      "Nanobotic poisoning required expertise in genetic engineering and microscopic robotics programming",
      "International medical regulatory agencies were investigating unauthorized human experimentation",
      "AI medical systems were being used to conduct illegal genetic experiments on patients",
      "Patient medical data was being sold to insurance companies to deny coverage based on AI predictions",
      "Foreign pharmaceutical companies were using the platform to conduct illegal drug testing",
      "Medical AI algorithms were programmed to recommend expensive treatments regardless of necessity",
      "Genetic discrimination was being conducted through AI-powered medical profiling systems"
    ],
    suspects: [
      {
        id: 1,
        name: "Dr. Rohit Sharma",
        age: 37,
        role: "AI Medical Director & Fake Diagnosis Coordinator",
        details:
          "Manages AI medical diagnosis systems and algorithmic healthcare protocols. Recently caught by Meera coordinating fake AI diagnoses using hidden human doctors instead of artificial intelligence.",
        motive:
          "Meera was exposing fake AI medical systems to international healthcare authorities and WHO officials",
        alibi:
          "Claims he was managing AI diagnosis demonstrations during WHO evaluation session",
        evidence:
          "AI demonstrations were pre-programmed with fake results, and he has access to genetic engineering labs",
      },
      {
        id: 2,
        name: "Dr. Priya Verma",
        age: 34,
        role: "Genetic Engineering Expert & Nanobot Programmer",
        details:
          "Develops genetic analysis algorithms and precision medicine protocols. Recently discovered by Meera programming nanobots for targeted genetic assassination disguised as medical treatment.",
        motive:
          "Meera was exposing nanobot assassination technology to international bioweapons authorities",
        alibi:
          "Says she was demonstrating genetic analysis capabilities to WHO medical evaluation team",
        evidence:
          "Genetic demonstrations were automated, and she has expertise in programming targeted nanobots",
      },
      {
        id: 3,
        name: "Kavya Singh",
        age: 31,
        role: "Medical Data Director & Patient Information Seller",
        details:
          "Manages patient medical databases and healthcare information systems. Recently caught by Meera selling patient genetic data to insurance companies for coverage discrimination.",
        motive:
          "Meera was exposing patient data theft to healthcare privacy authorities and international medical ethics boards",
        alibi:
          "Claims she was managing medical database security during WHO data evaluation",
        evidence:
          "Database security was automated with AI monitoring systems during evaluations",
      },
      {
        id: 4,
        name: "Dr. Kiran Kumar",
        age: 35,
        role: "Clinical Research Director & Human Experimentation Coordinator",
        details:
          "Manages clinical trials and medical research protocols. Recently discovered by Meera conducting unauthorized human experiments using AI medical platforms.",
        motive:
          "Meera was exposing human experimentation to international medical ethics authorities and WHO",
        alibi:
          "Says he was presenting clinical research results to WHO medical evaluation committee",
        evidence:
          "Clinical presentations were pre-recorded with fabricated research data",
      },
      {
        id: 5,
        name: "Anjali Verma",
        age: 32,
        role: "Pharmaceutical Partnership Manager & Illegal Drug Testing Coordinator",
        details:
          "Manages pharmaceutical partnerships and drug development collaborations. Recently caught by Meera facilitating illegal drug testing on patients through AI medical platform.",
        motive:
          "Meera was exposing illegal drug testing to pharmaceutical regulatory authorities and international health organizations",
        alibi:
          "Claims she was coordinating with pharmaceutical partners during WHO demonstration",
        evidence:
          "Pharmaceutical coordination was managed by automated partnership systems",
      },
      {
        id: 6,
        name: "Sunita Agarwal",
        age: 35,
        role: "Meera's Wife & International Medical Fraud Coordinator",
        details:
          "Manages international medical partnerships and global healthcare relationships. Recently discovered by Meera coordinating international medical fraud using AI healthcare platform.",
        motive:
          "Meera's exposure would destroy international medical fraud network and result in global criminal charges",
        alibi:
          "Says she was managing international medical partnerships during WHO evaluation",
        evidence:
          "International partnerships were managed by automated diplomatic systems during evaluations",
      },
      {
        id: 7,
        name: "Vikash Reddy",
        age: 33,
        role: "Deepfake Medical Research Creator & Scientific Fraud Coordinator",
        details:
          "Creates AI-generated medical research and clinical trial documentation. Recently caught by Meera using deepfake technology to create fake medical breakthroughs and fraudulent research.",
        motive:
          "Meera was exposing deepfake medical research to international scientific community and regulatory authorities",
        alibi:
          "Claims he was presenting AI-generated research results to WHO evaluation team",
        evidence:
          "Research presentations were automated with pre-generated deepfake content",
      },
      {
        id: 8,
        name: "Dr. Rajesh Malhotra",
        age: 38,
        role: "Medical Ethics Violator & Genetic Discrimination Coordinator",
        details:
          "Manages medical ethics compliance and patient rights protocols. Recently caught by Meera conducting genetic discrimination through AI-powered medical profiling.",
        motive:
          "Meera was exposing genetic discrimination to international human rights organizations and medical ethics boards",
        alibi:
          "Says he was ensuring ethical compliance during WHO medical evaluation",
        evidence:
          "Ethical compliance was managed by automated monitoring systems during evaluations",
      },
      {
        id: 9,
        name: "Deepika Joshi",
        age: 29,
        role: "Insurance Fraud Coordinator & Medical Coverage Denier",
        details:
          "Manages insurance partnerships and medical coverage algorithms. Recently discovered by Meera using AI predictions to help insurance companies deny medical coverage.",
        motive:
          "Meera was exposing insurance fraud to financial regulatory authorities and healthcare protection agencies",
        alibi:
          "Claims she was demonstrating insurance integration capabilities to WHO officials",
        evidence:
          "Insurance demonstrations were automated with pre-configured denial algorithms",
      },
      {
        id: 10,
        name: "Dr. Arjun Gupta",
        age: 34,
        role: "Medical AI Fraud Director & Treatment Manipulation Expert",
        details:
          "Manages AI treatment recommendations and medical protocol algorithms. Recently caught by Meera programming AI to recommend expensive treatments regardless of medical necessity.",
        motive:
          "Meera was exposing treatment manipulation to international healthcare fraud authorities",
        alibi:
          "Says he was demonstrating AI treatment protocols to WHO medical evaluation team",
        evidence:
          "Treatment demonstrations were pre-programmed with expensive recommendation bias",
      },
      {
        id: 11,
        name: "Neha Agarwal",
        age: 30,
        role: "Medical Regulatory Fraud Coordinator & Approval Buyer",
        details:
          "Manages medical regulatory compliance and international approvals. Recently caught by Meera buying fake medical approvals and bribing international regulatory authorities.",
        motive:
          "Meera was exposing regulatory bribery to international medical authorities and anti-corruption agencies",
        alibi:
          "Claims she was managing regulatory compliance during WHO evaluation process",
        evidence:
          "Regulatory compliance was automated during international evaluation processes",
      },
      {
        id: 12,
        name: "Dr. Ravi Verma",
        age: 37,
        role: "Competing Medical AI Founder & Industrial Saboteur",
        details:
          "Represents competing medical AI startup and conducts industrial espionage. Recently caught by Meera stealing medical AI technology and conducting competitive sabotage.",
        motive:
          "Meera was exposing medical technology theft to intellectual property authorities and healthcare industry regulators",
        alibi:
          "Says he was observing demonstration as potential medical AI collaboration partner",
        evidence:
          "Collaboration discussions were managed by business development teams during WHO evaluations",
      },
      {
        id: 13,
        name: "Kavita Singh",
        age: 28,
        role: "Medical Investment Fraudster & Healthcare Scammer",
        details:
          "Manages medical technology investments and healthcare funding. Recently caught by Meera conducting massive healthcare investment fraud using fake medical AI breakthroughs.",
        motive:
          "Meera was exposing ₹3000 crore medical investment fraud to financial crime authorities",
        alibi:
          "Claims she was managing investor communications during WHO medical evaluation",
        evidence:
          "Investor communications were automated during international medical demonstrations",
      },
      {
        id: 14,
        name: "Dr. Sanjay Kumar",
        age: 39,
        role: "Medical Weapons Consultant & Biological Warfare Expert",
        details:
          "Provides medical technology consulting for biological warfare applications. Recently caught by Meera developing medical AI systems for biological weapons targeting.",
        motive:
          "Meera was exposing biological weapons development to international weapons control authorities",
        alibi:
          "Says he was evaluating medical applications during WHO healthcare demonstration",
        evidence:
          "Medical evaluation was conducted by WHO technical teams during demonstration",
      },
      {
        id: 15,
        name: "Dr. Meera Singh",
        age: 33,
        role: "Medical Human Rights Violator & Patient Exploitation Coordinator",
        details:
          "Manages medical human rights compliance and patient protection protocols. Recently caught by Meera conducting systematic patient exploitation through AI medical platform.",
        motive:
          "Meera was exposing patient exploitation to international human rights organizations and medical ethics authorities",
        alibi:
          "Claims she was ensuring patient rights compliance during WHO evaluation",
        evidence:
          "Patient rights monitoring was automated during international medical evaluations",
      },
      {
        id: 16,
        name: "Dr. Rohit Kumar",
        age: 35,
        role: "Hidden Call Center Coordinator & Medical Diagnosis Fraud Director",
        details:
          "Technical director managing the hidden human doctor call centers disguised as AI systems. Recently caught by Meera running massive medical diagnosis fraud using human doctors instead of AI.",
        motive:
          "Meera was exposing the entire fake AI medical system to WHO and international healthcare authorities",
        alibi:
          "Says he was managing AI system operations during critical WHO demonstration",
        evidence:
          "AI operations were actually human call centers, and he had access to nanobot programming labs through medical research partnerships",
      },
    ],
    killer: 2,
    solution:
      "Dr. Priya Verma killed Dr. Meera Agarwal. As genetic engineering expert, she had the specific expertise to program nanobots for targeted genetic assassination, faced exposure for developing nanobot assassination technology disguised as medical treatment, and her genetic analysis demonstration alibi was false as the systems were automated during WHO evaluations.",
  },
];