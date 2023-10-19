modules.define(
    'admin-price', ['i-bem-dom', 'form', 'select', 'input', 'api'],
    function(provide, bemDom, Form, Select, Input, Api) {
        var Block = bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function() {
                        this.selectFrom = this.findChildBlock({ block: Select, modName: 'name', modVal: 'from' });
                        this.selectTo = this.findChildBlock({ block: Select, modName: 'name', modVal: 'to' });

                        this._events(Select)
                            .on('change', this._onChangeRoute);
                    }
                }
            },

            // Изменение маршрута
            _onChangeRoute() {
                var from = this.selectFrom.getVal(),
                    to = this.selectTo.getVal();

                if (!from || !to) { return false; }

                Api.get('prices.get', { from: from, to: to })
                    .then(data => {
                        if (data.response) {
                            this._setPrices(data.response.prices);
                            this._setVisiblePrices(true);
                        }
                    });
            },

            // Устаовить видимость цен
            _setVisiblePrices(visible = false) {
                this._elem('prices').setMod('visible', visible);
            },

            // Установить стоимости
            _setPrices(prices) {
                for (var cl in prices) {
                    var input = this.findChildBlock({ block: Input, modName: 'name', modVal: `price_${cl}` });
                    input && input.setVal(prices[cl]);
                }
            }
        });

        provide(Block);
    }
);
