const yourTicketExample = `7,1,14`;

let ticketDetailsExample =
  {
    class: "1-3, 5-7",
    row: "6-11, 33-44",
    seat: "13-40, 45-50",
  };

const nearbyTicketsExample =
`7,3,47
40,4,50
55,2,20
38,6,12`;

const validTicketDetailsNumbers = (ticketDetails) => {
  let validNumbers = [];
  for (const detail in ticketDetails) {
    if (ticketDetails.hasOwnProperty(detail)) {
      let numbers = ticketDetails[detail].split(/,\s|-/).map(Number);
      // console.log("numbers: " + numbers[0]);
      for (let i = numbers[0]; i <= numbers[1]; i++) validNumbers.push(i)
      for (let i = numbers[2]; i <= numbers[3]; i++) validNumbers.push(i)
    }
  }
  // console.log("validNumbers: " + validNumbers);
  return validNumbers;
};
validTicketDetailsNumbers(ticketDetailsExample);

const calculateInvalidTickets = (ticketList, ticketDetails) => {
  let invalidTickets = 0;
  const validNumbers = validTicketDetailsNumbers(ticketDetails);
  let tickets = ticketList.split(/\n/).map(t => t.split(/,/).map(Number));
  console.log(tickets);
  for (const ticket of tickets) {
    // console.log("ticket: " + ticket);
    for (const detailNumber of ticket) {
      // console.log("detailNumber: " + detailNumber);
      if (!validNumbers.includes(detailNumber)) {
        // console.log("detailNumber " + detailNumber + " is not a valid number")
        invalidTickets += detailNumber;
      }
    }
  }
  return invalidTickets;
};
// calculateInvalidTickets(nearbyTicketsExample);
console.log("Invalid tickets from test data: " + calculateInvalidTickets(nearbyTicketsExample, ticketDetailsExample));


let ticketDetails = {
  departureDate: "26-635, 660-961",
  departureDime: "42-773, 793-961",
  arrivalLocation: "28-928, 943-952",
  arrivalStation: "36-593, 613-966",
  arrivalPlatform: "33-280, 297-951",
  arrivalTrack: "44-358, 371-974",
  class: "39-815, 839-955",
  duration: "39-573, 589-959",
  price: "49-846, 865-962",
  route: "30-913, 924-954",
  row: "29-865, 890-965",
  seat: "44-667, 683-969",
  train: "32-473, 482-969",
  type: "40-424, 432-953",
  wagon: "49-156, 164-960",
  zone: "34-521, 534-971",
}
const yourTicket = `73,101,67,97,149,53,89,113,79,131,71,127,137,61,139,103,83,107,109,59`;

const nearbyTickets = require("fs").readFileSync("./day16.txt").toString('utf-8');
console.log("Puzzle answer of the day, part 1: " + calculateInvalidTickets(nearbyTickets, ticketDetails));
