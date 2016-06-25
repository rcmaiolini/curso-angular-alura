angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource){

  return $resource('v1/fotos/:idFoto', null, {
    update : {
      method : 'PUT'
    }
  });

})
.factory('cadastrarFotos', function(recursoFoto, $q, $rootScope){

  var servico = {};
  var evento = 'fotoCadastrada';

  servico.cadastrar = function(foto){
    return $q(function(resolve, reject){
      if(foto._id){

        recursoFoto.update({ idFoto : foto._id }, foto,
        function(){
          $rootScope.$broadcast(evento);
          resolve({
            mensagem : 'A foto ' + foto.titulo + ' foi alterada com sucesso!',
            inclusao : false
          });
        }, function(error){
          console.log(error);
          reject({
            mensagem : 'Não foi possivel alterar a foto ' + foto.titulo
          });
        });

      } else {

        recursoFoto.save(foto,
        function(){
          $rootScope.$broadcast(evento);
          resolve({
            mensagem : 'Foto ' + foto.titulo + ' incluída com sucesso!',
            inclusao : true
          });
        },
        function(error){
          console.log(error);
          reject({
            mensagem : 'Não foi possível incluir a foto ' + foto.titulo
          });
        });

      }
    });
  };

  return servico;

});
