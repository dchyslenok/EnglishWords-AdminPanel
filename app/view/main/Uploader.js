Ext.define('App.view.main.Uploader', {
  extend: 'Ext.Window',
  title: 'Upload file',
  width: 450,
  height: 300,
  modal: true,
  layout: 'fit',
  constructor: function (callbeck) {
    var me = this;
    Ext.apply(this, {});
    me.items = [{
      itemId: 'tab',
      xtype: 'tabpanel',
      plain: true,
      activeTab: 1,
      items: [{
        itemId: 'tab1',
        xtype : 'form',
        title: 'From URL',
        layout: 'form',
        anchor : 100,
        items: [{
          xtype : 'textfield',
          vtype:'url',
          itemId : 'ImgUrl',
          fieldLabel : 'Image url',
          name : 'imgUrl',
          allowBlank : false
        }],
        buttons : [{
          xtype: 'button',
          text: 'Cancel',
          iconCls: 'fa fa-times',
          handler: function () {
            me.close();
          }
        }, {
          xtype: 'button',
          text: 'Save',
          formBind : true,
          iconCls: 'fa fa-floppy-o',
          handler: function () {
            var url = me.getComponent('tab').getComponent('tab1').getComponent('ImgUrl').getValue();
            callbeck(url);
            me.close();
          }
        }]
      }, {
        title: 'From File',
        layout: 'form',
        items: [{
          xtype: 'filefield',
          name: 'photo',
          fieldLabel: 'Photo',
          labelWidth: 50,
          msgTarget: 'side',
          allowBlank: false,
          anchor: '100%',
          buttonText: 'Select Photo...',
          listeners: {
            change: function (el) {
              me.mask('Load');
              var file = el.getEl().down('input[type=file]').dom.files[0];
              var type = file.name.split('.').pop();
              var FR = new FileReader();

              FR.onload = function (e) {
                Ext.Ajax.request({
                  url: '/api_v1/upload/binary',
                  method: 'POST',
                  params: {
                    data: e.target.result,
                    type: type,
                    name: file.name
                  },
                  success: function (response, opts) {
                    var response = Ext.decode(response.responseText);
                    callbeck(response.url);
                    me.unmask();
                    me.close();
                  },
                  failure: function (response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                  }
                });
              };
              FR.readAsDataURL(file);
            }
          }
        }],
        buttons : [{
          xtype: 'button',
          text: 'Cancel',
          iconCls: 'fa fa-times',
          handler: function () {
            me.close();
          }
        }]
      }]
    }];
    this.callParent(arguments);
  },
});

