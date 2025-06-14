export default {
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
  }