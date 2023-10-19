modules.define('tabs', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._selected = this._elem({ elem: 'tab', modName: 'selected', modVal: true });

                this._domEvents(this._elems('tab'))
                	.on('click', this._onClickTab);
            }
        }
    },

    _onClickTab: function(event) {
    	if (this._selected.domElem === event.bemTarget.domElem) return;

    	this._selected && this._selected.delMod('selected');
    	event.bemTarget.setMod('selected');

    	this._selected = event.bemTarget;

    	this._emit('select', { val: event.bemTarget.params.val });
    },

    setContent: function(content) {
    	bemDom.update(this._elem('content').domElem, content);
    }
}));

});
