    <html>
        <head>
            <title></title>
        </head>
        <body>
            <h1>uploading file</h1>

            <?php
                if($_SERVER['REQUEST_METHOD'] == 'POST'){
                    $folder = 'upload';
                    if(!file_exists($folder)){
                        @mkdir($folder);
                    }
                    $target = $folder.'/';
                    var_dump($_FILES);
                }
            ?>

            <from method ="post" enctype = "multipart/form-data" action ="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">

            <label>Choose your files</label>
                <input type = "file" name = "image" id = "image">
                <br>
                <br>
                <input type = "submit" name = "" value = "upload">
            </form>
               
        </body>
    </html>