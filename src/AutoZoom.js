const defaultOpts = {
	target: document.body,
	reference: false,
	designSize: [1920, 1080],
	transform: {
		origin: "0 0",
		translate: "translate(0, 0)"
	},
	pause: false
};

export default class AutoZoom {
	listeners = new Map();
	constructor(opts) {
		let localOpts = Object.assign({...defaultOpts}, opts);
		localOpts.transform = Object.assign({...defaultOpts.transform}, opts.transform);
		this.target = localOpts.target;
		this.reference = localOpts.reference;
		this.designSize = localOpts.designSize;
		this.transform = localOpts.transform;
		this.pause = localOpts.pause;
		this.zoom = 1;
		this.unobserve = null;
		this.rezoom = null;
		this.init();
	}
	init() {
		if (this.target) {
			if (typeof this.target == "string") this.target = document.querySelector(this.target);
			if (this.target instanceof HTMLElement) {
				if (this.reference) {
					if (ResizeObserver) {
						if (typeof this.reference == "string") this.reference = document.querySelector(this.reference);
						if (this.reference instanceof HTMLElement) {
							let observer = new ResizeObserver(entries => {
								if (!this.pause && entries.length && entries[0].contentRect) {
									let { width, height} = entries[0].contentRect;
									this.resize(width, height);
								}
							});
							observer.observe(this.reference);
							this.rezoom = () => this.resize(this.reference.clientWidth, this.reference.clientHeight);
							this.unobserve = () => {
								observer.unobserve(this.reference);
								let list = this.listeners.get("unobserve");
								if (list) list.forEach(cb => cb(this));
							};
						}
					} else {
						throw Error("Sorry your browser does not support `ResizeObserver`!");
					}
				} else {
					let resizeHandler = () => !this.pause && this.resize();
					window.addEventListener("resize", resizeHandler);
					!this.pause && resizeHandler();
					this.rezoom = () => this.resize();
					this.unobserve = () => {
						window.removeEventListener("resize", resizeHandler);
						let list = this.listeners.get("unobserve");
						if (list) list.forEach(cb => cb(this));
					};
				}
			} else throw Error("Target must a HTMLElement! Please give a right selector or HTMLElement.");
		} else throw Error("Must provide a target Element! Please give `target` option.");
	}
	start() {
		this.pause = false;
		let list = this.listeners.get("start");
		if (list) list.forEach(cb => cb(this));
	}
	stop() {
		this.pause = true;
		let list = this.listeners.get("stop");
		if (list) list.forEach(cb => cb(this));
	}
	resize(sW = window.innerWidth || document.documentElement.clientWidth, sH = window.innerHeight || document.documentElement.clientHeight) {
		if (this.designSize && this.designSize.length >= 2) {
			let dom = this.target, [dW, dH] = this.designSize;
			dom.style.width = dW + "px";
			dom.style.height = dH + "px";
			let wR = sW / dW, hR = sH / dH;
			let rR = wR < hR ? wR : hR;
			dom.style.transformOrigin = this.transform.origin || "";
			if (this.transform.translate instanceof Function) {
				dom.style.transform = this.tansform.translate(rR, [sW, sH], [dW, dH]);
			} else if (this.transform) {
				dom.style.transform = `scale(${rR}) ${this.transform.translate || ""}`;
			}
			this.zoom = rR;
			let list = this.listeners.get("zoom");
			if (list) list.forEach(cb => cb(this));
		} else throw Error("`designSize` Option must be an array of length greater than 2.");
	}
	on(type, listener) {
		let list;
		switch(type) {
			case "zoom":
			case "start":
			case "stop":
			case "unobserve":
				list = this.listeners.get(type);
				if (list) list.push(listener);
				else {
					this.listeners.set(type, list = [listener]);
				}
				break;
			default: ;
		}
		return () => {
			let index = list.indexOf(listener);
			if (index != -1) list.splice(index, 1);
			return true;
		}
	}
	off(type, listener) {
		switch(type) {
			case "zoom":
			case "start":
			case "stop":
			case "unobserve":
				let list = this.listeners.get(type);
				if (list) {
					let index = list.indexOf(listener);
					if (index != -1) list.splice(index, 1);
				}
				break;
			default: ;
		}
	}
}