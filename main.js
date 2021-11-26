import Core from "../app-framework/tools/core.js";
import Net from "../app-framework/tools/net.js";

import Application from "./application.js";

Core.WaitForDocument().then(Start);

function Start() {	
	var path = location.href.split("/").slice(0,-2).join("/");

	streamSaver.mitm = path + "/app-framework/references/StreamSaver/mitm.html";
	
	var app = new Application(document.body);
}