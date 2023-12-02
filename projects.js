const url = 'main.json';

function buttonClick() {
async function fetchDegrees() {
    try {
    const res = await fetch(url)
    const data = await res.json()
    const degreeOutput = document.getElementById('degreeOutput'); 
    degreeOutput.innerHTML = buildDegreeList(data);

    } catch(err) {console.log(err)}
}

fetchDegrees();

function buildDegreeList(data) {
    const degreeList = data.map(item => {
        const degree = item.degree;
        return `<div id="degreeOutput">
        <ul>
            <li><strong>${degree.school}</strong></li>
            <li>${degree.program}</li>
            <li>${degree.type}</li>
            <li>${degree.year_conferred}</li>
        </ul>
        </div>`
    })

    return `${degreeList.join('')}`;
}
}