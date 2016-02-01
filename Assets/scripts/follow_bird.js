#pragma strict
//private GameObject bird;
//	private Transform birdTransform;
//
//	// Use this for initialization
//	void Start () {
//		bird  = GameObject.FindGameObjectWithTag("Player");
//		birdTransform = bird.transform;
//	}
//	
//	// Update is called once per frame
//	void Update () {
//		Vector3 birdPos = birdTransform.position;
//		float y = birdPos.y-3.5088f;
//		if(y>2.4f){
//			y=2.4f;
//		}
//		if(y<-2.4f){
//			y=-2.4f;
//		}
//		this.transform.position = new Vector3(birdPos.x+3.63223f,y,-10);
//	}
private var bird : GameObject;
private var birdTransform : Transform;
function Start () {
	bird = GameObject.FindGameObjectWithTag("Player");
	birdTransform = bird.transform;
}

function Update () {
	var birdPos : Vector3 = birdTransform.position;
	var y : float = birdPos.y-3.5f;
	if(y > 2.4f) {
		y = 2.4f;
	}
	if(y < -2.4f) {
		y = -2.4f;
	}
	this.transform.position = new Vector3(birdPos.x+3.6f,y,-10);
}