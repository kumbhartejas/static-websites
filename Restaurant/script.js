document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    // Define different counts for each counter ID
    let counterData = {
        "count1": 99,
        "count2": 120,
        "count3": 70,
        "count4": 60,
        "count5": 90,
        "count6": 70,
        "count7": 120,
        "count8": 70,
        "count9": 710
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = "true"; // Prevent multiple triggers
                let id = entry.target.id;
                let endValue = counterData[id] || 0; // Get predefined count
                counter(id, 0, endValue, 1000);
                observer.unobserve(entry.target); // Stop observing after activation
            }
        });
    }, { threshold: 0.5 });

    Object.keys(counterData).forEach(id => {
        let element = document.getElementById(id);
        if (element) observer.observe(element);
    });
});