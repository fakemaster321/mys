 $(document).ready(function(){
  $("#frm-add-head").submit(function(e){
    e.preventDefault();

$("#voters-select-input").removeAttr('disabled');
$("#catEmployment-select").removeAttr('disabled');
$("#natEmployment-select").removeAttr('disabled');
$("#disability-select-input").removeAttr('disabled');
$("#age-form").removeAttr('disabled');

    var data =$(this).serialize()+'&action=addhead';

if ($("#frm-add-head").parsley().isValid()) {

    $.ajax({
      url: '../brgycsp-rbi/asset/add',
      type: 'POST',
      data: data,
      success: function(response){


        if(response == '2'){

         Toastify({
          text: "Already Exist!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#ff4815",
        }).showToast()

      }else if(response == '3'){

        Toastify({
          text: "Something Wrong!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#f72d08",
        }).showToast()


      }else {

          Toastify({
          text: "You Successfuly Added",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#3b81da",
        }).showToast();
          setTimeout(function(){
                window.location = 'dashboard?householdNo='+ encodeURIComponent(response);
            },900);
      }
    }

    });

    }else { 

      $("#voters-select-input, #catEmployment-select, #natEmployment-select, #disability-select-input, #age-form").attr('disabled', 'disabled');
       Toastify({
          text: "Please fill out all required fields.",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#f72d08",
        }).showToast()

    }

  });

})


   /*var data = {
      action: 'addhead',

      // PERSONAL INFORMATION

      Bs_resident_fname: $("#Bs_resident_fname").val(),
      Bs_resident_lname: $("#Bs_resident_lname").val(),
      Bs_resident_mname: $("#Bs_resident_mname").val(),
      Bs_resident_sname: $("#Bs_resident_sname").val(),
      Bs_resident_gender: $("#Bs_resident_gender").val(),
      Bs_resident_dateBirth: $("#Bs_resident_dateBirth").val(),
      Bs_resident_age: $("#Bs_resident_age").val(),
      Bs_resident_PB_city: $("#Bs_resident_PB_city").val(),
      Bs_resident_PB_province: $("#Bs_resident_PB_province").val(), 
      Bs_resident_PB_country: $("#Bs_resident_PB_country").val(),
      Bs_resident_civilStatus: $("#Bs_resident_civilStatus").val(),
      Bs_resident_bloodType: $("#Bs_resident_bloodType").val(),
      Bs_resident_height: $("#Bs_resident_height").val(),
      Bs_resident_weigth: $("#Bs_resident_weigth").val(),
      Bs_resident_citizenship:$("#Bs_resident_citizenship").val(), 
      Bs_resident_religion: $("#Bs_resident_religion").val(),
      Bs_resident_rVoters: $("#Bs_resident_rVoters").val(),
      Bs_resident_precinct: $("#Bs_resident_precinct").val(),
      Bs_resident_EducAttain: $("#Bs_resident_EducAttain").val(),
      Bs_resident_Add_city: $("#Bs_resident_Add_city").val(),
      Bs_resident_Add_HouseStreet: $("#Bs_resident_Add_HouseStreet").val(),
      Bs_resident_Add_sitio: $("#Bs_resident_Add_sitio").val(),
      Bs_resident_Add_barangay: $("#Bs_resident_gender").val(),
      Bs_resident_ContactNo: $("#Bs_resident_ContactNo").val(),
      Bs_resident_EmStatus: $("#Bs_resident_EmStatus").val(),
      Bs_resident_tEmployment: $("#Bs_resident_tEmployment").val(),
      Bs_resident_cEmployment: $("#Bs_resident_cEmployment").val(),
      Bs_resident_occupation:$("#Bs_resident_occupation").val(),
      Bs_resident_mIncome: $("#Bs_resident_mIncome").val(),
      Bs_resident_tDisability: $("#Bs_resident_tDisability").val(),
      Bs_resident_sDisability: $("#Bs_resident_sDisability").val(),
      Bs_resident_sParent: $("#Bs_resident_sParent").val(),
      Bs_resident_LGBT: $("#Bs_resident_LGBT").val(),

      // OTHER INFORMATION

      Bs_resident_drBrgy: $("#Bs_resident_drBrgy").val(),
      Bs_resident_NoBrgyYears: $("#Bs_resident_NoBrgyYears").val(),
      Bs_resident_tWaterSupply: $("#Bs_resident_tWaterSupply").val(),
      Bs_resident_tElectricity: $("#Bs_resident_tElectricity").val(),
      Bs_resident_tHazard: $("#Bs_resident_tHazard").val(),
      Bs_resident_hOwnership: $("#Bs_resident_hOwnership").val(),
      Bs_resident_hStructure: $("#Bs_resident_hStructure").val(),
      Bs_resident_latitude: $("#Bs_resident_latitude").val(),
      Bs_resident_longitude: $("#Bs_resident_longitude").val(),
      Bs_resident_tLatrine: $("#Bs_resident_tLatrine").val(),
      Bs_resident_gManagement: $("#Bs_resident_gManagement").val()
    }
    */