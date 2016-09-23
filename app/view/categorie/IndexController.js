Ext.define('App.view.categorie.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.categorie',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();
        this.lookupReference('btnDelete').enable();
    },

    onOpenAddForm : function () {
        if (this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').show();
            this.lookupReference('categorieList').hide();
        }
    },

    onOpenEditForm : function () {
        var form = this.lookupReference('categorieEdit');
        var grid = this.lookupReference('categorieList');
        var id = grid.getSelectionModel().getSelection()[0].data.id;
        var record = Ext.StoreMgr.lookup("Categorie").getById(id);
        form.getForm().setValues(record.data);
        if(record.data.active === 'T') {
            form.getForm().findField('active').setValue(true);
        } else {
            form.getForm().findField('active').setValue(false);
        }

        form.show();
        grid.hide();
    },

    onAdd : function () {
        var form = this.lookupReference('categorieAdd');
        var categorie = Ext.create('App.model.Categorie', form.getForm().getValues());
        categorie.save({
            failure : function (record, operation) {
            },
            success : function (record, operation) {
            }
        });
        form.reset();
        Ext.StoreManager.lookup('Categorie').reload();

        if (!form.hidden) {
            form.hide();
            this.lookupReference('categorieList').show();
        }
    },

    onEdit : function () {
        var grid = this.lookupReference('categorieList');
        var form = this.lookupReference('categorieEdit');
        var formData = form.getForm().getValues();

        var categorie = Ext.create('App.model.Categorie', {
            'id' : formData.id
        });
        categorie.set('name', formData.name);
        categorie.set('imgUrl', formData.imgUrl);
        categorie.set('active', formData.active === 'on' ? 'T' : 'F');
        categorie.save();

        form.hide();
        grid.show();
        Ext.StoreManager.lookup('Categorie').reload();
    },

    onDelete : function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onDeleteConfirm', this);
    },

    onDeleteConfirm : function (choice) {
        if (choice === 'yes') {
            var grid = this.lookupReference('categorieList');
            var data = grid.getSelectionModel().getSelection()[0].data;
            var categorie = Ext.create('App.model.Categorie', data);

            categorie.erase({
                success : function (record, operation) {
                    var response = Ext.decode(operation._response.responseText);
                    if (!response.result) {
                        Ext.Msg.alert('Status', response.massage);
                    }
                }
            });
            Ext.StoreManager.lookup('Categorie').reload();
        }
    },

    onCancelAdd : function () {
        if (!this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').reset();
            this.lookupReference('categorieAdd').hide();
            this.lookupReference('categorieList').show();
        }
    },

    onCancelEdit : function () {
        var form = this.lookupReference('categorieEdit');
        var grid = this.lookupReference('categorieList');

        form.reset();
        form.hide();
        grid.show();
    },

    onUploadFile : function () {
        var form = this.lookupReference('categorieEdit');
        var image = this.lookupReference('image');
        form.mask('Load');

        var file = form.down('filefield').getEl().down('input[type=file]').dom.files[0];
        var type = file.name.split('.').pop();
        var FR= new FileReader();

        FR.onload = function(e) {
            Ext.Ajax.request({
                url : 'http://englishwords/api_v1/upload/binary',
                method : 'POST',
                params : {
                    data : e.target.result,
                    type : type,
                    name : file.name
                },
                success : function (response, opts) {
                    var response = Ext.decode(response.responseText);
                    image.update('<img src="'+ response.url +'" style="width:201.33px;height:201.33px; border: solid 5px #d0d0d0;">');
                    form.unmask();
                },
                failure : function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        };
        FR.readAsDataURL(file);
    }
});
