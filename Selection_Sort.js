function selectionSort() {
    // Set time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    // Set space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    let c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i], "red"); // Color update

        let index_min = i;

        for (let j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Color update

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min !== i) {
                    div_update(divs[index_min], div_sizes[index_min], "blue"); // Color update
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "red"); // Color update
            } else {
                div_update(divs[j], div_sizes[j], "blue"); // Color update
            }
        }

        if (index_min !== i) {
            // Swap div_sizes[index_min] and div_sizes[i]
            [div_sizes[index_min], div_sizes[i]] = [div_sizes[i], div_sizes[index_min]];

            div_update(divs[index_min], div_sizes[index_min], "red"); // Height update
            div_update(divs[i], div_sizes[i], "red"); // Height update
            div_update(divs[index_min], div_sizes[index_min], "blue"); // Color update
        }
        div_update(divs[i], div_sizes[i], "green"); // Color update
    }
    div_update(divs[i], div_sizes[i], "green"); // Color update

    enable_buttons();
}
