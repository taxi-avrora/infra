block('header')(
  js()(true),

  content()((node, ctx) => {
    return [
      // content
      {
        elem: 'content',
        content: [
          // info
          {
            elem: 'info',
            content: [
              // logotype
              {
                elem: 'logotype'
              },

              // title
              {
                elem: 'title',
                tag: 'h1',
                content: ctx.title
              },

              // subtitle
              {
                elem: 'subtitle',
                tag: 'h2',
                content: ctx.subtitle
              },

                            // Номера телефонов
                            {
                                elem: 'phones',
                                content: [
                                    //
                                    {
                                        elem: 'phone',
                                        phone: '8 (916) 907-55-74'
                                    },
                                    {
                                        elem: 'phone',
                                        phone: '8 (978) 034-93-92'
                                    }
                                ]
                            },

                            // Соц.кнопки
                            {
                                elem: 'social-buttons',
                                content: [
                                    // Viber
                                    {
                                        block: 'button',
                                        text: 'Viber',
                                        mods: {
                                            theme: 'viber',
                                            type: 'link',
                                            size: 'm'
                                        },
                                        url: 'viber://chat?number=79169075574',
                                        faw: {
                                            name: 'viber',
                                            style: 'brands'
                                        }
                                    },

                                    // Whatsapp
                                    {
                                        block: 'button',
                                        text: 'Whatsapp',
                                        mods: {
                                            theme: 'whatsapp',
                                            type: 'link',
                                            size: 'm'
                                        },
                                        url: 'whatsapp://send?phone=+79169075574',
                                        faw: {
                                            name: 'whatsapp',
                                            style: 'brands'
                                        }
                                    },

                                    // Telegram
                                    {
                                        block: 'button',
                                        text: 'Telegram',
                                        mods: {
                                            theme: 'telegram',
                                            type: 'link',
                                            size: 'm'
                                        },
                                        url: 'https://telegram.me/taxi_krim',
                                        faw: {
                                            name: 'telegram',
                                            style: 'brands'
                                        }
                                    }
                                ]
                            }
            ]
          },

          // calculate
          {
            block: 'calculate-taxi',
            title: 'Расчет стоимости такси по Крыму'
          }
        ]
      },

      // background
      {
        elem: 'image'
      },

      // shadow
      {
        elem: 'shadow'
      }
    ]
  })
);
