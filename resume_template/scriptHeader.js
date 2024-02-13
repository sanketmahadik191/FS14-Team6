
// var doc = new jsPDF();


// var specialElementHandlers = {

//    '#editor': function (element, renderer) {
   
//    return true;
   
//    }
   
//    };
   
//    $('#generatePDF').click(function () {
   
//    doc.fromHTML($('#htmlContent').html(), 15, 15, {
   
//    'width': 700,
   
//    'elementHandlers': specialElementHandlers
   
//    });
   
//    doc.save('sample_file.pdf');
   
//    });
const button = document.getElementById('generatePDF');

        function generatePDF1() {
            // Choose the element that your content will be rendered to.
            const element = document.getElementById('rightContainer');
            // Choose the element and save the PDF for your user.
            html2pdf().from(element).save();
        }

      //   button.addEventListener('click', generatePDF1);





//for header
const fnameField = document.getElementById("name");
const lnameField = document.getElementById("name1");
const cityField = document.getElementById("city");
const countryField = document.getElementById("country");
const mailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const pinField = document.getElementById("pinCode");
const colorField = document.getElementById("color1");



const nameField1 = document.getElementById("nameCV");
const cityField1 = document.getElementById("cityCV");
const countryField1 = document.getElementById("countryCV");
const mailField1 = document.getElementById("mailCV");
const phoneField1 = document.getElementById("phoneCV");
const pinField1 = document.getElementById("pinCV");





// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick(event) {
//    const colorField1 = document.getElementsByClassName("w3-content");

//   colorField1.style.color = colorField.value;

//   // 👇️ optionally change text color
//   // box.style.color = 'white';
// });

setInterval(function(){
  // console.log(fnameField);
  // console.log(lnameField);
  // console.log(cityField);
  // console.log(countryField);
  // console.log(mailField);
  // console.log(phoneField);
  // console.log(pinField);
  nameField1.innerText="";
   cityField1.innerText="";
   countryField1.innerText="";
  mailField1.innerText="";
  phoneField1.innerText="";
  pinField1.innerText="";


  let inner_div1 = document.createElement("div");
  let inner_div2 = document.createElement("div");
   let inner_div3 = document.createElement("div");
   let inner_div4 = document.createElement("div");
  let inner_div5 = document.createElement("div");
  let inner_div6 = document.createElement("div");
  let inner_div7 = document.createElement("div");
  
     inner_div1.innerText = fnameField.value;
     inner_div2.innerText = lnameField.value;
    inner_div3.innerText = cityField.value;
    inner_div4.innerText = countryField.value;
     inner_div5.innerText = mailField.value;
     inner_div6.innerText = phoneField.value;
     inner_div7.innerText = pinField.value;
 
  //  inner_div1.classList.add("inner_divs1");
   
   nameField1.appendChild(inner_div1).appendChild(inner_div2);
    cityField1.appendChild(inner_div3);
    countryField1.appendChild(inner_div4);
   mailField1.appendChild(inner_div5);
   phoneField1.appendChild(inner_div6);
   pinField1.appendChild(inner_div7);
   
   
},100)


//-------------------------------------------------------


//for experience
const occupationField = document.getElementById("occupation")
const employerField = document.getElementById("employer")
const cityField_1 = document.getElementById("city1");
const countryField_1 = document.getElementById("country1");
const startDateField = document.getElementById("startDate");
const endDateField = document.getElementById("endDate");
const currWorkCheckbox = document.getElementById("currentlyWorking");
  


const experienceField = document.getElementById("experienceCV")
const jobDetailsField1 = document.getElementById("jobDetailsCV")
const startDateField1 = document.getElementById("startDateCV")
const endDateField1 = document.getElementById("endDateCV")
// const currWorkCheckboxField = document.getElementById("endDate");

setInterval(function(){

  experienceField.innerText="";
  jobDetailsField1.innerText="";
  startDateField1.innerText="";
  endDateField1.innerText="";



  let inner_div8 = document.createElement("div");
  let inner_div9 = document.createElement("div");
  let inner_div10 = document.createElement("div");
  let inner_div11 = document.createElement("div");
  let inner_div12 = document.createElement("div");
  let inner_div13 = document.createElement("div");
  
  
     inner_div8.innerText = occupationField.options[occupationField.selectedIndex].text;
    

     inner_div9.innerText = employerField.value;
     inner_div10.innerText = cityField_1.value;
     inner_div11.innerText = countryField_1.value;
     inner_div12.innerText = startDateField.value;
     inner_div13.innerText = endDateField.value;
     
   
   experienceField.appendChild(inner_div8);
    
   jobDetailsField1.appendChild(inner_div9).appendChild(inner_div10).appendChild(inner_div11);

   startDateField1.appendChild(inner_div12)
   if(currWorkCheckbox.checked)
   endDateField1.innerText="--------Still Working"
  else
   endDateField1.appendChild(inner_div13)
   
},100)




//----------------------------------

//for education
const schoolField = document.getElementById("school")
const schoolLocationField = document.getElementById("schoolLocation")
const qualificationField = document.getElementById("qualification");
const field = document.getElementById("field");
const gradYearField = document.getElementById("gradYear");

  


const educationField1 = document.getElementById("educationCV")

setInterval(function(){

  educationField1.innerText="";


  let inner_div14 = document.createElement("div");
  let inner_div15 = document.createElement("div");
  let inner_div16 = document.createElement("div");
  let inner_div17 = document.createElement("div");
  let inner_div18 = document.createElement("div");
 
  
     inner_div14.innerText = schoolField.value;
     inner_div15.innerText = schoolLocationField.value;
     inner_div16.innerText = qualificationField.value;
     inner_div17.innerText = field.value;
     inner_div18.innerText = gradYearField.value;
     
   
     educationField1.appendChild(inner_div14).appendChild(inner_div15).appendChild(inner_div16).appendChild(inner_div17).appendChild(inner_div18);
    
 
   
},100)





//--------------------------------
//for skills

const skillsField = document.getElementById("skills")
const skillSet1Field = document.getElementById("skillSet1")
const skillSet2Field = document.getElementById("skillSet2")
const skillSet3Field = document.getElementById("skillSet3")

  


const skillsField1 = document.getElementById("skillsCV")

setInterval(function(){

  skillsField1.innerText="";


  let inner_div19 = document.createElement("div");
  let inner_div20 = document.createElement("div");
  let inner_div21 = document.createElement("div");
  let inner_div22 = document.createElement("div");

 
  
     inner_div19.innerText = skillsField.value;
     inner_div20.innerText = skillSet1Field.options[skillSet1Field.selectedIndex].text;
     inner_div21.innerText = skillSet2Field.options[skillSet2Field.selectedIndex].text;
     inner_div22.innerText = skillSet3Field.options[skillSet3Field.selectedIndex].text;

     
   
     skillsField1.appendChild(inner_div19).appendChild(inner_div20).appendChild(inner_div21).appendChild(inner_div22);
 
   
},100)




//------------------------------------
//for summary

const summaryField = document.getElementById("summary")

const summaryField1 = document.getElementById("summaryCV")

setInterval(function(){

  summaryField1.innerText="";


  
  let inner_div23 = document.createElement("div");

 

     inner_div23.innerText = summaryField.value;

     
   
     summaryField1.appendChild(inner_div23)
   
},100)
