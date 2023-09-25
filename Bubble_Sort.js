function bubbleSort() {
    // Set time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Set space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    let c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - i - 1; j++) {
            // Color update (comparing two elements)
            div_update(divs[j], div_sizes[j], "yellow");
            div_update(divs[j + 1], div_sizes[j + 1], "yellow");

            if (div_sizes[j] > div_sizes[j + 1]) {
                // Color update (swap is needed)
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");

                const temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                // Height update
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }
            else {
                // Color update (no swap needed)
                div_update(divs[j], div_sizes[j], "blue");
                div_update(divs[j + 1], div_sizes[j + 1], "blue");
            }
        }

        // Color update (element is in its final sorted position)
        div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "green");
    }

    // Color update (entire array is sorted)
    div_update(divs[0], div_sizes[0], "green");

    enable_buttons();
}
