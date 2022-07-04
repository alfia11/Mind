$(document).ready(function () {

    $('#btnSubmit').click(function (event) {
        event.preventDefault();
        var Id = $("#Id").val()
        var PinCode=$("#PinCode").val()
        var Name = $("#Name").val()
        var Email = $("#Email").val()
        var Mobile = $("#Mobile").val()
        var DateOfBirth = $("#DateOfBirth").val()
        var Gender = $("#Gender").val()
        var FathersName = $("#FathersName").val()
        var Address = $("#Address").val()
        var Nationality = $("#Nationality").val()
       

        if (Id == '') {
            alert('Id is Mandatory');
            return false;
        }
        if (Name == '') {
            alert('Name is Mandatory');
            return false;
        }
        if (Address == '') {
            alert('Address is Mandatory');
            return false;
        }
        if (Email == '') {
            alert('Email is Mandatory');
            return false;
        }
        if (Mobile == '') {
            alert('Mobile is Mandatory');
            return false;
        }
        if (FathersName == '') {
            alert('FathersName is Mandatory');
            return false;
        }
        if (Nationality == '') {
            alert('Nationality is Mandatory');
            return false;
        }
        if (PinCode == '') {
            alert('Pincode is Mandatory');
            return false;
        }
        if (DateOfBirth == '') {
            alert('DateOfBirth is Mandatory');
            return false;
        }
        if (Gender == '') {
            alert('Gender is Mandatory');
            return false;
        }
        var Student = {
            Id: $("#Id").val(),
            Name: $("#Name").val(),
            Email: $("#Email").val(),
            Mobile: $("#Mobile").val(),
            DateOfBirth: $("#DateOfBirth").val(),
            Gender: $("#Gender").val(),
            FathersName: $("#FathersName").val(),
            Address: $("#Address").val(),
            Nationality: $("#Nationality").val(),
            PinCode: $("#PinCode").val()
        }
        $.ajax({
            type: "POST",
            url: "/StudentModels/Create",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(Student),
            error: function (response) {
                alert(response.responseText);
            },
            success: function () {
                alert("Successfully Inserted")

            }
        });
    });
    $('#btnEdit').click(function (event) {
        event.preventDefault();
        

        var Student = {
            Id: $("#Id").val(),
            Name: $("#Name").val(),
            Email: $("#Email").val(),
            Mobile: $("#Mobile").val(),
            DateOfBirth: $("#DateOfBirth").val(),
            Gender: $("#Gender").val(),
            FathersName: $("#FathersName").val(),
            Address: $("#Address").val(),
            Nationality: $("#Nationality").val(),
            PinCode: $("#PinCode").val()

        }
        $.ajax({
            type: "POST",
            url: "/StudentModels/Edit/Id",
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify(Student),
            error: function (response) {
                alert(response.responseText);
            },
            success: function () {
                alert("Successfully Edited")

            }
        });
    });

    $('#Delete').click(function (event) {
        event.preventDefault();
       
        var Id = $('#Id').val()
        var Student = {
            Id: $("#Id").val()
        }
            $.ajax({
                type: "POST",
                url: "/StudentModels/Delete/Id",
                data: JSON.stringify(Student),
                dataType: "json",
                contentType: 'application/json',
                
                error: function () {
                    alert("error!!!");
                },

                success: function () {
                    alert("Successfully Deleted")
                    window.open('/StudentModels/Index')
                }

            });
    });

});