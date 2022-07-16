{{-- testing blade --}}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>Create A User<h2>
        <form action="http://www.sbeerka.beer/upload/upload" method="post" enctype="multipart/form-data">
            @csrf
            <input type="file" name="picture" ><br>
            <input type="hidden" name="name" value="upload"><br>
            <button>Submit</button>
        </form>
</body>
</html>