<?php
require 'repository.php';
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

$ctxt = new DataBase();
if(isset($_GET['Key']))
{
    
    switch ($_GET['Key']) {
        case 'get-sections':
            echo json_encode($ctxt->getSections());
            break;
        case 'get-goods':
            echo json_encode($ctxt->getGoods());
            break;
        case 'get-main':
            echo json_encode($ctxt->getMain());
            break;
        case 'get-articles':
            echo json_encode($ctxt->getArticles());
            break;
        case 'get-photoes':
            echo json_encode($ctxt->getPhotoes());
            break;
        case 'get-videos':
            echo json_encode($ctxt->getVideos());
            break;
        case 'add-app':
            $b = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->addApp($b));
            break;
        // case 'upload-file':
        //     $inp = json_decode(file_get_contents('php://input'), true);
        //     echo json_encode(array($ctxt->uploadFile($_GET['Id'], $_FILES, $_GET['Type'])));
        //     break;
        default:
            echo "Введенный ключ несуществует";
        
    }
    
}
else
{  
    echo "Введенные данные некорректны";
}
?>