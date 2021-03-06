﻿define(function(require) {
    'use strict';

    var DeleteListItemButtonView = require('foreground/view/listItemButton/deleteListItemButtonView');
    var PlaylistItem = require('background/model/playlistItem');
    var viewTestUtility = require('test/foreground/view/viewTestUtility');

    describe('DeleteListItemButtonView', function() {
        beforeEach(function() {
            this.documentFragment = document.createDocumentFragment();
            this.view = new DeleteListItemButtonView({
                model: new PlaylistItem()
            });
        });

        afterEach(function() {
            this.view.destroy();
        });

        viewTestUtility.ensureBasicAssumptions.call(this);
    });
});