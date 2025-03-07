const cyberx = new Proxy({"src":"/_astro/cyberx.BouFA3nH.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/gr1d/Documents/astro-theme-pure-3.1.4/src/assets/projects/cyberx.png";
							}
							
							return target[name];
						}
					});

export { cyberx as default };
