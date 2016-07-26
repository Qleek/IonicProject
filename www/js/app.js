// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller("myCtrl", function($scope, $cordovaBarcodeScanner) {

  document.addEventListener("deviceready", function () {

 //--------------------------------------------------------------------
    $scope.scanBarcode = function() {
      console.log('before');
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.result_text = imageData.text;
            $scope.result_format = imageData.format;
            $scope.result_cancelled = imageData.cancelled;
            $scope.result_error = '';
            
            //cordova.InAppBrowser.open
            window.open(
      //'spotify://artist:'+ $scope.result_text, '_blank', 'location=yes'//inapp locbar
      //'spotify://artist:'+ $scope.result_text, '_blank', 'location=yes'//inapp nolocbar
      'spotify://track:'+ $scope.result_text, '_system' //system browser
      //'spotify://artist:'+ $scope.result_text, '_self' //Cordova web view
            );


        }, function(error) {
            $scope.result_error = error;
        });
      console.log('after');

    };

  //--------------------------------------------------------------------


  //--------------------------------------------------------------------
  });
 
});