<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { notifyType } from '$lib/global/g_types';
	import { validateInput, validateMail, validatePassword } from '$lib/global/g_validate';
	import { triggerNotification } from '$lib/stores/notifications';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let mode : 'login' | 'register' = $state(data.page);

	let mailValid = $state(false),
		passValid = $state(false);
	let valid = $derived(mailValid && passValid);

</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-[var(--background-primary)]">
	<div class="w-full max-w-md rounded-lg bg-[var(--background-raised)] p-8 shadow-lg">
		<h2 class="mb-6 text-center text-2xl font-bold text-[var(--text-primary)]">{mode === 'login' ? "Login" : "Register"}</h2>

		<form
			id={mode === 'login' ? "login" : "register"}
			class="space-y-4"
			method="POST"
			action={mode === 'login' ? "?/login" : "?/register"}
			use:enhance={() => {
				return ({ result }) => {
					if (result.type == 'success') goto('/');
					if (result.type != 'failure' && result.type != 'error') return;
					triggerNotification(
						notifyType.ERROR,
						(result.type === 'failure' && result.data?.value) ??
							(result.type === 'error' ? result.error?.message : undefined) ??
							'An Error Occurred while Processing your request, try again',
							'',
							-1
					);
				};
			}}
		>
			<div class="mb-4">
				<label for="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="test@test.de"
					oninput={(e) => {
						mailValid = validateInput(validateMail, e).success;
					}}
				/>
			</div>
			<div class="mb-4">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="*******"
					oninput={(e) => {
						passValid = validateInput(validatePassword, e).success;
					}}
				/>
			</div>
			<div>
				<button
					id="submit-register"
					type="submit"
					class="w-full rounded-lg bg-cyan-600 px-6 py-2 font-semibold text-white transition hover:bg-cyan-700"
					disabled={!valid}
				>
				{mode === 'login' ? "Login" : "Register"}
				</button>
			</div>
		</form>
		<p class="mt-4 text-center text-gray-300">
			Already have an account?
			<a
				href="/{mode}"
				class="cursor-pointer text-cyan-500 hover:underline"
				onclick={(e) => {
					e.preventDefault();
					mode = mode === 'login' ? 'register' : 'login';
				}}
			>
				{mode === 'login' ? "Register" : "Login"} Here!
			</a>
		</p>
	</div>
</div>
