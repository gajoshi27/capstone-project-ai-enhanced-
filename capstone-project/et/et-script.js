function searchGoogle() {
    let query = document.getElementById("search-input").value;
    let googleSearchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = googleSearchUrl;
  }