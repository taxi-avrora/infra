modules.define('input', (provide, Input) => {
  provide(Input.declMod({ modName: 'type', modVal: 'date' }, {
    onSetMod: {
      js: {
        inited() {
          let now = new Date(),
            day = now.getDate(),
            month = now.getMonth() + 1,
            year = now.getFullYear();

          if (day < 10) day = `0${day}`;
          if (month < 10) month = `0${month}`;

          this._elem('control').domElem.attr('value', `${day}.${month}.${year}`);
          this._elem('control').domElem.mask(`99.99.${year}`, {
            autoclear: false,
          });
        },
      },
    },
  }));
});
