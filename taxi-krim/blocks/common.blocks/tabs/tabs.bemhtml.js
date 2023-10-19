block('tabs')(
	js()(true),

	content()((node, ctx) => {
		return [
			// header
			{
				elem: 'header',
				content: (() => {
					return (ctx.items || []).map((item) => {
						return {
							elem: 'tab',
							tag: 'a',
							attrs: {
								href: item.url
							},
							content: item.name,
							elemMods: {
								selected: (item.val === ctx.val) 
							}
						};
					});
				})()
			},

			// content
			{
				elem: 'content',
				content: ctx.content
			}
		];
	})
);