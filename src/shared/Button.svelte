<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button class:flat={flat} class:inverse={inverse} class={type} on:click>
  <slot></slot>
</button>

<style>
  button{
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  }
  .flat{
    box-shadow: none;
  }
  .primary{
    background: #9FB0AF;
    color: white;
  }
  .secondary{
    background: #7f8c8c;
    color: white;
  }
  .primary.inverse{
    color: #a8b7b7;
    background: white;
    border: 2px solid #a8b7b7;
  }
  .secondary.inverse{
    color: #7f8c8c;
    background: white;
    border: 2px solid #7f8c8c;
  }
</style>