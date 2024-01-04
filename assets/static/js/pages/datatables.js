
    $("#table2").DataTable({
        "ajax": {
            "url": '../brgycsp-rbi/asset/display',
            "type": 'POST',
            "datatype": "json",
            "data": {
                "action": 'display_members'
            },
            "error": function (xhr, error, thrown) {
                console.log('DataTables error:', error);
                console.log('Server response:', xhr.responseText);
            }
        },
        "columns": [
            {"data": [0]},
            {"data": [1]},
            {"data": [2]},
            {"data": [3]},
            {"data": [4]},
            {"data": [5]}
        
            // Add more columns as needed
        ],
        "debug": true
    });



// let jquery_datatable = $("#table1").DataTable({
//     responsive: true,
    
// })
// let customized_datatable = $("#table2").DataTable({
//     responsive: true,
//     pagingType: 'simple',
//     dom:
// 		"<'row'<'col-3'l><'col-9'f>>" +
// 		"<'row dt-row'<'col-sm-12'tr>>" +
// 		"<'row'<'col-4'i><'col-8'p>>",
//     "language": {
//         "info": "Page _PAGE_ of _PAGES_",
//         "lengthMenu": "_MENU_ ",
//         "search": "",
//         "searchPlaceholder": "Search.."
//     }
// })

// const setTableColor = () => {
//     document.querySelectorAll('.dataTables_paginate .pagination').forEach(dt => {
//         dt.classList.add('pagination-primary')
//     })
// }
// setTableColor()
// jquery_datatable.on('draw', setTableColor)