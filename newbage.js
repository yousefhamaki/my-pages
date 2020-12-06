/*global console */
/*-------------------------------------------------------------------------------------------js html dom------------------------------------------- */
var mydom1 = document.getElementById("dom1"),       mydom2 = document.getElementById("dom2"),
    mydom3 = document.getElementById("dom3"),       mydom4 = document.getElementById("dom4"),
    mydom5 = document.getElementById("dom5"),       mydom6 = document.getElementById("dom6"),
    mydom7 = document.getElementById("dom7"),
     //   data for dom
    mydom1d = document.getElementById("dom1d");     mydom2d = document.getElementById("dom2d");
    
    /*--------------------------------------------------------------------------------------------- on in js --------------------------------------------- */
    myon1 = document.getElementById("on1"),         myon2 = document.getElementById("on2"),
    myon3 = document.getElementById("on3"),         myon4 = document.getElementById("on4"),
    myon5 = document.getElementById("on5"),         myon6 = document.getElementById("on6"),
    myon7 = document.getElementById("on7"),
    /*---------------------------------------------------------------------------------------------html4 button------------------------------------------ */
    my4ht1 = document.getElementById("ht1"),        my4ht2 = document.getElementById("ht2"),
    my4ht3 = document.getElementById("ht3"),        my4ht4 = document.getElementById("ht4"),
    my4ht5 = document.getElementById("ht5"),        my4ht6 = document.getElementById("ht6"),
    my4ht7 = document.getElementById("ht7"),        my4ht8 = document.getElementById("ht8"),
    my4ht9 = document.getElementById("ht9"),        my4ht10 = document.getElementById("ht10"),
    my4ht11 = document.getElementById("ht11"),      my4ht12 = document.getElementById("ht12"),
    my4ht13 = document.getElementById("ht13"),      my4ht14 = document.getElementById("ht14"),
    my4ht15 = document.getElementById("ht15"),      my4ht16 = document.getElementById("ht16"),
     /*--------------------------------------------------------------------------------------------html4 data------------------------------------------ */
    my4ht1d = document.getElementById("ht1d"),      my4ht2d = document.getElementById("ht2d"),
    my4ht3d = document.getElementById("ht3d"),      my4ht4d = document.getElementById("ht4d"),
    my4ht5d = document.getElementById("ht5d"),      my4ht6d = document.getElementById("ht6d"),
    my4ht7d = document.getElementById("ht7d"),      my4ht8d = document.getElementById("ht8d"),
    my4ht9d = document.getElementById("ht9d"),      my4ht10d = document.getElementById("ht10d"),
    my4ht11d = document.getElementById("ht11d"),    my4ht12d = document.getElementById("ht12d"),
    my4ht13d = document.getElementById("ht13d"),    my4ht14d = document.getElementById("ht14d"),
    my4ht15d = document.getElementById("ht15d"),    my4ht16d = document.getElementById("ht16d"),
    /*----------------------------------------------------------------------------------------------js bom---------------------------------------- */
    mybom1 = document.getElementById("bom1"),       mybom2 = document.getElementById("bom2"),
    mybom3 = document.getElementById("bom3"),       mybom4 = document.getElementById("bom4"),
    mybom5 = document.getElementById("bom5"),       mybom6 = document.getElementById("bom6"),
    mybom7 = document.getElementById("bom7"),       mybom8 = document.getElementById("bom8"),
    mybom9 = document.getElementById("bom9"),       mybom10 = document.getElementById("bom10"),  
    mybom11 = document.getElementById("bom11"),     mybom12 = document.getElementById("bom12"),
    mybom13 = document.getElementById("bom13"),     mybom14 = document.getElementById("bom14"),
    mybom15 = document.getElementById("bom15"),     mybom16 = document.getElementById("bom16"),
    mybom17 = document.getElementById("bom17"),     mybom18 = document.getElementById("bom18"),
    mybom19 = document.getElementById("bom19"),     mybom20 = document.getElementById("bom20"),
    mybom21 = document.getElementById("bom21"),     mybom22 = document.getElementById("bom22"),
    mybom23 = document.getElementById("bom23"),     mybom24 = document.getElementById("bom24"),
    mybom25 = document.getElementById("bom25"),     mybom26 = document.getElementById("bom26"),
    mybom27 = document.getElementById("bom27"),     mybom28 = document.getElementById("bom28"),
    mybom29 = document.getElementById("bom29"),     mybom30 = document.getElementById("bom30"), 
    mybom31 = document.getElementById("bom31"),     mybom32 = document.getElementById("bom32"),
