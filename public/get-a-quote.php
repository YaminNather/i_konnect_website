<?php
    require "./PHPMailer/PHPMailer.php";
    require "./PHPMailer/SMTP.php";
    require "./PHPMailer/Exception.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $issues = $_POST["issues"];

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
                
        $mailer->addAddress("vadivel@it-world.in");
        $mailer->addAddress("sridevi@micsys.in");
        $mailer->addAddress("dev@cynfas.com");
        $mailer->addAddress("rajeswari.r@micsys.in");
        $mailer->addAddress("yamin@cynfas.com");

        $mailer->Subject = "Quote";
        
        $mailBodyJson = array(
            "Name" => $name,
            "Phone" => $phone,
            "Issues" => $issues
        );

        // $mailBody = "Phone: {$phone}\n";
        // $mailBody = $mailBody."Name: {$name}\n";
        // $mailBody = $mailBody."Email: {$email}\n";
        // $mailBody = $mailBody."Issues: {$issues}\n";
        
        $mailer->Body = json_encode($mailBodyJson, JSON_PRETTY_PRINT);
        $mailer->send();

        header("Location: https://www.itkonnect.in/thank-you/");
        exit();
    }
    catch(Exception $exception) {
        http_response_code(500);
        $error = $mailer->ErrorInfo;
        echo("Email has not been sent\nError: {$error}\n");
        exit();
    }
?>