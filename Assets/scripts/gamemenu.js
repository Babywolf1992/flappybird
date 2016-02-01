#pragma strict

//var score : Image;
var restart : UnityEngine.UI.Image;
var nowScoreText : UnityEngine.UI.Text;
var highScoreText : UnityEngine.UI.Text;

function Start () {
	this.gameObject.SetActive(false);
}

function UpdateScore(nowScore : int) {
	var highScore : int = PlayerPrefs.GetInt("score",0);
	if(nowScore > highScore) {
		highScore = nowScore;
	}
	PlayerPrefs.SetInt("score",highScore);

	nowScoreText.text = nowScore.ToString();
	highScoreText.text = highScore.ToString();

	if (Input.GetMouseButtonDown(0) && GameManager.GameState == GameManager.GAMESTATE_END) {
//		var rect : Rect;
//		rect.x = 295;
//		rect.y = 327;
//		rect.width = 70;
//		rect.height = 60;
////		print(rect);
////		print(Input.mousePosition);
//		var mousePos : Vector3 = Input.mousePosition;
//
////		if(rect.Contains(mousePos))
//		if(mousePos.x > rect.x && mousePos.x < (rect.x + rect.width) && mousePos.y < rect.y && mousePos.y > (rect.y - rect.height)) {
//			Application.LoadLevel(0);
//		}
		var texture : Rect = restart.rectTransform.rect;
//		print(texture);
	}
}