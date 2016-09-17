Ext.define('App.view.categorie.Add', {
    extend : 'Ext.form.Panel',
    xtype : 'categorieAdd',
    title : 'Add categorie',
    iconCls : 'fa fa-plus',
    layout : 'form',
    reference : 'categorieAdd',
    hidden : true,
    items : [{
        xtype : 'textfield',
        fieldLabel : 'Categorie name',
        name : 'name',
        allowBlank : false
    }, {
        xtype : 'textfield',
        fieldLabel : 'Image url',
        name : 'imgUrl',
        allowBlank : false
    }],
    buttons : [{
        xtype : 'button',
        text : 'Save',
        formBind : true,
        iconCls : 'fa fa-floppy-o',
        handler : 'onSaveAddCategorie'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'fa fa-times',
        handler : 'onCancelAddCategorie'
    }],
    listeners : {}
});