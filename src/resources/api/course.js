
import { fullname } from 'react-lorem-ipsum';
import { LoremIpsum } from 'lorem-ipsum';
import { envEnum, env } from '../constants';
import {fbGetEvent, fbGetEvents} from "./firebaseFunctions/event/get";

const lorem = new LoremIpsum({wordsPerSentence:{min:3, max: 10}})

const cities = ["Brno", "Praha", "Londýn", "Paříž"]
const types = ["Webinář", "Konference", "Meetup"]
const fields = ["Biologie", "Informatika", "Podnikání", "Lorem", "Ipsum", "Dolor", "Sit", "Amet"]

/**
 * @returns placeholder event object
 */
const e = () => {
    var id = Math.floor(Math.random()*1000)
    return {
        id: id,
        title: lorem.generateSentences(1),
        imgSrc:"https://picsum.photos/200/300?"+Math.random(),
        coverPhotoSrc: "https://picsum.photos/1500/500?"+Math.random(), 
        company: fullname(),
        location: cities[Math.floor(cities.length*Math.random())],
        date:"14. 3. 1592",
        time:"9:45",
        href:"/events/"+id,
        online: Boolean(Math.random() > .5),
        type: types[Math.floor(types.length*Math.random())],
        description: "Co je to talent? A mám nějaký i já? A jak to ho dále rozvíjet?\nTo všechno jsou otázky, na které bychom měli hledat odpovědi už během studia. Protože poznat svá nadání 💡 a talenty ❤️ nám pomůže při správné volbě budoucí pracovní cesty. Lépe zhodnotíme, co nás bude doopravdy bavit a naplňovat a v čem můžeme být excelentní! 🦸‍♂️\nJak objevit své silné stránky a talenty prozradíme ve středu 13. května na studentském online workshopu 💻.\n____________________\nREGISTRACE ZDE:\n► https://bit.ly/webinar-... \n \n Ad fugiat ut magna id. Consequat magna duis sit eiusmod elit minim do laborum dolor velit excepteur qui id officia. Id ad fugiat officia ea veniam Lorem laborum ullamco qui exercitation. \n \n Nisi consectetur magna cupidatat voluptate magna deserunt irure aliqua cillum nulla. Incididunt veniam enim exercitation sit veniam nostrud laborum eiusmod Lorem exercitation. Culpa enim duis dolore nisi excepteur fugiat. Adipisicing consequat esse culpa aute magna cupidatat officia aliqua voluptate magna dolore officia qui. Laborum ipsum amet velit occaecat nulla dolor qui eu velit. Cillum laboris ad labore nulla velit do veniam.",
        startDate: "10.4.1998",
        fields: fields.filter(i => Math.random()>.65)
    }
}

/** MOCKUP
 * @returns {array} array of placeholder events
 */
async function getCoursesMockup(){
    const arr = [];
    for(var j = 0; j < Math.floor(Math.random()*25+7); j++){
        arr.push(e())
    }
    return arr;
}

/** PDEV/PROD getEventsProd()
 *  @returns {array} array of events from database
 *  @throws ""
 */
async function getCoursesProd(){
    return await fbGetEvents();
}

/** MOCKUP getEventMockup()
 *  @returns {object} placeholder event object
 */
async function getCourseMockup(){
    return e()
}

/**
 * DEV/PROD: getEventProd()
 * @returns {object} event info from the database
 * @param {string} id event id
 * @throws ""
 */
async function getCourseProd(id){
    return e()
}


var getCourses, getCourse;

switch(env){
    case envEnum.DEV:{
        getCourses = getCoursesMockup
        getCourse = getCourseMockup
        break;
    }
    case envEnum.PROD:{
        getCourses = getCoursesMockup
        getCourse = getCourseMockup
        break;
    }
    case envEnum.MOCKUP: {
        getCourses = getCoursesMockup;
        getCourse = getCourseMockup;
        break;
    }
}

export{getCourses, getCourse}
