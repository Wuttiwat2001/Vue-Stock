<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card class="mx-auto pa-5" outlined>
          <v-form @submit.prevent="onSubmit" ref="form">
            <v-text-field
              color="success"
              label="Name"
              :counter="10"
              v-model="product.name"
              required
            ></v-text-field>
            <v-text-field
              color="success"
              suffix="THB"
              label="Price"
              type="number"
              v-model="product.price"
              required
            ></v-text-field>
            <v-text-field
              color="success"
              suffix="PCS"
              label="Stock"
              type="number"
              v-model="product.stock"
              required
            ></v-text-field>
            <v-file-input
              color="success"
              :rules="rules"
              @change="onFileSelected"
              @click:clear="clearFile"
              label="File input"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-image-plus-outline"
            >
            </v-file-input>
            <v-img
              :src="getProductImage()"
              aspect-ratio="1"
              max-width="200"
              max-height="200"
              class="mt-3"
            ></v-img>
            <v-row class="py-3">
              <v-spacer></v-spacer>
              <v-btn class="mr-4" @click="cancel">Cancel</v-btn>
              <v-btn color="success" type="submit"> Confirm </v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import api from "@/service/api";
export default {
  name: "stock-edit",
  data() {
    return {
      product: {
        name: "",
        price: "",
        stock: "",
        image: null,
      },
      imageFile: null,
      oldImage: null,
      rules: [
        (value) => {
          return (
            !value ||
            !value.length ||
            value[0].size < 2000000 ||
            "Avatar size should be less than 2 MB!"
          );
        },
      ],
    };
  },
  methods: {
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        //for preview
        this.product.image = event.target.result;
      };
      if (event !== null) {
        reader.readAsDataURL(event);
        //for upload
        this.imageFile = event;
  
      }
    },
    getProductImage() {
      if (this.product.image !== null) {
        if (this.product.image === this.oldImage) {
          return this.$options.filters.imageUrl(this.product.image);
        } else {
          return this.product.image;
        }
      }
    },
    async onSubmit() {
      const formData = new FormData();
      const { name, stock, price,id } = this.product;
      formData.append("id", id)
      formData.append("name", name);
      formData.append("stock", stock);
      formData.append("price", price);
      if(this.imageFile !== null){
        formData.append("image", this.imageFile);
      }
      await api.updateProduct(formData);
      this.$router.back();
    },
    async loadProduct() {
      const result = await api.getProductById(this.$route.params.id);
      this.product = result.data;
      this.oldImage = this.product.image;
    },
    cancel() {
      this.$router.back();
    },
    clearFile() {
      this.imageURL = null;
      this.product.image = this.oldImage;
    },
  },
  created() {
    this.loadProduct();
  },
};
</script>
<style></style>
