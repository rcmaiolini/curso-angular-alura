angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider.when('/fotos', {
    templateUrl: 'partials/fotos.html',
    controller: 'FotosController'
  });

  $routeProvider.when('/fotos/new', {
    templateUrl: 'partials/cadastro-fotos.html',
    controller: 'CadastroFotosController'
  });

  $routeProvider.when('/fotos/edit/:idFoto', {
    templateUrl: 'partials/cadastro-fotos.html',
    controller: 'CadastroFotosController'
  });

  $routeProvider.otherwise({ redirectTo: '/fotos' });

});
