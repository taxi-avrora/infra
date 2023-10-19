modules.define('input', (provide, Input) => {
  provide(Input.declMod({ modName: 'type', modVal: 'time' }, {
    onSetMod: {
      js: {
        inited() {
          this._elem('control').domElem.mask('99:99', {
            autoclear: false,
          });
        },
      },
    },
  }));
});
