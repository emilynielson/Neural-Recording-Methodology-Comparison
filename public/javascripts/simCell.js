function plot_cell(){
  var dataset = $('#simDatasetID').dropdown('get value');
  var cell = $('#simCell').dropdown('get value');
  $('#simChart').replaceWith('<div id="simChart"><div class="bk-root"><div class="bk-plotdiv" id="mainPlot"></div></div></div>')
  if (cell === ''){
    alert("Please select a cell!");
  }
  else{
    var url = '/results/simData/' + dataset + '/' + cell + '.json' ;
      $.getJSON(url, function(data){  
        Bokeh.safely(function() {
          var docs_json = data[1];
          var render_items = data[0];
          Bokeh.embed.embed_items(docs_json, render_items);
        });

      });
  };
};


$(function(){
  $('#simDatasetID').dropdown({
    onChange: function(value){
      // console.log(value);
      var html = '';
      $.getJSON('/results/sim_'+ value +'.json', function(resultsJson){
        $.each(resultsJson, function(ind, val){
          html += '<div class="item" data-value="' + val.name + '">' + val.name + '</div>';
        });
        $('#simDataID').html(html);
        $('#simCell').dropdown('clear');
      });
    }
  });
});
