function getGrade(score) {
    let grade = "D"
    if (25 < score || 30 < score ){
        return grade
    }
    if(20 < score || 25 < score){
            return grade
            
    }
    if(15 < score || 20 < score){
        return grade
    }
    if(10< score || 15 < score){
        return grade
    }
    
    return grade;
    
    
}