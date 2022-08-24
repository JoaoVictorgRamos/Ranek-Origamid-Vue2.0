<template>
  <section>
    <h1>👍Compre ou Venda👎</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosLista from "@/components/ProdutosLista.vue";
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
export default {
  name: "HomeView",
  components: {
    ProdutosLista,
    ProdutosBuscar,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
