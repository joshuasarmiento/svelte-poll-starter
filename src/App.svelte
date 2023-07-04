<script>
	import Header from './components/Header.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';
  import Tabs from './shared/Tabs.svelte';
  
  // tabs
  let items = ['All Polls', 'Create Poll'];
  let activeItem = 'All Polls';
  const tabChange = (e) => activeItem = e.detail;

  const handleAdd = () => {
    activeItem = 'All Polls';
  }

</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'All Polls'}
    <PollList />
  {:else if activeItem === 'Create Poll'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>