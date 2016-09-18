Ext.define('App.view.categorie.Index', {
    extend : 'Ext.panel.Panel',
    xtype : 'categorie',
    controller: 'categorie',
    requires : [
        'App.view.categorie.Grid',
        'App.view.categorie.Add',
        'App.view.categorie.Edit'
    ],
    title: 'Categories',
    iconCls: 'fa fa-tags',
    items : [{
        xtype : 'categorieAdd'
    },{
        xtype : 'categorieEdit'
    },{
        xtype : 'categorielist'
    }],
    listeners : {
    }
});