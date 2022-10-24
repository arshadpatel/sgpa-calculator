let a = 0;
function myFunction() {
    a = document.getElementsByName("n")[0].value;

    if (a == "") {
        alert("Enter the Number of Subjects");
        return;
    }

    if (isNaN(a)) {
        alert("Enter Numeric value only");
        return;
    }

    a = parseInt(a);
    let output = "<table>";
    output = output + "<tr><th>S.No.</th><th>Subjects</th><th>Credits</th><th>Grade</th></tr>";
    for (var i = 0; i < a; i++) {
        output = output + '<tr><td>' + (i + 1) + '</td><td>Subject ' + (i + 1) + '</td><td><input type="text" name="credits" id=""></td><td><input type="text" name="grade" id=""></td></tr>';
    }
    output = output + "</table>";
    document.getElementById("tble").innerHTML = output;
}
const result = () => {
    let sum = 0;
    let csum = 0;
    for (var i = 0; i < a; i++) {

        let obj = document.getElementsByName("credits").item(i).value;
        let grades = document.getElementsByName("grade").item(i).value;

        if(obj==""|| grades==""){
            alert('Credits and Grades cannot be left blank');
            return;
        }

        if (isNaN(obj)) {
            alert('Credits Cannot be Non-Numeric !!');
            return;
        }

        if (!isNaN(grades)) {
            alert("Grades cannot be numeric\nUse O/A+/A/B+/B format only");
            return;
        }

        if(obj>10){
            alert("Credits Cannot Exceed 10 !!");
            return;
        }

        if (grades == "O" || grades == "o")
            grades = 10;
        else if (grades == "A+" || grades == "a+")
            grades = 9;
        else if (grades == "A" || grades == "a")
            grades = 8;
        else if (grades == "B+" || grades == "b+")
            grades = 7;
        else if (grades == "B" || grades == "b")
            grades = 6;
        else
            grades = 0;

        let ss = grades * parseFloat(obj);
        csum = csum + parseFloat(obj);
        sum = sum + ss;
    }
    let res = sum / csum;
    document.getElementById("result").innerHTML = "Result (SGPA) : " + (Math.round((res + Number.EPSILON) * 100) / 100);
}