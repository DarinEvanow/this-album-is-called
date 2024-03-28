<script lang="ts">
	const { data } = $props();
</script>

<h1>This Album is Called</h1>
<img src={data.image.url} alt="Album cover" />
