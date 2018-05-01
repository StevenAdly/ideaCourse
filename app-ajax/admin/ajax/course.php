<?php
require_once "../../config/config.php";


if (isset($_POST['del'])) {
    $id = $_POST['del'];

    if (Course::delete($id)){
        echo "Done";
    } else {
        echo "Error";
    }

} else if(isset($_POST['getAll'])) {
    foreach (Course::all() as $course):
        ?>
        <tr>
            <td><?php echo $course['id']; ?></td>
            <td><?php echo $course['name']; ?></td>
            <td><?php echo $course['user_name']; ?></td>
            <td><a href="<?php BASE_ADMIN; ?>?edit=<?php echo $course['id']; ?>"class="btn btn-info">Edit</a></td>
            <td><button type="button" class="btn btn-danger del" course-id="<?php echo $course['id']; ?>">Delete</button></td>
        </tr>
    <?php endforeach;

}


//form php to json
// echo json_encode($user);

//form json to php
/*$test = '[{"id":"asda","0":26566},["asda",26566],["asda",26566],["asda",26566],["asda",26566],["asda",26566]]';
print_r ( json_decode($test));*/
