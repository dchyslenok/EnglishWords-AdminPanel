Ext.define('App.view.categorie.IndexController.js', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.categorie',

    onItemSelected : function (sender, record) {
        this.lookupReference('btnEdit').enable();

        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onShowAddCategorie : function () {
        if (this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').show();
            this.lookupReference('categorielist').hide();
        }
    },

    onCancelAddCategorie : function () {
        if (!this.lookupReference('categorieAdd').hidden) {
            this.lookupReference('categorieAdd').reset();
            this.lookupReference('categorieAdd').hide();
            this.lookupReference('categorielist').show();
        }
    },

    onSaveAddCategorie : function () {
        var form = this.lookupReference('categorieAdd');
        var categorie = Ext.create('Categorie', form.getForm().getValues());
        categorie.save({
            failure : function (record, operation) {
                console.log('fail');
            },
            success : function (record, operation) {
                console.log('save');
            }
        });
        form.reset();
        Ext.StoreManager.lookup('Categorie').reload();

        if (!form.hidden) {
            form.hide();
            this.lookupReference('categorielist').show();
        }
    },

    onConfirm : function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
