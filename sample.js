var id = chrome.contextMenus.create(
  {"title" : "突然の...", "contexts": ["selection"], "onclick": genericOnClick}
);

function genericOnClick(info, tab) {
  var urls = 'http://sudden-death.papix.net/' + info.selectionText;
  chrome.tabs.create({
    url      : urls,
    selected : true
  });
}
