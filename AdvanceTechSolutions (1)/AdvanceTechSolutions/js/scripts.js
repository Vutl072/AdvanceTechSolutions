/* =====================================================
   ADVANCE TECH SOLUTIONS
   Main JavaScript File
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------
       QUOTE REQUEST FORM
       ------------------------------------------------- */

    const quoteForm = document.getElementById("quoteForm");
    const quoteMessage = document.getElementById("quoteMessage");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const description = document.getElementById("description").value.trim();

            /* Check required fields */

            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                service === "" ||
                description === ""
            ) {

                quoteMessage.textContent =
                    "Please complete all required fields.";

                quoteMessage.style.color = "red";

                return;
            }

            /* Validate email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                quoteMessage.textContent =
                    "Please enter a valid email address.";

                quoteMessage.style.color = "red";

                return;
            }

            /* Validate phone number */

            const phonePattern =
                /^[0-9+\s()-]{10,20}$/;

            if (!phonePattern.test(phone)) {

                quoteMessage.textContent =
                    "Please enter a valid phone number.";

                quoteMessage.style.color = "red";

                return;
            }

            /* Successful submission */

            quoteMessage.textContent =
                "Thank you, " + name +
                "! Your quote request has been received. " +
                "We will contact you soon.";

            quoteMessage.style.color = "green";

            /* Clear form */

            quoteForm.reset();

        });
    }


    /* -------------------------------------------------
       CONTACT FORM
       ------------------------------------------------- */

    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            /* Check required fields */

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                contactMessage.textContent =
                    "Please complete all required fields.";

                contactMessage.style.color = "red";

                return;
            }


            /* Validate email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                contactMessage.textContent =
                    "Please enter a valid email address.";

                contactMessage.style.color = "red";

                return;
            }


            /* Successful submission */

            contactMessage.textContent =
                "Thank you, " + name +
                "! Your message has been sent successfully.";

            contactMessage.style.color = "green";


            /* Clear form */

            contactForm.reset();

        });
    }


    /* -------------------------------------------------
       CURRENT YEAR
       ------------------------------------------------- */

    const yearElements =
        document.querySelectorAll(".current-year");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(function (element) {

        element.textContent = currentYear;

    });


    /* -------------------------------------------------
       ACTIVE NAVIGATION LINK
       ------------------------------------------------- */

    const currentPage =
        window.location.pathname.split("/").pop();

    const navigationLinks =
        document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage &&
            currentPage !== ""
        ) {

            link.classList.add("active");

        }

    });

});
