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
        <form action="http://www.sbeerka.beer/testing/create" method="post">
            @csrf
            <input type="text" name="first_name" placeholder="First Name"><br>
            <input type="text" name="surname" placeholder="Surame"><br>
            <input type="text" name="username" placeholder="User Name"><br>
            <input type="checkbox" name="over18">18 or over?<br>
            <input type="text" name="brewery_name" placeholder="Brewery Name"><br>
            <input type="email" name="email" placeholder="Email"><br>
            <input type="password" name="password" placeholder="Password"><br>
            <input type="number" name="user_type" placeholder="User Type"><br>
            <button>Submit</button>
        </form>
</body>
</html>