function mergeSort() {
    // Set time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Set space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    let c_delay = 0;

    function mergeSortHelper(start, end) {
        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            div_update(divs[mid], div_sizes[mid], "yellow"); // Color update

            mergeSortHelper(start, mid);
            mergeSortHelper(mid + 1, end);

            merge(start, mid, end);
        }
    }

    function merge(start, mid, end) {
        let p = start, q = mid + 1;
        const Arr = [];
        let k = 0;

        for (let i = start; i <= end; i++) {
            if (p > mid) {
                Arr[k++] = div_sizes[q++];
                div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
            } else if (q > end) {
                Arr[k++] = div_sizes[p++];
                div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
            } else if (div_sizes[p] < div_sizes[q]) {
                Arr[k++] = div_sizes[p++];
                div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
            } else {
                Arr[k++] = div_sizes[q++];
                div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
            }
        }

        for (let t = 0; t < k; t++) {
            div_sizes[start++] = Arr[t];
            div_update(divs[start - 1], div_sizes[start - 1], "green"); // Color update
        }
    }

    mergeSortHelper(0, array_size - 1);

    enable_buttons();
}
