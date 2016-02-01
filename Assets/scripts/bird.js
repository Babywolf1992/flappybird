#pragma strict

var timer : float = 0.0;
var frameNumber : int = 10;
var frameCount : int = 0;

function Start () {
//	this.GetComponent.<Rigidbody>().velocity = new Vector3(3,0,0);
}

function Update () {
//	var vel = this.GetComponent.<Rigidbody>().velocity;
//	this.GetComponent.<Rigidbody>().velocity = new Vector3(5,vel.y,vel.z);
	if(GameManager.GameState == GameManager.GAMESTATE_PLAYING) {
		timer += Time.deltaTime;
		if(timer >= 1.0/frameNumber) {
			frameCount++;
			timer-=1.0f/frameNumber;
			var frameIndex : int = frameCount%3;

			this.GetComponent.<Renderer>().material.SetTextureOffset("_MainTex", new Vector2(0.33333f*frameIndex, 0));
		}

		if(Input.GetMouseButton(0)) {
			GetComponent.<AudioSource>().Play();
			var vel2 = this.GetComponent.<Rigidbody>().velocity;
			this.GetComponent.<Rigidbody>().velocity = new Vector3(vel2.x,5,vel2.z);
		}
	}
}

//function getLife() {
//	Get
//}