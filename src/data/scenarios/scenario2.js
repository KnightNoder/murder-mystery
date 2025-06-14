export default {
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
  }