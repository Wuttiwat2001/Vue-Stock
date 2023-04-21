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
              v-if="imageURL"
              :src="imageURL"
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
import api from '@/service/api';
export default {
  name: "stock-create",
  data() {
    return {
      product: {
        name: "",
        price: "",
        stock: "",
        image: null,
      },
      imageURL: null,
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
        this.imageURL = event.target.result;
      };
      if (event !== null) {
        reader.readAsDataURL(event);
        //for upload
        this.product.image = event;
      }
    },
    async onSubmit() {
      const formData = new FormData();
      const{ name, stock, price} = this.product
      formData.append("name", name)
      formData.append("stock", stock)
      formData.append("price", price)
      formData.append("image", this.product.image)
      await api.addProduct(formData)
      this.$router.back();
    },
    cancel() {
      this.$router.back();
    },
    clearFile() {
      this.imageURL = null;
      this.product.image = null;
    },
  },
};
</script>
<style></style>
