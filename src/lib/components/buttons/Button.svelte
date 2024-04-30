<button type="button">
	<div class="card">
		<div class="header" />
		<div class="body">
			<slot />
		</div>
		<div class="footer" />
	</div>
</button>

<style>
	button {
		overflow: hidden;
		display: block;
		width: 7.3125rem;
		background: linear-gradient(-30deg, #080807, #898888);
		padding: 0.0625rem 0.1875rem 0 0.1875rem;
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

	.header {
		height: 0.25rem;
		background: linear-gradient(-30deg, #363636, #3c3c3c);
		border-bottom: 0.0625rem solid rgba(211, 194, 147, 0.1);
	}

	.body {
		height: 0.875rem;
		color: #fff;
		padding-top: 0.1875rem;
		padding-left: 0.3125rem;
		padding-right: 0.3125rem;
		font-size: 0.8125rem;
		font-weight: 700;
		letter-spacing: 0.0625rem;
		text-shadow:
			-0.0625rem 0 #000,
			0 0.0625rem #000,
			0.0625rem 0 #000,
			0 -0.0625rem #000;
		white-space: nowrap;
		background: linear-gradient(-30deg, #424242, #696969);
	}

	.footer {
		height: 0.25rem;
		background: linear-gradient(-30deg, #171717, #363636);
		border-top: 0.0625rem solid rgba(60, 53, 36, 0.1);
	}
</style>
