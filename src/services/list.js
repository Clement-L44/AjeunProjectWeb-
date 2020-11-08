export function getList() {
    return fetch('http://27.0.0.1:8000/articles')
      .then(data => data.json())
  }