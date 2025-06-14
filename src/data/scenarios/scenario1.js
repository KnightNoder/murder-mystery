export default {
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
  }