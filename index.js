//要素の宣言
let question = document.getElementById("question");
let questionBox = document.getElementById("question_box");
let optionsBox = document.getElementById("options_box");
let optionA = document.getElementById("option_A");
let optionB = document.getElementById("option_B");

let result = document.getElementById("result");
let resultBox = document.getElementById("result_box");
let resultDetail = document.getElementById("result_detail");


//質問のJSON
let array = {
    "no1": {
        "attribute" : "A",
        "question": "どっちの職場が自分に似合っている？",
        "optionA": {
            "attribute" : "B",
            "option": "自分のペースや価値観で働ける職場",
            "sub": "なぜ？",
            "subA": "自分が落ち着ける、楽しいと思える職場で働けばモチベーションが上がり、成果も出せると思うから。",
            "subB": "協力して何かを作り出すより現状の矛盾や問題点を見つけ、効率的に対応する方が向いているから。"
        },
        "optionB": {
            "attribute" : "B",
            "option": "全員が協力的、秩序的に働いている職場",
            "sub": "なぜ？",
            "subA": "みんなが支え合う友好的な職場は心が落ち着くから。",
            "subB": "全員が規律を守る責任感のあるチームで働きたいから。"
        }
    },
    "no2" : {
        "question": "どちらが自分らしい？",
        "attribute" : "A",
        "optionA": {
            "attribute" : "B",
            "option": "日々のタスクをこなす一貫性と共通性がある",
            "sub": "「2,4,6,8」←を見て最初に考えることは？",
            "subA": "全部数字、全部偶数、全部二の段",
            "subB": "2ずつ増えているから次は10だ"
        },
        "optionB": {
            "attribute" : "B",
            "option": "新しいことにチャレンジする積極性と好奇心がある",
            "sub": "興味が湧くときは？",
            "subA": "芸能人を見てみたい、生で音楽を聴いてみたい、気に入ったファッションを試してみたい。",
            "subB": "知らないことを調べたい、新しいことを学びたい、なんでそうなるのかを考えたい。"
        }
    },
    
};

let results_array = {
    "A1" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "規則を守ること、効率的になるように仕切ること",
            "result": "infp",
            "detail": "空想的で理想を追い求める心理学者"
        },
        "optionB": {
            "attribute" : "D",
            "option": "ひらめくこと、新しいことにチャレンジすること",
            "result": "istj",
            "detail": "真面目でコツコツ努力する規則の鬼"
        }
    },
    "A2" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "規則を守ること、効率的になるように仕切ること",
            "result": "isfp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "今を楽しむ、考えない",
            "result": "intj",
            "detail": ""
        }
    },
    "A3" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "選択肢が一つしかないことに、自由がないこと",
            "result": "esfp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "規則を守ること、効率的になるように仕切ること",
            "result": "isfp",
            "detail": ""
        }
    },
    "A4" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "古い形式にこだわること、同じことを続けること",
            "result": "enfp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "規則を守ること、効率的になるように仕切ること",
            "result": "infp",
            "detail": ""
        }
    },
    "B1" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "周りに合わせることを強制されること",
            "result": "intp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "ひらめくこと、新しいことにチャレンジすること",
            "result": "isfj",
            "detail": ""
        }
    },
    "B2" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "周りに合わせることを強制されること",
            "result": "istp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "今を楽しむ、考えない",
            "result": "infj",
            "detail": ""
        }
    },
    "B3" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "選択肢が一つしかないこと、自由がないこと",
            "result": "estp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "周りに合わせることを強制されること",
            "result": "istp",
            "detail": ""
        }
    },
    "B4" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "古い形式にこだわること、同じことを続けること",
            "result": "entp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "周りに合わせること強制されること",
            "result": "intp",
            "detail": ""
        }
    },
    "C1" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "効率的論理的に進めること、分析解析すること",
            "result": "esfj",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "ひらめくこと、新しいことにチャレンジすること",
            "result": "isfj",
            "detail": ""
        }
    },
    "C2" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "効率的論理的に進めること、分析解析すること",
            "result": "enfj",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "今を楽しむ、考えない",
            "result": "infj",
            "detail": ""
        }
    },
    "C3" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "選択肢が一つしかないこと、自由がないこと",
            "result": "estp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "効率的論理的に進めること、分析解析すること",
            "result": "enfj",
            "detail": ""
        }
    },
    "C4" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "古い形式にこだわること、同じことを続けること",
            "result": "entp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "効率的論理的に進めること、分析解析すること",
            "result": "esfj",
            "detail": ""
        }
    },
    "D1" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "共感や感情移入、独自性を求められること",
            "result": "estj",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "ひらめくこと、新しいことにチャレンジすること",
            "result": "istj",
            "detail": ""
        }
    },
    "D2" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "共感や感情移入、独自性を求められること",
            "result": "entj",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "今を楽しむ、考えない",
            "result": "intj",
            "detail": ""
        }
    },
    "D3" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "選択肢が一つしかないこと、自由がないこと",
            "result": "esfp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "共感や感情移入、独自性を求められること",
            "result": "entj",
            "detail": ""
        }
    },
    "D4" : {
        "attribute" : "C",
        "question": "苦手なのはどっち？",
        "optionA": {
            "attribute" : "D",
            "option": "古い形式にこだわること、同じことを続けること",
            "result": "enfp",
            "detail": ""
        },
        "optionB": {
            "attribute" : "D",
            "option": "共感や感情移入、独自性を求められること",
            "result": "estj",
            "detail": ""
        }
    },
}


