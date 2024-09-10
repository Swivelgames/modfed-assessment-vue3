#!/usr/bin/env bash

killall webpack 2>/dev/null
killall node 2>/dev/null

pids=()

cleanup() {
	echo "Terminating all processes..."
	for pid in "${pids[@]}"; do
		kill -9 "$pid" 2>/dev/null
		wait "$pid" 2>/dev/null
	done
	exit 1
}
trap 'cleanup' SIGINT SIGTERM

# Function to wait for any process to finish
wait_for_any() {
	while true; do
		for pid in "${pids[@]}"; do
			if ! kill -0 "$pid" 2>/dev/null; then
				pids=("${pids[@]/$pid}")
				cleanup
			fi
		done
		sleep 1
	done
}

dirs=("shop-global-ui/" "shop-category/" "shop-product/" "shop-cart/")

for d in ${dirs[@]}; do
	pushd "$d" >/dev/null
	pnpm start:live &
	pids+=($!)
	sleep 3
	popd >/dev/null
done

sleep 10

pnpx json-server -h "0.0.0.0" -p 4200 db.json &
pids+=($!)

wait_for_any
