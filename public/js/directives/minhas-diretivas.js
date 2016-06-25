angular.module('minhasDiretivas', [])
  .directive('meuPainel', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
      titulo: '@'
    };
    ddo.templateUrl = 'partials/directives/meu-painel.html';
    return ddo;
  })
  .directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
      titulo: '@',
      url: '@'
    };
    ddo.template = '<img src="{{url}}" class="img-responsive center-block" alt="{{titulo}}">';
    return ddo;
  })
  .directive('meuBotaoRemover', function(){
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
      nome: '@',
      acao: '&'
    };
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
    return ddo;
  })
  .directive('meuFocus', function(){
    var ddo = {};
    ddo.restrict = "A";
    ddo.link = function(scope, element) {
       scope.$on('fotoCadastrada', function() {
           element[0].focus();
       });
    };
    return ddo;
  });
