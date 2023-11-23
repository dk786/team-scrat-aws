/*  Proof of concept for a possible data structure for question/answers

const POPULAR_NAMES_UK = [
    'Tom',
    'Bryan',
    'Alice'
]

var response_obj = {
    firstname,
    lastname,
    email,
    mobile,
    email_marketing_pref,
    phone_marketing_pref,

    interested_in_ECP, //eleviating the consequences of poverty
    interested_in_TIP, //tackling injustices causing poverty
    interested_in_CCP, //adressing the impacts of climate change on poverty
    interested_in_RND, //red nose day
    interested_in_SRF, //sport relief
};

const MAX_TRIES = 3;
let first_letter = null //randomize first
let question_counter = 0;

let questions = [
    {
        question : "I reckon your first name begins with '$LETTER'",
        regen_func : (question) => {
            let rand_char = POPULAR_NAMES_UK[POPULAR_NAMES_UK.length * Math.random()].charAt(0);
            first_letter = rand_char;
            return question.replace('$LETTER',first_letter);
        },
        answers : [
            {
                type : 'text',
                text : 'Yes',
                callback : (attrs) => {
                    question_counter++;
                }
            },
            {
                type : 'text',
                text : 'No',
            },
        ],
        fallback : {
            type : 'input',
            text : 'Hmmm... Struggling a bit there, can you tell me your name ?',
            callback(_attrs,input){
                first_letter = input;
                question_counter ++;
            }
        }
    },
    {
        question : "I reckon your first name begins is '$NAME'",
        regen_func : (question) => {
            let possible_names = POPULAR_NAMES_UK.filter(n => n.startsWith(first_letter));
            let rand_name = possible_names[possible_names.length * Math.random()];
            response_obj.firstname = rand_name;
            return question.replace('$NAME',rand_name);
        },
        answers : [
            {
                type : 'text',
                text : 'Yes',
                callback : (attrs) => {
                    question_counter++;
                }
            },
            {
                type : 'text',
                text : 'No',
            },
        ],
        fallback : {
            type : 'input',
            text : 'Hmmm... Struggling a bit there, can you tell me your name ?',
            callback(_attrs,input){
                first_letter = input;
                question_counter ++;
            }
        }
    }
]
*/