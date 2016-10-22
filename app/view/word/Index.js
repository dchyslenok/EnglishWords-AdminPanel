Ext.define('App.view.word.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'word',
    controller: 'word',
    requires : [
        'App.view.word.Grid',
        'App.view.word.Add',
        'App.view.word.Edit',
        'App.view.word.Search',
        'Ext.toolbar.Paging'
    ],
    title: 'Words',
    iconCls: 'fa fa-language',
    layout: 'border',
    items : [{
        xtype : 'wordAdd',
        region: 'north'
    },{
        xtype : 'wordEdit',
        region: 'north'
    },{
        xtype : 'wordSearch',
        region: 'north'
    },{
        xtype : 'wordlist',
        region: 'center'
    }],
    listeners : {
    }
});