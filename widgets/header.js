'use strict';

import Core from '../../app-framework/tools/core.js';
import Widget from '../../app-framework/base/widget.js';

import AppConfig from '../../app-framework/components/config.js';

export default Core.templatable("App.Widget.Header", class Header extends Widget { 

	constructor(container) {
		super(container);

		this.elems.a_lab.href = AppConfig.URLs.lab;
		this.elems.a_viewer.href = AppConfig.URLs.viewer;
		this.elems.a_samples.href = AppConfig.URLs.samples;
		this.elems.a_mail.href = AppConfig.URLs.mail;
	}
	
	html() {
		return "<div class='application-header'>" +
				   "<h1 class='first-row'><a handle='a_lab' target='_blank'>nls(Header_Lab)</a></h1>" +
				   "<div class='second-row'>" +
					  "<h2><a handle='a_viewer' target='_blank'>nls(Header_App)</a></h2>" +
					  "<div class='links-container'>" +
						 "<a handle='a_samples' target='_blank'>nls(Header_Sample)</a> &emsp;" +
						 "<a handle='a_mail' target='_blank'>nls(Header_Problem)</a>" +
					  "</div>" +
				   "</div>" +
			   "</div>";
	}
	
	localize(nls) {
		super.localize(nls);
		
		nls.add("Header_Lab", "en", "ARSLab");
		nls.add("Header_App", "en", "DEVS Web Viewer");
		nls.add("Header_Sample", "en", "&#9733; samples");
		nls.add("Header_Problem", "en", "&#9749; report a problem");
	}
});