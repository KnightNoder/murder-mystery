export default {
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
      "₹12 lakh in undeclared brand payment cash found hidden in home safe",
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
        evidence: "No editing activity logged on software during murder time",
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
        alibi: "Says she was preparing smoothie ingredients in the kitchen",
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
        alibi: "Says he was attending morning corporate meeting via video call",
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
        alibi: "Claims she was preparing tax documents for other clients",
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
        alibi: "Claims he was setting up camera equipment for morning shoot",
        evidence:
          "Camera setup was already completed before murder time, and he caused the 15-minute 'technical difficulties'",
      },
    ],
    killer: 2,
    solution:
      "Prachi Sharma killed Riya. She prepared the signature green smoothie daily, had direct access to add cyanide, faced theft charges that would destroy her career in the influencer industry, and her kitchen preparation alibi gave her perfect opportunity to poison the drink.",
  }