function aspectRatioHD() {
	if (2 == arguments.length) {
		var d = function(a) {
				a = parseFloat(("" + a).replace(/[^0-9.]/g, ""));
				return a == a ? a : void 0
			},
			a = function(a) {
				var b = {},
					c;
				for (c in a)
					if (a.hasOwnProperty(c)) switch (c.toLowerCase()) {
						case "height":
							b.h = d(a[c]);
							break;
						case "width":
							b.w = d(a[c])
					}
					if ("number" != typeof b.h || b.h != b.h) b.h = void 0;
				if ("number" != typeof b.w || b.w != b.w) b.w = void 0;
				return b
			},
			b = a(arguments[0]),
			a = a(arguments[1]);
		if (b.w && b.h && a.w && a.h) 
			return Math.round(a.w / a.h * 100) / 100 == Math.round(b.w / b.h * 100) / 100 ? (b = function e(a, b) {
				return b ? e(b, a % b) : a
			}, b = b(a.w, a.h), [a.w / b, a.h / b]) : a.w / a.h == b.w / b.h;
		if (b.w && b.h && !a.w && a.h) return Math.round(b.w / b.h * a.h);
		if (b.w && b.h && a.w && !a.h) return Math.round(a.w / (b.w / b.h));
		if (!b.w && b.h && a.w && a.h) return Math.round(a.w / a.h * b.h);
		if (b.w && !b.h && a.w && a.h) return Math.round(b.w / (a.w / a.h))
	}
	else throw Error("Invalid Amount of Arguments. Must have 2 arguments such as: [{height:1,width:2},{height:3}]");
};
