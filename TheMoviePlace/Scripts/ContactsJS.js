var myClickEvent = () => {
    let form = {
        firstName : $("#firstName").val(),
            lastName : $("#lastName").val(),
            address : $("#address").val(),
            eMail : $("#eMail").val(),
            phoneNumber : $("#phonenumber").val()
    };

    $.ajax({
        url: "/home/Index",
        contentType: "application/json",
        data: JSON.stringify(form),
        type: "POST",
        dataType: "html",
        success: (data) => {
            $("#myModal").html(data)
            $("#myModal").modal('show')
        }       
    })
};


