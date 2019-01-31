$(window).on('load', function() {
    $(".white-light").fadeOut(1000, function() {
        $(".landed-rocket-img").css("transform", "translateY(12vmin) rotate(-73deg)");
    });
});

$(function() {
    $('#content').pagination({
        dataSource: [1, 2, 3, 4, 5, 6, 7],
        pageSize: 1,
        showPageNumbers: false,
        showNavigator: true,
        callback: function(data, pagination) {
            // template method of yourself
            // dataContainer.html(html);
            $(".page-container").fadeOut(500, function() {
                $(this).append(data)
                    .fadeIn(500);
            });
        }
    })
});