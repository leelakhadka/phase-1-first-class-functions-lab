const returnFirstTwoDrivers = (drivers) => {
    var copyOfDrivers = [...drivers];
    copyOfDrivers.pop();
    copyOfDrivers.pop();
    return copyOfDrivers
}

const returnLastTwoDrivers = (drivers) => {
    var copyOfDrivers = [...drivers];
    copyOfDrivers.shift();
    copyOfDrivers.shift();
    return copyOfDrivers
}


const selectingDrivers = function () {
    return [returnFirstTwoDrivers, returnLastTwoDrivers]
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function createFareMultiplier(fare1) {
    return function (fare2) {
        return fare1 * fare2;
    };
}

fareDoubler(fare);
fareTripler(fare);

function selectDifferentDrivers(drivers, twoDrivers) {
    if (selectingDrivers()[0] == twoDrivers) {
        var copyOfDrivers = [...drivers];
        return copyOfDrivers.slice(0, 2);
    } else {
        var copyOfDrivers = [...drivers];
        return copyOfDrivers.slice(2, 4)
    }
}




