/*aquí va tu código*/
const app={
  item:{
  	name:undefined,
  	comment:undefined
  },

  init:function(){
  	app.item.name= $('#clave');
  	app.item.comment= $('#valor');
  	app.setup();
  	app.show();
  },

  setup: function(){
  	$('#addBtn').click(app.addComment);
  	$('#clearBtn').click(app.clearComments);
  },

  addComment:function(event){
  	localStorage.setItem (app.item.name.val(), app.item.comment.val());
  	$('#datos').append(`<p> ${app.item.name.val()} </p>\
                            <p>  ${app.item.comment.val()} </p>`);
  },

  clearComments: function (event) {
    $('#datos').empty();
    localStorage.clear();
  },

  show: function(){
    for (var clave in localStorage){
			 var comentario = localStorage[clave];
			 $('#datos').append(`<p> ${clave} </p>\
                            <p>  ${comentario} </p>`);
   		}
 	},
}

$(document).ready ( app.init );


$(document).ready(function() {
   $('.photos').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('.photos').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.photos').click(function() {
       $(this).toggle(1000);
   }); 
});