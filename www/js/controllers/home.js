angular.module('Home.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPlatform, APIService) {
  $ionicPlatform.ready(function(){
    try{
      // Categories and subCategories data
      	$scope.categories= [
			  {
			    top: 'Eva',
			    left: ['write mail to Eva','get contact details','visit profile']
			  },
			  {
			    top: 'Bob',
			    left: ['write mail to Bob']
			  },
			  {
			    top: 'Gui',
			    left: ['write mail to Gui','visit profile','ask for help']
			  }
		];
        $scope.currentCategory = 'Eva';
		$scope.subCategories = ['write mail to Eva','get contact details','visit profile'];
		$scope.setSubCategories = function(subCategories){
			$scope.subCategories = subCategories;
		}
        // Fetch content based on top and left parameters
		$scope.getContent = function(category, sub_category){
			APIService.getData({
                req_url: 'https://x2-server.herokuapp.com/api/contexts?top=' + category + '&left=' + sub_category
          	}).then(function(resp) {
                if(resp.data) {
                    $scope.content = resp.data.content;
                }
               },function(resp) {
                  // This block execute in case of error.
            });			
		}

     }catch(err){
      console.log(err.message);
    }
  });

})