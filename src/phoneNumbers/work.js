// work.js
// handles any computations performed before database retrieval or response


function getPhone(){
  console.log(this);

  var phoneNum = this.event.request.intent.slots.place.id;
  return(phoneNum);


}
module.exports = {
  getPhone: getPhone(),
}
