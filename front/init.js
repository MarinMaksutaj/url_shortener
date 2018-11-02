$(document).ready(function() {

    $("#post_link").on("click", function() {
        const originalLink = $("#link_form").val();
        let reqObj = {
        originalUrl: originalLink,
        shortBaseUrl: "http://localhost:42069"
		};
		//alert(dirname__);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(reqObj),
            contentType: 'application/json; charset=utf-8',
            url: 'http://localhost:42069/api/item',
            success: function(data) {
            	//alert(JSON.stringify(data));
                $("#result").html("Short link : <a href=\"" + data.shortUrl + "\"" + ">" +data.shortUrl + "</a>");
            },
            error: function (err) {
            	alert(err.responseText);
            }
        });

    });

});