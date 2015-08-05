$(document).ready(function(){
	//點擊新增，增加一個鬧鐘

  //產生選單
for(i=0; i<24; i++) {
  $("#hours").append('<option value="' + i + '">' + i + '</select>');
}

for(i=0; i<60; i++) {
  $("#minutes").append('<option value="' + i + '">' + i + '</select>');
}

  //一個下拉bar可以設定鬧鐘

	//勾選鬧鐘是否開啟
});
