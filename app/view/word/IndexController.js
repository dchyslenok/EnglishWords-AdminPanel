Ext.define('App.view.word.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.word',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();
        this.lookupReference('btnDelete').enable();
    },

    onOpenAddForm : function () {
        this.lookupReference('wordAdd').show();
        this.lookupReference('wordList').hide();
    },

    onOpenEditForm : function () {
        var form = this.lookupReference('wordEdit');
        var grid = this.lookupReference('wordList');
        var id = grid.getSelectionModel().getSelection()[0].data.id;
        var record = Ext.StoreMgr.lookup("Word").getById(id);
        var image = this.lookupReference('imageEdit');
        image.setSrc(record.data.imgUrl);
        form.getForm().setValues(record.data);
        if(record.data.active === 'T') {
            form.getForm().findField('active').setValue(true);
        } else {
            form.getForm().findField('active').setValue(false);
        }
        form.show();
        grid.hide();
    },

    onCancelAdd : function () {
        this.lookupReference('wordAdd').reset();
        this.lookupReference('wordAdd').hide();
        this.lookupReference('wordList').show();
        this.lookupReference('imageAdd').setSrc('resources/images/selectImage.jpg');
    },

    onCancelEdit : function () {
        this.lookupReference('wordEdit').reset();
        this.lookupReference('wordEdit').hide();
        this.lookupReference('wordList').show();
    },

    onAdd : function () {
        var form = this.lookupReference('wordAdd');
        var word = Ext.create('App.model.Word', form.getForm().getValues());
        var me = this;
        word.save({
            success : function (record, operation) {
                me.lookupReference('imageAdd').setSrc('resources/images/selectImage.jpg');
                form.reset();
            }
        });
        Ext.StoreManager.lookup('Word').reload();
        if (!form.hidden) {
            form.hide();
            this.lookupReference('wordList').show();
        }
    },


    onEdit : function () {
        var grid = this.lookupReference('wordList');
        var form = this.lookupReference('wordEdit');
        var formData = form.getForm().getValues();

        var word = Ext.create('App.model.Word', {
            'id' : formData.id
        });
        word.set('categorie_id', formData.categorie_id);
        word.set('word', formData.word);
        word.set('translate', formData.translate);
        word.set('transcription', formData.transcription);
        word.set('imgUrl', formData.imgUrl);
        word.set('active', formData.active === 'on' ? 'T' : 'F');
        word.set('content', formData.content);
        word.save();

        form.hide();
        grid.show();
        Ext.StoreManager.lookup('Word').reload();
    },

    onDelete : function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onDeleteConfirm', this);
    },

    onDeleteConfirm : function (choice) {
        if (choice === 'yes') {
            var grid = this.lookupReference('wordList');
            var data = grid.getSelectionModel().getSelection()[0].data;
            var word = Ext.create('App.model.Word', data);

            word.erase({
                success : function (record, operation) {
                    var response = Ext.decode(operation._response.responseText);
                    if (!response.result) {
                        Ext.Msg.alert('Status', response.massage);
                    }
                    Ext.StoreManager.lookup('Word').reload();
                }
            });
        }
    },

    onUploadFileEdit : function () {
        var image = this.lookupReference('imageEdit');
        var ImgUrl = this.lookupReference('imgUrlEdit');

        var uploader = Ext.create('App.view.main.Uploader', function (url) {
            image.setSrc(url);
            ImgUrl.setValue(url);
        });
        uploader.show();
    },

    onUploadFileAdd : function () {
        var image = this.lookupReference('imageAdd');
        var ImgUrl = this.lookupReference('imgUrlAdd');

        var uploader = Ext.create('App.view.main.Uploader', function (url) {
            image.setSrc(url);
            ImgUrl.setValue(url);
        });
        uploader.show();
    },

    onCategorieSelected : function (el, record) {
        var store = Ext.StoreMgr.lookup("Word");
        store.getProxy().setExtraParam('categorie_id', record.get('id'));
        store.reload();
    },

    search : function () {
        var form = this.lookupReference('wordSearch');
        if (form.hidden) {
            form.show();
        } else {
            form.hide();
        }
    },

    onSearchClear : function () {
        var form = this.lookupReference('wordSearch');
        var store = Ext.StoreMgr.lookup("Word");
        store.getProxy().setExtraParam('categorie_id', null);
        store.getProxy().setExtraParam('search', null);
        form.reset();
        store.reload();
    },

    onSearch : function () {
        var form = this.lookupReference('wordSearch');
        var store = Ext.StoreMgr.lookup("Word");
        var formData = form.getForm().getValues();

        store.getProxy().setExtraParam('categorie_id', formData.categorie_id);
        store.getProxy().setExtraParam('search', formData.search);

        store.reload();
    },

    onSearchKeypress : function (el, eventObject) {
        if (eventObject.getCharCode() == Ext.EventObject.ENTER) {
            this.onSearch();
        }
    }
});
