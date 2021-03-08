const userdata = {
    user_id : "Admin_id",
    name:"Srikanth Reddy Badam",
    email:"srikantrb@gmail.com",
    isnew:false,
    basicdata:{
        name:"basic_info",
        fullname : "Srikanth Reddy Badam",
        email : "srikantrb@gmail.com",
        tagline:"Passonate about full stack,web development",
        tag1 : "Java Dev",tag2 :"Design Engineer",tag3:"MERN Stack Web Dev",
        linkedin : "https://www.linkedin.com/in/srikanth-reddy-badam-60a810148",
        twitter:"",
        github:"",
        profilepic : "/images/Srikanth_Update.jpg"
    },
    educationdata:{
        name:"education_info",
        universityname:"Acharya Nagarjuna University",
        gcollegename :"RVR & JC CE",
        glocation:"Guntur",
        gyear:"2015 - 2019",
        gcgpa:"9.04",
        iboardname:"Borad of AP",
        icollegename:"Sri Chaitanya",
        ilocation:"Vijayawada",
        iyear:"2013 - 2015",
        icgpa:"9.45",
        sboardname:"Board of AP(SSC)",
        schoolname:"QIS High School",
        slocation:"Ongole",
        syear:"- 2013",
        scgpa:"9.00"
    },
    skilldata : {
        name : "skill_info",
        data : [{
            category_name : 'programming',
            languages : ["C","Core Java"]
        },{
            category_name : 'software tools',
            st_data : [{
                head:"Web Dev",
                body:["React Js","Redux","Node Js","MongoDB"]
            },{
                head:"DataBase tools",
                body:["SQL","MongoDB"]
            }]
        },{
            category_name : "hardware expertise",
            he_data :[{
                head:"Design tools",
                body:["Auto CAD","CATIA","Solid Works"]
            }]
        }]
    },
    projectdata : {
        name :"proj_info",
        data : [{
            category_name : 'IT Projects',
            itproj_data :[{
                imgurl :"https://i.ibb.co/QHxNpSF/Screenshot-161.png",
                data : ["sample img"]
            },{
                imgurl :"https://i.ibb.co/F82PhBN/Screenshot-162.png",
                data : ["sample data"]
            }]
        },{
            category_name : 'Core Projects',
            coreproj_data :[
                {
                    imgurl:"https://i.ibb.co/mv8JhfB/Projectimage-core.jpg",
                    data:["sample data"]
                }
            ]
        }]
    },
    certificatesdata:{
        name: "certificate_info",
        imgdata : ["https://i.ibb.co/tL72Kgr/certificate1.jpg",
        "https://i.ibb.co/RyKhPYp/certificate2.jpg"]
    },
    achievementdata :{
        name :"acheiements_info",
        achievements : ["Secured AIR 4545 among 3lac+ aspirants in EAMCET organized by Govt of Andhra Pradesh"
        ,"Secured 1556/1800 in TCS NQT Test, Numerical Ability: 549/600 & Reasoning Ability: 522/600"
        ,"Awarded scholarship worth 100% tuition fees in 1500+ students for straight 4 years from Govt of AP"]
    },
    declarationdata :{
        name : "declaration_info",
        resume : "Resume/CV_Srikant2.pdf",
        decldate:"",
        location:"",
        ischecked : false
    }
}

const RootReducer = (state = userdata,action)=>{
    console.log("action type = ",action.type)
    console.log("Data = ",action.updateddata)
    switch(action.type){
        case "UPDATE_STATE" : {
            return (
                state = action.updateddata
            )
        }
        case "NEW_USER" : {
            return (
                {...state,
                    isnew:true}
            )
        }
        default : 
            return state
    }
}

export default RootReducer