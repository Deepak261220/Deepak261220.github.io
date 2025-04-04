document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const searchValue = document.getElementById('search').value;
  const categoryValue = document.getElementById('category').value;

  alert('Search initiated for: ' + searchValue + ' in category: ' + categoryValue);
});
