#pragma strict

var hitMusic : AudioSource;
var dieMusic : AudioSource;
private static var isDie : boolean = false;
function OnCollisionEnter(other : Collision) {
	if(other.gameObject.tag == "Player") {
		hitMusic.Play();
		if(!isDie) {
			dieMusic.Play();
			isDie = true;
		}
		GameManager.GameState = GameManager.GAMESTATE_END;
	}
}