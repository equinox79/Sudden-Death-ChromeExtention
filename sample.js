
// APIのURL
var API_URL	= 'http://kuso-api.papix.net/sudden-death/';

// 右クリックメニュー作成
var id = chrome.contextMenus.create({
	"title"		: "突然の...",
	"contexts"	: ["selection"],
	"onclick"	: genericOnClick
});

// 右クリックメニュー押下時の処理
function genericOnClick(info, tab) {
	var request_url = API_URL + info.selectionText || '';
	chrome.tabs.create({
		url      : request_url,
		selected : true
	});
}