function lastquestion(a){
    console.log(a);
    if(a == "A1"){
        return results_array.A1
    }
    else if (a == "A2"){
        return results_array.A2
    }
    else if (a == "A3"){
        return results_array.A3
    }
    else if (a == "A4"){
        return results_array.A4
    }
    else if (a == "B1"){
        return results_array.B1
    }
    else if (a == "B2"){
        return results_array.B2
    }
    else if (a == "B3"){
        return results_array.B3
    }
    else if (a == "B4"){
        return results_array.B4
    }
    else if (a == "C1"){
        return results_array.C2
    }
    else if (a == "C2"){
        return results_array.C2
    }
    else if (a == "B3"){
        return results_array.C3
    }
    else if (a == "C4"){
        return results_array.C4
    }
    else if (a == "D1"){
        return results_array.D1
    }
    else if (a == "D2"){
        return results_array.D2
    }
    else if (a == "D3"){
        return results_array.D3
    }
    else if (a == "D4"){
        return results_array.D4
    }
    
    else{
        return "";
    }
}

let score = "";

var current = array.no1;
console.log("no1");

question.textContent = current.question;
optionA.textContent = current.optionA.option;
optionB.textContent = current.optionB.option;

optionA.addEventListener("click", function(){
    if(current.attribute == "A"){

        question.textContent = current.optionA.sub;
        optionA.textContent = current.optionA.subA;
        optionB.textContent = current.optionA.subB;

        if(current == array.no1){
            current = array.no1.optionA
            console.log("no1 A");
        }else{
            current = array.no2.optionA
            console.log("no2 A");
        }

    }
    else if(current.attribute == "B"){


        if(current == array.no1.optionA){
            current = array.no2;

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

            score += "A";
            //console.log(score);

        }
        else if(current == array.no1.optionB){
            current = array.no2;
            console.log("no2");

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

            score += "C";
        }
        else if(current == array.no2.optionA){
            score += "1";
            current = lastquestion(score);

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

        
        }
        else if(current == array.no2.optionB){
            score += "3";
            current = lastquestion(score);

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;
        }


    }
    else if(current.attribute == "C"){

        questionBox.style.display = "none";
        resultBox.style.display = "block";

        result.textContent = current.optionA.result;
        resultDetail.textContent = current.optionA.detail;

    }

});

optionB.addEventListener("click", function(){
    if(current.attribute == "A"){

        question.textContent = current.optionB.sub;
        optionA.textContent = current.optionB.subA;
        optionB.textContent = current.optionB.subB;

        if(current == array.no1){
            current = array.no1.optionB
            //console.log("no1 A");
        }else{
            current = array.no2.optionB
            //console.log("no2 A");
        }

    }
    else if(current.attribute == "B"){


        if(current == array.no1.optionA){
            current = array.no2;

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

            score += "B";

        }
        else if(current == array.no1.optionB){
            current = array.no2;

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

            score += "D";
        }

        else if(current == array.no2.optionA){
            score += "2";
            current = lastquestion(score);

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;

        }
        else if(current == array.no2.optionB){
            score += "4";
            current = lastquestion(score);

            question.textContent = current.question;
            optionA.textContent = current.optionA.option;
            optionB.textContent = current.optionB.option;
        }




    }
    else if(current.attribute == "C"){

        questionBox.style.display = "none";
        resultBox.style.display = "block";

        result.textContent = current.optionB.result;
        resultDetail.textContent = current.optionB.detail;

    }
});