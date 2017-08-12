var comparisonList = ['selecctivity', 'peakness', 'pc', 'decodability'];
var numPerformance = 4;
var html = '';
var objectArrary = $('#nonFormList').serializeArray();
var modelList = [];
var dataList = [];
var ephysList = [];
$.each(objectArrary, function(ind, value){
  var name = this.name.split("/");
  var type_name = name[0];
  if(type_name === 'data'){
    ephys_name = name[1];
    if (ephysList.indexOf(ephys_name) === -1){
      ephysList.push(name[1]);
    }
    dataList.push(name[1]+'/'+name[2]);
  }
  else if (type_name === 'model') {
    modelList.push(name[1]);
  }
});
if(dataList.length){
  $.each(modelList, function(ind, model){
    $.each(dataList, function(ind, data){
      dataList.push(data+'/'+model);
    });
  });
  dataList = dataList.concat(ephysList);
  dataList.sort();
  $.each(dataList, function(ind, data){
    // console.log(data);
    var str_data = data.split("/");
    var tb_name = '<h4>'+str_data[0]+'</h4>';
    if (str_data.length===1){
      tb_name += '<br><br>';
    }else if (str_data.length===2) {
      tb_name += str_data[1]+'<br><br>';
    }else {
      tb_name += str_data[1]+'<br>'+str_data[2]+'<br>';
    }
    html += '<tr>';
    html += '<td>'+ tb_name +'</td>'
    for(var i=0; i<numPerformance; i++){
      var divId = data.replace(/\ +/g, '');
      divId = divId.replace(/\//g, '');
      divId = divId.replace(/\./g, '');
      // console.log(divId);
      html += '<td><div id="' + divId + i +'"> </div> </div></td>'
    }
    html += '</tr>';
  });
  $('#nonFormListResults').html(html);
}
else{
  alert('Please select dataset to compare....');
  $('#nonFormListResults').load('/results/_non_ephys_ca_s2c_form_empty.html');
}


$.each(dataList, function(ind, data){
  // plot selecctivity
  var plot_ind = 0;
  var url = data.replace(/\ +/g, '_');
  url = url.replace(/\//g, '');
  url = url.replace(/\./g, '');
  url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
  var divId = data.replace(/\ +/g, '');
  divId = divId.replace(/\//g, '');
  divId = divId.replace(/\./g, '');
  divId += plot_ind;
  $.ajax({
    url: url,
    success: function(){
      c3.generate({
        bindto: '"#' + data + '0"',
        data: {
          url: url,
          type: 'pie'
        }
      });
    },
    error: function(){
      $("#" + divId).html('Non results at the moment');
    }
  });
});

$.each(dataList, function(ind, data){
  // plot peakness
  var plot_ind = 1;
  var url = data.replace(/\ +/g, '_');
  url = url.replace(/\//g, '');
  url = url.replace(/\./g, '');
  url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
  var divId = data.replace(/\ +/g, '');
  divId = divId.replace(/\//g, '');
  divId = divId.replace(/\./g, '');
  divId += plot_ind;
  $.ajax({
    url: url,
    success: function(){
      c3.generate({
        bindto: '"#' + data + '0"',
        data: {
          url: url,
          type: 'pie'
        }
      });
    },
    error: function(){
      $("#" + divId).html('Non results at the moment');
    }
  });
});

$.each(dataList, function(ind, data){
  // plot pc
  var plot_ind = 2;
  var url = data.replace(/\ +/g, '_');
  url = url.replace(/\//g, '');
  url = url.replace(/\./g, '');
  url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
  var divId = data.replace(/\ +/g, '');
  divId = divId.replace(/\//g, '');
  divId = divId.replace(/\./g, '');
  divId += plot_ind;
  $.ajax({
    url: url,
    success: function(){
      c3.generate({
        bindto: '"#' + data + '0"',
        data: {
          url: url,
          type: 'pie'
        }
      });
    },
    error: function(){
      $("#" + divId).html('Non results at the moment');
    }
  });
});

$.each(dataList, function(ind, data){
  // plot decodability
  var plot_ind = 3;
  var url = data.replace(/\ +/g, '_');
  url = url.replace(/\//g, '');
  url = url.replace(/\./g, '');
  url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
  var divId = data.replace(/\ +/g, '');
  divId = divId.replace(/\//g, '');
  divId = divId.replace(/\./g, '');
  divId += plot_ind;
  $.ajax({
    url: url,
    success: function(){
      c3.generate({
        bindto: '"#' + data + '0"',
        data: {
          url: url,
          type: 'pie'
        }
      });
    },
    error: function(){
      console.log(plot_ind);
      console.log(divId);
      $("#" + divId).html('Non results at the moment');
    }
  });
});