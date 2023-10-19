modules.define(
    'calculate-taxi', ['i-bem-dom', 'select', 'button', 'input', 'radio-group', 'checkbox', 'textarea', 'api'],
    function(provide, bemDom, Select, Button, Input, RadioGroup, Checkbox, Textarea, Api) {

        provide(bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.auto = 'standart';

                        this.selectFrom = this.findChildBlock({ block: Select, modName: 'name', modVal: 'from' });
                        this.selectTo = this.findChildBlock({ block: Select, modName: 'name', modVal: 'to' });

                        this.radioAuto = this.findChildBlock({ block: RadioGroup, modName: 'name', modVal: 'auto' });

                        // Изменение маршрута
                        this._events(Select)
                            .on('change', this._onChangeRoute);

                        // Изменение типа авто
                        this._events(this.radioAuto)
                            .on('change', this._onChangeAuto);

                        // Изменяем тип поездки
                        this._events(this._elem('typeOrder').findMixedBlock(RadioGroup))
                            .on('change', (event) => {
                                var val = event.bemTarget.getVal();

                                this._elem({ elem: 'datetime', modName: 'name', modVal: 'time' }).setMod('visible', (val === '2'));
                            });

                        this._domEvents(Checkbox)
                            .on('change', function() {
                                this._elem({ elem: 'datetime', modName: 'name', modVal: 'time-backward' }).toggleMod('visible');
                            });

                        // Отправляем письмо
                        this._domEvents(this._elem('submit'))
                            .on('click', this._sendMail);
                    }
                }
            },

            // Изменение маршрута
            _onChangeRoute() {
                var from_id = this.selectFrom.getVal(),
                    to_id = this.selectTo.getVal(),
                    from_text = this.selectFrom.findChildBlock(Button)._elem('text').domElem.text(),
                    to_text = this.selectTo.findChildBlock(Button)._elem('text').domElem.text();

                if (!from_id || !to_id) { return false; }

                this
                    ._getPrices(from_text, to_text)
                    .then(prices => {
                        this.prices = prices;

                        this._setPrice();
                    });
            },

            // Изменить тип авто
            _onChangeAuto() {
                var autos = ['', 'standart', 'comfort', 'business', 'minivan'];

                this.auto = autos[this.radioAuto.getVal()];

                this.prices && this._setPrice()
            },

            // Получить стоимости маршрута
            _getPrices(from, to) {
                return new Promise((resolve, reject) => {
                    Api.get('prices.get', { from: from, to: to })
                        .then(data => {
                            if (data.response) {
                                resolve(data.response.prices);
                            } else {
                                console.error('CALCULATE-TAXI', data.error);
                                reject(data.error);
                            }
                        });
                })
            },

            // Установить стоимость
            _setPrice() {
                if (!this.prices) { return false; }

                this._elem('price').domElem.html('Стоимость поездки: <span>' + this.prices[this.auto] + ' ₽</span>');
            },

            _findSelectByName: function(name) {
                var res = null;
                this._selects.forEach(select => {
                    (select.getName() === name) && (res = select);
                });
                return res;
            },

            _sendMail: function() {
                var data = {
                    from: this.selectFrom.findChildBlock(Button)._elem('text').domElem.text(),
                    to: this.selectTo.findChildBlock(Button)._elem('text').domElem.text(),
                    type: this._elem('typeOrder').findMixedBlock(RadioGroup).getVal(),
                    time: this._elem({ elem: 'datetime', modName: 'name', modVal: 'time' }).getVal(),
                    back: this.findChildBlock(Checkbox).hasMod('checked') ? 1 : 0,
                    backdate: this._elem({ elem: 'datetime', modName: 'name', modVal: 'time-backward' }).getVal(),
                    class: this._elem('class').findMixedBlock(RadioGroup).getVal(),
                    commentary: this.findChildBlock(Textarea).getVal(),
                    price: this._elem('price').domElem.text(),
                    phone: this.findChildBlock({ block: Input, modName: 'type', modVal: 'phone' }).getVal()
                };

                // Проверяем корректность заполнения телефона
                if ((!data.phone.length) || (data.phone.indexOf('_') != -1)) {
                    this.findChildBlock({ block: Input, modName: 'type', modVal: 'phone' }).setMod('error');
                    return;
                }

                Api
                    .post('orders.save', {
                        url: this._mailUrl,
                        data: data,
                        dataType: 'json'
                    })
                    .then(() => {
                        this._elem('content').domElem.slideUp(200, () => {
                            this._elem('message').setMod('visible');
                        });

                        setTimeout(() => {
                            this._elem('message').delMod('visible');
                            this._elem('content').domElem.slideDown(200);
                        }, 15000);
                    });
            }
        }));

    });

modules.define(
    'calculate-taxi__datetime', ['i-bem-dom', 'input'],
    function(provide, bemDom, Input) {

        provide(bemDom.declElem('calculate-taxi', 'datetime', {
            onSetMod: {
                js: {
                    inited: function() {
                        this._inputs = this.findChildBlocks(Input);
                    }
                }
            },

            getVal: function() {
                var data = {
                    date: this._inputs.get(0)._elem('control').domElem.val(),
                    time: this._inputs.get(1)._elem('control').domElem.val()
                };
                return data;
            },

            toggle: function() {
                this.hasMod('visible') ? this.hide() : this.show();
            },

            show: function() {
                this.domElem.slideDown(200);
                this.setMod('visible');
            },

            hide: function() {
                this.domElem.slideUp(200);
                this.delMod('visible');
            }
        }));

    });
