block('widgets')(
	js()(true),

	content()((node, ctx) => {
		var url_instagram = '//widget.instagramm.ru/?imageW=3&imageH=2&thumbnail_size=108&type=0&typetext=transferkrim&head_show=1&profile_show=1&shadow_show=0&bg=255,255,255,0.19&opacity=true&head_bg=46729b&subscribe_bg=ad4141&border_color=c3c3c3&head_title=',
            content = [];

        ctx.items.forEach(item => {
			switch(item) {
				case 'vk':
					content.push({
						elem: 'item',
						elemMods: {
							type: 'vk'
						},
						attrs: {
							id: 'vk_groups'
						}
					});
                    break;

				case 'instagram':
					// content.push({
					// 	elem: 'item',
					// 	elemMods: {
					// 		type: 'instagram'
					// 	},
					// 	tag: 'iframe',
					// 	attrs: {
					// 		src: url_instagram,
					// 		allowtransparency: true,
					// 		frameborder: 0,
					// 		scrolling: 0,
					// 		style: "border: 0;overflow: hidden; height: 377px"
					// 	}
					// });
                    break;
			}
		});

        return content;
	})
);
