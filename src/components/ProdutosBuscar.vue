<template>
  <form>
    <input name="busca" id="busca" type="text" v-model="busca" />
    <input
      id="lupa"
      value="Buscar"
      type="submit"
      @click.prevent="BuscarProdutos"
    />
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    BuscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style></style>
