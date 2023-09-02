var numberOfRooms = readline().split(' ').map((x) => parseInt(x));
var availableRooms = 0;
for (var i = 1; i <= numberOfRooms; i++) {
    var roomDetails = readline().split(' ').map((x) => parseInt(x));
    var occupiedSeats = roomDetails[0];
    var totalSeats = roomDetails[1];
    if ((totalSeats - occupiedSeats) >= 2) {
        availableRooms += 1;
    }
}
print(availableRooms);
