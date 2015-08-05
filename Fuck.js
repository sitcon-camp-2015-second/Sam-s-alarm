jQuery(document).ready(function(){

	//設定鬧鐘頁面
	//點擊新增，增加一個鬧鐘

  //產生選單
for(i=0; i<24; i++) {
  $("select[hours]").append('<option value="' + $i '">' + $i + '</select>');
}

for(i=0; i<60; i++) {
  $("select[minutes]").append('<option value="' + $i '">' + $i + '</select>');
}

  //一個下拉bar可以設定鬧鐘

	//勾選鬧鐘是否開啟


});
