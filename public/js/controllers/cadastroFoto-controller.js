angular.module('alurapic').controller('CadastroFotosController', function($scope, $routeParams, recursoFoto, cadastrarFotos){

  $scope.foto = {};
  $scope.mensagem = '';

  if ($routeParams.idFoto) {
    recursoFoto.get({
      idFoto : $routeParams.idFoto
    }, function(foto){
      $scope.foto = foto;
    }, function(error){
      $scope.mensagem = 'Não foi possivel obter a foto.';
    });
  }

  $scope.submeter = function() {
    if($scope.formulario.$valid){

      cadastrarFotos.cadastrar($scope.foto)
      .then(function(dados){
        $scope.mensagem = dados.mensagem;
        if(dados.inclusao){
          $scope.foto = {};
        }
      })
      .catch(function(dados){
        $scope.mensagem = dados.mensagem;
      });

    }
  };

});
