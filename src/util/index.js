import moment from "moment";
const isValidFullName = (name) => null;
const isOver18 = (age, date) => {
  var years = moment().diff(moment(date), "years");
  alert(years);
};
