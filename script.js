/**
 * 3D card hover effect.
 *
 * Tilts each card toward the pointer using a requestAnimationFrame loop that
 * runs only while the pointer is over that card. Honours the user's
 * "prefers-reduced-motion" setting and degrades gracefully on touch devices.
 */
(function () {
  "use strict";

  const cards = document.querySelectorAll(".card-body");
  if (cards.length === 0) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // Higher divisor = gentler tilt. TRANSLATE_Z lifts the card toward the viewer.
  const ROTATION_DIVISOR = 12;
  const TRANSLATE_Z = 40;
  const RESTING_TRANSFORM = "rotateX(0) rotateY(0) translateZ(0)";

  function initCard(card) {
    let pointerX = 0;
    let pointerY = 0;
    let isHovering = false;
    let frameId = null;

    function animate() {
      if (!isHovering) {
        frameId = null;
        return;
      }

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angleX = (centerY - pointerY) / ROTATION_DIVISOR;
      const angleY = (centerX - pointerX) / -ROTATION_DIVISOR;

      card.style.transform =
        `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(${TRANSLATE_Z}px)`;

      frameId = requestAnimationFrame(animate);
    }

    function onPointerMove(event) {
      if (prefersReducedMotion.matches) {
        return;
      }
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!isHovering) {
        isHovering = true;
        frameId = requestAnimationFrame(animate);
      }
    }

    function onPointerLeave() {
      isHovering = false;
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      card.style.transform = RESTING_TRANSFORM;
    }

    // Pointer events cover mouse, pen and touch with a single code path.
    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerleave", onPointerLeave);
    card.addEventListener("pointercancel", onPointerLeave);
  }

  cards.forEach(initCard);
})();
