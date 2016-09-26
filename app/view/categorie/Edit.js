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
            reference : 'ImgUrl',
            fieldLabel : 'Image url',
            editable : false,
            name : 'imgUrl',
            allowBlank : false
        },{
          xtype : 'button',
          text : 'Select image',
          iconCls : 'fa fa-floppy-o',
          handler : 'onUploadFile'
        },{
            xtype : 'checkbox',
            fieldLabel : 'Active',
            name : 'active',
            value : false
        }]
    }, {
        xtype: 'container',
        reference : 'image',
        margin : 10,
        width: 202.33,
        height: 202.33,
        html: '<img src="http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" style="border: solid 5px #d0d0d0;" height="201.33" width="201.33">',
        listeners: {
            el: {
                click: 'onUploadFile'
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