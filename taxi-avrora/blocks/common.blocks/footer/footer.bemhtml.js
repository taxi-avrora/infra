block('footer')(
	content()((node, ctx) => {
		var wrapper = {
			block: 'wrapper',
			content: [],
			mix: {
				block: 'footer',
				elem: 'wrapper'
			}
		};

		ctx.items.map((item) => {
			wrapper.content.push({
				block: 'footer',
				elem: 'item',
				content: item
			});
		});

		return wrapper;
	})
);