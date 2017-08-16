let buttton = () => {

    let form = () => {
        firstName = $("#firstName").val(),
            lastName = $("#lastNmame").val(),
            address = $("#address").val(),
            eMail = $("#eMail").val(),
            phoneNumber = $("#phonenumber")
    };

    $.ajax({
        url: "/home/Index",
        contentType: "application/json",
        data: JSON.stringify(form),
        type: "POST",
        dataType: "html",
        success: (SessonId) => {

            $("#myModel").html(SessonId)
            $("#myModel").modal('show')

        }
       
    })
};


