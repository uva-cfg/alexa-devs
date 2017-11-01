// res.js
// handles user input and response

var Alexa = require('alexa-sdk');
//test
var traditions = [
'The university\'s traditional colors used to be cardinal and grey, but now they are blue and orange.',
'The Jefferson Society, founded in eighteen twenty five, still meets today.',
'The university\'s student-governed honor system has been used to promote and enforce honor at the university since eighteen forty two.',
'The university\'s student-governed honor system has been used to promote and enforce honor at the university since eighteen forty two.',
'Living on the lawn is a prestigious honor for undergraduate students. Since nineteen forty nine, rooms have been given to student leaders who represent and actively support the university community.',
'Since the university\'s start, professors have lived in the pavilions on the lawn among the students who live in the lawn rooms. Today, academic deans, accomplished professors, and other university leaders live in these ten pavilions.',
'There are many secret societies that have existed for a long time and remain active at the university. Some of the most popular are the Z society, the Seven society, and the imps. The markings of these three societies can be found all over grounds, often on buildings.',
'Instead of referring to undergraduate student classes as freshman, sophomore, junior, and senior, the university refers to students as first years, second years, third years, and fourth years. This is because Thomas Jefferson did not believe that anyone could be a senior in learning, but rather that learning was a lifelong process.',
'The university has a ring placement tradition. While still studying at U V A, students wear their rings with minerva facing inward. After they graduate, they turn the ring around so that Minerva is facing outward.',
'University students, faculty, and alumni refer to the campus as grounds.',
'A nickname for students at the university is wahoos. A wahoo is a fish that can drink twice its weight. I�ll let you draw the connection.',
'In the late nineteenth and early twentieth centuries, students were supposed to respect the lawn by not walking on it, instead using the sidewalks to get to class. The university is not as stringent about this anymore, but in the springtime fences and stakes are put up to protect grounds and diminish foot traffic before graduation.',
'Prior to World War two, students began to oppose the traditional attire of coats and ties worn around grounds and to class. By the nineteen seventies, most students did not wear coats and ties, except as tradition at home football games. This is likely where the tradition known as guys in ties and girls in pearls came from.',
'In September of two thousand three, the new head football coach Al Groh asked fans to wear orange at the stadium. This lasting effort to promote team spirit is seen today with an emphasis on orange by fans in the stadium.',
'In late nineteen twenty three, our current Beta bridge was built over the Chesapeake and Ohio train tracks. There was a bridge in the same location built in the early 1850�s, but it was replaced by our current bridge to prepare university roads for automobiles. Its name comes from the Beta Theta Pi fraternity house located nearby.',
'Beta bridge\'s first documented painting was in fall of nineteen twenty six. Up until the late nineteen sixties, the bridge was mostly painted with sports scores and victory celebrations. The now-popular tradition of painting the bridge with messages, graffiti, and event information became popular after St. Patrick�s day nineteen sixty seven, when students painted the bridge green. Supporters of the English throne fought back by painting the bridge over in red with God save the Queen, to which the Irish fans responded by changing queen to green.',
'In the late sixties and early seventies, painting beta bridge was not as accepted a tradition as it is today. In march of nineteen seventy one, five members of pi lambda phi were arrested by city police. Now the city of Charlottesville tolerates the painting of beta bridge as student�s artistic expression.',
'The tradition of streaking the lawn appears to have became popular in the mid seventies. In the early seventies, streaking became a fad in Los Angeles, and was then spread across the nation when a streaking incident occurred on air during the oscars. In February of that year, first-year students staged a mass streak in the mccormick road dorm area. Unfortunately, a world streaking record wasn�t set, but the first documented female streaker was present.',
'The streaking tradition holds that before a student graduates, he or she must run naked from the steps of the rotunda down to the statue of Homer, kiss the statue, and then run back. An added requirement is that the student must look through the keyhole of the Rotunda toward Jefferson�s statue and whisper good night mr. jefferson before putting their clothes back on.',
'The first recorded act of streaking at the university is from october nineteen thirty seven where a college magazine notes, and I quote, at the lewis boarding house last thursday night some of the first-year men got terribly thirsty. So they all went down to the corner in their pajamas. This was around two a.m. Evidently they had been thirsty earlier in the night, but this is beside the point. When the over jolly crowd got back to the Lewis� a couple of them forsook their pajamas and rushed pell-mell, Adam and Eve fashion up to their rooms. And to think that a nudist colony is in the making at Virginia. That�s Jeffersonian Democracy for you.',
'An old, since lost tradition is for first year students to wear stylish felt or straw hats outside consistently throughout the year. By the nineteen thirties, first years began to stop succumbing to this custom and by the end of World War two, the hat convention was abandoned.',
'Boxing was once known as the major sport in charlottesville. Students began engaging in the sport informally before the civil war. In eighteen ninety one, William Lambeth became superintendent of buildings and grounds and director of athletics. He oversaw boxing matches in one of the university�s first gyms. In nineteen twenty seven, boxing became an official varsity sport, just in time to be hosted in the new Memorial Gymnasium, or Mem Gym as it is now called. There is still a boxing practice room in the basement.',
];

const TRADITION_PREFIX = 'Here\'s a U.V.A. tradition: '
function sendResponse() {
  //We take a random (valid) index for the array and result the string
  const randomIndex = Math.floor(Math.random() * traditions.length);
  const randomFact = traditions[randomIndex];
  const fact = TRADITION_PREFIX + randomFact;

  console.log(this);
  //TEST: this.emit(':tell', 'Sorry, I don\'t have that functionality yet.');
  return (fact);
}

module.exports = {
  sendResponse: sendResponse(),
}
