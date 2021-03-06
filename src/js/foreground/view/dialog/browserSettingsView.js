﻿define(function(require) {
    'use strict';

    var Checkboxes = require('foreground/collection/element/checkboxes');
    var CheckboxView = require('foreground/view/element/checkboxView');
    var DialogContent = require('foreground/view/behavior/dialogContent');
    var BrowserSettingsTemplate = require('text!template/dialog/browserSettings.html');

    var BrowserSettingsView = Marionette.LayoutView.extend({
        id: 'browserSettings',
        template: _.template(BrowserSettingsTemplate),

        templateHelpers: {
            contextMenusMessage: chrome.i18n.getMessage('contextMenus'),
            websiteEnhancementsMessage: chrome.i18n.getMessage('websiteEnhancements')
        },

        regions: {
            showTextSelectionContextMenu: '[data-region=showTextSelectionContextMenu]',
            showYouTubeLinkContextMenu: '[data-region=showYouTubeLinkContextMenu]',
            showYouTubePageContextMenu: '[data-region=showYouTubePageContextMenu]',
            enhanceYouTube: '[data-region=enhanceYouTube]',
            enhanceBeatport: '[data-region=enhanceBeatport]'
        },

        behaviors: {
            DialogContent: {
                behaviorClass: DialogContent
            }
        },

        initialize: function() {
            this.checkboxes = new Checkboxes();
        },

        save: function() {
            var currentValues = {};

            this.checkboxes.each(function(checkbox) {
                currentValues[checkbox.get('property')] = checkbox.get('checked');
            });

            this.model.save(currentValues);
        },

        onRender: function() {
            this._showCheckbox('showTextSelectionContextMenu', 'textSelection');
            this._showCheckbox('showYouTubeLinkContextMenu', 'youTubeLinks');
            this._showCheckbox('showYouTubePageContextMenu', 'youTubePages');
            this._showCheckbox('enhanceYouTube', 'youTube');
            this._showCheckbox('enhanceBeatport', 'beatport');
        },

        _showCheckbox: function(propertyName, message) {
            var checkbox = this.checkboxes.add({
                labelText: chrome.i18n.getMessage(message),
                checked: this.model.get(propertyName),
                property: propertyName
            });

            this.showChildView(propertyName, new CheckboxView({
                model: checkbox
            }));
        }
    });

    return BrowserSettingsView;
});