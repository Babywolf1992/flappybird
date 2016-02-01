#pragma strict

static var score : int = 0;
function Start () {
	RandomGeneratePosition();
}

function RandomGeneratePosition() {
	var pos_y = Random.Range(-0.4f,-0.1f);
	this.transform.localPosition = new Vector3(this.transform.localPosition.x,pos_y,this.transform.localPosition.z);
}

function OnTriggerExit(other: Collider) {
	if(other.tag == "Player") {
		GetComponent.<AudioSource>().Play();
		GameManager.score++;	
	}
}

function OnGUI() {
	GUILayout.Label("Score:"+GameManager.score);
}