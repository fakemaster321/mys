


                    $(document).ready(function() {

                        $("#get-form").on('click', function() {
                      
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(showPosition);
                        } else { 
                             window.alert("Geolocation is not supported by this browser.");
                        }
                
                        });
                   function showPosition(position) {
                     $("#latitude-form").val(position.coords.latitude);
                     $("#longitude-form").val(position.coords.longitude);
                     $("#embed-map").attr('src', 'https://maps.google.com/maps?q=' + position.coords.latitude + ',' + position.coords.longitude + '&z=15&output=embed');
                      }
                      

                    $("#disability-select").on('change', function(){
                
                       var value_disability = $(this).val();

                       if (value_disability == 'other') {
                     $("#disability-select-input").removeAttr('disabled');
                       }else {
                        $("#disability-select-input").attr('disabled', 'disabled');

                       }

                   });

                    $("#voters-select").on('change', function() {
                        var voters = $(this).val();

                        if (voters == 'Yes') {
                            $("#voters-select-input").removeAttr('disabled');
                        }else {
                            $("#voters-select-input").attr('disabled', 'disabled');
                        }

                    });

                     $("#empStatus-select").on('change', function() {
                        var status = $(this).val();

                        if (status == 'Employed') {
                            $("#catEmployment-select").removeAttr('disabled');
                            $("#natEmployment-select").removeAttr('disabled');
                        }else {
                            $("#catEmployment-select").attr('disabled', 'disabled');
                            $("#natEmployment-select").attr('disabled', 'disabled');
                            
                        }

                    });

                      $("#birthDate-form").on('change', function(){
                            var birthdate = this.value;

                            if (birthdate.length >= 10) {
                              var birthdateTimestamp = Date.parse(birthdate);
                              
                              if (!isNaN(birthdateTimestamp)) {
                                var currentDate = new Date();
                                var ageMilliseconds = currentDate - birthdateTimestamp;
        
                                var ageYears = ageMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
                        
                                $("#age-form").val(Math.floor(ageYears));
                              } 
                                    }
                        });

                      $("#dResided-Brgy-input").on('change', function(){
                            var birthdate = this.value;

                            if (birthdate.length >= 10) {
                              var birthdateTimestamp = Date.parse(birthdate);
                              
                              if (!isNaN(birthdateTimestamp)) {
                                var currentDate = new Date();
                                var ageMilliseconds = currentDate - birthdateTimestamp;
        
                                var ageYears = ageMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
                        
                                $("#noYearsBrgy-form").val(Math.floor(ageYears));
                              } 
                                    }
                        });
                    


                      

                //       $.ajax({
                //         type: 'POST',
                //         url: '../brgycsp-rbi/asset/display',
                //         data: {
                //             action: 'display_members',
                //         },
                //       }).done(function(data){

                //         var displayData = JSON.parse(data);

                //         $.each(displayData, function(index,element){

                // //              $("#display-data").append("<tr>"+
                // //    "<td class='bs_no'>"+(index + 1 )+"</td>"+ 
                // //    "<td class='bs_resident_id'>"+element.Bs_resident_no+"</td>"+
                // //    "<td class='bs_fullname'>"+element.Bs_resident_fname+"</td>"+ 
                // //    "<td class='bs_type'>Spouse</td>"+
                // //    "<td class='bs_dateAdded'>11-11-2023</td>"+      
                // //    "<td class='bs_action'><a class='btn btn-primary'>View</a></td>"+  
                // // "</tr>");

                //         })
                //       })
});