/*--------------------------------------------------------------------------------------------------css----------------------------------- */
    mycss1 = document.getElementById("c3s1"),       mycss2 = document.getElementById("c3s2"),
    mycss3 = document.getElementById("c3s3"),       mycss4 = document.getElementById("c3s4"),
    mycss5 = document.getElementById("c3s5"),       mycss6 = document.getElementById("c3s6"),
    mycss7 = document.getElementById("c3s7"),       mycss8 = document.getElementById("c3s8"),
    mycss9 = document.getElementById("c3s9"),       mycss10 = document.getElementById("c3s10"),
    mycss11 = document.getElementById("c3s11"),     mycss12 = document.getElementById("c3s12"),
    mycss13 = document.getElementById("c3s13"),     mycss14 = document.getElementById("c3s14"),
    mycss15 = document.getElementById("c3s15"),     mycss16 = document.getElementById("c3s16"),
    mycss17 = document.getElementById("c3s17"),     mycss18 = document.getElementById("c3s18"),
    mycss19 = document.getElementById("c3s19"),     mycss20 = document.getElementById("c3s20"),
    mycss21 = document.getElementById("c3s21"),     mycss22 = document.getElementById("c3s22"),
    mycss23 = document.getElementById("c3s23"),     mycss24 = document.getElementById("c3s24"),
    mycss25 = document.getElementById("c3s25"),     mycss26 = document.getElementById("c3s26"),
    mycss27 = document.getElementById("c3s27"),     mycss28 = document.getElementById("c3s28"),
    mycss29 = document.getElementById("c3s29"),     mycss30 = document.getElementById("c3s30"),
    mycss31 = document.getElementById("c3s31"),     mycss32 = document.getElementById("c3s32"),
    mycss33 = document.getElementById("c3s33"),     mycss34 = document.getElementById("c3s34"),
    mycss35 = document.getElementById("c3s35"),     mycss36 = document.getElementById("c3s36"),
    mycss37 = document.getElementById("c3s37"),
/*---------------------------------------------------------------------------------------------------data for css------------------------------------------ */
    mycss1d = document.getElementById("c3s1d"),     mycss2d = document.getElementById("c3s2d"),
    mycss3d = document.getElementById("c3s3d"),     mycss4d = document.getElementById("c3s4d"),
    mycss5d = document.getElementById("c3s5d"),     mycss6d = document.getElementById("c3s6d"),
    mycss7d = document.getElementById("c3s7d"),     mycss8d = document.getElementById("c3s8d"),
    mycss9d = document.getElementById("c3s9d"),     mycss10d = document.getElementById("c3s10d"),
    mycss11d = document.getElementById("c3s11d"),   mycss12d = document.getElementById("c3s12d"),
    mycss13d = document.getElementById("c3s13d"),   mycss14d = document.getElementById("c3s14d"),
    mycss15d = document.getElementById("c3s15d"),   mycss16d = document.getElementById("c3s16d"),
    mycss17d = document.getElementById("c3s17d"),   mycss18d = document.getElementById("c3s18d"),
    mycss19d = document.getElementById("c3s19d"),   mycss20d = document.getElementById("c3s20d"),
    mycss21d = document.getElementById("c3s21d"),   mycss22d = document.getElementById("c3s22d"),
    mycss23d = document.getElementById("c3s23d"),   mycss24d = document.getElementById("c3s24d"),
    mycss25d = document.getElementById("c3s25d"),   mycss26d = document.getElementById("c3s26d"),
    mycss27d = document.getElementById("c3s27d"),   mycss28d = document.getElementById("c3s28d"),
    mycss29d = document.getElementById("c3s29d"),   mycss30d = document.getElementById("c3s30d"),
    mycss31d = document.getElementById("c3s31d"),   mycss32d = document.getElementById("c3s32d"),
    mycss33d = document.getElementById("c3s33d"),   mycss34d = document.getElementById("c3s34d"),
    mycss35d = document.getElementById("c3s35d"),   mycss36d = document.getElementById("c3s36d"),
    mycss37d = document.getElementById("c3s37d");



    //-------------------------------------------------------------------الملف التعريفى للعناصر الرئيسيه------------------------------
   var  myhtmlbutton = document.getElementById("butht"),
        mycssbutton = document.getElementById("butcss"),
        myjsbutton = document.getElementById("butjs"),
        myphpbutton = document.getElementById("butphp"),
        myhtml = document.getElementById("htmldet"),
        mycss = document.getElementById("css"),
        myjs = document.getElementById("js");

    myhtmlbutton.classList.add("bot");
    mycssbutton.classList.add("bot");
    myjsbutton.classList.add("bot");
    myphpbutton.classList.add("bot");

    //----------------------------------------------------------------تعريف العناصر الرئيسيه--------------------------------------------
