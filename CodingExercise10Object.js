"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {languages} = plan.skills;
        let myLang = languages.join(' ');
        myLang = myLang.toLocaleUpperCase();
        myLang = `Мне ${plan.age} и я владею языками: ` + myLang + ' '; 
        return myLang;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}


function showProgrammingLangs(plan) {
    let {skills} = plan;
    let getLang = skills.programmingLangs;
    if (Object.keys(getLang).length > 0) {
        let partString = ``;
        let i;
        for (i in getLang) {
            partString = partString + `Язык ${i} изучен на ${getLang[i]}\n`;           
        }
        return partString;
    } else {
        return '';
    }
}

console.log('StartTest');

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


console.log('EndTest');
