angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  recursoFoto.query(function(fotos){
    $scope.fotos = fotos;
  }, function(error){
    console.log(error);
  });

  $scope.remover = function(foto){
    recursoFoto.delete({
      idFoto : foto._id
    }, function(){
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
    }, function(error){
      $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo + '.';
    });
  };

});
