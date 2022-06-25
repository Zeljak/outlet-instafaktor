// General
var screenWidth = document.querySelector("body").offsetWidth;

// Animacije ultrahd
if (screenWidth > 2559) {
  // Window resize
  var resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      location.reload();
    }, 250);
  });

  // Header title left
  gsap.from(".header__instafaktor-title img", {
    x: -700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Header title right
  gsap.from(".header__dora-predojevic-title img", {
    x: 700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

	// Jednostavno mocno title left
  gsap.from(".blue-section1__jednostavno-mocno", {
    x: -700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 90%"
    },
  });

  // Jednostavno mocno title right
  gsap.from(".blue-section1__neodoljivi-spoj", {
    x: 700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 80%"
    },
  });

  // Jednostavno mocno circle 1
  gsap.from(".blue-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".blue-section1__circle",
      start: "top 80%"
    },
  });

  // Jednostavno mocno circle 2
  gsap.from(".blue-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,

    scrollTrigger: {
      trigger: ".blue-section2__circle",
      start: "top 80%"
    },
  });

	// Sarmantno title left
  gsap.from(".yellow-section1__sarmantno img", {
    x: -700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno title right
  gsap.from(".yellow-section1__botanicki img", {
    x: 700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 1
  gsap.from(".yellow-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 2
  gsap.from(".yellow-section2__circle2", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle2",
      start: "top 70%"
    },
  });

  // Sarmantno circle 3
  gsap.from(".yellow-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle",
      start: "top 70%"
    },
  });

	// Odvazno title left
  gsap.from(".pink-section1__odvazno img", {
    x: -700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno title right
  gsap.from(".pink-section1__petrinjska img", {
    x: 700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 1
  gsap.from(".pink-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 2
  gsap.from(".pink-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle3",
      start: "50% 70%"
    },
  });

  // Odvazno circle 3
  gsap.from(".pink-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle",
      start: "50% 70%"
    },
  });

	// Lezerno title left
  gsap.from(".green-section1__lezerno img", {
    x: -700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno title right
  gsap.from(".green-section1__kava img", {
    x: 700,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 1
  gsap.from(".green-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 2
  gsap.from(".green-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle3",
      start: "top 70%"
    },
  });

  // Lezerno circle 3
  gsap.from(".green-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle",
      start: "top 70%"
    },
  });
}

// Animacije desktop
if (screenWidth > 1024 && screenWidth < 2560) {
  // Window resize
  var resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      location.reload();
    }, 250);
  });

  // Header title left
  gsap.from(".header__instafaktor-title img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Header title right
  gsap.from(".header__dora-predojevic-title img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Jednostavno mocno title left
  gsap.from(".blue-section1__jednostavno-mocno", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 90%"
    },
  });

  // Jednostavno mocno title right
  gsap.from(".blue-section1__neodoljivi-spoj", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 80%"
    },
  });

  // Jednostavno mocno circle 1
  gsap.from(".blue-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".blue-section1__circle",
      start: "top 80%"
    },
  });

  // Jednostavno mocno circle 2
  gsap.from(".blue-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,

    scrollTrigger: {
      trigger: ".blue-section2__circle",
      start: "top 80%"
    },
  });

	// Sarmantno title left
  gsap.from(".yellow-section1__sarmantno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno title right
  gsap.from(".yellow-section1__botanicki img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 1
  gsap.from(".yellow-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 2
  gsap.from(".yellow-section2__circle2", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle2",
      start: "top 70%"
    },
  });

  // Sarmantno circle 3
  gsap.from(".yellow-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle",
      start: "top 70%"
    },
  });

	// Odvazno title left
  gsap.from(".pink-section1__odvazno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno title right
  gsap.from(".pink-section1__petrinjska img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 1
  gsap.from(".pink-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 2
  gsap.from(".pink-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle3",
      start: "50% 70%"
    },
  });

  // Odvazno circle 3
  gsap.from(".pink-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle",
      start: "50% 70%"
    },
  });

	// Lezerno title left
  gsap.from(".green-section1__lezerno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno title right
  gsap.from(".green-section1__kava img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 1
  gsap.from(".green-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 2
  gsap.from(".green-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle3",
      start: "top 70%"
    },
  });

  // Lezerno circle 3
  gsap.from(".green-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle",
      start: "top 70%"
    },
  });
  
}

