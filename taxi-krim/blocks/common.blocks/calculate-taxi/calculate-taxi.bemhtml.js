block('calculate-taxi')(
	js()(true),

	content()((node, ctx) => {
		var citys = [
			{ val: 1, text: 'Аэропорт Симферополь' },
			{ val: 2, text: 'Алушта' },
			{ val: 3, text: 'Ай-Даниль' },
			{ val: 4, text: 'Алупка' },
			{ val: 5, text: 'Андреевка' },
			{ val: 6, text: 'Армянск' },
			{ val: 7, text: 'Балаклава' },
			{ val: 8, text: 'Бахчисарай' },
			{ val: 9, text: 'Белогорск' },
			{ val: 10, text: 'Береговое (Феодосия)' },
			{ val: 11, text: 'Береговое (ЮБК)' },
			{ val: 12, text: 'Береговое (Бахчисарай)' },
			{ val: 13, text: 'Вилино' },
			{ val: 14, text: 'Витино' },
			{ val: 15, text: 'Гаспра' },
			{ val: 16, text: 'Голубой Залив' },
			{ val: 17, text: 'Гурзуф' },
			{ val: 18, text: 'Даниловка' },
			{ val: 19, text: 'Джанкой' },
			{ val: 20, text: 'Евпатория' },
			{ val: 21, text: 'Заозерное' },
			{ val: 22, text: 'Зеленогорье' },
			{ val: 23, text: 'Золотое (Азовленд)' },
			{ val: 24, text: 'Казантип' },
			{ val: 25, text: 'Канака' },
			{ val: 26, text: 'Кастрополь' },
			{ val: 27, text: 'Кацивели' },
			{ val: 28, text: 'Кача' },
			{ val: 29, text: 'Керчь (город)' },
			{ val: 30, text: 'Керчь (переправа)' },
			{ val: 31, text: 'Коктебель' },
			{ val: 32, text: 'Кореиз' },
			{ val: 33, text: 'Курортное (Белогорск)' },
			{ val: 34, text: 'Курортное (Керчь)' },
			{ val: 35, text: 'Курорьное (Коктебель)' },
			{ val: 36, text: 'Курпаты' },
			{ val: 37, text: 'Лавровое' },
			{ val: 38, text: 'Лазурное' },
			{ val: 39, text: 'Ласпи' },
			{ val: 40, text: 'Ленино' },
			{ val: 41, text: 'Ливадия' },
			{ val: 42, text: 'Любимовка' },
			{ val: 43, text: 'Малореченское' },
			{ val: 44, text: 'Малый Маяк' },
			{ val: 45, text: 'Массандра' },
			{ val: 46, text: 'Межводное' },
			{ val: 47, text: 'Меллас' },
			{ val: 48, text: 'Мирный (Евпатория)' },
			{ val: 49, text: 'Мисхор' },
			{ val: 50, text: 'Морское' },
			{ val: 51, text: 'Мысовое (Щелкино)' },
			{ val: 52, text: 'Научный' },
			{ val: 53, text: 'Нижнегорский' },
			{ val: 54, text: 'Никита' },
			{ val: 55, text: 'Николаевка' },
			{ val: 56, text: 'Новоозерное' },
			{ val: 57, text: 'Новоотрадное' },
			{ val: 58, text: 'Новофедоровка' },
			{ val: 59, text: 'Новый Свет' },
			{ val: 60, text: 'Окуневка' },
			{ val: 61, text: 'Оленевка' },
			{ val: 62, text: 'Олива' },
			{ val: 63, text: 'Оползневое (Мрия)' },
			{ val: 64, text: 'Орджоникидзе' },
			{ val: 65, text: 'Ореанда' },
			{ val: 66, text: 'Орлиное' },
			{ val: 67, text: 'Орловка (Кача)' },
			{ val: 68, text: 'Отрадное' },
			{ val: 69, text: 'Парковое' },
			{ val: 70, text: 'Партенит' },
			{ val: 71, text: 'Песочное' },
			{ val: 72, text: 'Песчаное' },
			{ val: 73, text: 'Поповка' },
			{ val: 74, text: 'Понизовка (СКК Мрия)' },
			{ val: 75, text: 'Прибрежное (Саки)' },
			{ val: 76, text: 'Приветное' },
			{ val: 77, text: 'Приморский (Феодосия)' },
			{ val: 78, text: 'Раздольное' },
			{ val: 79, text: 'Рыбачье' },
			{ val: 80, text: 'Саки' },
			{ val: 81, text: 'Санаторное' },
			{ val: 82, text: 'Сатера' },
			{ val: 83, text: 'Севастополь' },
			{ val: 84, text: 'Семидворье' },
			{ val: 85, text: 'Семеиз' },
			{ val: 86, text: 'Симферополь' },
			{ val: 87, text: 'Соколиное' },
			{ val: 88, text: 'Солнечная Долина' },
			{ val: 89, text: 'Солнечногорское' },
			{ val: 90, text: 'Судак' },
			{ val: 91, text: 'Угловое (Ателика)' },
			{ val: 92, text: 'Утес' },
			{ val: 93, text: 'Учкуевка' },
			{ val: 94, text: 'Феодосия' },
			{ val: 95, text: 'Фиолент' },
			{ val: 96, text: 'Форос' },
			{ val: 97, text: 'Фрунзе (Саки)' },
			{ val: 98, text: 'Черноморское' },
			{ val: 99, text: 'Чонгар (граница)' },
			{ val: 100, text: 'Штормовое' },
			{ val: 101, text: 'Щебетовка' },
			{ val: 102, text: 'Щелкино' },
			{ val: 103, text: 'Ялта' },
		];

		return [
			// title
			{
				elem: 'title',
				content: ctx.title
			},

			{
				elem: 'message',
				content: [
					{ tag: 'b', content: 'Ваша заявка принята!' },
					{ tag: 'br' },
					'Через несколько минут с Вами свяжется наш менеджер.'
				]
			},

			// content
			{
				elem: 'content',
				content: [
					// from
					{
						elem: 'item',
						content: {
							block: 'select',
							name: 'from',
							mods: {
								theme: 'islands',
								size: 'xl',
								width: 'available',
								mode: 'radio-check',
                                name: 'from'
							},
							text: 'Откуда',
							options: citys,
							optionsMaxHeight: 300
						}
					},

					// to
					{
						elem: 'item',
						content: {
							block: 'select',
							name: 'to',
							mods: {
								theme: 'islands',
								width: 'available',
								size: 'xl',
								mode: 'radio-check',
                                name: 'to'
							},
							text: 'Куда',
							options: citys,
							optionsMaxHeight: 300
						}
					},

					// Тип заказа
					{
						elem: 'item',
						content: {
							block: 'radio-group',
							mods: {
								type: 'button',
								theme: 'islands',
								size: 'xl'
							},
							name: 'typeOrder',
							val: 1,
							options: [
								{ val: 1, text: 'В течение 20 минут' },
								{ val: 2, text: 'Предварительный' }
							],
							mix: {
								block: 'calculate-taxi',
								elem: 'typeOrder'
							}
						}
					},

					// Время поездки
					{
						elem: 'datetime',
						name: 'time',
						mix: {
							elem: 'item'
						}
					},

					// backward
					{
						elem: 'item',
						content: {
							block: 'checkbox',
							name: 'backward',
							mods: {
								theme: 'islands',
								size: 'l'
							},
							val: 1,
							text: 'Заказать обратный трансфер (скидка 5%)'
						}
					},

					// time backward
					{
						elem: 'datetime',
						name: 'time-backward',
						mix: {
							elem: 'item'
						}
					},

					// class
					{
						elem: 'item',
						content: {
							block: 'radio-group',
							mods: {
								type: 'button',
								theme: 'islands',
								size: 'xl',
                                name: 'auto'
							},
							name: 'type',
							val: 1,
							options: [
								{ val: 1, text: 'Cтандарт' },
								{ val: 2, text: 'Комфорт' },
								{ val: 3, text: 'Бизнес' },
								{ val: 4, text: 'Минивэн' }
							],
							mix: {
								block: 'calculate-taxi',
								elem: 'class'
							}
						}
					},

					// commentary
					{
						elem: 'item',
						content: {
							block: 'textarea',
							mods: {
								theme: 'islands',
								width: 'available',
								size: 'xl'
							},
							name: 'commentary',
							placeholder: 'Напишите пожелания к заказу, например, укажите дату и время поездки'
						}
					},

					// price
					{
						elem: 'item',
						content: [
							'Стоимость поездки: ',
							{ tag: 'span', content: '0 ₽' }
						],
						mix: {
							elem: 'price'
						}
					},

					{
						elem: 'item',
						content: [
							// phone
							{
								block: 'input',
								mods: {
									theme: 'islands',
									size: 'xl',
									type: 'phone'
								},
								name: 'phone',
								placeholder: 'Номер телефона',
								mix: {
									block: 'calculate-taxi',
									elem: 'phone'
								}
							},

							// button
							{
								block: 'button',
								mods: {
									theme: 'islands',
									size: 'xl'
								},
								text: 'Заказать',
								mix: {
									block: 'calculate-taxi',
									elem: 'submit'
								}
							}
						],
						mix: {
							block: 'calculate-taxi',
							elem: 'order'
						}
					}
				]
			}
		];
	})
);


block('calculate-taxi').elem('datetime')(
	addElemMods()((node, ctx) => {
		return {
			name: ctx.name
		};
	}),

	content()((node, ctx) => {
		return [
			{
				block: 'input',
				name: 'date',
				mods: {
					theme: 'islands',
					size: 'xl',
					type: 'date'
				},
				placeholder: 'Дата'
			},

			{
				block: 'input',
				name: 'time',
				mods: {
					theme: 'islands',
					size: 'xl',
					type: 'time'
				},
				placeholder: 'Время'
			}
		];
	})
);
