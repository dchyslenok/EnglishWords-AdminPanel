Ext.define('App.view.main.Uploader', {
  extend: 'Ext.Window',
  alias: 'widget.nameCreationPopup',
  title: 'aTitle',
  width: 450,
  height: 300,
  layout: 'fit',
  bodyStyle: 'padding:5px;',
  modal: true,
  resizable: false,
  constructor: function (callbeck) {
    var me = this;
    Ext.apply(this, {});

    me.items = [{
      xtype : 'panel',
      layout : 'form',
      itemId : 'uploadForm',
      items : [{
        xtype : 'panel',
        layout : 'hbox',
        border : true,
        items : [{
          xtype : 'button',
          text : 'Urk',
          iconCls : 'fa fa-times',
          handler : function () {
            me.close();
          }
        },{
          xtype : 'button',
          text : 'Upload file',
          iconCls : 'fa fa-times',
          handler : function () {
            me.close();
          }
        }]
      },{
        reference: 'fileUpload',
        xtype: 'filefield',
        name: 'photo',
        fieldLabel: 'Photo',
        labelWidth: 50,
        msgTarget: 'side',
        allowBlank: false,
        anchor: '100%',
        buttonText: 'Select Photo...',
        listeners: {
          change: function () {
            me.mask('Load');
            var form = me.getComponent('uploadForm');
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
                  callbeck(response.url);
                  me.unmask();
                  me.close();
                },
                failure : function (response, opts) {
                  console.log('server-side failure with status code ' + response.status);
                }
              });
            };
            FR.readAsDataURL(file);
          }
        }
      }]
    }];

    me.buttons = [{
      xtype : 'button',
      text : 'Cancel',
      iconCls : 'fa fa-times',
      handler : function () {
        me.close();
      }
    },{
      xtype : 'button',
      text : 'Save',
      formBind : true,
      iconCls : 'fa fa-floppy-o',
      handler : callbeck
    }];

    this.callParent(arguments);
  },
});

