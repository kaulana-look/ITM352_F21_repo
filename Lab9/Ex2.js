//Moving a Robot

roomba.move();
if (roomba.isFacingWall()) {
    roomba.turnLeft();
}
roomba.turnLeft();
while( roomba.isFacingWall()){
    roomba.turnLeft();
}
num_turns_to_360 = 4;
rooma.turnLeft();
turns = 0;
while (roomba.isFacingWall()) &&
turns++ (num_turns_to_360) {
    roomba.turnLeft();
}