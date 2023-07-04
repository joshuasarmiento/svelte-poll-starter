<script>
  import svelteLogo from '../assets/svelte.svg'
  import viteLogo from '/vite.svg'
</script>

<header>
  <main>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <h1> Svelte + Vite Poll App Starter</h1>
  </main>
</header>

<style>
  header{
    background: #f7f7f7;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  header img {
    display: inline-block;
    height: 50px;
  }
  img{
    max-width: 180px;
  }
</style>