#pragma strict

public static var GAMESTATE_MENU : int = 0;
public static var GAMESTATE_PLAYING : int = 1;
public static var GAMESTATE_END : int = 2;

static var score : int = 0;

static var GameState : int = GAMESTATE_MENU;
private var bird : GameObject;
var menu : UnityEngine.UI.Image;
var js : gamemenu;

function Awake() {
	GameState = GAMESTATE_MENU;
	menu.gameObject.SetActive(false);
	bird = GameObject.FindGameObjectWithTag("Player");
}

function Update() {
	if(GameState == GAMESTATE_MENU) {
		if(Input.GetMouseButtonDown(0)) {
			GameState = GAMESTATE_PLAYING;
			bird.GetComponent.<Rigidbody>().useGravity = true;
			bird.GetComponent.<Rigidbody>().velocity = new Vector3(3,0,0);
		}
	}
	if (GameState == GAMESTATE_END) {
		menu.gameObject.SetActive(true);
		var menuscript = menu.GetComponent("GameMenu");
		js.UpdateScore(score);
	}
}

function Restart() {
	score = 0;
	Application.LoadLevel(0);
}