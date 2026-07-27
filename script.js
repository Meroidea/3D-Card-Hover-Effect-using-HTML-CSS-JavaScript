/**
 * 3D card hover effect.
 *
 * Tilts the card toward the pointer using a requestAnimationFrame loop that
 * runs only while the pointer is over the card. Honours the user's
 * "prefers-reduced-motion" setting and degrades gracefully on touch devices.
 */
(function () {
  "use strict";

  const card = document.querySelector(".card-body");
  if (!card) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // Higher divisor = gentler tilt. TRANSLATE_Z lifts the card toward the viewer.
  const ROTATION_DIVISOR = 7;
  const TRANSLATE_Z = 130;
  const RESTING_TRANSFORM = "rotateX(0) rotateY(0) translateZ(0)";

  let pointerX = 0;
  let pointerY = 0;
  let isHovering = false;
  let frameId = null;

  function resetCard() {
    card.style.transform = RESTING_TRANSFORM;
  }

  function animateCard() {
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

    frameId = requestAnimationFrame(animateCard);
  }

  function handlePointerMove(event) {
    if (prefersReducedMotion.matches) {
      return;
    }
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!isHovering) {
      isHovering = true;
      frameId = requestAnimationFrame(animateCard);
    }
  }

  function handlePointerLeave() {
    isHovering = false;
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    resetCard();
  }

  // Pointer events cover mouse, pen and touch with a single code path.
  card.addEventListener("pointermove", handlePointerMove);
  card.addEventListener("pointerleave", handlePointerLeave);
  card.addEventListener("pointercancel", handlePointerLeave);
})();