myhtmlbutton.onclick = function (){
    "use strict";
    delet();
    mycss.classList.add("hide");
    myjs.classList.add("hide");
    myhtml.classList.remove("hide");


}


mycssbutton.onclick = function (){
    "use strict";
    delet();
    myjs.classList.add("hide");
    myhtml.classList.add("hide");
    mycss.classList.remove("hide");
}
myjsbutton.onclick = function (){
    "use strict";
    delet();
    mycss.classList.add("hide");
    myhtml.classList.add("hide");
    myjs.classList.remove("hide");
    

}

myphpbutton.onclick = function (){
    "use strict";
    delet();
    alert("php will coming soon");
}

/*---------------------------------------------------التنقلات----------------------------------------- */
var mylistbutton = document.getElementById("listcss"),  mylist2button = document.getElementById("list2css"),
    mytextbutton = document.getElementById("textbutton"),  myimagebutton = document.getElementById("imagedata"),
/*---------------------------------------------------------my social-------------------------------*/
    myface = document.getElementById("face"),           mytwitter = document.getElementById("twitter"),
    mylinked = document.getElementById("linkedin"),     mygoogle = document.getElementById("google");

   //------------------------------------------------------------------button array------------------------------------------------------
    var myarray = [
        my4ht1, my4ht2, my4ht3, my4ht4, my4ht5, my4ht6, my4ht7, my4ht8, my4ht9, my4ht10,
        my4ht11, my4ht12, my4ht13, my4ht14, my4ht15, my4ht16,

        //css
        mycss1, mycss2, mycss3, mycss4, mycss5, mycss6, mycss7, mycss8 ,mycss9, mycss10,
        mycss11, mycss12, mycss13, mycss14, mycss15, mycss16, mycss17, mycss18, mycss19, mycss20,
        mycss21, mycss22, mycss23, mycss24, mycss25, mycss26, mycss27, mycss28, mycss29, mycss30,
        mycss31, mycss32, mycss33, mycss34, mycss35,
      
        //js
        //js html dom
        mydom1, mydom2, mydom3, mydom4, mydom5, mydom6,
        mydom7,
        myon1, myon2, myon3, myon4, myon5, myon6, myon7,

        //js bom
        mybom1, mybom2, mybom3, mybom4, mybom5, mybom6, mybom7, mybom8, mybom9, mybom10,
        mybom11, mybom12, mybom13, mybom14, mybom15, mybom16, mybom17, mybom18, mybom19, mybom20,
        mybom21, mybom22, mybom23, mybom24, mybom25, mybom26, mybom27, mybom28, mybom29, mybom30,
        mybom31, mybom32,
        
        //myaccounts
        myface, mytwitter, mylinked, mygoogle,

       
        
    ]
    for(i = 0; i< myarray.length; i++){
        myarray[i].classList.add("bot");
        console.log(myarray[i]);
        console.log(myarray[i].classList);
        myarray[i].style.color = "red";
    }

//----------------------------------------------------function of data--------------------------------------

var mydata = [
    my4ht1d, my4ht2d, my4ht3d, my4ht4d, my4ht5d, my4ht6d, my4ht7d, my4ht8d, my4ht9d, my4ht10d,
    my4ht11d, my4ht12d, my4ht13d, my4ht14d, my4ht15d, my4ht16d,
    
    //css
    mycss1d, mycss2d,mycss3d,mycss4d,mycss5d,mycss6d,mycss7d,mycss8d,mycss9d,mycss10d,mycss11d,
    mycss12d,
    
    //js
    mydom1d, mydom2d,
]

function delet(){
    for(d = 0; d < mydata.length; d++){
        mydata[d].classList.remove("show");
        console.log(mydata[d]);
        
    }
}


myface.onclick = function (){
    "use strict";
    
}