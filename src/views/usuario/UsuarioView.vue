<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'UsuarioView' }">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioCompras' }">Compras</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioVendas' }">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UsuarioEditar' }"
            >Editar Usuario</router-link
          >
        </li>
        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <p>Pagina do Usuario {{ $store.state.usuario }}</p>
  </section>
</template>

<script>
export default {
  name: "UsuarioView",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");

      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