// Animacije tablet
if ( screenWidth > 767 && screenWidth < 1025) {
   // Header title left
  gsap.from(".header__instafaktor-title img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Header title right
  gsap.from(".header__dora-predojevic-title img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Jednostavno mocno title left
  gsap.from(".blue-section1__jednostavno-mocno", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 90%"
    },
  });

  // Jednostavno mocno title right
  gsap.from(".blue-section1__neodoljivi-spoj", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 80%"
    },
  });

  // Jednostavno mocno circle 1
  gsap.from(".blue-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".blue-section1__circle",
      start: "top 80%"
    },
  });

  // Jednostavno mocno circle 2
  gsap.from(".blue-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,

    scrollTrigger: {
      trigger: ".blue-section2__circle",
      start: "top 80%"
    },
  });

	// Sarmantno title left
  gsap.from(".yellow-section1__sarmantno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno title right
  gsap.from(".yellow-section1__botanicki img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 1
  gsap.from(".yellow-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 2
  gsap.from(".yellow-section2__circle2", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle2",
      start: "top 70%"
    },
  });

  // Sarmantno circle 3
  gsap.from(".yellow-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle",
      start: "top 70%"
    },
  });

	// Odvazno title left
  gsap.from(".pink-section1__odvazno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno title right
  gsap.from(".pink-section1__petrinjska img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 1
  gsap.from(".pink-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 2
  gsap.from(".pink-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle3",
      start: "50% 70%"
    },
  });

  // Odvazno circle 3
  gsap.from(".pink-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle",
      start: "50% 70%"
    },
  });

	// Lezerno title left
  gsap.from(".green-section1__lezerno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno title right
  gsap.from(".green-section1__kava img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 1
  gsap.from(".green-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 2
  gsap.from(".green-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle3",
      start: "top 70%"
    },
  });

  // Lezerno circle 3
  gsap.from(".green-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle",
      start: "top 70%"
    },
  });

}

// Animacije mobile
if (screenWidth < 768) {
  
	// Header title left
  gsap.from(".header__instafaktor-title img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Header title right
  gsap.from(".header__dora-predojevic-title img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.5,
  });

  // Jednostavno mocno title left
  gsap.from(".blue-section1__jednostavno-mocno", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 90%"
    },
  });

  // Jednostavno mocno title right
  gsap.from(".blue-section1__neodoljivi-spoj", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".blue-section1__jednostavno-mocno",
      start: "50% 80%"
    },
  });

  // Jednostavno mocno circle 1
  gsap.from(".blue-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".blue-section1__circle",
      start: "top 80%"
    },
  });

  // Jednostavno mocno circle 2
  gsap.from(".blue-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,

    scrollTrigger: {
      trigger: ".blue-section2__circle",
      start: "top 80%"
    },
  });

	// Sarmantno title left
  gsap.from(".yellow-section1__sarmantno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno title right
  gsap.from(".yellow-section1__botanicki img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".yellow-section1__sarmantno",
      start: "top 50%"
    },
  });

  // Sarmantno circle 1
  gsap.from(".yellow-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section1__circle",
      start: "top 50%"
    },
  });

  // Sarmantno circle 2
  gsap.from(".yellow-section2__circle2", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle2",
      start: "top 70%"
    },
  });

  // Sarmantno circle 3
  gsap.from(".yellow-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".yellow-section2__circle",
      start: "top 70%"
    },
  });

	// Odvazno title left
  gsap.from(".pink-section1__odvazno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno title right
  gsap.from(".pink-section1__petrinjska img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".pink-section1__odvazno img",
      start: "top 50%"
    },
  });

  // Odvazno circle 1
  gsap.from(".pink-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section1__circle",
      start: "top 50%"
    },
  });

  // Odvazno circle 2
  gsap.from(".pink-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle3",
      start: "50% 70%"
    },
  });

  // Odvazno circle 3
  gsap.from(".pink-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".pink-section2__circle",
      start: "50% 70%"
    },
  });

	// Lezerno title left
  gsap.from(".green-section1__lezerno img", {
    x: -screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno title right
  gsap.from(".green-section1__kava img", {
    x: screenWidth,
    ease: "power2.out",
    duration: 1.5,

		scrollTrigger: {
      trigger: ".green-section1__lezerno img",
      start: "top 50%"
    },
  });

  // Lezerno circle 1
  gsap.from(".green-section1__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section1__circle",
      start: "top 50%"
    },
  });

  // Lezerno circle 2
  gsap.from(".green-section2__circle3", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle3",
      start: "top 70%"
    },
  });

  // Lezerno circle 3
  gsap.from(".green-section2__circle", {
    scale: 0,
    ease: "power2.out",
    duration: 1,
		
    scrollTrigger: {
      trigger: ".green-section2__circle",
      start: "top 70%"
    },
  });

}
