function getFetch(url, set) {
    fetch(url)
      .then(((response) => response.json()))
      .then((data) => {
        set(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  export default getFetch;