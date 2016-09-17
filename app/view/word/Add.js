Ext.define('App.view.word.Add', {
    extend : 'Ext.form.Panel',
    xtype : 'wordAdd',
    title : 'Add word',
    iconCls : 'fa fa-plus',
    layout : 'form',
    reference : 'wordAdd',
    hidden : true,
    items : [{
        xtype : 'combobox',
        fieldLabel : 'Categorie',
        emptyText : 'categorie',
        name : 'categorie_id',
        displayField : 'name',
        valueField : 'id',
        triggerAction : 'all',
        queryMode : 'local',
        forceSelection : true,
        editable : false,
        store : 'Categorie'
    }, {
        xtype : 'textfield',
        fieldLabel : 'Word',
        name : 'word',
        allowBlank : false
    }, {
        xtype : 'textfield',
        fieldLabel : 'Translate',
        name : 'translate',
        allowBlank : false
    }, {
        xtype : 'textfield',
        fieldLabel : 'Transcription',
        name : 'transcription'
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
        handler : 'onSaveAddWord'
    }, {
        xtype : 'button',
        text : 'Cancel',
        iconCls : 'fa fa-times',
        handler : 'onCancelAddWord'
    }],
    listeners : {}
});
