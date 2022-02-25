var name_of_the_students = [];
 function submit() {
     var name_1 = document.getElementById("name_of_student_1").value;
     var name_2 = document.getElementById("name_of_student_2").value;
     var name_3 = document.getElementById("name_of_student_3").value;
     var name_4 = document.getElementById("name_of_student_4").value;

     name_of_the_students.push(name_1);
     name_of_the_students.push(name_2);
     name_of_the_students.push(name_3);
     name_of_the_students.push(name_4);
     console.log(name_of_the_students);

    document.getElementById("display_names").innerHTML = name_of_the_students;
    document.getElementById("SubmitButton").style.display= "none";
    document.getElementById("SortButton").style.display = "inline-block";
 }

 function sorting() {
     name_of_the_students.sort();
     console.log(name_of_the_students);
     document.getElementById("display_names").innerHTML = name_of_the_students;

}

    
 