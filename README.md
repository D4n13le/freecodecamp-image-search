# Image Search Microservice

## User Stories

- [x] I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- [x] I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- [x] I can get a list of the most recently submitted search strings.

### Example Usage

```
https://fcc-imagesearch-d4n13le.herokuapp.com/api/imagesearch/flowers
```

### Example Output

```json
[
  {
    "url": "https://static.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg",
    "snippet": "Orange Rose Flower in Bloom during Daytime · Free Stock Photo",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9O6P7lVYiitMWp3uenSJQV5ufd3gL86BAzjaTB4Y4WJgY0ET31hSDNs",
    "context": "https://www.pexels.com/photo/plant-flower-rose-bloom-39517/"
  },
  {
    "url": "https://fyf.tac-cdn.net/images/products/large/TEV12-4.jpg",
    "snippet": "Pretty Please Bouquet: New Baby Flowers, Mother's Day Flowers ...",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhK7NB6yEtBar_6aOW60zipAGT9d75GZ2S-NFqMtVjyeaRAIvG_Xi4V0",
    "context": "https://www.fromyouflowers.com/products/pretty_please.htm"
  },  
  {
    "url": "https://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg",
    "snippet": "Birth Month Flowers and Meanings | What Is Your Birth Flower ...",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-YdtY5TASkLZIazLlO65iLG9J1nP-6XNn_q4SjBTR2SzflVxGiLdfXw",
    "context": "https://www.almanac.com/content/birth-month-flowers-and-their-meanings"
  },  
]
```
