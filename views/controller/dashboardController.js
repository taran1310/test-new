function dashboardController($scope,$http) {
 
 $scope.isClosed = false;
 $scope.test={};
 $scope.test.openNav=true
 
 $scope.openNav1=function()
 {
 
 if($scope.isClosed == false)
 {
 
 $scope.test.openNav=false;
 $scope.isClosed = true;
 
 }
 else if($scope.isClosed == true)
 {
 $scope.test.openNav=true;
 $scope.isClosed = false;
 
 }
  
 }
 
}


/*$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});*/