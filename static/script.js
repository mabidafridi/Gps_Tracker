const locationBtn = document.getElementById("locationBtn");

const statusText = document.getElementById("status");
const latitudeText = document.getElementById("latitude");
const longitudeText = document.getElementById("longitude");
const accuracyText = document.getElementById("accuracy");


locationBtn.addEventListener("click", function () {

    if (!navigator.geolocation) {

        statusText.textContent =
            "Geolocation is not supported by this browser.";

        return;
    }

    statusText.textContent =
        "Requesting your location...";

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            latitudeText.textContent = latitude;
            longitudeText.textContent = longitude;
            accuracyText.textContent =
                accuracy.toFixed(2) + " meters";

            statusText.textContent =
                "Location detected successfully.";

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            console.log("Accuracy:", accuracy);

        },

        function (error) {

            console.error(error);

            statusText.textContent =
                "Unable to get your location.";

        }
    );

});