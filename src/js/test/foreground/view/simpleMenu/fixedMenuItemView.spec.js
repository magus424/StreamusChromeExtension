﻿define(function(require) {
    'use strict';

    var FixedMenuItemView = require('foreground/view/simple/fixedMenuItemView');
    var FixedMenuItem = require('foreground/model/simple/fixedMenuItem');
    var viewTestUtility = require('test/foreground/view/viewTestUtility');

    describe('FixedMenuItemView', function() {
        beforeEach(function() {
            this.documentFragment = document.createDocumentFragment();
            this.view = new FixedMenuItemView({
                model: new FixedMenuItem()
            });
        });

        afterEach(function() {
            this.view.destroy();
        });

        viewTestUtility.ensureBasicAssumptions.call(this);
    });
});