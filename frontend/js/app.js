const statusElement = document.querySelector("#apiStatus");
const loadButton = document.querySelector("#loadHazards");

async function checkSystemStatus() {
    if (!statusElement || !loadButton) {
        return;
    }

    loadButton.disabled = true;
    loadButton.querySelector("span").textContent = "…";

    try {
        const response = await fetch("/api/hazards");

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        const hazards = data.hazards ?? [];

        statusElement.innerHTML = `
            <span class="status-dot"></span>
            <span>Demo system online · ${hazards.length} hazards monitored</span>
        `;
    } catch (error) {
        console.error(error);

        statusElement.innerHTML = `
            <span class="status-dot"></span>
            <span>Demo mode active · local API unavailable</span>
        `;
    } finally {
        loadButton.disabled = false;
        loadButton.querySelector("span").textContent = "→";
    }
}

loadButton?.addEventListener("click", checkSystemStatus);
