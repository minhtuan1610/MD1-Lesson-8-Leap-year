function leapYearOrNot() {
    let year = Number(document.getElementById("year").value);
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById("Result").innerText = year + " is a leap year";
            } else {
                document.getElementById("Result").innerText = year + " is NOT a leap year";
            }

        } else {
            document.getElementById("Result").innerText = year + " is a leap year";
        }
    } else {
        document.getElementById("Result").innerText = year + " is NOT a leap year";
    }
}