const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(profileForm);

  // Send form data to server (replace with your server-side logic)
  fetch('/api/update-profile', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Profile updated successfully:', data);
  })
  .catch(error => {
    console.error('Error updating profile:', error);
  });
});