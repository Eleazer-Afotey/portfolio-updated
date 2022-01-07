<?php


$name = $_POST['visitors_name'];
$email = $_POST['visitors_email'];
$message = $_POST['visitors_message'];

$emailheader = "From: " .$mame . "<" . $email . ">\r\n";

$recipient = "eleazerallnice@gmail.com";

$subject = "Reply from Eleazer Afotey.";

mail($recipient, $subject, $message, $emailheader) or die("Error!");

echo '
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sent</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body class="bg-dark-1">
    <div
      class="container text-center d-flex flex-column min-vh-100 justify-content-center"
    >
      <div class="col-lg-8 mx-auto">
        <h1 class="pb-5">
          Thank you for sending me a message. I will get back to you soon
        </h1>
        <p>
          Go back to the
          <a href="index.html" class="text-primary text-decoration-none"
            >Homepage</a
          >
        </p>
      </div>
    </div>
  </body>
</html>
';