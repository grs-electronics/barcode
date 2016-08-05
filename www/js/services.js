angular.module('starter.services', [])

.factory('Barcodes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var barcodes = ["Example"];

  return {
    all: function() {
      console.log("Longitud: "+barcodes.size);
      return barcodes;
    },
    remove: function(barcode) {
      chats.splice(barcodes.indexOf(barcode), 1);
    },
    get: function(barcode) {
      for (var i = 0; i < barcodes.length; i++) {
        if (barcodes[i] === barcode) {
          return barcodes[i];
        }else{
          alert('Código '+barcode+' No encontrado');
        }
      }
      return null;
    },
    add:function (barcode) {
      barcodes.push(barcode);
    }
  };
});
