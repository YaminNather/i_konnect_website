<?php
    require "./PHPMailer/PHPMailer.php";
    require "./PHPMailer/SMTP.php";
    require "./PHPMailer/Exception.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // $phone = $_POST["phone"];
    // $name = $_POST["name"];
    // $email = $_POST["email"];
    // $requestedService = $_POST["requestedService"];

    $requestBodyRaw = file_get_contents("php://input");
    $requestBody = json_decode($requestBodyRaw);
    
    $phone = $requestBody->phone;
    $name = $requestBody->name;
    $email = $requestBody->email;
    $requestedService = $requestBody->requestedService;
    

    try {
        $mailer = new PHPMailer(true);

        // $mailer->SMTPDebug = SMTP::DEBUG_SERVER;
        $mailer->isSMTP(true);
        
        $mailer->Host = "mail.itkonnect.in";
        $mailer->SMTPSecure = "none";
        $mailer->SMTPAutoTLS = false;
        $mailer->Username = "noreply@itkonnect.in";
        $mailer->Password = "W;L?MCAk%B3m";
        $mailer->Port = 25;
        
        $mailer->setFrom("noreply@itkonnect.in");
        $mailer->addAddress("yamin@cynfas.com");
        $mailer->addAddress("vadivel@it-world.in");

        $mailer->Subject = "Service request";
        
        $mailBody = "Phone: {$phone}\n";
        $mailBody = $mailBody."Name: {$name}\n";
        $mailBody = $mailBody."Email: {$email}\n";
        $mailBody = $mailBody."Requested Service: {$requestedService}\n";                
        
        $mailer->Body = $mailBody;
        $mailer->send();

        echo("Sent mail successfully");
    }
    catch(Exception $exception) {
        http_response_code(500);
        $error = $mailer->ErrorInfo;
        echo("Email has not been sent\nError: {$error}\n");
    }
?>