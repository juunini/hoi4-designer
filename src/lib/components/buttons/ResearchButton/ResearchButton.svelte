<script lang="ts">
	export let title: string;
	export let src: string;
</script>

<button type="button">
	<div class="card">
		<h4 class="title">{title}</h4>
		<div class="body">
			<img {src} alt="" />
		</div>
		<div class="footer" />
	</div>
</button>

<style>
	button {
		overflow: hidden;
		display: block;
		width: 11.625rem;
		padding: 0.0625rem 0.1875rem 0 0.1875rem;
		text-align: left;
		background: linear-gradient(-30deg, #080807, #898888);
		border-radius: 0.25rem;
		box-shadow:
			0.0625rem 0.0625rem 0 0 rgba(255, 255, 255, 0.2) inset,
			-0.0625rem -0.0625rem 0 0 rgba(0, 0, 0, 0.2) inset;
	}

	.card {
		position: relative;
		border: 0.0625rem solid #000;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	button:hover .card::after,
	button:focus .card::after {
		background: rgba(255, 255, 255, 0.02);
		box-shadow: inset 0 0 0 0.0625rem rgba(255, 255, 255, 0.2);
	}

	button:active .card::after {
		background: rgba(0, 0, 0, 0.02);
		box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
	}

	.title {
		overflow-x: clip;
		height: 0.875rem;
		color: #fff;
		padding-top: 0.1875rem;
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		font-size: 0.8125rem;
		font-weight: 400;
		letter-spacing: 0.0625rem;
		text-overflow: ellipsis;
		text-shadow:
			-0.0625rem 0 #000,
			0 0.0625rem #000,
			0.0625rem 0 #000,
			0 -0.0625rem #000;
		white-space: nowrap;
		background: linear-gradient(-30deg, #776a48, #d6cdae);
		border-bottom: 0.0625rem solid rgba(211, 194, 147, 0.1);
	}

	.body {
		height: 2.9375rem;
		background: linear-gradient(-30deg, #453d2a, #c8b889);
	}

	.body img {
		margin-top: -0.5rem;
		margin-left: -1rem;
		filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0.4));
	}

	.footer {
		height: 0.875rem;
		background: linear-gradient(-30deg, #2c271a, #5d5239);
		border-top: 0.0625rem solid rgba(60, 53, 36, 0.1);
	}
</style>
