// =============  Data Table - (Start) ================= //

// $(document).ready(function(){
    
//     var table = $('#example').DataTable({
        
//         buttons:['copy', 'csv', 'excel', 'pdf', 'print']
        
//     });
    
//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');

// });

// =============  Data Table - (End) ================= //


var data = [

            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"karan"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            },        
            {
                ip:"127.0.0.1",
                host:"localhost",
                owner:"owner"
            }
  ];


$(document).ready(function() {
    var table = $("#employees").DataTable({
      data: data,
      columns: [
        { data: "ip" },
        { data: "host" },
        { data: "owner" },
      ],
    });
  
    $("#employees tbody").on("click", "td.details-control", function() {
      var tr = $(this).closest("tr");
      var row = table.row(tr);
  
      if (row.child.isShown()) {
        row.child.hide();
        tr.removeClass("shown");
      } else {
        row.child(format(row.data()), "p-0").show();
        tr.addClass("shown");
      }
    });

});
