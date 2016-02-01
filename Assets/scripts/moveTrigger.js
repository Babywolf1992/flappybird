#pragma strict

var firstBg : Transform;
var currentBg : Transform;
var pipe1 : pipe;
var pipe2 : pipe;

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player") {
		print(firstBg);
		currentBg.position = new Vector3(firstBg.position.x+10,currentBg.position.y,currentBg.position.z);
		pipe1.RandomGeneratePosition();
		pipe2.RandomGeneratePosition();
	}
}