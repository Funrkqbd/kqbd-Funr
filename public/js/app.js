document.addEventListener('DOMContentLoaded', () => {
  const liveBadges = document.querySelectorAll('.status.live');
  liveBadges.forEach((badge) => {
    badge.textContent = badge.textContent.trim();
  });
});
