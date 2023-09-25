function quickSort() {
    // Set time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Set space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    let c_delay = 0;

    function partition(start, end) {
        const pivot = div_sizes[start]; // Make the first element as the pivot.
        div_update(divs[start], div_sizes[start], "yellow"); // Color update

        let i = start + 1;
        for (let j = start + 1; j <= end; j++) {
            // Rearrange the array by putting elements which are less than pivot on one side and which are greater than on the other.
            if (div_sizes[j] < pivot) {
                div_update(divs[j], div_sizes[j], "yellow"); // Color update

                div_update(divs[i], div_sizes[i], "red"); // Color update
                div_update(divs[j], div_sizes[j], "red"); // Color update

                // Swap div_sizes[i] and div_sizes[j]
                [div_sizes[i], div_sizes[j]] = [div_sizes[j], div_sizes[i]];

                div_update(divs[i], div_sizes[i], "red"); // Height update
                div_update(divs[j], div_sizes[j], "red"); // Height update

                div_update(divs[i], div_sizes[i], "blue"); // Color update
                div_update(divs[j], div_sizes[j], "blue"); // Color update

                i += 1;
            }
        }

        div_update(divs[start], div_sizes[start], "red"); // Color update
        div_update(divs[i - 1], div_sizes[i - 1], "red"); // Color update

        // Swap div_sizes[start] and div_sizes[i-1]
        [div_sizes[start], div_sizes[i - 1]] = [div_sizes[i - 1], div_sizes[start]];

        div_update(divs[start], div_sizes[start], "red"); // Height update
        div_update(divs[i - 1], div_sizes[i - 1], "red"); // Height update

        for (let t = start; t <= i; t++) {
            div_update(divs[t], div_sizes[t], "green"); // Color update
        }

        return i - 1; // Return the position of the pivot
    }

    function quickSortHelper(start, end) {
        if (start < end) {
            // Stores the position of the pivot element
            const pivotPosition = partition(start, end);
            quickSortHelper(start, pivotPosition - 1); // Sort the left side of pivot
            quickSortHelper(pivotPosition + 1, end); // Sort the right side of pivot
        }
    }

    quickSortHelper(0, array_size - 1);

    enable_buttons();
}
