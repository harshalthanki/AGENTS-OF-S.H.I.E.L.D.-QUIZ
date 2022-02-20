class Question {
     
    constructor() {
      
      this.question = createElement('h1');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
      this.RNo=0;
      
      this.answer=0;
    }
    hide(){
      this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
     
    }

display(){

  //x=Math.round(random(1,5));

  //for (let j=0; j<4; j++)
  while(game.RndNo.length<=100)
  {
    this.RNo=Math.round(random(1,105));

    if(this.RNo===0)
    {
      this.RNo+=1;
    }

    for (let i = 0; i < game.RndNo.length; i++) 
    {
      if(game.RndNo[i]===this.RNo)
      {
        this.RNo=0;
        break;
      }
    } 

    if(this.RNo!=0)
    {
      break;
    }
  }
  
  append(game.RndNo, this.RNo);
  
  this.q1();
  
  
  
  game.button.mousePressed(()=>{
    game.SNo+=1;
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.checkAns();
    if(this.answer===game.input2.value())
     {
      game.merit+=1;
     }
     game.input2.value('');
     //console.log(game.merit)
    // console.log(this.answer)
    // console.log(this.input2.value())
  });
  }

  q1()
  {
    switch (this.RNo) {
      case 1:
        this.qst("Q) What was Grant Ward’s level before joining Coulson’s team?","a) 6","b) 7","c) 5","d) 9");
        break;
      case 2:
        this.qst("Q) Who was the Cavalry?","a) Skye ","b) Phil Coulson","c) Melinda May","d) Leopold Fitz");
        break;
      case 3:
        this.qst("Q) What’s an 0-8-4?","a) A number used to denote Skye","b) An object of unknown origin","c)	Password for Skye’s laptop","d)	Code language for Fitz-Simmons ");
        break;
      case 4:
        this.qst("Q) What was the name of the girl in the flower dress?","a) Jiaying","b)	Melinda May","c) Jemma Simmons","d)	None of these");
        break;
      case 5:
        this.qst("Q) Which of these was Fitz’s favorite sandwich?","a) Prosciutto and buffalo mozzarella","b)	Peanut butter, bacon and bananas","c)	Donut Monte Cristo","d)	Chicken and waffles sandwich");
        break;
      case 6:
        this.qst("Q) What’s “A Magical Place”?","a)	Skye’s home","b) Coulson’s home","c) Jiaying’s office","d) None of these");
        break;
      case 7:
        this.qst("Q) What was the first 0-8-4?", "a) Skye", "b) Tesseract", "c) The Diviner", "d)	Both b) and c)"); 
        break;
      case 8:
        this.qst("Q) Where was Lorelei from?","a)	Afterlife","b) Tahiti","c) Asgard","d) S.H.I.E.L.D.");
        break;
      case 9:
        this.qst("Q) Who was/were the S.O. of Coulson and Garrett?","a)	Agent Triplett","b)	Grant Ward","c)	Nick Fury","d) Both a) and b)");
        break;
      case 10:
        this.qst("Q) What was the name of Fury’s secret base in Ontario?","a)	Providence","b)	The Sandbox","c) The Cocoon","d) The Playground");
        break;
      case 11:
        this.qst("Q) What name was given to ICER in the first place?","a)	Arc Repulsor","b) Night-Night Gun","c)	Monkey Gun","d) Icy-Icy Gun");
        break;
      case 12:
        this.qst("Q) For whom did Skye worked before Coulson recruited her?","a) Afterlife","b)	S.H.I.E.L.D.","c) Hydra","d)	The Rising Tide");
        break;
      case 13:
        this.qst("Q) Who killed Victoria Hand?","a) John Garrett","b)	Grand Ward","c) Phil Coulson","d)	Mike Peterson");
        break;
      case 14:
        this.qst("Q) Whom was Grant Ward with?","a) Raina","b) Jiaying","c) Coulson","d)	Garrett");
        break;
      case 15:
        this.qst("Q) Who was killed by Grant Ward?","a) Billy Koenig","b)	Daisy Johnson","c) Leopold Fitz","d)	None of these");
        break;
      case 16:
        this.qst("Q) Who killed Isabelle Hartley?","a) Carl Creel","b)	Idaho","c) Lance Hunter","d)	Grant Ward");
        break;
      case 17:
        this.qst("Q) Who was double-undercover?","a) Lance Hunter","b)	Grant Ward","c) Jemma Simmons","d)	Bobbi Morse");
        break;
      case 18:
        this.qst("Q) Who finds Kree City first?","a) S.H.I.E.L.D.","b)	Real S.H.I.E.L.D.","c) Hydra","d)	None of these");
        break;
      case 19:
        this.qst("Q) Who was the leader of Real S.H.I.E.L.D.?","a) Robert Gonzales","b)	Phil Coulson","c) Nick Fury","d)	Alphonso Mackenzie");
        break;
      case 20:
        this.qst("Q) Who was Melinda May’s Husband?","a) Phil Coulson","b)	Andrew Garner","c) Both a) and b)","d)	None of these");
        break;
      case 21:
        this.qst("Q) Whom did Coulson go to for alliance in Season 2, who no one could expect to be true?","a) Lance Hunter","b)	Mike Peterson","c) Robert Gonzales","d)	Grant Ward");
        break;
      case 22:
        this.qst("Q) What happened to the Terrigen Crystals at last?","a) Went into the Ocean","b)	All were used","c) All of those were destroyed","d)	None of these");
        break;
      case 23:
        this.qst("Q) Who killed Raina?","a) Jiaying","b)	Cal","c) Grant Ward","d)	Daisy");
        break;
      case 24:
        this.qst("Q) Who was the partner of Bobbi Morse?","a) Lance Hunter","b)	Alphonso Mackenzie","c) Jemma Simmons","d)	Phil Coulson");
        break;
      case 25:
        this.qst("Q) Who was brainwashed by Daniel Whitehall?","a) Agent 13","b)	Daisy Johnson","c) Grant Ward","d)	Agent 33");
        break;
      case 26:
        this.qst("Q) What were the trigger words of Hydra for brainwashing?","a) “What is best is you comply” ","b)	“Compliance will be rewarded”","c) “You know what is best”","d)	All of above");
        break;
      case 27:
        this.qst("Q) Who said “Discovery requires Experimentation”?","a) Robert Gonzales","b)	Cal","c) Daniel Whitehall","d)	Leopold Fitz");
        break;
      case 28:
        this.qst("Q) Who killed Agent 33?","a) Daisy Johnson","b)	Bobbi Morse","c) Lance Hunter","d)	Grant Ward");
        break;
      case 29:
        this.qst("Q) Who killed Daniel Whitehall?","a) Grant Ward","b)	Phil Coulson","c) Cal","d)	Jiaying");
        break;
      case 30:
        this.qst("Q) Who killed Jiaying?","a) Raina","b)	Daisy","c) Cal","d)	Mack");
        break;
      case 31:
        this.qst("Q) Who was the leader of ATCU?","a) Rosalind Price","b)	Grant Ward","c) Mack","d)	Glenn Talbot");
        break;
      case 32:
        this.qst("Q) Who was Lash?","a) Phil Coulson","b)	Grant Ward","c) Will Daniels","d)	Andrew Garner");
        break;
      case 33:
        this.qst("Q) What swallowed Jemma Simmons?","a) Maveth","b)	Monolith","c) Hydra","d)	Hive");
        break;
      case 34:
        this.qst("Q) Who leads Hydra after the death of Daniel Whitehall?","a) Sunil Bakshi","b)	Gideon Malick","c) Phil Coulson","d)	Grant Ward");
        break;
      case 35:
        this.qst("Q) Who killed Rosalind Price?","a) Phil Coulson","b)	Daisy Johnson","c) Grant Ward","d)	Lance Hunter");
        break;
      case 36:
        this.qst("Q) Who made an attempt to kill Grant Ward by gun?","a) Phil Coulson","b)	Daisy Johnson","c) Jemma Simmons","d)	Both b) and c)");
        break;
      case 37:
        this.qst("Q) Who is/are the members of the team “The Secret Warriors”?","a) Elena Rodriguez","b)	Joey Gutierrez","c) Lincoln Campbell","d)	All of these");
        break;
      case 38:
        this.qst("Q) Who is the original creator of Hydra and how?","a) Hive, as its followers created Hydra","b)	Hive, as it created Hydra itself","c) Red Skull, as he created Hydra himself","d)	Red Skull, as his followers created Hydra");
        break;
      case 39:
        this.qst("Q) Who killed Grant Ward?","a) Phil Coulson","b)	Daisy Johnson","c) Jemma Simmons","d)	None of these");
        break;
      case 40:
        this.qst("Q) Who killed Gideon Malick?","a) Hive","b)	Daisy Johnson","c) Grant Ward","d)	Phil Coulson");
        break;
      case 41:
        this.qst("Q) Whose body does Hive take and come to Earth?","a) Grant Ward","b)	Phil Coulson","c) Will Daniels","d)	Lincoln Campbell");
        break;
      case 42:
        this.qst("Q) Which inhuman was swayed last by Hive?","a) Daisy Johnson","b)	Elena Rodriguez","c) Lincoln Campbell","d)	Charles Hinton");
        break;
      case 43:
        this.qst("Q) What was Charles Hinton’s inhuman power?","a) To see future","b)	Show future to someone who touched him","c) To manipulate any metallic object","d)	None of these");
        break;
      case 44:
        this.qst("Q) Who saves Daisy Johnson in Season 3?","a) Lash","b)	Hive","c) Yo-Yo","d)	None of these");
        break;
      case 45:
        this.qst("Q) What was name given to Daisy Johnson by press?","a) Tremors","b)	Earthquake","c) Quake","d)	Skye");
        break;
      case 46:
        this.qst("Q) Who was the new director of S.H.I.E.L.D. in Season 4?","a)	Phil Coulson","b)	Nick Fury","c)	Daisy Johnson","d)	Jeffery Mace");
        break;
      case 47:
        this.qst("Q) Who is the Ghost Rider?","a)	Nicholas Cage","b)	Johnny Blaze","c)	Robbie Reyes","d)	Grant Ward");
        break;
      case 48:
        this.qst("Q) Whom did Jeffery trust the most in S.H.I.E.L.D.?","a)	Daisy Johnson","b)	Alphonso Mack","c)	Phil Coulson","d)	Jemma Simmons");
        break;
      case 49:
        this.qst("Q) Was Jeffery really an inhuman?","a)	Yes","b)	No ","c)	We still don’t know","d)	It’s Classified");
        break;
      case 50:
        this.qst("Q) Who was Robbie Reyes’ uncle?","a)	Phil Coulson","b)	Eli Morrow","c)	Tom Hiddleston","d)	Anton Ivanov");
        break;
      case 51:
        this.qst("Q) Who was The Superior?","a)	The Leader of Watchdogs","b)	“Russian”","c)	Ian Quinn","d)	Both a) and b)");
        break;
      case 52:
        this.qst("Q) Who created AIDA?","a)	Dr. Holden Radcliffe","b)	Leopold Fitz","c)	Jemma Simmons","d)	Both a) and b)");
        break;
      case 53:
        this.qst("Q) What is the full form of AIDA?","a)	Anton Ivanov Deke Agency","b)	Agents Initiative Deleted Artificiality","c)	Agnes Idaho Deficiency Aura","d)	Artificial Intelligent Digital Assistant");
        break;
      case 54:
        this.qst("Q) Who became ghost after dealing with Darkhold?","a)	Lucy Bauer","b)	Gabe Reyes","c)	Ghost Rider","d)	Robbie Reyes");
        break;
      case 55:
        this.qst("Q) Who created The Framework?","a)	Leopold Fitz","b)	Jemma Simmons","c)	Dr. Holden Radcliffe","d)	Both a) and c)");
        break;
      case 56:
        this.qst("Q) Which S.H.I.E.L.D. Agent died in Framework?","a)	Melinda May","b)	Jeffery Mace","c)	Phil Coulson","d)	Jemma Simmons");
        break;
      case 57:
        this.qst("Q) Who was “Doctor” in the Framework?","a)	Phil Coulson","b)	Jemma Simmons","c)	The Patriot","d)	Leopold Fitz");
        break;
      case 58:
        this.qst("Q) Which S.H.I.E.L.D. agent who was dead in real life came in the Framework?","a)	Grant Ward","b)	Melinda May","c)	Mike Peterson","d)	Antoine Triplett");
        break;
      case 59:
        this.qst("Q) Whose brain was saved in a jar?","a)	AIDA","b)	Coulson","c)	Anton Ivanov","d)	Radcliffe");
        break;
      case 60:
        this.qst("Q) Who shot Glenn Talbot?","a)	Anton Ivanov","b)	Daisy Johnson","c)	Phil Coulson","d)	None of these");
        break;
      case 61:
        this.qst("Q) Who took S.H.I.E.L.D. agents to the Time Monolith?","a)	Leopold Fitz","b)	Enoch","c)	Deke Shaw","d)	None of these");
        break;
      case 62:
        this.qst("Q) Who the head Kree at the lighthouse?","a)	Faulnak","b)	Sinara","c)	Kasius","d)	None of these");
        break;
      case 63:
        this.qst("Q) Who was the original Destroyer of Worlds?","a)	Quake ","b)	Daisy Johnson","c)	Ruby Hale","d)	None of these");
        break;
      case 64:
        this.qst("Q) Who chopped off Yo-Yo’s hands?","a)	General Hale","b)	Yo-Yo","c)	Ruby Hale","d)	Kree Warrior");
        break;
      case 65:
        this.qst("Q) Who was the seer?","a)	Robin","b)	Enoch","c)	Kasius","d)	Glenn Talbot");
        break;
      case 66:
        this.qst("Q) What does Deke call Fitz?","a)	Nana","b)	Bobo","c)	Fitzy","d)	None of these");
        break;
      case 67:
        this.qst("Q) Why was Fitz not sent to the future by Enoch?","a)	He did not want to","b)	He was on the list of agents to be sent to future","c)	He was not on Robin’s list","d)	He was the part of the prophecy");
        break;
      case 68:
        this.qst("Q) Where were the Vrellnexians in the lighthouse?","a)	Level 6 ","b)	Level 3","c)	On the top","d)	At the bottom");
        break;
      case 69:
        this.qst("Q) What did Deke do to impress Daisy?","a)	He told her about his collections","b)	He killed Kree soldiers","c)	He put lemons on her bed","d)	He made jokes on Kree");
        break;
      case 70:
        this.qst("Q) What was the name of the intergalactic alliance formed by members of six extra-terrestrial species?","a)	Xrenials","b)	The Vrextinal","c)	The Confederacy","d)	House of Kasius");
        break;
      case 71:
        this.qst("Q) Who saved S.H.I.E.L.D. agents?","a)	Deke Shaw","b)	Robin","c)	Flint","d)	All of these");
        break;
      case 72:
        this.qst("Q) Who was Deke’s friend?","a)	Zev","b)	Kasius","c)	Sinara","d)	Tess");
        break;
      case 73:
        this.qst("Q) What is the inhuman power of Flint?","a)	He can control land around him","b)	He can run very fast","c)	He can control Inhumans","d)	None of these");
        break;
      case 74:
        this.qst("Q) Is Graviton an Inhuman?","a)	Yes","b)	No","c)	Can’t tell","d)	It’s Classified");
        break;
      case 75:
        this.qst("Q) What was the objective of Graviton?","a)	He wanted to be King of Earth","b)	He wanted to defeat Quake","c)	He wanted to increase his powers","d)	He wanted to rule the Universe");
        break;
      case 76:
        this.qst("Q) What was the mission of the team led by Daisy in Zephyr?","a)	They wanted to study space","b)	They wanted to bring Fitz","c)	They wanted to pass time by travelling","d)	None of these");
        break;
      case 77:
        this.qst("Q) What was the original name of being that used Coulson’s body as vessel?","a)	Sarge","b)	Jaco","c)	Snowflake","d)	None of these");
        break;
      case 78:
        this.qst("Q) What was the traditional name of Monoliths?","a)	Maveths","b)	Alveus","c)	Izels","d)	Di’Allas");
        break;
      case 79:
        this.qst("Q) Which planet were Fitz and Enoch had been to?","a)	Kitson","b)	Asgard","c)	Olympia","d)	None of these");
        break;
      case 80:
        this.qst("Q) Who created Shrikes?","a)	Izel","b)	Sarge","c)	Pachakutiq","d)	Quake");
        break;
      case 81:
        this.qst("Q) Who had prosthetic hands?","a)	Deke","b)	Daisy","c)	Jemma","d)	Yo-Yo");
        break;
      case 82:
        this.qst("Q) Where were Chronicoms from?","a)	Celesta","b)	Chronyca-2","c)	Earth","d)	Olympia");
        break;
      case 83:
        this.qst("Q) Who left Sarge’s team?","a)	Jaco","b)	Pax","c)	Tinker","d)	Snowflake");
        break;
      case 84:
        this.qst("Q) Who was undercover S.H.I.E.L.D. agent in Deke’s company?","a)	Sequoia","b)	Trevor","c)	Deke","d)	Weaver");
        break;
      case 85:
        this.qst("Q) Whom did Izel kill while transferring from one to another bodies of S.H.I.E.L.D. agents?","a)	Piper","b)	Deke","c)	Fitz","d)	Davis");
        break;
      case 86:
        this.qst("Q) What did Shrike do to Yo-Yo?","a) Killed her","b)	Took her powers","c) Made her kill others","d)	None of these");
        break;
      case 87:
        this.qst("Q) What was the temple that Izel used called?","a)	The Temple of the Non-Livings","b)	The Temple of the Di’Allas","c)	The Temple of the Forgotten","d)	None of these");
        break;
      case 88:
        this.qst("Q) What were Puffies?","a)	Candies","b)	Pizzeries","c)	Hot food items","d)	None of these");
        break;
      case 89:
        this.qst("Q) Who destroyed Chronicoms’ planet?","a)	Sarge’s team","b)	Kree Warriors","c)	People of Kitson","d)	Shrikes");
        break;
      case 90:
        this.qst("Q) Who killed Melinda May?","a)	Sarge","b)	Pachakutiq","c)	Coulson","d)	Izel");
        break;
      case 91:
        this.qst("Q) Where did S.H.I.E.L.D. agents jumped back to time first?","a)	1938","b)	1935","c)	1932","d)	1931");
        break;
      case 92:
        this.qst("Q) What did Chronicoms want to destroy in the past?","a)	S.H.I.E.L.D.","b)	HYDRA","c)	Both a) and b)","d)	None of these");
        break;
      case 93:
        this.qst("Q) Who was Freddy?","a)	Gideon Malick","b)	Nathaniel Malick","c)	Wilfred Malick","d)	All of the above");
        break;
      case 94:
        this.qst("Q) Who “took a bullet” for Coulson’s team?","a)	Ernest","b)	Enoch","c)	Freddy","d)	Mack");
        break;
      case 95:
        this.qst("Q) What was the password of the bar?","a)	Krazy Kanoe","b)	Assemble","c)	Sharkfish","d)	None of these");
        break;
      case 96:
        this.qst("Q) Which project was about to launch 41 years earlier than the original timeline?","a)	Project Helius","b)	Project Insight","c)	Project Terrigenesis","d)	Project Hive");
        break;
      case 97:
        this.qst("Q) Who was Daisy’s sister according to her?","a)	Kora","b)	Jemma Simmons","c)	Jiaying","d)	Melinda May");
        break;
      case 98:
        this.qst("Q) Which was the first fallen agent of S.H.I.E.L.D.?","a)	Agent Blake","b)	Agent Carter","c)	Agent Stoner","d)	Agent Sousa");
        break;
      case 99:
        this.qst("Q) Who would not be born in the alternate past timeline?","a)	Mack","b)	Jemma","c)	Deke","d)	Daisy");
        break;
      case 100:
        this.qst("Q) What was the name of Deke’s mother?","a)	Jemma Simmons","b)	Ava","c)	Sibyl","d)	Alya");
        break;
      case 101:
        this.qst("Q) Which were the two agents who remembered all during the time loops?","a)	Enoch and Jemma","b)	Deke and Jemma","c)	Daisy and Coulson","d)	Coulson and Yo-Yo");
        break;
      case 102:
        this.qst("Q) Who got Gordon’s powers?","a)	Kora","b)	Nathaniel","c)	Garett","d)	None of these");
        break;
      case 103:
        this.qst("Q) Who was “The D”?","a)	Mack","b)	Coulson","c)	Freddy","d)	None of these");
        break;
      case 104:
        this.qst("Q) Who had Electrochron Displacement Mechanism?","a)	Chronicoms","b)	Zephyr 1","c)	Zephyr 3","d)	None of these");
        break;
      case 105:
        this.qst("Q) What was the name of the Academy in which May taught?","a)	Andrew Academy","b)	Flint Academy","c)	Enoch Academy","d)	None of these");
        break;
      default:
        break;
    }
  }
  qst(Q,a1,a2,a3,a4)
  {
    this.question.html(Q);
    this.question.position(width/2-600,height/2-300);
    this.option1.html(a1);
    this.option1.position(width/2-600,height/2-200);
    this.option2.html(a2);
    this.option2.position(width/2-600,height/2-100);
    this.option3.html(a3);
    this.option3.position( width/2-600,height/2);
    this.option4.html(a4);
    this.option4.position(width/2-600,height/2+100);
  }

  checkAns()
  {
    switch (this.RNo) {
      case 1:
        this.answer = "a";

        break;
      case 2:
        this.answer = "c";

        break;
      case 3:
        this.answer = "b";

        break;
      case 4:
        this.answer = "d";

        break;
      case 5:
        this.answer = "a";

        break;
      case 6:
        this.answer = "d";

        break;
      case 7:
        this.answer = "c";

        break;
      case 8:
        this.answer = "c";

        break;
      case 9:
        this.answer = "c";

        break;
      case 10:
        this.answer = "a";

        break;
      case 11:
        this.answer = "b";

        break;
      case 12:
        this.answer = "d";

        break;
      case 13:
        this.answer = "b";

        break;
      case 14:
        this.answer = "d";

        break;
      case 15:
        this.answer = "d";

        break;
      case 16:
        this.answer = "a";

        break;
      case 17:
        this.answer = "d";

        break;
      case 18:
        this.answer = "a";

        break;
      case 19:
        this.answer = "a";

        break;
      case 20:
        this.answer = "b";
        
        break;
      case 21:
        this.answer = "d";

        break;
      case 22:
        this.answer = "a";

        break;
      case 23:
        this.answer = "a";

        break;
      case 24:
        this.answer = "b";

        break;
      case 25:
        this.answer = "d";

        break;
      case 26:
        this.answer = "d";
        
        break;
      case 27:
        this.answer = "c";
        
        break;
      case 28:
        this.answer = "d";
        
        break;
      case 29:
        this.answer = "b";
        
        break;
      case 30:
        this.answer = "c";
        
        break;
      case 31:
        this.answer = "a";
        
        break;
      case 32:
        this.answer = "d";
        
        break;
      case 33:
        this.answer = "b";
        
        break;
      case 34:
        this.answer = "d";
        
        break;
      case 35:
        this.answer = "c";
        
        break;
      case 36:
        this.answer = "b";
        
        break;
      case 37:
        this.answer = "a";
        
        break;
      case 38:
        this.answer = "d";
        
        break;
      case 39:
        this.answer = "a";
        
        break;
      case 40:
        this.answer = "b";
        
        break;
      case 41:
        this.answer = "a";
        
        break;
      case 42:
        this.answer = "c";
        
        break;
      case 43:
        this.answer = "d";
        
        break;
      case 44:
        this.answer = "a";
        
        break;
      case 45:
        this.answer = "c";
        
        break;
      case 46:
        this.answer = "d";
        
        break;
      case 47:
        this.answer = "c";
        
        break;
      case 48:
        this.answer = "d";
        
        break;
      case 49:
        this.answer = "b";
        
        break;
      case 50:
        this.answer = "b";
        
        break;
      case 51:
        this.answer = "d";
        
        break;
      case 52:
        this.answer = "d";
        
        break;
      case 53:
        this.answer = "d";
        
        break;
      case 54:
        this.answer = "a";
        
        break;
      case 55:
        this.answer = "a";
        
        break;
      case 56:
        this.answer = "d";
        
        break;
      case 57:
        this.answer = "d";
        
        break;
      case 58:
        this.answer = "d";
        
        break;
      case 59:
        this.answer = "c";
        
        break;
      case 60:
        this.answer = "d";
        
        break;
      case 61:
        this.answer = "b";
        
        break;
      case 62:
        this.answer = "c";
        
        break;
      case 63:
        this.answer = "d";
        
        break;
      case 64:
        this.answer = "c";
        
        break;
      case 65:
        this.answer = "a";
        
        break;
      case 66:
        this.answer = "b";
        
        break;
      case 67:
        this.answer = "c";
        
        break;
      case 68:
        this.answer = "b";
        
        break;
      case 69:
        this.answer = "c";
        
        break;
      case 70:
        this.answer = "c";
        
        break;
      case 71:
        this.answer = "d";
        
        break;
      case 72:
        this.answer = "d";
        
        break;
      case 73:
        this.answer = "a";
        
        break;
      case 74:
        this.answer = "b";
        
        break;
      case 75:
        this.answer = "c";
        
        break;
      case 76:
        this.answer = "b";
        
        break;
      case 77:
        this.answer = "d";
        
        break;
      case 78:
        this.answer = "d";
        
        break;
      case 79:
        this.answer = "a";
        
        break;
      case 80:
        this.answer = "a";
        
        break;
      case 81:
        this.answer = "d";

        break;
      case 82:
        this.answer = "b";

        break;
      case 83:
        this.answer = "d";
        
        break;
      case 84:
        this.answer = "b";
        
        break;
      case 85:
        this.answer = "d";
        
        break;
      case 86:
        this.answer = "d";
        
        break;
      case 87:
        this.answer = "c";
        
        break;
      case 88:
        this.answer = "a";
        
        break;
      case 89:
        this.answer = "d";
        
        break;
      case 90:
        this.answer = "b";
        
        break;
      case 91:
        this.answer = "d";
        
        break;
      case 92:
        this.answer = "a";
        
        break;
      case 93:
        this.answer = "c";
        
        break;
      case 94:
        this.answer = "a";
        
        break;
      case 95:
        this.answer = "d";
        
        break;
      case 96:
        this.answer = "b";
        
        break;
      case 97:
        this.answer = "b";
        
        break;
      case 98:
        this.answer = "d";
        
        break;
      case 99:
        this.answer = "d";
        
        break;
      case 100:
        this.answer = "d";
        
        break;
      case 101:
        this.answer = "c";
        
        break;
      case 102:
        this.answer = "c";
        
        break;
      case 103:
        this.answer = "d";
        
        break;
      case 104:
        this.answer = "a";
        
        break;
      case 105:
        this.answer = "d";
        
        break;
      default:
        break;
    }
  }
}