<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome to Eazy's Cars</title>
    <script src="LogInauth.js" defer></script>
    <script>
        window.onload = function() {
            checkLogin(); // Redirects users who are not logged in
        };
    </script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="eazys_cars.css">
</head>

<body>

    <div class="container-fluid">
        <header>
            <img src="eazys dealership.jpg" alt="Eazy's Dealership Logo">
        </header>

        <h1>Welcome to Eazy's Cars</h1>
        <p>Your Journey Starts Here</p>

        <nav>
            <a href="eazys_cars.html">Home</a>
            <a href="cars.html">Cars</a>
            <a href="services.html">Services</a>
            <a href="eazys_cars_contacts.html">Contacts</a>
            <form>
                <input type="text" placeholder="Search...">
            </form>
        </nav>
        <section class="gallery">
            <figure class="gallery-item">
                <img src="BMW m3.jpeg" alt="BMW M3">
                <figcaption>BMW M3 - P2 000 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="Bugatti bolide.jpg" alt="Bugatti Bolide">
                <figcaption>Bugatti Bolide - P59 000 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="Dodge challenger.jpeg" alt="Dodge Challenger">
                <figcaption>Dodge Challenger - P1 000 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="Dodge charger.jpeg" alt="Dodge Charger">
                <figcaption>Dodge Charger - P1 000 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="PPorsce 911 gt3.jpeg" alt="Porsche 911 GT3">
                <figcaption>Porsche 911 GT3 - P2 500 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="Porsce 911 gt3.jpeg" alt="Porsche 911 Turbo">
                <figcaption>Porsche 911 Turbo - P2 000 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="Supra mk4.jpeg" alt="Supra MK4">
                <figcaption>Supra MK4 - P1 300 000</figcaption>
            </figure>
            <figure class="gallery-item">
                <img src="mazda-rx7-1.avif" alt="Mazda RX-7">
                <figcaption>Mazda RX-7 - P1 200 000</figcaption>
            </figure>
        </section>
    </body>
        <footer>
            <p>&copy; 2025 Eazy's Cars</p>
            <div class="social-icons">
                <img src="facebook.png" alt="Facebook" width="50" height="50">
                <img src="twitterx (1).png" alt="Twitter" width="50" height="50">
                <img src="intagram.png" alt="Instagram" width="50" height="50">
            </div>
        </footer>
    </div>
</html>
