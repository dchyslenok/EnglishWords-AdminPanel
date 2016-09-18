Ext.define('App.view.categorie.Edit', {
    extend : 'Ext.form.Panel',
    xtype : 'categorieEdit',
    title : 'Edit categorie',
    iconCls : 'fa fa-pencil-square-o',
    layout : 'form',
    reference : 'categorieEdit',
    hidden : true,
    items : [{
        xtype : 'hidden',
        name : 'id'
    }, {
        xtype : 'hidden',
        name : '_method',
        value : 'PUT'
    },{
        xtype : 'textfield',
        fieldLabel : 'Categorie name',
        name : 'name',
        allowBlank : false
    }, {
        xtype : 'textfield',
        fieldLabel : 'Image url',
        name : 'imgUrl',
        allowBlank : false
    },{
        xtype : 'checkbox',
        fieldLabel : 'Active',
        name : 'active',
        value : false
    }],
    buttons : [{
        xtype : 'button',
        text : 'Save',
        formBind : true,
        iconCls : 'fa fa-floppy-o',
        handler : 'onEdit'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'fa fa-times',
        handler : 'onCancelEdit'
    }],
    listeners : {}
});