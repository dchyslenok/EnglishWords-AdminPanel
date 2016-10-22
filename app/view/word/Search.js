Ext.define('App.view.word.Search', {
    extend: 'Ext.form.Panel',
    xtype: 'wordSearch',
    reference: 'wordSearch',
    layout: 'form',
    border : true,
    hidden: true,
    items: [{
        xtype: 'textfield',
        fieldLabel: '<div style="font-size:20px">Search:</div>',
        labelSeparator: '',
        name: 'search',
        enableKeyEvents : true,
        listeners: {
            keypress : 'onSearchKeypress'
        }
    }, {
        xtype: 'combobox',
        fieldLabel: 'Categorie',
        emptyText: 'categorie',
        name: 'categorie_id',
        displayField: 'name',
        valueField: 'id',
        triggerAction: 'all',
        queryMode: 'local',
        forceSelection: true,
        editable: false,
        store: 'Categorie',
        listeners: {
            select: 'onCategorieSelected'
        }
    }],
    buttons: [{
        xtype: 'button',
        text: 'Clear',
        formBind: true,
        iconCls: 'fa fa-eraser',
        handler: 'onSearchClear'
    },{
        xtype: 'button',
        text: 'Search',
        formBind: true,
        iconCls: 'fa fa-search',
        handler: 'onSearch'
    }],
    listeners: {}
});