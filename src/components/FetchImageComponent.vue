<template>
  <div>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="primary"
      size="64"
    ></v-progress-circular>

    <h1>Gallery</h1>
    <div class="gallery" v-if="!isLoading">
      <div class="image-container" v-for="image in images" :key="image.id">
        <div class="container-content">
          <img :src="image.download_url" :alt="image.author" class="image" />
          <div class="author">{{ image.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoading: true,
      images: [],
    };
  },
  mounted() {
    this.fetchImages();
    this.setPageTitle("Fetch images");
  },
  methods: {
    setPageTitle(title) {
      document.title = title;
    },

    fetchImages() {
      const apiUrl = "https://picsum.photos/v2/list?page=1&limit=20";

      axios
        .get(apiUrl)
        .then((response) => {
          this.images = response.data.sort((a, b) =>
            a.author.localeCompare(b.author)
          );
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image-container {
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: center;
}

.container-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 500px;
  border-radius: 6px;
  transition: 0.3s ease-in;
}

.image:hover {
  transform: scale(1.05) rotate(2deg);
}

.author {
  text-align: center;
  margin-top: 1rem;
}


@media (min-width: 576px) {  

  .image-container {
    width: calc(50% - 20px);
}

}
@media (min-width: 992px) {
  .image-container {
    width: calc(33.3% - 20px);
}
}

@media (min-width: 1200px) { 
  .image-container {
    width: calc(25% - 20px);
}
 }

</style>
