var app = angular.module('examEx19', [])
  app.factory('studentFactory', function() {

    var studentsInfo = {};
    studentsInfo.allCourses = [
      {courseId : 1000,courseName: "Basic Programming"},
      {courseId : 1001,courseName: "Advanced Programming"},
      {courseId : 1003,courseName: "DataBase Intro"}];
    studentsInfo.students = [];
    studentsInfo.students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
    studentsInfo.students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
    studentsInfo.students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
    studentsInfo.students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});


      var getStudents = function(){return studentsInfo;};

      return {
          getStudents: getStudents
      };
  });

app.controller('StudentCtrl', ['$scope', "studentFactory", function($scope, studentFactory){
    $scope.students = studentFactory.getStudents();
}]);

