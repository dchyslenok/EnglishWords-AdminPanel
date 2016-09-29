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
            name : 'imgUrl',
            editable : false,
            allowBlank : false
        },{
            xtype : 'checkbox',
            fieldLabel : 'Active',
            name : 'active',
            value : false
        }]
    }, {
        xtype: 'image',
        reference: 'imageEdit',
        src: 'resources/images/selectImage.jpg',
        width: 201,
        height: 201,
        margin: 10,
        style: 'border: 5px solid #0097a7',
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