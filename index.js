// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  // It returns an array of driver objects that have a revenue attribute
  // that's greater than the passed-in revenue argument.

  // { name: 'Sally',   revenue: 400 },
  // { name: 'Annette', revenue: 200 },
  // { name: 'Jim',     revenue: 150 },
  // { name: 'Sally',   revenue: 200 }

  return drivers.filter(function (driver) {
    if (driver.revenue > revenue) {
      return driver
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
 return driversWithRevenueOver(drivers, revenue).map(function(driver) {
   return driver.name
 })
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    if (driver.name === attribute.name) {
      return driver
    } else if (driver.revenue === attribute.revenue) {
      return driver
    }
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {
    return driver.name
  })
}
