// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  console.log(returnFirstTwoDrivers(drivers))
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  console.log(returnLastTwoDrivers(drivers))
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
  };
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));