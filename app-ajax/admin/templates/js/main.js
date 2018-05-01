$(function () {
    /*$(".del").click(function () {
        var id = $(this).attr("user-id");
        $.ajax({
            url:"http://localhost:9000/admin/ajax/user.php?del=" + id,
            success:function (data) {
                alert(data);
                getAllUsers();
            }
        });
    });*/
    getAllUsers();
    getAllCourses();

});//onready

function getAllUsers() {
    $.ajax({
        url:"http://localhost/ideaAcademy/elnemr/Full-Stack-Tutorials/app-ajax/admin/ajax/user.php",
        type:"POST",
        data:{getAll:""},
        success:function (pageCode) {
            $("#users-data").html(pageCode);
        }
    });
}

function getAllCourses () {
    $.ajax({
        url:"http://localhost/ideaAcademy/elnemr/Full-Stack-Tutorials/app-ajax/admin/ajax/course.php",
        type:"POST",
        data:{getAll:""},
        success:function (pageCode) {
            $("#course-data").html(pageCode);
        }
    });
}
$(document).on("click", ".del", function() {
    var id = $(this).attr("user-id");
    var  courseId= $(this).attr("course-id");
    $.ajax({
        url:"http://localhost/ideaAcademy/elnemr/Full-Stack-Tutorials/app-ajax/admin/ajax/user.php",
        type: "POST",
        data:{del:id},
        success:function(result) {
            alert(result);
            getAllUsers();
        }
    });

    $.ajax({
        url:"http://localhost/ideaAcademy/elnemr/Full-Stack-Tutorials/app-ajax/admin/ajax/course.php",
        type: "POST",
        data:{del:courseId},
        success:function(result){
            alert(result);
            getAllCourses();
        }
    });
});
