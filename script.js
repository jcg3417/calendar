function generateCalendar(month, year) {
    const header = document.getElementById("calendar-header")
    const body = document
        .getElementById("calendar-body")
        .getElementsByTagName("tbody")[0]
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    header.innerHTML = monthNames[month] + " " + year

    let date = 1
    let html = ""
    for (let i = 0; i < 6; i++) {
        html += "<tr>"
        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfMonth) || date > daysInMonth) {
                html += "<td></td>"
            } else {
                html += "<td>" + date + "</td>"
                date++
            }
        }
        html += "</tr>"
    }
    body.innerHTML = html
}

// Initial render
const currentDate = new Date()
generateCalendar(currentDate.getMonth(), currentDate.getFullYear())
