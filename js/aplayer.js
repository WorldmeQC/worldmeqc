window.onload = function () {
	document.getElementsByClassName("aplayer-lrc")[0].remove();
}


/*$(document).ready(function () {
	if (CONFIG.aplayer && CONFIG.aplayer.enable) {
		var aplayer = document.createElement("meting-js");
		aplayer.id = CONFIG.aplayer.id;
		var server = document.createAttribute("server");
		server.nodeValue = "netease";//CONFIG.aplayer.server;
		var type = document.createAttribute("type");
		type.nodeValue = CONFIG.aplayer.type;
		var auto = document.createAttribute("auto");
		auto.nodeValue = CONFIG.aplayer.auto;
		var fixed = document.createAttribute("fixed");
		fixed.nodeValue = CONFIG.aplayer.fixed;
		var mini = document.createAttribute("mini");
		mini.nodeValue = CONFIG.aplayer.mini;
		var order = document.createAttribute("order");
		order.nodeValue = CONFIG.aplayer.order;
		var preload = document.createAttribute("preload");
		preload.nodeValue = CONFIG.aplayer.preload;
		var listFolded = document.createAttribute("listFolded");
		listFolded.nodeValue = CONFIG.aplayer.listFolded;
		document.getElementById('aplayer').appendChild(aplayer);
	}
	// 	const myAplayer = new APlayer({
	// 		container: document.getElementById('aplayer'),
	// 		id: CONFIG.aplayer.id,
	// 		server: CONFIG.aplayer.server,
	// 		type: CONFIG.aplayer.type,
	// 		fixed: CONFIG.aplayer.fixed,
	// 		mini: CONFIG.aplayer.mini,
	// 		order: CONFIG.aplayer.order,
	// 		preload: CONFIG.aplayer.preload,
	// 		listFolded: CONFIG.aplayer.listFolded,
	// 	});
	// }
});*/