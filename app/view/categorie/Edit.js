Ext.define('App.view.categorie.Edit', {
    extend : 'Ext.form.Panel',
    xtype : 'categorieEdit',
    title : 'Edit categorie',
    iconCls : 'fa fa-pencil-square-o',
    layout : 'hbox',
    reference : 'categorieEdit',
    hidden : true,
    items : [{
        xtype : 'panel',
        layout : 'form',
        flex : 1,
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
            reference : 'imgUrlEdit',
            fieldLabel : 'Image url',
            editable : false,
            name : 'imgUrl',
            allowBlank : false
        },{
            xtype : 'checkbox',
            fieldLabel : 'Active',
            name : 'active',
            value : false
        }]
    }, {
        xtype: 'container',
        reference : 'imageEdit',
        margin : 10,
        width: 202.33,
        height: 202.33,
        html: '<img src="http://englishwords/storage/image/FotorCreated.jpg" height="201.33" width="201.33">',
        listeners: {
            el: {
                click: 'onUploadFileEdit'
            }
        }
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