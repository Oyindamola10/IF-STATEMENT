//You have been hired into GoMyCode as a junior developer , this school with the challenge of grading their student and want you to build a solution.

//Build  java script program program that grade based on the following condition :

// 1) Student with a score 90-100 should be graded A
//Solution


//function calculateGrade() {
/*let studentScore  = prompt("Enter student score:")
    if (studentScore >= 90 && score <= 100) {
      console.log('Grade = A')
    } else if (studentScore <=89) {
      console.log("Grade : B")
    }
  }*/
  
//calculateGrade()



      
    function calculateScore(){
        let studentScore = prompt('Enter student score')
        if (studentScore >= 90 && studentScore <= 100){
            console.log("A =Excellent")
        } else if (studentScore >=75 && studentScore <=89) {
           console.log("B = Very good")
        } else if (studentScore >=60 && studentScore <=74){
           console.log("C = Good")
        } else if( studentScore >=50 && studentScore <=59){
           console.log("D = You go hear am")
        }else if (studentScore >=0 && studentScore<=49){
            console.log("F = Fail")
        }else{
            console.log("null")
        }
    }
    calculateScore()
    


