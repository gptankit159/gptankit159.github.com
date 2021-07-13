class Quest {
    constructor(ques, opt1, opt2, opt3, opt4, ans) {
        this.ques = ques;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
        this.opt4 = opt4;
        this.ans = ans;
    }
    load(){
        document.querySelector("#que").innerHTML = this.ques;
        // console.log("Execute");
        document.querySelector("#a1").innerHTML = this.opt1;
        document.querySelector("#a2").innerHTML = this.opt2;
        document.querySelector("#a3").innerHTML = this.opt3;
        document.querySelector("#a4").innerHTML = this.opt4;
    }
}
let Q1 = new Quest(
    "1.How many rings are on the Olympic flag?",
    "None",
    "4",
    "5",
    "7",
    "5"
);
let Q2 = new Quest(
    "2.A group of people related to one another by blood, marriage or adoption.",
    "Family",
    "Relatives",
    "Mom and dad",
    "Siblings and parents",
    "Family"
);
let Q3 = new Quest(
    "3. All the people who are born and live in about the same time span.",
    "Age groups",
    "Generation",
    "Close friends",
    "Family members",
    "Generation"
);
let Q4 = new Quest(
   " 4. A doctor with a PhD is a doctor of what?",
    "Philosophy",
    "Psychology",
    "Phrenology",
    "Physical Therapy",
    "Philosophy"
);
let Q5 = new Quest(
    "5. What is the molecular formula of Ozone?",
    "O3",
    "C6H2O6",
    "N2O",
    "SO4",
    "O3"
);

setTimeout(() => {  console.log("World!"); }, 2000);
const Quests = [Q1,Q2,Q3,Q4,Q5];
var i = 0;
Quests[i].load();
let total = 0;
let btnss = document.querySelectorAll(".ans");

btnss.forEach((btn)=> {
    btn.addEventListener("click", () => {
        btn.classList.remove("bt");
        btn.classList.add("def");
        let con =  Boolean(btn.innerHTML === Quests[i].ans);
        if(con){
            btn.classList.add("corr");
            total++;
        }
        for(let b of btnss){
            if (b.innerHTML == Quests[i].ans)
                b.classList.add("corr");
                setTimeout(()=>{
                    if(!con)
                    b.classList.remove("corr");
                },1000);
        }
        setTimeout(()=>{
            btn.classList.add("bt");
            btn.classList.remove("corr","def");
            if(i < Quests.length-1)
            Quests[++i].load();
            else
            document.querySelector(".box").innerHTML= "<div id='result'> You scored : " + total + "/5 </div>" ;
        }, 1500);
        
    });
});
