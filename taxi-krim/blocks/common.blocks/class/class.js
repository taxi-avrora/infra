modules.define("class", ["i-bem-dom", "button", "jquery"], function (
    provide,
    bemDom,
    Button,
    $
) {
    provide(
        bemDom.declBlock(this.name, {
            onSetMod: {
                js: {
                    inited: function () {
                        this._domEvents(this._elems("item"))
                            .on("mouseenter", this._onMouseEnterItem)
                            .on("mouseleave", this._onMouseLeaveItem);

                        this._domEvents(this._elems("button")).on(
                            "pointerclick",
                            this._scrollTop
                        );
                    },
                },
            },

            _onMouseEnterItem: function (event) {
                event.bemTarget.setMod("hovered");
            },

            _onMouseLeaveItem: function (event) {
                event.bemTarget.delMod("hovered");
            },

            _scrollTop: function () {
                var isMobile = window.innerWidth < 768;
                var calculates = document.querySelectorAll(".calculate-taxi");
                var top = calculates[1].offsetTop;

                window.scrollTo({
                    top: isMobile ? top : 0,
                    behavior: "smooth",
                });
            },
        })
    );
});
